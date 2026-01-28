import { Metadata } from 'next';
import FlutterAppDevLayout from '@/components/WebsiteDevServiceDetail/FlutterAppDevLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/flutter-app-development`;

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

    if (!response?.data) {
        return {
            title: 'Enterprise Flutter App Development | Cross-Platform Mobile Solutions | Prism Infoways',
            description: 'Deploy high-performance, secure mobile experiences for iOS and Android with a single Flutter codebase. Reduce TCO by 50% while delivering 99.9% crash-free stability.',
            keywords: 'Flutter development, cross-platform app development, Flutter enterprise apps, BLoC, Riverpod, mobile app development, iOS Android development',
        };
    }

    return {
        title: seo.title || 'Enterprise Flutter App Development | Cross-Platform Mobile Solutions | Prism Infoways',
        description: seo.description || 'Deploy high-performance, secure mobile experiences for iOS and Android.',
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

export default function FlutterAppDevelopmentPage() {
    return <FlutterAppDevLayout />;
}
