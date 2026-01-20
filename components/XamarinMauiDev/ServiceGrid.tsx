'use client';

import React from 'react';
import { Search, RefreshCw, Code2, Shield, Users, GitBranch, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Search, RefreshCw, Code2, Shield, Users, GitBranch
};

export default function ServiceGrid() {
    const services = [
        {
            title: "Strategic Migration Audit",
            description: "Deep-dive analysis of your .sln and NuGet dependencies to map a risk-free path from Xamarin.Forms to MAUI.",
            icon: "Search",
        },
        {
            title: "Renderer-to-Handler Re-engineering",
            description: "We don't just wrap old code. We rewrite legacy Renderers into modern MAUI Handlers for 2.5x faster rendering.",
            icon: "RefreshCw",
        },
        {
            title: "Enterprise App Development",
            description: "Greenfield development using .NET 8, C# 12, and Blazor Hybrid for scalable, future-proof cross-platform solutions.",
            icon: "Code2",
        },
        {
            title: "Compliance & Security Rescue",
            description: "Updating cryptographic libraries and authentication flows to meet ISO 27001, HIPAA, and modern store mandates.",
            icon: "Shield",
        },
        {
            title: "Team Augmentation",
            description: "Deploy senior .NET MAUI developers to your internal team instantly to clear backlogs or accelerate release cycles.",
            icon: "Users",
        },
        {
            title: "CI/CD & DevOps Integration",
            description: "Automating your release pipeline with Azure DevOps/GitHub Actions for seamless delivery to TestFlight and Play Store.",
            icon: "GitBranch",
        },
    ];

    return (
        <section id="services" className="py-20 md:py-28 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                        Our Migration & Development Services
                    </h2>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Code2;

                        return (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-[#E92228]"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-[#E92228] rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 font-heading">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed font-body">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
