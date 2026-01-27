'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How is a vCISO different from a full-time CISO?",
        answer: "A vCISO provides the same executive-level strategy and governance but on a fractional basis. You get the expertise of a veteran leader for a specific scope (e.g., compliance, strategy) at ~30% of the cost."
    },
    {
        question: "Can you help us get SOC 2 certified?",
        answer: "Yes. This is a core competency. We act as the architect, implementing the controls, managing the GRC platform (like Drata), and coordinating with the external auditor to reduce the timeline to 2-4 months."
    },
    {
        question: "Do you provide 24/7 monitoring (SOC)?",
        answer: "We provide the strategy and governance over the monitoring. While we do not operate the SOC analysts ourselves (to maintain independence), we oversee your MSSP to ensure they are performing effectively."
    },
    {
        question: "What is the pricing model?",
        answer: "We operate on a flat-rate monthly retainer, ensuring predictable billing. This avoids the \"hourly billing\" trap and incentivizes us to be efficient. Retainers typically range from $3k to $15k/month depending on complexity."
    },
    {
        question: "How quickly can we start?",
        answer: "We can deploy the \"First 100 Days\" framework within 48 hours of contract signing, immediately beginning the Discovery and Gap Analysis phase."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-[#FAFAFA] text-black">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden text-left">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-bold pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-6 h-6 text-[#E92228] shrink-0" />
                                ) : (
                                    <Plus className="w-6 h-6 text-gray-400 shrink-0" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
