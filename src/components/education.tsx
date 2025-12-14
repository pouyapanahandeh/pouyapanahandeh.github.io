"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export function EducationAndHackathons() {
  return (
    <section
      className="py-20 px-4 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      id="education"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-lg text-foreground/80">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Hackathons</h2>
        <ul className="space-y-4">
          {resumeData.hackathons.map((hackathon, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
              <p className="text-muted-foreground">{hackathon}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
