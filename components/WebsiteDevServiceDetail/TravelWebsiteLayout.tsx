'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../TravelWebsite/Hero';
import BusinessImpact from '../TravelWebsite/BusinessImpact';
import ServiceGrid from '../TravelWebsite/ServiceGrid';
import Benefits from '../TravelWebsite/Benefits';
import Lifecycle from '../TravelWebsite/Lifecycle';
import Audience from '../TravelWebsite/Audience';
import TechStack from '../TravelWebsite/TechStack';
import FAQ from '../TravelWebsite/FAQ';
import CTA from '../TravelWebsite/CTA';

export default function TravelWebsiteLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-white">
            <Hero onOpenModal={openModal} />
            <BusinessImpact />
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience onOpenModal={openModal} />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Travel Website Development" />
        </main>
    );
}
