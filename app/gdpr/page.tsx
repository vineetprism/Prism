import GDPRCompliance from '@/components/GDPR/GDRP'
import GDPRHeroSection from '@/components/GDPR/HeroGDPR'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GDPR Compliance – Prism Infoways Data Protection & Privacy Standards',
    description: 'Learn how Prism Infoways follows strict GDPR compliance, protects personal data, ensures transparency, and maintains secure data processing practices for all users.',
    keywords: [
        "GDPR compliance Prism Infoways",
        "GDPR data protection India",
        "GDPR privacy policy IT company",
        "Data security and privacy standards",
        "Personal data protection GDPR",
        "GDPR compliant IT services",
        "User data rights GDPR",
        "Data processing transparency",
        "Secure data handling company India",
        "GDPR policy Prism Infoways"
    ]
}

const Page = () => {
    return (
        <>
            <GDPRHeroSection />
            <GDPRCompliance />
        </>
    )
}

export default Page