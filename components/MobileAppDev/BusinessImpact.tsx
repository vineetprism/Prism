'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-20 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
            {/* Geometric Accent - Static on mobile */}
            <div className="absolute top-0 left-0 w-32 h-32 lg:w-64 lg:h-64 border-l-2 border-t-2 border-[#E92228]/20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-64 lg:h-64 border-r-2 border-b-2 border-[#E92228]/20 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Tag */}
                    <div className="flex items-center justify-center gap-4 mb-8 lg:mb-12">
                        <div className="h-px w-12 lg:w-16 bg-gradient-to-r from-transparent to-[#E92228]"></div>
                        <span className="text-[#E92228] text-xs lg:text-sm font-bold uppercase tracking-[0.2em]">
                            The Business Reality
                        </span>
                        <div className="h-px w-12 lg:w-16 bg-gradient-to-l from-transparent to-[#E92228]"></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative">
                        {/* Quote Mark */}
                        <div className="absolute -top-6 -left-2 lg:-top-8 lg:-left-4 text-6xl lg:text-[150px] font-serif text-[#E92228]/10 leading-none select-none">
                            &ldquo;
                        </div>

                        <blockquote className="text-center space-y-6 lg:space-y-8 relative z-10">
                            <p className="text-lg sm:text-2xl lg:text-3xl text-white leading-relaxed font-light font-body">
                                In the modern enterprise, the distinction between{' '}
                                <span className="font-semibold text-[#E92228]">business strategy</span> and{' '}
                                <span className="font-semibold text-[#E92228]">digital product strategy</span> has evaporated.
                                A mobile app is no longer a support channel; it is the{' '}
                                <span className="text-white font-semibold">primary vector for revenue and risk</span>.
                            </p>

                            <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-[#E92228] to-[#ff6b6b] mx-auto rounded-full"></div>

                            <p className="text-base lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                                We don&apos;t just write code. We act as your{' '}
                                <span className="text-white font-medium">Fractional CTO</span>, bridging the gap between
                                &apos;Engineering Rigor&apos; and &apos;Total Enterprise Reinvention&apos; to deliver{' '}
                                <span className="text-[#E92228] font-semibold">speed without compromising security</span>.
                            </p>
                        </blockquote>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-12 lg:mt-16 pt-12 lg:pt-16 border-t border-white/10">
                        {[
                            { value: '$4.88M', label: 'Avg. Breach Cost' },
                            { value: '404%', label: 'Subscription Growth' },
                            { value: '20%', label: 'Supply Chain Savings' },
                            { value: '99.9%', label: 'Uptime Guarantee' }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading lg:group-hover:text-[#E92228] transition-colors duration-300">
                                    {stat.value}
                                </div>
                                <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm mt-1 lg:mt-2 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
