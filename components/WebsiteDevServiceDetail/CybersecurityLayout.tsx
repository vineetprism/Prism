'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Cybersecurity Dev Components
import Hero from '../CybersecurityDev/Hero';
import BusinessImpact from '../CybersecurityDev/BusinessImpact';
import ServiceGrid from '../CybersecurityDev/ServiceGrid';
import Benefits from '../CybersecurityDev/Benefits';
import Lifecycle from '../CybersecurityDev/Lifecycle';
import Audience from '../CybersecurityDev/Audience';
import TechStack from '../CybersecurityDev/TechStack';
import FAQ from '../CybersecurityDev/FAQ';
import CTA from '../CybersecurityDev/CTA';

export default function CybersecurityLayout() {
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

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Cybersecurity Services" />
        </main>
    );
}
