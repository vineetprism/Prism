'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../DynamicWebsite/Hero';
import BusinessImpact from '../DynamicWebsite/BusinessImpact';
import ServiceGrid from '../DynamicWebsite/ServiceGrid';
import Benefits from '../DynamicWebsite/Benefits';
import Lifecycle from '../DynamicWebsite/Lifecycle';
import Audience from '../DynamicWebsite/Audience';
import TechStack from '../DynamicWebsite/TechStack';
import FAQ from '../DynamicWebsite/FAQ';
import CTA from '../DynamicWebsite/CTA';

export default function DynamicWebsiteLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full">
            <Hero onOpenModal={openModal} />
            <BusinessImpact />
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience onOpenModal={openModal} />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Dynamic Website Development" />
        </main>
    );
}
