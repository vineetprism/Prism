'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';
import { ShoppingBag, ChevronRight, ExternalLink } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[800px] lg:min-h-[850px] overflow-hidden bg-black">

            {/* Aurora Mesh Gradients */}
            <div className="absolute inset-0">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#E92228] opacity-20 rounded-full blur-[150px]"></div>
                <div className="absolute top-[30%] right-[-15%] w-[700px] h-[700px] bg-[#bd202e] opacity-15 rounded-full blur-[180px]"></div>
                <div className="absolute bottom-[-30%] left-[20%] w-[500px] h-[500px] bg-[#E92228] opacity-10 rounded-full blur-[120px]"></div>
            </div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }}></div>

            {/* Floating Glass Elements */}
            <div className="absolute top-[15%] right-[8%] w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-2xl backdrop-blur-sm border border-white/10 hidden xl:block animate-pulse"></div>
            <div className="absolute bottom-[25%] right-[15%] w-20 h-20 bg-gradient-to-br from-[#E92228]/20 to-transparent rounded-xl backdrop-blur-sm border border-[#E92228]/20 hidden xl:block"></div>
            <div className="absolute top-[40%] left-[5%] w-16 h-16 bg-gradient-to-br from-[#E92228]/10 to-transparent rounded-lg backdrop-blur-sm border border-[#E92228]/10 hidden xl:block"></div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-24 pb-28 lg:pt-32 lg:pb-36 items-center">
                    {/* Left - Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-[#E92228] rounded-full animate-pulse"></div>
                                <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">
                                    Shopify Plus Partner
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] font-heading">
                                Turn Commerce{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">Complexity</span>
                                <br />
                                <span className="text-gray-300">into Revenue at Scale.</span>
                            </h1>

                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                Move beyond rigid legacy systems. We engineer <span className="text-white font-medium">composable, high-performance Shopify Plus ecosystems</span> designed for <span className="text-[#E92228] font-semibold">99.99% uptime</span> and measurable TCO reduction.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer"
                                >
                                    <ShoppingBag className="w-5 h-5 mr-3" />
                                    Schedule Your Strategic Consult
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="inline-flex items-center text-gray-400 hover:text-[#E92228] font-medium transition-colors duration-200 cursor-pointer py-4">
                                    <span className="underline underline-offset-4 decoration-gray-600 hover:decoration-[#E92228]">View Migration Framework</span>
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </button>
                            </div>

                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {['Shopify Plus', 'Hydrogen', 'Headless Commerce', 'ERP Integration'].map((tech, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-sm font-medium hover:border-[#E92228]/50 hover:text-white transition-all cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Sidebar */}
                    <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%] relative z-20">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}
