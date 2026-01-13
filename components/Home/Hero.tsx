'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Plus } from 'lucide-react';
import { ContactModal } from '../Modal/ContactModal';

type Props = {
    badge?: string;
    title?: string;
    description?: string;
    ctaHref?: string;
    imageSrc?: string;
    imageSrc1?: string;
};

const CompanyBadge: React.FC<{ badge?: string }> = ({ badge = 'Are Prism Infoways Pvt Ltd' }) => (
    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
        <span className="text-xl sm:text-2xl" aria-hidden>👋</span>
        <span className="text-xs sm:text-sm text-gray-600">Hi We</span>
        <span className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
            {badge}
        </span>
    </div>
);

export default function PrismAboutSection({
    badge = 'Are Prism Infoways Pvt Ltd',
    title = 'Crafting Scalable IT Solutions for Your Business Growth',
    description = 'At Prism Infoways, we specialize in providing tailored solutions for various industries, ensuring your business thrives in a competitive market. Our expertise spans across industries, ensuring your business thrives in a competitive market. Our team of experienced professionals is dedicated to delivering innovative solutions that drive growth and success.',
    imageSrc1 = '/hero/Hero.webp',
    imageSrc = '/hero/hero.png',
}: Props) {
    const starList = useMemo(() => Array.from({ length: 5 }), []);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className="w-full bg-white py-2 sm:py-4 md:py-6 lg:py-8">
            <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-8xl">
                <div className="flex flex-col xl:grid xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
                    <div className="bg-red-50 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 h-full flex flex-col justify-center">
                        <CompanyBadge badge={badge} />

                        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-2 sm:mb-3">
                            {title}
                        </h2>

                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-4 text-justify">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4">
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                aria-label="Get Free Consultation"
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full 
                                border-2 text-white font-bold text-xs sm:text-sm md:text-base bg-red-500 hover:bg-white hover:text-red-500 
                                hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
                            >
                                <span className="whitespace-nowrap">GET FREE CONSULTATION</span>
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>

                            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                                <div className="flex items-center" aria-hidden>
                                    {starList.map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-sm sm:text-lg md:text-xl mr-0.5">★</span>
                                    ))}
                                </div>
                                <div className="flex items-baseline gap-1 sm:gap-2">
                                    <span className="text-red-600 font-bold text-sm sm:text-base">4.7</span>
                                    <span className="text-xs sm:text-sm text-gray-600">
                                        From <strong>100+</strong> reviews
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-0 aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto lg:h-full lg:min-h-[500px] xl:min-h-[600px]">
                        <div className="rounded-tl-xl sm:rounded-tl-2xl overflow-hidden shadow-lg bg-gray-800 relative h-full">
                            <div className="absolute inset-0">
                                <Image
                                    src={imageSrc1}
                                    alt="robot-hand"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                                    loading='lazy'
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        </div>

                        <div className="rounded-tr-xl sm:rounded-tr-2xl rounded-bl-[3rem] sm:rounded-bl-[5rem] md:rounded-bl-[6rem] lg:rounded-bl-[8rem] xl:rounded-bl-[10rem] overflow-hidden shadow-lg bg-[#bd202e] relative h-full flex flex-col">
                            <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white">
                                    150+
                                </h3>
                                <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-1">
                                    Worldwide
                                </p>
                                <p className="text-red-100 text-xs sm:text-sm md:text-base mt-1 text-center px-2">
                                    Country has lots of clients
                                </p>
                            </div>
                        </div>

                        <div className="rounded-bl-xl sm:rounded-bl-2xl rounded-tr-[3rem] sm:rounded-tr-[5rem] md:rounded-tr-[6rem] lg:rounded-tr-[8rem] xl:rounded-tr-[10rem] overflow-hidden shadow-lg bg-red-600 relative h-full flex items-center justify-center p-2 sm:p-4 md:p-6">
                            <div className="space-y-2 sm:space-y-3 w-full max-w-[180px] sm:max-w-[220px] text-center">
                                <div className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-red-500/20 rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-white/90 cursor-pointer hover:bg-red-500/30 transition mx-auto">
                                    <span className="text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                                        Data Security
                                    </span>
                                    <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
                                </div>
                                <div className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-red-500/20 rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-white/90 cursor-pointer hover:bg-red-500/30 transition mx-auto">
                                    <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
                                    <span className="text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                                        Web Development
                                    </span>
                                </div>
                                <div className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-red-500/20 rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-white/90 cursor-pointer hover:bg-red-500/30 transition mx-auto">
                                    <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
                                    <span className="text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                                        Analytics & Optimization
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-br-xl sm:rounded-br-2xl overflow-hidden shadow-lg relative h-full flex items-center justify-center">
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={imageSrc}
                                    alt="vr-man"
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-2">
                                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                                    <svg viewBox="0 0 120 120" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#ffffff" />
                                                <stop offset="50%" stopColor="#ffffff" />
                                                <stop offset="100%" stopColor="#ffffff" />
                                            </linearGradient>
                                        </defs>

                                        <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.15)" strokeWidth="10" fill="none" />

                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            stroke="url(#progressGradient)"
                                            strokeWidth="10"
                                            fill="none"
                                            strokeDasharray="264"
                                            strokeDashoffset="40"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white">
                                            85%
                                        </span>
                                    </div>
                                </div>

                                <p className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base text-center px-2 sm:px-4 max-w-[200px] sm:max-w-sm md:max-w-md leading-relaxed font-semibold drop-shadow-md">
                                    Capture 85% of top services and growth with unique offerings
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
        </section>
    );
}