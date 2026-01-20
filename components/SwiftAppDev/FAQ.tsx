'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const items = [
        {
            question: "Why should we build in Native Swift instead of React Native/Flutter?",
            answer: "While cross-platform tools are good for simple apps, Swift offers superior performance (2.6x faster), better access to hardware features (AR/FaceID), and significantly higher long-term stability for enterprise-grade assets.",
        },
        {
            question: "We have an existing Objective-C app. Do we need to rewrite it entirely?",
            answer: "No. We use the \"Strangler Fig\" pattern. Swift is fully interoperable with Objective-C, allowing us to build new features in Swift while slowly refactoring old code over time.",
        },
        {
            question: "How do you handle App Store rejection risks?",
            answer: "We strictly adhere to Apple's Human Interface Guidelines (HIG) and conduct pre-submission audits. Our process ensures a high \"First-Pass Approval\" rate.",
        },
        {
            question: "What does the ongoing maintenance cost look like?",
            answer: "Industry standard suggests allocating 15-20% of the initial budget annually for OS updates and API changes. We offer fixed-fee \"Lifecycle Retainers\" to make this cost predictable.",
        },
        {
            question: "Can you integrate with our legacy SAP/Oracle systems?",
            answer: "Yes. We specialize in building secure middleware and API wrappers that allow modern iOS apps to communicate securely with on-premise or legacy cloud infrastructure.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] text-center mb-12">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-semibold text-[#1F1F1F] pr-4">
                                        {item.question}
                                    </span>

                                    {/* Plus/Minus Icon - Red when open */}
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#E92228]' : 'bg-[#F9F1F0]'
                                        }`}>
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-white" />
                                        ) : (
                                            <Plus className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-[#E92228]'}`} />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 border-t border-gray-100">
                                        <p className="text-gray-600 leading-relaxed pt-4">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
