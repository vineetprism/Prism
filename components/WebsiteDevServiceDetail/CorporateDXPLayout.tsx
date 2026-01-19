'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../CorporateDXP/Hero';
import BusinessImpact from '../CorporateDXP/BusinessImpact';
import ServiceGrid from '../CorporateDXP/ServiceGrid';
import Benefits from '../CorporateDXP/Benefits';
import Lifecycle from '../CorporateDXP/Lifecycle';
import Audience from '../CorporateDXP/Audience';
import TechStack from '../CorporateDXP/TechStack';
import FAQ from '../CorporateDXP/FAQ';
import CTA from '../CorporateDXP/CTA';

export default function CorporateDXPLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-[#1F1F1F]">
            <Hero onOpenModal={openModal} />
            <BusinessImpact onOpenModal={openModal} />
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
