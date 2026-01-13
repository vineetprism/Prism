import PrivacyHeroSection from '@/components/PrivacyPolicy/HeroPrivacy'
import PrivacyPolicy from '@/components/PrivacyPolicy/Privacy'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Privacy Policy – Prism Infoways Data Protection & User Privacy',
    description: 'Read Prism Infoways Privacy Policy to understand how we collect, use, store, and protect your personal data with transparent and secure privacy practices.',
    keywords: [
        "Prism Infoways privacy policy",
        "User data privacy India",
        "Personal data protection policy",
        "IT company privacy practices",
        "Data collection and usage policy",
        "Secure data handling India",
        "Website privacy policy India",
        "User information protection",
        "Privacy compliance Prism Infoways",
        "Online privacy and data rights"
    ]

}

const Page = () => {
    return (
        <>
            <PrivacyHeroSection />
            <PrivacyPolicy />
        </>
    )
}

export default Page