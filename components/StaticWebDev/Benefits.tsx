'use client';

import React from 'react';

export default function Benefits() {
    const benefits = [
        {
            number: "01",
            title: "Unmatched Performance",
            description: "Eliminate Time to First Byte (TTFB). With 0.8s average load times, you dominate Core Web Vitals and boost conversion rates."
        },
        {
            number: "02",
            title: "Ironclad Security",
            description: "With no database connected to the presentation layer, SQL injection attacks are mathematically impossible. Secure by default."
        },
        {
            number: "03",
            title: "Infinite Scalability",
            description: "Handle Super Bowl level traffic spikes without crashing. Your site scales from 100 to 1 million users automatically via global CDNs."
        },
        {
            number: "04",
            title: "Reduced TCO",
            description: "Cut operational expenses by 65%. Save on expensive hosting, database licenses, and emergency maintenance contracts."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-12">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Key Benefits
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
