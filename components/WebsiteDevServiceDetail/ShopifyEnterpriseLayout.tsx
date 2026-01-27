'use client';

import React, { useState } from 'react';
import { ConsultancyModal } from '../Modal/ConsultancyModal';

// Import Modular Components
import Hero from '../ShopifyEnterprise/Hero';
import BusinessImpact from '../ShopifyEnterprise/BusinessImpact';
import ServiceGrid from '../ShopifyEnterprise/ServiceGrid';
import Lifecycle from '../ShopifyEnterprise/Lifecycle';
import Audience from '../ShopifyEnterprise/Audience';
import TechStack from '../ShopifyEnterprise/TechStack';
import FAQ from '../ShopifyEnterprise/FAQ';
import CTA from '../ShopifyEnterprise/CTA';

export default function ShopifyEnterpriseLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="w-full bg-white">
            <Hero onOpenModal={openModal} />
            <BusinessImpact />
            <ServiceGrid />
            <Lifecycle />
            <Audience onOpenModal={openModal} />
            <TechStack />
            <FAQ />
            <CTA onOpenModal={openModal} />

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceTitle="Shopify Enterprise" />
        </main>
    );
}
