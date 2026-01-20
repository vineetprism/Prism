'use client';

import React from 'react';

export default function Lifecycle() {
    const steps = [
        {
            step: 1,
            title: "Assessment (The Blueprint)",
            duration: "Phase 1",
            description: "Market research, competitor analysis, and the creation of a comprehensive Game Design Document (GDD) to prevent scope creep before code is written.",
        },
        {
            step: 2,
            title: "Transition (Production & Build)",
            duration: "Phase 2",
            description: "Agile development using 2-week sprints. Parallel workflows for Art (2D/3D) and Engineering ensure rapid delivery of the \"First Playable\" and Alpha milestones.",
        },
        {
            step: 3,
            title: "Monitoring (QA & Soft Launch)",
            duration: "Phase 3",
            description: "Rigorous stress testing on device farms to solve fragmentation issues. Soft-launch deployment in test markets to validate monetization metrics.",
        },
        {
            step: 4,
            title: "Optimization (LiveOps & Growth)",
            duration: "Phase 4",
            description: "Continuous delivery of new content, seasonal events, and data-driven tuning based on retention KPIs (Day-1, Day-7, Day-30) to maximize Lifetime Value (LTV).",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] text-center mb-4 font-heading">
                    The Lifecycle Flow
                </h2>
                <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto font-body">
                    A proven delivery framework for gaming projects of all scales.
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
                                {/* Duration Badge */}
                                <div className={`mb-3 ${index % 2 === 0 ? 'flex justify-end' : 'flex justify-start'}`}>
                                    <span className="inline-block bg-[#E92228] text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {step.duration}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2 font-heading">
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
