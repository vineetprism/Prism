'use client';

import React from 'react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#E92228] to-[#bd202e]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                    Ready to Accelerate Your Digital Presence?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-body">
                    Let&apos;s architect your next-generation website that delivers unmatched performance and security.
                </p>
                <button
                    onClick={onOpenModal}
                    className="inline-flex items-center px-8 py-4 bg-white text-[#E92228] text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer group border-2 border-white hover:bg-[#E92228] hover:text-white"
                >
                    START YOUR PROJECT
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}
