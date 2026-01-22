'use client';

import React from 'react';
import { FileSearch, Code2, TestTube, Rocket } from 'lucide-react';

const steps = [
    {
        step: 'Step 1',
        title: 'Assessment',
        subtitle: '(The Gameplan)',
        description: 'We map your Minimum Viable Product (MVP), analyze OS fragmentation risks, and define the architectural blueprint (Native vs. KMP).',
        icon: FileSearch
    },
    {
        step: 'Step 2',
        title: 'Transition',
        subtitle: '(The Build)',
        description: "Agile execution using modular feature branches. We implement the \"Facade Pattern\" to abstract complexity and ensure clean integration.",
        icon: Code2
    },
    {
        step: 'Step 3',
        title: 'Monitoring',
        subtitle: '(The Gatekeeper)',
        description: 'Automated "Device Farm" testing across 100+ distinct Android models to prevent ANRs and ensure battery optimization.',
        icon: TestTube
    },
    {
        step: 'Step 4',
        title: 'Optimization',
        subtitle: '(The Lifecycle)',
        description: 'Post-launch management including App Store Optimization (ASO), crash reporting, and Semantic Versioning updates.',
        icon: Rocket
    }
];

export default function Lifecycle() {
    return (
        <section className="py-20 lg:py-28 bg-[#f9f9f9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Process & Governance
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The Development Lifecycle
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -ml-0.5 sm:ml-0 rounded-full" />

                        <div className="space-y-12 sm:space-y-24">
                            {steps.map((step, idx) => (
                                <div key={idx} className={`relative flex flex-col sm:flex-row items-start sm:items-center ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>

                                    {/* Content Side */}
                                    <div className={`pl-16 sm:pl-0 sm:w-1/2 ${idx % 2 === 0 ? 'sm:pl-16 text-left' : 'sm:pr-16 sm:text-right'}`}>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <h3 className="text-xl font-bold text-gray-900 font-heading">
                                                {step.title} <span className="text-[#E92228] block sm:inline text-sm font-normal uppercase tracking-wide mt-1 sm:mt-0">{step.subtitle}</span>
                                            </h3>
                                            <p className="text-gray-600 mt-3 leading-relaxed font-body">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-0 sm:left-1/2 w-14 h-14 bg-[#E92228] rounded-full border-4 border-white shadow-lg flex items-center justify-center transform sm:-translate-x-1/2 shrink-0 z-10">
                                        <step.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Empty Side for Spacing */}
                                    <div className="hidden sm:block sm:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
