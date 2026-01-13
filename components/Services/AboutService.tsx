'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ContactModal from '../Modal/ContactModal';

export default function HeroSection() {

    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className="relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-48" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
                    <div className="flex flex-col justify-center">
                        <div className="mb-6 flex items-center gap-2">
                            <span className="text-gray-700 font-medium">We Are</span>
                            <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 transition-colors duration-300">
                                IT Experts
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Custom IT Solutions <br />
                            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Designed for Your Growth</span>
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl text-justify">
                            We know that every business has its own challenges, goals, and vision. That’s why we create IT solutions tailored specifically to your needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <button onClick={() => setIsContactModalOpen(true)}
                                aria-label='Get Free Consultation'
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full 
                                border-2 text-white font-bold text-xs sm:text-sm md:text-base bg-red-500 hover:bg-white hover:text-red-500 
                                hover:border-red-500 transition-all duration-300 group/btn cursor-pointer">
                                <span>GET FREE CONSULTATION</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-lg lg:max-w-none h-[420px] sm:h-[480px] lg:h-full">
                            <Image
                                src="/service/service.webp"
                                alt="Professional with laptop and digital globe"
                                fill
                                className="object-cover rounded-lg drop-shadow-2xl"
                                loading='lazy'
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

            <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
        </section>
    );
}
