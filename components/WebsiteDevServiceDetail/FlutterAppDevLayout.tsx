'use client';

import React, { useState } from 'react';
import Hero from '@/components/FlutterAppDev/Hero';
import BusinessImpact from '@/components/FlutterAppDev/BusinessImpact';
import ServiceGrid from '@/components/FlutterAppDev/ServiceGrid';
import Benefits from '@/components/FlutterAppDev/Benefits';
import Lifecycle from '@/components/FlutterAppDev/Lifecycle';
import Audience from '@/components/FlutterAppDev/Audience';
import TechStack from '@/components/FlutterAppDev/TechStack';
import FAQ from '@/components/FlutterAppDev/FAQ';
import { ConsultancyModal } from '@/components/Modal/ConsultancyModal';

export default function FlutterAppDevLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);

    return (
        <>
            <Hero onOpenModal={handleOpenModal} />
            <BusinessImpact />
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience onOpenModal={handleOpenModal} />
            <TechStack />
            <FAQ />

            <ConsultancyModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                serviceTitle="Flutter App Development"
            />
        </>
    );
}
