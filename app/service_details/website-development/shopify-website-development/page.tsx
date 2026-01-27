import { Metadata } from 'next';
import ShopifyEnterpriseLayout from '@/components/WebsiteDevServiceDetail/ShopifyEnterpriseLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/shopify-website-development`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (!res.ok) return null;
        return await res.json();
    } catch (error) {
        console.error('Error fetching SEO data:', error);
        return null;
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const response = await getSeoData();
    const seo = response?.data?.meta || {};
    const og = response?.data?.open_graph || {};
    const twitter = response?.data?.twitter_card || {};

    if (!response?.data) {
        return {
            title: 'Enterprise Shopify Development | Shopify Plus Partner | Prism Infoways',
            description: 'Turn commerce complexity into revenue at scale. We engineer composable, high-performance Shopify Plus ecosystems with 99.99% uptime and measurable TCO reduction.',
            keywords: ['shopify plus development', 'enterprise shopify', 'shopify migration', 'headless commerce', 'hydrogen', 'ERP integration'],
        };
    }

    return {
        title: seo.title || 'Enterprise Shopify Development | Prism Infoways',
        description: seo.description || 'Turn commerce complexity into revenue at scale.',
        keywords: seo.keywords ? seo.keywords.split(',').map((k: string) => k.trim()) : [],
        openGraph: {
            title: og.og_title || seo.title,
            description: og.og_description || seo.description,
            url: og.og_url,
            type: og.og_type || 'website',
            images: og.og_image ? [{ url: og.og_image }] : [],
        },
        twitter: {
            card: twitter.twitter_card || 'summary_large_image',
            title: twitter.twitter_title || seo.title,
            description: twitter.twitter_description || seo.description,
            images: twitter.twitter_image ? [twitter.twitter_image] : [],
        },
        alternates: {
            canonical: seo.canonical_url,
        }
    };
}

export default function ShopifyEnterprisePage() {
    return <ShopifyEnterpriseLayout />;
}
