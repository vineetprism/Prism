'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            q: "What features are essential for a modern travel booking website?",
            a: "Essential features include real-time inventory management, dynamic pricing engines, secure payment gateways (PCI-DSS compliant), multi-currency support, GDS/NDC integrations, AI-powered search and recommendations, mobile responsiveness, and booking management dashboards. Our solutions deliver these capabilities with enterprise-grade reliability."
        },
        {
            q: "How long does it take to develop a travel booking website?",
            a: "Timeline varies by complexity. Basic projects launch in 8-12 weeks, while comprehensive platforms with GDS integrations and advanced features require 16-24 weeks. We use agile methodology to deliver working MVPs within 30-90 days, allowing early market validation."
        },
        {
            q: "Can you integrate with GDS systems like Amadeus and Sabre?",
            a: "Absolutely. Our travel website development includes direct integration with major GDS providers (Amadeus, Sabre, Travelport) and NDC standards. These integrations provide real-time access to flights, hotels, and car rentals with live availability and pricing."
        },
        {
            q: "How do you handle high traffic during peak booking seasons?",
            a: "We architect cloud-native, auto-scaling infrastructures that handle traffic spikes seamlessly. Our platforms use multi-tier caching, microservices architecture, and elastic scaling to manage 100,000+ concurrent users without performance degradation—critical for peak booking periods."
        },
        {
            q: "Is my travel website secure for processing payments?",
            a: "Yes. Security is fundamental in our approach. We implement PCI-DSS compliance, encrypted transactions, secure payment gateway integrations, fraud detection, and GDPR-compliant data handling. All platforms undergo rigorous security testing before launch."
        },
        {
            q: "Can you build both B2C and B2B travel platforms?",
            a: "Definitely. As a travel website development company, we develop consumer-facing booking sites, B2B agent portals, white-label solutions, and corporate travel management platforms. Our expertise spans all travel business models with appropriate role-based access and pricing structures."
        },
        {
            q: "Do you provide ongoing support and maintenance after launch?",
            a: "Yes. Post-launch support is critical for travel platforms. We offer 24/7 monitoring, performance optimization, security updates, GDS API maintenance, feature enhancements, and technical support to ensure your platform remains competitive and reliable as your business grows."
        }
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
                                        <p className="text-gray-600 leading-relaxed font-body">
                                            {faq.a}
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
