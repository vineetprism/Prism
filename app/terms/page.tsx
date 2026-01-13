import TermsHeroSection from '@/components/TermsConditions/HeroTerms'
import TermsAndConditions from '@/components/TermsConditions/Terms'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Terms & Conditions – Prism Infoways Service Terms & Usage Policies',
    description: 'Review the Terms & Conditions of Prism Infoways to understand usage rules, service limitations, intellectual property rights, payment terms, and responsibilities while using our platform and services.',
    keywords: [
        "Prism Infoways terms and conditions",
        "Service terms IT company",
        "Website terms of use India",
        "IT services terms and policies",
        "Software service agreement India",
        "User responsibilities and usage rules",
        "Terms of service Prism Infoways",
        "Website usage policy India",
        "Legal terms for IT services",
        "Intellectual property terms Prism Infoways"
    ]

}

const Page = () => {
    return (
        <>
            <TermsHeroSection />
            <TermsAndConditions />
        </>
    )
}

export default Page