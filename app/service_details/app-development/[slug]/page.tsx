import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';
import DetailLayout from '@/components/WebsiteDevServiceDetail/DetailLayout';

// Get all App Development slugs for static generation
export async function generateStaticParams() {
    // Exclude hardcoded slugs
    const hardcodedSlugs = ['android-app-development'];

    const appDevSlugs = Object.keys(WEBSITE_DEV_SOLUTIONS_DATA).filter(
        slug =>
            WEBSITE_DEV_SOLUTIONS_DATA[slug].category === 'AppDevelopment' &&
            !hardcodedSlugs.includes(slug)
    );
    return appDevSlugs.map(slug => ({ slug }));
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = WEBSITE_DEV_SOLUTIONS_DATA[slug];

    if (!service || service.category !== 'AppDevelopment') {
        return { title: 'Service Not Found' };
    }

    return {
        title: `${service.title} | Prism Infoways`,
        description: service.description.replace(/<[^>]*>?/gm, '').substring(0, 160),
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
