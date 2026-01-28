'use client';

import React from 'react';
import {
    Zap,
    TrendingUp,
    Wallet,
    Lock
} from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            icon: <Zap className="w-8 h-8 text-[#E92228]" />,
            title: "The ROI of Speed",
            desc: "We adhere to the \"3-Second Rule.\" By optimizing Core Web Vitals, we protect your conversion rates and ad spend."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-[#E92228]" />,
            title: "Operational Efficiency",
            desc: "Our integrated dynamic web development solutions systems reduce manual data entry and workflow friction, allowing your team to focus on high-value tasks."
        },
        {
            icon: <Wallet className="w-8 h-8 text-[#E92228]" />,
            title: "Financial Predictability",
            desc: "Our rigorous Discovery Workshop and transparent Agile Sprints ensure you know exactly what you're building, before we build it."
        },
        {
            icon: <Lock className="w-8 h-8 text-[#E92228]" />,
            title: "Security as a Standard",
            desc: "We don't just \"install plugins.\" We harden your architecture against XSS, SQLi, and the modern threat landscape."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#000000] text-white overflow-hidden relative">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E92228]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
                            Why Choose Our Dynamic Website Development Company
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            The measurable advantages of engineering excellence in dynamic website solutions.
                        </p>
                    </div>

                    {/* Refined Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#E92228]/50 hover:bg-white/[0.07] transition-all duration-300 group overflow-hidden"
                            >
                                {/* Abstract background shape for visual interest */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#E92228]/10 transition-colors duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-4">
                                        <div className="shrink-0 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#E92228]/30 group-hover:scale-110 transition-all duration-300">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold font-heading text-white group-hover:text-white/90">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
