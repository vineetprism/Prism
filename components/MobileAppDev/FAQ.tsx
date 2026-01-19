'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How do you handle legacy system integration?',
        answer: 'We utilize microservices to create a modern API layer that "wraps" your legacy backend, allowing modern mobile apps to communicate with older systems without requiring a full rewrite. This "Strangler Pattern" approach ensures zero downtime during migration.'
    },
    {
        question: 'Native vs. Cross-Platform: Which is right for us?',
        answer: 'If you need hardware access (AR/Biometrics) and maximum performance, we recommend Native (Swift/Kotlin). If speed-to-market and budget are priorities, Flutter provides a near-native experience at 40% less development cost.'
    },
    {
        question: 'How do you ensure app security?',
        answer: 'We follow a DevSecOps approach. Security is automated into the CI/CD pipeline, including RASP (Runtime Application Self-Protection), code obfuscation to prevent reverse engineering, and hardware-backed biometric authentication.'
    },
    {
        question: 'What happens after launch?',
        answer: 'We shift to a "Product Mindset." We monitor real-time analytics to detect drop-off points, conduct A/B tests on new features, and release iterative updates every 2-4 weeks to continuously improve conversion and retention metrics.'
    },
    {
        question: 'Can you work with our existing design team?',
        answer: 'Absolutely. We use Figma for real-time collaboration, allowing your stakeholders, internal designers, and our engineers to work in the same environment transparently. We can also provide our own UX team if needed.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-1/4 h-full bg-[#F9F1F0] hidden lg:block"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left - Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#E92228]"></div>
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-[0.2em]">
                                FAQ
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-6">
                            Common Questions
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-body">
                            Everything you need to know about our mobile development process, technology choices, and partnership model.
                        </p>
                    </div>

                    {/* Right - Accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-[#E92228] bg-white shadow-lg' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                        aria-expanded={openIndex === idx}
                                    >
                                        <span className={`text-lg font-bold pr-4 transition-colors ${openIndex === idx ? 'text-[#E92228]' : 'text-gray-900'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-[#E92228]' : 'bg-gray-200'
                                            }`}>
                                            {openIndex === idx ? (
                                                <Minus className="w-5 h-5 text-white" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-gray-600" />
                                            )}
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'
                                        }`}>
                                        <div className="px-6 pb-6">
                                            <div className="h-px bg-gray-100 mb-4"></div>
                                            <p className="text-gray-600 leading-relaxed font-body">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
