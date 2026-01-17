import { Metadata } from 'next';
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
    return <CorporateDXPLayout />;
}
