'use client';

import React from 'react';
import { ArrowRight, Rocket, Building, CheckCircle } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    const segments = [
        {
            type: "startup",
            headline: "For Startups & Scale-ups",
            focus: "Speed & Efficiency",
            features: [
                "Launch an MVP in 3-5 months.",
                "Save 40% on initial build costs.",
                "Rapid iteration via Hot Reloading.",
            ],
            outcome: "Capture market share fast.",
            cta: "Build My MVP",
        },
        {
            type: "enterprise",
            headline: "For Enterprise Organizations",
            focus: "Scale, Security & Governance",
            features: [
                "Integrate with legacy backends & hardware.",
                "ISO/GDPR compliant architecture.",
                "Redux/TanStack for complex state mgmt.",
            ],
            outcome: "Reliability at global scale.",
            cta: "Enterprise Consultation",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        Tailored for Your Stage
                    </h2>
                    <p className="text-gray-600 mt-4 font-body">View by Business Stage</p>
                </div>

                {/* Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {segments.map((segment, index) => {
                        const isEnterprise = segment.type === 'enterprise';
                        const Icon = isEnterprise ? Building : Rocket;

                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 ${isEnterprise ? 'border-[#E92228]' : 'border-gray-100'
                                    }`}
                            >
                                {/* Icon & Focus */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isEnterprise ? 'bg-[#E92228]' : 'bg-[#F9F1F0]'
                                        }`}>
                                        <Icon className={`w-7 h-7 ${isEnterprise ? 'text-white' : 'text-[#E92228]'}`} />
                                    </div>
                                    <span className={`text-sm font-bold uppercase tracking-wide ${isEnterprise ? 'text-[#E92228]' : 'text-gray-500'
                                        }`}>
                                        {segment.focus}
                                    </span>
                                </div>

                                {/* Headline */}
                                <h3 className={`text-2xl md:text-3xl font-bold mb-6 font-heading ${isEnterprise ? 'text-[#1F1F1F] border-b-4 border-[#E92228] pb-2 inline-block' : 'text-[#1F1F1F]'
                                    }`}>
                                    {segment.headline}
                                </h3>

                                {/* Features */}
                                <ul className="space-y-3 mb-6">
                                    {segment.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#E92228] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600 font-body">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Outcome */}
                                <p className="text-[#1F1F1F] font-semibold mb-6 font-body">
                                    <span className="text-[#E92228]">Outcome:</span> {segment.outcome}
                                </p>

                                {/* CTA */}
                                <button
                                    onClick={onOpenModal}
                                    className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full border-2 transition-all ${isEnterprise
                                        ? 'bg-[#E92228] text-white border-[#E92228] hover:bg-white hover:text-[#E92228]'
                                        : 'bg-white text-[#E92228] border-[#E92228] hover:bg-[#E92228] hover:text-white'
                                        }`}
                                >
                                    {segment.cta}
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
