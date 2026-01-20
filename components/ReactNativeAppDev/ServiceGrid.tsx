'use client';

import React from 'react';
import { Compass, Users, RefreshCw, Cpu, Shield, Gauge, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Compass, Users, RefreshCw, Cpu, Shield, Gauge
};

export default function ServiceGrid() {
    const services = [
        {
            title: "Enterprise Architecture Strategy",
            description: "We design scalable roadmaps using the \"New Architecture,\" migrating legacy bridges to JSI/Fabric for synchronous, high-performance rendering.",
            icon: "Compass",
        },
        {
            title: "Cross-Platform Development (Agile Pods)",
            description: "Deploy \"Agile Pods\" of T-shaped developers to build unified iOS/Android apps with 80-95% code reusability.",
            icon: "Users",
        },
        {
            title: "Legacy Migration & Modernization",
            description: "Transition from siloed native apps to a unified React Native stack, reducing maintenance costs by up to 45% in year one.",
            icon: "RefreshCw",
        },
        {
            title: "Native Module Integration",
            description: "Bridge the \"Skill Gap\" with custom TurboModules for hardware integration (Bluetooth, Biometrics) and legacy SDKs.",
            icon: "Cpu",
        },
        {
            title: "Security & Compliance Hardening",
            description: "Enterprise-grade protection using SSL Pinning, Jscrambler obfuscation, and secure storage (Keychain/Keystore) for regulated industries.",
            icon: "Shield",
        },
        {
            title: "Performance Optimization & Audits",
            description: "Eliminate \"jank\" and frame drops. We implement Hermes, list virtualization, and off-thread animation logic to ensure 60fps stability.",
            icon: "Gauge",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        Our React Native Services
                    </h2>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Compass;

                        return (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-[#E92228]"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-[#E92228] rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 font-heading">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed font-body">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
