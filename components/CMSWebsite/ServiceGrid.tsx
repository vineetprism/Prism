'use client';

import React from 'react';
import {
    Compass,
    Network,
    ArrowRightLeft,
    Sparkles,
    ShieldCheck,
    Activity
} from 'lucide-react';

export default function ServiceGrid() {
    const services = [
        { icon: Compass, title: "Content Strategy & Architecture", desc: "Information architecture audits, content modeling, and taxonomy design that ensures editorial efficiency at scale." },
        { icon: Network, title: "Headless & Composable CMS", desc: "API-first platforms (Contentful, Strapi, Sanity) that decouple content from presentation for omnichannel delivery." },
        { icon: ArrowRightLeft, title: "Legacy Platform Migration", desc: "Zero-downtime migrations from WordPress, Drupal, or Sitecore to modern, cloud-native architectures." },
        { icon: Sparkles, title: "AI-Powered Content Ops", desc: "Integrate generative AI for automated tagging, translation, summarization, and personalization workflows." },
        { icon: ShieldCheck, title: "Governance & Compliance", desc: "GDPR/CCPA-ready workflows, audit trails, role-based access controls, and content versioning." },
        { icon: Activity, title: "Performance & Analytics", desc: "Real-time dashboards, A/B testing integrations, and Core Web Vitals optimization for SEO dominance." }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Our Capabilities</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Enterprise CMS Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#E92228] transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-[#E92228] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-body">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
