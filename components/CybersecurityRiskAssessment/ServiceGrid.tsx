'use client';

import React from 'react';
import {
    Search,
    Target,
    Cloud,
    Skull,
    HardDrive,
    Brain
} from 'lucide-react';

const services = [
    {
        number: '01',
        icon: Search,
        title: 'Vulnerability Assessment',
        focus: 'Baseline Hygiene',
        description: 'Automated, high-frequency scanning to identify CVEs across your network, servers, and endpoints before attackers do.',
        tech: 'Nessus, Qualys',
    },
    {
        number: '02',
        icon: Target,
        title: 'Advanced Penetration Testing',
        focus: 'Offensive Simulation',
        description: 'Manual, goal-oriented exploitation of Web Apps, Mobile (iOS/Android), and APIs. We test logic, not just syntax.',
        tech: 'Burp Suite, Postman',
    },
    {
        number: '03',
        icon: Cloud,
        title: 'Cloud Security Posture',
        focus: 'Infrastructure Config',
        description: 'Deep dive into AWS/Azure environments to detect misconfigurations, IAM sprawl, and open S3 buckets.',
        tech: 'Prowler, ScoutSuite',
    },
    {
        number: '04',
        icon: Skull,
        title: 'Red Teaming Operations',
        focus: 'Adversarial Emulation',
        description: "Full-scope simulated attacks (Cyber + Physical + Social) to test your blue team's detection and response speed.",
        tech: 'Cobalt Strike, Sliver C2',
    },
    {
        number: '05',
        icon: HardDrive,
        title: 'Ransomware Readiness',
        focus: 'Recovery & Resilience',
        description: 'Assess backup immutability, Active Directory resilience, and "Double Extortion" defense capabilities.',
        tech: 'DR Simulation',
    },
    {
        number: '06',
        icon: Brain,
        title: 'AI & Shadow AI Risk',
        focus: 'Emerging Tech',
        description: 'Identify unsanctioned LLM usage, prompt injection vulnerabilities, and data leakage risks in your AI pipeline.',
        tech: 'NIST AI RMF',
    },
];

export default function ServiceGrid() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-mono">
                            Our Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading mb-4">
                            Comprehensive Security Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                            Six modular services designed to identify, assess, and remediate vulnerabilities across your entire attack surface.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, idx) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#E92228]/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
                                >
                                    <span className="absolute -top-4 -right-2 text-8xl font-black text-gray-50 group-hover:text-[#E92228]/5 transition-colors duration-300 font-mono">
                                        {service.number}
                                    </span>

                                    <div className="relative">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#E92228] to-[#c91e23] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#E92228]/20 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>

                                        <span className="inline-block text-[#E92228] text-xs font-bold uppercase tracking-wider mb-2 font-mono bg-[#E92228]/5 px-2 py-1 rounded">
                                            {service.focus}
                                        </span>

                                        <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 font-heading group-hover:text-[#E92228] transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed font-body text-sm mb-4">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                                            <span className="text-gray-400 text-xs font-mono">Tech:</span>
                                            <span className="text-[#1F1F1F] text-xs font-semibold font-mono">{service.tech}</span>
                                        </div>
                                    </div>

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
