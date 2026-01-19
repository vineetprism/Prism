'use client';

import React from 'react';
import { ChevronRight, ArrowRight, Smartphone, BarChart3, Shield, Zap } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
            {/* Geometric Background Pattern - Optimized for Mobile */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Simplified Diagonal Lines for Mobile */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 50px,
                        #E92228 50px,
                        #E92228 51px
                    )`
                }}></div>

                {/* Static Gradients instead of Animated Pulses for Mobile performance */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-gradient-radial from-[#E92228]/10 to-transparent blur-3xl"></div>

                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-[#E92228]/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 min-h-screen items-center py-24 lg:py-0">

                    {/* Left - Content - Prioritized for LCP */}
                    <div className="space-y-6 lg:space-y-8">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 lg:w-12 bg-[#E92228]"></div>
                            <span className="text-[#E92228] text-xs lg:text-sm font-bold uppercase tracking-[0.2em]">
                                Enterprise Mobile Solutions
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] font-heading">
                            Engineering Secure,{' '}
                            <span className="relative inline-block whitespace-nowrap">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">
                                    Scalable
                                </span>
                                <div className="absolute -bottom-1 lg:-bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#E92228] to-transparent rounded-full"></div>
                            </span>{' '}
                            <br className="hidden lg:block" />
                            Digital Ecosystems
                        </h1>

                        <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-body">
                            Shift from project delivery to <span className="text-white font-medium">product evolution</span>.
                            We build cloud-native mobile solutions that integrate with legacy infrastructure
                            and drive <span className="text-[#E92228] font-semibold">measurable revenue growth</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={onOpenModal}
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#E92228] text-white text-lg font-bold transition-all duration-300 cursor-pointer shadow-lg shadow-[#E92228]/20 hover:shadow-[#E92228]/40 rounded-sm"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
                            >
                                <span className="flex items-center gap-2">
                                    Start Your Transformation
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="group inline-flex items-center justify-center gap-2 px-6 py-4 text-white/80 hover:text-[#E92228] transition-colors font-medium cursor-pointer">
                                View Architecture Process
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right - Dashboard Mockup - Simplified for Mobile */}
                    <div className="relative mt-8 lg:mt-0 lg:pl-8">
                        {/* Phone Frame */}
                        <div className="relative mx-auto w-[260px] sm:w-[320px] lg:w-[360px]">
                            {/* Outer Glow - Reduced strength on mobile */}
                            <div className="absolute -inset-4 bg-gradient-to-b from-[#E92228]/10 to-transparent rounded-[48px] blur-xl lg:blur-2xl"></div>

                            {/* Phone Body */}
                            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] p-2 sm:p-3 shadow-2xl border border-white/10">
                                {/* Screen */}
                                <div className="bg-[#0f0f0f] rounded-[32px] overflow-hidden aspect-[9/19]">
                                    {/* Status Bar */}
                                    <div className="h-6 sm:h-8 bg-[#0f0f0f] flex items-center justify-center">
                                        <div className="w-16 sm:w-20 h-4 sm:h-5 bg-black rounded-full"></div>
                                    </div>

                                    {/* Dashboard Content */}
                                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                                        {/* Header */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-500 text-[10px] sm:text-xs">Welcome back</p>
                                                <p className="text-white font-bold text-sm sm:text-base">Dashboard</p>
                                            </div>
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#E92228] flex items-center justify-center">
                                                <span className="text-white text-[10px] sm:text-xs font-bold">P</span>
                                            </div>
                                        </div>

                                        {/* Stats Cards */}
                                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                            <div className="bg-white/5 rounded-xl p-2 sm:p-3 border border-white/5">
                                                <BarChart3 className="w-4 h-4 text-[#E92228] mb-1 sm:mb-2" />
                                                <p className="text-white font-bold text-base sm:text-lg">$2.4M</p>
                                                <p className="text-gray-500 text-[10px] sm:text-xs">Revenue</p>
                                            </div>
                                            <div className="bg-white/5 rounded-xl p-2 sm:p-3 border border-white/5">
                                                <Zap className="w-4 h-4 text-green-400 mb-1 sm:mb-2" />
                                                <p className="text-white font-bold text-base sm:text-lg">+127%</p>
                                                <p className="text-gray-500 text-[10px] sm:text-xs">Growth</p>
                                            </div>
                                        </div>

                                        {/* Chart Placeholder (Simpler for better render perf) */}
                                        <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5">
                                            <div className="flex items-end justify-between h-16 sm:h-20 gap-1">
                                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-gradient-to-t from-[#E92228] to-[#E92228]/50 rounded-t-sm"
                                                        style={{ height: `${h}%` }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom Cards */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-2 sm:p-3">
                                                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#E92228]" />
                                                <span className="text-white text-xs sm:text-sm">Security: Active</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-2 sm:p-3">
                                                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                                                <span className="text-white text-xs sm:text-sm">3 Devices Connected</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Edge */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E92228]/50 to-transparent"></div>
        </section>
    );
}
