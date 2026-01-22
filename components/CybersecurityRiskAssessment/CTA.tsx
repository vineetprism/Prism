'use client';

import React from 'react';
import { Shield, ChevronRight, FileText, Phone } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1F1F1F] via-[#2a2a2a] to-[#1F1F1F] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'linear-gradient(#E92228 1px, transparent 1px), linear-gradient(90deg, #E92228 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }}></div>

            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E92228]/15 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E92228] rounded-2xl mb-8 shadow-2xl shadow-[#E92228]/30">
                        <Shield className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-6 leading-tight">
                        Ready to Engineer{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">Resilience?</span>
                    </h2>

                    <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body mb-10 max-w-2xl mx-auto">
                        Join the organizations that have moved beyond compliance checkboxes to true security maturity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button onClick={onOpenModal} className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/25 cursor-pointer">
                            Schedule Your Assessment
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a href="#sample-report" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-base font-medium transition-colors py-4">
                            <FileText className="w-5 h-5" />
                            View Sample Report
                        </a>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/10">
                        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#E92228]" />
                                <span className="text-gray-400 text-sm">Free Consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                <span className="text-gray-400 text-sm">Response within 24 hours</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-[#E92228]" />
                                <span className="text-gray-400 text-sm">100% Confidential</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
