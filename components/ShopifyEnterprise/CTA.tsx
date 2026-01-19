'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-r from-[#E92228] to-[#c91e23] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                    Ready to Transform Your Commerce?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-body">
                    Let&apos;s architect a Shopify Plus ecosystem that scales with your ambitions.
                </p>
                <button
                    onClick={onOpenModal}
                    className="group inline-flex items-center px-10 py-5 bg-white text-[#E92228] text-lg font-bold rounded-full border-2 border-white hover:bg-[#E92228] hover:text-white hover:border-[#E92228] transition-all duration-300 cursor-pointer"
                >
                    Schedule Your Strategic Consult
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
