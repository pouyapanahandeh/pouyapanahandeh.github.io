import { InputHandler } from "./InputHandler";

export class Player {
  x: number;
  y: number;
  speed: number;
  radius: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.radius = 16;
    this.color = "#3b82f6"; // Blue-500
  }

  update(input: InputHandler, canvasWidth: number, canvasHeight: number) {
    if (input.isPressed("ArrowUp") || input.isPressed("KeyW")) {
      this.y -= this.speed;
    }
    if (input.isPressed("ArrowDown") || input.isPressed("KeyS")) {
      this.y += this.speed;
    }
    if (input.isPressed("ArrowLeft") || input.isPressed("KeyA")) {
      this.x -= this.speed;
    }
    if (input.isPressed("ArrowRight") || input.isPressed("KeyD")) {
      this.x += this.speed;
    }

    // Bounds checking
    this.x = Math.max(this.radius, Math.min(canvasWidth - this.radius, this.x));
    this.y = Math.max(
      this.radius,
      Math.min(canvasHeight - this.radius, this.y)
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    // Add a glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}
