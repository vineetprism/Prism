'use client';

import React from 'react';
import { Search, Code2, ShieldCheck, Rocket } from 'lucide-react';

export default function Lifecycle() {
    const steps = [
        { icon: Search, title: "Assessment", timeline: "Weeks 1-4", desc: "Stakeholder interviews, legacy audit, and defining the \"Solution Architecture\" before code is written." },
        { icon: Code2, title: "Transition", timeline: "Months 2-6", desc: "Agile development sprints. Parallel tracks for \"Platform Build\" and \"Content Migration\" to accelerate delivery." },
        { icon: ShieldCheck, title: "Monitoring", timeline: "Launch Window", desc: "Orchestrated cutover with dry runs, automated load testing, and \"Hour-by-Hour\" launch scheduling." },
        { icon: Rocket, title: "Optimization", timeline: "Ongoing", desc: "Continuous delivery of new features, AI model tuning, and proactive security patching." }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Our Process</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            The Transformation Lifecycle
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform lg:-translate-x-1/2"></div>

                        {steps.map((item, idx) => (
                            <div key={idx} className={`relative flex items-center gap-8 mb-12 last:mb-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Timeline Node */}
                                <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-[#E92228] rounded-full transform -translate-x-1/2 z-10 ring-4 ring-white border-2 border-white"></div>

                                {/* Content Card */}
                                <div className={`ml-16 lg:ml-0 lg:w-[45%] bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#E92228]/30 group ${idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#E92228]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E92228] transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-[#E92228] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-1">{item.timeline}</p>
                                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed font-body">{item.desc}</p>
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
