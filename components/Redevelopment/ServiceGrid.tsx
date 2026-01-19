'use client';

import React from 'react';
import {
    Unplug,
    FileText,
    Cloud,
    Bot,
    GitBranch,
    ShieldCheck
} from 'lucide-react';

export default function ServiceGrid() {
    const services = [
        { icon: Unplug, title: "Digital Decoupling & API First", desc: "We break down monolithic barriers using \"Backend-for-Frontend\" (BFF) patterns, exposing your data via GraphQL and RESTful APIs for seamless integration." },
        { icon: FileText, title: "Headless CMS Architecture", desc: "Separate your content from your code. Omnichannel delivery to web, mobile, and IoT using Strapi, Contentful, or Sanity." },
        { icon: Cloud, title: "Cloud-Native Infrastructure", desc: "Move from fixed servers to elastic scalability. Containerized deployments (Docker/K8s) that scale to zero when idle, reducing Cloud TCO." },
        { icon: Bot, title: "AI Agent Integration", desc: "Agentic Readiness. We architect your \"Digital Core\" to support autonomous Python-based AI agents for customer service and data analysis." },
        { icon: GitBranch, title: "Legacy Migration (Strangler Fig)", desc: "Risk-free migration. We build the new system around the edges of the old one, gradually replacing functionality until the legacy system is retired." },
        { icon: ShieldCheck, title: "DevSecOps & Compliance", desc: "Security baked in, not bolted on. Automated CI/CD pipelines with SAST/DAST scanning to ensure GDPR/CCPA compliance." }
    ];

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Modernization Capabilities</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Full-Stack Transformation
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="relative bg-gradient-to-br from-white to-red-50/30 rounded-2xl p-8 border-2 border-[#E92228] shadow-xl overflow-hidden">
                                {/* Gradient overlay - always visible */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#E92228]/0 to-[#E92228]/5"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-[#E92228] flex items-center justify-center mb-6 shadow-lg shadow-[#E92228]/30">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#E92228] font-heading mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-body">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
