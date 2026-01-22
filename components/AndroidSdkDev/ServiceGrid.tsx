'use client';

import React from 'react';
import {
    Share2,
    LayoutTemplate,
    ShieldCheck,
    Palette,
    RefreshCw,
    Bug
} from 'lucide-react';

const services = [
    {
        icon: Share2,
        title: "Kotlin Multiplatform (KMP)",
        desc: "Reduce dev costs by 60% by sharing business logic across iOS and Android while retaining 100% native UI performance."
    },
    {
        icon: LayoutTemplate,
        title: "SDK Facade Architecture",
        desc: "Defensive SDK design using Facade Patterns to prevent integration conflicts and ensure seamless client-side adoption."
    },
    {
        icon: ShieldCheck,
        title: "Compliance & Security",
        desc: "Automated generation of SBOMs and Privacy Manifests to meet EU Cyber Resilience, GDPR, and HIPAA standards."
    },
    {
        icon: Palette,
        title: "Modern UI Engineering",
        desc: "High-fidelity interfaces built with Jetpack Compose for \"Lookahead\" animations and fluid, jank-free user experiences."
    },
    {
        icon: RefreshCw,
        title: "Legacy Modernization",
        desc: "Strategic migration of monolithic Java codebases to modular Kotlin architectures without disrupting business continuity."
    },
    {
        icon: Bug,
        title: "AI-Driven Quality Eng.",
        desc: "\"Shift Left\" automated testing pipelines that catch defects early, reducing the cost of bugs by 100x."
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-20 lg:py-28 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Service Modules
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                            Enterprise Android Capabilities
                        </h2>
                    </div>

                    {/* 6-Block Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-[#E92228]"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-[#E92228] rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 font-heading">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-body">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
