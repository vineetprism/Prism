'use client';

import React, { useState } from 'react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQItem[] }) {
    const [openId, setOpenId] = useState<number | null>(null);


    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-red-600">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                        Know more about our processes and how we work with the help of the following FAQs.
                    </p>
                </div>

                <div className="space-y-4 sm:space-y-5">
                    {faqs?.map((item) => (
                        <div
                            key={item.id}
                            className="border-2 border-red-50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-red-300"
                        >
                            <button
                                onClick={() => toggleAccordion(item?.id)}
                                className="w-full px-6 sm:px-8 py-4 flex items-center justify-between bg-white hover:bg-red-50 
                                transition-colors duration-300 text-left cursor-pointer"
                                aria-label="toggle accordion"
                            >
                                <span className="text-base sm:text-lg font-semibold text-red-600 pr-4">
                                    {item?.question}
                                </span>
                                {openId === item?.id ? (
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-red-600 transition-transform duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 13H5v-2h14v2z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-red-600 transition-transform duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                    </svg>
                                )}
                            </button>

                            {openId === item?.id && (
                                <div className="px-6 sm:px-8 py-4 bg-red-50 border-t-2 border-red-200"
                                    aria-label="accordion content"
                                >
                                    <p className="text-gray-700 text-base leading-relaxed text-justify">
                                        {item?.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}