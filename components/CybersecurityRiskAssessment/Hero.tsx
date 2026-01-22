'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';
import {
    Shield,
    AlertTriangle,
    DollarSign,
    ChevronRight,
    FileText
} from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[700px] lg:min-h-[800px] overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#2a2a2a] to-[#1F1F1F]">
            {/* Animated Grid Pattern - Technical Sophistication */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: 'linear-gradient(#E92228 1px, transparent 1px), linear-gradient(90deg, #E92228 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}></div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-10 right-[15%] w-[600px] h-[600px] bg-[#E92228]/15 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-10 left-[5%] w-[500px] h-[500px] bg-[#E92228]/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[100px]"></div>

            {/* Binary/Code rain effect - subtle */}
            <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 font-mono text-[#E92228] text-xs leading-tight whitespace-pre overflow-hidden">
                    {Array(20).fill(null).map((_, i) => (
                        <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                            01001000 01000001 01000011 01001011
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">
                    {/* Left - Main Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-left space-y-6">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-[#E92228] animate-pulse"></div>
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest font-mono">
                                    Cybersecurity Risk Assessment
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] font-heading">
                                Don&apos;t Just Detect.{' '}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">
                                    Engineer Resilience.
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                Move beyond compliance checkboxes. We architect{' '}
                                <span className="text-white font-semibold">Digital Trust strategies</span>{' '}
                                that reduce your breakout time, secure your bottom line, and fortify your infrastructure against the{' '}
                                <span className="text-[#E92228] font-bold font-mono">$10.5 trillion</span>{' '}
                                cybercrime economy.
                            </p>

                            {/* Glassmorphism Stats Row */}
                            <div className="flex flex-wrap gap-4 py-4">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                    <DollarSign className="w-5 h-5 text-[#E92228]" />
                                    <div>
                                        <div className="text-xl font-bold text-[#E92228] font-mono">$10.22M</div>
                                        <div className="text-gray-400 text-xs">Avg. US Breach Cost</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                    <div>
                                        <div className="text-xl font-bold text-white font-mono">200</div>
                                        <div className="text-gray-400 text-xs">Days Avg. Detection</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-[#E92228]" />
                                    <div>
                                        <div className="text-xl font-bold text-white font-mono">271%</div>
                                        <div className="text-gray-400 text-xs">ROI on Proactive</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/25 cursor-pointer"
                                >
                                    Schedule Your Assessment
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href="#sample-report" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-base font-medium transition-colors py-4">
                                    <FileText className="w-5 h-5" />
                                    View Sample Report →
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
