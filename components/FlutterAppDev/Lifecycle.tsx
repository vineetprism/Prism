'use client';

import React from 'react';

export default function Lifecycle() {
    const steps = [
        {
            step: 1,
            title: "Assessment & Strategy",
            duration: "Weeks 1-2",
            description: "Feasibility audits, ROI estimation, and selecting the right architecture (BLoC vs Riverpod).",
        },
        {
            step: 2,
            title: "Transition & Build",
            duration: "Agile Sprints",
            description: "Agile sprints using Clean Architecture layers. Implementation of Design Systems.",
        },
        {
            step: 3,
            title: "Monitoring & Security",
            duration: "Pre-Launch",
            description: "RASP implementation, obfuscation, and automated regression testing before release.",
        },
        {
            step: 4,
            title: "Optimization & Growth",
            duration: "Post-Launch",
            description: "Staged rollouts, A/B testing, and Crashlytics monitoring to maintain >99.9% stability.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] text-center mb-4 font-heading">
                    From Concept to Scale: The Prism SDLC.
                </h2>
                <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto font-body">
                    A battle-tested process refined across 100+ enterprise deployments.
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
