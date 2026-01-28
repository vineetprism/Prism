'use client';

import React from 'react';

export default function Lifecycle() {
    const steps = [
        { phase: "01", title: "The Deep Dive", subtitle: "Discovery", desc: "We map user personas, audit technical feasibility, and define Business KPIs before writing a line of code.", color: "bg-[#E92228]" },
        { phase: "02", title: "The Blueprint", subtitle: "Architecture", desc: <>UX wireframing and <span className="font-bold text-gray-900">dynamic website system architecture</span> modeling. We build a digital twin to validate scalability.</>, color: "bg-[#E92228]" },
        { phase: "03", title: "The Build", subtitle: "Agile Development", desc: "2-week iterative sprints. You see working demos every fortnight. No \"Black Box\" development.", color: "bg-[#E92228]" },
        { phase: "04", title: "The Evolution", subtitle: "Run & Optimize", desc: "Moving beyond SLAs to Experience Level Agreements (XLAs). We iterate based on data.", color: "bg-[#E92228]" }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-2">
                            From Vision to Evolution
                        </h2>
                        <p className="text-gray-500">The Delivery Lifecycle</p>
                    </div>

                    {/* Horizontal Process Flow */}
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((item, idx) => (
                                <div key={idx} className="relative text-center lg:text-left">
                                    {/* Step Circle */}
                                    <div className={`w-24 h-24 ${item.color} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg`}>
                                        <span className="text-white text-3xl font-bold font-heading">{item.phase}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 font-heading mb-1">{item.title}</h3>
                                    <p className="text-[#E92228] text-sm font-semibold mb-3">{item.subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
