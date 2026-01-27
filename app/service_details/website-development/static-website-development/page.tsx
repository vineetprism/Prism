import { Metadata } from 'next';
import StaticWebDevLayout from '@/components/WebsiteDevServiceDetail/StaticWebDevLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/static-website-development`;

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

    // Fallback if API fails
    if (!response?.data) {
        return {
            title: 'Static Website Development | Prism Infoways',
            description: 'Immutable architectures engineered for the speed of now. We replace infrastructure complexity with architectural elegance.',
        };
    }

    return {
        title: seo.title || 'Static Website Development | Prism Infoways',
        description: seo.description || 'Immutable architectures engineered for the speed of now.',
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

export default function StaticWebsiteDevPage() {
    return <StaticWebDevLayout />;
}
