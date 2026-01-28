'use client';

import React from 'react';

export default function TechStack() {
    const technologies = [
        { name: "React", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "Angular", category: "Frontend" },
        { name: "Vue.js", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Python", category: "Backend" },
        { name: "Django", category: "Backend" },
        { name: "FastAPI", category: "Backend" },
        { name: "Laravel", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MongoDB", category: "Database" },
        { name: "Redis", category: "Database" },
        { name: "TimescaleDB", category: "Database" },
        { name: "AWS", category: "Cloud" },
        { name: "Azure", category: "Cloud" },
        { name: "Docker", category: "DevOps" },
        { name: "Kubernetes", category: "DevOps" },
        { name: "Jenkins", category: "DevOps" }
    ];

    return (
        <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-2">
                            The Modern Convergence Stack
                        </h2>
                        <p className="text-gray-500">Industry-leading technologies powering scalable <span className="font-bold text-gray-900">dynamic website solutions</span>.</p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-5 py-2.5 bg-gray-100 hover:bg-[#E92228] hover:text-white rounded-full text-sm font-medium text-gray-700 transition-all duration-300 cursor-default"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
