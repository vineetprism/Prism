'use client';

import React from 'react';
import { Rocket, Building2, ArrowRight, Users, ShieldCheck } from 'lucide-react';

interface AudienceProps {
    onOpenModal: () => void;
}

export default function Audience({ onOpenModal }: AudienceProps) {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Tailored Solutions
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Security That Fits Your Stage
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Column A - Growth & Mid-Market */}
                        <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
                            {/* Icon Badge */}
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E92228]/10 to-[#E92228]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="w-8 h-8 text-[#E92228]" />
                            </div>

                            {/* Audience Tag */}
                            <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full w-fit mb-4">
                                <Users className="w-3 h-3" />
                                Growth & Mid-Market
                            </span>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading mb-4">
                                    The &quot;Virtual SOC&quot;
                                </h3>

                                {/* Pain Point */}
                                <div className="bg-slate-50 border-l-4 border-[#E92228] rounded-r-lg p-4 mb-6">
                                    <p className="text-gray-700 font-medium italic text-sm">
                                        &quot;I have limited IT staff and can&apos;t afford a full security team.&quot;
                                    </p>
                                </div>

                                <h4 className="text-[#E92228] font-bold text-sm uppercase tracking-wide mb-3">
                                    Our Solution
                                </h4>
                                <p className="text-gray-600 leading-relaxed font-body mb-8">
                                    A turnkey security department. We handle the hygiene, patching, and 24/7 eyes-on-glass so you can focus on scaling the business.
                                </p>
                            </div>

                            {/* CTA Link */}
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-[#E92228] font-bold text-sm hover:gap-3 transition-all group/btn cursor-pointer"
                            >
                                Start with Virtual SOC
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>

                        {/* Column B - Enterprise & Regulated */}
                        <div className="bg-[#1a1a1a] p-8 sm:p-10 lg:p-12 rounded-3xl border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
                            {/* Icon Badge */}
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Building2 className="w-8 h-8 text-[#E92228]" />
                            </div>

                            {/* Audience Tag */}
                            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full w-fit mb-4">
                                <ShieldCheck className="w-3 h-3" />
                                Enterprise & Regulated
                            </span>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading mb-4">
                                    The &quot;Co-Managed Augmentation&quot;
                                </h3>

                                {/* Pain Point */}
                                <div className="bg-white/5 border-l-4 border-[#E92228] rounded-r-lg p-4 mb-6">
                                    <p className="text-slate-300 font-medium italic text-sm">
                                        &quot;I have a team, but they are drowning in alerts and compliance audits.&quot;
                                    </p>
                                </div>

                                <h4 className="text-[#E92228] font-bold text-sm uppercase tracking-wide mb-3">
                                    Our Solution
                                </h4>
                                <p className="text-slate-400 leading-relaxed font-body mb-8">
                                    We act as the force multiplier. We handle Tier 1/2 triage and overnight monitoring, freeing your senior engineers for strategic architecture.
                                </p>
                            </div>

                            {/* CTA Link */}
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center text-white font-bold text-sm hover:gap-3 transition-all group/btn cursor-pointer"
                            >
                                Explore Co-Managed Options
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
