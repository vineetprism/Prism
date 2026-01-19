'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-20 lg:py-28 bg-[#3a3a3a] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                    Ready to Transform Your Digital Experience?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-body">
                    Let&apos;s architect a CMS solution that scales with your ambitions.
                </p>
                <button
                    onClick={onOpenModal}
                    className="group inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-xl cursor-pointer"
                >
                    Schedule Architecture Assessment
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
