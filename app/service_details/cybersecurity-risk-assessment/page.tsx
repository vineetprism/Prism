import { Metadata } from 'next';
import CybersecurityLayout from '@/components/WebsiteDevServiceDetail/CybersecurityLayout';

export const metadata: Metadata = {
    title: 'Cybersecurity Risk Assessment Services | Prism Infoways',
    description: 'Don\'t just detect. Engineer resilience. We architect Digital Trust strategies that reduce breakout time, secure your bottom line, and fortify infrastructure against the $10.5 trillion cybercrime economy.',
};

export default function CybersecurityRiskAssessmentPage() {
    return <CybersecurityLayout />;
}
