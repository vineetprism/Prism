'use client';

import React from 'react';
import { Rocket, ChevronRight, Building2 } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Competitive Archetypes
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Tailored for Your Reality
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card A - Startups & SMEs */}
                        <div className="group bg-gradient-to-br from-[#2a2a2a] to-[#1F1F1F] rounded-2xl p-8 lg:p-10 border-2 border-[#E92228] transition-all duration-300 text-white shadow-xl">
                            <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Rocket className="w-4 h-4" />
                                For Innovative Startups & SMEs
                            </div>

                            <h3 className="text-2xl font-bold font-heading mb-2">
                                Speed & User Experience
                            </h3>

                            <p className="text-gray-400 mb-6 font-body leading-relaxed">
                                You need to disrupt the market. We provide the <span className="text-white font-semibold">Velocity of a boutique agency</span>, utilizing KMP and Flutter to deliver premium MVPs that scale.
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                            >
                                View SME Case Studies
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>

                        {/* Card B - Enterprise */}
                        <div className="group bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 lg:p-10 border-2 border-[#E92228] transition-all duration-300 shadow-xl">
                            <div className="inline-flex items-center gap-2 bg-[#1F1F1F] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Building2 className="w-4 h-4" />
                                For Enterprise & Regulated Industries
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                Compliance & Integration
                            </h3>

                            <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                You need risk mitigation. We provide the <span className="text-gray-900 font-semibold">Rigor of a global integrator</span>, ensuring ISO/GDPR compliance, legacy connectivity, and long-term maintainability.
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                            >
                                View Enterprise Solutions
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
