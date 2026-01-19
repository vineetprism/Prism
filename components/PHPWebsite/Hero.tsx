'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[650px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Abstract Code Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#E92228]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">

                    {/* Main Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-center lg:text-left">
                            {/* Pre-Header */}
                            <span className="inline-block text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4">
                                PHP 8.3 & Beyond
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] font-heading">
                                Engineer High-Performance Platforms with{' '}
                                <span className="text-[#E92228]">Modern Enterprise PHP</span>
                            </h1>
                            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                Move beyond legacy scripting. We build secure, cloud-native architectures capable of handling <span className="font-semibold text-gray-900">50,000+ concurrent users</span> with <span className="font-semibold text-[#E92228]">45% greater cost efficiency</span> than Java counterparts.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#bd202e] cursor-pointer"
                                >
                                    Analyze My Architecture
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </button>
                                <a href="#case-studies" className="inline-flex items-center text-gray-600 hover:text-[#E92228] text-base font-medium transition-colors underline underline-offset-4">
                                    View Performance Case Studies
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%]">
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
