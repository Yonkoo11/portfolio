"use client";

import { motion } from "framer-motion";

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
              href="https://github.com/Yonkoo11"
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
          <motion.div
            className="card absolute top-0 right-0 w-72 p-6"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="label-small mb-3">Featured</p>
            <h3 className="font-display text-xl font-bold mb-2">Shadow Markets</h3>
            <p className="text-sm text-text-muted mb-4">
              Private prediction markets using ZK proofs on Solana
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="tag">Noir</span>
              <span className="tag">Solana</span>
              <span className="tag">ZK</span>
            </div>
          </motion.div>

          <motion.div
            className="card absolute bottom-12 left-0 w-80 p-6"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="label-small mb-3">Live Project</p>
            <h3 className="font-display text-xl font-bold mb-2">Faktory Protocol</h3>
            <p className="text-sm text-text-muted mb-4">
              Invoice yield optimization. Mint NFTs, earn 3.5-7% APY.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="tag">DeFi</span>
              <span className="tag">Mantle</span>
              <span className="tag">Solidity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
