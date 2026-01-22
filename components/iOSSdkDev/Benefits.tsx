'use client';

import React from 'react';

const benefits = [
    {
        stat: "30-40%",
        title: "Operational Efficiency",
        desc: "Custom workflows reduce manual friction, delivering verified efficiency gains over generic software."
    },
    {
        stat: "5x",
        title: "Maximum Monetization",
        desc: "Target the premium user base. iOS users drive higher average order values and higher Customer Lifetime Value (CLV)."
    },
    {
        stat: "91.9%",
        title: "Rapid Validation",
        desc: "Leverage our agile frameworks to launch MVPs faster. Our rapid-dev projects recover investment within year one."
    },
    {
        stat: "Zero",
        title: "Risk Mitigation",
        desc: "From \"Unexpected Rejections\" to data theft, our rigorous compliance and security protocols de-risk your digital innovation."
    }
];

export default function Benefits() {
    return (
        <section className="py-20 lg:py-32 bg-[#E92228] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="text-white/70 text-sm font-bold uppercase tracking-widest mb-2 block">
                        Key Benefits
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                        The Evidence
                    </h2>
                </div>

                {/* Big Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="text-center group relative">
                            {/* Giant Stat */}
                            <div className="mb-4">
                                <span className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-bold text-white font-heading leading-none group-hover:scale-105 transition-transform inline-block">
                                    {benefit.stat}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 font-heading">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/80 text-sm lg:text-base leading-relaxed font-body max-w-xs mx-auto">
                                {benefit.desc}
                            </p>

                            {/* Vertical Divider */}
                            {idx < benefits.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-white/20" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
