'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        { q: "How do you handle \"Double Bookings\" during high traffic?", a: "We implement robust concurrency control using Distributed Locking mechanisms. When a user selects a room or seat, we apply a temporary, time-bound lock (via Redis) that prevents other users from booking the same unit until the transaction clears or expires." },
        { q: "Can you migrate our legacy Mainframe/COBOL system without downtime?", a: "Yes. We utilize the Strangler Fig Pattern. We build a cloud-native \"Anti-Corruption Layer\" around your legacy system and migrate functionality piece-by-piece. This allows you to keep operating while we modernize the backend." },
        { q: "How do you manage slow responses from GDS providers (Amadeus/Sabre)?", a: "We use Asynchronous Processing and Circuit Breakers. If a provider is slow, our system serves the fast results first and \"trips the breaker\" on the slow provider to prevent your entire search engine from hanging." },
        { q: "What is your approach to Data Security and GDPR?", a: "We employ a \"Security by Design\" approach. Sensitive PII is encrypted at rest, and payment data is tokenized via secure gateways so that raw credit card numbers never touch your servers, ensuring full PCI-DSS compliance." },
        { q: "How does your architecture support \"Agentic AI\"?", a: "We build on a Data Lakehouse foundation (like Snowflake). This unifies your data, allowing LLMs to access clean, structured history to generate autonomous itineraries and personalized recommendations." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technical FAQ</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Addressing Your Pain Points
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
