'use client';

import React from 'react';

export default function Benefits() {
    const benefits = [
        {
            num: "01",
            title: "Workflow Velocity",
            stat: "85%",
            statLabel: "Handle Time Reduction",
            desc: <>Reduce average handle times by up to 85%. Our <span className="font-bold">android application development services</span> replicate the efficiency gains seen in global logistics leaders by automating complex manual workflows.</>
        },
        {
            num: "02",
            title: "Operational Precision",
            stat: "Zero",
            statLabel: "Error Data Entry",
            desc: <>Target Zero-Error Data Entry. By moving validation to the device edge, we eliminate the risks associated with manual transcription and legacy inputs through intelligent <span className="font-bold">android mobile application development</span>.</>
        },
        {
            num: "03",
            title: "Support Deflection",
            stat: "40%",
            statLabel: "Fewer IT Tickets",
            desc: "Cut IT tickets by 40%. Our focus on \"Experience Design\" and in-app guidance reduces the burden on your internal support teams."
        },
        {
            num: "04",
            title: "Rapid Market Entry",
            stat: "90%",
            statLabel: "Faster UI Dev",
            desc: "90% Faster UI Development. By standardizing on Kotlin and Declarative UI, we slash development cycles and accelerate your time-to-value."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            ROI Metrics:
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The Android Mobile Application Development Business Case
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
                                    <span className="text-6xl font-bold text-[#E92228] font-heading opacity-80 group-hover:opacity-100 transition-opacity">
                                        {benefit.num}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                        {benefit.title}
                                    </h3>
                                    <div className="inline-flex items-center gap-2 bg-[#E92228]/10 px-3 py-1 rounded-full mb-3">
                                        <span className="text-xl font-bold text-[#E92228]">{benefit.stat}</span>
                                        <span className="text-xs text-[#E92228] font-bold uppercase">{benefit.statLabel}</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed font-body">
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
