'use client';

import React from 'react';
import {
    Code2,
    RefreshCw,
    ShieldCheck,
    Gauge,
    Sparkles,
    Lock
} from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: "Native Engineering",
        desc: "High-performance development using Swift & SwiftUI. We build responsive, ABI-stable applications that scale from iPhone SE to iPad Pro."
    },
    {
        icon: RefreshCw,
        title: "Legacy Rescue & Migration",
        desc: "Stabilize and modernize aging Objective-C codebases. We eliminate technical debt and migrate to Swift without disrupting operations."
    },
    {
        icon: ShieldCheck,
        title: "The Compliance Shield",
        desc: "Guaranteed App Store approval support. We conduct pre-submission audits for Privacy Manifests and HIG standards to prevent rejection."
    },
    {
        icon: Gauge,
        title: "Performance Tuning",
        desc: "Eliminate crashes and memory leaks. We utilize Xcode Instruments to optimize memory retention and battery consumption for fluid UX."
    },
    {
        icon: Sparkles,
        title: "Next-Gen Integration",
        desc: "Unlock the power of the device. Implementation of ARKit for immersive experiences and CoreML for secure, on-device intelligence."
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        desc: "Bank-grade protection. We implement SSL Pinning, Keychain storage, and code obfuscation to protect IP and prevent data breaches."
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-20 lg:py-28 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Service Modules
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading">
                            Enterprise iOS Capabilities
                        </h2>
                    </div>

                    {/* 6-Block Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-[#E92228]"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-[#E92228] rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 font-heading">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-body">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
