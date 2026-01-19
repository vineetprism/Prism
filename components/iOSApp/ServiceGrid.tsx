'use client';

import React from 'react';
import {
    Layers,
    RefreshCw,
    ShieldCheck,
    Database,
    Brain,
    Workflow
} from 'lucide-react';

const services = [
    {
        icon: Layers,
        title: "Native Architecture & Strategy",
        desc: "Building scalable \"Modular Monoliths\" using SwiftUI and VIPER patterns to ensure decoupled, testable, and stable codebases."
    },
    {
        icon: RefreshCw,
        title: "Legacy Modernization",
        desc: "The \"Strangler Pattern\" migration service to safely transition Obj-C monoliths to Swift 6 concurrency without business interruption."
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security (Zero Trust)",
        desc: "Hardware-backed encryption using the Secure Enclave and Keychain Services to protect PII/PHI data at rest and in transit."
    },
    {
        icon: Database,
        title: "Offline-First Engineering",
        desc: "Robust data persistence with SwiftData and Core Data, ensuring 100% field uptime and reducing admin delays by 30%."
    },
    {
        icon: Brain,
        title: "Edge AI & Machine Learning",
        desc: "On-device Core ML integration for latency-free OCR, biometric auth, and predictive text that respects user privacy."
    },
    {
        icon: Workflow,
        title: "Automated CI/CD Pipelines",
        desc: "\"Zero-touch\" deployment using Xcode Cloud and Fastlane to eliminate human error and accelerate release cycles."
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-20 lg:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Technical Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Enterprise iOS Architecture
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <article
                                key={idx}
                                className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E92228] transition-all duration-300 motion-reduce:transition-none"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#E92228]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#E92228] transition-colors duration-300 motion-reduce:transition-none" aria-hidden="true">
                                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#E92228] group-hover:text-white transition-colors duration-300 motion-reduce:transition-none" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading mb-2 sm:mb-3 group-hover:text-[#E92228] transition-colors motion-reduce:transition-none">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">
                                    {service.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
