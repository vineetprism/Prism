'use client';

import React from 'react';
import { Rocket, Building2, ChevronRight } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Split */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1F1F1F] hidden lg:block"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center lg:text-left max-w-xl mb-16">
                    <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                        <div className="h-px w-12 bg-[#E92228]"></div>
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-[0.2em]">
                            Tailored Solutions
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                        Built for Your Stage
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
                    {/* Card A - Disruptors (Light) */}
                    <div className="group bg-white lg:bg-[#F9F1F0] p-10 lg:p-16 relative overflow-hidden">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E92228]/5"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-[#E92228] flex items-center justify-center">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <span className="text-[#E92228] text-xs font-bold uppercase tracking-wider">For The Disruptors</span>
                                    <p className="text-gray-900 font-bold">Startups & SMEs</p>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">
                                Speed & Efficiency
                            </h3>

                            <p className="text-gray-600 leading-relaxed font-body mb-6">
                                <span className="text-[#E92228] font-semibold">Flutter/React Native.</span> Write once, deploy everywhere.
                                Get a &quot;Consumer-Grade&quot; MVP to market in weeks, not months, maximizing runway.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {['Cross-platform efficiency', 'Rapid prototyping', 'Cost-effective scaling'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E92228]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={onOpenModal}
                                className="group/btn inline-flex items-center text-[#E92228] font-bold text-lg hover:underline cursor-pointer"
                            >
                                Launch Fast
                                <ChevronRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card B - Giants (Dark) */}
                    <div className="group bg-[#1F1F1F] p-10 lg:p-16 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E92228]/10 rounded-full blur-[80px]"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-[#1F1F1F]" />
                                </div>
                                <div>
                                    <span className="text-[#E92228] text-xs font-bold uppercase tracking-wider">For The Giants</span>
                                    <p className="text-white font-bold">Enterprise</p>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-white font-heading mb-4">
                                Security & Integration
                            </h3>

                            <p className="text-gray-400 leading-relaxed font-body mb-6">
                                <span className="text-[#E92228] font-semibold">Native (Swift/Kotlin) + Microservices.</span> Seamless integration
                                with SAP/Salesforce. Banking-grade security (ISO 27001 compliant) and Zero Trust architecture.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {['Legacy system integration', 'Compliance-first design', 'Enterprise-grade security'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E92228]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={onOpenModal}
                                className="group/btn inline-flex items-center text-[#E92228] font-bold text-lg hover:underline cursor-pointer"
                            >
                                Scale Securely
                                <ChevronRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
