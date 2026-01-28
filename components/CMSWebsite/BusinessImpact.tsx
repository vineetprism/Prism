'use client';

import React from 'react';
import { Network, Brain, Zap } from 'lucide-react';

export default function BusinessImpact() {
    const features = [
        { title: "Cloud-Native Ecosystem", subtitle: "MACH Architecture", icon: <Network className="w-6 h-6 text-[#E92228]" />, desc: "Scale effortlessly with infrastructure that breathes. 99.99% Uptime." },
        { title: "Automated Supply Chain", subtitle: "Agentic AI Core", icon: <Brain className="w-6 h-6 text-[#E92228]" />, desc: "Automate tagging, translation, and distribution across 50+ locales." },
        { title: "Omnichannel Delivery", subtitle: "Headless Distribution", icon: <Zap className="w-6 h-6 text-[#E92228]" />, desc: "Push content to Web, Mobile, IoT, and Vision Pro instantly." }
    ];

    return (
        <section className="py-24 lg:py-32 bg-[#f4f5f7] relative overflow-hidden">
            {/* Background: Subtle Tech Grid & Noise */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[80px] mix-blend-overlay"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Typography & Brand Statement */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="h-[2px] w-8 bg-[#E92228]"></div>
                            <span className="text-[#E92228] font-bold uppercase tracking-widest text-sm">Operational Core</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight text-gray-900">
                            CMS Development Solutions: The <span className="text-[#E92228]">Central Nervous System</span> of Your Brand
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed font-body mb-8 border-l-4 border-[#E92228] pl-6">
                            In the digital economy, your CMS is not just a repository it is the operational engine of your business. As a leading <span className="text-gray-900 font-bold">cms website development company</span>, we transition organizations from high-debt legacy monoliths to agile ecosystems that power growth.
                        </p>
                    </div>

                    {/* Right: Feature Blocks (The "Synapses") */}
                    <div className="space-y-6">
                        {features.map((item, idx) => (
                            <div key={idx} className="group relative bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E92228] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <div className="flex items-start gap-5">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#fce7e7] flex items-center justify-center border border-[#E92228]/10 group-hover:bg-[#E92228] transition-colors duration-300">
                                        {React.cloneElement(item.icon, { className: "w-6 h-6 text-[#E92228] group-hover:text-white transition-colors duration-300" })}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 font-heading">{item.title}</h3>
                                        <p className="text-[#E92228] text-xs font-bold uppercase tracking-wide mb-2">{item.subtitle}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
