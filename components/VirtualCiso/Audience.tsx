'use client';

import React, { useState } from 'react';
import { CheckCircle2, Rocket, Building2 } from 'lucide-react';

interface AudienceProps {
    onOpenModal?: () => void;
}

const options = [
    {
        id: 'saas',
        label: "High-Growth SaaS & Startups",
        icon: Rocket,
        focus: "SOC 2 / ISO 27001 Certification.",
        pain: "We can't close deals with Banks/Enterprises without a security report.",
        solution: "An aggressive, automation-first sprint to get you \"Audit Ready\" to unblock revenue."
    },
    {
        id: 'enterprise',
        label: "Regulated Enterprise & Manufacturing",
        icon: Building2,
        focus: "CMMC, HIPAA, & Operational Resilience.",
        pain: "We are worried about Ransomware stopping the production line.",
        solution: "A governance-heavy approach focusing on Business Continuity, DR testing, and supply chain hardening."
    }
];

export default function Audience({ onOpenModal }: AudienceProps) {
    const [activeTab, setActiveTab] = useState('saas');

    return (
        <section className="py-20 bg-[#F5F5F5] text-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Tailored for <span className="text-[#E92228]">Your Stage</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Security isn&apos;t one-size-fits-all. Select your business type to see how we help.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Tabs */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setActiveTab(option.id)}
                                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 border-2
                                        ${activeTab === option.id
                                        ? 'bg-[#E92228] border-[#E92228] text-white shadow-xl shadow-[#E92228]/20'
                                        : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                                    }
                                    `}
                            >
                                <option.icon className={`w-6 h-6 ${activeTab === option.id ? 'text-white' : 'text-gray-400'}`} />
                                {option.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[400px]">
                        {options.map((option) => (
                            activeTab === option.id && (
                                <div key={option.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-8">
                                            <div>
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">Core Focus</div>
                                                <div className="text-2xl font-bold">{option.focus}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-[#E92228] uppercase tracking-widest mb-2 font-mono">The Pain Point</div>
                                                <blockquote className="text-xl italic text-gray-600 border-l-4 border-[#E92228] pl-4">
                                                    &quot;{option.pain}&quot;
                                                </blockquote>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2 font-mono">The Solution</div>
                                                <div className="text-lg text-gray-800 font-medium">
                                                    {option.solution}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full flex flex-col justify-center">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#E92228]" />
                                                    <span className="font-semibold text-gray-700">Dedicated vCISO</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#E92228]" />
                                                    <span className="font-semibold text-gray-700">Monthly Strategy Calls</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#E92228]" />
                                                    <span className="font-semibold text-gray-700">Audit Support</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#E92228]" />
                                                    <span className="font-semibold text-gray-700">Vendor Risk Management</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={onOpenModal}
                                                className="mt-8 w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-[#E92228] transition-colors duration-300 cursor-pointer"
                                            >
                                                Get Started with {option.id === 'saas' ? 'Startups' : 'Enterprise'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
