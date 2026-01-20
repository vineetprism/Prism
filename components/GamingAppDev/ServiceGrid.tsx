'use client';

import React from 'react';
import { Smartphone, GraduationCap, Glasses, Server, Megaphone, BarChart3, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Smartphone, GraduationCap, Glasses, Server, Megaphone, BarChart3
};

export default function ServiceGrid() {
    const services = [
        {
            title: "Mobile Game Engineering (iOS/Android)",
            description: "Native and cross-platform development (Unity/Godot) optimized for the fragmented device landscape.",
            icon: "Smartphone",
        },
        {
            title: "Enterprise Gamification & \"Serious Games\"",
            description: "Turning corporate training and L&D into immersive simulations that boost knowledge retention and reduce onboarding costs.",
            icon: "GraduationCap",
        },
        {
            title: "High-Fidelity AR/VR Simulations",
            description: "Unreal Engine-powered photorealism for architectural visualization, automotive configurators, and industrial safety training.",
            icon: "Glasses",
        },
        {
            title: "Multiplayer Backend Infrastructure",
            description: "Scalable AWS/Azure architectures designed to handle thousands of concurrent users with <100ms latency.",
            icon: "Server",
        },
        {
            title: "Advergames & Marketing Engagement",
            description: "Branded interactive experiences designed to lower Customer Acquisition Cost (CAC) and drive organic impressions.",
            icon: "Megaphone",
        },
        {
            title: "LiveOps & Game Economy Design",
            description: "Post-launch content strategies, monetization modeling, and analytics to extend product lifecycle beyond the 3-year drop-off.",
            icon: "BarChart3",
        },
    ];

    return (
        <section id="services" className="py-20 md:py-28 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        Our Gaming & Gamification Services
                    </h2>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Smartphone;

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
