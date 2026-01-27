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
} from '@/components/ReactNativeAppDev';
import { ConsultancyModal } from '@/components/Modal/ConsultancyModal';

export default function ReactNativeAppDevLayout() {
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
            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="React Native App Development" />
        </>
    );
}
