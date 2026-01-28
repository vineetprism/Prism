// app/sitemap.ts
import { MetadataRoute } from "next";

const SITE_URL = process.env.SITE_URL || "https://prisminfoways.com";

type Service = { slug: string; updated_at?: string | null };
type Portfolio = { slug: string; updated_at?: string | null };
type Post = { slug: string; updated_at?: string | null };

type ApiResponse<T> = T[] | { data: T[] } | null;

async function fetchJson<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, { cache: 'no-store' }); // Disable caching as requested
    if (!res.ok) return null;
    return (await res.json()) as ApiResponse<T>;
  } catch (err) {
    console.warn("Sitemap fetch warning for", url, (err as Error).message);
    // Return null so we just skip dynamic routes instead of failing the build
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

    // --- Cybersecurity Services ---
    { url: `${SITE_URL}/service_details/cybersecurity/cybersecurity-risk-assessment-services`, lastModified: now },
    { url: `${SITE_URL}/service_details/cybersecurity/managed-cybersecurity-services`, lastModified: now },
    { url: `${SITE_URL}/service_details/cybersecurity/virtual-ciso-services-solutions`, lastModified: now },

    // --- App Development Services ---
    { url: `${SITE_URL}/service_details/app-development/android-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/android-sdk-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/flutter-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/gaming-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/ios-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/ios-sdk-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/mobile-app-design`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/react-native-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/swift-app-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/app-development/xamarin-app-development`, lastModified: now },

    // --- Website Development Services ---
    { url: `${SITE_URL}/service_details/website-development/cms-website-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/website-development/corporate-website-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/website-development/dynamic-website-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/website-development/php-website-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/website-development/shopify-website-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/website-development/static-website-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/website-development/travel-website-development`, lastModified: now },
    { url: `${SITE_URL}/service_details/website-development/website-re-development`, lastModified: now },
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
