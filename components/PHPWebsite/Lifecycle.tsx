'use client';

import React from 'react';
import { Search, Code2, ShieldCheck, Rocket } from 'lucide-react';

export default function Lifecycle() {
    const steps = [
        { icon: Search, title: "Assessment", subtitle: "The Blueprint", desc: "We audit your legacy codebase or scope your MVP. Output: A \"Predictive Plan\" defining KPIs, architecture, and ROI roadmap." },
        { icon: Code2, title: "Transition", subtitle: "The Build", desc: "Agile sprints using PHP 8.x and strict PSR-12 coding standards. We integrate containerization (Docker) from Day 1 to ensure environmental consistency." },
        { icon: ShieldCheck, title: "Monitoring", subtitle: "The Fortress", desc: "Automated QA via PHPUnit and Pest. We stress-test endpoints to 10k users and scan for security flaws using Snyk before any release." },
        { icon: Rocket, title: "Optimization", subtitle: "The Evolution", desc: "Post-launch Blue-Green deployment. We utilize New Relic/Datadog to monitor APM metrics and refine database queries for speed." }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            The Prism Scaling Cycle
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform lg:-translate-x-1/2"></div>

                        {steps.map((item, idx) => (
                            <div key={idx} className={`relative flex items-center gap-8 mb-12 last:mb-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Timeline Node */}
                                <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-[#E92228] rounded-full transform -translate-x-1/2 z-10 ring-4 ring-gray-50 border-2 border-white"></div>

                                {/* Content Card */}
                                <div className={`ml-16 lg:ml-0 lg:w-[45%] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#E92228]/30 group ${idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#E92228]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E92228] transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-[#E92228] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-1">{item.subtitle}</p>
                                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed font-body">{item.desc}</p>
                                        </div>
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
