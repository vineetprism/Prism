'use client';

import React from 'react';
import { ArrowRight, CheckCircle, ArrowDown, Smartphone, Zap, Code2, Layers, RefreshCw } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-[#FEF7F7] to-white overflow-hidden">
            {/* Unique Background: Gradient Mesh + Floating React Atoms */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Mesh Blobs */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#E92228]/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-[#F9F1F0] rounded-full blur-[120px]"></div>
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#E92228]/3 rounded-full blur-[80px]"></div>

                {/* Floating React Atom Symbols */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                    {/* React Atom 1 - Top Right */}
                    <g transform="translate(950, 150)" opacity="0.08">
                        <circle cx="0" cy="0" r="8" fill="#E92228" />
                        <ellipse cx="0" cy="0" rx="40" ry="15" fill="none" stroke="#E92228" strokeWidth="1.5" />
                        <ellipse cx="0" cy="0" rx="40" ry="15" fill="none" stroke="#E92228" strokeWidth="1.5" transform="rotate(60)" />
                        <ellipse cx="0" cy="0" rx="40" ry="15" fill="none" stroke="#E92228" strokeWidth="1.5" transform="rotate(120)" />
                    </g>

                    {/* React Atom 2 - Bottom Left */}
                    <g transform="translate(150, 600)" opacity="0.06">
                        <circle cx="0" cy="0" r="6" fill="#E92228" />
                        <ellipse cx="0" cy="0" rx="30" ry="12" fill="none" stroke="#E92228" strokeWidth="1" />
                        <ellipse cx="0" cy="0" rx="30" ry="12" fill="none" stroke="#E92228" strokeWidth="1" transform="rotate(60)" />
                        <ellipse cx="0" cy="0" rx="30" ry="12" fill="none" stroke="#E92228" strokeWidth="1" transform="rotate(120)" />
                    </g>

                    {/* React Atom 3 - Center Right (larger, faded) */}
                    <g transform="translate(1100, 450)" opacity="0.04">
                        <circle cx="0" cy="0" r="10" fill="#E92228" />
                        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="#E92228" strokeWidth="2" />
                        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="#E92228" strokeWidth="2" transform="rotate(60)" />
                        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="#E92228" strokeWidth="2" transform="rotate(120)" />
                    </g>

                    {/* Orbiting Electrons (animated feel with position) */}
                    <circle cx="990" cy="150" r="4" fill="#E92228" opacity="0.15" />
                    <circle cx="910" cy="165" r="3" fill="#E92228" opacity="0.12" />
                    <circle cx="950" cy="110" r="3" fill="#E92228" opacity="0.1" />
                </svg>

                {/* Soft Gradient Overlays */}
                <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="min-h-screen flex items-center py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#F9F1F0] border border-[#E92228]/20 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-[#E92228] rounded-full animate-pulse"></div>
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-wide">
                                    Strategic React Native Solutions
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] font-heading text-[#1F1F1F]">
                                Native Fidelity at Market Speed:
                                <br />
                                <span className="text-[#E92228]">The Strategic React Native Advantage.</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-body">
                                Deliver high-performance enterprise mobile experiences with a unified codebase.
                                Reduce TCO by <strong className="text-[#E92228]">45%</strong> and accelerate feature deployment by{' '}
                                <strong className="text-[#E92228]">2.5x</strong> without sacrificing security or scale.
                            </p>

                            {/* Stats Row */}
                            <div className="flex gap-8 py-4 border-y border-gray-100">
                                <div>
                                    <p className="text-3xl font-extrabold text-[#E92228]">45%</p>
                                    <p className="text-sm text-gray-500">TCO Reduction</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-[#1F1F1F]">2.5x</p>
                                    <p className="text-sm text-gray-500">Faster Deploy</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-[#1F1F1F]">95%</p>
                                    <p className="text-sm text-gray-500">Code Shared</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onOpenModal}
                                    className="cursor-pointer group inline-flex items-center justify-center gap-3 bg-[#E92228] text-white font-bold px-8 py-4 rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/20"
                                >
                                    Start Your Architectural Assessment
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <a href="#business-impact" className="cursor-pointer group inline-flex items-center justify-center gap-2 px-6 py-4 text-[#1F1F1F] hover:text-[#E92228] transition-colors font-semibold border-2 border-gray-200 rounded-full hover:border-[#E92228]">
                                    Explore the Economic Case
                                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </a>
                            </div>

                            {/* Trust Signals */}
                            <div className="flex flex-wrap gap-4">
                                {["JSI & Fabric Architecture", "Enterprise Security"].map((signal, index) => (
                                    <div key={index} className="inline-flex items-center gap-2 text-gray-500 text-sm">
                                        <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                        <span className="font-medium">{signal}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Visual - Cross-Platform Bridge */}
                        <div className="relative hidden lg:block">
                            {/* Central Bridge Visual */}
                            <div className="relative">
                                {/* Bridge Connection Line */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-2 bg-gradient-to-r from-[#E92228] via-[#E92228]/50 to-[#E92228] rounded-full z-0"></div>

                                {/* iOS Device */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                                    <div className="bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 w-[140px]">
                                        <div className="bg-gradient-to-b from-[#F9F1F0] to-white rounded-2xl p-4 aspect-[9/16]">
                                            <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-3"></div>
                                            <div className="space-y-2">
                                                <div className="h-3 bg-[#E92228]/20 rounded-full w-full"></div>
                                                <div className="h-3 bg-[#E92228]/10 rounded-full w-3/4"></div>
                                                <div className="h-12 bg-white rounded-lg border border-gray-100 mt-3"></div>
                                                <div className="h-12 bg-white rounded-lg border border-gray-100"></div>
                                            </div>
                                        </div>
                                        <p className="text-center text-xs font-bold text-gray-400 mt-2">iOS</p>
                                    </div>
                                </div>

                                {/* Android Device */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                                    <div className="bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 w-[140px]">
                                        <div className="bg-gradient-to-b from-[#F9F1F0] to-white rounded-2xl p-4 aspect-[9/16]">
                                            <div className="flex gap-1 justify-center mb-3">
                                                <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                                                <div className="w-4 h-2 bg-gray-200 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-3 bg-[#E92228]/20 rounded-full w-full"></div>
                                                <div className="h-3 bg-[#E92228]/10 rounded-full w-3/4"></div>
                                                <div className="h-12 bg-white rounded-lg border border-gray-100 mt-3"></div>
                                                <div className="h-12 bg-white rounded-lg border border-gray-100"></div>
                                            </div>
                                        </div>
                                        <p className="text-center text-xs font-bold text-gray-400 mt-2">Android</p>
                                    </div>
                                </div>

                                {/* Center Code Block */}
                                <div className="relative mx-auto w-[200px] z-20">
                                    <div className="bg-[#1F1F1F] rounded-2xl p-4 shadow-2xl">
                                        <div className="flex gap-1.5 mb-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#E92228]"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                        <pre className="text-[10px] font-mono text-gray-300 leading-relaxed">
                                            <code>
                                                <span className="text-[#E92228]">import</span> React<br />
                                                <span className="text-[#E92228]">from</span> <span className="text-green-400">&apos;react-native&apos;</span><br /><br />
                                                <span className="text-blue-400">{"<View>"}</span><br />
                                                {"  "}<span className="text-purple-400">{"<Text>"}</span><br />
                                                {"    "}One Codebase<br />
                                                {"  "}<span className="text-purple-400">{"</Text>"}</span><br />
                                                <span className="text-blue-400">{"</View>"}</span>
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -top-8 right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#E92228]/10 rounded-xl flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-[#E92228]" />
                                    </div>
                                    <div>
                                        <p className="text-[#E92228] font-bold text-lg">JSI</p>
                                        <p className="text-gray-500 text-xs">New Arch</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#E92228]/10 rounded-xl flex items-center justify-center">
                                        <Layers className="w-5 h-5 text-[#E92228]" />
                                    </div>
                                    <div>
                                        <p className="text-[#E92228] font-bold text-lg">Fabric</p>
                                        <p className="text-gray-500 text-xs">Renderer</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sync Badge */}
                            <div className="absolute bottom-0 right-0 bg-[#E92228] rounded-full p-3 shadow-lg">
                                <RefreshCw className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '3s' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
