import { unstable_cache } from "next/cache";

import { GitHubStars } from "@/components/github-stars";
import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";

const getStargazerCount = unstable_cache(
  async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );

      if (!response.ok) {
        return 0;
      }

      // Use .text() then JSON.parse() to avoid streaming transform issues in Node.js 25.x
      const text = await response.text();
      const json = JSON.parse(text) as { stargazers_count?: number };
      return Number(json?.stargazers_count) || 0;
    } catch {
      return 0;
    }
  },
  ["github-stargazer-count"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
);

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount();

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  );
}
