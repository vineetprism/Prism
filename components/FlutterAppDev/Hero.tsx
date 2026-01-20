'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Smartphone, Tablet, Monitor, Zap, Code2, Layers } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-[#F9F1F0] to-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large Red Circle - Top Right */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#E92228]/5 rounded-full"></div>

                {/* Small Red Circle - Bottom Left */}
                <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#E92228]/5 rounded-full"></div>

                {/* Dot Pattern */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20" style={{
                    backgroundImage: `radial-gradient(#E92228 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="min-h-screen flex items-center py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 bg-white border border-[#E92228]/20 px-4 py-2 rounded-full shadow-sm">
                                <div className="w-2 h-2 bg-[#E92228] rounded-full animate-pulse"></div>
                                <span className="text-[#E92228] text-sm font-semibold">
                                    Enterprise Flutter Development
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] font-heading text-[#1F1F1F]">
                                Build{' '}
                                <span className="relative inline-block">
                                    <span className="text-[#E92228]">Once.</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                                        <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="#E92228" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <br />
                                Scale{' '}
                                <span className="text-[#E92228]">Everywhere.</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-body">
                                Deploy high-performance, secure mobile experiences for{' '}
                                <strong className="text-[#1F1F1F]">iOS and Android</strong> with a single codebase.
                                Reduce TCO by <strong className="text-[#E92228]">50%</strong>.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center justify-center gap-3 bg-[#E92228] text-white font-bold px-8 py-4 rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/20"
                                >
                                    Start Your Transformation
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="group inline-flex items-center justify-center gap-2 px-6 py-4 text-[#1F1F1F] hover:text-[#E92228] transition-colors font-semibold">
                                    View Architecture Standards
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Trust Signals */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                {["Flutter 3.x Certified", "Cross-Platform Excellence"].map((signal, index) => (
                                    <div
                                        key={index}
                                        className="inline-flex items-center gap-2 text-gray-600 text-sm"
                                    >
                                        <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                        <span className="font-medium">{signal}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Visual - Device Showcase */}
                        <div className="relative hidden lg:flex items-center justify-center">
                            {/* Central Phone Mockup */}
                            <div className="relative z-20">
                                <div className="w-[280px] bg-white rounded-[2.5rem] p-3 shadow-2xl border border-gray-100">
                                    {/* Phone Screen */}
                                    <div className="bg-gradient-to-b from-[#F9F1F0] to-white rounded-[2rem] p-6 aspect-[9/16] flex flex-col">
                                        {/* App Header */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 bg-[#E92228] rounded-xl flex items-center justify-center">
                                                <Layers className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-[#1F1F1F] font-bold text-sm">Flutter App</p>
                                                <p className="text-gray-400 text-xs">Cross-Platform</p>
                                            </div>
                                        </div>

                                        {/* Content Lines */}
                                        <div className="space-y-3 flex-1">
                                            <div className="h-4 bg-[#E92228]/20 rounded-full w-full"></div>
                                            <div className="h-4 bg-[#E92228]/10 rounded-full w-3/4"></div>
                                            <div className="h-20 bg-white rounded-xl border border-gray-100 shadow-sm mt-4"></div>
                                            <div className="h-20 bg-white rounded-xl border border-gray-100 shadow-sm"></div>
                                        </div>

                                        {/* Bottom Nav */}
                                        <div className="flex justify-around pt-4 mt-auto">
                                            <div className="w-6 h-6 bg-[#E92228]/20 rounded-full"></div>
                                            <div className="w-6 h-6 bg-[#E92228] rounded-full"></div>
                                            <div className="w-6 h-6 bg-[#E92228]/20 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Cards */}
                            <div className="absolute top-0 -right-4 z-30 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#E92228]/10 rounded-xl flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-[#E92228]" />
                                    </div>
                                    <div>
                                        <p className="text-[#E92228] font-bold text-lg">50%</p>
                                        <p className="text-gray-500 text-xs">Faster Dev</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 -left-8 z-30 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#E92228]/10 rounded-xl flex items-center justify-center">
                                        <Code2 className="w-5 h-5 text-[#E92228]" />
                                    </div>
                                    <div>
                                        <p className="text-[#E92228] font-bold text-lg">98%</p>
                                        <p className="text-gray-500 text-xs">Code Reuse</p>
                                    </div>
                                </div>
                            </div>

                            {/* Platform Icons */}
                            <div className="absolute -bottom-4 right-8 z-30 bg-[#E92228] rounded-full p-3 shadow-lg flex items-center gap-2">
                                <Smartphone className="w-4 h-4 text-white" />
                                <Tablet className="w-4 h-4 text-white" />
                                <Monitor className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
