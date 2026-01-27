'use client';

import React from 'react';
import { TrendingUp, AlertOctagon } from 'lucide-react';

export default function BusinessImpact() {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <span className="h-[1px] w-12 bg-[#E92228]"></span>
                        <span className="text-[#E92228] font-bold uppercase tracking-widest text-sm">The Resilience Dividend</span>
                        <span className="h-[1px] w-12 bg-[#E92228]"></span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Security is No Longer Just IT Maintenance—<br />
                        <span className="text-gray-500">It Is Your Insurance Policy.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left mt-12 bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-gray-200/50">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-red-50 p-2 rounded-lg">
                                    <AlertOctagon className="w-6 h-6 text-[#E92228]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">The Broken Model</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed border-l-2 border-red-100 pl-4">
                                In an era where the average data breach costs <span className="text-gray-900 font-bold font-mono">$4.88 million</span>, the traditional hiring model is failing. With salaries inflating and tenure shrinking, your business cannot afford strategic drift.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-green-50 p-2 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">The Prism Approach</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed border-l-2 border-green-100 pl-4">
                                We don&apos;t just &quot;patch servers&quot;; we act as your Audit Sherpa. We navigate complex landscapes (HIPAA, CMMC, GDPR) to unlock up-market revenue streams, turning security from a cost center into a <span className="text-gray-900 font-bold">sales enabler</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
