'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Can React Native truly match the performance of Swift or Kotlin?",
            answer: "Yes. With the New Architecture (JSI and Fabric), the legacy \"bridge\" is removed, allowing synchronous communication with native APIs. For heavy computation, we use C++ TurboModules to match native speeds.",
        },
        {
            question: "How do you handle complex hardware integrations like Bluetooth or Biometrics?",
            answer: "We don't rely solely on web developers. Our \"Agile Pods\" include engineers proficient in native iOS and Android code who build custom bridges and TurboModules for any hardware requirement.",
        },
        {
            question: "Is React Native secure enough for FinTech or Healthcare apps?",
            answer: "Absolutely. We implement strict security protocols including SSL Pinning, binary obfuscation (Jscrambler), and secure storage (Keychain/Keystore) to meet rigorous compliance standards.",
        },
        {
            question: "What happens if a third-party library we need is abandoned?",
            answer: "We employ a \"Golden Path\" strategy, vetting libraries for corporate backing. If a library fails, our team has the native expertise to fork, patch, or rewrite the module internally.",
        },
        {
            question: "How does your delivery process differ from a freelancer?",
            answer: "We use the \"Agile Pod\" model similar to top-tier consultancies like Deloitte. You get a dedicated team (Owner, Scrum Master, QA, Devs) working in 2-week sprints with full architectural oversight.",
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
                                            <Plus className="w-5 h-5 text-[#E92228]" />
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
