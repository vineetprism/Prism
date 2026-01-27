'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../MobileAppDev/Hero';
import BusinessImpact from '../MobileAppDev/BusinessImpact';
import ServiceGrid from '../MobileAppDev/ServiceGrid';
import Benefits from '../MobileAppDev/Benefits';
import Lifecycle from '../MobileAppDev/Lifecycle';
import Audience from '../MobileAppDev/Audience';
import TechStack from '../MobileAppDev/TechStack';
import FAQ from '../MobileAppDev/FAQ';
import CTA from '../MobileAppDev/CTA';

export default function MobileAppDevLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <>
            <Hero onOpenModal={openModal} />
            <BusinessImpact />
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience onOpenModal={openModal} />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Mobile App Development" />
        </>
    );
}
