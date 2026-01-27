'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../CMSWebsite/Hero';
import BusinessImpact from '../CMSWebsite/BusinessImpact';
import ServiceGrid from '../CMSWebsite/ServiceGrid';
import Benefits from '../CMSWebsite/Benefits';
import Lifecycle from '../CMSWebsite/Lifecycle';
import Audience from '../CMSWebsite/Audience';
import TechStack from '../CMSWebsite/TechStack';
import FAQ from '../CMSWebsite/FAQ';
import CTA from '../CMSWebsite/CTA';

export default function CMSWebsiteLayout() {
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

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="CMS Website Development" />
        </main>
    );
}
