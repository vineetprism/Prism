'use client';

import React from 'react';
import { Cloud, Zap, Network, Brain, Plane, ShieldCheck } from 'lucide-react';

export default function ServiceGrid() {
    const services = [
        {
            icon: Cloud,
            title: "Cloud-Native Microservices",
            desc: <>Decouple your logic. Our <span className="font-bold text-white">travel website development</span> services migrate rigid monoliths to scalable AWS/GCP microservices, utilizing the Strangler Fig Pattern to ensure zero downtime during transition.</>
        },
        {
            icon: Zap,
            title: "High-Performance Search Engineering",
            desc: <>Stop the &quot;Thundering Herd.&quot; We implement multi-tier caching (Redis/ElastiCache) to achieve p99.9 latency under 25ms, ensuring instant availability checks across your platform.</>
        },
        {
            icon: Network,
            title: "Federated GraphQL Orchestration",
            desc: <>Unified Data Graphs. We aggregate disparate APIs (Flights, Hotels, Cars) into a single endpoint, reducing network payloads and mobile battery drain for superior user experience.</>
        },
        {
            icon: Brain,
            title: "AI & Data Lakehouse Architecture",
            desc: <>From Chatbots to Agentic AI. Centralize your data in Snowflake to power hyper-personalized itineraries and generative AI search agents through intelligent <span className="font-bold text-white">travel agency website development</span>.</>
        },
        {
            icon: Plane,
            title: "Smart GDS & NDC Integration",
            desc: <>Bypass legacy limitations. Direct integration with Amadeus, Sabre, and NDC standards to offer retail-like experiences (legroom, meals) directly to users.</>
        },
        {
            icon: ShieldCheck,
            title: "FinOps & Compliance Shield",
            desc: <>Secure by Design. Full PCI-DSS and GDPR compliance architectures, coupled with automated resource downscaling to reduce cloud costs by up to 25%.</>
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-[#0c1929] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40 L40 0" stroke="white" strokeWidth="0.5" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">The Gold Standard Stack</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                            Enterprise-Grade Travel Website Development Capabilities
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="group relative bg-gradient-to-br from-gray-900/80 to-[#0a1628] rounded-2xl p-8 border border-gray-800 hover:border-[#E92228]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E92228]/10 overflow-hidden">
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E92228] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Number */}
                                <div className="absolute top-4 right-4 text-5xl font-bold text-gray-800/30 font-heading">0{idx + 1}</div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E92228] to-[#ff4444] flex items-center justify-center mb-6 shadow-lg shadow-[#E92228]/30 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-[#E92228] transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-body text-sm">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
