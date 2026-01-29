'use client';

import React from 'react';
import { Rocket, Building2 } from 'lucide-react';

export default function Audience() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Tailored Approach</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                            Built for Your Reality
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card A - Startups */}
                        <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-10 border-2 border-gray-100 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl">
                            <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Rocket className="w-4 h-4" />
                                High-Growth Startups & SMEs
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                Velocity & Scalability
                            </h3>

                            <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                You need to move fast. We build <span className="font-semibold">composable stacks</span> that allow you to pivot quickly, integrate with Stripe/HubSpot instantly, and look like a Fortune 500 company from <span className="text-[#E92228] font-semibold">Day 1</span>.
                            </p>


                        </div>

                        {/* Card B - Enterprise */}
                        <div className="group bg-gradient-to-br from-gray-900 to-[#0a0a0a] rounded-2xl p-8 lg:p-10 border-2 border-gray-800 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl">
                            <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                <Building2 className="w-4 h-4" />
                                Enterprise & Legacy Organizations
                            </div>

                            <h3 className="text-2xl font-bold text-white font-heading mb-2">
                                Risk Mitigation & Security
                            </h3>

                            <p className="text-gray-400 mb-6 font-body leading-relaxed">
                                You cannot afford downtime. Our <span className="font-semibold text-white">&quot;Strangler Fig&quot;</span> approach ensures <span className="text-[#E92228] font-semibold">zero operational disruption</span> while we pay down your technical debt and modernize your security posture.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
