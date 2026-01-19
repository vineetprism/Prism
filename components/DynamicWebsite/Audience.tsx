'use client';

import React, { useState } from 'react';
import { Rocket, Building2 } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    const [activeAudience, setActiveAudience] = useState<'startup' | 'enterprise'>('startup');

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-6">
                            Built for You
                        </h2>

                        {/* Toggle Switch */}
                        <div className="inline-flex bg-white rounded-full p-1.5 border border-gray-200 shadow-sm">
                            <button
                                onClick={() => setActiveAudience('startup')}
                                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${activeAudience === 'startup'
                                    ? 'bg-[#E92228] text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                High-Growth Startups
                            </button>
                            <button
                                onClick={() => setActiveAudience('enterprise')}
                                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${activeAudience === 'enterprise'
                                    ? 'bg-[#E92228] text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Enterprise Leaders
                            </button>
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 transition-all duration-500">
                        {activeAudience === 'startup' ? (
                            <div className="text-center">
                                <div className="mb-6 flex justify-center">
                                    <Rocket className="w-16 h-16 text-[#E92228]" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">Scale & Velocity</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                    You need an MVP that isn&apos;t throwaway code. We build scalable foundations (MERN/Laravel) that let you launch fast and handle your first million users.
                                </p>
                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer"
                                >
                                    View Startup Packages
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="mb-6 flex justify-center">
                                    <Building2 className="w-16 h-16 text-[#E92228]" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">Security & Governance</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                    You need compliance, disaster recovery, and integration with legacy mainframes. We deliver ISO-grade security and &quot;Digital Reinvention.&quot;
                                </p>
                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer"
                                >
                                    Consult Enterprise Solutions
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
