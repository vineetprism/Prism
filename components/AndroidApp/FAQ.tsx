'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            q: "Why choose Kotlin Multiplatform (KMP) over Flutter?",
            a: "KMP is the enterprise choice for 2025. It allows us to share complex business logic and security protocols across platforms while maintaining 100% native UI performance—crucial for high-fidelity enterprise apps."
        },
        {
            q: "How do you handle integration with our 20-year-old legacy systems?",
            a: "We utilize an \"Anti-Corruption Layer\" pattern. We build an intermediate API Gateway that translates your legacy SOAP/XML data into modern JSON formats, protecting the mobile app from backend complexity."
        },
        {
            q: "How do you ensure security on employee-owned devices (BYOD)?",
            a: "We implement strict App Integrity checks, root detection, and encrypted local storage. We also integrate seamlessly with MDM (Mobile Device Management) solutions to ensure corporate data remains sandboxed."
        },
        {
            q: "What is your post-launch support model?",
            a: "We offer tiered SLAs ranging from standard maintenance to 24/7 critical support. We also handle the \"OS Fragmentation\" issue, ensuring your app remains compatible with new Android versions as they release."
        },
        {
            q: "Can you help us transition from Java to Kotlin?",
            a: "Yes. We specialize in incremental refactoring. We can introduce Kotlin into your existing Java codebase without a complete rewrite, instantly improving null safety and maintainability."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Pain Points Addressed
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-[#E92228] transition-colors">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    aria-expanded={openFAQ === idx}
                                    aria-controls={`faq-answer-${idx}`}
                                    className="w-full flex items-center justify-between p-4 sm:p-6 min-h-[56px] text-left hover:bg-gray-100 transition-colors motion-reduce:transition-none cursor-pointer"
                                >
                                    <span className="text-base sm:text-lg font-bold text-gray-900 font-heading pr-4">{faq.q}</span>
                                    <span className={`shrink-0 w-8 h-8 flex items-center justify-center text-2xl font-light transition-all duration-300 motion-reduce:transition-none ${openFAQ === idx ? 'text-[#E92228] rotate-45' : 'text-gray-400'}`} aria-hidden="true">
                                        +
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div id={`faq-answer-${idx}`} className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
