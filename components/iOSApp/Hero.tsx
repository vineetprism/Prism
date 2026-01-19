'use client';

import React from 'react';
import { Smartphone, CheckCircle, ChevronRight } from 'lucide-react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[700px] lg:min-h-[800px] overflow-hidden bg-[#1F1F1F]">
            {/* Background Pattern - Apple-inspired Grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'linear-gradient(#E92228 1px, transparent 1px), linear-gradient(90deg, #E92228 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}></div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-[#E92228]/12 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-[#E92228]/8 rounded-full blur-[100px]"></div>

            {/* iOS Device Silhouette */}
            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
                <Smartphone className="w-[400px] h-[400px] text-white" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-20 pb-24 lg:pt-28 lg:pb-32 items-center">
                    {/* Left - Main Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-left space-y-6">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-[#E92228] animate-pulse"></div>
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest">
                                    Enterprise iOS Engineering
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-heading">
                                Monetize the{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#bd202e]">
                                    $406 Billion
                                </span>{' '}
                                iOS Economy
                                <br />
                                <span className="text-gray-300">with Native Enterprise Architecture.</span>
                            </h1>

                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                Transform your mobile presence from a utility to a{' '}
                                <span className="text-white font-medium">high-performance revenue engine</span>. Leverage{' '}
                                <span className="text-[#E92228] font-semibold">Swift 6 safety</span> and{' '}
                                <span className="text-[#E92228] font-semibold">2.5x higher user spending</span> potential with a zero-trust engineering partner.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={onOpenModal}
                                    aria-label="Schedule your technical discovery session"
                                    className="group inline-flex items-center px-8 py-4 min-h-[48px] bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 motion-reduce:transition-none shadow-lg shadow-[#E92228]/25 cursor-pointer"
                                >
                                    Schedule Your Technical Discovery
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Trust Marker */}
                            <div className="flex items-center gap-2 text-gray-500 text-sm pt-2">
                                <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                <span>Compliant with: <span className="text-gray-300 font-medium">HIPAA | GDPR | SOC2</span></span>
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
