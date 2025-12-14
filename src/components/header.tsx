"use client";

import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="w-full flex h-14 items-center justify-between px-4 md:px-8">
        <div className="font-bold text-lg tracking-tight">POOYA.</div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
}
