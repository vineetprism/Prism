'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    const trustSignals = ["Swift 6 Ready", "Human Interface Guidelines Compliant"];

    return (
        <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
            {/* Left Content */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Copy Left */}
                    <div className="max-w-xl">
                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1F1F1F] leading-[1.1] mb-6">
                            Architecting High-Performance iOS Solutions for the ROI-Driven Enterprise.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            Move beyond &quot;build and launch.&quot; We engineer native Swift applications designed for durability, 99.9% stability, and maximum Lifetime Value (LTV).
                        </p>

                        {/* Primary CTA */}
                        <button
                            onClick={onOpenModal}
                            className="group inline-flex items-center gap-3 bg-[#E92228] text-white font-bold px-8 py-4 rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
                        >
                            Start Your Technical Discovery
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Trust Signals */}
                        <div className="flex flex-wrap gap-4">
                            {trustSignals.map((signal, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-2 bg-[#F9F1F0] px-4 py-2 rounded-full"
                                >
                                    <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                    <span className="text-sm font-semibold text-[#1F1F1F]">
                                        {signal}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Visual Right */}
                    <div className="relative hidden lg:flex items-center justify-center">
                        {/* Abstract Code to UI Visual */}
                        <div className="relative w-full max-w-lg">
                            {/* Background Gradient Circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F9F1F0] to-white rounded-full blur-3xl opacity-50" />

                            {/* Code Block */}
                            <div className="relative bg-[#1F1F1F] rounded-2xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-[#E92228]" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <pre className="text-sm font-mono">
                                    <code className="text-gray-300">
                                        <span className="text-[#E92228]">struct</span>{" "}
                                        <span className="text-blue-400">ContentView</span>
                                        {": View {\n"}
                                        {"  "}
                                        <span className="text-[#E92228]">var</span> body:{" "}
                                        <span className="text-blue-400">some View</span>
                                        {" {\n"}
                                        {"    "}
                                        <span className="text-purple-400">VStack</span>
                                        {" {\n"}
                                        {"      "}
                                        <span className="text-green-400">Text</span>
                                        {"(\"Hello, Enterprise\")\n"}
                                        {"        ."}
                                        <span className="text-yellow-400">font</span>
                                        {"(.largeTitle)\n"}
                                        {"    }\n"}
                                        {"  }\n"}
                                        {"}"}
                                    </code>
                                </pre>
                            </div>

                            {/* Arrow Animation */}
                            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-[#E92228] animate-pulse">
                                <ArrowRight className="w-8 h-8" />
                            </div>

                            {/* UI Preview */}
                            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="w-40 h-48 bg-gradient-to-b from-[#F9F1F0] to-white rounded-xl flex items-center justify-center">
                                    <span className="text-lg font-bold text-[#1F1F1F]">
                                        Hello, Enterprise
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
