'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../Redevelopment/Hero';
import BusinessImpact from '../Redevelopment/BusinessImpact';
import ServiceGrid from '../Redevelopment/ServiceGrid';
import Benefits from '../Redevelopment/Benefits';
import Lifecycle from '../Redevelopment/Lifecycle';
import Audience from '../Redevelopment/Audience';
import TechStack from '../Redevelopment/TechStack';
import FAQ from '../Redevelopment/FAQ';
import CTA from '../Redevelopment/CTA';

export default function RedevelopmentLayout() {
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

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Website Redevelopment" />
        </main>
    );
}
