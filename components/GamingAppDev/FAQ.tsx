'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do you handle Intellectual Property (IP) rights for the game?",
            answer: "Prism Infoways operates on a \"Work for Hire\" basis. Once the project is completed and paid for, you own 100% of the IP, including code, assets, and the Game Design Document.",
        },
        {
            question: "Do you support the game after launch?",
            answer: "Yes. Given that 83% of games fail due to lack of support, we offer comprehensive LiveOps packages. This includes server maintenance, bug fixing, and regular content updates to keep players engaged.",
        },
        {
            question: "What is the typical timeline for an MVP?",
            answer: "While scope varies, a typical MVP for a casual mobile game takes 3-4 months. Complex enterprise simulations or multiplayer RPGs may take 6-12 months. We provide a detailed timeline during the Assessment phase.",
        },
        {
            question: "How do you handle Android device fragmentation?",
            answer: "We utilize automated testing on large-scale device farms to ensure your application performs consistently across thousands of screen sizes, OS versions, and hardware configurations.",
        },
        {
            question: "Can you gamify our existing non-game app?",
            answer: "Absolutely. We can integrate \"Game Mechanics as a Service\" (badges, leaderboards, progress loops) into your existing retail, fintech, or educational app to boost retention and user activity.",
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
