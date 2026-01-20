'use client';

import React from 'react';

export default function BusinessImpact() {
    return (
        <section id="business-impact" className="py-20 md:py-28 bg-[#F5F5F5]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-8 font-heading">
                        The ROI of Empathy: <span className="text-[#E92228]">Why Good Design is Good Business.</span>
                    </h2>

                    {/* Body Copy */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-body">
                        In a saturated app market, functionality alone is not a differentiator—<strong className="text-[#1F1F1F]">experience is.</strong> Users decide within 50 milliseconds whether to stay or delete. We move beyond aesthetics to engineer <strong className="text-[#E92228]">cognitive fluency</strong>—reducing the mental load required to use your app. This rigorous approach to UX translates directly to the bottom line: for every $1 invested in UX, the average return is $100 (a 9,900% ROI).
                    </p>

                    {/* Red Divider */}
                    <div className="w-24 h-1 bg-[#E92228] mt-10 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
