'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../StaticWebDev/Hero';
import BusinessImpact from '../StaticWebDev/BusinessImpact';
import ServiceGrid from '../StaticWebDev/ServiceGrid';
import Benefits from '../StaticWebDev/Benefits';
import Lifecycle from '../StaticWebDev/Lifecycle';
import Audience from '../StaticWebDev/Audience';
import TechStack from '../StaticWebDev/TechStack';
import FAQ from '../StaticWebDev/FAQ';
import CTA from '../StaticWebDev/CTA';

export default function StaticWebsiteDevelopment() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-white">
            <Hero onOpenModal={openModal} />
            <BusinessImpact />
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Static Website Development" />
        </main>
    );
}