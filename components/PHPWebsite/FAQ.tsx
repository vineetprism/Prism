'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "Isn't PHP considered a \"legacy\" language?",
            answer: "Not anymore. Modern PHP (8.x) features JIT compilation, strong typing, and massive performance improvements. It powers 79% of the web, including giants like Slack and Wikipedia. It is \"legacy\" only in longevity, but \"cutting-edge\" in capability."
        },
        {
            question: "Can PHP handle high-traffic enterprise applications?",
            answer: "Absolutely. When architected correctly with caching layers (Redis) and asynchronous queues (Horizon), PHP applications handle millions of requests. We optimize systems to handle 50k+ concurrent connections seamlessly."
        },
        {
            question: "How do you handle migration from old PHP versions (5.6/7.x)?",
            answer: "We use the \"Strangler Fig\" pattern. We don't rewrite everything at once. We wrap your legacy app in a modern API layer and replace functionality piece-by-piece, ensuring zero business interruption."
        },
        {
            question: "Is PHP secure enough for Fintech or Healthcare?",
            answer: "Yes. We adhere to OWASP standards. Modern frameworks prevent SQL injection and XSS by default. We add layers of static analysis and encryption to meet GDPR and HIPAA requirements."
        },
        {
            question: "Why choose Prism Infoways over a large GSI?",
            answer: "We offer the \"Hybrid\" advantage. You get the process rigor and architectural maturity of a Global System Integrator, but with the agility, speed, and cost-structure of a specialized boutique."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4 font-heading">
                                        {faq.question}
                                    </span>
                                    <span className={`text-2xl font-bold transition-colors duration-300 ${openFAQ === idx ? 'text-[#E92228]' : 'text-gray-400'}`}>
                                        {openFAQ === idx ? '−' : '+'}
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div className="px-6 pb-5 bg-gray-50">
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
