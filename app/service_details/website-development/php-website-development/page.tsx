import { Metadata } from 'next';
import PHPWebsiteLayout from '@/components/WebsiteDevServiceDetail/PHPWebsiteLayout';

export const metadata: Metadata = {
    title: 'PHP Website Development | Enterprise PHP Solutions | Prism Infoways',
    description: 'Engineer high-performance platforms with modern enterprise PHP. Cloud-native architectures handling 50,000+ concurrent users with 45% greater cost efficiency.',
    keywords: 'PHP development, Laravel, Symfony, enterprise PHP, PHP modernization, cloud-native PHP, PHP 8.3',
};

export default function PHPWebsiteDevPage() {
    return <PHPWebsiteLayout />;
}
