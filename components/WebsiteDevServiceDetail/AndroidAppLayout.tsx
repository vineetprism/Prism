'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import New Modular Components
import Hero from '../AndroidApp/Hero';
import BusinessImpact from '../AndroidApp/BusinessImpact';
import ServiceGrid from '../AndroidApp/ServiceGrid';
import Benefits from '../AndroidApp/Benefits';
import Lifecycle from '../AndroidApp/Lifecycle';
import Audience from '../AndroidApp/Audience';
import TechStack from '../AndroidApp/TechStack';
import FAQ from '../AndroidApp/FAQ';
import CTA from '../AndroidApp/CTA';

export default function AndroidAppLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-white" role="main">
            <Hero onOpenModal={openModal} />
            <BusinessImpact />
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
