'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function BusinessImpact() {
    return (
        <section id="business-impact" className="py-20 md:py-28 bg-[#1F1F1F]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-heading">
                        The Cost of Inaction is <span className="text-[#E92228]">Obsolescence.</span>
                    </h2>

                    {/* Body Copy */}
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-body mb-8">
                        As of <strong className="text-white">May 2024</strong>, Microsoft has sunset Xamarin support. This is not just a technical update—it is a compliance <strong className="text-[#E92228]">&quot;hard stop.&quot;</strong> Without migrating to .NET MAUI, your applications cannot target Android 15 or iOS 18, leading to inevitable removal from the App Store and Google Play.
                    </p>

                    {/* Accent Text */}
                    <p className="text-xl md:text-2xl text-[#E92228] font-bold mb-8">
                        Don&apos;t let technical debt become a business liability.
                    </p>

                    {/* Data Pill */}
                    <div className="inline-flex items-center gap-3 bg-[#E92228]/20 border border-[#E92228] px-6 py-3 rounded-full">
                        <AlertCircle className="w-5 h-5 text-[#E92228]" />
                        <span className="text-white font-bold">0% Security Patches for Xamarin since May 2024</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
