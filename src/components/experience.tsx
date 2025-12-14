"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="py-20 px-4 max-w-screen-2xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center md:text-left">
          Work Experience
        </h2>
        <div className="space-y-12">
          {resumeData.experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.startDate}`}
              className="relative pl-8 border-l-2 border-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold">{job.company}</h3>
                <span className="text-sm text-muted-foreground font-medium tabular-nums">
                  {job.startDate} - {job.endDate}
                </span>
              </div>
              <p className="text-muted-foreground font-medium mb-4">
                {job.role} {job.location && `| ${job.location}`}
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
