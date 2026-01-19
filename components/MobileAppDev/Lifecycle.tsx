'use client';

import React from 'react';
import { Search, Code2, Rocket, TrendingUp } from 'lucide-react';

const stages = [
    {
        icon: Search,
        phase: 'Assessment',
        title: 'Strategy',
        desc: 'Deep dive into legacy constraints, security risks, and revenue goals. We map your technical debt and define success metrics.',
        color: 'from-[#E92228] to-[#ff6b6b]'
    },
    {
        icon: Code2,
        phase: 'Transition',
        title: 'Engineering',
        desc: 'Agile Sprints using DevSecOps. Automated testing on real device farms to handle fragmentation across 24,000+ Android devices.',
        color: 'from-blue-500 to-cyan-400'
    },
    {
        icon: Rocket,
        phase: 'Monitoring',
        title: 'Launch',
        desc: 'Phased rollout to 5% of users. Real-time performance monitoring via New Relic/Firebase before full deployment.',
        color: 'from-purple-500 to-pink-400'
    },
    {
        icon: TrendingUp,
        phase: 'Optimization',
        title: 'Evolution',
        desc: 'The "Day 2" Reality. Continuous updates based on user analytics to improve retention and drive conversion.',
        color: 'from-green-500 to-emerald-400'
    }
];

export default function Lifecycle() {
    return (
        <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E92228]"></div>
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-[0.2em]">
                            Delivery Lifecycle
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#E92228]"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                        From Vision to Evolution
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-ml-px">
                        <div className="h-full w-full bg-gradient-to-b from-[#E92228] via-blue-500 via-purple-500 to-green-500"></div>
                    </div>

                    {stages.map((stage, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 last:mb-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-20">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-xl ring-4 ring-[#0a0a0a]`}>
                                    <stage.icon className="w-7 h-7 text-white" />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className={`lg:w-1/2 pl-24 lg:pl-0 ${idx % 2 === 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'}`}>
                                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group">
                                    <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${stage.color} text-sm font-bold uppercase tracking-wider mb-2`}>
                                        {stage.phase}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white font-heading mb-4">
                                        {stage.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed font-body">
                                        {stage.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden lg:block lg:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
