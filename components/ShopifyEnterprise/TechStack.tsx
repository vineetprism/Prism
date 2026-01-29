'use client';

import React from 'react';
import {
    ShoppingBag,
    Zap,
    Code2,
    Database,
    Globe,
    Server,
    Layout,
    Share2,
    Box
} from 'lucide-react';

// Direct icon mapping
const techIconMap: { [key: string]: React.ReactNode } = {
    "Shopify Plus": <ShoppingBag className="w-5 h-5 text-[#E92228]" />,
    "Hydrogen": <Zap className="w-5 h-5 text-[#E92228]" />,
    "Oxygen": <Globe className="w-5 h-5 text-[#E92228]" />,
    "React": <Code2 className="w-5 h-5 text-[#E92228]" />,
    "Next.js": <Layout className="w-5 h-5 text-[#E92228]" />,
    "Tailwind CSS": <Box className="w-5 h-5 text-[#E92228]" />,
    "Node.js": <Server className="w-5 h-5 text-[#E92228]" />,
    "Go (Golang)": <Code2 className="w-5 h-5 text-[#E92228]" />,
    "GraphQL": <Share2 className="w-5 h-5 text-[#E92228]" />,
    "Redis": <Database className="w-5 h-5 text-[#E92228]" />,
    "NetSuite": <Database className="w-5 h-5 text-[#E92228]" />,
    "SAP": <Database className="w-5 h-5 text-[#E92228]" />,
    "Microsoft Dynamics": <Database className="w-5 h-5 text-[#E92228]" />,
    "Segment": <Share2 className="w-5 h-5 text-[#E92228]" />,
    "Klaviyo": <Share2 className="w-5 h-5 text-[#E92228]" />,
    "Yotpo": <Share2 className="w-5 h-5 text-[#E92228]" />
};

const TechIcon = ({ name }: { name: string }) => {
    if (techIconMap[name]) {
        return <>{techIconMap[name]}</>;
    }
    return <Code2 className="w-5 h-5 text-[#E92228]" />;
};

export default function TechStack() {
    const techStack = [
        { category: "Core Technologies", items: ["Shopify Plus", "Hydrogen", "Oxygen"] },
        { category: "Frontend Frameworks", items: ["React", "Next.js", "Tailwind CSS"] },
        { category: "Backend & API", items: ["Node.js", "Go (Golang)", "GraphQL", "Redis"] },
        { category: "Enterprise Integrations", items: ["NetSuite", "SAP", "Microsoft Dynamics", "Klaviyo"] }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technology Partners</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The &quot;Gold Standard&quot; Stack
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((group, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-[6px] border-[#E92228] flex flex-col h-full">
                                <h4 className="text-gray-900 font-bold text-xl mb-6 font-heading">{group.category}</h4>
                                <div className="space-y-4 flex-grow">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-red-50 p-4 rounded-xl border border-red-100 hover:border-red-200 transition-colors">
                                            <div className="w-8 h-8 flex items-center justify-center shrink-0 bg-white rounded-lg shadow-sm">
                                                <TechIcon name={item} />
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
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
