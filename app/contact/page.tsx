import ContactUsPage from '@/components/Contact/Contact'
import ContactHeroSection from '@/components/Contact/ContactHero'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Contact Prism Infoways – Connect With Our IT & Software Development Team',
    description: 'Get in touch with Prism Infoways for web development, software solutions, digital transformation, and IT services. Reach our team for project inquiries, support, or business collaboration.',
    keywords: [
        "Contact Prism Infoways",
        "IT company contact Gurugram",
        "Software development company contact",
        "Web development company India contact",
        "IT services support India",
        "Contact web development team",
        "Software company in Gurugram",
        "Prism Infoways contact number",
        "Get quote for website development",
        "IT solutions company India contact"
    ]
}

const Page = () => {
    return (
        <>
            <ContactHeroSection />
            <ContactUsPage />
        </>
    )
}

export default Page