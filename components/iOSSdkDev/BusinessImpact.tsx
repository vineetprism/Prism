'use client';

import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

interface BusinessImpactProps {
    onOpenModal?: () => void;
}

export default function BusinessImpact({ onOpenModal }: BusinessImpactProps) {
    return (
        <section className="py-16 sm:py-24 bg-gray-50 border-b-4 border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Content */}
                    <div>
                        <span className="text-[#E92228] font-bold tracking-wider uppercase text-sm mb-2 block font-sans">
                            Strategic Imperative
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">
                            The Mobile-First <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-red-800">
                                Mandate.
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-body">
                            The iOS ecosystem is no longer just a channel; it is the <span className="font-bold text-gray-900">primary revenue driver</span>.
                            We move beyond simple functional deployment to build <span className="text-[#E92228] font-bold">&quot;Intelligent Mobility&quot; ecosystems</span>—integrating On-Device ML, AR, and Cloud connectivity to
                            future-proof your enterprise.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="flex items-center gap-2 text-[#E92228] font-bold hover:gap-4 transition-all group cursor-pointer"
                        >
                            View Market Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Visual - Split Cards */}
                    <div className="relative">
                        {/* Decorative background shape */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E92228]/10 to-transparent rounded-3xl transform rotate-3" />

                        <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Stat 1 */}
                                <div className="p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                    <h4 className="text-3xl font-bold text-gray-900 mb-1">75%</h4>
                                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold">Global Spend</p>
                                </div>

                                {/* Stat 2 */}
                                <div className="p-4 bg-[#E92228] rounded-2xl text-white shadow-lg shadow-[#E92228]/30">
                                    <h4 className="text-3xl font-bold mb-1">$626B</h4>
                                    <p className="text-[10px] sm:text-xs text-white/80 uppercase font-bold">Market Cap</p>
                                </div>

                                {/* Feature Box */}
                                <div className="col-span-2 p-5 bg-gray-900 rounded-2xl text-white flex items-center justify-between shadow-2xl">
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold mb-1">Intelligent Mobility</h4>
                                        <p className="text-xs text-gray-400">Future-Proof Ecosystem</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Layers className="w-5 h-5 text-[#E92228]" />
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
