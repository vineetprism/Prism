'use client';

import React from 'react';
import { Code, RefreshCw, Link, Brain, Layers, Settings, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Code, RefreshCw, Link, Brain, Layers, Settings
};

export default function ServiceGrid() {
    const services = [
        {
            title: "Native Swift Engineering",
            description: "Building reactive, crash-free applications using Swift 6 and SwiftUI. Optimized for 60fps performance and instant load times.",
            icon: "Code",
        },
        {
            title: "Legacy Migration (Obj-C to Swift)",
            description: "Deploying the \"Strangler Fig\" pattern to incrementally modernize legacy Objective-C codebases without operational downtime.",
            icon: "RefreshCw",
        },
        {
            title: "Enterprise Integration",
            description: "Securely connecting mobile experiences to legacy backends (SAP, Salesforce) via custom middleware and API layers.",
            icon: "Link",
        },
        {
            title: "AI & On-Device Intelligence",
            description: "Leveraging Core ML and the Neural Engine for privacy-first, zero-latency features like fraud detection and image recognition.",
            icon: "Brain",
        },
        {
            title: "UX & Spatial Computing",
            description: "Designing strictly to Apple's Human Interface Guidelines (HIG) and implementing ARKit for immersive industrial or retail experiences.",
            icon: "Layers",
        },
        {
            title: "Lifecycle Management",
            description: "Proactive maintenance packages handling annual OS updates, security patching, and App Store Optimization (ASO).",
            icon: "Settings",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* 6-Block Grid: 2 Rows x 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Code;

                        return (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#E92228]"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-[#E92228] rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed">
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
