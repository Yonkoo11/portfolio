export interface ProjectOverride {
  title?: string;
  description?: string;
  tech?: string[];
  order?: number;
  live?: string | null;
  featured?: boolean;
  cvDescription?: string;
}

export const overrides: Record<string, ProjectOverride> = {
  "shadow-markets": {
    title: "Shadow Markets",
    description: "Private prediction markets on Solana using zero-knowledge proofs. Noir circuits, Groth16 verification, browser proving.",
    tech: ["Noir", "Anchor", "Solana", "Groth16"],
    order: 1,
    featured: true,
    live: "https://yonkoo11.github.io/shadow-markets/",
    cvDescription: "Private prediction markets leveraging zero-knowledge proofs for vote privacy. Implemented Noir circuits for anonymous voting, Groth16 on-chain verification, and browser-based proof generation. Users can participate in markets without revealing their positions.",
  },
  "the-patron": {
    title: "The Patron",
    description: "Autonomous AI agent that discovers Base builders and sends them ETH micro-grants. No human in the loop.",
    tech: ["TypeScript", "Solidity", "Base", "AI Agent"],
    order: 2,
    featured: true,
    live: "https://yonkoo11.github.io/the-patron/",
    cvDescription: "Autonomous grant-giving AI agent on Base L2. Discovers early-stage builders via on-chain activity analysis, evaluates project potential, and distributes ETH micro-grants without human intervention.",
  },
  "vibe-auditor": {
    title: "Vibe Auditor",
    description: "Claude Code plugin that audits AI-generated code for security vulnerabilities and auto-fixes them.",
    tech: ["TypeScript", "Claude API", "AST", "Security"],
    order: 3,
    featured: true,
    live: "https://yonkoo11.github.io/vibe-auditor/",
    cvDescription: "Security auditing plugin for Claude Code. Scans AI-generated codebases for SQL injection, XSS, hardcoded secrets, and missing auth, then generates fixes and regression tests automatically.",
  },
  "faktory": {
    title: "Faktory Protocol",
    description: "Invoice yield optimization platform. Freelancers mint NFTs for unpaid invoices and earn 3.5-7% APY while waiting.",
    tech: ["Next.js", "Solidity", "Mantle", "wagmi"],
    order: 4,
    featured: true,
    live: "https://yonkoo11.github.io/faktory/",
    cvDescription: "Invoice yield optimization platform enabling freelancers to mint NFTs representing unpaid invoices and earn 3.5-7% APY while awaiting payment. Built on Mantle for low-cost transactions and fast finality.",
  },
  "anchor-selfcare": {
    title: "ANCHOR",
    description: "Evidence-based self-care guide. Breathing exercises, grounding techniques, daily wellness. No tracking, no judgment.",
    tech: ["Next.js", "Tailwind CSS", "PWA"],
    order: 5,
    featured: true,
    live: "https://yonkoo11.github.io/anchor-selfcare/",
    cvDescription: "Self-care PWA built on evidence-based practices from neuroscience and trauma-informed care. Features guided breathing with audio cues, grounding techniques, daily baseline tracking, and movement guides. No accounts, no data collection, free forever.",
  },
  "flashbets": {
    title: "FlashBets",
    description: "60-second BTC prediction markets with dynamic odds and instant settlement on Linera microchains.",
    tech: ["Rust", "Linera", "GraphQL", "React"],
    order: 6,
    live: null,
    cvDescription: "60-second BTC prediction markets with dynamic odds engine and instant settlement. Leverages Linera microchains for sub-second finality and horizontal scalability.",
  },
  "dagpulse": {
    title: "DAGPulse",
    description: "Real-time Kaspa blockchain visualizer. Watch blocks, transactions, and DAG structure live.",
    tech: ["Svelte", "WebSocket", "Kaspa", "D3.js"],
    order: 7,
    live: "https://yonkoo11.github.io/dagpulse/",
    cvDescription: "Real-time visualization dashboard for the Kaspa blockchain DAG. Streams live blocks and transactions via WebSocket, renders DAG topology, and displays network health metrics.",
  },
  "kaspa-pos": {
    title: "Kaspa POS",
    description: "Instant crypto payments for merchants. Point-of-sale terminal powered by Kaspa's 1-second block times.",
    tech: ["Svelte", "Kaspa", "QR", "WebSocket"],
    order: 8,
    live: "https://yonkoo11.github.io/kaspa-pos/",
    cvDescription: "Merchant point-of-sale application for accepting Kaspa cryptocurrency payments. Features QR code generation, real-time payment confirmation via WebSocket, and transaction history.",
  },
  "last-rally": {
    title: "Last Rally",
    description: "On-chain Pong with NFT paddles and tournament betting. Arcade gaming meets DeFi on Avalanche.",
    tech: ["React", "Solidity", "Avalanche", "RainbowKit"],
    order: 9,
    live: "https://yonkoo11.github.io/last-rally/",
    cvDescription: "On-chain arcade gaming with NFT paddles and tournament betting pools. Classic Pong mechanics meet DeFi primitives on Avalanche C-Chain.",
  },
};
