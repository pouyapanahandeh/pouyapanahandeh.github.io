import { InputHandler } from "./InputHandler";
import { Player } from "./Player";
import { LevelManager } from "./LevelManager";
import { InteractableData, InteractableNode } from "./InteractableNode";
import { QuestManager } from "./QuestManager";

interface GameLoopCallbacks {
  onInteract: (data: InteractableData) => void;
  onClearInteraction: () => void;
  onProgress: (progress: string, complete: boolean) => void;
}

export class GameLoop {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  player: Player;
  input: InputHandler;
  level: LevelManager;
  quest: QuestManager;
  animationId: number | null;
  callbacks: GameLoopCallbacks;
  lastInteraction: InteractableNode | null = null;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    player: Player,
    input: InputHandler,
    callbacks: GameLoopCallbacks
  ) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = player;
    this.input = input;
    this.level = new LevelManager();
    this.quest = new QuestManager(this.level.nodes.length);
    this.callbacks = callbacks;
    this.animationId = null;

    // Initial progress
    this.callbacks.onProgress(
      this.quest.getProgress(),
      this.quest.isComplete()
    );
  }

  start() {
    const loop = () => {
      this.update();
      this.draw();
      this.animationId = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  update() {
    this.player.update(this.input, this.canvas.width, this.canvas.height);

    const collidingNode = this.level.checkCollisions(
      this.player.x,
      this.player.y,
      this.player.radius
    );

    if (collidingNode) {
      // Quest Logic
      if (this.quest.visit(collidingNode.label)) {
        // New visit
        this.callbacks.onProgress(
          this.quest.getProgress(),
          this.quest.isComplete()
        );
        // Visual feedback for new visit could go here
      }

      // Simple Interaction: Show when colliding for now, or require key press
      // For smoother UX, let's just show it when close
      if (this.lastInteraction !== collidingNode) {
        this.callbacks.onInteract(collidingNode.data);
        this.lastInteraction = collidingNode;
      }
    } else {
      if (this.lastInteraction) {
        this.callbacks.onClearInteraction();
        this.lastInteraction = null;
      }
    }
  }

  draw() {
    // Clear screen
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw background (grid effect)
    this.drawGrid();

    // Draw level
    this.level.draw(this.ctx);

    // Draw interaction range
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([5, 5]);
    this.ctx.arc(
      this.player.x,
      this.player.y,
      this.player.radius + 30,
      0,
      Math.PI * 2
    );
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Draw player
    this.player.draw(this.ctx);
  }

  drawGrid() {
    const gridSize = 50;
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    this.ctx.lineWidth = 1;

    for (let x = 0; x < this.canvas.width; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }

    for (let y = 0; y < this.canvas.height; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }
  }
}
