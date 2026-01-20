'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Lifecycle() {
    const steps = [
        {
            step: 1,
            title: "The Forensic Audit",
            description: "We analyze your legacy codebase using the .NET Upgrade Assistant and manual review to identify broken NuGet packages and custom renderers.",
        },
        {
            step: 2,
            title: "The Architectural Shift",
            description: "We restructure your solution into the \"Single Project\" system, converting namespaces and implementing the modern Handler architecture.",
        },
        {
            step: 3,
            title: "Stabilization & QA",
            description: "Rigorous automated testing (xUnit/Appium) to ensure zero regression in business logic during the transition.",
            accent: true,
        },
        {
            step: 4,
            title: "Deployment & DevOps",
            description: "We configure automated pipelines to push your modernized, signed, and compliant app directly to internal tracks or public stores.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] text-center mb-4 font-heading">
                    The Migration Lifecycle
                </h2>
                <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto font-body">
                    A rigorous, proven process to ensure zero-downtime migration.
                </p>

                {/* Vertical Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#E92228] transform md:-translate-x-1/2" />

                    {/* Steps */}
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative flex items-start gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-[#E92228] rounded-full transform -translate-x-1/2 border-4 border-white shadow-md flex items-center justify-center z-10">
                                <span className="text-white font-bold text-sm">{step.step}</span>
                            </div>

                            {/* Content Card */}
                            <div
                                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#E92228] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                                    }`}
                            >
                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2 font-heading flex items-center gap-2">
                                    {step.accent && <CheckCircle className="w-5 h-5 text-[#E92228]" />}
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed font-body">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
