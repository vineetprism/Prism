'use client';

import React from 'react';
import Image from 'next/image';

export default function ServiceHeroSection() {
    return (
        <section className="relative w-full h-[18rem] overflow-hidden bg-[#1F1F1F]">
            <Image
                src="/bg/bg.png"
                alt="Background"
                fill
                className="object-cover absolute inset-0 w-full h-full"
                priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Our Services
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4 drop-shadow-md">
                        Empowering businesses through practical technology, custom solutions, and execution that drives measurable growth. We design, build, and scale digital products that actually move revenue and efficiency.
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-[#1F1F1F] z-5"></div>
        </section>
    );
}