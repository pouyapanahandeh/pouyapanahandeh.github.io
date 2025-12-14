import { resumeData } from "@/data/resume";
import {
  InteractableNode,
  ExperienceDetails,
  ProjectDetails,
  EducationDetails,
} from "./InteractableNode";

export class LevelManager {
  nodes: InteractableNode[] = [];

  constructor() {
    this.initializeNodes();
  }

  initializeNodes() {
    let startX = 200;
    const startY = 300;
    const spacing = 150;

    // Experience Nodes
    resumeData.experience.forEach((exp, index) => {
      this.nodes.push(
        new InteractableNode(
          startX + index * spacing,
          startY,
          exp.company,
          "#3b82f6", // Blue
          {
            title: exp.company,
            type: "experience",
            description: exp.role,
            details: exp as unknown as ExperienceDetails,
          }
        )
      );
    });

    // Project Nodes
    startX = 200; // Reset or offset
    const projectY = 500;
    resumeData.projects.forEach((proj, index) => {
      this.nodes.push(
        new InteractableNode(
          startX + index * spacing,
          projectY,
          proj.name,
          "#10b981", // Green
          {
            title: proj.name,
            type: "project",
            description: proj.description,
            details: proj as unknown as ProjectDetails,
          }
        )
      );
    });

    // Education Nodes
    startX = 200;
    const eduY = 100;
    resumeData.education.forEach((edu, index) => {
      this.nodes.push(
        new InteractableNode(
          startX + index * spacing,
          eduY,
          edu.school,
          "#f59e0b", // Amber
          {
            title: edu.school,
            type: "education",
            description: edu.degree,
            details: edu as unknown as EducationDetails,
          }
        )
      );
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.nodes.forEach((node) => node.draw(ctx));
  }

  checkCollisions(
    px: number,
    py: number,
    radius: number
  ): InteractableNode | null {
    for (const node of this.nodes) {
      if (node.isColliding(px, py, radius)) {
        return node;
      }
    }
    return null;
  }
}
