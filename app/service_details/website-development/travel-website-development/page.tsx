import { Metadata } from 'next';
import TravelWebsiteLayout from '@/components/WebsiteDevServiceDetail/TravelWebsiteLayout';

export const metadata: Metadata = {
    title: 'Travel Website Development | Cloud-Native Travel Platforms | Prism Infoways',
    description: 'We architect cloud-native travel platforms capable of handling 200k+ requests per second. Specializing in Microservices, Federated GraphQL, & NDC Integration.',
    keywords: ['travel website development', 'travel tech', 'GDS integration', 'Amadeus', 'Sabre', 'NDC', 'travel booking platform'],
};

export default function TravelWebsitePage() {
    return <TravelWebsiteLayout />;
}
