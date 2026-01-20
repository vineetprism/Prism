'use client';

import React, { useState, lazy, Suspense } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Critical path - load immediately
import Hero from '../SwiftAppDev/Hero';
import BusinessImpact from '../SwiftAppDev/BusinessImpact';
import ServiceGrid from '../SwiftAppDev/ServiceGrid';

// Below the fold - lazy load for better FCP/LCP
const Benefits = lazy(() => import('../SwiftAppDev/Benefits'));
const Lifecycle = lazy(() => import('../SwiftAppDev/Lifecycle'));
const Audience = lazy(() => import('../SwiftAppDev/Audience'));
const TechStack = lazy(() => import('../SwiftAppDev/TechStack'));
const FAQ = lazy(() => import('../SwiftAppDev/FAQ'));
const CTA = lazy(() => import('../SwiftAppDev/CTA'));

// Minimal loading fallback
const SectionLoader = () => (
    <div className="py-20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#E92228] border-t-transparent rounded-full animate-spin" />
    </div>
);

export default function SwiftAppDevLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <>
            {/* Critical path - renders immediately */}
            <Hero onOpenModal={openModal} />
            <BusinessImpact />
            <ServiceGrid />

            {/* Lazy loaded sections */}
            <Suspense fallback={<SectionLoader />}>
                <Benefits />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Lifecycle />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Audience onOpenModal={openModal} />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechStack />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FAQ />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <CTA onOpenModal={openModal} />
            </Suspense>

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </>
    );
}
