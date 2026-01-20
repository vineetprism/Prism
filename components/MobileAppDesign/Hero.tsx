'use client';

import React from 'react';
import { ArrowRight, CheckCircle, MousePointer2 } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Abstract Design Grid Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* SVG Blueprint Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#E92228" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>

                {/* Floating Elements (Abstract UI Cards) */}
                <div className="absolute top-[20%] left-[10%] w-16 h-20 border border-[#E92228]/20 rounded-lg bg-[#F9F1F0]/50 rotate-[-12deg] blur-[1px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-24 h-14 border border-[#E92228]/20 rounded-lg bg-[#F9F1F0]/50 rotate-[6deg] blur-[1px]"></div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#F9F1F0] border border-[#E92228]/20 px-5 py-2.5 rounded-full mb-8">
                        <div className="w-2 h-2 bg-[#E92228] rounded-full animate-pulse"></div>
                        <span className="text-[#E92228] text-sm font-semibold uppercase tracking-wide">
                            Strategic UI/UX Design
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-heading text-[#1F1F1F] max-w-5xl mb-8">
                        Designing for Retention: <br />
                        <span className="relative inline-block">
                            <span className="text-[#E92228]">The Art of Engagement.</span>
                            {/* Underline Decoration */}
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                                <path d="M0,8 Q75,0 150,8 T300,8" fill="none" stroke="#E92228" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                            </svg>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-10 font-body">
                        Transform user intent into habit. We build data-driven design systems that increase <strong className="text-[#E92228]">Life-Time Value (LTV)</strong> and reduce churn through seamless, intuitive experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
                        <button
                            onClick={onOpenModal}
                            className="group inline-flex items-center justify-center gap-3 bg-[#E92228] text-white font-bold px-8 py-4 rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/20"
                        >
                            Start Your UX Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <a href="#services" className="group inline-flex items-center justify-center gap-2 px-6 py-4 text-[#1F1F1F] hover:text-[#E92228] transition-colors font-semibold">
                            See Our Design Systems
                            <MousePointer2 className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {["Human-Centered Design", "+35% Retention Rates", "Accessibility First"].map((signal, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-2 text-gray-500 text-sm"
                            >
                                <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                <span className="font-medium">{signal}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
