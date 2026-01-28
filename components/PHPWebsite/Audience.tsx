'use client';

import React from 'react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Who We Serve</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            PHP Website Development Solutions for Every Stage
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left - Startups */}
                        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#E92228]/10 px-4 py-2 rounded-full mb-6">
                                <div className="w-2 h-2 rounded-full bg-[#E92228]"></div>
                                <span className="text-[#E92228] text-xs font-bold uppercase tracking-wider">For Startups & Scale-ups</span>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading mb-4 group-hover:text-[#E92228] transition-colors">
                                Rapid Market Entry
                            </h3>

                            {/* Focus Points */}
                            <div className="space-y-3 mb-6">
                                {["MVP in 8 weeks", "Laravel Framework", "Cost-efficiency", "Scalability for Growth"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#E92228] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-500 italic mb-8 border-l-2 border-[#E92228] pl-4">
                                &quot;Build a robust foundation that investors trust and users love.&quot;
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group"
                            >
                                Get Started
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Right - Enterprise */}
                        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-gray-900/5 px-4 py-2 rounded-full mb-6">
                                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                                <span className="text-gray-700 text-xs font-bold uppercase tracking-wider">For Enterprise & CTOs</span>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading mb-4 group-hover:text-[#E92228] transition-colors">
                                Legacy Modernization
                            </h3>

                            {/* Focus Points */}
                            <div className="space-y-3 mb-6">
                                {["Symfony/Laminas", "Microservices", "HIPAA/Fintech Compliance", "Long-Term Support (LTS)"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#E92228] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-500 italic mb-8 border-l-2 border-gray-400 pl-4">
                                &quot;De-risk your digital transformation with zero downtime.&quot;
                            </p>

                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group"
                            >
                                Schedule Consultation
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
