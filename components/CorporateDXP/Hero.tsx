'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    // Service offerings ticker data
    const serviceOfferings = [
        "Static Website Development",
        "Corporate Digital Experience Platforms",
        "Dynamic Website Development",
        "PHP Website Development",
        "CMS Website Development",
        "Website Re-development",
        "Travel Website Development",
        "React Js Website Development"
    ];

    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
            {/* Background - Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F] via-[#2a2a2a] to-[#1F1F1F] z-0">
                {/* 3D Abstract Visualization - Data Streams */}
                <div className="absolute inset-0 opacity-60 pointer-events-none overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Central Core */}
                        <circle cx="1100" cy="350" r="80" fill="url(#coreGradient)" opacity="0.9">
                            <animate attributeName="r" values="80;90;80" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="1100" cy="350" r="120" stroke="#E92228" strokeWidth="1" fill="none" opacity="0.3">
                            <animate attributeName="r" values="120;140;120" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="1100" cy="350" r="160" stroke="#E92228" strokeWidth="0.5" fill="none" opacity="0.2">
                            <animate attributeName="r" values="160;180;160" dur="5s" repeatCount="indefinite" />
                        </circle>

                        {/* Data Streams */}
                        <path d="M200 150 Q 500 200, 700 280 T 1020 350" stroke="url(#streamGradient1)" strokeWidth="2" fill="none" opacity="0.8">
                            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" repeatCount="indefinite" />
                        </path>
                        <circle r="4" fill="#E92228">
                            <animateMotion dur="2s" repeatCount="indefinite" path="M200 150 Q 500 200, 700 280 T 1020 350" />
                        </circle>

                        <path d="M100 400 Q 400 380, 650 360 T 1020 350" stroke="url(#streamGradient2)" strokeWidth="2" fill="none" opacity="0.6">
                            <animate attributeName="stroke-dasharray" values="0,800;800,0" dur="2.5s" repeatCount="indefinite" />
                        </path>
                        <circle r="3" fill="#ffffff">
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M100 400 Q 400 380, 650 360 T 1020 350" />
                        </circle>

                        <path d="M300 550 Q 550 500, 750 420 T 1020 350" stroke="url(#streamGradient3)" strokeWidth="1.5" fill="none" opacity="0.5">
                            <animate attributeName="stroke-dasharray" values="0,900;900,0" dur="3s" repeatCount="indefinite" />
                        </path>
                        <circle r="2.5" fill="#E92228" opacity="0.8">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M300 550 Q 550 500, 750 420 T 1020 350" />
                        </circle>

                        <path d="M50 250 Q 350 300, 600 320 T 1020 350" stroke="url(#streamGradient4)" strokeWidth="1" fill="none" opacity="0.4">
                            <animate attributeName="stroke-dasharray" values="0,700;700,0" dur="3.5s" repeatCount="indefinite" />
                        </path>

                        {/* Floating Nodes */}
                        <circle cx="300" cy="200" r="8" fill="#E92228" opacity="0.6">
                            <animate attributeName="cy" values="200;180;200" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="500" cy="450" r="6" fill="#ffffff" opacity="0.4">
                            <animate attributeName="cy" values="450;430;450" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="700" cy="150" r="5" fill="#E92228" opacity="0.5">
                            <animate attributeName="cy" values="150;170;150" dur="5s" repeatCount="indefinite" />
                        </circle>

                        {/* Gradient Definitions */}
                        <defs>
                            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#E92228" />
                                <stop offset="100%" stopColor="#8B0000" />
                            </radialGradient>
                            <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E92228" stopOpacity="0" />
                                <stop offset="50%" stopColor="#E92228" stopOpacity="1" />
                                <stop offset="100%" stopColor="#E92228" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="streamGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E92228" stopOpacity="0" />
                                <stop offset="50%" stopColor="#E92228" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#E92228" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="streamGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#888888" stopOpacity="0" />
                                <stop offset="50%" stopColor="#888888" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#888888" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">
                    {/* Main Content Column */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1] font-heading">
                                Build the <span className="text-[#E92228]">Central Nervous System</span> of Your Digital Enterprise.
                            </h1>
                            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                Move beyond a brochure-led presence. Our <span className="text-white font-semibold">corporate website development</span> approach delivers AI-native, cloud-resilient platforms designed to eliminate legacy technical debt, support enterprise-scale growth, and drive up to <span className="text-[#E92228] font-bold">9,900% ROI</span> through performance-led architecture and superior user experience.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                                <button
                                    onClick={onOpenModal}
                                    className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer group border-2 border-[#E92228] hover:bg-transparent"
                                >
                                    Schedule Technical Discovery
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <a
                                    href="#roi-benchmarks"
                                    className="inline-flex items-center text-gray-400 hover:text-white text-base font-medium transition-colors duration-300 group"
                                >
                                    View ROI Benchmarks
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
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

            {/* Service Offerings Ticker */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-white/10 py-4 z-20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-8 overflow-hidden">
                        <span className="text-gray-500 text-sm uppercase tracking-wider font-heading shrink-0">Our Services</span>
                        <div className="flex items-center gap-8 animate-marquee">
                            {serviceOfferings.concat(serviceOfferings).map((service: string, idx: number) => (
                                <span key={idx} className="text-gray-400 text-sm font-medium whitespace-nowrap">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
