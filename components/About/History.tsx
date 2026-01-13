'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { ContactModal } from '../Modal/ContactModal';

export default function AboutSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    return (
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-12 bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex flex-col justify-start">
                        <div className="mb-6 sm:mb-8 flex items-center gap-2">
                            <span className="text-gray-600 text-sm sm:text-base font-medium">About</span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-full text-xs sm:text-sm font-bold">
                                <span>Prism Infoways</span>
                                <span className="text-lg">🔥</span>
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 sm:mb-10 leading-tight">
                            We Offer You
                            <br />
                            Versatile Solution
                        </h2>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl text-justify">
                            At Prism Infoways Private Limited, we are dedicated to driving digital transformation through innovative web development, app development, digital marketing, and cloud solutions. Our team of experts leverages cutting-edge technology to deliver tailored solutions that meet the unique needs of each client. With a commitment to excellence and client satisfaction, we help businesses of all sizes achieve their digital goals and thrive in a competitive landscape.
                        </p>

                        <div className="mt-10 sm:mt-12">
                            <button
                                className="inline-flex items-center justify-center gap-2 w-fit px-10 py-3 rounded-full 
                                border-2 text-white font-bold text-md bg-red-500 hover:bg-white hover:text-red-500 
                                hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
                                onClick={() => setIsContactModalOpen(true)}
                                type="button"
                                aria-label="Get Free Consultation"
                            >
                                Get Free Consultation
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/about/about1.webp"
                            alt="Prism Infoways Solutions"
                            width={1700}
                            height={1120}
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>

            <button className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-red-600 text-white shadow-lg hover:shadow-xl transition-all 
            duration-300 flex items-center justify-center hover:scale-110 z-40"
                type="button"
                aria-label="Scroll to Contact Section"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
            <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
        </section>
    );
}