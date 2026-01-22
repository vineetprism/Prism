'use client';

import React from 'react';
import { ArrowRight, Shield, Clock, CheckCircle, Sparkles } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
            {/* Ambient Background - Aurora Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Glass Card Container */}
                <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl shadow-gray-200/50 relative overflow-hidden">

                    {/* Decorative Shine */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-gradient-to-br from-[#E92228]/10 to-transparent rounded-full blur-3xl" />

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white border border-red-100 px-5 py-2.5 rounded-full mb-10 shadow-sm relative z-10">
                        <Shield className="w-4 h-4 text-[#E92228]" />
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest">
                            Zero-Risk Assessment
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-8 relative z-10 tracking-tight">
                        Ready to Secure Your{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#bd202e]">
                                Digital Core?
                            </span>
                            {/* Underline decorative */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E92228]/20 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed font-body max-w-2xl mx-auto mb-12 relative z-10">
                        Start with a complimentary technical discovery. Our Android architects will analyze
                        your fragmentation risks and provide a strategic roadmap—with zero obligation.
                    </p>

                    {/* CTA Button */}
                    <div className="relative z-10 mb-12">
                        <button
                            onClick={onOpenModal}
                            aria-label="Start your technical assessment now"
                            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#E92228] hover:shadow-2xl hover:shadow-[#E92228]/40 hover:-translate-y-1 cursor-pointer"
                        >
                            <span className="relative z-10">Start Technical Assessment</span>
                            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#E92228] group-hover:text-white transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </div>

                            {/* Shimmer Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </button>
                    </div>

                    {/* Trust Indicators - Clean Layout */}
                    <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 lg:gap-x-12 relative z-10 border-t border-gray-100 pt-8">
                        <div className="flex items-center gap-3 text-gray-500 font-medium">
                            <div className="w-8 h-8 rounded-full bg-[#E92228]/10 flex items-center justify-center text-[#E92228]">
                                <CheckCircle className="w-4 h-4" />
                            </div>
                            <span>No Commitment Required</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 font-medium">
                            <div className="w-8 h-8 rounded-full bg-[#E92228]/10 flex items-center justify-center text-[#E92228]">
                                <Clock className="w-4 h-4" />
                            </div>
                            <span>48-Hour Turnaround</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 font-medium">
                            <div className="w-8 h-8 rounded-full bg-[#E92228]/10 flex items-center justify-center text-[#E92228]">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            <span>Enterprise-Grade Security</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
