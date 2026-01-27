'use client';

import React from 'react';

const phases = [
    {
        phase: "Phase 1: Assessment (Days 0-30)",
        title: "The Discovery",
        description: "We deploy automated scanning (Cynomi/Reco) to map \"Shadow IT\" and conduct deep-dive stakeholder interviews.",
        deliverable: "Current State Gap Analysis & Business Impact Analysis (BIA)."
    },
    {
        phase: "Phase 2: Transition (Days 30-60)",
        title: "The Strategy",
        description: "We build the Risk Register and prioritize the Remediation Roadmap. Quick wins (MFA, Admin rights) are executed immediately.",
        deliverable: "The \"Paper Shield\" (Policy Library) & IR Plan."
    },
    {
        phase: "Phase 3: Monitoring (Days 60-90)",
        title: "The Execution",
        description: "Launching Vendor Risk Management (VRM) and conducting Ransomware Tabletop Exercises to test your defenses.",
        deliverable: "Security Awareness Training Launch."
    },
    {
        phase: "Phase 4: Optimization (Day 90+)",
        title: "The Governance",
        description: "Steady-state leadership. We manage the audit cycle and present \"State of Security\" metrics to your Board.",
        deliverable: "Quarterly Business Reviews & Audit Support."
    }
];

export default function Lifecycle() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        The First 100 Days: <span className="text-[#E92228]">From Risk to Resilience</span>
                    </h2>
                    <p className="text-gray-500">Our proven methodology to accelerate your security maturity.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E92228] via-[#E92228]/30 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {phases.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-[#E92228] rounded-full md:-translate-x-1/2 mt-6 border-4 border-white shadow-md z-10 box-content"></div>

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 flex flex-col gap-2">
                                    <div className={`p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#E92228]/50 hover:shadow-lg transition-all duration-300 relative group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        {/* Arrow for desktop */}
                                        <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45 group-hover:border-[#E92228]/50 transition-colors duration-300
                                            ${index % 2 === 0 ? '-left-2 -translate-x-1/2 border-r-0 border-b-0' : '-right-2 translate-x-1/2 border-l-0 border-t-0 border-r border-b'}
                                        `}></div>

                                        <div className="text-[#E92228] font-bold text-sm tracking-widest uppercase mb-2 font-mono">
                                            {item.phase}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                                        <div className="inline-block bg-red-50 text-[#E92228] text-xs font-semibold px-3 py-1 rounded-full border border-red-100">
                                            Deliverable: {item.deliverable}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
