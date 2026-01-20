'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Authority Copy */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl text-[#1F1F1F] leading-relaxed font-body">
                        &ldquo;The era of siloed native development is over. We leverage Flutter&apos;s{' '}
                        <span className="font-bold text-[#E92228]">&apos;Write Once, Run Anywhere&apos;</span>{' '}
                        capability to deliver the speed of a startup with the rigor of a global consultancy.
                        By unifying logic and UI, we eliminate platform fragmentation and cut development cycles in half—proven by industry giants like{' '}
                        <span className="font-semibold">Alibaba</span> and{' '}
                        <span className="font-semibold">BMW</span>.&rdquo;
                    </blockquote>

                    {/* Divider */}
                    <div className="w-24 h-1 bg-[#E92228] mx-auto mt-10 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
