'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is website redevelopment and how does it differ from redesign?",
            a: <>
                <span className="font-bold text-gray-900">Website redevelopment</span> is a complete architectural transformation of your digital platform, not just a visual refresh. While redesign updates appearance, our infrastructure addresses core technical issues—modernizing your tech stack, eliminating technical debt, improving performance, and building scalable foundations. It&apos;s engineering transformation, not cosmetic change.
            </>
        },
        {
            q: "Will my website go offline during redevelopment?",
            a: <>
                No. Our <span className="font-bold text-gray-900">website redevelopment services</span> ensure zero downtime. We use parallel development and gradual migration strategies where the new system is built alongside your existing platform, with carefully orchestrated cutover that maintains continuous operations throughout the transformation.
            </>
        },
        {
            q: "How much does website redevelopment cost?",
            a: <>
                Investment varies based on platform complexity, integrations, and migration scope. Enterprise typically ranges from $30,000 to $200,000+. However, clients often see <span className="font-bold text-gray-900">30% reduction</span> in hosting costs and <span className="font-bold text-gray-900">50% faster</span> deployment cycles that deliver ROI within 12-18 months.
            </>
        },
        {
            q: "What are the signs my website needs redevelopment, not just redesign?",
            a: <>
                Key indicators include: slow page load times (3+ seconds), frequent crashes during traffic spikes, security vulnerabilities, high maintenance costs, inability to integrate new tools, poor mobile performance, or technology that&apos;s 5+ years old. If these sound familiar, it&apos;s time to <span className="font-bold text-gray-900">redevelop website</span> infrastructure strategically.
            </>
        },
        {
            q: "Can you redevelop my website while preserving SEO rankings?",
            a: <>
                Absolutely. <span className="font-bold text-gray-900">SEO preservation</span> is critical in our methodology. We implement proper <span className="font-bold text-gray-900">301 redirects</span>, maintain URL structures where beneficial, preserve metadata, and ensure improved <span className="font-bold text-gray-900">Core Web Vitals</span>—often resulting in better rankings post-launch due to enhanced performance.
            </>
        },
        {
            q: "What technologies do you use for website redevelopment?",
            a: <>
                We select technologies based on your specific needs. Common stacks include <span className="font-bold text-gray-900">React/Next.js</span> for frontend, <span className="font-bold text-gray-900">Node.js</span> or <span className="font-bold text-gray-900">Laravel</span> for backend, <span className="font-bold text-gray-900">headless CMS platforms</span> (<span className="font-bold text-gray-900">Contentful</span>, <span className="font-bold text-gray-900">Strapi</span>), and <span className="font-bold text-gray-900">cloud infrastructure</span> (<span className="font-bold text-gray-900">AWS</span>, <span className="font-bold text-gray-900">Azure</span>). Our company recommends the optimal stack for your scalability and business objectives.
            </>
        },
        {
            q: "Do you provide support after website redevelopment is complete?",
            a: <>
                Yes. Post-launch support is essential. Our <span className="font-bold text-gray-900">redevelopment services</span> include <span className="font-bold text-gray-900">continuous monitoring</span>, <span className="font-bold text-gray-900">performance optimization</span>, <span className="font-bold text-gray-900">security patches</span>, <span className="font-bold text-gray-900">feature enhancements</span>, and <span className="font-bold text-gray-900">strategic guidance</span>. We implement observability tools (Datadog, New Relic) for proactive issue detection and resolution.
            </>
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    <span className="text-lg font-bold text-gray-900 font-heading pr-4">{faq.q}</span>
                                    <span className={`shrink-0 text-2xl font-light transition-colors ${openFAQ === idx ? 'text-[#E92228]' : 'text-gray-400'}`}>
                                        {openFAQ === idx ? '−' : '+'}
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-gray-600 leading-relaxed font-body">
                                            {faq.a}
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
