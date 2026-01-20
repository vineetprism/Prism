'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    const features = ["Free Consultation", "Expert iOS Team", "Agile Delivery"];

    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#E92228] to-[#bd202e]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Ready to Build Your Enterprise iOS Solution?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl text-white/80 mb-8">
                        Let&apos;s start with a technical discovery session to understand your requirements.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-white/90">
                                <Check className="w-5 h-5" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onOpenModal}
                        className="group inline-flex items-center justify-center gap-3 bg-white text-[#E92228] font-bold px-10 py-5 rounded-full hover:bg-[#1F1F1F] hover:text-white transition-all duration-300 shadow-2xl hover:shadow-xl text-lg"
                    >
                        Schedule Technical Discovery
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
