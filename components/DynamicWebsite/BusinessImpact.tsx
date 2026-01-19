'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E92228]/5 rounded-full blur-[100px]"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Giant Number */}
                        <div className="text-center lg:text-left">
                            <div className="inline-block">
                                <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-bold text-[#E92228] leading-none font-heading">
                                    $2.5M
                                </span>
                                <p className="text-gray-500 text-lg mt-2 font-body">Lost annually per 1-second delay</p>
                            </div>
                        </div>

                        {/* Right - Text */}
                        <div className="relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#E92228] rounded-full hidden lg:block"></div>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-body lg:pl-8">
                                In 2025, a website is not a URL—it is your <span className="font-bold text-gray-900">primary operational layer</span>.
                                You don&apos;t need a design agency; you need a partner who understands that
                                <span className="font-bold text-gray-900"> Performance = Revenue</span> and
                                <span className="font-bold text-gray-900"> Downtime = Liability</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
