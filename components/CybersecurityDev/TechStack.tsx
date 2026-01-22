'use client';

import React from 'react';
import { Shield } from 'lucide-react';

const logos = [
    {
        name: 'CrowdStrike',
        category: 'EDR/Endpoint',
        svg: (
            <svg viewBox="0 0 120 40" className="w-full h-full">
                <text x="10" y="28" className="fill-current text-[14px] font-bold tracking-tight">CROWDSTRIKE</text>
            </svg>
        ),
    },
    {
        name: 'Microsoft Sentinel',
        category: 'SIEM',
        svg: (
            <svg viewBox="0 0 140 40" className="w-full h-full">
                <rect x="10" y="10" width="8" height="8" className="fill-current" />
                <rect x="20" y="10" width="8" height="8" className="fill-current" />
                <rect x="10" y="20" width="8" height="8" className="fill-current" />
                <rect x="20" y="20" width="8" height="8" className="fill-current" />
                <text x="35" y="24" className="fill-current text-[12px] font-semibold">Sentinel</text>
            </svg>
        ),
    },
    {
        name: 'Splunk',
        category: 'Analytics',
        svg: (
            <svg viewBox="0 0 100 40" className="w-full h-full">
                <text x="10" y="26" className="fill-current text-[16px] font-bold">splunk</text>
                <text x="62" y="26" className="fill-current text-[16px] font-bold">&gt;</text>
            </svg>
        ),
    },
    {
        name: 'Palo Alto Networks',
        category: 'Firewall/SOAR',
        svg: (
            <svg viewBox="0 0 160 40" className="w-full h-full">
                <text x="10" y="24" className="fill-current text-[11px] font-bold tracking-wide">PALO ALTO</text>
                <text x="10" y="34" className="fill-current text-[8px] font-medium tracking-wider">NETWORKS</text>
            </svg>
        ),
    },
    {
        name: 'SentinelOne',
        category: 'Ransomware Rollback',
        svg: (
            <svg viewBox="0 0 130 40" className="w-full h-full">
                <text x="10" y="26" className="fill-current text-[14px] font-bold">SentinelOne</text>
            </svg>
        ),
    },
];

export default function TechStackDesign5() {
    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block font-sans">
                        Technology Partners
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-heading mb-4">
                        Powered by the Best
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body">
                        We integrate with industry-leading security platforms to deliver comprehensive protection.
                    </p>
                </div>

                {/* Circular Orbit Layout */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Center Hub */}
                    <div className="relative w-full aspect-square max-w-2xl mx-auto">
                        {/* Orbital Rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E92228]/20"></div>
                        <div className="absolute inset-8 rounded-full border border-[#E92228]/10"></div>

                        {/* Center Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#E92228] to-[#bd202e] rounded-full flex items-center justify-center shadow-2xl shadow-[#E92228]/30 z-10">
                            <div className="text-center">
                                <Shield className="w-16 h-16 text-white mx-auto mb-2" />
                                <p className="text-white font-bold text-lg font-heading">Security</p>
                                <p className="text-white/80 text-sm">Ecosystem</p>
                            </div>
                        </div>

                        {/* Orbiting Partner Cards */}
                        {logos.map((logo, idx) => {
                            const angle = (idx * 360) / logos.length;
                            const radius = 45; // percentage from center
                            const x = 50 + radius * Math.cos((angle - 90) * Math.PI / 180);
                            const y = 50 + radius * Math.sin((angle - 90) * Math.PI / 180);

                            return (
                                <div
                                    key={idx}
                                    className="absolute group"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    {/* Connection Line */}
                                    <div
                                        className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-[#E92228]/30 to-transparent origin-left pointer-events-none"
                                        style={{
                                            width: '100px',
                                            transform: `rotate(${angle + 90}deg) translateX(-50%)`,
                                        }}
                                    ></div>

                                    {/* Partner Card */}
                                    <div className="relative bg-white rounded-2xl p-4 lg:p-6 border-2 border-[#D1D1D1] hover:border-[#E92228] transition-all duration-300 hover:shadow-xl hover:shadow-[#E92228]/20 hover:scale-110 w-32 lg:w-40">
                                        <div className="w-full h-8 lg:h-10 mb-2 text-gray-600 group-hover:text-[#E92228] transition-colors">
                                            {logo.svg}
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-medium text-center group-hover:text-[#E92228] transition-colors">
                                            {logo.category}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center gap-8">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-[#E92228] font-heading mb-1">50+</p>
                            <p className="text-gray-600 text-sm">Integrations</p>
                        </div>
                        <div className="h-12 w-px bg-[#D1D1D1]"></div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-[#E92228] font-heading mb-1">24/7</p>
                            <p className="text-gray-600 text-sm">Monitoring</p>
                        </div>
                        <div className="h-12 w-px bg-[#D1D1D1]"></div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-[#E92228] font-heading mb-1">5</p>
                            <p className="text-gray-600 text-sm">Top Vendors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}