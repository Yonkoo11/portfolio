import { projects, profile, contact, skillGroups } from "@/data";
import type { Metadata } from "next";
import "./cv.css";

export const metadata: Metadata = {
  title: `${profile.name} - CV`,
};

const SKILL_ABBREVIATIONS: Record<string, string> = {
  Frontend: "React, Next.js, TS",
  "Smart Contracts": "Solidity, Rust, Noir",
  Chains: "ETH, SOL, Mantle",
  Tools: "Foundry, Anchor",
};

export default function CVPage() {
  const chainCount = new Set(
    projects.flatMap((p) => p.tech).filter((t) =>
      ["Ethereum", "Solana", "Mantle", "Linera", "Avalanche", "Base"].includes(t)
    )
  ).size;

  return (
    <div className="cv-page">
      <header className="cv-masthead">
        <p className="cv-date-line">Curriculum Vitae &mdash; {profile.cvDate}</p>
        <h1>{profile.name}</h1>
        <p className="cv-tagline">
          &ldquo;Building the future of finance, one smart contract at a time&rdquo;
        </p>
      </header>

      <nav className="cv-nav-bar">
        <a href={contact.github}>GitHub: {contact.githubHandle}</a>
        <a href={contact.x}>X: {contact.xHandle}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.telegram}>Telegram: {contact.telegramHandle}</a>
      </nav>

      <div className="cv-headline">
        <h2>
          {profile.title} Seeks
          <br />
          Remote Opportunities in DeFi
        </h2>
        <p className="cv-deck">
          Specialized in zero-knowledge proofs, prediction markets, and
          cross-chain protocols. From Solidity to Noir, Ethereum to Solana.
        </p>
      </div>

      <div className="cv-columns">
        <main className="cv-main-col">
          <h4 className="cv-section-header">Featured Projects</h4>

          {projects.map((project) => (
            <article key={project.name} className="cv-article">
              <h3>{project.title}</h3>
              <p className="cv-byline">
                {project.tech.join(" \u2022 ")}
              </p>
              <p>{project.cvDescription}</p>
            </article>
          ))}
        </main>

        <aside className="cv-sidebar">
          <h4 className="cv-section-header">At a Glance</h4>

          <div className="cv-stat-box">
            <div className="cv-number">{projects.length}+</div>
            <div className="cv-label">Shipped Projects</div>
          </div>

          <div className="cv-stat-box">
            <div className="cv-number">{chainCount}</div>
            <div className="cv-label">Blockchains</div>
          </div>

          <h4 className="cv-section-header" style={{ marginTop: "20px" }}>
            Technical Stack
          </h4>
          <ul className="cv-skill-list">
            {skillGroups.map((group) => (
              <li key={group.label}>
                <span className="cv-category">{group.label}</span>
                <span className="cv-items">
                  {SKILL_ABBREVIATIONS[group.label] || group.skills.slice(0, 3).join(", ")}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <footer className="cv-contact-footer">
        <span>Portfolio: yonkoo11.github.io/portfolio</span>
        <span className="cv-status">{profile.status}</span>
      </footer>
    </div>
  );
}
