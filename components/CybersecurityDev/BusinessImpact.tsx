
'use client';

import React from 'react';
import { ArrowRight, Layers, Target, Zap } from 'lucide-react';

interface BusinessImpactProps {
    onOpenModal?: () => void;
}

export default function BusinessImpactDesign3({ onOpenModal }: BusinessImpactProps) {
    return (
        <section className="py-16 sm:py-24 bg-gradient-to-br from-[#F9F1F0] to-white border-b-4 border-[#D1D1D1]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Content */}
                    <div>
                        <span className="text-[#E92228] font-bold tracking-wider uppercase text-sm mb-2 block font-sans">
                            Strategic Imperative
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-6 leading-tight font-heading">
                            The Mobile-First <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#bd202e]">
                                Mandate.
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-body">
                            The iOS ecosystem is no longer just a channel; it is the <span className="font-bold text-[#1F1F1F]">primary revenue driver</span>.
                            We move beyond simple functional deployment to build <span className="text-[#E92228] font-bold">&quot;Intelligent Mobility&quot; ecosystems</span>—integrating On-Device ML, AR, and Cloud connectivity to
                            future-proof your enterprise.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="flex items-center gap-2 text-[#E92228] font-bold hover:gap-4 transition-all group cursor-pointer font-poppins"
                        >
                            View Market Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Visual - Stacked Cards */}
                    <div className="relative space-y-4">
                        {/* Card 1 - Stats */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#E92228]/20 hover:border-[#E92228] transition-all duration-300 hover:translate-x-2">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold text-[#E92228] mb-1 font-heading">75%</h3>
                                    <p className="text-xs text-gray-600 uppercase font-bold">Global Mobile Spend</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E92228] to-[#bd202e] flex items-center justify-center">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="h-2 bg-[#F9F1F0] rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-gradient-to-r from-[#E92228] to-[#bd202e] rounded-full"></div>
                            </div>
                        </div>

                        {/* Card 2 - Featured */}
                        <div className="bg-gradient-to-br from-[#E92228] to-[#bd202e] rounded-2xl p-6 shadow-2xl shadow-[#E92228]/40 text-white hover:scale-[1.02] transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-1 font-heading">$626B</h3>
                                    <p className="text-xs text-white/90 uppercase font-bold">Annual Market Cap</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <p className="text-sm text-white/80">iOS dominates premium mobile revenue worldwide</p>
                        </div>

                        {/* Card 3 - Feature */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#D1D1D1] hover:border-[#E92228] transition-all duration-300 hover:translate-x-2">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-1 font-heading">Intelligent Mobility</h3>
                                    <p className="text-xs text-gray-600">Future-Proof Ecosystem</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#F9F1F0] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#E92228] group-hover:to-[#bd202e] transition-all">
                                    <Layers className="w-6 h-6 text-[#E92228] group-hover:text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}