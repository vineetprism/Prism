'use client';

import React from 'react';

export default function TechStack() {
    const techStack = {
        frontend: ["Next.js", "Gatsby", "Nuxt.js", "React"],
        cms: ["Contentful", "Strapi", "Sanity", "Storyblok"],
        cloud: ["Vercel", "Netlify", "AWS Amplify", "Docker"],
        commerce: ["Shopify Headless", "Stripe", "BigCommerce"]
    };

    // Mapping names to Simple Icons slugs and brand colors
    const techConfig: Record<string, { slug?: string; color?: string; localPath?: string }> = {
        "Next.js": { slug: "nextdotjs", color: "000000" },
        "Gatsby": { slug: "gatsby", color: "663399" },
        "Nuxt.js": { slug: "nuxt", color: "00C58E" },
        "React": { slug: "react", color: "61DAFB" },
        "Contentful": { slug: "contentful", color: "2478CC" },
        "Strapi": { slug: "strapi", color: "2E7EEA" },
        "Sanity": { slug: "sanity", color: "F03E2F" },
        "Storyblok": { slug: "storyblok", color: "00B3B0" },
        "Vercel": { slug: "vercel", color: "000000" },
        "Netlify": { slug: "netlify", color: "00C7B7" },
        "AWS Amplify": { localPath: "/icons/amplify.png" },
        "Docker": { slug: "docker", color: "2496ED" },
        "Shopify Headless": { slug: "shopify", color: "7AB55C" },
        "Stripe": { slug: "stripe", color: "008CDD" },
        "BigCommerce": { slug: "bigcommerce", color: "121118" }
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading inline-block relative">
                            Powered by Best-in-Class Technologies
                            <span className="block h-1.5 w-24 bg-[#E92228] mx-auto mt-4 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Frontend", items: techStack.frontend },
                            { title: "Headless CMS", items: techStack.cms },
                            { title: "Cloud", items: techStack.cloud },
                            { title: "Commerce", items: techStack.commerce }
                        ].map((group, gIdx) => (
                            <div key={gIdx} className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-900 text-center uppercase tracking-wider font-heading">{group.title}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {group.items.map((tech, idx) => {
                                        const config = techConfig[tech] || {
                                            slug: tech.toLowerCase().replace(/\s+/g, '').replace(/\.js$/, 'dotjs'),
                                            color: "4B5563"
                                        };

                                        const logoUrl = config.localPath || `https://cdn.simpleicons.org/${config.slug}/${config.color}`;

                                        return (
                                            <div key={idx} className="bg-white aspect-square rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-4 hover:border-[#E92228] hover:shadow-lg transition-all duration-300 group cursor-default">
                                                <div className="w-12 h-12 mb-3 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={logoUrl}
                                                        alt={tech}
                                                        className="max-w-full max-h-full object-contain"
                                                        onError={(e) => {
                                                            const img = e.target as HTMLImageElement;
                                                            if (!config.localPath && config.color && img.src.includes(config.color)) {
                                                                img.src = `https://cdn.simpleicons.org/${config.slug}`;
                                                            } else {
                                                                img.style.display = 'none';
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-gray-500 font-bold text-[10px] sm:text-xs text-center group-hover:text-[#E92228] transition-colors uppercase tracking-tight">{tech}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
