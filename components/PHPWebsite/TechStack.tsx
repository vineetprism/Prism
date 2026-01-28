'use client';

import React from 'react';
import { Code2 } from 'lucide-react';

export default function TechStack() {
    const techGroups = [
        {
            category: "Core",
            num: "01",
            items: [
                { name: "PHP 8.3", slug: "php" },
                { name: "Laravel", slug: "laravel" },
                { name: "Symfony", slug: "symfony" }
            ]
        },
        {
            category: "Performance",
            num: "02",
            items: [
                { name: "Redis", slug: "redis" },
                { name: "Swoole", slug: "swoole" },
                { name: "Elasticsearch", slug: "elasticsearch" }
            ]
        },
        {
            category: "DevOps",
            num: "03",
            items: [
                { name: "Docker", slug: "docker" },
                { name: "Kubernetes", slug: "kubernetes" },
                { name: "AWS", slug: "amazonaws" }
            ]
        },
        {
            category: "Testing",
            num: "04",
            items: [
                { name: "PHPUnit", slug: "phpunit" },
                { name: "Pest", slug: "pest" },
                { name: "PHPStan", slug: null }
            ]
        }
    ];

    return (
        <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technologies We Use</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            The Modern PHP Website Development Stack
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techGroups.map((group, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300 group">
                                {/* Number Badge */}
                                <div className="w-12 h-12 rounded-xl bg-[#E92228]/10 flex items-center justify-center mb-4 group-hover:bg-[#E92228]/20 transition-colors duration-300">
                                    <span className="text-[#E92228] font-bold font-mono text-lg">{group.num}</span>
                                </div>
                                <h4 className="text-gray-900 font-bold text-lg mb-4 font-heading">{group.category}</h4>

                                {/* Tech Items */}
                                <div className="space-y-3">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                {item.slug ? (
                                                    /* eslint-disable-next-line @next/next/no-img-element */
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${item.slug}/E92228`}
                                                        alt={item.name}
                                                        className="w-6 h-6 object-contain opacity-90"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).style.display = 'none';
                                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                        }}
                                                    />
                                                ) : (
                                                    <Code2 className="w-5 h-5 text-[#E92228]" />
                                                )}
                                                {/* Fallback Icon (hidden by default if slug exists) */}
                                                <Code2 className={`w-5 h-5 text-[#E92228] ${item.slug ? 'hidden' : ''}`} />
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
        </section >
    );
}
