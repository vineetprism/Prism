'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="relative py-32 lg:py-40 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 40px,
                        #E92228 40px,
                        #E92228 41px
                    )`
                }}></div>

                {/* Red Gradient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E92228]/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="h-px w-8 bg-[#E92228]"></div>
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-[0.2em]">
                            Get Started
                        </span>
                        <div className="h-px w-8 bg-[#E92228]"></div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading mb-8 leading-tight">
                        Ready to Build Your{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">
                                Digital Ecosystem
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#E92228] to-[#ff6b6b] rounded-full"></div>
                        </span>
                        ?
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-body">
                        Transform your mobile presence from a utility into a{' '}
                        <span className="text-white font-medium">high-performance revenue engine</span>.
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={onOpenModal}
                        className="group relative inline-flex items-center justify-center cursor-pointer"
                    >
                        {/* Outer Glow */}
                        <div className="absolute inset-0 bg-[#E92228] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

                        {/* Button */}
                        <div className="relative flex items-center gap-3 px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-transparent transition-all duration-300 shadow-xl shadow-[#E92228]/20">
                            Start Your Transformation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>

                    {/* Trust Note */}
                    <p className="mt-8 text-gray-500 text-sm">
                        Free 30-minute technical discovery call • No commitment required
                    </p>
                </div>
            </div>

            {/* Bottom Gradient Edge */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E92228]/30 to-transparent"></div>
        </section>
    );
}
