'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[650px] lg:min-h-[750px] overflow-hidden">
            {/* Gradient Background - Red to Dark */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E92228] via-[#bd202e] to-[#1a0a0a]">
                {/* Geometric Diamond Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="diamonds" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#diamonds)" />
                    </svg>
                </div>

                {/* Radial Glow Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[300px] opacity-10 -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E92228] rounded-full blur-[200px] opacity-30 translate-y-1/2 -translate-x-1/3"></div>

                {/* Floating Orbs */}
                <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-20 pb-24 lg:pt-28 lg:pb-32 items-center">

                    {/* Main Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                <span className="text-white/90 text-sm font-medium">Enterprise Web Solutions</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1] font-heading drop-shadow-lg">
                                Dynamic Website Development Company Engineering Revenue Growth
                            </h1>
                            <p className="text-white/80 text-lg sm:text-xl lg:text-2xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                Move beyond static brochures. Our dynamic website development services build mission-critical, cloud-native web applications that drive 748% ROI and scale with your business ambition.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center px-8 py-4 bg-white text-[#E92228] text-base sm:text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                                >
                                    Start Your Discovery Strategy
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </button>
                                <a href="#tech-stack" className="inline-flex items-center text-white/70 hover:text-white text-base font-medium transition-colors group">
                                    <span className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center mr-2 group-hover:border-white group-hover:bg-white/10 transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                        </svg>
                                    </span>
                                    Explore Tech Stack
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
                                {[
                                    { num: "748%", label: "ROI Delivered" },
                                    { num: "70%", label: "Efficiency Boost" },
                                    { num: "100+", label: "Projects Launched" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center lg:text-left">
                                        <div className="text-3xl font-bold text-white font-heading">{stat.num}</div>
                                        <div className="text-white/60 text-sm">{stat.label}</div>
                                    </div>
                                ))}
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

            {/* Curved Bottom Edge */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 80V60C240 20 480 0 720 0C960 0 1200 20 1440 60V80H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
