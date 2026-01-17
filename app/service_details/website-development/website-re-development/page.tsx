import { Metadata } from 'next';
import RedevelopmentLayout from '@/components/WebsiteDevServiceDetail/RedevelopmentLayout';

export const metadata: Metadata = {
    title: 'Website Re-development | Application Modernization | Prism Infoways',
    description: 'Transform your legacy monolithic website into a scalable, AI-ready Digital Core. Zero-downtime modernization using Strangler Fig Pattern.',
};

export default function WebsiteRedevelopmentPage() {
    return <RedevelopmentLayout />;
}
