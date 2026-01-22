'use client';

import React from 'react';

const techPartners = [
    { name: 'CrowdStrike', category: 'EDR/Endpoint' },
    { name: 'Microsoft Sentinel', category: 'SIEM' },
    { name: 'Splunk', category: 'Analytics' },
    { name: 'Palo Alto Networks', category: 'Firewall/SOAR' },
    { name: 'SentinelOne', category: 'Ransomware Rollback' },
];

export default function TechStack() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Technology Partners
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                            Powered by the Best
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                            We integrate with industry-leading security platforms to deliver comprehensive protection.
                        </p>
                    </div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {techPartners.map((partner, idx) => (
                            <div
                                key={idx}
                                className="group bg-gray-50 rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-[#E92228]/30 hover:bg-white transition-all duration-300 hover:shadow-lg cursor-default"
                            >
                                <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center border border-gray-200 group-hover:border-[#E92228]/30 transition-colors">
                                    <span className="text-2xl font-bold text-gray-400 group-hover:text-[#E92228] transition-colors">
                                        {partner.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 font-heading mb-1 group-hover:text-[#E92228] transition-colors">
                                    {partner.name}
                                </h3>
                                <p className="text-xs text-gray-500">{partner.category}</p>
                            </div>
                        ))}
                    </div>

                    {/* Note */}
                    <p className="text-center text-gray-500 text-sm mt-10 font-mono">
                        <span className="text-[#E92228]">*</span> We integrate with your existing security investments
                    </p>
                </div>
            </div>
        </section>
    );
}