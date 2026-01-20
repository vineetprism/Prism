import { Metadata } from 'next';
import XamarinMauiLayout from '@/components/WebsiteDevServiceDetail/XamarinMauiLayout';

export const metadata: Metadata = {
    title: 'Xamarin to .NET MAUI Migration & Enterprise Mobility | Prism Infoways',
    description: 'Xamarin EOL migration experts. Transform legacy Xamarin.Forms apps into high-performance .NET MAUI powerhouses. Blazor Hybrid, Azure integration, compliance-ready.',
    keywords: ['Xamarin Migration', '.NET MAUI', 'Blazor Hybrid', 'Xamarin EOL', 'Mobile App Migration', 'Enterprise Mobility', 'Azure', 'Cross-Platform', 'Prism Infoways'],
};

export default function XamarinAppDevelopmentPage() {
    return <XamarinMauiLayout />;
}
