import React from 'react';
import PortofolioDetailsSectionFullWidth from '@/components/PortofolioDetails/PortofolioDetails';
import PortofolioDetailsHeroSection from '@/components/PortofolioDetails/PortofolioHero';
import { Metadata } from 'next';

type Portofolio = {
    id: string;
    title?: string;
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    meta_image?: string;
    [k: string]: unknown;
};

async function getPortofolioList(): Promise<{ data?: Portofolio[] } | Portofolio[] | null> {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
    const url = API_BASE ? `${API_BASE.replace(/\/$/, '')}/api/portfolios` : `/api/portfolios`;

    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error(`Failed to fetch portfolios: ${res.status}`);
    return (await res.json()) as Promise<{ data?: Portofolio[] } | Portofolio[]>;
}

async function getPortofolioBySlug(slug: string): Promise<Portofolio | null> {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
    const singleUrl = API_BASE ? `${API_BASE.replace(/\/$/, '')}/api/portfolios/${encodeURIComponent(slug)}` : `/api/portfolios/${encodeURIComponent(slug)}`;

    try {
        const res = await fetch(singleUrl, { next: { revalidate: 3600 } });
        if (res.ok) {
            return (await res.json()) as Portofolio;
        }
    } catch {
    }

    const listResp = await getPortofolioList();
    const items: Portofolio[] | undefined =
        Array.isArray(listResp) ? listResp : (listResp as { data?: Portofolio[] })?.data;

    return items ? items.find((p) => String(p.slug) === String(slug)) ?? null : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const portofolio = await getPortofolioBySlug(slug);

    if (!portofolio) {
        return {
            title: 'Portfolio Not Found',
            description: 'The requested portfolio item could not be found.',
        };
    }

    return {
        title: portofolio.meta_title,
        description: portofolio.meta_description,
        keywords:
            portofolio.meta_keywords && typeof portofolio.meta_keywords === 'string'
                ? portofolio.meta_keywords.split(',').map((k) => k.trim())
                : undefined,
        openGraph: {
            title: portofolio.meta_title,
            description: portofolio.meta_description,
            images: portofolio.meta_image ? [portofolio.meta_image] : [],
        },
        twitter: {
            title: portofolio.meta_title,
            description: portofolio.meta_description,
            images: portofolio.meta_image ? [portofolio.meta_image] : [],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const resp = await getPortofolioList();

    const items: Portofolio[] | null =
        Array.isArray(resp) ? resp : (resp as { data?: Portofolio[] })?.data ?? null;

    const portofolio: Portofolio =
        Array.isArray(items) ? (items.find((p) => String(p.slug) === String(slug)) as Portofolio) ?? ({} as Portofolio) : ({} as Portofolio);

    return (
        <>
            <PortofolioDetailsHeroSection portofolio={portofolio} />
            <PortofolioDetailsSectionFullWidth data={portofolio} />
        </>
    );
}
