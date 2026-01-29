'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            q: "What Is The Difference Between Native Android And Cross-Platform Development?",
            a: <>Native Android development uses Kotlin/Java to build apps specifically for Android devices, offering superior performance, full access to device features, and the best user experience. Cross-platform frameworks share code across iOS and Android but may compromise on performance. We specialize in <span className="font-bold">android application development</span> using modern Kotlin and can also implement Kotlin Multiplatform to share business logic while maintaining native UI excellence.</>
        },
        {
            q: "How Long Does It Take To Develop An Android Application?",
            a: <>Timeline depends on complexity and features. Simple apps launch in 8-12 weeks, mid-complexity applications require 12-20 weeks, while enterprise solutions with legacy integrations take 20-32 weeks. Our <span className="font-bold">android application development services</span> use agile sprints to deliver working features every two weeks for early feedback and validation.</>
        },
        {
            q: "Can You Integrate My Android App With Existing Enterprise Systems?",
            a: <>Absolutely. We specialize in connecting mobile applications with legacy ERP systems, CRM platforms, databases, and mainframes. Our <span className="font-bold">android mobile application development</span> approach uses modern API gateways and Backend-for-Frontend patterns to bridge new mobile experiences with existing infrastructure securely and efficiently.</>
        },
        {
            q: "Is My Data Secure In An Android Application?",
            a: <>Yes. Security is fundamental in our development approach. We implement OWASP Mobile Top 10 compliance, encrypted local storage, secure API communications, biometric authentication, and automated vulnerability scanning. Every application undergoes rigorous security testing before deployment to protect sensitive business and customer data.</>
        },
        {
            q: "Do You Support Both Smartphones And Tablets?",
            a: <>Definitely. Our <span className="font-bold">android application development company in India</span> builds responsive applications that adapt seamlessly across smartphones, tablets, foldables, and even ruggedized enterprise devices. We use modern declarative UI frameworks like Jetpack Compose to create interfaces that scale beautifully across all screen sizes and form factors.</>
        },
        {
            q: "Can You Modernize Our Existing Android App?",
            a: <>Yes. We execute strategic modernization projects that update outdated codebases to modern Kotlin, implement current architecture patterns, improve performance, enhance security, and add new features—all while maintaining business continuity. Our approach reduces technical debt and positions your app for future growth.</>
        },
        {
            q: "What Ongoing Support Do You Provide After App Launch?",
            a: <>Post-launch support is critical for enterprise applications. We offer comprehensive maintenance including OS compatibility updates, security patches, performance monitoring, bug fixes, feature enhancements, and strategic consultation. Our proactive approach ensures your application remains secure, performant, and aligned with evolving business needs.</>
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
                            Frequently Asked Questions About Android Application Development
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`bg-white rounded-lg border transition-all duration-300 ${openFAQ === idx ? 'border-gray-200 shadow-lg' : 'border-gray-200'}`}>
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    aria-expanded={openFAQ === idx}
                                    aria-controls={`faq-answer-${idx}`}
                                    className="w-full flex items-start justify-between p-5 text-left cursor-pointer"
                                >
                                    <span className="text-base sm:text-lg font-bold text-gray-900 font-heading pr-8 leading-snug">{faq.q}</span>
                                    <span className={`shrink-0 w-6 h-6 flex items-center justify-center text-2xl leading-none transition-transform duration-300 ${openFAQ === idx ? 'text-[#E92228] rotate-0' : 'text-gray-300'}`} aria-hidden="true">
                                        {openFAQ === idx ? '×' : '+'}
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${idx}`}
                                    className={`grid transition-all duration-300 ease-in-out ${openFAQ === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 pb-5 pt-0">
                                            <div className="w-full h-px bg-gray-100 mb-4"></div>
                                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">{faq.a}</p>
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
