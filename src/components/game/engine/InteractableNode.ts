export interface ExperienceDetails {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface ProjectDetails {
  name: string;
  description: string;
  url?: string;
}

export interface EducationDetails {
  school: string;
  degree: string;
  period: string;
}

export type InteractableDetails =
  | ExperienceDetails
  | ProjectDetails
  | EducationDetails;

export interface InteractableData {
  title: string;
  type: "experience" | "project" | "skill" | "education";
  description?: string;
  details?: InteractableDetails;
}

export class InteractableNode {
  x: number;
  y: number;
  width: number;
  height: number;
  data: InteractableData;
  color: string;
  label: string;

  constructor(
    x: number,
    y: number,
    label: string,
    color: string,
    data: InteractableData
  ) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.label = label;
    this.color = color;
    this.data = data;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw base
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // Draw label
    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(this.label, this.x + this.width / 2, this.y - 10);

    // Glow
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.shadowBlur = 0;
  }

  isColliding(px: number, py: number, radius: number): boolean {
    // Circle-Rectangle collision
    const testX = Math.max(this.x, Math.min(px, this.x + this.width));
    const testY = Math.max(this.y, Math.min(py, this.y + this.height));
    const distX = px - testX;
    const distY = py - testY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    return distance < radius;
  }
}
