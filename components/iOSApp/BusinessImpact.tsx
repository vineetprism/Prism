'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4 block">
                        Business Impact
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-8 leading-tight">
                        Architectural <span className="text-[#E92228]">Integrity</span> Drives Market Leadership
                    </h2>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg">
                        <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-body">
                            In the modern digital economy, the difference between a functioning app and a market leader is{' '}
                            <span className="font-semibold text-gray-900">architectural integrity</span>. We don&apos;t just write code; we engineer{' '}
                            <span className="text-[#E92228] font-bold">digital assets</span>. By moving from legacy frameworks to a modern, reactive iOS stack, our clients typically realize a{' '}
                            <span className="text-[#E92228] font-bold">100:1 ROI</span> on UX investment, reducing long-term technical debt while unlocking the high-velocity subscription models that drive{' '}
                            <span className="font-semibold text-gray-900">85% of ecosystem revenue</span>.
                        </p>
                    </div>

                    {/* Key Stats Row */}
                    <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-[#E92228] font-heading">100:1</div>
                            <p className="text-gray-600 text-sm mt-2">ROI on UX</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-[#E92228] font-heading">85%</div>
                            <p className="text-gray-600 text-sm mt-2">Ecosystem Revenue</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-[#E92228] font-heading">2.5x</div>
                            <p className="text-gray-600 text-sm mt-2">Higher Spending</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
