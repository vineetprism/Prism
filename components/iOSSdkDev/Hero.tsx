'use client';

import React from 'react';
import { ArrowRight, Apple, Sparkles, TrendingUp, Lock, Gauge } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
            {/* Architectural Blueprint Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Lines */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Diagonal Construction Lines */}
                <div className="absolute top-0 right-0 w-[60%] h-full opacity-[0.03] border-l border-white/10 hidden lg:block">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-white/10" />
                    <div className="absolute top-2/4 left-0 w-full h-px bg-white/10" />
                    <div className="absolute top-3/4 left-0 w-full h-px bg-white/10" />
                </div>

                {/* Right Side Gradient Accent - Retaining the brand feel but softer */}
                <div
                    className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-br from-[#E92228]/10 via-[#8B0000]/10 to-transparent hidden lg:block"
                    style={{
                        clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="min-h-screen flex items-center py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

                        {/* Left Content - Matches User's Text EXACTLY */}
                        <div className="space-y-8 lg:pr-8">
                            {/* Floating Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full">
                                <Apple className="w-4 h-4 text-[#E92228]" />
                                <span className="text-white/90 text-sm font-medium tracking-wide">
                                    iOS Strategic Solutions
                                </span>
                                <span className="w-2 h-2 rounded-full bg-[#E92228] animate-pulse" />
                            </div>

                            {/* H1 Headline */}
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] font-heading">
                                    Transform
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] via-[#ff4d4d] to-[#E92228]">
                                        Business Logic
                                    </span>
                                    <br />
                                    into Intelligent
                                    <br />
                                    Digital Assets.
                                </h1>
                            </div>

                            {/* Subheadline */}
                            <p className="text-lg text-white/60 leading-relaxed max-w-lg font-body">
                                Drive <span className="text-[#E92228] font-semibold">30-40% higher operational efficiency</span> with
                                enterprise-grade iOS solutions designed for scale, security, and zero-friction compliance.
                            </p>

                            {/* CTA Button */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={onOpenModal}
                                    aria-label="Start your technical assessment"
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E92228] text-white text-base font-bold rounded-full hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-2xl shadow-[#E92228]/30 cursor-pointer"
                                >
                                    Start Your Technical Assessment
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Trust Line */}
                            <p className="text-sm text-white/40">
                                ✓ Zero-Obligation Analysis &nbsp;•&nbsp; ✓ 48-Hour Turnaround
                            </p>
                        </div>

                        {/* Right Visual - Bento Grid Stats */}
                        <div className="relative lg:pl-8">
                            {/* Bento Grid */}
                            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
                                {/* Large Card - Top Left */}
                                <div className="col-span-2 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-colors group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#E92228] flex items-center justify-center shadow-lg">
                                            <TrendingUp className="w-6 h-6 text-white" />
                                        </div>
                                        <Sparkles className="w-5 h-5 text-white/30 group-hover:text-[#E92228] transition-colors" />
                                    </div>
                                    <p className="text-4xl lg:text-5xl font-bold text-white mb-1">$185B</p>
                                    <p className="text-white/50 text-sm">App Store Revenue 2025</p>
                                    <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[72%] bg-gradient-to-r from-[#E92228] to-[#ff6b6b] rounded-full" />
                                    </div>
                                    <p className="text-white/40 text-xs mt-2">72% of global app spending</p>
                                </div>

                                {/* Card - Bottom Left */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/10 hover:border-white/20 transition-colors group">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#E92228] transition-colors">
                                        <Gauge className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-3xl font-bold text-white mb-1">99.9%</p>
                                    <p className="text-white/50 text-xs">Crash-Free Sessions</p>
                                </div>

                                {/* Card - Bottom Right */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/10 hover:border-white/20 transition-colors group">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#E92228] transition-colors">
                                        <Lock className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-3xl font-bold text-white mb-1">2.5x</p>
                                    <p className="text-white/50 text-xs">Higher User Spending</p>
                                </div>

                                {/* Wide Card - Bottom - Tech Stack */}
                                <div className="col-span-2 bg-gradient-to-r from-[#E92228] to-[#c91d22] rounded-3xl p-5 border border-white/20 shadow-xl shadow-[#E92228]/20">
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold border-2 border-white/30 shadow-sm relative z-30">S6</div>
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold border-2 border-white/30 shadow-sm relative z-20">UI</div>
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold border-2 border-white/30 shadow-sm relative z-10">ML</div>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-base leading-none mb-1">Swift 6 + SwiftUI + CoreML</p>
                                            <p className="text-white/70 text-xs uppercase tracking-wide">Enterprise-Grade Stack</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Red Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E92228] to-transparent lg:hidden" />
        </section>
    );
}
