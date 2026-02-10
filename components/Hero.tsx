"use client";

import { motion } from "framer-motion";
import { projects, profile, contact } from "@/data";

const featured = projects.filter((p) => p.featured).slice(0, 2);

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
        {/* Left: Content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-6">
            Full-Stack Web3 Engineer
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
            Building the
            <span className="block text-accent">future of finance.</span>
          </h1>

          <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-md">
            I craft DeFi protocols, prediction markets, and zero-knowledge
            systems. From smart contracts to polished frontends.
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="btn-primary">
              View Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right: Floating cards */}
        <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              className={`card absolute p-6 ${i === 0 ? "top-0 right-0 w-72" : "bottom-12 left-0 w-80"}`}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: i === 0 ? 3 : -2 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p className="label-small mb-3">{project.live ? "Live Project" : "Featured"}</p>
              <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted mb-4">
                {project.description.length > 80 ? project.description.slice(0, 77) + "..." : project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
