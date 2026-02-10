"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div>
            <h2 className="section-title">
              Selected <span className="text-accent">Work</span>
            </h2>
            <div className="w-16 h-1 bg-accent/30 mt-4" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-accent p-8 md:p-10 flex flex-col cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <span className="font-display text-6xl font-bold text-border leading-none mb-6">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-text-muted leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <span className="link-arrow">
                {project.live ? "View Project" : "View Code"}
                <span>&rarr;</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
