'use client';

import React from 'react';

const benefits = [
    {
        num: "01",
        title: "Revenue Velocity",
        stat: "+25%",
        statLabel: "Transaction Volume",
        desc: "By utilizing native Apple Pay integrations and biometric FaceID authentication, we remove checkout friction. Clients consistently see a 25% increase in transaction volume by optimizing for the iOS \"happy path.\""
    },
    {
        num: "02",
        title: "Uncompromised Stability",
        stat: "99.9%",
        statLabel: "Crash-Free Sessions",
        desc: "We utilize Swift 6's strict concurrency checking to eliminate data races at the compiler level. This prevents the \"silent crashes\" that cause 71% of users to churn within 90 days."
    },
    {
        num: "03",
        title: "Operational Efficiency",
        stat: "-35%",
        statLabel: "Data Entry Errors",
        desc: "For internal tools, we replace manual data entry with camera-based OCR and IoT beacon automation. This reduces human data entry errors by 35% and frees your workforce for high-value tasks."
    },
    {
        num: "04",
        title: "Brand Perception & Engagement",
        stat: "+40%",
        statLabel: "Session Duration",
        desc: "Cross-platform apps often land in the \"Uncanny Valley\" of UX. Our strict adherence to Apple's Human Interface Guidelines (HIG) delivers the fluid, native feel that drives a 40% increase in session times."
    }
];

export default function Benefits() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            The ROI
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Why Prism for iOS?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="group flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100 hover:border-[#E92228]/30 transition-all duration-300"
                            >
                                {/* Large Number */}
                                <div className="shrink-0">
                                    <span className="text-5xl sm:text-6xl font-bold text-[#E92228] font-heading opacity-80 group-hover:opacity-100 transition-opacity">
                                        {benefit.num}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading mb-2">
                                        {benefit.title}
                                    </h3>
                                    <div className="inline-flex items-center gap-2 bg-[#E92228]/10 px-3 py-1 rounded-full mb-3">
                                        <span className="text-lg sm:text-xl font-bold text-[#E92228]">{benefit.stat}</span>
                                        <span className="text-xs text-[#E92228] font-bold uppercase">{benefit.statLabel}</span>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
