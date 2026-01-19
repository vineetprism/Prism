'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../PHPWebsite/Hero';
import BusinessImpact from '../PHPWebsite/BusinessImpact';
import ServiceGrid from '../PHPWebsite/ServiceGrid';
import Benefits from '../PHPWebsite/Benefits';
import Lifecycle from '../PHPWebsite/Lifecycle';
import Audience from '../PHPWebsite/Audience';
import TechStack from '../PHPWebsite/TechStack';
import FAQ from '../PHPWebsite/FAQ';
import CTA from '../PHPWebsite/CTA';

export default function PHPWebsiteLayout() {
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

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </main>
    );
}
