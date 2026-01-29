'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4 block">
                        Market Thesis:
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-8 leading-tight">
                        The &quot;<span className="text-[#E92228]">Total Reinvention</span>&quot; Mandate
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed font-body mb-8">
                        In 2025, an app is not a utility; it is your digital core. While global integrators offer scale but lack agility, and boutiques offer design but lack integration depth, we occupy the critical intersection as an <span className="font-bold text-gray-900">android application development company</span>. We don&apos;t just write code; we engineer Anti-Corruption Layers that modernize your legacy stack and turn Technical Debt into measurable Business Value.
                    </p>

                    {/* Key Stat Callout */}
                    <div className="bg-gradient-to-r from-[#E92228] to-[#bd202e] rounded-2xl p-8 text-white max-w-2xl mx-auto">
                        <div className="text-6xl font-bold font-heading mb-2">41%</div>
                        <p className="text-white/90 text-lg font-body">
                            of executives cite Tech Debt as their primary blocker. <span className="font-bold">We exist to remove it.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
