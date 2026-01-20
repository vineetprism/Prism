'use client';

import React from 'react';
import { ShieldCheck, Maximize2, Lock, Sparkles } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            num: "01",
            title: "Risk-Mitigated MVP Architecture",
            description: "83% of mobile games fail within three years. We utilize a rigorous \"Minimum Viable Product\" methodology to validate market fit 3-4x faster than traditional cycles, protecting your capital exposure.",
            icon: ShieldCheck,
        },
        {
            num: "02",
            title: "Elastic Scaling (\"Thundering Herd\" Proof)",
            description: "Launch day is critical. Our backend solutions utilize Redis caching and auto-scaling cloud clusters to prevent service denials during viral traffic spikes, ensuring 99.9% uptime.",
            icon: Maximize2,
        },
        {
            num: "03",
            title: "Security & Fair Play Integrity",
            description: "We implement server-authoritative logic to prevent client-side cheating and exploits, while securing user PII with OAuth 2.0 and strict GDPR/CCPA compliance protocols.",
            icon: Lock,
        },
        {
            num: "04",
            title: "AI-Optimized Production",
            description: "Leveraging Generative AI for asset creation and automated QA testing, we reduce repetitive production hours, allowing budget to be reallocated to feature polish and user acquisition.",
            icon: Sparkles,
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        Why Choose Us
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={index}
                                className="flex gap-6 md:gap-8 items-start bg-[#F9F1F0] rounded-2xl p-6 md:p-8"
                            >
                                {/* Number */}
                                <div className="shrink-0">
                                    <span className="text-5xl md:text-6xl font-extrabold text-[#E92228] font-heading">
                                        {benefit.num}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#E92228] rounded-lg flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] font-heading">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed font-body">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
