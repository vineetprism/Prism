'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        { q: "Why Should I Choose Shopify For My E-Commerce Website?", a: "Shopify offers enterprise-grade reliability with 99.99% uptime, built-in PCI compliance, and scalability to handle traffic spikes without performance issues. Our development approach leverages these advantages while adding custom functionality, advanced integrations, and conversion optimization that standard templates can't deliver." },
        { q: "How Long Does It Take To Develop A Custom Shopify Website?", a: "Timeline depends on complexity and customization level. Basic stores launch in 6-8 weeks, while custom storefronts with advanced features require 12-16 weeks. Enterprise migrations with ERP integration typically take 16-24 weeks. We use agile sprints to deliver working features progressively." },
        { q: "What's The Difference Between Shopify And Shopify Plus?", a: <>Shopify Plus is the enterprise solution offering unlimited staff accounts, advanced automation workflows, wholesale channels, API call rate increases, and dedicated support. It&apos;s designed for brands processing $1M+ annually. As a <span className="font-bold text-gray-900">shopify website development company</span>, we recommend the right platform for your growth stage and business requirements.</> },
        { q: "Can You Migrate My Existing E-Commerce Store To Shopify?", a: "A: Yes. We execute zero-data-loss migrations from platforms like Magento, WooCommerce, BigCommerce, and custom solutions. Our migration process preserves SEO rankings through proper 301 redirects, maintains customer data integrity, and ensures order history continuity without business disruption." },
        { q: "Can Shopify Handle High Traffic And Large Product Catalogs?", a: "Absolutely. We've built stores handling 50,000+ products and processing millions in daily transactions. Shopify's cloud infrastructure auto-scales during traffic spikes, and our optimization ensures sub-second load times even with complex catalogs and high concurrent user volumes." },
        { q: "What Integrations Are Possible With Shopify?", a: <>Shopify integrates with virtually any business system. Our <span className="font-bold text-gray-900">shopify website development services</span> commonly connect ERP systems (SAP, NetSuite), accounting software (QuickBooks, Xero), marketing platforms (Klaviyo, HubSpot), and logistics providers through custom middleware and APIs.</> },
        { q: "Do You Provide Ongoing Support After Launching My Shopify Store?", a: "Yes. Post-launch support is critical for e-commerce success. We offer continuous optimization including conversion rate analysis, A/B testing, performance monitoring, security updates, feature enhancements, and strategic consultation to ensure your store evolves with market demands and drives sustained revenue growth." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Frequently Asked Questions About Shopify Website Development
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <span className="text-lg font-bold text-gray-900 font-heading pr-4">{faq.q}</span>
                                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition-all ${openFAQ === idx ? 'bg-[#E92228] text-white' : 'bg-gray-100 text-[#E92228]'}`}>
                                        {openFAQ === idx ? '−' : '+'}
                                    </span>
                                </button>
                                {openFAQ === idx && (
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-gray-600 leading-relaxed font-body">{faq.a}</p>
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
