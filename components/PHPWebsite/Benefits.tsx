'use client';

import React from 'react';

export default function Benefits() {
    const benefits = [
        { num: "01", title: "Economic Efficiency", desc: "Reduce development costs by 45% compared to Java/Python stacks. Access a global talent pool that prevents vendor lock-in and reduces recruitment risks." },
        { num: "02", title: "Elastic Scalability", desc: "Shatter the \"PHP doesn't scale\" myth. Our asynchronous queuing architectures (RabbitMQ/Horizon) support 50,000+ concurrent users per instance." },
        { num: "03", title: "Security Confidence", desc: "We implement \"Defense in Depth.\" With 70% of experts rating modern PHP security as \"High,\" we add layers of ORM protection, CSRF tokens, and automated vulnerability scanning." },
        { num: "04", title: "Rapid Velocity", desc: "Move from concept to deployment in weeks, not months. The rich ecosystem of Composer packages allows us to focus on unique business logic, not boilerplate." }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                            The PHP Advantage
                        </h2>
                    </div>

                    <div className="space-y-10">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-6 group hover:bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#E92228]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                                {/* Number Badge */}
                                <div className="shrink-0 w-16 h-16 bg-[#E92228]/10 rounded-xl flex items-center justify-center border-l-4 border-[#E92228] group-hover:bg-[#E92228]/20 transition-colors duration-300">
                                    <span className="text-2xl font-bold text-[#E92228] font-heading">{benefit.num}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-2 group-hover:text-[#E92228] transition-colors duration-300">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-body">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
