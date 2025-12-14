"use client";

import { useEffect, useRef, useState } from "react";
import { GameLoop } from "./engine/GameLoop";
import { Player } from "./engine/Player";
import { InputHandler } from "./engine/InputHandler";
import {
  InteractableData,
  ExperienceDetails,
  ProjectDetails,
  EducationDetails,
} from "./engine/InteractableNode";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [interactionData, setInteractionData] =
    useState<InteractableData | null>(null);
  const [questProgress, setQuestProgress] = useState("0 / 0");
  const [questCompleted, setQuestCompleted] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const inputHandler = new InputHandler();
    const player = new Player(canvas.width / 2, canvas.height / 2);

    // Callbacks for interaction (updated for Quest)
    // We need to initialize QuestManager inside loop or pass callback up.
    // For simplicity, we'll let loop handle it and callback progress.

    // Changing implementation slightly: GameLoop will own QuestManager for now.

    const callbacks = {
      onInteract: (data: InteractableData) => {
        setInteractionData(data);
      },
      onClearInteraction: () => {
        setInteractionData(null);
      },
      onProgress: (progress: string, complete: boolean) => {
        setQuestProgress(progress);
        if (complete) setQuestCompleted(true);
      },
    };

    const loop = new GameLoop(ctx, canvas, player, inputHandler, callbacks);

    loop.start();
    // setGameLoop(loop);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      loop.stop();
      inputHandler.cleanup();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background font-sans text-foreground">
      <canvas ref={canvasRef} className="block" />

      {/* HUD / Info */}
      <div className="absolute top-4 left-4 p-4 bg-card/80 backdrop-blur rounded-lg border border-border shadow-sm">
        <h2 className="text-xl font-bold">Interactive Portfolio</h2>
        <p className="text-sm text-muted-foreground">WASD / Arrows to move.</p>
        <div className="mt-2 text-sm font-semibold text-primary">
          Explored: {questProgress}
          {questCompleted && (
            <span className="ml-2 text-green-500">COMPLETE!</span>
          )}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-xs text-destructive hover:underline"
        >
          Exit Game
        </button>
      </div>

      {/* Interaction Modal */}
      {interactionData && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 animate-in slide-in-from-bottom-10 fade-in duration-300">
          <Card className="bg-card/95 backdrop-blur shadow-2xl border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">
                  {interactionData.title}
                </CardTitle>
                <Badge variant="outline" className="uppercase text-xs">
                  {interactionData.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {interactionData.description}
              </p>
              {interactionData.details && (
                <div className="text-sm space-y-2">
                  {interactionData.type === "experience" && (
                    <>
                      <p>
                        <strong>Role:</strong>{" "}
                        {(interactionData.details as ExperienceDetails).role}
                      </p>
                      <p>
                        <strong>Duration:</strong>{" "}
                        {
                          (interactionData.details as ExperienceDetails)
                            .startDate
                        }{" "}
                        -{" "}
                        {(interactionData.details as ExperienceDetails).endDate}
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2">
                        {(
                          interactionData.details as ExperienceDetails
                        ).description.map((desc: string, i: number) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {interactionData.type === "project" && (
                    <>
                      <p>
                        {
                          (interactionData.details as ProjectDetails)
                            .description
                        }
                      </p>
                      {(interactionData.details as ProjectDetails).url && (
                        <a
                          href={(interactionData.details as ProjectDetails).url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline block mt-2"
                        >
                          View Project &rarr;
                        </a>
                      )}
                    </>
                  )}

                  {interactionData.type === "education" && (
                    <>
                      <p>
                        <strong>Result:</strong>{" "}
                        {(interactionData.details as EducationDetails).degree}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(interactionData.details as EducationDetails).period}
                      </p>
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
