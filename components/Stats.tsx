"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Shipped Projects" },
  { value: "4", label: "Blockchains" },
  { value: "3", label: "Smart Contract Languages" },
  { value: "ZK", label: "Proof Systems" },
];

export default function Stats() {
  return (
    <section id="about" className="stats-strip">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-item py-12 md:py-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <p className="font-display text-4xl md:text-5xl font-bold text-text mb-2">
              {stat.value}
            </p>
            <p className="text-xs md:text-sm font-medium text-text-muted tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
