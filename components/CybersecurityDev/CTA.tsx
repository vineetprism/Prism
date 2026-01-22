'use client';

import React from 'react';
import { ArrowRight, Shield, CheckCircle, Clock, Sparkles } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Premium Light Background with Aurora Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
                {/* Aurora Blobs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E92228]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main CTA Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-12 lg:p-16 text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#E92228]/10 text-[#E92228] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-8">
                            <Shield className="w-4 h-4" />
                            Start Your Security Journey
                        </div>

                        {/* Headline with Gradient */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                            <span className="text-gray-900">Ready for</span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] via-[#ff4d4d] to-[#E92228]">
                                Cyber Resilience?
                            </span>
                        </h2>

                        {/* Decorative Underline SVG */}
                        <svg className="w-48 h-3 mx-auto mb-8" viewBox="0 0 200 12" fill="none">
                            <path d="M2 10C50 2 150 2 198 10" stroke="#E92228" strokeWidth="3" strokeLinecap="round" />
                        </svg>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
                            Start with a complimentary security assessment. Our experts will analyze your threat landscape and provide a strategic roadmap—with zero obligation.
                        </p>

                        {/* Primary CTA Button */}
                        <div className="mb-10">
                            <button
                                onClick={onOpenModal}
                                aria-label="Get your free security assessment"
                                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#E92228] hover:shadow-2xl hover:shadow-[#E92228]/30 hover:-translate-y-1 cursor-pointer font-poppins"
                            >
                                <span className="relative z-10">Get Your Free Assessment</span>
                                <div className="relative z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#E92228] group-hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 lg:gap-x-12 border-t border-gray-100 pt-8">
                            <div className="flex items-center gap-3 text-gray-500 font-medium">
                                <div className="w-8 h-8 rounded-full bg-[#E92228]/10 flex items-center justify-center text-[#E92228]">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <span className="text-sm">No Commitment Required</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 font-medium">
                                <div className="w-8 h-8 rounded-full bg-[#E92228]/10 flex items-center justify-center text-[#E92228]">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <span className="text-sm">30-Min Consultation</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 font-medium">
                                <div className="w-8 h-8 rounded-full bg-[#E92228]/10 flex items-center justify-center text-[#E92228]">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <span className="text-sm">Tailored Recommendations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
