'use client';

import React from 'react';

export default function Audience() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Startups */}
                        <div className="bg-gradient-to-br from-[#E92228] to-[#bd202e] p-10 rounded-2xl text-white shadow-2xl">
                            <h3 className="text-3xl font-bold mb-4 font-heading">
                                For The Visionary Startup
                            </h3>
                            <p className="text-xl font-semibold mb-8 text-white/90">
                                Launch at Light Speed
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-lg leading-relaxed">
                                        Rapid MVP deployment in weeks, not months.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-lg leading-relaxed">
                                        Near-zero hosting costs (pay only for bandwidth).
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-lg leading-relaxed">
                                        SEO Dominance from Day 1 with perfect Lighthouse scores.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Enterprises */}
                        <div className="bg-gradient-to-br from-[#1F1F1F] to-black p-10 rounded-2xl text-white shadow-2xl">
                            <h3 className="text-3xl font-bold mb-4 font-heading">
                                For The Global Enterprise
                            </h3>
                            <p className="text-xl font-semibold mb-8 text-white/90">
                                Governance & Resilience
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-lg leading-relaxed">
                                        Impenetrable security (GDPR, HIPAA, SOC2 compliant).
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-lg leading-relaxed">
                                        Secure integration with SAP, Oracle, and Salesforce APIs.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-lg leading-relaxed">
                                        High-traffic stability for millions of concurrent users.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
