'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Android SDK Dev Components
import Hero from '../AndroidSdkDev/Hero';
import BusinessImpact from '../AndroidSdkDev/BusinessImpact';
import ServiceGrid from '../AndroidSdkDev/ServiceGrid';
import Benefits from '../AndroidSdkDev/Benefits';
import Lifecycle from '../AndroidSdkDev/Lifecycle';
import Audience from '../AndroidSdkDev/Audience';
import TechStack from '../AndroidSdkDev/TechStack';
import FAQ from '../AndroidSdkDev/FAQ';
import CTA from '../AndroidSdkDev/CTA';

export default function AndroidSdkLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-white" role="main">
            <Hero onOpenModal={openModal} />
            <BusinessImpact onOpenModal={openModal} />
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience onOpenModal={openModal} />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Android SDK App Development" />
        </main>
    );
}
