'use client';

import React from 'react';
import { Rocket, Building2, ChevronRight } from 'lucide-react';

interface AudienceProps {
    onOpenModal?: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-mono">
                            Who We Serve
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                            Tailored Security Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Startups */}
                        <div className="group relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-100 hover:border-[#E92228]/30 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#E92228]/10 to-transparent rounded-tr-3xl"></div>
                            
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#E92228] to-[#c91e23] rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-[#E92228]/20">
                                    <Rocket className="w-8 h-8 text-white" />
                                </div>

                                <span className="inline-block bg-[#E92228]/10 text-[#E92228] text-xs font-bold px-3 py-1 rounded-full font-mono uppercase tracking-wider mb-4">
                                    For Startups & SaaS Builders
                                </span>

                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading mb-4 group-hover:text-[#E92228] transition-colors duration-300">
                                    Scale Without Technical Debt.
                                </h3>

                                <p className="text-gray-600 leading-relaxed font-body mb-6">
                                    You need speed. Our automated DAST/SAST integration and API pentesting ensure your product is secure before the next funding round.
                                </p>

                                <button onClick={onOpenModal} className="inline-flex items-center gap-2 text-[#E92228] font-bold hover:gap-3 transition-all cursor-pointer">
                                    Start Your Security Journey <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="group relative bg-gradient-to-br from-[#1F1F1F] to-[#2a2a2a] rounded-3xl p-8 lg:p-10 border-2 border-gray-800 hover:border-[#E92228]/50 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#E92228]/20 to-transparent rounded-tr-3xl"></div>
                            
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#E92228] to-[#c91e23] rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-[#E92228]/30">
                                    <Building2 className="w-8 h-8 text-white" />
                                </div>

                                <span className="inline-block bg-[#E92228]/20 text-[#E92228] text-xs font-bold px-3 py-1 rounded-full font-mono uppercase tracking-wider mb-4">
                                    For Enterprise & Critical Infra
                                </span>

                                <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading mb-4 group-hover:text-[#E92228] transition-colors duration-300">
                                    Governance & Continuity.
                                </h3>

                                <p className="text-gray-400 leading-relaxed font-body mb-6">
                                    You need visibility. We offer &quot;Security-as-a-Service&quot; and Third-Party Risk Management (TPRM) to secure complex hybrid environments.
                                </p>

                                <button onClick={onOpenModal} className="inline-flex items-center gap-2 text-[#E92228] font-bold hover:gap-3 transition-all cursor-pointer">
                                    Request Enterprise Consultation <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
