'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #E92228 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                    Ready to Reinvent Your Digital Core with Website Redevelopment?
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
                    Let&apos;s eliminate your technical debt and build a future-proof platform.
                </p>
                <button
                    onClick={onOpenModal}
                    className="group inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-lg border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-xl shadow-[#E92228]/30 cursor-pointer"
                >
                    Schedule Technical Debt Assessment
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
