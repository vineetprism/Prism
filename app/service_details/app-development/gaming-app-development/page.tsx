import { Metadata } from 'next';
import GamingAppDevLayout from '@/components/WebsiteDevServiceDetail/GamingAppDevLayout';

export const metadata: Metadata = {
    title: 'Gaming App Development & Gamification Solutions | Prism Infoways',
    description: 'Engineered for engagement. From AAA-quality mobile games to enterprise gamification and AR/VR simulations. Unity, Unreal Engine, AWS GameLift for scalable gaming ecosystems.',
    keywords: ['Game Development', 'Unity', 'Unreal Engine', 'Gamification', 'AR/VR', 'Mobile Games', 'Enterprise Gamification', 'Serious Games', 'Prism Infoways'],
};

export default function GamingAppDevelopmentPage() {
    return <GamingAppDevLayout />;
}
