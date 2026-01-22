'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How does the "Co-Managed" model work? Do I lose control?',
        answer: "Not at all. You maintain full administrative access. We act as an extension of your team, handling the 24/7 monitoring. You decide the \"Rules of Engagement\" for when we escalate vs. when we auto-remediate.",
    },
    {
        question: 'Can you integrate with my existing tools (e.g., Office 365, Fortinet)?',
        answer: "Yes. We believe in an \"Open Ecosystem.\" We ingest logs from your existing investments rather than forcing you to rip-and-replace.",
    },
    {
        question: 'What is the onboarding timeline?',
        answer: "We typically achieve initial visibility within 14 days and full operational \"quiet mode\" (tuned and baselined) within 30 days.",
    },
    {
        question: 'How is your pricing structured?',
        answer: "We offer transparent, tiered pricing based on \"Per User\" or \"Per Node\" counts, eliminating the surprise costs often associated with data-volume pricing.",
    },
    {
        question: 'Do you offer compliance reporting for PCI/HIPAA?',
        answer: "Yes. Our Governance tier includes mapped reporting that translates our daily security activities into audit-ready evidence.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // JSON-LD Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-20 lg:py-28 bg-white">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Common Questions
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                >
                                    <span className="text-lg font-bold text-gray-900 font-heading pr-8">
                                        {faq.question}
                                    </span>
                                    <span className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${openIndex === idx ? 'bg-[#E92228] border-[#E92228] text-white rotate-0' : 'border-gray-300 text-gray-400 hover:border-[#E92228] hover:text-[#E92228]'}`}>
                                        {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed font-body border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm mb-4">
                            Still have questions?
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[#E92228] font-bold hover:underline"
                        >
                            Contact our security experts →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
