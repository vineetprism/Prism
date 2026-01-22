'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { question: 'What is the difference between a Vulnerability Assessment and a Penetration Test?', answer: 'A Vulnerability Assessment is an automated scan to list known flaws (breadth). A Penetration Test is a manual, human-led attempt to exploit those flaws to break into the system (depth). Prism Infoways provides both.' },
    { question: 'Will the assessment disrupt my daily business operations?', answer: 'No. We schedule intrusive tests during off-peak hours and use "Safety Mechanisms" in our tools to prevent service degradation.' },
    { question: 'Do you cover "Shadow AI" and employee use of ChatGPT?', answer: 'Yes. Our new AI Risk Module specifically identifies unsanctioned AI usage and tests for data leakage through prompt injection.' },
    { question: 'How long does a typical engagement take?', answer: 'Timelines vary by scope, but a standard web application pentest typically takes 1-2 weeks, while a full Red Team engagement may last 3-4 weeks.' },
    { question: 'What do I get at the end?', answer: 'You receive two reports: An Executive Summary (ROI, Business Risk, Strategy) and a Technical Remediation Guide (POCs, Code Snippets, Fix instructions).' },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-mono">FAQs</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${openIndex === idx ? 'border-[#E92228]/30 shadow-lg' : 'border-gray-100'}`}>
                                <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left cursor-pointer">
                                    <h3 className={`text-lg font-bold pr-4 transition-colors duration-300 ${openIndex === idx ? 'text-[#E92228]' : 'text-gray-900'}`}>{faq.question}</h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-[#E92228] rotate-180' : 'bg-gray-100'}`}>
                                        <ChevronDown className={`w-5 h-5 ${openIndex === idx ? 'text-white' : 'text-gray-600'}`} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="px-6 pb-6">
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed font-body">{faq.answer}</p>
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
