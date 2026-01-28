import { Metadata } from 'next';
import IOSSdkLayout from '@/components/WebsiteDevServiceDetail/iOSSdkLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/ios-sdk-app-development`;

    try {
        const res = await fetch(url, { cache: 'no-store' });
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
            title: 'iOS SDK App Development | Prism Infoways',
            description: 'Transform Business Logic into Intelligent Digital Assets with enterprise-grade iOS solutions using Swift & SwiftUI.',
            keywords: ['iOS SDK Development', 'Swift SDK', 'Custom iOS SDK', 'Mobile SDK Architecture'],
        };
    }

    return {
        title: seo.title || 'iOS SDK App Development | Prism Infoways',
        description: seo.description || 'Transform Business Logic into Intelligent Digital Assets with enterprise-grade iOS solutions.',
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

export default function Page() {
    return <IOSSdkLayout />;
}
