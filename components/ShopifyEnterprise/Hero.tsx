'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left - Main Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%] order-2 lg:order-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="w-12 h-0.5 bg-[#E92228]"></span>
                            <span className="text-[#E92228] font-bold text-sm tracking-widest uppercase">
                                ENTERPRISE COMMERCE EXCELLENCE
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight font-heading">
                            Shopify Website Development Solutions: <span className="text-[#E92228]">Generate Revenue at Scale from Commerce Complexity</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-body">
                            Transcend inflexible legacy systems. As a top Shopify website development company, we create high-performance, composable Shopify Plus ecosystems with 99.99% uptime and quantifiable TCO reduction.
                        </p>

                        <blockquote className="border-l-4 border-[#E92228] pl-6 italic text-gray-700 text-lg mb-8">
                            &quot;The era of the monolithic commerce suite is over. Modern enterprises require agility without sacrificing stability.&quot;
                        </blockquote>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <div className="text-3xl font-bold text-[#E92228] mb-1">- 33%</div>
                                <div className="text-sm font-bold text-gray-900 uppercase tracking-wider">Reduction in Total Cost of Ownership</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#E92228] mb-1">- 50%</div>
                                <div className="text-sm font-bold text-gray-900 uppercase tracking-wider">Faster Speed-to-Market</div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            We don’t just develop websites; we implement digital transformations. As a shopify website development company India, we move businesses to cloud-native, composable architectures that fill the gap between technical complexity and business growth—making Shopify your operational backbone.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button
                                onClick={onOpenModal}
                                className="cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#E92228] border-2 border-[#E92228] rounded-full hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
                            >
                                Launch Your Store
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right - Sidebar */}
                    <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%] order-1 lg:order-2 relative z-20">
                        <Sidebar />
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="lg:hidden container mx-auto px-4 pb-8 relative z-10">
                <Sidebar />
            </div>
        </section>
    );
}
