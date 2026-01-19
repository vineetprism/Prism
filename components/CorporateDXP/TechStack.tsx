'use client';

import React from 'react';

export default function TechStack() {
    const techCategories = [
        { title: "Frontend", items: ["React", "Next.js", "Vue (Nuxt)"] },
        { title: "Backend", items: ["Node.js (Fastify)", "Python (Django/FastAPI)", "Java (Spring Boot)"] },
        { title: "Data & AI", items: ["ClickHouse", "PostgreSQL", "LangGraph", "NVIDIA NeMo"] },
        { title: "Infra & Ops", items: ["AWS", "Docker", "Kubernetes", "Terraform", "Datadog"] }
    ];

    const techLogos = [
        { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        {
            name: "Azure",
            isSvg: true,
            icon: (
                <svg viewBox="0 0 24 24" fill="#0078D4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.4 20.9l5.1-13.6h4.6l2.8 13.6h-4l-.6-3.2H7.9l-.6 3.2H5.4zm3.9-6.2h3.4l-1.7-8.7-1.7 8.7zm5.3-7.4l-5 13.6h4l1.6-4.4h5.7l1.6 4.4h4.1L21.6 7.3h-7z" />
                </svg>
            )
        },
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Terraform", slug: "terraform" },
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Python", slug: "python" },
        { name: "Docker", slug: "docker" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "Datadog", slug: "datadog" },
        { name: "NVIDIA", slug: "nvidia" }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading inline-block relative">
                            Engineered with Best-in-Class Technology
                            <span className="block h-1.5 w-24 bg-[#E92228] mx-auto mt-4 rounded-full"></span>
                        </h2>
                    </div>

                    {/* Tech Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techCategories.map((category, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-4 font-heading">{category.title}</h3>
                                <div className="space-y-3">
                                    {category.items.map((tech, i) => (
                                        <span key={i} className="block text-gray-700 font-medium text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Logo Marquee */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {techLogos.map((tech: { name: string; url?: string; isSvg?: boolean; icon?: React.ReactNode; slug?: string }, idx) => (
                            <div
                                key={idx}
                                className="relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default"
                            >
                                <div className="w-14 h-14 mb-4 flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110">
                                    {tech.isSvg ? (
                                        <div className="w-full h-full text-[#0078D4]">
                                            {tech.icon}
                                        </div>
                                    ) : (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img
                                            src={tech.url || `https://cdn.simpleicons.org/${tech.slug}`}
                                            alt={tech.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    )}
                                </div>
                                <span className="text-gray-600 font-semibold text-xs text-center group-hover:text-[#E92228] transition-colors uppercase tracking-tight">
                                    {tech.name}
                                </span>

                                {/* Subtle active indicator line */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#E92228] rounded-t-full group-hover:w-1/3 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
