import projectData from "./projects.json";
export { profile, contact, skillGroups } from "./config";
export { overrides } from "./overrides";

export interface Project {
  name: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  stars: number;
  updatedAt: string;
  order: number;
  featured: boolean;
  cvDescription: string;
}

export const projects: Project[] = projectData.projects;
export const lastUpdated: string = projectData.lastUpdated;

const CHAIN_NAMES = ["Ethereum", "Solana", "Mantle", "Linera", "Avalanche", "Base"];

export function getStats() {
  const allTech = projects.flatMap((p) => p.tech);
  const uniqueChains = new Set(allTech.filter((t) => CHAIN_NAMES.includes(t)));
  return [
    { value: `${projects.length}+`, label: "Shipped Projects" },
    { value: String(uniqueChains.size), label: "Blockchains" },
    { value: "3", label: "Smart Contract Languages" },
    { value: "ZK", label: "Proof Systems" },
  ];
}
