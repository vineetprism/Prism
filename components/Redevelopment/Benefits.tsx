'use client';

import React from 'react';

export default function Benefits() {
    const benefits = [
        { num: "01", title: "Velocity & Agility", stat: "50%", statLabel: "More Deploys", desc: "Increase deployment frequency by 50%. Move from quarterly \"Big Bang\" releases to daily, risk-free feature updates." },
        { num: "02", title: "Cost Efficiency", stat: "30%", statLabel: "Reduced Waste", desc: "Shift from CAPEX to OPEX. Modern cloud architectures reduce hosting waste by up to 30% via auto-scaling." },
        { num: "03", title: "Conversion Acceleration", stat: "8.4%", statLabel: "More Conversions", desc: "Speed equals revenue. A 0.1s improvement in load time can drive an 8.4% increase in retail conversions." },
        { num: "04", title: "Future-Proof Security", stat: "80", statLabel: "Days Saved", desc: "Eliminate \"Black Box\" vulnerabilities. Documented, modern codebases reduce breach containment time by 80 days." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Measurable Outcomes</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The Business Case
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:from-white hover:to-white hover:shadow-2xl border border-gray-100 hover:border-[#E92228]/20 transition-all duration-500 hover:-translate-y-1">
                                {/* Large Number */}
                                <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#E92228]/5 flex items-center justify-center group-hover:bg-[#E92228] transition-all duration-500">
                                    <span className="text-4xl font-bold text-[#E92228] font-heading group-hover:text-white transition-colors">{benefit.num}</span>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900 font-heading">{benefit.title}</h3>
                                        {/* Stat Pill */}
                                        <div className="inline-flex items-center gap-2 bg-[#E92228]/10 px-4 py-2 rounded-full">
                                            <span className="text-2xl font-bold text-[#E92228]">{benefit.stat}</span>
                                            <span className="text-xs text-[#E92228] font-bold uppercase">{benefit.statLabel}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed font-body text-lg">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
