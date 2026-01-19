'use client';

import React from 'react';

export default function ServiceGrid() {
    const services = [
        {
            title: "Enterprise JAMstack Migration",
            description: "Transform your legacy. We migrate monolithic platforms (WordPress, Drupal) to decoupled architectures, preserving SEO equity via precision 301 redirects."
        },
        {
            title: "Headless CMS Integration",
            description: "Empower your content teams. We implement user-friendly platforms (Contentful, Strapi) that decouple content from code for ultimate marketing agility."
        },
        {
            title: "Next.js & React Applications",
            description: "Leverage Hybrid Rendering (SSG + SSR). We deliver the speed of static sites combined with the personalized functionality of dynamic applications."
        },
        {
            title: "Global Edge Deployment",
            description: "Your server is everywhere. We replicate content across hundreds of Edge nodes (AWS, Vercel), ensuring identical speeds for users in Tokyo and New York."
        },
        {
            title: "Progressive Web Apps (PWA)",
            description: "Blur the line between web and mobile. We engineer sites that function offline and offer app-like experiences without App Store friction."
        },
        {
            title: "Automated CI/CD & DevOps",
            description: "Eliminate deployment fear. We build robust pipelines where every line of code is automatically tested for bugs and performance before production."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-12">
                        <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Our Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E92228] group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading group-hover:text-[#E92228] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-body text-justify">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
