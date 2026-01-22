'use client';

import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2, RefreshCw, ShieldAlert, Zap } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-[#0F0F0F] overflow-hidden flex flex-col justify-center">
            {/* Background: Digital Horizon Grid (Dark Mode for High Contrast Tech Feel) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floor Grid */}
                <div className="absolute bottom-0 w-full h-[60%] opacity-20" style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(0%) scale(1.5)',
                    transformOrigin: 'bottom',
                    maskImage: 'linear-gradient(to top, black, transparent)'
                }}></div>

                {/* Ceiling Glow */}
                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#E92228]/10 to-transparent"></div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#E92228] rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-12">

                {/* Centered Headline Block */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#E92228]/10 border border-[#E92228]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#E92228] rounded-full"></span>
                        <span className="text-[#E92228] text-xs font-bold uppercase tracking-widest">Critical Update Required</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading tracking-tight leading-tight">
                        The Xamarin Era is <span className="text-[#E92228] line-through decoration-4 decoration-white/20">Over.</span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            The MAUI Era Begins.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-body">
                        Don&apos;t just patch a dying app. Re-engineer it for the next decade with high-performance .NET 8 architecture.
                    </p>
                </div>

                {/* Comparative HUD Layout */}
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">

                    {/* Card 1: The Problem (Legacy) */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute inset-0 bg-red-500/5 blur-xl group-hover:bg-red-500/10 transition-all duration-500"></div>
                        <div className="relative bg-[#1a1a1a] border border-red-900/30 rounded-2xl p-8 backdrop-blur-xl">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-red-900/20 rounded-lg">
                                    <ShieldAlert className="w-8 h-8 text-red-500" />
                                </div>
                                <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-bold rounded border border-red-500/20">DEPRECATED</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-200 mb-2">MyLegacyApp.Xamarin</h3>
                            <div className="space-y-4 my-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Support Status</span>
                                    <span className="text-red-400 font-mono">End of Life</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 w-[100%]"></div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-red-400">
                                    <AlertTriangle className="w-3 h-3" />
                                    <span>Store Compliance Risk: HIGH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle: The Transformation Engine */}
                    <div className="lg:col-span-2 flex flex-col items-center justify-center gap-4 relative py-8 lg:py-0">
                        {/* Animated Connection Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/20 via-red-500 to-red-500/20 -z-10"></div>

                        <div className="w-16 h-16 bg-[#E92228] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(233,34,40,0.4)] z-20">
                            <RefreshCw className="w-8 h-8 text-white" />
                        </div>
                        <div className="bg-[#1a1a1a] px-3 py-1 rounded border border-gray-800 text-[10px] text-gray-400 font-mono uppercase">
                            Re-Platforming
                        </div>
                    </div>

                    {/* Card 2: The Solution (Modern) */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute inset-0 bg-[#E92228]/5 blur-xl group-hover:bg-[#E92228]/20 transition-all duration-500"></div>
                        <div className="relative bg-[#1a1a1a] border border-[#E92228]/50 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                            <div className="absolute -top-3 -right-3 bg-[#E92228] text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
                                TARGET ARCHITECTURE
                            </div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-[#E92228]/20 rounded-lg">
                                    <Zap className="w-8 h-8 text-[#E92228]" />
                                </div>
                                <span className="px-3 py-1 bg-[#E92228]/10 text-[#E92228] text-xs font-bold rounded border border-[#E92228]/20">v8.0.0</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">MySuperApp.MAUI</h3>
                            <div className="space-y-4 my-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Performance</span>
                                    <span className="text-white font-mono font-bold">+250%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#E92228] w-[95%] shadow-[0_0_10px_rgba(233,34,40,0.5)]"></div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-white/80">
                                    <CheckCircle2 className="w-3 h-3 text-[#E92228]" />
                                    <span>Android 15 / iOS 18 Ready</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Primary CTA */}
                <div className="text-center mt-16">
                    <button
                        onClick={onOpenModal}
                        className="cursor-pointer group relative inline-flex items-center justify-center gap-4 bg-[#E92228] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-[0_0_20px_rgba(233,34,40,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                        Initiate Migration Audit
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#E92228] group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4 text-white group-hover:text-white" />
                        </div>
                    </button>
                    <p className="mt-4 text-sm text-gray-500">
                        Zero-Obligation Analysis • 48-Hour Turnaround
                    </p>
                </div>

            </div>
        </section>
    );
}
