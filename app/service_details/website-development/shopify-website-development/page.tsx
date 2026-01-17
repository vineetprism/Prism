import { Metadata } from 'next';
import ShopifyEnterpriseLayout from '@/components/WebsiteDevServiceDetail/ShopifyEnterpriseLayout';

export const metadata: Metadata = {
    title: 'Enterprise Shopify Development | Shopify Plus Partner | Prism Infoways',
    description: 'Turn commerce complexity into revenue at scale. We engineer composable, high-performance Shopify Plus ecosystems with 99.99% uptime and measurable TCO reduction.',
    keywords: ['shopify plus development', 'enterprise shopify', 'shopify migration', 'headless commerce', 'hydrogen', 'ERP integration'],
};

export default function ShopifyEnterprisePage() {
    return <ShopifyEnterpriseLayout />;
}
