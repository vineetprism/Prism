'use client';

import React from 'react';
import { Sparkles, Building2, ChevronRight } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-20 lg:py-28 bg-[#1F1F1F]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Choose Your Path</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                            Which Lane Are You In?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card A - D2C Brands */}
                        <div className="group bg-white rounded-3xl p-8 lg:p-10 border-2 border-transparent hover:border-[#E92228] transition-all duration-300 hover:shadow-2xl">
                            <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Sparkles className="w-4 h-4" />
                                For High-Growth D2C Brands
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                Speed, Brand, Conversion.
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                You need to launch fast and look world-class. Our <span className="font-bold text-gray-900">shopify development services</span> focus on Headless UX, high-converting checkout flows, and marketing integrations (Klaviyo/Attentive) to drive immediate sales velocity.
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-200 cursor-pointer"
                            >
                                Explore Brand Solutions
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>

                        {/* Card B - Enterprise */}
                        <div className="group bg-[#1F1F1F] rounded-3xl p-8 lg:p-10 border-2 border-white/10 hover:border-[#E92228] transition-all duration-300 hover:shadow-2xl">
                            <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Building2 className="w-4 h-4" />
                                For Global Enterprises
                            </div>

                            <h3 className="text-2xl font-bold text-white font-heading mb-2">
                                Compliance, Integration, Scale.
                            </h3>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                You need to de-risk complex operations. We focus on <span className="font-bold text-white">ERP connectivity</span>, multi-currency/multi-language setups, SSO, and handling high-volume API thresholds for global logistics.
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-white hover:bg-[#E92228] hover:text-white hover:border-[#E92228] transition-all duration-200 cursor-pointer"
                            >
                                Explore Enterprise Solutions
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
