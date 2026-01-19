'use client';

import React from 'react';
import { Rocket, Building2, ChevronRight } from 'lucide-react';

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
                            Tailored Solutions
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Built for Your Reality
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card A - Startups & SMEs */}
                        <div className="group bg-gradient-to-br from-gray-900 to-[#1F1F1F] rounded-2xl p-8 lg:p-10 border-2 border-gray-800 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl text-white">
                            <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Rocket className="w-4 h-4" />
                                For Startups & SMEs
                            </div>

                            <h3 className="text-2xl font-bold font-heading mb-2">
                                Velocity & Valuation
                            </h3>

                            <p className="text-gray-400 mb-6 font-body leading-relaxed">
                                Rapid MVP development focused on the <span className="text-white font-semibold">&quot;Core Loop.&quot;</span> We build scalable foundations that investors trust, ensuring you don&apos;t need a total rewrite when you hit{' '}
                                <span className="text-[#E92228] font-semibold">Series A</span>.
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                            >
                                View Startup Packages
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>

                        {/* Card B - Enterprise & Government */}
                        <div className="group bg-gradient-to-br from-[#F9F1F0] to-white rounded-2xl p-8 lg:p-10 border-2 border-gray-100 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl">
                            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Building2 className="w-4 h-4" />
                                For Enterprise & Government
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                Compliance & Continuity
                            </h3>

                            <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                Legacy integration, strict <span className="text-gray-900 font-semibold">MDM (Mobile Device Management)</span> support, and ISO/SOC2 compliant data handling. We solve the{' '}
                                <span className="text-[#E92228] font-semibold">&quot;Massive View Controller&quot;</span> problem in aging codebases.
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                            >
                                View Enterprise Case Studies
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
