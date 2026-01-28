'use client';

import React from 'react';
import { Rocket, Building2, ChevronRight } from 'lucide-react';

export default function Audience() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            Tailored CMS Website Development Solutions
                        </h2>
                        <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">Built for your scale with <span className="font-bold text-gray-900">cms website development company in India</span> expertise across every business stage.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card A - Startups & SMEs */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300 group">
                            <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Rocket className="w-4 h-4" />
                                Startups & SMEs
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                                Agility & Growth
                            </h3>

                            <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                Lightweight, cost-effective CMS solutions (<span className="font-semibold">Laravel with Filament V3, Strapi, Payload CMS</span>) that scale with your business without enterprise overhead.
                            </p>


                        </div>

                        {/* Card B - Enterprise & Public Sector */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300 group">
                            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Building2 className="w-4 h-4" />
                                Enterprise & Public Sector
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                                Governance & Complexity
                            </h3>

                            <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                Robust DXP implementations (<span className="font-semibold">Sitecore, Adobe AEM, Drupal</span>) designed for complex compliance needs, global content supply chains, and multi-region governance.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
