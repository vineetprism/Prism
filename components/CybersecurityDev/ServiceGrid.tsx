'use client';

import React from 'react';
import {
    Shield,
    Search,
    UserCheck,
    Cloud,
    Database,
    ClipboardCheck
} from 'lucide-react';

const services = [
    {
        icon: Shield,
        title: 'Managed Detection & Response (MDR)',
        description: "24/7 monitoring and active threat containment. We don't just alert you; we isolate infected hosts within minutes to stop the spread.",
    },
    {
        icon: Search,
        title: 'Vulnerability Management (VMaaS)',
        description: 'Continuous scanning to identify and prioritize patching for the "low hanging fruit" that attackers exploit most often.',
    },
    {
        icon: UserCheck,
        title: 'Identity Threat Detection',
        description: 'Securing the new perimeter. We detect compromised credentials, impossible travel, and MFA fatigue attacks before account takeover occurs.',
    },
    {
        icon: Cloud,
        title: 'Cloud Security (CSPM)',
        description: 'Native protection for AWS, Azure, and Hybrid environments. We detect misconfigurations and secure your digital transformation.',
    },
    {
        icon: Database,
        title: 'SIEM & Log Management',
        description: 'Centralized visibility. We ingest data from your existing ecosystem (Microsoft, Splunk, etc.) to correlate disparate signals into clear insights.',
    },
    {
        icon: ClipboardCheck,
        title: 'Compliance & Governance',
        description: 'Audit-ready always. Automated mapping of security controls to NIST, HIPAA, PCI-DSS, and ISO 27001 requirements.',
    },
];

export default function ServiceGrid() {
    return (
        <section className="py-20 lg:py-28 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Comprehensive Protection
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading mb-4">
                            Your Complete Cyber Defense Stack
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                            Six integrated services that eliminate security gaps and provide end-to-end visibility.
                        </p>
                    </div>

                    {/* 6-Block Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-[#E92228] overflow-hidden"
                                >
                                    {/* Icon - Red Background */}
                                    <div className="w-14 h-14 bg-[#E92228] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 font-heading group-hover:text-[#E92228] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed font-body">
                                        {service.description}
                                    </p>

                                    {/* Bottom Line Hover Animation */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E92228] to-[#ff6b6b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
