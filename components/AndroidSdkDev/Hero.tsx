'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white">
            {/* Full Viewport Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                {/* Desktop Image */}
                <div className="hidden lg:block absolute inset-0 w-full h-full">
                    <Image
                        src="/images/AndSdk.png"
                        alt="Android SDK Development Background"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={100}
                    />
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden absolute inset-0 w-full h-full">
                    <Image
                        src="/images/vertically.png"
                        alt="Android SDK Development Background Mobile"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={100}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="min-h-screen flex flex-col justify-center lg:block lg:py-20">
                    <div className="h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-2xl mx-auto lg:mx-0 pt-20 lg:pt-0">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm px-4 py-2 rounded-full mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#E92228]" />
                            <span className="text-gray-700 text-sm font-medium">
                                Enterprise Android Engineering
                            </span>
                        </div>

                        {/* H1 Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] font-heading mb-8">
                            Secure Your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] via-[#ff4d4d] to-[#E92228]">
                                Digital Core
                            </span>
                            <br />
                            with Enterprise-Grade
                            <br />
                            Android SDKs.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md font-body mb-8">
                            Move beyond fragmentation. We engineer high-performance, compliant Android architectures that{' '}
                            <span className="text-gray-900 font-semibold">reduce technical debt</span> and{' '}
                            <span className="text-gray-900 font-semibold">maximize ROI</span> using{' '}
                            <span className="text-[#E92228] font-bold">Kotlin Multiplatform</span>.
                        </p>

                        {/* CTA Button */}
                        <button
                            onClick={onOpenModal}
                            aria-label="Consult our architects"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E92228] text-white text-base font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/20 cursor-pointer font-poppins"
                        >
                            Consult Our Architects
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#E92228] group-hover:text-white transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
