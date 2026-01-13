// app/sitemap.ts
import { MetadataRoute } from "next";

const SITE_URL = process.env.SITE_URL || "https://prisminfoways.com";

type Service = { slug: string; updated_at?: string | null };
type Portfolio = { slug: string; updated_at?: string | null };
type Post = { slug: string; updated_at?: string | null };

type ApiResponse<T> = T[] | { data: T[] } | null;

async function fetchJson<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return (await res.json()) as ApiResponse<T>;
  } catch (err) {
    console.error("fetch error for", url, (err as Error).message);
    return null;
  }
}

function extractArray<T>(value: ApiResponse<T>): T[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "object" && value !== null && "data" in value) {
    const maybe = (value as { data: unknown }).data;
    return Array.isArray(maybe) ? (maybe as T[]) : [];
  }
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  console.log("Generating sitemap...");

  const [servicesResp, portfoliosResp, postsResp] = await Promise.all([
    fetchJson<Service>("https://admin.prisminfoways.com/api/services"),
    fetchJson<Portfolio>("https://admin.prisminfoways.com/api/portfolios"),
    fetchJson<Post>("https://admin.prisminfoways.com/api/posts"),
  ]);

  const services = extractArray<Service>(servicesResp);
  const portfolios = extractArray<Portfolio>(portfoliosResp);
  const posts = extractArray<Post>(postsResp);

  const now = new Date();

  // Use MetadataRoute.Sitemap directly for these arrays
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now },
    { url: `${SITE_URL}/about`, lastModified: now },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now },
    { url: `${SITE_URL}/terms`, lastModified: now },
    { url: `${SITE_URL}/contact`, lastModified: now },
    { url: `${SITE_URL}/gdpr`, lastModified: now },
    { url: `${SITE_URL}/portfolio`, lastModified: now },
    { url: `${SITE_URL}/service`, lastModified: now },
    { url: `${SITE_URL}/blog`, lastModified: now },
    { url: `${SITE_URL}/career`, lastModified: now },
  ];

  const dynamicPages: MetadataRoute.Sitemap = [
    ...services.map((s) => ({
      url: `${SITE_URL}/service_details/${s.slug}`,
      lastModified: s.updated_at ? new Date(s.updated_at) : now,
    })),
    ...portfolios.map((p) => ({
      url: `${SITE_URL}/portfolio/${p.slug}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : now,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/posts/${p.slug}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : now,
    })),
  ];

  console.log("Sitemap counts:", { static: staticPages.length, dynamic: dynamicPages.length });

  return [...staticPages, ...dynamicPages];
}
