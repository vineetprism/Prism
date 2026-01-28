'use client';

import React from 'react';
import {
    FileText,
    Palette,
    Cloud,
    Server,
    Network,
    Search,
    Sparkles,
    GitBranch,
    Share2,
    Code2
} from 'lucide-react';

// Direct icon mapping for reliable display (no CDN dependency)
const techIconMap: { [key: string]: React.ReactNode } = {
    "Sitecore": <FileText className="w-5 h-5 text-[#E92228]" />,
    "Adobe AEM": <Palette className="w-5 h-5 text-[#E92228]" />,
    "Contentful": <FileText className="w-5 h-5 text-[#E92228]" />,
    "Drupal": <FileText className="w-5 h-5 text-[#E92228]" />,
    "AWS": <Cloud className="w-5 h-5 text-[#E92228]" />,
    "Azure": <Cloud className="w-5 h-5 text-[#E92228]" />,
    "Docker": <Server className="w-5 h-5 text-[#E92228]" />,
    "Kubernetes": <Network className="w-5 h-5 text-[#E92228]" />,
    "Elasticsearch": <Search className="w-5 h-5 text-[#E92228]" />,
    "OpenAI": <Sparkles className="w-5 h-5 text-[#E92228]" />,
    "Algolia": <Search className="w-5 h-5 text-[#E92228]" />,
    "MuleSoft": <GitBranch className="w-5 h-5 text-[#E92228]" />,
    "GraphQL": <Share2 className="w-5 h-5 text-[#E92228]" />,
    "REST API": <Code2 className="w-5 h-5 text-[#E92228]" />,
};

const TechIcon = ({ item }: { item: { name: string, slug: string | null } }) => {
    if (techIconMap[item.name]) {
        return <>{techIconMap[item.name]}</>;
    }
    return <Code2 className="w-5 h-5 text-[#E92228]" />;
};

export default function TechStack() {
    const techGroups = [
        {
            category: "CMS/DXP",
            items: [
                { name: "Sitecore", slug: "sitecore" },
                { name: "Adobe AEM", slug: "adobe" },
                { name: "Contentful", slug: "contentful" },
                { name: "Drupal", slug: "drupal" }
            ]
        },
        {
            category: "Cloud & Infra",
            items: [
                { name: "AWS", slug: "amazonaws" },
                { name: "Azure", slug: "microsoftazure" },
                { name: "Docker", slug: "docker" },
                { name: "Kubernetes", slug: "kubernetes" }
            ]
        },
        {
            category: "Search & AI",
            items: [
                { name: "Elasticsearch", slug: "elasticsearch" },
                { name: "OpenAI", slug: "openai" },
                { name: "Algolia", slug: "algolia" }
            ]
        },
        {
            category: "Integration",
            items: [
                { name: "MuleSoft", slug: "mulesoft" },
                { name: "GraphQL", slug: "graphql" },
                { name: "REST API", slug: null }
            ]
        }
    ];

    return (
        <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Trusted Technologies</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Trusted Technologies: The CMS & DXP Ecosystem
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techGroups.map((group, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300">
                                <h4 className="text-gray-900 font-bold text-lg mb-5 font-heading">{group.category}</h4>

                                <div className="space-y-3">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                <TechIcon item={item} />
                                            </div>
                                            <span className="text-gray-700 font-semibold text-sm">{item.name}</span>
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
