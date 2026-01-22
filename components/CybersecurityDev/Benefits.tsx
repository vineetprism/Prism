'use client';

import React from 'react';
import { Clock, TrendingUp, Filter, Users } from 'lucide-react';

const benefits = [
    {
        number: '01',
        icon: Clock,
        title: 'Speed to Containment',
        description: 'Adhering to the 1-10-60 rule. We aim to detect in 1 minute, investigate in 10, and remediate in 60.',
        highlight: '1-10-60',
    },
    {
        number: '02',
        icon: TrendingUp,
        title: 'Proven ROI',
        description: 'Eliminate the capital expense of building an internal SOC (approx. $1M/year). Our clients see up to 403% ROI through tool consolidation and staff efficiency.',
        highlight: '403% ROI',
    },
    {
        number: '03',
        icon: Filter,
        title: 'Alert Fatigue Cure',
        description: 'We filter out 99% of the noise. Your internal team only sees High-Fidelity incidents that require strategic decisions, not false positives.',
        highlight: '99%',
    },
    {
        number: '04',
        icon: Users,
        title: 'The "Co-Managed" Edge',
        description: 'We don\'t replace your IT team; we supercharge them. You retain control and visibility via our "Glass Box" approach while we handle the grunt work.',
        highlight: 'Glass Box',
    },
];

export default function Benefits() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column - Numbered Benefits List */}
                    <div>
                        {/* Header */}
                        <div className="mb-12">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                                Why Choose Us
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The Prism Advantage
                            </h2>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-8">
                            {benefits.map((benefit, idx) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div key={idx} className="group flex gap-6">
                                        {/* Number */}
                                        <div className="flex-shrink-0 w-16 lg:w-20">
                                            <span className="text-5xl lg:text-7xl font-black text-[#E92228]/40 transition-colors duration-300 font-heading">
                                                {benefit.number}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-2">
                                            <div className="flex items-center gap-3 mb-2">
                                                <IconComponent className="w-5 h-5 text-[#E92228]" />
                                                <h3 className="text-xl font-bold text-gray-900 font-heading">
                                                    {benefit.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed font-body text-sm">
                                                {benefit.description}
                                            </p>
                                            {/* Underline Accent */}
                                            <div className="w-12 h-0.5 bg-[#E92228] mt-4 group-hover:w-24 transition-all duration-300" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Dynamic Stats Display */}
                    <div className="relative">
                        {/* Background Decorative Elements */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#E92228]/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl" />

                        {/* Stats Container */}
                        <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-12">
                            {/* Header */}
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                    Security by the Numbers
                                </h3>
                                <p className="text-gray-500 text-sm">Real results from our MDR service</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {/* Stat 1 */}
                                <div className="text-center p-6 bg-gradient-to-br from-[#E92228]/5 to-transparent rounded-2xl">
                                    <p className="text-4xl lg:text-5xl font-bold text-[#E92228] font-heading mb-2">
                                        &lt;1
                                    </p>
                                    <p className="text-gray-600 text-sm font-medium">Minute Detection</p>
                                </div>

                                {/* Stat 2 */}
                                <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-transparent rounded-2xl">
                                    <p className="text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-2">
                                        10
                                    </p>
                                    <p className="text-gray-600 text-sm font-medium">Min Investigation</p>
                                </div>

                                {/* Stat 3 */}
                                <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-transparent rounded-2xl">
                                    <p className="text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-2">
                                        60
                                    </p>
                                    <p className="text-gray-600 text-sm font-medium">Min Remediation</p>
                                </div>

                                {/* Stat 4 */}
                                <div className="text-center p-6 bg-gradient-to-br from-[#E92228]/5 to-transparent rounded-2xl">
                                    <p className="text-4xl lg:text-5xl font-bold text-[#E92228] font-heading mb-2">
                                        403%
                                    </p>
                                    <p className="text-gray-600 text-sm font-medium">Average ROI</p>
                                </div>
                            </div>

                            {/* Bottom Badge */}
                            <div className="mt-8 p-4 bg-slate-900 rounded-xl text-center">
                                <p className="text-white font-bold text-sm">
                                    The <span className="text-[#E92228]">1-10-60</span> Rule in Action
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
