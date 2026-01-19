'use client';

import React from 'react';

const techStack = {
    mobile: ['Swift', 'Kotlin', 'Flutter', 'React Native'],
    backend: ['Node.js', 'Python', 'Java', 'Go'],
    cloud: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    design: ['Figma', 'Adobe XD'],
    security: ['OAuth 2.0', 'OpenID Connect', 'RASP', 'Biometrics']
};

export default function TechStack() {
    return (
        <section className="py-20 lg:py-24 bg-[#F9F1F0] relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-px w-12 bg-[#E92228]"></div>
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-[0.2em]">
                                The Toolkit
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Technology Stack
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-md font-body">
                        Industry-leading technologies chosen for performance, security, and scalability.
                    </p>
                </div>

                {/* Tech Categories */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {Object.entries(techStack).map(([category, items], idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300"
                        >
                            <h4 className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-4 pb-3 border-b border-gray-100">
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-700 text-sm font-medium py-1.5 px-2 rounded bg-gray-50 hover:bg-[#E92228]/5 hover:text-[#E92228] transition-colors cursor-default"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Scrolling Ticker */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="overflow-hidden">
                        <div className="flex gap-12 animate-marquee whitespace-nowrap">
                            {[...Object.values(techStack).flat(), ...Object.values(techStack).flat()].map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-gray-400 text-lg font-medium hover:text-[#E92228] transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
