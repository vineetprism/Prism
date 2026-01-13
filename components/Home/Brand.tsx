'use client';

import Image from 'next/image';
import { Brain, Award, Zap, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const stats = [
    {
        icon: Brain,
        value: 7,
        suffix: '+',
        label: 'Years of experience',
    },
    {
        icon: Award,
        value: 500,
        suffix: '+',
        label: 'Successful Projects Delivered',
    },
    {
        icon: Zap,
        value: 300,
        suffix: '+',
        label: 'Satisfied Clients Across Industries',
    },
    {
        icon: Target,
        value: 20,
        suffix: '+',
        label: 'Certifications in Technology',
    },
];

export default function Brand() {
    const [counts, setCounts] = useState<Record<number, number>>({ 0: 0, 1: 0, 2: 0, 3: 0 });

    const brands = [
        { name: 'Pentora', logo: '/icons/logo_9.webp' },
        { name: 'Google', logo: '/icons/logo_10.webp' },
        { name: 'Tipping Bridge', logo: '/icons/logo_1.webp' },
        { name: 'Encode Pro', logo: '/icons/logo_2.webp' },
        { name: 'CloudHasty', logo: '/icons/logo_3.webp' },
        { name: 'Meta', logo: '/icons/logo_5.webp' },
        { name: 'Hive8', logo: '/icons/logo_6.webp' },
        { name: 'Asti', logo: '/icons/logo_8.webp' },
        { name: 'Clutch', logo: '/icons/logo_11.webp' },
        { name: 'Gartner', logo: '/icons/logo_12.webp' },
        { name: 'Autobitnex', logo: '/icons/logo_4.webp' },
    ];

    useEffect(() => {
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const newCounts: Record<number, number> = {};
            stats.forEach((stat, index) => {
                newCounts[index] = Math.floor(stat.value * progress);
            });

            setCounts(newCounts);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <section className="w-full bg-gradient-to-b from-white to-red-50 py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6">
                <div className="mx-auto max-w-[1440px]">
                    <div className="text-center mb-4 sm:mb-6 md:mb-8">
                        <div className="inline-block bg-red-600 text-white px-3 sm:px-4 py-1 rounded text-xs sm:text-sm font-semibold mb-2">
                            Brand We Work With
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        freeMode={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={5000}
                        loop={true}
                        className="w-full"
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2.5,
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3.5,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {brands.map((brand, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm h-20 sm:h-24 md:h-28 lg:h-32 w-full flex items-center justify-center">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={100}
                                        height={40}
                                        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-red-50 via-pink-50 to-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 md:py-12">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <svg
                    className="absolute inset-0 w-full h-full opacity-5"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 800"
                >
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-red-600" />
                        </pattern>
                    </defs>
                    <rect width="1440" height="800" fill="url(#dots)" />
                </svg>

                <div className="mx-auto max-w-[1440px] relative z-10">
                    <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:grid-cols-3 items-start">
                        <div className="xl:col-span-2">
                            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
                                {stats?.map((stat, index) => {
                                    const IconComponent = stat.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-4 sm:py-12 md:py-14 lg:py-16 shadow-md overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left"
                                        >
                                            <div className="inline-flex p-2 sm:p-2.5 md:p-3 rounded-full bg-red-50 transition-colors duration-300 group-hover:bg-red-100 mb-4 sm:mb-0 sm:absolute sm:top-4 sm:top-5 md:top-6 sm:left-4 sm:left-5 md:left-6">
                                                <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-500" />
                                            </div>
                                            <div className="mb-2 sm:mb-3 sm:pt-20 sm:pt-24 md:pt-28">
                                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                                    {counts[index]}{stat.suffix}
                                                </p>
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base font-medium leading-snug">{stat.label}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="xl:col-span-1">
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group w-full h-auto">
                                <Image
                                    src="/about/brand.webp"
                                    alt="Team of skilled professionals"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-red-600/40 to-transparent opacity-80"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                                        A growing network of skilled professionals shaping the future
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}