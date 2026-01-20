'use client';

import React from 'react';
import { ArrowRight, Rocket, Building } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    const cards = [
        {
            type: "startup",
            headline: "Velocity & Investability.",
            targetLabel: "For Startups & Scale-ups",
            copy: "Get to market in 13 weeks. We focus on rapid MVP development, \"App of the Day\" worthy design, and scalable architecture that impresses investors.",
            linkText: "View Startup Packages",
        },
        {
            type: "enterprise",
            headline: "Durability & Compliance.",
            targetLabel: "For Enterprise & Public Sector",
            copy: "Modernize legacy systems without breaking them. We focus on ISO-standard security, SSO integration, and 5-year roadmap planning.",
            linkText: "View Enterprise Solutions",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Two Cards Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cards.map((card, index) => {
                        const isStartup = card.type === 'startup';
                        const Icon = isStartup ? Rocket : Building;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#E92228]"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-[#F9F1F0] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E92228] transition-colors">
                                    <Icon className="w-8 h-8 text-[#E92228] group-hover:text-white transition-colors" />
                                </div>

                                {/* Target Label */}
                                <span className="text-sm font-semibold text-[#E92228] uppercase tracking-wide">
                                    {card.targetLabel}
                                </span>

                                {/* Headline */}
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mt-2 mb-4">
                                    {card.headline}
                                </h3>

                                {/* Copy */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {card.copy}
                                </p>

                                {/* Link */}
                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center gap-2 text-[#E92228] font-bold hover:gap-3 transition-all"
                                >
                                    {card.linkText}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
