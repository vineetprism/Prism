'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "What Is Static Website Development?",
            answer: "Static website development is a modern approach where web pages are pre-built and served directly via CDNs, eliminating server-side processing. This results in faster load times, higher security, and predictable performance compared to dynamic websites."
        },
        {
            question: "How Is A Static Website Different From A Dynamic Website?",
            answer: "A static website delivers pre-rendered pages without database queries, while dynamic websites generate pages at runtime. Static websites are faster, more secure, and easier to scale, making them ideal for enterprise-grade performance and SEO."
        },
        {
            question: "Are Static Websites Secure For Enterprise Use?",
            answer: "Yes. With no database connected to the presentation layer, static websites remove common attack vectors such as SQL injection and server-side exploits, making them inherently secure and suitable for enterprise environments."
        },
        {
            question: "Can Static Websites Scale For High Traffic?",
            answer: "Absolutely. Static website services leverage global CDNs, allowing websites to scale automatically from hundreds to millions of users without downtime, infrastructure upgrades, or performance degradation."
        },
        {
            question: "Do Static Websites Support SEO And Core Web Vitals?",
            answer: "Yes. Static website development consistently outperforms Core Web Vitals due to minimal TTFB, fast rendering, and clean code structures—leading to better crawlability, rankings, and user engagement."
        },
        {
            question: "Is Content Management Possible With Static Websites?",
            answer: "Yes. Static websites can be integrated with headless CMS platforms, enabling non-technical teams to manage content while maintaining static performance, security, and scalability."
        },
        {
            question: "What Businesses Benefit Most From Static Website Designing Services?",
            answer: "Enterprises, SaaS companies, startups, and content-heavy brands benefit most from static website designing services due to lower operational costs, higher reliability, and improved digital performance."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-12">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#E92228] transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between group cursor-pointer"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4 font-heading group-hover:text-[#E92228] transition-colors duration-200">
                                        {faq.question}
                                    </span>
                                    <span className={`text-2xl font-bold transition-all duration-300 group-hover:text-[#E92228] ${openFAQ === idx ? 'text-[#E92228] rotate-45' : 'text-gray-400'
                                        }`}>
                                        +
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed font-body">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
