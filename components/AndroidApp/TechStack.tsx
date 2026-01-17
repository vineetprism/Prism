'use client';

import React from 'react';
import {
    Smartphone,
    Layers,
    Palette,
    Cloud,
    GitBranch,
    Code2,
    Server,
    CheckCircle
} from 'lucide-react';

const techIconMap: { [key: string]: React.ReactNode } = {
    "Kotlin": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Swift": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Dart": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Jetpack Compose": <Palette className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Kotlin Multiplatform": <Layers className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Flutter": <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Node.js": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Spring Boot": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "AWS Lambda": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Google Cloud": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Jenkins": <GitBranch className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "GitHub Actions": <GitBranch className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Appium": <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Espresso": <CheckCircle className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
};

export default function TechStack() {
    const techStack = [
        { category: "Languages", items: ["Kotlin", "Swift", "Dart"] },
        { category: "Frameworks", items: ["Jetpack Compose", "Kotlin Multiplatform", "Flutter"] },
        { category: "Backend/Cloud", items: ["Node.js", "Spring Boot", "AWS Lambda", "Google Cloud"] },
        { category: "CI/CD & QA", items: ["Jenkins", "GitHub Actions", "Appium", "Espresso"] }
    ];

    return (
        <section className="py-20 lg:py-28 bg-red-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            Modern Enterprise Stack
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Android Technology Ecosystem
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((group, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300">
                                <h4 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-5 font-heading">
                                    {group.category}
                                </h4>
                                <div className="space-y-3">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <div className="w-8 h-8 flex items-center justify-center">
                                                {techIconMap[item] || <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />}
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                                                {item}
                                            </span>
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
