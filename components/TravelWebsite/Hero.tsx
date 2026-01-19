'use client';

import React from 'react';
import Sidebar from '../WebsiteDevServiceDetail/Sidebar';
import { Plane, ChevronRight } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative w-full min-h-[800px] lg:min-h-[850px] overflow-hidden bg-gradient-to-br from-white via-[#F9F1F0] to-white">

            {/* Animated Flight Paths Background */}
            <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Flight path gradient */}
                        <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#E92228" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        {/* Glow filter */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Flight curves */}
                    <path d="M-50 200 Q 300 50 700 300 T 1500 200" stroke="url(#flightGradient)" strokeWidth="2" fill="none" opacity="0.4" className="animate-pulse" />
                    <path d="M-100 400 Q 400 150 800 400 T 1600 350" stroke="url(#flightGradient)" strokeWidth="1.5" fill="none" opacity="0.3" />
                    <path d="M-50 600 Q 350 400 750 550 T 1550 500" stroke="url(#flightGradient)" strokeWidth="1" fill="none" opacity="0.25" />

                    {/* Location dots */}
                    <circle cx="150" cy="180" r="4" fill="#E92228" filter="url(#glow)" opacity="0.8" />
                    <circle cx="450" cy="120" r="3" fill="#E92228" filter="url(#glow)" opacity="0.6" />
                    <circle cx="750" cy="280" r="5" fill="#E92228" filter="url(#glow)" opacity="0.9" />
                    <circle cx="1000" cy="220" r="3" fill="#E92228" filter="url(#glow)" opacity="0.5" />
                    <circle cx="1200" cy="180" r="4" fill="#E92228" filter="url(#glow)" opacity="0.7" />
                </svg>
            </div>

            {/* Globe Visualization on Right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] opacity-10 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Globe circles */}
                    <circle cx="200" cy="200" r="180" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.5" />
                    <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.4" />
                    <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                    <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.4" />
                    <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                    {/* Meridian lines */}
                    <line x1="200" y1="20" x2="200" y2="380" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                </svg>
            </div>


            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 pt-24 pb-28 lg:pt-32 lg:pb-36 items-center">
                    {/* Left - Content */}
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E92228] to-[#ff4444] flex items-center justify-center shadow-lg shadow-[#E92228]/30">
                                    <Plane className="w-6 h-6 text-white transform -rotate-45" />
                                </div>
                                <div>
                                    <span className="text-gray-900 text-sm font-bold uppercase tracking-widest block">
                                        Travel Tech Engineering
                                    </span>
                                    <span className="text-[#E92228] text-xs font-medium">Next-Gen Platforms</span>
                                </div>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] font-heading">
                                Engineered for{' '}
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] via-[#ff6b6b] to-[#E92228]">Velocity</span>
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#E92228] to-transparent rounded-full"></span>
                                </span>
                                <br />
                                <span className="text-[#E92228]">The Next-Gen Travel Ecosystem.</span>
                            </h1>

                            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                Move beyond transaction-based legacy systems. We architect <span className="text-gray-900 font-medium">cloud-native travel platforms</span> capable of handling <span className="text-[#E92228] font-bold">200k+ requests per second</span> with sub-millisecond latency.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <button
                                    onClick={onOpenModal}
                                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E92228] to-[#ff4444] text-white text-base sm:text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-[#E92228]/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                >
                                    <Plane className="w-5 h-5 mr-3 transform -rotate-45" />
                                    Book a Technical Discovery
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-xs text-white font-bold">A</div>
                                        <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-xs text-white font-bold">S</div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E92228] to-[#ff4444] border-2 border-white flex items-center justify-center text-xs text-white">N</div>
                                    </div>
                                    <span>Amadeus • Sabre • NDC</span>
                                </div>
                            </div>

                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-2">
                                {['Microservices', 'Federated GraphQL', 'NDC Integration', 'Real-time Inventory'].map((tech, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-xs font-medium hover:border-[#E92228]/50 hover:text-[#E92228] transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Sidebar */}
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
