'use client';

import React from 'react';
import { Search, Rocket, Activity, BarChart3 } from 'lucide-react';

export default function Lifecycle() {
    const lifecycle = [
        { num: "01", icon: Search, title: "Assessment", subtitle: "The Imagine Phase", desc: "Deep Dive: We review your existing code, analyze your data structures (ETL), and establish business KPIs. As a shopify website development company, we analyze your SEO to make sure that not a single visitor is lost in the transition." },
        { num: "02", icon: Rocket, title: "Transition", subtitle: "The Deliver Phase", desc: "Build & Migrate: We perform the heavy lifting, which includes frontend development, building middleware, and thoroughly validating your data. Automated testing ensures that every SKU and customer is valid through our shopify ecommerce website development company processes." },
        { num: "03", icon: Activity, title: "Monitoring", subtitle: "The Validation Phase", desc: "Launch & Stabilize: Cutover management with precise DNS updates. We monitor server logs, 404 errors, and payment gateways in real-time to ensure immediate stability." },
        { num: "04", icon: BarChart3, title: "Optimization", subtitle: "The Run Phase", desc: "Growth & Scale: The launch is just day one. We transition to a growth retainer, using analytics to refine the funnel, personalization to increase AOV, and ongoing feature enhancements." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Our Methodology</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Our Shopify Website Development Process: The Delivery Lifecycle
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Center Vertical Line */}
                        <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E92228] via-[#E92228]/50 to-gray-200 rounded-full"></div>

                        {lifecycle.map((item, idx) => (
                            <div key={idx} className={`relative flex gap-8 mb-16 last:mb-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Timeline Node */}
                                <div className="relative z-10 shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#E92228] rounded-full flex items-center justify-center ring-4 ring-white shadow-lg shadow-[#E92228]/30">
                                        <span className="text-white font-bold text-lg">{item.num}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 lg:w-[45%] ${idx % 2 === 1 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                                    <div className="bg-gray-50 p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <item.icon className="w-6 h-6 text-[#E92228]" />
                                            <span className="text-[#E92228] text-xs font-bold uppercase tracking-wider">{item.subtitle}</span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-body">{item.desc}</p>
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
