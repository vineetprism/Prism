import { Metadata } from 'next';
import FlutterAppDevLayout from '@/components/WebsiteDevServiceDetail/FlutterAppDevLayout';

export const metadata: Metadata = {
    title: 'Enterprise Flutter App Development | Cross-Platform Mobile Solutions | Prism Infoways',
    description: 'Deploy high-performance, secure mobile experiences for iOS and Android with a single Flutter codebase. Reduce TCO by 50% while delivering 99.9% crash-free stability.',
    keywords: 'Flutter development, cross-platform app development, Flutter enterprise apps, BLoC, Riverpod, mobile app development, iOS Android development',
};

export default function FlutterAppDevelopmentPage() {
    return <FlutterAppDevLayout />;
}
