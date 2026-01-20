'use client';

import React from 'react';
import { TrendingDown, Zap, Cpu, Users } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            num: "01",
            title: "Economic Efficiency",
            description: "Achieve a 30-40% reduction in initial development CapEx and lower your 5-year Total Cost of Ownership by utilizing a unified team structure.",
            icon: TrendingDown,
        },
        {
            num: "02",
            title: "Accelerated Velocity",
            description: "Cut Time-to-Market by nearly half. Our unified workflow allows for simultaneous feature rollouts, deploying updates 2.5x faster than dual-native teams.",
            icon: Zap,
        },
        {
            num: "03",
            title: "Native Performance",
            description: "Leverage the JSI Interface and Hermes Engine to bypass the legacy bridge, delivering synchronous UI updates and instant app startup times.",
            icon: Cpu,
        },
        {
            num: "04",
            title: "Talent Stability",
            description: "Mitigate recruitment bottlenecks by tapping into the massive JavaScript/TypeScript talent pool, reducing staffing overhead by ~50%.",
            icon: Users,
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        Key Benefits
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
