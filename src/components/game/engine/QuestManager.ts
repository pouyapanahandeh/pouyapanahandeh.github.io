// import { InteractableNode } from "./InteractableNode";

export class QuestManager {
  visitedNodes: Set<string>;
  totalNodes: number;

  constructor(totalNodes: number) {
    this.visitedNodes = new Set();
    this.totalNodes = totalNodes;
  }

  visit(nodeLabel: string): boolean {
    if (!this.visitedNodes.has(nodeLabel)) {
      this.visitedNodes.add(nodeLabel);
      return true; // New visit
    }
    return false; // Already visited
  }

  getProgress(): string {
    return `${this.visitedNodes.size} / ${this.totalNodes}`;
  }

  isComplete(): boolean {
    return this.visitedNodes.size === this.totalNodes;
  }
}
