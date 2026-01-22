'use client';

import React from 'react';
import { ArrowRight, Shield, Lock, Zap, Activity, CheckCircle2, Wifi, Server, Database } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Rich Gradient Mesh Background */}
            <div className="absolute inset-0 z-0">
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100" />

                {/* Aurora Mesh Gradients */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* Large Red Glow - Top Right */}
                    <div className="absolute -top-20 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-[#E92228]/20 via-[#E92228]/10 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />

                    {/* Pink/Magenta Accent - Center */}
                    <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-pink-200/40 via-rose-100/30 to-transparent rounded-full blur-[80px]" />

                    {/* Blue Accent - Bottom Left */}
                    <div className="absolute bottom-0 -left-20 w-[700px] h-[700px] bg-gradient-to-tr from-blue-200/30 via-indigo-100/20 to-transparent rounded-full blur-[100px]" />

                    {/* Orange/Warm Accent - Right Side */}
                    <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-orange-100/30 via-amber-50/20 to-transparent rounded-full blur-[80px]" />

                    {/* Purple Accent - Top Left */}
                    <div className="absolute -top-40 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-violet-200/20 to-transparent rounded-full blur-[60px]" />
                </div>

                {/* Animated Network Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="network-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="1.5" fill="#E92228" />
                            <circle cx="0" cy="0" r="1" fill="#E92228" opacity="0.5" />
                            <circle cx="100" cy="0" r="1" fill="#E92228" opacity="0.5" />
                            <circle cx="0" cy="100" r="1" fill="#E92228" opacity="0.5" />
                            <circle cx="100" cy="100" r="1" fill="#E92228" opacity="0.5" />
                            <line x1="50" y1="50" x2="0" y2="0" stroke="#E92228" strokeWidth="0.3" opacity="0.3" />
                            <line x1="50" y1="50" x2="100" y2="0" stroke="#E92228" strokeWidth="0.3" opacity="0.3" />
                            <line x1="50" y1="50" x2="0" y2="100" stroke="#E92228" strokeWidth="0.3" opacity="0.3" />
                            <line x1="50" y1="50" x2="100" y2="100" stroke="#E92228" strokeWidth="0.3" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network-grid)" />
                </svg>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full animate-float-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${4 + Math.random() * 8}px`,
                                height: `${4 + Math.random() * 8}px`,
                                background: i % 3 === 0 ? 'rgba(233, 34, 40, 0.15)' : 'rgba(100, 116, 139, 0.1)',
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${8 + Math.random() * 6}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Glowing Lines - Decorative */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E92228]/20 to-transparent" />
                <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="min-h-screen flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20">

                        {/* Left Column - Copy & CTA */}
                        <div className="space-y-8 text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md shadow-lg shadow-slate-200/50 border border-white px-5 py-2.5 rounded-full">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#E92228]" />
                                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#E92228] animate-ping opacity-75" />
                                </div>
                                <span className="text-slate-700 text-sm font-semibold tracking-wide">
                                    24/7 Managed Detection & Response
                                </span>
                            </div>

                            {/* H1 Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] font-heading">
                                Enterprise-Grade{' '}
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] via-[#ff4d4d] to-[#E92228] animate-gradient-x">
                                        Cyber Resilience.
                                    </span>
                                </span>
                                <br />
                                <span className="text-slate-800">Zero Complexity.</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-body">
                                24/7 Managed Detection and Response (MDR) powered by{' '}
                                <span className="text-[#E92228] font-bold">Agentic AI</span>.
                                We stop the threats that bypass traditional defenses so you can focus on growth, not breaches.
                            </p>

                            {/* CTA Button */}
                            <div className="space-y-5">
                                <button
                                    onClick={onOpenModal}
                                    aria-label="Get your security assessment"
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E92228] text-white text-base font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-xl shadow-[#E92228]/25 cursor-pointer font-poppins hover:scale-105"
                                >
                                    Get Your Security Assessment
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#E92228] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </button>

                                {/* Trust Signal */}
                                <p className="text-slate-500 text-sm font-medium flex items-center justify-center lg:justify-start gap-2">
                                    <Shield className="w-4 h-4 text-[#E92228]" />
                                    Protecting against the{' '}
                                    <span className="text-slate-900 font-bold">$4.88M</span>{' '}
                                    average cost of a breach.
                                </p>
                            </div>

                            {/* Compliance Badges */}
                            <div className="flex flex-wrap gap-4 lg:gap-6 pt-4 justify-center lg:justify-start">
                                {['SOC2 Compliant', 'HIPAA Ready', 'ISO 27001', 'PCI-DSS'].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/50">
                                        <CheckCircle2 className="w-4 h-4 text-[#E92228]" />
                                        <span className="text-slate-700 text-xs font-semibold">{badge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Premium 3D Network Visualization */}
                        <div className="relative flex items-center justify-center lg:justify-end">
                            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]">

                                {/* Outer Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#E92228]/10 via-transparent to-blue-500/10 rounded-full blur-3xl scale-110" />

                                {/* Animated Outer Ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200/60 animate-[spin_40s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#E92228] rounded-full shadow-lg shadow-[#E92228]/50" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-slate-400 rounded-full" />
                                </div>

                                {/* Middle Ring with Network Nodes */}
                                <div className="absolute inset-8 sm:inset-12 lg:inset-14 rounded-full border border-[#E92228]/30 animate-[spin_25s_linear_infinite_reverse]">
                                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-8 h-8 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center"
                                            style={{
                                                top: '50%',
                                                left: '50%',
                                                transform: `rotate(${deg}deg) translateX(${i % 2 === 0 ? '140px' : '130px'}) rotate(-${deg}deg) translate(-50%, -50%)`,
                                            }}
                                        >
                                            {i === 0 && <Server className="w-4 h-4 text-[#E92228]" />}
                                            {i === 1 && <Database className="w-4 h-4 text-slate-600" />}
                                            {i === 2 && <Wifi className="w-4 h-4 text-blue-500" />}
                                            {i === 3 && <Shield className="w-4 h-4 text-[#E92228]" />}
                                            {i === 4 && <Lock className="w-4 h-4 text-slate-600" />}
                                            {i === 5 && <Activity className="w-4 h-4 text-green-500" />}
                                        </div>
                                    ))}
                                </div>

                                {/* Inner Ring */}
                                <div className="absolute inset-20 sm:inset-24 lg:inset-28 rounded-full bg-gradient-to-br from-[#E92228]/5 to-transparent border border-[#E92228]/20" />

                                {/* Central Shield - Premium Glass Card */}
                                <div className="absolute inset-24 sm:inset-32 lg:inset-36 rounded-3xl overflow-hidden">
                                    {/* Glass Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50 backdrop-blur-xl" />
                                    <div className="absolute inset-0 bg-white/80" />

                                    {/* Inner Shadow */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(233,34,40,0.1)]" />

                                    {/* Shield Content */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="relative">
                                            <Shield className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#E92228] drop-shadow-lg" strokeWidth={1.5} />
                                            <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-slate-800" strokeWidth={2} />

                                            {/* Pulse Ring */}
                                            <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#E92228]" style={{ animationDuration: '2s' }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Info Cards with Glass Effect */}
                                <div className="absolute -top-2 right-4 sm:right-8 lg:right-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-100/80 px-4 py-3 flex items-center gap-3 animate-float-slow">
                                    <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                                        <Activity className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 text-sm font-bold">24/7 Active</p>
                                        <p className="text-slate-500 text-xs">Real-time Monitoring</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 -left-4 sm:left-0 lg:-left-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-100/80 px-4 py-3 flex items-center gap-3 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                                    <div className="w-11 h-11 bg-gradient-to-br from-[#E92228] to-[#ff4d4d] rounded-xl flex items-center justify-center shadow-lg shadow-[#E92228]/30">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 text-sm font-bold">&lt;1 Minute</p>
                                        <p className="text-slate-500 text-xs">Threat Detection</p>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 -right-4 sm:-right-2 lg:-right-10 -translate-y-1/2 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-100/80 px-4 py-3 flex items-center gap-3 animate-float-slow" style={{ animationDelay: '0.75s' }}>
                                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <Shield className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 text-sm font-bold">403% ROI</p>
                                        <p className="text-slate-500 text-xs">Proven Returns</p>
                                    </div>
                                </div>

                                {/* Connection Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 520">
                                    <defs>
                                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#E92228" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#E92228" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    {/* Animated connecting lines */}
                                    <line x1="260" y1="180" x2="400" y2="80" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
                                    <line x1="260" y1="340" x2="120" y2="440" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
                                    <line x1="340" y1="260" x2="480" y2="260" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Transition */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="#1a1a1a" />
                </svg>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes float-particle {
                    0%, 100% { 
                        transform: translateY(0) translateX(0) scale(1); 
                        opacity: 0.6;
                    }
                    25% { 
                        transform: translateY(-20px) translateX(10px) scale(1.1); 
                        opacity: 0.8;
                    }
                    50% { 
                        transform: translateY(-10px) translateX(-5px) scale(0.9); 
                        opacity: 0.5;
                    }
                    75% { 
                        transform: translateY(-25px) translateX(5px) scale(1.05); 
                        opacity: 0.7;
                    }
                }
                @keyframes dash {
                    to { stroke-dashoffset: -20; }
                }
                @keyframes gradient-x {
                    0%, 100% { background-size: 200% 200%; background-position: left center; }
                    50% { background-size: 200% 200%; background-position: right center; }
                }
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
                .animate-float-particle {
                    animation: float-particle 10s ease-in-out infinite;
                }
                .animate-dash {
                    animation: dash 2s linear infinite;
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </section>
    );
}
