'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';
import {
    Shield,
    CheckCircle,
    ChevronRight
} from 'lucide-react';

interface HeroProps {
    onOpenModal?: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[700px] lg:min-h-[800px] overflow-hidden bg-white">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}></div>

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">
                    {/* Left - Main Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-left space-y-6">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full">
                                <Shield className="w-4 h-4 text-[#E92228]" />
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest font-mono">
                                    Strategic Security Leadership
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] font-heading">
                                Enterprise-Grade Security Leadership.&nbsp;
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">
                                    Fractional Cost.
                                </span>
                            </h1>

                            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                Secure your organization, accelerate SOC 2/ISO 27001 compliance, and reduce breach risk by <span className="text-gray-900 font-bold">70%</span>. Get the strategic oversight of a veteran CISO without the <span className="text-[#E92228] font-bold">$250k+</span> salary burden.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-xl shadow-[#E92228]/20 cursor-pointer"
                                >
                                    Start Your 100-Day Security Roadmap
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="border-t border-gray-100 mt-8 pt-6">
                                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                        SOC 2 Readiness in 2-4 Months
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                        Zero Long-Term Contracts
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                        100% Conflict-Free Advisory
                                    </div>
                                </div>
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
