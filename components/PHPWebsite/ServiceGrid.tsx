'use client';

import React from 'react';

export default function ServiceGrid() {
    const services = [
        {
            title: "Enterprise Modernization",
            description: "Transforming legacy \"spaghetti code\" into modular microservices using Rector automation and Domain-Driven Design."
        },
        {
            title: "High-Performance Laravel",
            description: "Leveraging Laravel Octane and Swoole to achieve sub-millisecond response times and handle massive concurrency."
        },
        {
            title: "API-First Architecture",
            description: "Building headless, RESTful, and GraphQL APIs that serve React, Vue, and Mobile frontends seamlessly."
        },
        {
            title: "SaaS Product Engineering",
            description: "Multi-tenant architectures with robust isolation, billing integration (Stripe/Paddle), and automated onboarding."
        },
        {
            title: "E-commerce & High Availability",
            description: "Scalable backends capable of surviving \"Black Friday\" traffic spikes using Redis caching and elastic infrastructure."
        },
        {
            title: "DevSecOps & Compliance",
            description: "Automated CI/CD pipelines with PHPStan static analysis to ensure GDPR/HIPAA compliance and zero-vulnerability releases."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
                            Our PHP Website Development Services Expertise
                        </h2>
                        <p className="text-gray-500 text-lg">Enterprise-grade solutions engineered by a leading <span className="font-bold text-gray-900">php development company</span> for modern businesses.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-t-4 hover:border-t-[#E92228] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 font-heading pr-4 leading-tight group-hover:text-[#E92228] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <span className="text-5xl font-bold text-[#E92228] font-heading leading-none opacity-90 shrink-0">
                                        0{idx + 1}
                                    </span>
                                </div>
                                <p className="text-gray-600 font-body text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
