'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "If it's 'static,' does that mean I can't have dynamic features like search or logins?",
            answer: "Not at all. We use APIs to load dynamic features like Algolia search, forms, and Auth0 user authentication instantly. You get static speed with dynamic power."
        },
        {
            question: "Will my marketing team need to learn code to update the site?",
            answer: "No. We implement Headless CMS interfaces that look similar to WordPress. Your team drags-and-drops content; the system handles the code."
        },
        {
            question: "How does this impact my SEO?",
            answer: "It is a massive advantage. Google prioritizes page speed. Static sites naturally excel at Core Web Vitals, often resulting in immediate ranking boosts."
        },
        {
            question: "Is migrating from WordPress difficult?",
            answer: "It requires planning, but it is our specialty. We use automated tools to map and transfer your content, ensuring your SEO history is preserved."
        },
        {
            question: "How does this architecture improve security?",
            answer: "It virtually eliminates the attack surface. There is no database to hack and no login page to brute-force on the public site, making it ideal for high-security sectors."
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
