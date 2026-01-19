'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E92228]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        {/* Left - Stats Column */}
                        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl hover:border-[#E92228]/20 transition-all duration-300">
                                <div className="text-4xl lg:text-5xl font-bold text-[#E92228] mb-2 font-heading">79%</div>
                                <p className="text-gray-500 text-sm">of the Web powered by PHP</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl hover:border-[#E92228]/20 transition-all duration-300">
                                <div className="text-4xl lg:text-5xl font-bold text-[#E92228] mb-2 font-heading">91%</div>
                                <p className="text-gray-500 text-sm">Reduction in API Response</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center col-span-2 group hover:shadow-xl hover:border-[#E92228]/20 transition-all duration-300">
                                <div className="text-4xl lg:text-5xl font-bold text-[#E92228] mb-2 font-heading">45%</div>
                                <p className="text-gray-500 text-sm">Cost Efficiency vs Java/Python</p>
                            </div>
                        </div>

                        {/* Right - Quote Content */}
                        <div className="lg:col-span-3 relative">
                            {/* Quote Mark */}
                            <div className="absolute -top-4 -left-4 text-[120px] text-[#E92228]/10 font-serif leading-none select-none hidden lg:block">&quot;</div>

                            <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-xl border-l-4 border-[#E92228]">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-heading mb-6">
                                    Code That <span className="text-[#E92228]">Compounds Value</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed font-body mb-6">
                                    In the modern digital ecosystem, technology selection defines competitive trajectory. PHP has evolved into a formidable enterprise platform. At Prism Infoways, we don&apos;t just &apos;write code.&apos;
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed font-body">
                                    We engineer resilient systems using the <span className="font-semibold text-[#E92228]">&apos;Strangler Fig&apos; pattern</span> to modernize legacy monoliths and Asynchronous architectures to crush latency—delivering a Total Cost of Ownership that fuels reinvestment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
