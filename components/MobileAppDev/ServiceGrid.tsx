'use client';

import React from 'react';
import {
    Target,
    Palette,
    Cloud,
    Smartphone,
    ShieldCheck,
    Brain
} from 'lucide-react';

const services = [
    {
        num: '01',
        icon: Target,
        title: 'Strategic Discovery & ROI',
        focus: 'Value Engineering',
        desc: 'We validate market fit and map "North Star" metrics before a single line of code is written.'
    },
    {
        num: '02',
        icon: Palette,
        title: 'Human-Centric Design (UX)',
        focus: 'Figma-Driven Prototyping',
        desc: 'Creating "sticky" interfaces that reduce abandonment and drive adoption.'
    },
    {
        num: '03',
        icon: Cloud,
        title: 'Cloud-Native Engineering',
        focus: 'AWS/Azure & Kubernetes',
        desc: 'Building resilient backends that scale automatically during traffic spikes.'
    },
    {
        num: '04',
        icon: Smartphone,
        title: 'Native & Cross-Platform',
        focus: 'Swift, Kotlin & Flutter',
        desc: 'Choosing the right stack: Native for performance, Flutter for speed-to-market.'
    },
    {
        num: '05',
        icon: ShieldCheck,
        title: 'Enterprise Security (DevSecOps)',
        focus: 'Zero Trust & RASP',
        desc: 'Runtime protection and encryption to close the "Zero Trust" gap in client-side security.'
    },
    {
        num: '06',
        icon: Brain,
        title: 'AI & Data Intelligence',
        focus: 'Personalization Engines',
        desc: 'Integrating GenAI to boost average order value (AOV) and automate support.'
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#1F1F1F 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-12 lg:mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 lg:w-12 bg-[#E92228]"></div>
                        <span className="text-[#E92228] text-xs lg:text-sm font-bold uppercase tracking-[0.2em]">
                            Technical Capabilities
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                        Full-Stack Mobile Engineering
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 sm:p-8 lg:p-10 border-r border-b border-gray-200 bg-white lg:hover:bg-[#F9F1F0] transition-colors duration-300 ease-in-out"
                        >
                            {/* Number */}
                            <span className="absolute top-4 right-4 text-4xl lg:text-6xl font-bold text-gray-100 lg:group-hover:text-[#E92228]/10 transition-colors font-heading select-none">
                                {service.num}
                            </span>

                            {/* Icon */}
                            <div className="relative z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#1F1F1F] flex items-center justify-center mb-6 lg:group-hover:bg-[#E92228] transition-colors duration-300">
                                <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <span className="text-[#E92228] text-[10px] lg:text-xs font-bold uppercase tracking-wider block mb-1">
                                    Focus: {service.focus}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3 lg:group-hover:text-[#E92228] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-body">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Hover Border Accent - Desktop Only */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E92228] hidden lg:block lg:group-hover:w-full transition-all duration-500"></div>
                            {/* Mobile Border Accent (Static) */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E92228]/10 lg:hidden"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
