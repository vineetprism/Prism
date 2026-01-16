import React from 'react';
import { Metadata } from 'next';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';
import CorporateDXPLayout from '@/components/WebsiteDevServiceDetail/CorporateDXPLayout';

export const metadata: Metadata = {
    title: 'Corporate Digital Experience Platforms (DXP) | Prism Infoways',
    description: 'Build the central nervous system of your digital enterprise. We engineer AI-native, cloud-resilient corporate platforms designed to eliminate legacy debt and drive exceptional ROI.',
    keywords: [
        "Corporate DXP",
        "Digital Experience Platform",
        "Enterprise Website Development",
        "AI-Native Development",
        "Legacy Modernization",
        "Cloud-Native Infrastructure",
        "DevSecOps",
        "Prism Infoways"
    ]
};

export default function CorporateWebsiteDevPage() {
    const service = WEBSITE_DEV_SOLUTIONS_DATA['corporate-website-development'];

    if (!service) {
        return <div className="p-10 text-center">Service Data Not Found</div>;
    }

    return <CorporateDXPLayout service={service} />;
}
