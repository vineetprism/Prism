'use client';

import React from 'react';

export default function TechStack() {
    const techStack = [
        { category: "Core", items: ["Shopify Plus", "Hydrogen", "Oxygen"] },
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Go (Golang)", "GraphQL", "Redis"] },
        { category: "Integrations", items: ["NetSuite", "SAP", "Microsoft Dynamics", "Segment", "Klaviyo", "Yotpo"] }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technology Partners</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Powered by Best-in-Class Technology
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((group, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#E92228]/30 transition-colors">
                                <h4 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-4">{group.category}</h4>
                                <div className="space-y-3">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#E92228] transition-colors"></div>
                                            <span className="text-gray-700 font-medium text-sm">{item}</span>
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
