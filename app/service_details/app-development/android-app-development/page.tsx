
import React from 'react';
import { Metadata } from 'next';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';
import AndroidAppLayout from '@/components/WebsiteDevServiceDetail/AndroidAppLayout';

// Force static rendering for this page if desired, or keep it dynamic
// export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Enterprise Android App Development | Prism Infoways',
    description: 'Expert Android App Development Services using Kotlin, Java, and Flutter. Secure, scalable, and AI-ready mobile solutions for enterprises.',
    keywords: ['Android App Development', 'Kotlin Development', 'Enterprise Mobile Apps', 'Android App Design'],
};

const Page = () => {
    // Direct access to data since we know the slug
    const serviceData = WEBSITE_DEV_SOLUTIONS_DATA['android-app-development'];

    if (!serviceData) {
        return <div>Service not found</div>;
    }

    return (
        <AndroidAppLayout service={serviceData} />
    );
};

export default Page;
