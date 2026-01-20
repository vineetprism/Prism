'use client';

import React from 'react';

export default function Benefits() {
    const benefits = [
        {
            number: "01",
            title: "Speed as a Feature",
            description: "Benchmark tests confirm Swift runs up to 2.6x faster than Objective-C. We optimize algorithms to ensure your app launches instantly, reducing the bounce rates associated with sluggish cross-platform tools.",
        },
        {
            number: "02",
            title: "The \"Crash-Free\" Mandate",
            description: "Leveraging Swift's safety-first syntax and \"Optionals,\" we eliminate entire classes of runtime errors (like null pointers) before the code ever compiles. Target stability: 99.9%.",
        },
        {
            number: "03",
            title: "Reduced TCO",
            description: "Swift requires approximately 60% less code to perform the same tasks as legacy languages. Less code means less technical debt, easier onboarding, and lower long-term maintenance costs.",
        },
        {
            number: "04",
            title: "Security by Design",
            description: "From Keychain Services for token storage to biometric authentication (FaceID), we bake compliance (GDPR/HIPAA) into the architecture, not the aftermath.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#1F1F1F]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Numbered List */}
                    <div>
                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
                            Why Leading Enterprises Choose Native Swift.
                        </h2>

                        {/* Benefits List */}
                        <div className="space-y-10">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex gap-6">
                                    {/* Large Number */}
                                    <div className="flex-shrink-0">
                                        <span className="text-5xl md:text-6xl font-extrabold text-[#E92228]">
                                            {item.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Speed Comparison Visual - Hidden on mobile for performance */}
                    <div className="relative hidden lg:block">
                        <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-8 text-center">
                                Performance Benchmark
                            </h3>

                            {/* Swift Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-white">Swift</span>
                                    <span className="text-[#E92228] font-bold">2.6x</span>
                                </div>
                                <div className="h-6 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#E92228] to-[#ff6b6b] rounded-full transition-all duration-300"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Objective-C Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-white">Objective-C</span>
                                    <span className="text-gray-400 font-bold">1x</span>
                                </div>
                                <div className="h-6 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gray-500 rounded-full transition-all duration-300"
                                        style={{ width: '38%' }}
                                    />
                                </div>
                            </div>

                            {/* Cross-Platform Bar */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-white">Cross-Platform</span>
                                    <span className="text-gray-400 font-bold">0.7x</span>
                                </div>
                                <div className="h-6 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gray-600 rounded-full transition-all duration-300"
                                        style={{ width: '27%' }}
                                    />
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 mt-6 text-center">
                                Swift runs 2.6x faster than Objective-C
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
