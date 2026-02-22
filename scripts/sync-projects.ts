import { overrides } from "../data/overrides";
import { writeFileSync, existsSync } from "fs";
import { join } from "path";

const GITHUB_USER = "Yonkoo11";
const TOPIC = "portfolio";
const OUTPUT = join(__dirname, "..", "data", "projects.json");

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
  language: string | null;
}

function titleCase(name: string): string {
  return name
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function enrichRepo(repo: GitHubRepo) {
  const override = overrides[repo.name] || {};
  return {
    name: repo.name,
    title: override.title || titleCase(repo.name),
    description: override.description || repo.description || "",
    tech: override.tech || [repo.language].filter(Boolean),
    github: repo.html_url,
    live: override.live !== undefined ? override.live : repo.homepage || null,
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
    order: override.order ?? 99,
    featured: override.featured ?? false,
    badge: override.badge || undefined,
    cvDescription:
      override.cvDescription || override.description || repo.description || "",
  };
}

async function fetchPortfolioRepos(): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/search/repositories?q=user:${GITHUB_USER}+topic:${TOPIC}&sort=updated&per_page=30`;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error(`GitHub API returned ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  return data.items;
}

async function main() {
  let projects;

  try {
    const repos = await fetchPortfolioRepos();
    const repoNames = new Set(repos.map((r) => r.name));
    const enriched = repos.map(enrichRepo);

    // Inject override-only projects (no GitHub repo needed)
    for (const [name, override] of Object.entries(overrides)) {
      if (!repoNames.has(name) && override.title) {
        enriched.push({
          name,
          title: override.title,
          description: override.description || "",
          tech: override.tech || [],
          github: `https://github.com/${GITHUB_USER}`,
          live: override.live !== undefined ? override.live : null,
          stars: 0,
          updatedAt: new Date().toISOString(),
          order: override.order ?? 99,
          featured: override.featured ?? false,
          badge: override.badge || undefined,
          cvDescription: override.cvDescription || override.description || "",
        });
      }
    }

    projects = enriched.sort((a, b) => a.order - b.order);
    console.log(`Synced ${projects.length} portfolio projects from GitHub`);
  } catch (err) {
    console.warn(`GitHub API failed: ${err}. Falling back to cached data.`);

    if (existsSync(OUTPUT)) {
      console.log("Using cached projects.json");
      return;
    }
    throw new Error("No cached data and API failed. Cannot build.");
  }

  const output = {
    lastUpdated: new Date().toISOString(),
    projects,
  };

  writeFileSync(OUTPUT, JSON.stringify(output, null, 2) + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
