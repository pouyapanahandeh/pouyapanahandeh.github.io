"use client";

import { resumeData } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section className="py-20 px-4 max-w-screen-2xl mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center md:text-left">
          Core Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(resumeData.skills).map(
            ([category, skills], index) => (
              <motion.div
                key={category}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
