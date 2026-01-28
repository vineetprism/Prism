'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "Q: What Is A Dynamic Website And How Does It Differ From A Static Website?",
            answer: <>A dynamic website generates content in real-time based on user interactions, database queries, and business logic. Unlike static websites that display fixed content, dynamic platforms personalize experiences, process transactions, and update content automatically—turning your website into an operational revenue engine rather than a digital brochure.</>
        },
        {
            question: "Q: How Long Does It Take To Build A Dynamic Website?",
            answer: <>Timeline depends on scope and technical requirements. MVP launches typically take 8-12 weeks for startups, while enterprise solutions require 16-24 weeks. We use agile methodology to ensure you see progress every sprint and can adjust priorities based on market feedback.</>
        },
        {
            question: "Q: Which Technologies Are Best For Dynamic Website Development?",
            answer: <>We recommend technology stacks based on your business needs. Popular choices include React/Next.js for frontend performance, Node.js or Laravel for backend scalability, and cloud-native architectures (AWS/Azure) for reliability. Our <span className="font-bold text-gray-900">dynamic websites services</span> select frameworks that optimize for your growth trajectory.</>
        },
        {
            question: "Q: Can You Migrate My Existing Website To A Dynamic Platform?",
            answer: <>Absolutely. Our <span className="font-bold text-gray-900">dynamic website solutions</span> include legacy migration with zero downtime. We architect phased transitions that preserve SEO equity, maintain business continuity, and deliver immediate performance improvements.</>
        },
        {
            question: "Q: Do Dynamic Websites Rank Better In Search Engines?",
            answer: <>Yes, when engineered correctly. We implement server-side rendering, optimized Core Web Vitals, and structured data that enhance search visibility while delivering personalized user experiences. This combines SEO performance with conversion optimization for maximum business impact.</>
        },
        {
            question: "Q: What Ongoing Support Do You Provide After Launch?",
            answer: <>We offer comprehensive maintenance including security updates, performance monitoring, feature enhancements, and 24/7 uptime management. As your <span className="font-bold text-gray-900">dynamic website development company partner</span>, we ensure your platform evolves with market demands and technology advancements.</>
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions About Dynamic Website Development
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'ring-2 ring-[#E92228]' : 'hover:shadow-md'}`}
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4 font-heading">
                                        {faq.question}
                                    </span>
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQ === idx ? 'bg-[#E92228] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'max-h-48' : 'max-h-0'}`}>
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed font-body">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
