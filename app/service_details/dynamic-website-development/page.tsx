import { Metadata } from 'next';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';
import DynamicWebsiteLayout from '@/components/WebsiteDevServiceDetail/DynamicWebsiteLayout';

export const metadata: Metadata = {
    title: 'Dynamic Website Development | Prism Infoways',
    description: 'Engineer your digital revenue engine with mission-critical, cloud-native web applications that drive 748% ROI. From composable architecture to AI-infused experiences.',
    keywords: 'dynamic website development, web application development, React development, Next.js, cloud-native, API integration, enterprise web solutions',
};

export default function DynamicWebsiteDevPage() {
    const service = WEBSITE_DEV_SOLUTIONS_DATA['dynamic-website-development'];
    return <DynamicWebsiteLayout service={service} />;
}
