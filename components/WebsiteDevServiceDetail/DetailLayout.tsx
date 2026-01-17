'use client';

import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { WebDevService } from '@/data/websiteDevSolutions';
import AndroidAppLayout from './AndroidAppLayout';

interface DetailLayoutProps {
    service: WebDevService;
}

export default function DetailLayout({ service }: DetailLayoutProps) {
    // Route to custom Android layout
    if (service.slug === 'android-app-development') {
        return <AndroidAppLayout service={service} />;
    }

    return (
        <main className="w-full bg-white">
            {/* Hero Section with Sidebar */}
            <section className="relative w-full min-h-[450px] lg:min-h-[500px] overflow-visible">
                {/* Background Gradient - Prism Brand Colors */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] via-[#500000] to-[#1a1a1a] z-0" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-12 pb-16 lg:pt-16 lg:pb-20">

                        {/* Main Content Column */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            {/* Vertical Line Container */}
                            <div className="pl-6 sm:pl-8 border-l-4 border-[#E92228] py-2">
                                <span className="inline-block px-3 py-1.5 bg-[#E92228] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded mb-4">
                                    {service.category}
                                </span>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight font-heading">
                                    {service.title}
                                </h1>
                                <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-body mb-8">
                                    {service.description.replace(/<[^>]*>?/gm, '').substring(0, 180)}...
                                </p>

                                <div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-[#E92228] hover:bg-white hover:text-[#E92228] text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider border-2 border-transparent hover:border-[#E92228]"
                                    >
                                        GET A QUOTE
                                    </Link>
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
                <div className="lg:hidden container mx-auto px-4 pb-8">
                    <Sidebar />
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Description */}
                    <div
                        className="prose prose-lg max-w-none mb-12 text-gray-700 font-body leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: service.description }}
                    />

                    {/* Key Benefits Section */}
                    {service.features.length > 0 && (
                        <div className="mb-16">
                            <div className="flex items-center mb-8">
                                <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading">
                                    Key Benefits
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E92228] mr-5 group-hover:bg-[#E92228] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-800 font-semibold text-base leading-relaxed group-hover:text-[#E92228] transition-colors duration-300">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact Card */}
                    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 text-center shadow-md">
                        <h4 className="font-bold text-xl text-gray-900 mb-2 font-heading">Need Expert Advice?</h4>
                        <p className="text-base text-gray-600 mb-6 font-body">Our consultants are ready to help you.</p>
                        <a
                            href="tel:+918062177080"
                            className="inline-flex items-center text-[#E92228] font-bold text-lg hover:text-[#bd202e] transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            +91-8062177080
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}