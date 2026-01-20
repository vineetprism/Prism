import { Metadata } from 'next';
import ReactNativeAppDevLayout from '@/components/WebsiteDevServiceDetail/ReactNativeAppDevLayout';

export const metadata: Metadata = {
    title: 'React Native App Development | Strategic Cross-Platform Solutions | Prism Infoways',
    description: 'Deliver high-performance enterprise mobile experiences with React Native. Reduce TCO by 45% and accelerate deployment by 2.5x with JSI & Fabric architecture.',
    keywords: ['React Native', 'cross-platform development', 'mobile app development', 'JSI', 'Fabric', 'TurboModules', 'enterprise mobile', 'Prism Infoways'],
};

export default function ReactNativeAppDevelopmentPage() {
    return <ReactNativeAppDevLayout />;
}
