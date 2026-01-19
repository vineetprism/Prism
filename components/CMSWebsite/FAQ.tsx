'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        { q: "What is a Headless CMS and why should I consider it?", a: "A Headless CMS separates content management from content presentation. This allows you to deliver content to any platform—web, mobile apps, IoT devices—through APIs. It offers greater flexibility, scalability, and future-proofs your digital infrastructure." },
        { q: "How long does a typical CMS migration take?", a: "Migration timelines vary based on complexity. A standard WordPress to Headless migration typically takes 3-6 months. Enterprise migrations from Sitecore or AEM can take 6-12 months with parallel content validation and phased rollouts." },
        { q: "What CMS platforms do you specialize in?", a: "We are platform-agnostic but have deep expertise in Sitecore, Adobe AEM, Contentful, Sanity, Strapi, and Drupal. We recommend platforms based on your specific business requirements, scale, and team capabilities." },
        { q: "How do you ensure content governance and compliance?", a: "We implement role-based access controls (RBAC), content approval workflows, audit logging, and automated compliance checks for GDPR, CCPA, and accessibility standards (WCAG 2.1)." },
        { q: "Can you integrate AI into our content operations?", a: "Yes. We integrate Large Language Models (LLMs) for automated content tagging, translation, summarization, and personalization. Our AI implementations follow responsible AI principles with human oversight." }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
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
