'use client';

import React from 'react';
import {
    Code2,
    Layers,
    Server,
    Brain,
    Cloud,
    Network,
    Database
} from 'lucide-react';

// Tech icon mapping
const techIconMap: { [key: string]: React.ReactNode } = {
    "React": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Next.js": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Vue.js": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Tailwind CSS": <Layers className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Laravel": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Python": <Brain className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Node.js": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "AWS": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "DigitalOcean": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Docker": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Kubernetes": <Network className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "PostgreSQL": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Redis": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "TimescaleDB": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
};

export default function TechStack() {
    const techStack = [
        { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
        { category: "Backend", items: ["Laravel", "Python", "Node.js"] },
        { category: "Infrastructure", items: ["AWS", "DigitalOcean", "Docker", "Kubernetes"] },
        { category: "Data", items: ["PostgreSQL", "Redis", "TimescaleDB"] }
    ];

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technology Partners</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The Convergence Stack
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((group, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h4 className="text-gray-900 font-bold text-lg mb-5 font-heading">{group.category}</h4>
                                <div className="space-y-3">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <div className="w-8 h-8 flex items-center justify-center">
                                                {techIconMap[item] || <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />}
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">{item}</span>
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
