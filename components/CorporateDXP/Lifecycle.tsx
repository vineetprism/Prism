'use client';

import React from 'react';

export default function Lifecycle() {
    const steps = [
        {
            step: "01",
            title: "Assessment",
            subtitle: "Value Stream Mapping",
            desc: "We don't guess. We use AI tools to reverse-engineer your legacy code, map dependencies, and identify \"Knowledge Fragmentation\" gaps before we start."
        },
        {
            step: "02",
            title: "Transition",
            subtitle: "The AI-Augmented Build",
            desc: "Agile sprints powered by Copilots. We build modular components using React/Next.js, ensuring type safety with Python and Pydantic."
        },
        {
            step: "03",
            title: "Monitoring",
            subtitle: "Resilience Engineering",
            desc: "Deployment is not the end. We implement \"Blue/Green\" strategies and SRE protocols to monitor Experience Level Agreements (XLAs)."
        },
        {
            step: "04",
            title: "Optimization",
            subtitle: "Continuous Evolution",
            desc: "We treat your site as a product. Continuous feedback loops drive feature updates, ensuring you never face \"legacy\" issues again."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-center mb-16">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            The Lifecycle Flow
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                        {steps.map((item, idx) => (
                            <div key={idx} className={`relative flex items-start gap-8 mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#E92228] rounded-full transform -translate-x-1/2 mt-2 z-10 ring-4 ring-white"></div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#E92228]/30 transition-all duration-300 ${idx % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                                    <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <span className="text-[#E92228] font-bold text-sm font-heading">{item.step}</span>
                                        <h3 className="text-xl font-bold text-gray-900 font-heading">{item.title}</h3>
                                    </div>
                                    <p className="text-[#E92228] text-sm font-semibold mb-2">{item.subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed font-body">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
