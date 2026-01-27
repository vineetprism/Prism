import { Metadata } from 'next';
import XamarinMauiLayout from '@/components/WebsiteDevServiceDetail/XamarinMauiLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/xamarin-app-development`;

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
            title: 'Xamarin to .NET MAUI Migration & Enterprise Mobility | Prism Infoways',
            description: 'Xamarin EOL migration experts. Transform legacy Xamarin.Forms apps into high-performance .NET MAUI powerhouses. Blazor Hybrid, Azure integration, compliance-ready.',
            keywords: ['Xamarin Migration', '.NET MAUI', 'Blazor Hybrid', 'Xamarin EOL', 'Mobile App Migration', 'Enterprise Mobility', 'Azure', 'Cross-Platform', 'Prism Infoways'],
        };
    }

    return {
        title: seo.title || 'Xamarin to .NET MAUI Migration & Enterprise Mobility | Prism Infoways',
        description: seo.description || 'Xamarin EOL migration experts. Transform legacy Xamarin.Forms apps into high-performance .NET MAUI powerhouses.',
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

export default function XamarinAppDevelopmentPage() {
    return <XamarinMauiLayout />;
}
