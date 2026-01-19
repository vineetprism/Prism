'use client';

import React from 'react';
import { TrendingUp, Shield, Zap, Layers } from 'lucide-react';

const benefits = [
    {
        num: '01',
        icon: TrendingUp,
        title: 'ROI-First Development',
        stat: '404%',
        statLabel: 'Subscription Growth',
        desc: 'We build for revenue. Case studies show fan-centered design can drive a 404% increase in subscriptions.'
    },
    {
        num: '02',
        icon: Shield,
        title: 'The Security Shield',
        stat: '$4.88M',
        statLabel: 'Avg. Breach Cost Avoided',
        desc: 'With data breaches averaging $4.88M, we implement RASP and biometric authentication to mitigate liability.'
    },
    {
        num: '03',
        icon: Zap,
        title: 'Operational Velocity',
        stat: '-20%',
        statLabel: 'Supply Chain Costs',
        desc: 'Automate workflows to reduce supply chain costs by 20% and streamline creative production.'
    },
    {
        num: '04',
        icon: Layers,
        title: 'Future-Proof Scale',
        stat: '∞',
        statLabel: 'Scalability',
        desc: 'Eliminate technical debt. Our microservices architecture ensures you can add features without breaking the system.'
    }
];

export default function Benefits() {
    return (
        <section className="py-20 lg:py-32 bg-[#F9F1F0] relative overflow-hidden">
            {/* Decorative Elements - Simplified for Mobile */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E92228]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 lg:w-12 bg-[#E92228]"></div>
                            <span className="text-[#E92228] text-xs lg:text-sm font-bold uppercase tracking-[0.2em]">
                                The ROI
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Why Partner With Us?
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-md lg:text-right font-body text-sm lg:text-base">
                        Quantifiable results that transform your mobile investment into a revenue engine.
                    </p>
                </div>

                {/* Horizontal Cards */}
                <div className="space-y-4 lg:space-y-6">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 lg:hover:border-[#E92228]/30 transition-all duration-300 lg:hover:shadow-xl"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Left - Number & Icon */}
                                <div className="lg:w-48 shrink-0 bg-[#1F1F1F] p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-between lg:justify-center relative overflow-hidden">
                                    {/* Background Number */}
                                    <span className="absolute left-4 lg:left-auto text-6xl lg:text-[120px] font-bold text-white/5 font-heading leading-none select-none">
                                        {benefit.num}
                                    </span>

                                    <div className="relative z-10 flex items-center gap-4 lg:block">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-[#E92228] flex items-center justify-center shadow-lg shadow-[#E92228]/30">
                                            <benefit.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                        </div>
                                    </div>

                                    <span className="relative z-10 text-white/60 text-sm font-bold mt-0 lg:mt-4 tracking-wider hidden lg:block">
                                        {benefit.num}
                                    </span>
                                </div>

                                {/* Right - Content */}
                                <div className="flex-1 p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-2 lg:mb-3 lg:group-hover:text-[#E92228] transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-body">
                                            {benefit.desc}
                                        </p>
                                    </div>

                                    {/* Stat Badge */}
                                    <div className="pt-4 lg:pt-0 border-t border-gray-100 lg:border-t-0 lg:shrink-0 lg:w-40 flex items-center justify-between lg:block lg:text-right">
                                        <div>
                                            <div className="text-3xl lg:text-5xl font-bold text-[#E92228] font-heading">
                                                {benefit.stat}
                                            </div>
                                            <p className="text-gray-500 text-[10px] lg:text-sm uppercase tracking-wide mt-1">
                                                {benefit.statLabel}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Accent - Desktop Only */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#E92228] to-[#ff6b6b] lg:group-hover:w-full transition-all duration-700 hidden lg:block"></div>
                            {/* Mobile Static Accent */}
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#E92228] lg:hidden"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
