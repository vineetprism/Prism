'use client';

import React from 'react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="relative py-20 sm:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#161b22] to-[#0d1117]"></div>
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E92228] rounded-full blur-[200px] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                    Ready to Engineer Your Revenue Engine?
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
                    Let&apos;s build the mission-critical web application that scales with your ambition.
                </p>
                <button
                    onClick={onOpenModal}
                    className="inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer group shadow-2xl shadow-red-500/30"
                >
                    Start Your Discovery Strategy
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}
