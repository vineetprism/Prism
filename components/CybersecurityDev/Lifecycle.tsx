'use client';

import React from 'react';
import { Scan, Settings, Eye, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Scan,
        title: 'Assessment & Baseline',
        timeline: 'Days 1-15',
        description: 'Asset discovery, shadow IT mapping, and "Rules of Engagement" workshop to define when we can auto-block threats.',
    },
    {
        number: '02',
        icon: Settings,
        title: 'Tuning & Integration',
        timeline: 'Days 15-30',
        description: 'Deploying EDR agents, connecting log shippers, and suppressing false positives to quiet the noise.',
    },
    {
        number: '03',
        icon: Eye,
        title: 'Continuous Watch',
        timeline: '24/7',
        description: 'The "OODA Loop." Observe, Orient, Decide, Act. AI handles the triage; Human Experts handle the hunting.',
    },
    {
        number: '04',
        icon: BarChart3,
        title: 'Optimization & QBRs',
        timeline: 'Quarterly',
        description: 'Strategic reviews moving beyond "number of blocks" to discuss maturity scoring, roadmap planning, and compliance posture.',
    },
];

export default function LifecycleDesign2() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-sans">
                        Our Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading mb-4">
                        Your Path to Cyber Resilience
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                        A structured approach from assessment to continuous optimization.
                    </p>
                </div>

                {/* Horizontal Stepper - Desktop */}
                <div className="hidden lg:block max-w-7xl mx-auto mb-12">
                    <div className="flex items-center justify-between relative">
                        {/* Progress Line */}
                        <div className="absolute top-12 left-0 right-0 h-1 bg-[#F9F1F0] -z-10">
                            <div className="h-full w-full bg-gradient-to-r from-[#E92228] via-[#E92228] to-[#bd202e]"></div>
                        </div>

                        {steps.map((step, idx) => {
                            const IconComponent = step.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center flex-1 group">
                                    {/* Icon Circle */}
                                    <div className="w-24 h-24 bg-gradient-to-br from-[#E92228] to-[#bd202e] rounded-full flex items-center justify-center mb-4 shadow-xl shadow-[#E92228]/30 group-hover:scale-110 transition-transform duration-300 relative">
                                        <IconComponent className="w-10 h-10 text-white" />
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-[#E92228] text-xs font-bold text-[#E92228] font-heading">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    {idx < steps.length - 1 && (
                                        <ArrowRight className="absolute top-10 w-8 h-8 text-[#E92228]" style={{ left: `${((idx + 1) * 100) / steps.length}%` }} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {steps.map((step, idx) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={idx} className="group">
                                {/* Mobile Icon (visible on mobile only) */}
                                <div className="lg:hidden w-16 h-16 bg-gradient-to-br from-[#E92228] to-[#bd202e] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#E92228]/30 relative">
                                    <IconComponent className="w-8 h-8 text-white" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-[#E92228] text-xs font-bold text-[#E92228] font-heading">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="bg-[#F9F1F0] rounded-2xl p-6 h-full border-2 border-transparent group-hover:border-[#E92228] transition-all duration-300 group-hover:shadow-lg">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-[#1F1F1F] font-heading">
                                            {step.title}
                                        </h3>
                                        <span className="text-[#E92228] text-xs font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-full whitespace-nowrap">
                                            {step.timeline}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed font-body text-sm">
                                        {step.description}
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