'use client';

import React from 'react';

const benefits = [
    {
        id: "01",
        title: "70% Cost Efficiency",
        description: "Eliminate the $425k+ Total Cost of Ownership of a full-time executive. Reallocate savings ($200k+) into operational tooling and cyber insurance."
    },
    {
        id: "02",
        title: "Accelerated Sales Cycles",
        description: "Stop losing enterprise deals due to security questionnaires. We slash response times and achieve SOC 2 readiness in as little as 12 weeks."
    },
    {
        id: "03",
        title: "Platform-Driven Visibility",
        description: "We leverage AI-driven GRC platforms (Drata, Vanta) to provide real-time, 24/7 visibility into your compliance posture—no spreadsheets required."
    },
    {
        id: "04",
        title: "Conflict-Free Independence",
        description: "Unlike MSPs, we don't resell hardware. Our advice is objective, technology-agnostic, and focused entirely on your risk profile, not our margins."
    }
];

export default function Benefits() {
    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Why Choose <span className="text-[#E92228]">Fractional</span>?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex gap-6 group">
                            <div className="text-5xl font-bold text-[#E92228]/20 group-hover:text-[#E92228] transition-colors duration-300 font-heading leading-none shrink-0">
                                {benefit.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#E92228] transition-colors duration-300">
                                    <span className="text-[#E92228]">{benefit.title.split(' ').slice(0, 1)}</span> {benefit.title.split(' ').slice(1).join(' ')}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
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
