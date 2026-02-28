export const profile = {
  name: "Dr. Alex",
  title: "Full-Stack Web3 Engineer",
  tagline: "Building the future of finance.",
  bio: [
    "I'm a full-stack Web3 engineer who cares equally about form and function. I've built DeFi protocols, prediction markets on Linera, zero-knowledge voting systems on Solana, and on-chain arcade games on Avalanche.",
    "My work spans smart contract development (Solidity, Rust, Noir) and frontend engineering (React, Next.js, TypeScript). I won Best Crypto.com x Cronos Ecosystem Integration ($3,000) at the Cronos x402 PayTech Hackathon with Faktory, an AI-native treasury system. As part of the TruthBounty core team, we placed 2nd at the Seedify prediction markets hackathon and raised $500K.",
    "I move fast, ship quality, and build tools the crypto community actually wants to use.",
  ],
  status: "Currently accepting remote opportunities",
  cvDate: "February 2026",
} as const;

export const contact = {
  github: "https://github.com/Yonkoo11",
  linkedin: "https://www.linkedin.com/in/mustapha-fagbenro-840511187",
  telegram: "https://t.me/THaFa_11",
  x: "https://x.com/soligxbt",
  email: "alexmustapha11@gmail.com",
  githubHandle: "Yonkoo11",
  xHandle: "@soligxbt",
  telegramHandle: "@THaFa_11",
} as const;

export const skillGroups = [
  { label: "Frontend", skills: ["React", "Next.js", "Svelte", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Smart Contracts", skills: ["Solidity", "Rust", "Noir", "Foundry", "Anchor"] },
  { label: "Chains", skills: ["Ethereum", "Solana", "Base", "Cronos", "Mantle", "Kaspa", "Avalanche"] },
  { label: "Tools", skills: ["wagmi", "viem", "GraphQL", "Docker", "Git"] },
] as const;
