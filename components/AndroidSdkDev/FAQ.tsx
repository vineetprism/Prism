'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Why choose Kotlin Multiplatform (KMP) over Flutter or React Native?',
        answer: "KMP allows us to share business logic while using 100% native UI (Jetpack Compose). This ensures the app feels native and performant, unlike Flutter/React Native which can struggle with non-standard platform behaviors, while still reducing logic code by ~60%."
    },
    {
        question: 'How do you handle Android Device Fragmentation (Samsung, Xiaomi, etc.)?',
        answer: "We utilize cloud-based device farms to test against the top 100 most common device models. We specifically code defensibly against aggressive battery management (\"process killing\") used by manufacturers like Xiaomi and OnePlus."
    },
    {
        question: 'How do you secure your SDKs against reverse engineering?',
        answer: 'We employ rigorous code obfuscation using R8/ProGuard and implement encrypted data storage (Jetpack Security). For regulated industries, we provide full SBOMs and Privacy Manifests to ensure compliance.'
    },
    {
        question: 'What is your approach to SDK Versioning?',
        answer: "We strictly adhere to Semantic Versioning (Major.Minor.Patch). We use automated CI/CD tools to enforce this, ensuring that a \"Minor\" update never breaks your client's integration."
    },
    {
        question: 'Do you provide documentation for the SDKs you build?',
        answer: "Yes. We use \"Docs as Code\" (Dokka) to generate up-to-date HTML documentation directly from the source code, ensuring your integrators always have accurate API references."
    }
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
        <section className="py-20 lg:py-28 bg-[#f9f9f9]">
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
                            Addressing Your Concerns
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
                                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${openIndex === idx ? 'bg-[#E92228] border-[#E92228] text-white' : 'border-gray-300 text-gray-400'}`}>
                                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed font-body border-t border-gray-100">
                                            {faq.answer}
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
