'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section id="business-impact" className="py-20 md:py-28 bg-[#F5F5F5]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-8 font-heading">
                        The CEO&apos;s Calculus: <span className="text-[#E92228]">Velocity Meets Quality.</span>
                    </h2>

                    {/* Body Copy */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-body">
                        Historically, enterprises faced a binary choice: the superior performance of native development or the speed of cross-platform solutions. <strong className="text-[#1F1F1F]">That era is over.</strong> By leveraging the New Architecture (JSI &amp; Fabric), we empower organizations to maintain a single codebase for iOS and Android while achieving near-native performance metrics. This is not merely a tactical cost-saving measure—it is a <strong className="text-[#E92228]">strategic enabler of agility</strong>, allowing you to deploy features faster than your competitors while reducing operational overhead.
                    </p>

                    {/* Red Divider */}
                    <div className="w-24 h-1 bg-[#E92228] mt-10 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
