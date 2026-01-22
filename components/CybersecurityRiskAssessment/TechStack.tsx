'use client';

import React from 'react';

const techCategories = [
    { category: 'Recon & Scanning', tools: ['Nessus', 'Qualys', 'Nmap', 'OpenVAS'] },
    { category: 'Web & API', tools: ['Burp Suite Pro', 'OWASP ZAP', 'Postman'] },
    { category: 'Adversarial & C2', tools: ['Cobalt Strike', 'Metasploit', 'Sliver'] },
    { category: 'Cloud & Identity', tools: ['AWS Inspector', 'BloodHound', 'Mimikatz'] },
    { category: 'AI Security', tools: ['NIST AI RMF', 'PyRIT'] },
];

export default function TechStack() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-mono">
                            Our Arsenal
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                            Industry-Leading Tech Stack
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techCategories.map((cat, idx) => (
                            <div key={idx} className="group bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[#E92228]/30 hover:bg-white transition-all duration-300 hover:shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 font-heading mb-4 group-hover:text-[#E92228] transition-colors duration-300">
                                    {cat.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.tools.map((tool, toolIdx) => (
                                        <span key={toolIdx} className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-mono text-gray-600 grayscale hover:grayscale-0 hover:border-[#E92228]/30 hover:text-[#E92228] transition-all duration-300 cursor-default">
                                            {tool}
                                        </span>
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
