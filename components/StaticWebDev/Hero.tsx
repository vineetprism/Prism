'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[500px] lg:min-h-[550px] overflow-hidden bg-white">
            {/* Background - Clean White/Light Gray as requested */}
            <div className="absolute inset-0 bg-[#F9F9F9] z-0">
                {/* Simplified Abstract Pattern matching working pages */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E92228' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-12 pb-16 lg:pt-20 lg:pb-24 items-center">

                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-heading">
                                Static Website Development: <br /> <span className="text-[#E92228]">Turning Digital Performance Into Enterprise ROI</span>
                            </h1>
                            <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                Immutable architectures engineered for the speed of now. Our static website development solutions help enterprises replace infrastructure complexity with architectural clarity, delivering sub-second load times, enterprise-grade security, and global availability.
                            </p>

                            <div>
                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer group border-2 border-[#E92228] hover:bg-white hover:text-[#E92228]"
                                >
                                    GET FREE CONSULTECH
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column - Desktop */}
                    <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%]">
                        <div className="sticky top-24">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar - Below Hero */}
            <div className="lg:hidden container mx-auto px-4 pb-8 relative z-10">
                <Sidebar />
            </div>
        </section>
    );
}
