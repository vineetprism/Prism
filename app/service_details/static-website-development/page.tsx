import React from 'react';
import { Metadata } from 'next';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';
import StaticWebDevLayout from '@/components/WebsiteDevServiceDetail/StaticWebDevLayout';

export const metadata: Metadata = {
    title: 'Static Website Development | Prism Infoways',
    description: 'Immutable architectures engineered for the speed of now. We replace infrastructure complexity with architectural elegance.',
};

export default function StaticWebsiteDevPage() {
    const service = WEBSITE_DEV_SOLUTIONS_DATA['static-website-development'];

    if (!service) {
        return <div className="p-10 text-center">Service Data Not Found</div>;
    }

    return <StaticWebDevLayout service={service} />;
}
