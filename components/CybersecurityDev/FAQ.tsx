'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'How does the "Co-Managed" model work? Do I lose control?',
        answer: 'Not at all. You maintain full administrative access. We act as an extension of your team, handling the 24/7 monitoring. You decide the "Rules of Engagement" for when we escalate vs. when we auto-remediate.',
    },
    {
        question: 'Can you integrate with my existing tools (e.g., Office 365, Fortinet)?',
        answer: 'Yes. We believe in an "Open Ecosystem." We ingest logs from your existing investments rather than forcing you to rip-and-replace.',
    },
    {
        question: 'What is the onboarding timeline?',
        answer: 'We typically achieve initial visibility within 14 days and full operational "quiet mode" (tuned and baselined) within 30 days.',
    },
    {
        question: 'How is your pricing structured?',
        answer: 'We offer transparent, tiered pricing based on "Per User" or "Per Node" counts, eliminating the surprise costs often associated with data-volume pricing.',
    },
    {
        question: 'Do you offer compliance reporting for PCI/HIPAA?',
        answer: 'Yes. Our Governance tier includes mapped reporting that translates our daily security activities into audit-ready evidence.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            FAQs
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                            Common Questions
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                            Everything you need to know about our managed security services.
                        </p>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                                    openIndex === idx 
                                        ? 'border-[#E92228]/30 shadow-lg' 
                                        : 'border-gray-100 hover:border-gray-200'
                                }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                >
                                    <h3 className={`text-lg font-bold pr-4 transition-colors duration-300 ${
                                        openIndex === idx ? 'text-[#E92228]' : 'text-gray-900'
                                    }`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        openIndex === idx 
                                            ? 'bg-[#E92228] rotate-180' 
                                            : 'bg-gray-100'
                                    }`}>
                                        <ChevronDown className={`w-5 h-5 transition-colors ${
                                            openIndex === idx ? 'text-white' : 'text-gray-600'
                                        }`} />
                                    </div>
                                </button>

                                {/* Answer */}
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === idx ? 'max-h-96' : 'max-h-0'
                                }`}>
                                    <div className="px-6 pb-6">
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed font-body">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
