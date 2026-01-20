'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Trophy, Star, Medal, Target, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(#E92228 1px, transparent 1px), linear-gradient(90deg, #E92228 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}></div>

            {/* Decorative Circles */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#E92228]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#F9F1F0] rounded-full blur-2xl"></div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="min-h-screen flex items-center py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#F9F1F0] border border-[#E92228]/20 px-4 py-2 rounded-full">
                                <Trophy className="w-4 h-4 text-[#E92228]" />
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-wide">
                                    Gaming & Gamification
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] font-heading text-[#1F1F1F]">
                                Engineered for Engagement:
                                <br />
                                <span className="text-[#E92228] text-3xl md:text-5xl lg:text-[54px]">High-Performance Gaming & Enterprise Gamification.</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-body">
                                Transform user interaction into revenue. From AAA-quality entertainment to high-fidelity corporate simulations, we build scalable gaming ecosystems designed to withstand the <strong className="text-[#E92228]">&quot;Thundering Herd&quot;</strong> and deliver measurable ROI.
                            </p>

                            {/* Stats Row */}
                            <div className="flex gap-8 py-4 border-y border-gray-100">
                                <div>
                                    <p className="text-3xl font-extrabold text-[#E92228]">$32B</p>
                                    <p className="text-sm text-gray-500">Market by 2029</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-[#1F1F1F]">99.9%</p>
                                    <p className="text-sm text-gray-500">Server Uptime</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-[#1F1F1F]">&lt;100ms</p>
                                    <p className="text-sm text-gray-500">Latency</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onOpenModal}
                                    className="cursor-pointer group inline-flex items-center justify-center gap-3 bg-[#E92228] text-white font-bold px-8 py-4 rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/20"
                                >
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="cursor-pointer group inline-flex items-center justify-center gap-2 px-6 py-4 text-[#1F1F1F] hover:text-[#E92228] transition-colors font-semibold border-2 border-gray-200 rounded-full hover:border-[#E92228]">
                                    View Case Studies
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Trust Signals */}
                            <div className="flex flex-wrap gap-4">
                                {["Unity & Unreal Engine", "AWS GameLift"].map((signal, index) => (
                                    <div key={index} className="inline-flex items-center gap-2 text-gray-500 text-sm">
                                        <CheckCircle className="w-4 h-4 text-[#E92228]" />
                                        <span className="font-medium">{signal}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Visual - Achievement Leaderboard */}
                        <div className="relative hidden lg:block">
                            {/* Main Achievement Board */}
                            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#2d2d2d] rounded-3xl p-6 shadow-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#E92228] rounded-xl flex items-center justify-center">
                                            <Trophy className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Player Leaderboard</p>
                                            <p className="text-gray-400 text-xs">Live Stats</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-[#E92228]"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                </div>

                                {/* Leaderboard Entries */}
                                <div className="space-y-3">
                                    {[
                                        { rank: 1, name: "Enterprise App", score: "2.4M DAU", badge: "🥇", color: "from-yellow-500/20 to-transparent" },
                                        { rank: 2, name: "Mobile RPG", score: "1.8M Downloads", badge: "🥈", color: "from-gray-400/20 to-transparent" },
                                        { rank: 3, name: "Training Sim", score: "560% ROI", badge: "🥉", color: "from-orange-600/20 to-transparent" },
                                    ].map((entry) => (
                                        <div key={entry.rank} className={`flex items-center gap-4 bg-gradient-to-r ${entry.color} bg-white/5 rounded-xl p-4`}>
                                            <span className="text-2xl">{entry.badge}</span>
                                            <div className="flex-1">
                                                <p className="text-white font-semibold">{entry.name}</p>
                                                <p className="text-gray-400 text-sm">{entry.score}</p>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                                    <div className="text-center">
                                        <Users className="w-5 h-5 text-[#E92228] mx-auto mb-1" />
                                        <p className="text-white font-bold">50K+</p>
                                        <p className="text-gray-500 text-xs">Active</p>
                                    </div>
                                    <div className="text-center">
                                        <Target className="w-5 h-5 text-[#E92228] mx-auto mb-1" />
                                        <p className="text-white font-bold">42%</p>
                                        <p className="text-gray-500 text-xs">D7 Retention</p>
                                    </div>
                                    <div className="text-center">
                                        <TrendingUp className="w-5 h-5 text-[#E92228] mx-auto mb-1" />
                                        <p className="text-white font-bold">+127%</p>
                                        <p className="text-gray-500 text-xs">Growth</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Achievement Badges */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <Medal className="w-8 h-8 text-[#E92228]" />
                                    <div>
                                        <p className="font-bold text-[#1F1F1F] text-sm">Top Publisher</p>
                                        <p className="text-xs text-gray-500">Achievement Unlocked</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-[#E92228] rounded-2xl shadow-xl p-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <Star className="w-5 h-5 text-white fill-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">4.8 Rating</p>
                                        <p className="text-xs text-white/70">App Store</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
