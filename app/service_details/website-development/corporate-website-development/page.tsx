import { Metadata } from 'next';
import CorporateDXPLayout from '@/components/WebsiteDevServiceDetail/CorporateDXPLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/corporate-website-development`;

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

    // Fallback Metadata
    if (!response?.data) {
        return {
            title: 'Corporate Digital Experience Platforms (DXP) | Prism Infoways',
            description: 'Build the central nervous system of your digital enterprise. We engineer AI-native, cloud-resilient corporate platforms designed to eliminate legacy debt and drive exceptional ROI.',
            keywords: [
                "Corporate DXP",
                "Digital Experience Platform",
                "Enterprise Website Development",
                "AI-Native Development",
                "Legacy Modernization",
                "Cloud-Native Infrastructure",
                "DevSecOps",
                "Prism Infoways"
            ]
        };
    }

    return {
        title: seo.title || 'Corporate Digital Experience Platforms (DXP) | Prism Infoways',
        description: seo.description || 'Build the central nervous system of your digital enterprise.',
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

export default function CorporateWebsiteDevPage() {
    return <CorporateDXPLayout />;
}
