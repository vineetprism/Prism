'use client';

import React from 'react';

export default function Lifecycle() {
    const lifecycle = [
        {
            step: "01",
            title: "Assessment",
            subtitle: "Discovery & Architecture",
            description: "We audit your current stack, define data models, and select the perfect tech mix (Next.js vs. Gatsby) to align with your 3-year growth roadmap."
        },
        {
            step: "02",
            title: "Transition",
            subtitle: "Development & Migration",
            description: "Atomic design implementation and 'Hydration' architecture. We run automated scripts to migrate legacy content, ensuring no data is lost."
        },
        {
            step: "03",
            title: "Monitoring",
            subtitle: "Automated Deployment",
            description: "CI/CD setup. When you press 'Publish,' the system rebuilds and deploys globally in seconds. Rigorous testing ensures zero-downtime launches."
        },
        {
            step: "04",
            title: "Optimization",
            subtitle: "Growth & Iteration",
            description: "Post-launch performance audits and analytics integration to ensure the site maintains 'Green' scores on Lighthouse as you scale content."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-center mb-16">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            The Lifecycle Flow
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line - Centered */}
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 sm:-translate-x-1/2"></div>

                        <div className="space-y-12 sm:space-y-24">
                            {lifecycle.map((step, idx) => (
                                <div key={idx} className={`relative flex flex-col sm:flex-row items-center ${idx % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>

                                    {/* Spacer for 50% width on Desktop */}
                                    <div className="hidden sm:block sm:w-1/2" />

                                    {/* Node - Centered on Line */}
                                    <div className="absolute left-4 sm:left-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-[#E92228] rounded-full flex items-center justify-center shadow-lg sm:-translate-x-1/2 z-10 -translate-x-1/2">
                                        <span className="text-xl sm:text-2xl font-bold text-white font-heading">
                                            {step.step}
                                        </span>
                                    </div>

                                    {/* Content Box */}
                                    <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${idx % 2 !== 0 ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-heading group-hover:text-[#E92228] transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-[#E92228] font-semibold uppercase tracking-wider mb-4">
                                                {step.subtitle}
                                            </p>
                                            <p className="text-gray-600 leading-relaxed font-body text-justify">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
