'use client';

import React from 'react';

export default function TechStack() {
    const categories = [
        {
            name: "Core",
            items: ["Flutter 3.x", "Dart"],
        },
        {
            name: "State Management",
            items: ["BLoC", "Riverpod"],
        },
        {
            name: "Backend",
            items: ["Firebase", "AWS Amplify"],
        },
        {
            name: "CI/CD",
            items: ["Codemagic", "GitHub Actions"],
        },
        {
            name: "Testing",
            items: ["Selenium", "Appium", "Flutter Driver"],
        },
    ];

    // Flatten items for ticker
    const allItems = categories.flatMap(cat => cat.items);

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] text-center mb-12 font-heading">
                    Technology Stack
                </h2>

                {/* Tech Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border-t-4 border-[#E92228]"
                        >
                            {/* Category Name */}
                            <div className="flex items-center gap-2 mb-3 md:mb-4">
                                <div className="w-2 h-2 bg-[#E92228] rounded-full" />
                                <h3 className="font-bold text-[#1F1F1F] text-sm md:text-base font-heading">
                                    {category.name}
                                </h3>
                            </div>

                            {/* Tech Items */}
                            <div className="space-y-1 md:space-y-2">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="px-2 md:px-3 py-1.5 md:py-2 bg-[#F9F1F0] rounded-lg text-xs md:text-sm text-[#1F1F1F] font-medium"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scrolling Ticker */}
                <div className="mt-16 relative hidden md:block">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex gap-8 ticker-scroll overflow-hidden">
                        {[...allItems, ...allItems].map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-6 py-3 bg-[#F9F1F0] rounded-full text-[#1F1F1F] font-medium hover:bg-[#E92228] hover:text-white transition-colors"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS for scroll animation */}
            <style jsx>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker-scroll {
                    animation: ticker 25s linear infinite;
                    will-change: transform;
                }
                @media (prefers-reduced-motion: reduce) {
                    .ticker-scroll {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}
