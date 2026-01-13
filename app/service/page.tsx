import WhyUsBetterSection from '@/components/About/WhyUs';
import ContactUs from '@/components/Home/Contact';
import Services from '@/components/Home/Services';
import ServiceAboutSection from '@/components/Services/AboutService';
import BrandServiceSlider from '@/components/Services/Brand';
import ServiceHeroSection from '@/components/Services/HeroService';
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services – Prism Infoways Latest Services & Solutions',
    description: 'Explore Prism Infoways Services to discover our latest services and solutions, showcasing our expertise in software development, digital marketing, and more.',
    keywords: [
        "Prism Infoways services",
        "IT company services and solutions",
        "Software development services",
        "Digital marketing solutions",
        "Latest technology services",
        "IT industry services",
        "Prism Infoways latest services",
        "IT company services",
        "Software development services updates",
        "Digital marketing solutions updates"
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

const serviceUrl = base + '/api/services';

const [serviceData] = await Promise.all([
    safeFetch(serviceUrl),
]);

const services = Array.isArray(serviceData) ? serviceData : serviceData?.data ?? [];

const Page = () => {
    return (
        <>
            <ServiceHeroSection />
            <ServiceAboutSection />
            <BrandServiceSlider />
            <Services services={services} />
            <WhyUsBetterSection />
            <ContactUs />
        </>
    )
}

export default Page;
