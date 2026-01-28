'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is corporate website development?",
            answer: <><span className="font-bold text-gray-900">Corporate website development</span> is the process of designing and engineering a scalable, secure, and performance-driven website that serves as operational infrastructure for an enterprise—not just a marketing presence.</>
        },
        {
            question: "How is a corporate website different from a regular business website?",
            answer: <>A <span className="font-bold text-gray-900">corporate company website</span> supports complex structures such as multiple stakeholders, compliance, integrations, scalability, and governance, whereas regular business websites focus mainly on basic visibility and lead generation.</>
        },
        {
            question: "Why is corporate website development important for enterprises?",
            answer: <>Modern <span className="font-bold text-gray-900">corporate website development</span> enables faster digital operations, stronger security, better user experience, and measurable ROI while reducing legacy technical debt and operational risk.</>
        },
        {
            question: "What are corporate website design services?",
            answer: <><span className="font-bold text-gray-900">Corporate website design services</span> include UX strategy, information architecture, UI systems, accessibility, and performance optimization—designed specifically for enterprise users, decision-makers, and global audiences.</>
        },
        {
            question: "Are corporate websites secure?",
            answer: <>Yes. When built by a professional <span className="font-bold text-gray-900">corporate website development company</span>, corporate websites use modern architectures, compliance-driven security, and hardened infrastructure to reduce vulnerabilities and breach risks.</>
        },
        {
            question: "Can a corporate website scale for global traffic?",
            answer: <>Yes. A modern <span className="font-bold text-gray-900">corporate website</span> is built to scale across regions using cloud-native infrastructure, CDNs, and modular architectures that support millions of users without downtime.</>
        },
        {
            question: "How does corporate website development improve ROI?",
            answer: <>By improving performance, UX, security, and operational efficiency, <span className="font-bold text-gray-900">corporate website development</span> turns the website into a revenue-enabling platform rather than a cost center.</>
        },
        {
            question: "Who needs corporate website designing services?",
            answer: <>Enterprises, multinational companies, Fortune 500 organizations, and fast-growing businesses require <span className="font-bold text-gray-900">corporate website designing services</span> to manage complexity, scale securely, and maintain brand authority.</>
        },
        {
            question: "How long does corporate website development take?",
            answer: <>Timelines vary based on complexity, but enterprise-grade <span className="font-bold text-gray-900">corporate website development</span> typically follows phased delivery—architecture, build, deployment, and optimization—for faster time-to-value.</>
        },
        {
            question: "How do I choose the right corporate website development company?",
            answer: <>Choose a <span className="font-bold text-gray-900">corporate website development company</span> with experience in enterprise architecture, security, scalability, compliance, and measurable business outcomes—not just visual design.</>
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-12">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#E92228] transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between group cursor-pointer"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4 font-heading group-hover:text-[#E92228] transition-colors duration-200">
                                        {faq.question}
                                    </span>
                                    <span className={`text-2xl font-bold transition-all duration-300 group-hover:text-[#E92228] ${openFAQ === idx ? 'text-[#E92228] rotate-45' : 'text-gray-400'}`}>
                                        +
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed font-body">
                                            {faq.answer}
                                        </p>
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
