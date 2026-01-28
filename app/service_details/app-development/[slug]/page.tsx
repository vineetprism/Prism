import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';
import DetailLayout from '@/components/WebsiteDevServiceDetail/DetailLayout';

// Get all App Development slugs for static generation
export async function generateStaticParams() {
    // Exclude hardcoded slugs
    const hardcodedSlugs = [
        'android-app-development',
        'mobile-app-design',
        'swift-app-development',
        'flutter-app-development',
        'react-native-app-development',
        'gaming-app-development',
        'xamarin-app-development',
        'ios-app-development',
        'ios-sdk-app-development',
        'android-sdk-app-development'
    ];

    const appDevSlugs = Object.keys(WEBSITE_DEV_SOLUTIONS_DATA).filter(
        slug =>
            WEBSITE_DEV_SOLUTIONS_DATA[slug].category === 'AppDevelopment' &&
            !hardcodedSlugs.includes(slug)
    );
    return appDevSlugs.map(slug => ({ slug }));
}

export const dynamic = 'force-dynamic';

async function getSeoData(slug: string) {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/${slug}`;
    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return null;
        return await res.json();
    } catch (error) {
        console.error('Error fetching SEO data:', error);
        return null;
    }
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = WEBSITE_DEV_SOLUTIONS_DATA[slug];

    if (!service || service.category !== 'AppDevelopment') {
        return { title: 'Service Not Found' };
    }

    const response = await getSeoData(slug);
    const seo = response?.data?.meta || {};
    const og = response?.data?.open_graph || {};
    const twitter = response?.data?.twitter_card || {};

    // Fallback if API fails
    if (!response?.data) {
        return {
            title: `${service.title} | Prism Infoways`,
            description: service.description.replace(/<[^>]*>?/gm, '').substring(0, 160),
        };
    }

    return {
        title: seo.title || `${service.title} | Prism Infoways`,
        description: seo.description || service.description.replace(/<[^>]*>?/gm, '').substring(0, 160),
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

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const service = WEBSITE_DEV_SOLUTIONS_DATA[slug];

    // Only allow App Development category services
    if (!service || service.category !== 'AppDevelopment') {
        notFound();
    }

    return <DetailLayout service={service} />;
};

export default Page;
