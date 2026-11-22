import type { MetadataRoute } from "next";
import { posts } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://crown-and-grove.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/blog", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const articles = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articles];
}
