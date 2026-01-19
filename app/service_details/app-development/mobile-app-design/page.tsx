import React from 'react';
import { Metadata } from 'next';
import MobileAppDevLayout from '@/components/WebsiteDevServiceDetail/MobileAppDevLayout';

export const metadata: Metadata = {
    title: 'Enterprise Mobile App Development | Prism Infoways',
    description: 'Engineering secure, scalable digital ecosystems. Cloud-native mobile solutions with Swift, Kotlin, Flutter, and React Native for enterprise and startups.',
    keywords: ['Mobile App Development', 'Enterprise Mobile Apps', 'iOS Development', 'Android Development', 'Flutter', 'React Native'],
};

export default function MobileAppDesignPage() {
    return <MobileAppDevLayout />;
}
