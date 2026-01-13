import FAQSection from '@/components/About/Faq'
import AboutHeroSection from '@/components/About/HeroAbout'
import AboutSection from '@/components/About/History'
import MissionValuesSection from '@/components/About/Mission'
import WhyUsBetterSection from '@/components/About/WhyUs'
import Brand from '@/components/Home/Brand'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'About Prism Infoways – IT Solutions, Software Development & Digital Transformation',
    description: 'Learn about Prism Infoways, a technology-driven company delivering software development, IT services, digital transformation, and scalable enterprise solutions.',
    keywords: [
        "Web Development Company India",
        "Web Design Services India",
        "IT Solutions Company India",
        "Digital Transformation Services India",
        "Web Development Company in Gurugram",
        "Web Development Company in Delhi",
        "Website Designing Company in Delhi"
    ]
}

export const dynamic = 'force-dynamic';

async function safeFetch(url: string) {
    try {
        const res = await fetch(url, { next: { revalidate: 60 } });
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

const faqUrl = base + '/api/faqs';

const [faqData] = await Promise.all([
    safeFetch(faqUrl),
]);

const faqs = Array.isArray(faqData) ? faqData : faqData?.data ?? [];

const Page = () => {
    return (
        <>
            <AboutHeroSection />
            <AboutSection />
            <MissionValuesSection />
            <Brand />
            <WhyUsBetterSection />
            <FAQSection faqs={faqs} />
        </>
    )
}

export default Page;
