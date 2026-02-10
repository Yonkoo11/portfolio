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
  "faktory": {
    title: "Faktory Protocol",
    description: "Invoice yield optimization platform. Freelancers mint NFTs for unpaid invoices and earn 3.5-7% APY while waiting.",
    tech: ["Next.js", "Solidity", "Mantle", "wagmi"],
    order: 2,
    featured: true,
    live: "https://faktory-app.vercel.app",
    cvDescription: "Invoice yield optimization platform enabling freelancers to mint NFTs representing unpaid invoices and earn 3.5-7% APY while awaiting payment. Built on Mantle for low-cost transactions and fast finality.",
  },
  "flashbets": {
    title: "FlashBets",
    description: "60-second BTC prediction markets with dynamic odds and instant settlement on Linera microchains.",
    tech: ["Rust", "Linera", "GraphQL", "React"],
    order: 3,
    live: null,
    cvDescription: "60-second BTC prediction markets with dynamic odds engine and instant settlement. Leverages Linera microchains for sub-second finality and horizontal scalability.",
  },
  "last-rally": {
    title: "Last Rally",
    description: "On-chain Pong with NFT paddles and tournament betting. Arcade gaming meets DeFi on Avalanche.",
    tech: ["React", "Solidity", "Avalanche", "RainbowKit"],
    order: 4,
    live: "https://last-rally.vercel.app",
    cvDescription: "On-chain arcade gaming with NFT paddles and tournament betting pools. Classic Pong mechanics meet DeFi primitives on Avalanche C-Chain.",
  },
};
