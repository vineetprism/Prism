'use client';

import React, { useState } from 'react';
import {
    Hero,
    BusinessImpact,
    ServiceGrid,
    Benefits,
    Lifecycle,
    Audience,
    TechStack,
    FAQ,
} from '@/components/GamingAppDev';
import { ConsultancyModal } from '@/components/Modal/ConsultancyModal';

export default function GamingAppDevLayout() {
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

            {/* Consultancy Modal */}
            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </>
    );
}
