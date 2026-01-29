'use client';

import React from 'react';
import {
    ArrowRightLeft,
    Layers,
    Settings,
    Users,
    Palette,
    TrendingUp
} from 'lucide-react';

export default function ServiceGrid() {
    const services = [
        { num: "01", icon: ArrowRightLeft, title: "Enterprise Migration & Replatforming", desc: "Achieve “Zero-Data-Loss” migrations from Magento, Oracle, or Salesforce. Our Shopify website development services address intricate data mapping, SEO optimization, and 301 redirect plans to safeguard your search engine rankings." },
        { num: "02", icon: Layers, title: "Headless Commerce (Hydrogen & Oxygen)", desc: "Unlock sub-second load times by separating your frontend. We develop React-based storefronts using Shopify Hydrogen, hosted at the edge for optimal performance through cutting-edge Shopify ecommerce website development." },
        { num: "03", icon: Settings, title: "Custom Middleware & ERP Integration", desc: "Integrate your entire ecosystem. We develop custom Node.js/Go middleware to integrate Shopify seamlessly with SAP, NetSuite, and Microsoft Dynamics for real-time inventory and order processing." },
        { num: "04", icon: Users, title: "B2B & Wholesale Solutions", desc: "Optimize your B2B business. Our Shopify website development company sets up custom pricing levels, bulk ordering, and company profiles, leveraging Shopify Plus’s native B2B functionality and custom workflows." },
        { num: "05", icon: Palette, title: "High-Performance UX/UI Design", desc: "Design for conversion. Our mobile-first design strategy emphasizes Shop Pay optimization and checkout extensibility to minimize cart abandonment and boost AOV." },
        { num: "06", icon: TrendingUp, title: "Conversion Rate Optimization (CRO)", desc: "Data-driven growth. After launch, we apply A/B testing and behavioral analysis to continually optimize the user experience and maximize revenue per user session." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Enterprise Capabilities</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Full-Spectrum Commerce Shopify Website Development Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="group relative bg-white rounded-2xl p-8 border-t-4 border-[#E92228] border-x border-b border-x-gray-200 border-b-gray-200 shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                {/* Number */}
                                <div className="absolute top-4 right-4 text-6xl font-bold text-[#E92228]/20 font-heading">{service.num}</div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-[#E92228] flex items-center justify-center mb-6 shadow-lg shadow-[#E92228]/20">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#E92228] font-heading mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-body text-sm">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
