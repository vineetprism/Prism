import { Metadata } from 'next';
import VirtualCisoLayout from '@/components/VirtualCiso/VirtualCisoLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/virtual-ciso-services-solutions`;

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
            title: 'Virtual CISO Services | Prism Infoways',
            description: 'Enterprise-grade security leadership at a fraction of the cost. Get a veteran vCISO to accelerate SOC 2/ISO 27001 compliance and reduce breach risk.',
        };
    }

    return {
        title: seo.title || 'Virtual CISO Services | Prism Infoways',
        description: seo.description || 'Enterprise-grade security leadership at a fraction of the cost. Get a veteran vCISO to accelerate SOC 2/ISO 27001 compliance and reduce breach risk.',
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

export default function VirtualCisoPage() {
    return <VirtualCisoLayout />;
}
