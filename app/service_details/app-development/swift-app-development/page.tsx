import React from 'react';
import { Metadata } from 'next';
import SwiftAppDevLayout from '@/components/WebsiteDevServiceDetail/SwiftAppDevLayout';

export const metadata: Metadata = {
    title: 'Enterprise Swift App Development | Native iOS Solutions | Prism Infoways',
    description: 'Architecting high-performance iOS solutions for the ROI-driven enterprise. Native Swift applications with 99.9% stability, Swift 6 ready, and Human Interface Guidelines compliant.',
    keywords: [
        'Swift App Development',
        'iOS Development',
        'Native iOS Apps',
        'Enterprise iOS Solutions',
        'SwiftUI Development',
        'Swift 6',
        'Apple Development',
        'iOS Enterprise Apps',
    ],
};

export default function SwiftAppDevelopmentPage() {
    return <SwiftAppDevLayout />;
}
