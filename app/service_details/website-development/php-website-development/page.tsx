import { Metadata } from 'next';
import PHPWebsiteLayout from '@/components/WebsiteDevServiceDetail/PHPWebsiteLayout';

export const dynamic = 'force-dynamic';

async function getSeoData() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services-seo/php-website-development`;

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
            title: 'PHP Website Development | Enterprise PHP Solutions | Prism Infoways',
            description: 'Engineer high-performance platforms with modern enterprise PHP. Cloud-native architectures handling 50,000+ concurrent users with 45% greater cost efficiency.',
            keywords: 'PHP development, Laravel, Symfony, enterprise PHP, PHP modernization, cloud-native PHP, PHP 8.3',
        };
    }

    return {
        title: seo.title || 'PHP Website Development | Enterprise PHP Solutions | Prism Infoways',
        description: seo.description || 'Engineer high-performance platforms with modern enterprise PHP.',
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

export default function PHPWebsiteDevPage() {
    return <PHPWebsiteLayout />;
}
