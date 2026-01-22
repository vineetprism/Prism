'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-20 lg:py-28 bg-[#1F1F1F] relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="/images/ios-security-shield.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F] via-[#1F1F1F]/90 to-[#1F1F1F]/70" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#E92228]/10 border border-[#E92228]/30 px-4 py-2 rounded-full mb-8">
                        <Shield className="w-4 h-4 text-[#E92228]" />
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest">
                            Zero-Risk Assessment
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-6">
                        Ready to Build Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">
                            Intelligent iOS Asset?
                        </span>
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed font-body max-w-2xl mx-auto mb-10">
                        Start with a complimentary technical assessment. Our iOS architects will analyze
                        your requirements and provide a strategic roadmap—with zero obligation.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-[#E92228]" />
                            <span>No Commitment Required</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Clock className="w-4 h-4 text-[#E92228]" />
                            <span>48-Hour Turnaround</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Shield className="w-4 h-4 text-[#E92228]" />
                            <span>Enterprise-Grade Security</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onOpenModal}
                        aria-label="Start your technical assessment now"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/30 cursor-pointer"
                    >
                        Start Your Technical Assessment
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#E92228]/20 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
