'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        { q: "How do you handle data migration from legacy platforms like Magento?", a: "We use a proprietary ETL (Extract, Transform, Load) process. We don't just \"import\" data; we clean, restructure, and validate it programmatically to match Shopify's document-oriented architecture, ensuring zero data loss." },
        { q: "Will I lose my SEO rankings during replatforming?", a: "Not with our strategy. We conduct a full crawl of your existing site to map every URL. We implement a comprehensive 301 redirect map and transfer all meta-data and schema tags, protecting your organic traffic." },
        { q: "Do I really need Headless Commerce?", a: "Headless is ideal for brands requiring unique, \"app-like\" experiences or sub-second performance. If your needs are simpler, we can build high-performance Liquid themes. We help you choose the right architecture based on your ROI goals." },
        { q: "Can you integrate Shopify with my existing ERP?", a: "Yes. We specialize in building custom middleware layers using Node.js to sync inventory, orders, and customer data between Shopify Plus and ERPs like SAP, NetSuite, and Microsoft Dynamics in real-time." },
        { q: "What happens after the site launches?", a: "We transition to our \"Run Phase.\" We offer support retainers that cover security patches, feature updates, and Conversion Rate Optimization (CRO) to ensure your store continues to grow." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
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
                            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <span className="text-lg font-bold text-gray-900 font-heading pr-4">{faq.q}</span>
                                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition-all ${openFAQ === idx ? 'bg-[#E92228] text-white' : 'bg-gray-100 text-[#E92228]'}`}>
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
