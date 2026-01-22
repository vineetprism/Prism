'use client';

import React from 'react';
import { Scan, Shield, TestTube, RefreshCw } from 'lucide-react';

const phases = [
    {
        number: '01',
        icon: Scan,
        title: 'Deep-Dive Assessment',
        nistPhase: 'Identify & Protect',
        description: 'Asset inventory, Shadow IT discovery, and initial vulnerability scanning. We map the attack surface.',
    },
    {
        number: '02',
        icon: Shield,
        title: 'Strategic Remediation',
        nistPhase: 'Detect',
        description: 'Prioritizing fixes based on "Real Risk" (exploitability) rather than just severity score.',
    },
    {
        number: '03',
        icon: TestTube,
        title: 'Validation & Simulation',
        nistPhase: 'Respond',
        description: 'Re-testing and "Purple Teaming" to ensure defenses hold up against active exploitation attempts.',
    },
    {
        number: '04',
        icon: RefreshCw,
        title: 'Resilience Optimization',
        nistPhase: 'Recover',
        description: 'Reviewing disaster recovery plans and playbooks. Transitioning from "Secure" to "Resilient."',
    },
];

export default function Lifecycle() {
    return (
        <section className="py-20 lg:py-28 bg-[#1F1F1F] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'linear-gradient(#E92228 1px, transparent 1px), linear-gradient(90deg, #E92228 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-mono">
                            The Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">
                            NIST 2.0 Aligned Lifecycle
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E92228] via-[#E92228]/50 to-[#E92228]/20 lg:-translate-x-1/2"></div>

                        <div className="space-y-12 lg:space-y-16">
                            {phases.map((phase, idx) => {
                                const IconComponent = phase.icon;
                                const isEven = idx % 2 === 0;
                                
                                return (
                                    <div key={idx} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-[#E92228] rounded-full border-4 border-[#1F1F1F] lg:-translate-x-1/2 z-10 shadow-lg shadow-[#E92228]/50"></div>

                                        <div className={`ml-20 lg:ml-0 lg:w-[45%] ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                                            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-[#E92228]/30 transition-all duration-300">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-3xl font-black text-[#E92228] font-mono">
                                                        {phase.number}
                                                    </span>
                                                    <div className="w-12 h-12 bg-[#E92228] rounded-xl flex items-center justify-center">
                                                        <IconComponent className="w-6 h-6 text-white" />
                                                    </div>
                                                    <span className="hidden sm:inline-block bg-[#E92228]/20 text-[#E92228] text-xs font-bold px-3 py-1 rounded-full font-mono uppercase tracking-wider">
                                                        {phase.nistPhase}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl lg:text-2xl font-bold text-white font-heading mb-3 group-hover:text-[#E92228] transition-colors duration-300">
                                                    {phase.title}
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed font-body text-sm">
                                                    {phase.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="hidden lg:block lg:w-[45%]"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
