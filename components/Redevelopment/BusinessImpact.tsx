'use client';

import React from 'react';
import { Database, ChevronRight, Cpu } from 'lucide-react';

export default function BusinessImpact() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4 block">Why Modernize Now</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-8">
                        Why Website Redevelopment Now: The Economic Imperative
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed font-body mb-8">
                        Your website is no longer just a billboard; it is the operating system of your business. Legacy systems are a liability—costing you 30% more in hosting fees and exposing you to security breaches averaging $4.44M. Strategic <span className="font-bold text-gray-900">website redevelopment</span> eliminates these risks while unlocking growth potential.
                    </p>

                    {/* Warning Callout */}
                    <div className="bg-[#E92228]/5 border-l-4 border-[#E92228] p-5 rounded-r-xl mb-12 text-left max-w-2xl mx-auto">
                        <p className="text-gray-700 font-medium">
                            <span className="text-[#E92228] font-bold">Technical Debt Warning:</span> Prism Infoways moves you from &quot;Lift and Shift&quot; to <span className="text-[#E92228] font-bold">&quot;Migrate to Modernize&quot;</span>—turning your IT department from a cost center into an innovation engine.
                        </p>
                    </div>

                    {/* Visual: Monolith to Microservices - Enhanced */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200 shadow-lg">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                            {/* Monolith */}
                            <div className="flex flex-col items-center group">
                                <div className="relative">
                                    <div className="w-28 h-36 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                                        <Database className="w-12 h-12 text-gray-600" />
                                    </div>
                                    {/* Crack effect */}
                                    <div className="absolute top-4 right-2 w-0.5 h-8 bg-gray-500/50 rotate-12"></div>
                                    <div className="absolute bottom-8 left-3 w-0.5 h-6 bg-gray-500/50 -rotate-12"></div>
                                </div>
                                <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Monolith</span>
                                <span className="text-[#E92228] text-xs font-medium mt-1">High Debt</span>
                            </div>

                            {/* Arrow Animation */}
                            <div className="flex items-center gap-1">
                                <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-[#E92228]"></div>
                                <ChevronRight className="w-8 h-8 text-[#E92228] animate-pulse" />
                            </div>

                            {/* Microservices */}
                            <div className="flex flex-col items-center group">
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 bg-gradient-to-br from-[#E92228] to-[#ff6b6b] rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            <Cpu className="w-5 h-5 text-white" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-wider">Microservices</span>
                                <span className="text-[#E92228] text-xs font-medium mt-1">Scalable & Agile</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-8 italic">Transitioning from rigid monoliths to flexible, decoupled microservices.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
