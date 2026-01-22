'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import iOS SDK Dev Components
import Hero from '../iOSSdkDev/Hero';
import BusinessImpact from '../iOSSdkDev/BusinessImpact';
import ServiceGrid from '../iOSSdkDev/ServiceGrid';
import Benefits from '../iOSSdkDev/Benefits';
import Lifecycle from '../iOSSdkDev/Lifecycle';
import Audience from '../iOSSdkDev/Audience';
import TechStack from '../iOSSdkDev/TechStack';
import FAQ from '../iOSSdkDev/FAQ';
import CTA from '../iOSSdkDev/CTA';

export default function IOSSdkLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-white" role="main">
            <Hero onOpenModal={openModal} />
            <BusinessImpact onOpenModal={openModal} />
            {/* <BusinessImpactOptions /> */}
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience onOpenModal={openModal} />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </main>
    );
}
