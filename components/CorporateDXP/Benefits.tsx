'use client';

import React from 'react';

export default function Benefits() {
    const stats = [
        {
            num: "01",
            metric: "9,900%",
            label: "Financial Velocity",
            desc: "ROI on User Experience investments. We transform design from an aesthetic choice into a primary revenue driver."
        },
        {
            num: "02",
            metric: "$2.2M",
            label: "Risk Mitigation",
            desc: "Savings annually on data breach costs through AI-driven security automation and proactive threat modeling."
        },
        {
            num: "03",
            metric: "50%",
            label: "Development Speed",
            desc: "Faster time-to-market. Our AI-augmented engineering teams reduce manual testing by 80%."
        },
        {
            num: "04",
            metric: "30%",
            label: "Operational Efficiency",
            desc: "OpEx Reduction achieved by modernizing data platforms and retiring legacy infrastructure."
        }
    ];

    return (
        <section id="roi-benchmarks" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1F1F1F] via-[#2a2a2a] to-[#1F1F1F] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading">
                            Key <span className="text-[#E92228]">Benefits</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto font-body">
                            The Hard Stats: Real measurable impact from our enterprise digital transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E92228]/50 transition-all duration-300 group">
                                <div className="text-[#E92228]/30 text-sm font-bold mb-2 font-heading">{stat.num}</div>
                                <div className="text-5xl sm:text-6xl font-bold text-[#E92228] mb-2 font-heading group-hover:scale-110 transition-transform duration-300">
                                    {stat.metric}
                                </div>
                                <div className="text-white font-semibold text-lg mb-2 font-heading">{stat.label}</div>
                                <div className="text-gray-500 text-sm font-body leading-relaxed">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
