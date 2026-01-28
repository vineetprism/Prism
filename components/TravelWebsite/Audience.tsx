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
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Custom Solutions</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Tailored Engineering Models
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card A - Scale-Up */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-10 border-2 border-[#E92228] shadow-xl transition-all duration-300">
                            <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Rocket className="w-4 h-4" />
                                The Scale-Up (SME/Startup)
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                Speed-to-Market
                            </h3>

                            <ul className="space-y-2 mb-6 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                    Rapid prototyping, MVP launch in &lt;3 months
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                    Cross-platform Mobile Apps (Flutter)
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                    Cost-effective GDS integration
                                </li>
                            </ul>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                            >
                                Launch Your Platform
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>

                        {/* Card B - Enterprise */}
                        <div className="bg-gradient-to-br from-gray-900 to-[#0a0a0a] rounded-2xl p-8 lg:p-10 border-2 border-gray-800 shadow-xl transition-all duration-300">
                            <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Building2 className="w-4 h-4" />
                                The Enterprise (Airline/Hotel Chain)
                            </div>

                            <h3 className="text-2xl font-bold text-white font-heading mb-2">
                                Modernization & Governance
                            </h3>

                            <ul className="space-y-2 mb-6 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                    Mainframe-to-Cloud migration
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                    Legacy &quot;Strangulation&quot; with Strangler Fig
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                    Data Lakehouse implementation
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                    Enterprise-grade Security (ISO/SOC2)
                                </li>
                            </ul>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                            >
                                Modernize Your Infrastructure
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
