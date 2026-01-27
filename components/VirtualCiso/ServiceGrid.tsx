'use client';

import React from 'react';
import {
    FileCheck,
    Users,
    Activity,
    BookOpen,
    Presentation,
    ShieldCheck
} from 'lucide-react';

const services = [
    {
        number: '01',
        icon: FileCheck,
        title: "Regulatory Compliance Engine",
        focus: "Speed to Certification",
        description: "Architecting your path to SOC 2 Type II, ISO 27001, and CMMC in months, not years, using automated evidence collection.",
        tech: 'Drata, Vanta'
    },
    {
        number: '02',
        icon: Users,
        title: "Third-Party Risk Management",
        focus: "Secure Your Supply Chain",
        description: "We implement \"Pre-Contract Security Gates\" to vet vendors and manage the Business Associate Agreement (BAA) lifecycle.",
        tech: 'Pre-Contract Vetting'
    },
    {
        number: '03',
        icon: Activity,
        title: "Incident Response Planning",
        focus: "The $2.66M Savings",
        description: "Development of battle-tested IR plans and execution of Tabletop Exercises (TTX) to ensure your team is ready when—not if—an attack occurs.",
        tech: 'TTX Execution'
    },
    {
        number: '04',
        icon: BookOpen,
        title: "Governance & Policy Design",
        focus: "The \"Paper Shield\"",
        description: "Drafting enforceable Information Security Policies, Acceptable Use Policies, and Disaster Recovery protocols tailored to your specific culture.",
        tech: 'Policy Drafting'
    },
    {
        number: '05',
        icon: Presentation,
        title: "Board Advisory & Reporting",
        focus: "Translate Risk to Revenue",
        description: "Quarterly presentations that translate technical vulnerability metrics into financial risk models for your Board of Directors.",
        tech: 'Financial Risk Models'
    },
    {
        number: '06',
        icon: ShieldCheck,
        title: "Security Architecture Review",
        focus: "Zero Trust Implementation",
        description: "Overseeing the deployment of MFA, SSO (Okta/Entra), and EDR tools to eliminate \"Shadow IT\" and harden your perimeter.",
        tech: 'Okta, Entra ID'
    }
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
                            Comprehensive <span className="text-[#E92228]">Security Coverage</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                            From automated compliance to boardroom strategy, we cover every angle of your security posture.
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
