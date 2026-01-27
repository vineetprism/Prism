'use client';

import React, { useState } from 'react';
import Hero from './Hero';
import BusinessImpact from './BusinessImpact';
import ServiceGrid from './ServiceGrid';
import Benefits from './Benefits';
import Lifecycle from './Lifecycle';
import Audience from './Audience';
import TechStack from './TechStack';
import FAQ from './FAQ';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

export default function VirtualCisoLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
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
                serviceTitle="Virtual CISO Services & Solutions"
            />
        </div>
    );
}
