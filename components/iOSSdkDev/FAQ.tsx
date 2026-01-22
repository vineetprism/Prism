'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faks = [
    {
        question: "My previous app was rejected by the App Store. Can you fix it?",
        answer: "Yes. We offer a \"Compliance Rescue\" service. We audit your code against Apple's latest guidelines (including Privacy Manifests) to identify the rejection trigger and fix it for resubmission."
    },
    {
        question: "Should we build in SwiftUI or UIKit?",
        answer: "We recommend SwiftUI for most new \"greenfield\" projects for its speed and code efficiency. However, for complex legacy apps requiring granular control, we maintain deep expertise in UIKit."
    },
    {
        question: "How do you handle data security for enterprise apps?",
        answer: "We employ a \"Security-First\" architecture. This includes SSL Pinning for network requests, Keychain Services for credential storage, and code obfuscation to prevent reverse engineering."
    },
    {
        question: "Do you support legacy Objective-C apps?",
        answer: "Absolutely. We are one of the few firms with a dedicated \"Legacy Modernization\" team that can maintain your existing Objective-C app while incrementally migrating it to Swift."
    },
    {
        question: "What happens after the app launches?",
        answer: "Launch is just the beginning. We offer Lifecycle Management packages to handle iOS updates, bug fixes, and feature additions, ensuring your investment doesn't degrade over time."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 lg:py-28 bg-[#f9f9f9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Addressing Your Concerns
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faks.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-bold text-gray-900 font-heading pr-8">
                                        {faq.question}
                                    </span>
                                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${openIndex === idx ? 'bg-[#E92228] border-[#E92228] text-white' : 'border-gray-300 text-gray-400'}`}>
                                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="p-6 pt-0 text-gray-600 leading-relaxed font-body border-t border-gray-100">
                                            {faq.answer}
                                        </p>
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
