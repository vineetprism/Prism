'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export interface Service {
    id?: string;
    title?: string;
    slug?: string;
    description?: string; // HTML string
    image?: string;
    icon_image?: string;
    [key: string]: unknown;
}

interface CarouselServicesProps {
    services: Service[];
}

export default function CarouselServices({ services }: CarouselServicesProps) {
    if (!services || services.length === 0) {
        return null;
    }

    // Function to strip HTML tags for the description preview
    const stripHtml = (html: string) => {
        return html.replace(/<[^>]*>?/gm, '');
    };

    return (
        <div className="w-full py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        More Services
                    </h2>
                    {/* <p className="text-gray-600 text-sm">
                        Explore our range of services and find the one that best suits your needs.
                    </p> */}
                    <span className="block w-72 h-1 bg-red-600 mb-4 rounded"></span>
                    <p className="text-gray-600 text-sm">
                        Explore our range of services and find the one that best suits your needs.
                    </p>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.25}
                    loop={true}
                    speed={6000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="w-full pb-12 transition-timing-linear"
                >
                    {services.map((service, index) => {
                        const title = service.title || 'Service Title';
                        const description = service.description ? stripHtml(service.description).substring(0, 100) + '...' : 'No description available.';
                        const imageSrc = service.image || service.icon_image || '/logo/logo2.png';
                        const link = service.slug ? `/service_details/${service.slug}` : '#';

                        return (
                            <SwiperSlide key={service.id || index} className="h-auto">
                                <div className="group relative bg-[#FFFBF9] rounded-[2rem] border border-red-100 p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-red-200">
                                    {/* Image Container */}
                                    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl bg-white">
                                        <Image
                                            src={imageSrc}
                                            alt={title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-red-600 mb-4 line-clamp-2">
                                            {title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {description}
                                        </p>

                                        {/* Button */}
                                        <Link
                                            href={link}
                                            className="inline-flex items-center justify-center bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-red-600 w-fit mt-auto group-hover:shadow-md"
                                        >
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <style jsx global>{`
                    .swiper-wrapper {
                        transition-timing-function: linear !important;
                    }
                `}</style>
            </div>
        </div>
    );
}
