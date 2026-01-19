'use client';

import React from 'react';
import { Zap, Server, Wallet, Lock } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        { icon: <Zap className="w-7 h-7" />, title: "Accelerated Velocity", stat: "83%", statLabel: "Faster Rollouts", desc: "Decoupled codebases allow marketing and frontend teams to iterate instantly without risking backend stability." },
        { icon: <Server className="w-7 h-7" />, title: "Elastic Scalability", stat: "99.9%", statLabel: "Uptime", desc: "Cloud-native architecture (K8s) that auto-scales during traffic surges like Black Friday or product launches." },
        { icon: <Wallet className="w-7 h-7" />, title: "Cost Efficiency", stat: "30%", statLabel: "OpEx Reduction", desc: "Reduce licensing bloat and duplicative content creation through centralized \"Single Source of Truth\" assets." },
        { icon: <Lock className="w-7 h-7" />, title: "Security Posture", stat: "Zero", statLabel: "Trust Architecture", desc: "Enterprise-grade compliance (GDPR/CCPA) with automated threat detection and immutable infrastructure." }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Measurable Impact</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The ROI of Modern CMS
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white relative overflow-hidden rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300 group">
                                {/* Subtle decorative circle */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-50 rounded-full group-hover:bg-[#E92228]/5 transition-colors duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#E92228] transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-[#E92228]/30 group-hover:scale-110">
                                            <div className="text-[#E92228] group-hover:text-white transition-colors duration-500">
                                                {benefit.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className="text-4xl lg:text-5xl font-bold text-[#E92228] font-heading tracking-tight">{benefit.stat}</div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mt-1">{benefit.statLabel}</div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 font-heading mb-3 group-hover:text-[#E92228] transition-colors">{benefit.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
