'use client';

import React from 'react';
import { Wrench, Zap, Fingerprint, Scale } from 'lucide-react';

const benefits = [
    {
        number: '01',
        icon: Wrench,
        title: 'Economic Efficiency (Shift Left)',
        highlight: '$50 vs $1,500',
        description: 'Fixing a vulnerability in development costs $50. Fixing it in production costs $1,500. We integrate assessment early (DevSecOps) to save you 30x on remediation.',
    },
    {
        number: '02',
        icon: Zap,
        title: 'Speed as a Feature',
        highlight: '200 Days',
        description: 'We focus on "Breakout Time." Our assessments are designed to help you detect and contain threats within the "Golden Window" of 200 days, saving an average of $1.39M.',
    },
    {
        number: '03',
        icon: Fingerprint,
        title: 'Beyond the Firewall (Identity First)',
        highlight: '1.8 Billion',
        description: 'With 1.8 billion credentials compromised annually, we treat Identity as the new perimeter. We rigorously test IAM, Active Directory, and Role-Based Access Control.',
    },
    {
        number: '04',
        icon: Scale,
        title: 'Regulatory Armor',
        highlight: 'Audit-Ready',
        description: 'Our reports map directly to NIST CSF 2.0, HIPAA, PCI-DSS, and GDPR, turning your security posture into a verifiable asset for auditors and investors.',
    },
];

export default function Benefits() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-mono">
                            Why Prism Infoways
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                            The Value Proposition
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {benefits.map((benefit, idx) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-100 hover:border-[#E92228]/30 transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-5xl lg:text-6xl font-black text-[#E92228]/20 group-hover:text-[#E92228]/40 transition-colors duration-300 font-mono">
                                                {benefit.number}
                                            </span>
                                            <div className="w-12 h-12 bg-[#E92228] rounded-xl flex items-center justify-center shadow-lg shadow-[#E92228]/20 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <span className="bg-[#E92228]/10 text-[#E92228] text-xs font-bold px-3 py-1.5 rounded-full font-mono">
                                            {benefit.highlight}
                                        </span>
                                    </div>

                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-4 group-hover:text-[#E92228] transition-colors duration-300">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed font-body">
                                        {benefit.description}
                                    </p>

                                    <div className="w-16 h-1 bg-[#E92228] mt-6 group-hover:w-32 transition-all duration-300 rounded-full" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
