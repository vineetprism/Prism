'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[750px] lg:min-h-[800px] overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">

            {/* Static Premium Gradient Layer */}
            <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-to-bl from-[#E92228]/15 via-[#E92228]/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gradient-to-tr from-gray-800/30 to-transparent"></div>

            {/* Subtle Dot Grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'radial-gradient(#E92228 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-20 pb-24 lg:pt-28 lg:pb-32 items-center">
                    {/* Left - Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#E92228]/10 border border-[#E92228]/30 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-[#E92228] animate-pulse"></div>
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest">
                                    Application Modernization
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] font-heading">
                                Stop <span className="text-gray-500 line-through">&quot;Redesigning.&quot;</span>
                                <br />
                                Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">Reinventing with Website Redevelopment</span>
                            </h1>

                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                Transform your legacy monolithic website into a scalable, AI-ready Digital Core. Our <span className="text-white font-bold">website redevelopment services</span> utilize the Strangler Fig Pattern to modernize your infrastructure without operational downtime.
                            </p>

                            <div className="space-y-3">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-lg border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/25 cursor-pointer"
                                >
                                    Schedule Technical Debt Assessment
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-gray-500 text-sm italic">
                                    Zero-Risk &quot;X-Ray&quot; Analysis of your current codebase.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Sidebar */}
                    <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%]">
                        <Sidebar />
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="lg:hidden container mx-auto px-4 pb-8 relative z-10">
                <Sidebar />
            </div>
        </section>
    );
}
