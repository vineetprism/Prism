'use client';

import React from 'react';

const partners = [
    { category: "GRC Automation", names: ["Drata", "Vanta"] },
    { category: "vCISO OS", names: ["Cynomi", "RealCISO"] },
    { category: "Identity & Access", names: ["Okta", "Microsoft Entra ID"] },
    { category: "Vulnerability Mgmt", names: ["Tenable", "Qualys"] },
    { category: "SaaS Security", names: ["AppOmni"] },
];

export default function TechStack() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-500 font-semibold mb-8 uppercase tracking-widest text-sm">
                    Integrated with Best-in-Class Security Automation
                </p>
                <div className="flex flex-wrap justify-center gap-y-8 gap-x-12 md:gap-x-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {/* 
                        Ideally we would use SVGs here. 
                        Since we don't have assets, we will use styled text placeholders that look professional. 
                     */}
                    {partners.map((group, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="flex gap-4 items-center">
                                {group.names.map((name, j) => (
                                    <span key={j} className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-[#E92228] transition-colors duration-300 font-heading">
                                        {name}
                                    </span>
                                ))}
                            </div>
                            <span className="text-[10px] uppercase font-bold text-gray-300 group-hover:text-black transition-colors">{group.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
