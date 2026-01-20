'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Will my app feel \"non-native\" or laggy?",
            answer: "No. Unlike web-based wrappers, Flutter compiles to native ARM machine code. With the new Impeller engine, we eliminate shader jank, ensuring silky smooth 120Hz performance that rivals Swift/Kotlin.",
        },
        {
            question: "Is Flutter secure enough for banking apps?",
            answer: "Absolutely. We implement \"Defense in Depth\"—code obfuscation, SSL Pinning, and Runtime Application Self-Protection (RASP) to meet rigorous security standards.",
        },
        {
            question: "Do we need to rewrite our entire existing app?",
            answer: "No. We use Flutter's \"Add-to-App\" feature to integrate new modules into your existing codebase, allowing for incremental modernization without the risk of a full rewrite.",
        },
        {
            question: "How do you handle large teams working on one codebase?",
            answer: "We utilize Micro-Frontend Architecture. This breaks the app into independent feature packages, allowing multiple squads to work simultaneously without merge conflicts.",
        },
        {
            question: "What happens if Google abandons Flutter?",
            answer: "Flutter is an open-source project used deeply within Google (Google Pay, Google Ads). Even in the unlikely event of support ending, the open-source community and existing stable binaries ensure long-term viability.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] text-center mb-12 font-heading">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Question Header */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-bold text-[#1F1F1F] pr-4 font-heading">
                                        {faq.question}
                                    </span>

                                    {/* Plus/Minus Icon */}
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#E92228]' : 'bg-[#F9F1F0]'
                                        }`}>
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-white" />
                                        ) : (
                                            <Plus className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-[#E92228]'}`} />
                                        )}
                                    </div>
                                </button>

                                {/* Answer Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 border-t border-gray-100">
                                        <div className="text-gray-600 leading-relaxed font-body pt-4">
                                            {faq.answer}
                                        </div>
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
