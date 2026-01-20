'use client';

import React from 'react';
import { Code, RefreshCw, Layers, Palette, Shield, Settings, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Code, RefreshCw, Layers, Palette, Shield, Settings
};

export default function ServiceGrid() {
    const services = [
        {
            title: "Custom Enterprise Development",
            description: "Scalable applications built on Clean Architecture and BLoC patterns to ensure testability and long-term maintainability.",
            icon: "Code",
        },
        {
            title: "Native-to-Flutter Migration",
            description: "Seamlessly modernize legacy apps using \"Add-to-App\" technology. Integrate Flutter modules without a full rewrite.",
            icon: "RefreshCw",
        },
        {
            title: "Micro-Frontend Architecture",
            description: "Decouple large teams by breaking monolithic apps into independent feature packages, enabling parallel development at scale.",
            icon: "Layers",
        },
        {
            title: "High-Fidelity Design Systems",
            description: "Implementation of Impeller-ready UI and custom \"Widgetbooks\" that guarantee pixel-perfect consistency across all devices.",
            icon: "Palette",
        },
        {
            title: "Security & Compliance Hardening",
            description: "Banking-grade protection including SSL Pinning, RASP (Root Detection), and binary obfuscation for FinTech/Healthcare.",
            icon: "Shield",
        },
        {
            title: "CI/CD & Automated Quality",
            description: "\"Shift-Left\" testing pipelines using Codemagic and Golden Tests to catch bugs before they reach production.",
            icon: "Settings",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        The 6 Pillars of Excellence
                    </h2>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Code;

                        return (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#E92228]"
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
