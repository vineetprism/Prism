'use client';

import React, { useState } from 'react';

const faqs = [
    {
        q: "Why choose Native iOS over Cross-Platform (Flutter/React Native)?",
        a: "While cross-platform tools save initial dev time, they often incur higher long-term costs due to dependency issues and UX degradation. Native iOS development yields higher performance, better battery life, and superior access to hardware features like ARKit and the Neural Engine, which are critical for enterprise longevity."
    },
    {
        q: "How do you handle our existing legacy Objective-C code?",
        a: "We do not demand a full rewrite. We use the \"Strangler Pattern\" to write new features in Swift while maintaining interoperability with your Objective-C core, gradually refactoring the old code over time to manage budget and risk."
    },
    {
        q: "What security measures are included in the development process?",
        a: "We adhere to a \"Secure by Design\" philosophy. This includes SSL Pinning to prevent Man-in-the-Middle attacks, Keychain storage for tokens (never UserDefaults), and code obfuscation to prevent reverse engineering."
    },
    {
        q: "Do you provide support after the app is on the App Store?",
        a: "Yes. The iOS ecosystem changes annually. We offer maintenance SLAs that cover OS compatibility updates, library patches, and performance monitoring to ensure your app remains compatible with the latest iPhone hardware."
    },
    {
        q: "Who owns the code?",
        a: "You do. Prism Infoways operates on a \"Work for Hire\" basis. Upon final payment, 100% of the intellectual property, source code, and design assets are transferred to your organization."
    }
];

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Common Questions
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
                                    aria-controls={`faq-ios-answer-${idx}`}
                                    className="w-full flex items-center justify-between p-4 sm:p-6 min-h-[56px] text-left hover:bg-gray-100 transition-colors motion-reduce:transition-none cursor-pointer"
                                >
                                    <span className="text-base sm:text-lg font-bold text-gray-900 font-heading pr-4">{faq.q}</span>
                                    <span className={`shrink-0 w-8 h-8 flex items-center justify-center text-2xl font-light transition-all duration-300 motion-reduce:transition-none ${openFAQ === idx ? 'text-[#E92228] rotate-45' : 'text-gray-400'}`} aria-hidden="true">
                                        +
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div id={`faq-ios-answer-${idx}`} className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
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
