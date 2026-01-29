'use client';

import React from 'react';
import { Search, GitBranch, Activity, TrendingUp } from 'lucide-react';

export default function Lifecycle() {
    const lifecycle = [
        {
            icon: Search,
            title: "Assessment",
            subtitle: "The Blueprint",
            desc: "User Journey Mapping and Service Blueprints. We define the \"Art of the Possible\" and validate the ROI model before coding begins."
        },
        {
            icon: GitBranch,
            title: "Transition",
            subtitle: "Agile Engineering",
            desc: <>2-week sprints using Trunk-Based Development. We integrate the Anti-Corruption Layer to connect your legacy backend safely through proven <span className="font-bold">android application development company</span> methodology.</>
        },
        {
            icon: Activity,
            title: "Monitoring",
            subtitle: "The Shield",
            desc: "Automated Regression Testing and Security Audits. We ensure every release meets strict enterprise compliance standards."
        },
        {
            icon: TrendingUp,
            title: "Optimization",
            subtitle: "The Scale",
            desc: "Post-launch App Store Optimization (ASO) and continuous performance tuning based on real-world usage analytics."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-[#1F1F1F] text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E92228]/5 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Android Application Development Solutions:
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">
                            The Engineering Lifecycle
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Gradient Vertical Line */}
                        <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E92228] via-gray-700 to-gray-800 rounded-full"></div>

                        {lifecycle.map((item, idx) => (
                            <div key={idx} className="relative flex gap-8 mb-12 last:mb-0">
                                {/* Timeline Node */}
                                <div className="relative z-10 shrink-0">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#E92228] rounded-full flex items-center justify-center ring-4 ring-[#1F1F1F] shadow-lg shadow-[#E92228]/30">
                                        <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-[#2a2a2a] p-6 lg:p-8 rounded-2xl border border-gray-800 hover:border-[#E92228]/50 transition-colors duration-300">
                                    <p className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-2">{item.subtitle}</p>
                                    <h3 className="text-xl lg:text-2xl font-bold font-heading mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-body">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
