'use client';

import React from 'react';
import {
    Puzzle,
    RefreshCw,
    Link as LinkIcon,
    Cloud,
    Brain,
    ShieldCheck
} from 'lucide-react';

export default function ServiceGrid() {
    const services = [
        {
            title: "Composable Web Applications",
            description: "Modular, component-based architectures using React and Next.js. Built for speed, SEO dominance, and effortless scalability.",
            icon: <Puzzle className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "Legacy Rescue & Modernization",
            description: "Paralyzed by technical debt? We refactor \"spaghetti code\" into clean, documented microservices without disrupting business continuity.",
            icon: <RefreshCw className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "API & Ecosystem Integration",
            description: "Eliminate data silos. We orchestrate seamless communication between your web front-end, ERP, CRM (Salesforce/HubSpot), and payment gateways.",
            icon: <LinkIcon className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "AI-Infused User Experiences",
            description: "Integrate LLMs and Python agents for \"Smart Search,\" personalized recommendations, and automated customer service workflows.",
            icon: <Brain className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "High-Security Architecture",
            description: "Security by design. Protection against XSS, SQLi, and supply chain attacks. We audit third-party plugins so you don't have to.",
            icon: <ShieldCheck className="w-10 h-10 text-[#E92228]" />
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                            Our Dynamic Website Development Services Capabilities
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">From rescue to innovation our comprehensive solutions for modern enterprises.</p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E92228] transition-all duration-500 cursor-default
                                    ${idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}
                                    ${idx === 3 ? 'lg:col-span-2' : ''}
                                `}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="shrink-0">{service.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 font-heading mb-2 group-hover:text-[#E92228] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 font-body text-sm leading-relaxed">
                                            {service.description}
                                        </p>
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
