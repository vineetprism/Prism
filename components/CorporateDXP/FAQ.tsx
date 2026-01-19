'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "We have a massive legacy monolith. Do we need to rebuild from scratch?",
            answer: "No. We advocate for the 'Strangler Fig' pattern. We gradually replace specific functionalities with microservices, allowing the new system to grow around the old one until the legacy system can be safely decommissioned without business disruption."
        },
        {
            question: "How do you ensure AI features don't hallucinate or pose a security risk?",
            answer: "We implement strict guardrails using tools like NVIDIA NeMo and RAG (Retrieval-Augmented Generation) architectures. This ensures your AI agents only reference approved corporate data and adhere to strict safety protocols."
        },
        {
            question: "How does UX design translate to a 9,900% ROI?",
            answer: "Research shows that every $1 invested in UX returns $100. By removing friction, optimizing load times (where 100ms delay drops conversion), and personalizing journeys, we directly increase customer acquisition and retention rates."
        },
        {
            question: "What is 'Shift-Left' Security and why does it matter?",
            answer: "Instead of testing for security at the end, we integrate SAST and DAST scanning into the code-writing process. This reduces vulnerability remediation time by 27% and prevents costly post-launch patches."
        },
        {
            question: "How quickly can you deploy a modernized MVP?",
            answer: "By leveraging AI coding agents and component-driven libraries, we can reduce standard development cycles by 30-50%, often delivering a functional MVP in weeks rather than months."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F1F0]">
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
                                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#E92228] transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between group cursor-pointer"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4 font-heading group-hover:text-[#E92228] transition-colors duration-200">
                                        {faq.question}
                                    </span>
                                    <span className={`text-2xl font-bold transition-all duration-300 group-hover:text-[#E92228] ${openFAQ === idx ? 'text-[#E92228] rotate-45' : 'text-gray-400'}`}>
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
