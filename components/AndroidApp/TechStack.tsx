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
    "Kotlin": <Code2 className="w-5 h-5 text-white" />,
    "Swift": <Code2 className="w-5 h-5 text-white" />,
    "Dart": <Code2 className="w-5 h-5 text-white" />,
    "Jetpack Compose": <Palette className="w-5 h-5 text-white" />,
    "Kotlin Multiplatform": <Layers className="w-5 h-5 text-white" />,
    "Flutter": <Smartphone className="w-5 h-5 text-white" />,
    "Node.js": <Server className="w-5 h-5 text-white" />,
    "Spring Boot": <Server className="w-5 h-5 text-white" />,
    "AWS Lambda": <Cloud className="w-5 h-5 text-white" />,
    "Google Cloud": <Cloud className="w-5 h-5 text-white" />,
    "Jenkins": <GitBranch className="w-5 h-5 text-white" />,
    "GitHub Actions": <GitBranch className="w-5 h-5 text-white" />,
    "Appium": <Smartphone className="w-5 h-5 text-white" />,
    "Espresso": <CheckCircle className="w-5 h-5 text-white" />,
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
                            Modern Enterprise Stack:
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                            Android Application Development Technology Ecosystem
                        </h2>
                        <p className="text-gray-600 text-lg font-body max-w-3xl mx-auto">
                            Industry-leading frameworks and platforms powering our <span className="font-bold">android mobile application development services</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((group, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 border-t-4 border-t-[#E92228] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <h4 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-6 font-heading flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-[#E92228]"></span>
                                    {group.category}
                                </h4>
                                <div className="space-y-4">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E92228] shadow-sm">
                                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E92228] text-white">
                                                {techIconMap[item] || <Code2 className="w-5 h-5" />}
                                            </div>
                                            <span className="text-[#E92228] font-bold text-sm">
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
