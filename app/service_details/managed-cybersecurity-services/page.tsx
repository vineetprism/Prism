import { Metadata } from 'next';
import CybersecurityLayout from '@/components/WebsiteDevServiceDetail/CybersecurityLayout';

export const metadata: Metadata = {
    title: 'Managed Cybersecurity Services | Prism Infoways',
    description: 'Enterprise-Grade Cyber Resilience. Zero Complexity. 24/7 Managed Detection and Response (MDR) powered by Agentic AI. We stop the threats that bypass traditional defenses.',
};

export default function ManagedCybersecurityPage() {
    return <CybersecurityLayout />;
}
