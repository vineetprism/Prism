'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Cybersecurity Risk Assessment Components
import Hero from '../CybersecurityRiskAssessment/Hero';
import BusinessImpact from '../CybersecurityRiskAssessment/BusinessImpact';
import ServiceGrid from '../CybersecurityRiskAssessment/ServiceGrid';
import Benefits from '../CybersecurityRiskAssessment/Benefits';
import Lifecycle from '../CybersecurityRiskAssessment/Lifecycle';
import Audience from '../CybersecurityRiskAssessment/Audience';
import TechStack from '../CybersecurityRiskAssessment/TechStack';
import FAQ from '../CybersecurityRiskAssessment/FAQ';
import CTA from '../CybersecurityRiskAssessment/CTA';

export default function CybersecurityRiskAssessmentLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-white" role="main">
            <Hero onOpenModal={openModal} />
            <BusinessImpact onOpenModal={openModal} />
            <ServiceGrid />
            <Benefits />
            <Lifecycle />
            <Audience onOpenModal={openModal} />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Cybersecurity Risk Assessment" />
        </main>
    );
}
