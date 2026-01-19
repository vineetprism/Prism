'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "How do you prevent project budget blowouts?",
            answer: "We mandate a paid \"Discovery Workshop\" phase. This allows us to define the scope with extreme precision, virtually eliminating the \"unknowns\" that cause budget inflation."
        },
        {
            question: "Do you work with Legacy Code?",
            answer: "Yes. We specialize in \"Legacy Rescue.\" We can encapsulate your old code in modern APIs or incrementally refactor it to a modern stack like React/Node."
        },
        {
            question: "How is this different from a WordPress template?",
            answer: "Templates are static and vulnerable. We build dynamic applications. Our solutions are custom-engineered for specific business logic, high security, and massive scale—things a template cannot do."
        },
        {
            question: "What is your post-launch support?",
            answer: "We offer Experience Level Agreements (XLAs). We don't just keep the server on; we monitor performance, security, and user satisfaction to ensure the site continues to deliver ROI."
        },
        {
            question: "Who owns the code?",
            answer: "You do. Unlike some agencies that hold IP hostage, we provide full code ownership and documentation upon delivery."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Common Questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'ring-2 ring-[#E92228]' : 'hover:shadow-md'}`}
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4 font-heading">
                                        {faq.question}
                                    </span>
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQ === idx ? 'bg-[#E92228] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'max-h-48' : 'max-h-0'}`}>
                                    <div className="px-6 pb-5">
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
        </section>
    );
}
