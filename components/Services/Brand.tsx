'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

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

export default function BrandServiceSlider(): React.JSX.Element {
    return (
        <section className="w-full bg-gradient-to-b from-white to-red-50 py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6">
            <div className="mx-auto max-w-[1440px]">
                <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        Brands We <span className='text-red-500'>Work With</span>
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
                        pauseOnMouseEnter: true,
                    }}
                    speed={5000}
                    loop={true}
                    className="w-full"
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        480: { slidesPerView: 2.5, spaceBetween: 12 },
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        768: { slidesPerView: 3.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 24 },
                        1280: { slidesPerView: 5, spaceBetween: 30 },
                        1440: { slidesPerView: 5, spaceBetween: 30 },
                    }}
                >
                    {brands.map((brand, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="flex items-center justify-center"
                            style={{ width: 'auto' }}
                        >
                            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm h-24 sm:h-28 md:h-32 w-36 sm:w-40 md:w-44 flex items-center justify-center">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={140}
                                    height={48}
                                    className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                                    loading='lazy'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
