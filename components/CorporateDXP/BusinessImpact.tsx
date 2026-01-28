'use client';

import React from 'react';

interface BusinessImpactProps {
    onOpenModal: () => void;
}

export default function BusinessImpact({ onOpenModal }: BusinessImpactProps) {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-200">
                        {/* Left Side - Red Quote Block */}
                        <div className="lg:w-[45%] bg-[#E92228] p-10 sm:p-12 lg:p-16 flex flex-col justify-center relative">
                            {/* Decorative Quote Marks */}
                            <span className="text-white/30 text-[100px] sm:text-[120px] font-serif absolute top-2 left-4 leading-none select-none">&quot;</span>

                            <div className="relative z-10 pt-8">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-heading">
                                    The Era of<br />Static Corporate Websites<br />Is <span className="underline decoration-4 underline-offset-4">Over.</span>
                                </h2>

                                <span className="text-white/30 text-[60px] sm:text-[80px] font-serif absolute -bottom-4 right-0 leading-none select-none">&quot;</span>
                            </div>

                            <p className="text-white/80 text-sm sm:text-base mt-10 font-body italic">
                                — 2026 Digital Reality
                            </p>
                        </div>

                        {/* Right Side - White Content Block */}
                        <div className="lg:w-[55%] bg-white p-10 sm:p-12 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading leading-tight">
                                The Era of Static Corporate Websites Is <span className="text-[#E92228]">Over.</span>
                            </h3>

                            <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                                <p>
                                    In 2026, a <span className="font-semibold text-gray-900">corporate website</span> is no longer a marketing asset—it is mission-critical operational infrastructure. Legacy systems and monolithic codebases weaken <span className="font-bold text-[#E92228]">corporate website development</span> initiatives, creating innovation paralysis, increasing exposure to security threats, and leaving enterprises vulnerable to an average breach impact of <span className="font-semibold text-gray-900">$4.88M</span>, while agile competitors advance with modern <span className="font-semibold text-gray-900">corporate website design company</span>.
                                </p>
                                <p>
                                    We don&apos;t just write code we deliver <span className="font-bold text-[#E92228]">Total Application Modernization</span>. Through advanced <span className="font-bold text-[#E92228]">corporate website design services</span> and composable, AI-integrated architectures, we help enterprises evolve their <span className="font-bold text-[#E92228]">company corporate website</span> from a cost center into a revenue engine, strengthen security posture, and future-proof the organization for the next decade of digital disruption.
                                </p>
                            </div>

                            <button
                                onClick={onOpenModal}
                                className="mt-8 inline-flex items-center px-6 py-3 bg-[#1a1a1a] text-white text-sm font-bold rounded-lg transition-all duration-300 hover:bg-[#E92228] cursor-pointer group w-fit"
                            >
                                Explore Solutions
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
