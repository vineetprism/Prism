'use client';

import React from 'react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
                            Are you a...
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Segment A - Agile Disrupter */}
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E92228]/20 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
                            <div className="relative z-10">
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-wider font-heading">Segment A</span>
                                <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 font-heading">The Agile Disrupter</h3>
                                <p className="text-gray-400 text-sm mb-4 font-heading">Startups / Scale-ups</p>

                                <p className="text-red-400 font-semibold mb-2 text-sm">Pain Point:</p>
                                <p className="text-gray-300 mb-6 font-body leading-relaxed">Needing to prove value fast without technical debt.</p>

                                <p className="text-[#E92228] font-semibold mb-2 text-sm">Our Offer:</p>
                                <p className="text-gray-300 mb-8 font-body leading-relaxed">Rapid deployment of &quot;Headless&quot; architectures. Scalable foundations (Node.js/Fastify) that grow with your funding rounds.</p>

                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group/btn"
                                >
                                    Launch Fast
                                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Segment B - Global Enterprise */}
                        <div className="bg-gradient-to-br from-[#F9F1F0] to-white rounded-2xl p-8 sm:p-10 border-2 border-gray-100 relative overflow-hidden group hover:border-[#E92228]/30 hover:shadow-2xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E92228]/10 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
                            <div className="relative z-10">
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-wider font-heading">Segment B</span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 font-heading">The Global Enterprise</h3>
                                <p className="text-gray-500 text-sm mb-4 font-heading">Fortune 500 / Multinationals</p>

                                <p className="text-red-600 font-semibold mb-2 text-sm">Pain Point:</p>
                                <p className="text-gray-600 mb-6 font-body leading-relaxed">&quot;Legacy Paralysis&quot; and Supply Chain Vulnerability.</p>

                                <p className="text-[#E92228] font-semibold mb-2 text-sm">Our Offer:</p>
                                <p className="text-gray-600 mb-8 font-body leading-relaxed">Risk-averse modernization. We focus on &quot;Compliance-as-Code,&quot; Data Mesh implementation, and preserving institutional knowledge while upgrading the stack.</p>

                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group/btn"
                                >
                                    Modernize Securely
                                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
