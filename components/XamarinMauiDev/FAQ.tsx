'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Is Xamarin officially dead?",
            answer: "Yes. As of May 1, 2024, Microsoft no longer supports Xamarin. No new security patches or SDK updates are being released, making migration mandatory for store compliance.",
        },
        {
            question: "Can we just \"copy-paste\" our Xamarin code to MAUI?",
            answer: "Not exactly. While the C# logic remains largely compatible, the UI layer (Renderers) and Project Structure require technical re-engineering to function in the new Handler-based system.",
        },
        {
            question: "How long does a typical migration take?",
            answer: "It varies by complexity. A standard business app typically takes 4-8 weeks. We provide a precise timeline after our initial Audit Phase.",
        },
        {
            question: "Do you support Blazor Hybrid?",
            answer: "Absolutely. We can embed your existing web components directly into the native mobile shell, saving you months of UI redevelopment time.",
        },
        {
            question: "What happens if we don't migrate?",
            answer: "Your app will eventually be rejected by Apple and Google when they update their minimum requirements (e.g., Android 15), rendering you unable to release updates or bug fixes.",
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
                                    className="cursor-pointer w-full flex items-center justify-between p-6 text-left"
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
