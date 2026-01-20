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
            headline: "Velocity First.",
            targetLabel: "For Startups & Scale-ups",
            copy: "Get to market 3x faster. We use Riverpod and Supabase/Firebase to build rapid, scalable MVPs that impress investors and capture early market share.",
            linkText: "Launch Your MVP",
        },
        {
            type: "enterprise",
            headline: "Rigor First.",
            targetLabel: "For Enterprise & Regulated Industries",
            copy: "Zero risk. We deploy BLoC, Micro-frontends, and On-Premise solutions compliant with GDPR/PCI-DSS for banking and healthcare systems.",
            linkText: "Scale Your System",
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
                                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-t-4 border-[#E92228]"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-[#E92228] rounded-2xl flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Target Label */}
                                <span className="text-sm font-semibold text-[#E92228] uppercase tracking-wide">
                                    {card.targetLabel}
                                </span>

                                {/* Headline */}
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mt-2 mb-4 font-heading">
                                    {card.headline}
                                </h3>

                                {/* Copy */}
                                <p className="text-gray-600 leading-relaxed mb-6 font-body">
                                    {card.copy}
                                </p>

                                {/* Link - Brand Compliant Button */}
                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center gap-2 bg-[#E92228] text-white font-bold px-6 py-3 rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all"
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
