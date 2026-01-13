import React from 'react';
import ServicesDetailsHeroSection from '@/components/ServiceDetails/ServicesHero';
import ServiceDetailsSection from '@/components/ServiceDetails/ServiceDetails';
import { Metadata } from 'next';

type Service = {
    id: string;
    title?: string;
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    meta_image?: string;
    description?: string;
    [k: string]: unknown;
};

// Imports for Website Development Solutions
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';
import DetailLayout from '@/components/WebsiteDevServiceDetail/DetailLayout';

async function getServices(): Promise<{ data?: Service[] }> {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/services`;
    // ... existing fetch logic
    try {
        const res = await fetch(url, { next: { revalidate: 86400 } });
        if (!res.ok) return { data: [] }; // Handle error gracefully
        return res.json() as Promise<{ data?: Service[] }>;
    } catch (e) {
        console.error("Failed to fetch services", e);
        return { data: [] };
    }
}

async function getServiceBySlug(slug: string): Promise<Service | null> {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
    const singleUrl = `${API_BASE.replace(/\/$/, '')}/api/services/${encodeURIComponent(slug)}`;
    try {
        const res = await fetch(singleUrl, { next: { revalidate: 3600 } });
        if (res.ok) {
            return (await res.json()) as Service;
        }
    } catch {
    }

    const list = await getServices();
    return list?.data?.find((s) => s.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // CHECK: Is this a Website Development Solution?
    if (WEBSITE_DEV_SOLUTIONS_DATA[slug]) {
        const service = WEBSITE_DEV_SOLUTIONS_DATA[slug];
        return {
            title: `${service.title} | Prism Infoways`,
            description: service.description.replace(/<[^>]*>?/gm, '').substring(0, 160), // Strip HTML for meta desc
            openGraph: {
                title: service.title,
                description: service.description.replace(/<[^>]*>?/gm, '').substring(0, 160),
            }
        };
    }

    // Existing Logic
    const service = await getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.meta_title,
        description: service.meta_description,
        keywords: service.meta_keywords ? service.meta_keywords.split(',').map((k) => k.trim()) : undefined,
        openGraph: {
            title: service.meta_title,
            description: service.meta_description,
            images: service.meta_image ? [service.meta_image] : [],
        },
        twitter: {
            title: service.meta_title,
            description: service.meta_description,
            images: service.meta_image ? [service.meta_image] : [],
        },
    };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // CHECK: Is this a Website Development Solution?
    if (WEBSITE_DEV_SOLUTIONS_DATA[slug]) {
        return <DetailLayout service={WEBSITE_DEV_SOLUTIONS_DATA[slug]} />;
    }

    // Existing Logic
    const response = await getServices();
    const service = response?.data?.find((s: Service) => s.slug === slug) as Service;

    // Handle generic service not found
    if (!service) {
        // You might want a 404 component here or just return null
        return <div className="p-10 text-center">Service Not Found</div>;
    }

    return (
        <>
            <ServicesDetailsHeroSection services={service} />
            <ServiceDetailsSection data={service} allServices={response?.data} />
        </>
    );
};

export default Page;
