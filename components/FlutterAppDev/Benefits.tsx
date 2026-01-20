'use client';

import React from 'react';

export default function Benefits() {
    const benefits = [
        {
            num: "01",
            title: "50% Faster Time-to-Market",
            description: "Launch features simultaneously on iOS and Android. Rapid iteration with \"Hot Reload\" cuts dev cycles by half.",
        },
        {
            num: "02",
            title: "98% Code Reusability",
            description: "Share business logic, networking, and UI code. Eliminate \"logic drift\" between platforms.",
        },
        {
            num: "03",
            title: "Native-Grade Performance",
            description: "Powered by the Impeller Rendering Engine, delivering consistent 60/120 FPS without the \"bridge\" latency of web-based tools.",
        },
        {
            num: "04",
            title: "30-50% TCO Reduction",
            description: "Slash long-term maintenance costs. One codebase means one team, one test suite, and unified bug fixes.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        The Hard Stats
                    </h2>
                </div>

                {/* Benefits List */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex gap-6 md:gap-10 items-start bg-white rounded-2xl p-6 md:p-8 shadow-lg border-t-4 border-[#E92228]"
                        >
                            {/* Number */}
                            <div className="shrink-0">
                                <span className="text-5xl md:text-7xl font-extrabold text-[#E92228] font-heading">
                                    {benefit.num}
                                </span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-2 font-heading">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-body">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
