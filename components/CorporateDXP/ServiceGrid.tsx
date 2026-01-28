'use client';

import React from 'react';

export default function ServiceGrid() {
    const services = [
        {
            title: "Legacy Modernization & Re-Platforming",
            description: "Unshackle your enterprise from monolithic debt. We use the \"Strangler Fig\" pattern to safely migrate legacy logic to scalable microservices without downtime."
        },
        {
            title: "AI-Native Development",
            description: "Integrate GenAI directly into your UX. From RAG-powered search to autonomous service agents, we build the \"Action Web\" of tomorrow."
        },
        {
            title: "Cloud-Native Infrastructure",
            description: "Built for resilience on AWS/Azure. We utilize Kubernetes and Terraform to ensure your platform scales instantly during traffic spikes."
        },
        {
            title: "Experience Design (UX/UI)",
            description: "Data-driven design that converts. We map customer journeys to engineering value streams, ensuring every pixel drives revenue."
        },
        {
            title: "DevSecOps & Compliance",
            description: "Security shifts left. Automated SAST/DAST pipelines and AI-driven guardrails ensure GDPR/CCPA compliance by design."
        },
        {
            title: "Performance Engineering",
            description: "Speed is a feature. We optimize Core Web Vitals to millisecond precision, ensuring 100% SEO visibility and user retention."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-12">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Enterprise-Grade Corporate Website Capabilities
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E92228]/30 group relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 font-heading pr-4 leading-tight group-hover:text-[#E92228] transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Large Red Number on Right */}
                                    <span className="text-5xl font-bold text-[#E92228] font-heading leading-none opacity-90 shrink-0">
                                        0{idx + 1}
                                    </span>
                                </div>

                                <p className="text-gray-600 leading-relaxed font-body text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
