'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        { q: "Will re-developing my site hurt my SEO rankings?", a: "No. We execute a \"No-Loss Migration\" strategy. By utilizing Next.js for Server-Side Rendering and a meticulous 301 redirect map, we often see an increase in rankings due to improved Core Web Vitals (Speed and Mobile usability)." },
        { q: "Do we have to shut down our current business during the build?", a: "Absolutely not. We use the Strangler Fig Pattern. We build the new system alongside the old one, routing specific traffic to the new features gradually. Your users never experience downtime." },
        { q: "How is this different from a standard website redesign?", a: "A redesign is a \"facelift\" (Frontend). We perform Application Modernization (Full Stack). We refactor the backend logic, decouple the database, and optimize the infrastructure. It's a fundamental business transformation, not just a paint job." },
        { q: "Can you work with our existing legacy database?", a: "Yes. We specialize in \"Binary Archaeology.\" We can build modern APIs that sit on top of your legacy databases, allowing you to keep your data while modernizing the user interface." },
        { q: "What is \"Agentic Readiness\"?", a: "Modern websites must be readable by AI. We structure your data and APIs so that future AI agents (yours or your customers') can interact with your business autonomously." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    <span className="text-lg font-bold text-gray-900 font-heading pr-4">{faq.q}</span>
                                    <span className={`shrink-0 text-2xl font-light transition-colors ${openFAQ === idx ? 'text-[#E92228]' : 'text-gray-400'}`}>
                                        {openFAQ === idx ? '−' : '+'}
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-gray-600 leading-relaxed font-body">{faq.a}</p>
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
