"use client";

import { resumeData } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gamepad2, FileDown } from "lucide-react";

export function Hero({ onStartGame }: { onStartGame?: () => void }) {
  return (
    <section className="py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Available for new opportunities
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 pb-4">
          {resumeData.name}
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-2xl mx-auto font-light tracking-wide">
          {resumeData.title}
        </p>
        <p className="max-w-[800px] text-muted-foreground md:text-lg mx-auto">
          Based in 📍 {resumeData.location}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        <Button className="gap-2" asChild>
          <a href={`mailto:${resumeData.email}`}>Contact Me</a>
        </Button>
        <Button variant="outline" className="gap-2">
          <FileDown className="h-4 w-4" /> Download Resume
        </Button>
        {onStartGame && (
          <Button variant="secondary" className="gap-2" onClick={onStartGame}>
            <Gamepad2 className="h-4 w-4" /> Interactive Mode
          </Button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-12 text-sm text-muted-foreground max-w-2xl mx-auto"
      >
        {resumeData.bio}
      </motion.div>
    </section>
  );
}
