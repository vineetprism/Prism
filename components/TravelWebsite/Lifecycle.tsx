'use client';

import React from 'react';
import { Search, Rocket, Activity, TrendingUp } from 'lucide-react';

export default function Lifecycle() {
    const lifecycle = [
        {
            icon: Search,
            title: "Strategic Discovery & Audit",
            subtitle: "Phase 1",
            desc: <>We don&apos;t guess. We map your technical debt, analyze legacy code, and define user personas (e.g., &quot;The Spontaneous Traveler&quot;) before writing a line of code through comprehensive <span className="font-bold text-white">travel website development</span> methodology.</>
        },
        {
            icon: Rocket,
            title: "Agile Engineering & MVP",
            subtitle: "Phase 2",
            desc: <>Velocity over perfection. We deploy &quot;Thin Slice&quot; architectures to validate tech stacks early, launching MVPs in as little as 30-90 days with our agile approach.</>
        },
        {
            icon: Activity,
            title: "Resilience & Chaos Engineering",
            subtitle: "Phase 3",
            desc: <>We break it on purpose. Using Chaos Engineering, we simulate network failures and database outages to ensure your Circuit Breakers hold up under pressure during peak booking periods.</>
        },
        {
            icon: TrendingUp,
            title: "FinOps & Continuous Optimization",
            subtitle: "Phase 4",
            desc: <>Post-launch, we implement strict tagging and monitoring (Datadog/Grafana) to optimize resources and lower your cost-per-booking through continuous improvement.</>
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E92228]/5 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">
                            Our Travel Website Development Process: The Engineering Lifecycle
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Gradient Vertical Line */}
                        <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E92228] via-gray-700 to-gray-800 rounded-full"></div>

                        {lifecycle.map((item, idx) => (
                            <div key={idx} className="relative flex gap-8 mb-12 last:mb-0">
                                {/* Timeline Node */}
                                <div className="relative z-10 shrink-0">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#E92228] rounded-full flex items-center justify-center ring-4 ring-[#0a0a0a] shadow-lg shadow-[#E92228]/30">
                                        <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-gray-900 p-6 lg:p-8 rounded-2xl border border-gray-800 hover:border-[#E92228]/50 transition-colors duration-300">
                                    <p className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-2">{item.subtitle}</p>
                                    <h3 className="text-xl lg:text-2xl font-bold font-heading mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-body">
                                        {item.desc}
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
