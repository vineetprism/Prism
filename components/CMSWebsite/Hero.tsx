'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';
import {
    Zap,
    Network,
    Server,
    ChevronRight
} from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[700px] lg:min-h-[750px] overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#2a2a2a] to-[#1F1F1F]">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: 'linear-gradient(#E92228 1px, transparent 1px), linear-gradient(90deg, #E92228 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }}></div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-[#E92228]/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-[#E92228]/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">
                    {/* Left - Main Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-left space-y-6">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-[#E92228] animate-pulse"></div>
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest">
                                    Enterprise Digital Transformation
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-heading">
                                Architecting{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">
                                    Intelligent
                                </span>
                                <br />
                                Digital Experiences
                            </h1>

                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                Move beyond monolithic legacy systems. We build{' '}
                                <span className="text-white font-medium">AI-integrated, headless CMS architectures</span>{' '}
                                that drive <span className="text-[#E92228] font-semibold">83% faster time-to-market</span>{' '}
                                and seamless omnichannel delivery.
                            </p>

                            {/* Glassmorphism Stats Row */}
                            <div className="flex flex-wrap gap-4 py-4">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-[#E92228]" />
                                    <div>
                                        <div className="text-xl font-bold text-white font-heading">83%</div>
                                        <div className="text-gray-400 text-xs">Faster Rollouts</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                    <Network className="w-5 h-5 text-[#D1D1D1]" />
                                    <div>
                                        <div className="text-xl font-bold text-white font-heading">MACH</div>
                                        <div className="text-gray-400 text-xs">Architecture</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                    <Server className="w-5 h-5 text-[#E92228]" />
                                    <div>
                                        <div className="text-xl font-bold text-white font-heading">99.9%</div>
                                        <div className="text-gray-400 text-xs">Uptime SLA</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/25 cursor-pointer"
                                >
                                    Schedule Architecture Assessment
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href="#case-studies" className="inline-flex items-center text-gray-400 hover:text-white text-base font-medium transition-colors underline underline-offset-4 py-4">
                                    View Case Studies →
                                </a>
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
