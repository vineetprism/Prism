'use client';

import React from 'react';

const benefits = [
    {
        stat: "01",
        title: "Economic Efficiency",
        desc: "Leverage KMP to share 99% of business logic, cutting duplicate maintenance costs by half."
    },
    {
        stat: "02",
        title: "Risk Mitigation",
        desc: "Eliminate the \"Process Killing\" risks of fragmented device manufacturers (Samsung, Xiaomi, Pixel) through rigorous device farm testing."
    },
    {
        stat: "03",
        title: "Data Sovereignty",
        desc: "Secure your proprietary algorithms with ProGuard/R8 obfuscation and encrypted, token-based authentication architectures."
    },
    {
        stat: "04",
        title: "Market Velocity",
        desc: "Accelerate integration for your partners with strictly versioned (SemVer), self-documenting SDKs hosted on Maven Central."
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
                            {/* Giant Number */}
                            <div className="mb-4">
                                <span className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-bold text-white font-heading leading-none group-hover:scale-105 transition-transform inline-block relative">
                                    {benefit.stat}
                                    <div className="absolute bottom-1 left-0 w-full h-1 bg-white/30 rounded-full" />
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
