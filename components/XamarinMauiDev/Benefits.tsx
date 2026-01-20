'use client';

import React from 'react';
import { TrendingUp, Zap, Shield, Cloud } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            num: "01",
            title: "50% Efficiency Gain",
            description: "Leveraging \"Single Project\" architecture and 95% code reuse across Android and iOS cuts development and maintenance costs in half compared to native approaches.",
            icon: TrendingUp,
        },
        {
            num: "02",
            title: "2.5x Performance Boost",
            description: "By eliminating the visual tree overhead of legacy Renderers and utilizing the modern .NET 8 Runtime, our MAUI apps launch and render significantly faster.",
            icon: Zap,
        },
        {
            num: "03",
            title: "Future-Proof Compliance",
            description: "Secure your place in the App Stores. Our solutions strictly adhere to the latest SDK requirements (Android API 35+ / iOS 18), ensuring you are never delisted.",
            icon: Shield,
        },
        {
            num: "04",
            title: "Cloud-Native Scalability",
            description: "We build with cloud in mind. Seamless integration with Azure App Service and AWS ensures your mobile frontend is backed by infinite serverless scale.",
            icon: Cloud,
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        Why Migrate With Us
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={index}
                                className="flex gap-6 md:gap-8 items-start bg-[#F9F1F0] rounded-2xl p-6 md:p-8 border-l-4 border-[#E92228]"
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
