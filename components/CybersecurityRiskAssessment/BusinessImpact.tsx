'use client';

import React from 'react';
import { TrendingDown, TrendingUp, DollarSign, Clock } from 'lucide-react';

interface BusinessImpactProps {
    onOpenModal?: () => void;
}

export default function BusinessImpact({ onOpenModal }: BusinessImpactProps) {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(#E92228 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E92228]/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="h-[2px] w-8 bg-[#E92228]"></div>
                            <span className="text-[#E92228] font-bold uppercase tracking-widest text-sm font-mono">
                                The Business Case
                            </span>
                            <div className="h-[2px] w-8 bg-[#E92228]"></div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-6">
                            The Cost of the{' '}
                            <span className="text-[#E92228]">&quot;Breach Economy&quot;</span>
                        </h2>

                        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-body">
                            In 2025, cybersecurity is no longer an IT ticket; it is a{' '}
                            <span className="text-white font-semibold">macroeconomic survival trait</span>. 
                            With the average US data breach costing{' '}
                            <span className="text-[#E92228] font-bold font-mono">$10.22 Million</span>, 
                            the gap between &quot;Secure&quot; and &quot;Breached&quot; is measured in revenue, not just packets.
                        </p>
                    </div>

                    {/* The Contrast - Two Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left - The Risk */}
                        <div className="group relative bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-500/20 rounded-3xl p-8 lg:p-10 hover:border-red-500/40 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#E92228]/20 to-transparent rounded-tl-3xl"></div>
                            
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-[#E92228]/20 rounded-xl flex items-center justify-center">
                                        <TrendingDown className="w-6 h-6 text-[#E92228]" />
                                    </div>
                                    <div>
                                        <span className="text-[#E92228] text-xs font-bold uppercase tracking-widest font-mono">The Risk</span>
                                        <h3 className="text-xl font-bold text-white font-heading">Without Protection</h3>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <DollarSign className="w-8 h-8 text-[#E92228] flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-4xl lg:text-5xl font-bold text-[#E92228] font-mono mb-2">
                                                $1.39M
                                            </p>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Lost for every breach lasting over <span className="text-white font-semibold">200 days</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
                                        <p className="text-gray-500 text-sm">
                                            Average time to identify a breach: <span className="text-gray-300 font-mono">207 days</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - The Solution */}
                        <div className="group relative bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-500/20 rounded-3xl p-8 lg:p-10 hover:border-emerald-500/40 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-tr-3xl"></div>
                            
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono">The Solution</span>
                                        <h3 className="text-xl font-bold text-white font-heading">With Prism Infoways</h3>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <TrendingUp className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-4xl lg:text-5xl font-bold text-[#E92228] font-mono mb-2">
                                                271%
                                            </p>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                ROI on <span className="text-white font-semibold">proactive security investments</span> and personnel training
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                        </div>
                                        <p className="text-gray-500 text-sm">
                                            Shift from <span className="text-gray-300">reactive</span> to <span className="text-emerald-400 font-semibold">proactive</span> security posture
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <button
                            onClick={onOpenModal}
                            className="inline-flex items-center gap-2 text-[#E92228] font-bold hover:text-white transition-colors cursor-pointer font-mono"
                        >
                            Calculate Your Risk Exposure →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
