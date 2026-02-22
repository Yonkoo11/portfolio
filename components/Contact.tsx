"use client";

import { motion } from "framer-motion";
import { contact, profile } from "@/data";

const links = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "X", href: contact.x },
  { label: "Telegram", href: contact.telegram },
  { label: "Email", href: `mailto:${contact.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-text-muted text-lg mb-12 max-w-md mx-auto">
            Open to remote opportunities in Web3.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-24 text-center text-text-muted text-sm border-t border-border pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      </motion.div>
    </section>
  );
}
