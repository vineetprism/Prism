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
    "Swift 6": <Code2 className="w-5 h-5 text-white" />,
    "Objective-C": <Code2 className="w-5 h-5 text-white" />,
    "SwiftUI": <Palette className="w-5 h-5 text-white" />,
    "UIKit": <Palette className="w-5 h-5 text-white" />,
    "Combine": <Palette className="w-5 h-5 text-white" />,
    "Core Data": <Database className="w-5 h-5 text-white" />,
    "SwiftData": <Database className="w-5 h-5 text-white" />,
    "Realm": <Database className="w-5 h-5 text-white" />,
    "SQLite": <Database className="w-5 h-5 text-white" />,
    "Xcode Cloud": <Workflow className="w-5 h-5 text-white" />,
    "Fastlane": <Workflow className="w-5 h-5 text-white" />,
    "GitHub Actions": <Workflow className="w-5 h-5 text-white" />,
    "SonarQube": <Workflow className="w-5 h-5 text-white" />,
    "AWS Amplify": <Cloud className="w-5 h-5 text-white" />,
    "Firebase": <Cloud className="w-5 h-5 text-white" />,
    "Azure": <Cloud className="w-5 h-5 text-white" />,
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
                            Prism iOS Application Development Agency Technology Stack
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                        {techStack.map((group, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border-t-4 border-t-[#E92228] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <h4 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-5 font-heading">
                                    {group.category}
                                </h4>
                                <div className="space-y-3">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E92228] shadow-sm">
                                            <div className="w-8 h-8 flex items-center justify-center bg-[#E92228] rounded-md text-white">
                                                {techIconMap[item] || <Code2 className="w-5 h-5 text-white" />}
                                            </div>
                                            <span className="text-[#E92228] font-medium text-sm">
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
