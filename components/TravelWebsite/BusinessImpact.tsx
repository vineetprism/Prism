'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E92228]/5 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        {/* Left - Big Stat */}
                        <div className="lg:col-span-2 text-center lg:text-left">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4 block">Market Reality</span>
                            <div className="mb-6">
                                <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b] font-heading">$1.44T</span>
                            </div>
                            <p className="text-gray-600 text-lg">Projected travel planner market by <span className="font-bold text-gray-900">2032</span></p>
                            <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-3 h-3 rounded-full bg-[#E92228] animate-pulse"></div>
                                <span className="text-gray-500 text-sm">Legacy infrastructure is the bottleneck</span>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="lg:col-span-3">
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-heading mb-8">
                                The Era of the Monolith is <span className="relative">Over<span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E92228]"></span></span>.
                            </h2>

                            <div className="space-y-6">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    The winners in 2026 aren&apos;t just selling rooms; they are mastering <span className="font-semibold text-gray-900">inventory concurrency</span>, <span className="font-semibold text-gray-900">dynamic AI pricing</span>, and <span className="font-semibold text-gray-900">data sovereignty</span>.
                                </p>

                                <div className="bg-gradient-to-r from-[#0c1929] to-[#0a1628] rounded-2xl p-6 border-l-4 border-[#E92228]">
                                    <p className="text-gray-300 leading-relaxed">
                                        We don&apos;t just build websites; we engineer <span className="text-[#E92228] font-bold">Intelligent Operations</span> that turn latency into conversion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
