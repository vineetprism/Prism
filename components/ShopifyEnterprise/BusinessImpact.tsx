'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-gray-800 leading-relaxed mb-12">
                        &quot;The era of the monolithic commerce suite is over. Modern enterprises require agility without sacrificing stability.&quot;
                    </blockquote>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-[#E92228]/5 to-[#E92228]/10 rounded-2xl p-8 border border-[#E92228]/20">
                            <span className="text-5xl sm:text-6xl font-bold text-[#E92228] font-heading">33%</span>
                            <p className="text-gray-600 mt-2">Reduction in Total Cost of Ownership</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#E92228]/5 to-[#E92228]/10 rounded-2xl p-8 border border-[#E92228]/20">
                            <span className="text-5xl sm:text-6xl font-bold text-[#E92228] font-heading">50%</span>
                            <p className="text-gray-600 mt-2">Faster Speed-to-Market</p>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        We don&apos;t just build websites; we execute <span className="font-semibold text-gray-900">digital transformations</span>. By shifting to a cloud-native, composable architecture with Prism Infoways, enterprises bridge the gap between <span className="text-[#E92228] font-semibold">technical complexity</span> and <span className="text-[#E92228] font-semibold">business growth</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
