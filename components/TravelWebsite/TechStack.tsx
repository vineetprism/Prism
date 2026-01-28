'use client';

import React from 'react';
import {
    Code2,
    Server,
    Database,
    Cloud,
    Network,
    Layers,
    Zap,
    Search
} from 'lucide-react';

// Tech icon mapping
const techIconMap: { [key: string]: React.ReactNode } = {
    "Next.js": <Code2 className="w-4 h-4 text-[#E92228]" />,
    "React Native": <Code2 className="w-4 h-4 text-[#E92228]" />,
    "Flutter": <Code2 className="w-4 h-4 text-[#E92228]" />,
    "Java (Spring Boot)": <Server className="w-4 h-4 text-[#E92228]" />,
    "Kotlin": <Server className="w-4 h-4 text-[#E92228]" />,
    "Node.js": <Server className="w-4 h-4 text-[#E92228]" />,
    "Snowflake": <Database className="w-4 h-4 text-[#E92228]" />,
    "PostgreSQL": <Database className="w-4 h-4 text-[#E92228]" />,
    "Cassandra": <Database className="w-4 h-4 text-[#E92228]" />,
    "AWS": <Cloud className="w-4 h-4 text-[#E92228]" />,
    "Kubernetes (EKS)": <Network className="w-4 h-4 text-[#E92228]" />,
    "Terraform": <Layers className="w-4 h-4 text-[#E92228]" />,
    "Docker": <Server className="w-4 h-4 text-[#E92228]" />,
    "Redis": <Zap className="w-4 h-4 text-[#E92228]" />,
    "Elasticsearch": <Search className="w-4 h-4 text-[#E92228]" />,
    "Algolia": <Search className="w-4 h-4 text-[#E92228]" />,
};

export default function TechStack() {
    const techStack = [
        { category: "Frontend", items: ["Next.js", "React Native", "Flutter"] },
        { category: "Backend", items: ["Java (Spring Boot)", "Kotlin", "Node.js"] },
        { category: "Data", items: ["Snowflake", "PostgreSQL", "Cassandra"] },
        { category: "Infrastructure", items: ["AWS", "Kubernetes (EKS)", "Terraform", "Docker"] },
        { category: "Caching/Search", items: ["Redis", "Elasticsearch", "Algolia"] }
    ];

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technology Partners</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The &quot;Gold Standard&quot; Stack
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {techStack.map((group, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border-t-4 border-[#E92228] shadow-lg hover:shadow-2xl transition-all duration-300">
                                <h4 className="text-gray-900 font-bold text-lg mb-5 font-heading border-b border-gray-100 pb-2">{group.category}</h4>
                                <div className="space-y-3">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#E92228]/10 border border-[#E92228]/20 transition-all">
                                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm shrink-0">
                                                {techIconMap[item] || <Code2 className="w-4 h-4 text-[#E92228]" />}
                                            </div>
                                            <span className="text-[#E92228] font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
