'use client';

import React from 'react';
import {
    Code2,
    Palette,
    Database,
    Workflow,
    Cloud
} from 'lucide-react';

// Tech icon mapping for iOS stack
const techIconMap: { [key: string]: React.ReactNode } = {
    "Swift 6": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Objective-C": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "SwiftUI": <Palette className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "UIKit": <Palette className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Combine": <Palette className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Core Data": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "SwiftData": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Realm": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "SQLite": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Xcode Cloud": <Workflow className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Fastlane": <Workflow className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "GitHub Actions": <Workflow className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "SonarQube": <Workflow className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "AWS Amplify": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Firebase": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Azure": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
};

const techStack = [
    { category: "Languages", items: ["Swift 6", "Objective-C"] },
    { category: "UI Frameworks", items: ["SwiftUI", "UIKit", "Combine"] },
    { category: "Data", items: ["Core Data", "SwiftData", "Realm", "SQLite"] },
    { category: "DevOps", items: ["Xcode Cloud", "Fastlane", "GitHub Actions", "SonarQube"] },
    { category: "Cloud", items: ["AWS Amplify", "Firebase", "Azure"] }
];

export default function TechStack() {
    return (
        <section className="py-20 lg:py-28 bg-[#F9F1F0]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">
                            The Toolkit
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            iOS Technology Stack
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
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
