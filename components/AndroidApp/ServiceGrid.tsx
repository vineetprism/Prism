'use client';

import React from 'react';
import {
    Layers,
    RefreshCw,
    Palette,
    Brain,
    ShieldCheck,
    Cloud
} from 'lucide-react';

export default function ServiceGrid() {
    const services = [
        {
            icon: Layers,
            title: "Native & Multiplatform Strategy",
            desc: <>Leveraging Kotlin Multiplatform (KMP) to share business logic across iOS and Android without sacrificing native user experience or performance through strategic <span className="font-bold">android mobile application development</span>.</>
        },
        {
            icon: RefreshCw,
            title: "Legacy Modernization",
            desc: <>Decoupling mobile apps from aging ERPs/Mainframes using modern API Gateways and the &quot;BFF&quot; (Backend for Frontend) pattern. Our <span className="font-bold">prism app development services</span> bridge legacy systems with modern mobile experiences.</>
        },
        {
            icon: Palette,
            title: "Declarative UI/UX",
            desc: "Utilizing Jetpack Compose for modular, reactive interfaces that adapt seamlessly to foldables, tablets, and ruggedized devices core to modern expertise."
        },
        {
            icon: Brain,
            title: "AI-Infused Intelligence",
            desc: "Integrating On-Device ML (TensorFlow Lite) and GenAI for offline capability, smart data capture, and zero-latency decision making."
        },
        {
            icon: ShieldCheck,
            title: "DevSecOps & Compliance",
            desc: "\"Secure-by-Design\" architecture. OWASP Mobile Top 10 compliance, encrypted local storage, and automated vulnerability scanning ensure enterprise-grade security."
        },
        {
            icon: Cloud,
            title: "Cloud-Native Scale",
            desc: "Serverless backends and microservices (AWS/Azure) that ensure your mobile ecosystem scales independently of legacy infrastructure."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-red-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Technical Architecture
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Enterprise Android Application Development Capabilities
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <article
                                key={idx}
                                className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#E92228] shadow-sm hover:shadow-none transition-all duration-300 motion-reduce:transition-none"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#E92228] flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300 motion-reduce:transition-none" aria-hidden="true">
                                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors duration-300 motion-reduce:transition-none" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#E92228] font-heading mb-2 sm:mb-3 transition-colors motion-reduce:transition-none">
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
