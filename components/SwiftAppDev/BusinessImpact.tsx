'use client';

import React from 'react';

export default function BusinessImpact() {
    const stats = [
        { value: "$78B", label: "iOS User Acquisition Spend" },
        { value: "31%", label: "Paid Install Growth (NA)" },
        { value: "2.5x", label: "Higher iOS LTV vs Android" },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-6">
                        The iOS Premium is Real.
                    </h2>

                    {/* Copy */}
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
                        While Android secures volume, iOS secures value. With global iOS user acquisition spend hitting $78 Billion and paid installs surging 31% in North America, the mobile economy has bifurcated. We build for the platform where your most valuable customers live.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl md:text-5xl font-extrabold text-[#E92228] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Visual Diagram - LTV Comparison */}
                    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-xl font-bold text-[#1F1F1F] mb-8">
                            Lifetime Value Comparison
                        </h3>
                        <div className="flex items-end justify-center gap-12">
                            {/* iOS Bar */}
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-24 bg-gradient-to-t from-[#E92228] to-[#ff6b6b] rounded-t-lg transition-all duration-500 hover:scale-105"
                                    style={{ height: '200px' }}
                                />
                                <div className="mt-4 text-center">
                                    <div className="font-bold text-[#1F1F1F]">iOS</div>
                                    <div className="text-sm text-gray-500">$48 Avg LTV</div>
                                </div>
                            </div>

                            {/* Android Bar */}
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-24 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg transition-all duration-500 hover:scale-105"
                                    style={{ height: '80px' }}
                                />
                                <div className="mt-4 text-center">
                                    <div className="font-bold text-[#1F1F1F]">Android</div>
                                    <div className="text-sm text-gray-500">$19 Avg LTV</div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">
                            Source: Industry benchmarks 2025-2026
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
