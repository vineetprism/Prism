'use client';

import React from 'react';
import { Rocket, Building2, ArrowRight } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Target Audience
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Who We Serve
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Startups - White Card */}
                        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Icon */}
                            <div className="w-14 h-14 bg-[#E92228]/10 rounded-2xl flex items-center justify-center mb-8 text-[#E92228]">
                                <Rocket className="w-7 h-7" />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                    Agile Product Launch
                                </h3>
                                <p className="text-[#E92228] font-bold text-xs uppercase tracking-widest mb-6">
                                    Focus: Speed, UX Design, MVP Definition
                                </p>

                                <p className="text-gray-600 leading-relaxed font-body mb-8 text-sm sm:text-base">
                                    Launch a &quot;Feature-First&quot; Android product that disrupts the market.
                                </p>
                            </div>

                            {/* Link */}
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold text-sm hover:gap-2 transition-all group cursor-pointer"
                            >
                                View Startup Accelerator <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        {/* Enterprise - Dark Card */}
                        <div className="bg-[#1a1a1a] p-8 sm:p-10 rounded-3xl border border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Icon */}
                            <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-8 text-[#E92228]">
                                <Building2 className="w-7 h-7" />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                                    Digital Core Transformation
                                </h3>
                                <p className="text-[#E92228] font-bold text-xs uppercase tracking-widest mb-6">
                                    Focus: Compliance, Legacy Integration, SDK Architecture
                                </p>

                                <p className="text-gray-400 leading-relaxed font-body mb-8 text-sm sm:text-base">
                                    Modernize your legacy infrastructure with compliant, scalable mobile assets.
                                </p>
                            </div>

                            {/* Link */}
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-white font-bold text-sm hover:gap-2 transition-all group cursor-pointer"
                            >
                                Explore Enterprise Solutions <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
