import { Metadata } from 'next';
import StaticWebDevLayout from '@/components/WebsiteDevServiceDetail/StaticWebDevLayout';

export const metadata: Metadata = {
    title: 'Static Website Development | Prism Infoways',
    description: 'Immutable architectures engineered for the speed of now. We replace infrastructure complexity with architectural elegance.',
};

export default function StaticWebsiteDevPage() {
    return <StaticWebDevLayout />;
}
