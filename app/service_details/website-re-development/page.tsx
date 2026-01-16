import { Metadata } from 'next';
import RedevelopmentLayout from '@/components/WebsiteDevServiceDetail/RedevelopmentLayout';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';

export const metadata: Metadata = {
    title: 'Website Re-development | Application Modernization | Prism Infoways',
    description: 'Transform your legacy monolithic website into a scalable, AI-ready Digital Core. Zero-downtime modernization using Strangler Fig Pattern.',
};

export default function WebsiteRedevelopmentPage() {
    const service = WEBSITE_DEV_SOLUTIONS_DATA['website-re-development'];

    return <RedevelopmentLayout service={service} />;
}
