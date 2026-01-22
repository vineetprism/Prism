'use client';

import React from 'react';
import { Code2, Layers, Wrench, GitBranch } from 'lucide-react';

const techCategories = [
    {
        icon: Code2,
        title: "Languages",
        items: ["Swift", "Objective-C"]
    },
    {
        icon: Layers,
        title: "Frameworks",
        items: ["SwiftUI", "UIKit", "Combine", "ARKit", "CoreML"]
    },
    {
        icon: Wrench,
        title: "Tools",
        items: ["Xcode", "TestFlight", "Jenkins (CI/CD)", "Firebase"]
    },
    {
        icon: GitBranch,
        title: "Architecture",
        items: ["MVVM", "VIPER", "Clean Architecture"]
    }
];

export default function TechStack() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-[#F9F1F0] to-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, #E92228 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                        The Toolkit
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                        iOS Technology Stack
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                        Industry-standard tools and frameworks for building scalable, secure iOS applications
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {techCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#E92228] transition-all duration-300 group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-full bg-[#E92228] flex items-center justify-center shrink-0">
                                    <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 font-heading uppercase tracking-wide">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Items List */}
                            <ul className="space-y-3">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                        <span className="w-2 h-2 bg-[#E92228] rotate-45 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
