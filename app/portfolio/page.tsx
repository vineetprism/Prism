import PortfolioHeroSection from '@/components/Portfolio/HeroPortfolio'
import PortfolioSection from '@/components/Portfolio/Portfolio'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Work Portfolio – Prism Infoways Latest Projects & Case Studies',
    description: 'Explore Prism Infoways Portfolio to discover our latest projects and case studies, showcasing our expertise in software development, digital marketing, and more.',
    keywords: [
        "Prism Infoways portfolio",
        "IT company projects and case studies",
        "Software development portfolio",
        "Digital marketing case studies",
        "Latest technology portfolio",
        "IT industry projects",
        "Prism Infoways latest projects",
        "IT company projects",
        "Software development portfolio updates",
        "Digital marketing case studies updates"
    ]
}

export const dynamic = 'force-dynamic';

async function safeFetch(url: string) {
    try {
        const res = await fetch(url, { next: { revalidate: 86400 } });
        if (!res.ok) {
            console.error('Fetch error', url, res.status);
            return null;
        }
        return await res.json();
    } catch (err) {
        console.error('Fetch exception', url, err);
        return null;
    }
}

const base = process.env.NEXT_PUBLIC_API_BASE || '';

const portfoliosUrl = base + '/api/portfolios';

const portfoliosData = await safeFetch(portfoliosUrl);

const portfolios = Array.isArray(portfoliosData) ? portfoliosData : portfoliosData?.data ?? [];

const Page = async () => {
    return (
        <>
            <PortfolioHeroSection />
            <PortfolioSection portfolios={portfolios} />
        </>
    )
}

export default Page