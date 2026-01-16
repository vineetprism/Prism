import { Metadata } from 'next';
import CMSWebsiteLayout from '@/components/WebsiteDevServiceDetail/CMSWebsiteLayout';
import { WEBSITE_DEV_SOLUTIONS_DATA } from '@/data/websiteDevSolutions';

export const metadata: Metadata = {
    title: 'Enterprise CMS & DXP Solutions | Prism Infoways',
    description: 'Architecting intelligent, composable digital experiences. AI-integrated, headless CMS architectures that drive 83% faster time-to-market.',
};

export default function CMSWebsiteDevelopmentPage() {
    const service = WEBSITE_DEV_SOLUTIONS_DATA['static-website-development'];

    return <CMSWebsiteLayout service={service} />;
}
