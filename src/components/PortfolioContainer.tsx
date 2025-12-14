"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { EducationAndHackathons } from "@/components/education";
import { Footer } from "@/components/footer";
import { GameCanvas } from "@/components/game/GameCanvas";

export function PortfolioContainer() {
  const [mode, setMode] = useState<"classic" | "game">("classic");

  if (mode === "game") {
    return (
      <>
        <GameCanvas />
        {/* Overlay button to return is handled inside GameCanvas for now, or we can add it here */}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="container mx-auto px-4 max-w-screen-2xl">
        <Hero onStartGame={() => setMode("game")} />
        <Skills />
        <Experience />
        <Projects />
        <EducationAndHackathons />
      </main>
      <Footer />
    </div>
  );
}
