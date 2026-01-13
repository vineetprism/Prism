'use client';

import React from 'react';
import Image from 'next/image';

export default function ServicesDetailsHeroSection({ services }: { services: { title?: string; image?: string; short_description?: string;[key: string]: unknown } }) {
    return (
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[45rem] overflow-hidden">
            {services?.image && (
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={services?.image}
                        alt={services?.title || 'Service Hero'}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        loading='lazy'
                    />
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%]"></div>

            <div className="absolute inset-0 flex flex-col justify-center z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 drop-shadow-sm leading-tight">
                        {services?.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed drop-shadow-sm text-justify">
                        {services?.short_description}
                    </p>
                </div>
            </div>
        </section>
    );
}