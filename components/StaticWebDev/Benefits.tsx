'use client';

import React from 'react';

export default function Benefits() {
    const benefits = [
        {
            number: "01",
            title: "Unmatched Performance at Enterprise Scale",
            description: <>Our <span className="font-bold text-gray-900">static website development</span> architecture eliminates TTFB, delivers ~0.8s load times, exceeds Core Web Vitals thresholds, and improves engagement and conversion metrics across distributed global traffic.</>
        },
        {
            number: "02",
            title: "Ironclad Security by Design",
            description: <>Our <span className="font-bold text-gray-900">static website designing services</span> decouple databases from the presentation layer, removing entire classes of vulnerabilities such as SQL injection and ensuring a predictable, low-risk security posture with minimal ongoing patching.</>
        },
        {
            number: "03",
            title: "Infinite Scalability Without Infrastructure Stress",
            description: <>Delivered as enterprise-grade <span className="font-bold text-gray-900">static website services</span>, the platform auto-scales via global CDNs to support traffic surges from hundreds to millions of users—without downtime, reconfiguration, or performance regression.</>
        },
        {
            number: "04",
            title: "Reduced Total Cost of Ownership (TCO)",
            description: <>As a performance-focused <span className="font-bold text-gray-900">static website development company</span>, we reduce TCO by up to <span className="font-bold text-[#E92228]">65%</span> by eliminating complex hosting layers, database licensing, and reactive maintenance while maintaining predictable performance at scale.</>
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-12">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Key Benefits of Our Static Website Development Approach
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-6 p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex-shrink-0">
                                    <span className="text-6xl font-bold text-[#E92228] font-heading">
                                        {benefit.number}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-body">
                                        {benefit.description}
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
