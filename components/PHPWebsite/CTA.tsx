'use client';

import React from 'react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-16 sm:py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                    Ready to Modernize Your PHP Stack with Our PHP Website Development Company?
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
                    Let&apos;s engineer a high-performance platform that scales with your ambition. Partner with a leading <span className="text-white font-bold">php website development company in India</span> for enterprise-grade solutions.
                </p>
                <button
                    onClick={onOpenModal}
                    className="inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group shadow-xl"
                >
                    Analyze My Architecture
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}
