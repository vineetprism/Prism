'use client';

import React from 'react';
import { ArrowRight, Layers, ShieldCheck } from 'lucide-react';

interface BusinessImpactProps {
    onOpenModal: () => void;
}

export default function BusinessImpact({ onOpenModal }: BusinessImpactProps) {
    return (
        <section className="py-16 sm:py-24 bg-gray-50 border-b-4 border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Content */}
                    <div>
                        <span className="text-[#E92228] font-bold tracking-wider uppercase text-sm mb-2 block font-sans">
                            Cost of Compromise
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">
                            The Cost of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-red-800">
                                Compromise.
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-body">
                            In 2025, the mobile endpoint is not just a channel; it is your infrastructure.
                            With the global <span className="font-bold text-gray-900">Cost of Poor Software Quality (CoPQ)</span> reaching
                            <span className="text-[#E92228] font-bold"> $2.41 Trillion</span>, the risk of sub-par engineering is existential.
                            Prism Infoways eliminates this risk by replacing legacy fragility with resilient, defensible Android architectures.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="flex items-center gap-2 text-[#E92228] font-bold hover:gap-4 transition-all group cursor-pointer"
                        >
                            View Risk Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Visual - Floating Glass Stack Strategy */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-[#E92228]/20 to-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative w-full max-w-sm perspective-[1000px]">
                            {/* Back Card - The Problem (Legacy) */}
                            <div className="absolute top-0 left-4 w-full h-[320px] bg-white border border-red-100 rounded-2xl p-6 shadow-sm transform -rotate-6 scale-95 opacity-60 z-0">
                                <div className="flex items-center gap-2 mb-4 opacity-50">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                        <Layers className="w-4 h-4 text-red-500" />
                                    </div>
                                    <span className="font-mono text-xs text-red-500 uppercase tracking-widest">Legacy Infrastructure</span>
                                </div>
                                <div className="space-y-3 opacity-40">
                                    <div className="h-2 w-3/4 bg-red-100 rounded" />
                                    <div className="h-2 w-1/2 bg-red-100 rounded" />
                                    <div className="h-2 w-5/6 bg-red-100 rounded" />
                                </div>
                                <div className="mt-8 p-3 bg-red-50 rounded border border-red-100 flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-red-400" />
                                    <span className="text-xs font-bold text-red-400">Security Vulnerabilities Detected</span>
                                </div>
                            </div>

                            {/* Front Card - The Solution (Prism) */}
                            <div className="relative w-full h-[320px] bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-2xl shadow-gray-200/50 transform rotate-2 z-10 transition-transform hover:scale-105 duration-500">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E92228] to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                                            <ShieldCheck className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900">Prism Architecture</h4>
                                            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wide">Enterprise Grade</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E92228] animate-pulse" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E92228]/30" />
                                    </div>
                                </div>

                                {/* Main Metric */}
                                <div className="mb-8">
                                    <div className="text-4xl font-bold text-gray-900 mb-1 tracking-tight">
                                        $2.41<span className="text-[#E92228]">T</span>
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium">Risk Mitigated Globally</p>
                                </div>

                                {/* Stats Graph */}
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-bold text-gray-700">Code Reusability (KMP)</span>
                                            <span className="font-bold text-[#E92228]">60%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[60%] bg-[#E92228] rounded-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-bold text-gray-700">Compliance Score</span>
                                            <span className="font-bold text-[#E92228]">100%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-[#E92228] rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
