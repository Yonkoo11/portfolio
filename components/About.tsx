"use client";

import { motion } from "framer-motion";
import { profile, getStats } from "@/data";

const stats = getStats().slice(0, 3);

export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="section-title">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent/30 mt-4 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <motion.div
            className="space-y-5 text-text-muted leading-relaxed text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {profile.bio.map((paragraph, i) => (
              <p key={i} className={i === profile.bio.length - 1 ? "text-text" : undefined}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="flex md:flex-col gap-6 md:gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
