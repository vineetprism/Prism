'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../iOSApp/Hero';
import BusinessImpact from '../iOSApp/BusinessImpact';
import ServiceGrid from '../iOSApp/ServiceGrid';
import Benefits from '../iOSApp/Benefits';
import Lifecycle from '../iOSApp/Lifecycle';
import Audience from '../iOSApp/Audience';
import TechStack from '../iOSApp/TechStack';
import FAQ from '../iOSApp/FAQ';
import CTA from '../iOSApp/CTA';

export default function IOSAppLayout() {
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

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="iOS App Development" />
        </main>
    );
}
