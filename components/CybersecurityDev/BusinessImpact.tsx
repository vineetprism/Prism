'use client';

import React from 'react';

interface BusinessImpactProps {
    onOpenModal?: () => void;
}

export default function BusinessImpact({ onOpenModal }: BusinessImpactProps) {
    return (
        <section className="py-20 lg:py-28 bg-[#1a1a1a] relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(#E92228 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow Text */}
                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-[0.3em] mb-6 block font-mono">
                        THE 2025 IMPERATIVE
                    </span>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-8 leading-tight">
                        Cybersecurity is no longer an IT ticket.{' '}
                        <br className="hidden sm:block" />
                        It is a <span className="text-[#E92228]">Boardroom Risk.</span>
                    </h2>

                    {/* Visual Accent Line */}
                    <div className="w-32 h-1 bg-[#E92228] mx-auto mb-8"></div>

                    {/* Body Copy */}
                    <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-3xl mx-auto">
                        The modern threat landscape has shifted. With{' '}
                        <span className="text-white font-semibold">94% of businesses targeted</span>{' '}
                        and attack sophistication driven by Generative AI, &quot;prevention&quot; is no longer enough. 
                        You need <span className="text-[#E92228] font-bold">Resilience</span>. 
                        Prism Infoways moves you from reactive &quot;firefighting&quot; to proactive &quot;threat hunting,&quot; 
                        reducing the operational burden of the{' '}
                        <span className="text-white font-semibold">83+ tools</span> cluttering your environment.
                    </p>

                    {/* CTA Link */}
                    <div className="mt-10">
                        <button
                            onClick={onOpenModal}
                            className="inline-flex items-center gap-2 text-[#E92228] font-bold hover:text-white transition-colors cursor-pointer font-mono text-sm uppercase tracking-wider"
                        >
                            Learn How We Simplify Security →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}