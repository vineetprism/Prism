'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Service {
    id: number;
    slug?: string;
    title?: string;
    short_description?: string;
    image?: string;
    icon_image?: string;
}

export default function Services({
    services = [],
    limit,
}: {
    services?: Service[];
    limit?: number;
}) {
    const list = Array.isArray(services) ? (limit ? services.slice(0, 10) : services) : [];



    return (
        <section className="relative w-full bg-gradient-to-b from-white via-orange-50/30 to-white px-6 py-12 sm:px-8 lg:px-12">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-[1440px] relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                        Our <span className="text-red-500">Services</span>
                    </h2>
                    <p className="text-lg font-semibold text-gray-700 mb-1 italic">
                        Delivering Digital Excellence – From Strategy to Execution.
                    </p>
                    <p className="text-gray-600 text-base max-w-2xl mx-auto">
                        At our company, we craft cutting-edge solutions that ensure a seamless digital journey from start to finish.
                    </p>
                </div>

                <div className="hidden 2xl:grid 2xl:grid-cols-5 2xl:gap-8">
                    {list?.map((service) => (
                        <ServiceCard key={service?.id} service={service} />
                    ))}
                </div>

                <div className="hidden xl:grid xl:grid-cols-4 2xl:hidden xl:gap-7">
                    {list?.map((service) => (
                        <ServiceCard key={service?.id} service={service} />
                    ))}
                </div>

                <div className="hidden md:grid md:grid-cols-2 xl:hidden md:gap-6">
                    {list?.map((service) => (
                        <ServiceCard key={service?.id} service={service} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:hidden gap-4">
                    {list?.map((service) => (
                        <ServiceCard key={service?.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: Service }) {
    const router = useRouter();
    const imageSrc =
        service?.image ||
        service?.icon_image ||
        '/logo/logo.webp'

    return (
        <div className="group relative h-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50/40 to-orange-50/40 backdrop-blur-sm px-6 py-4 shadow-sm overflow-hidden hover:bg-gradient-to-br hover:from-red-50/60 hover:to-orange-50/60">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
                {/* IMAGE at top */}
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-white/60 flex items-center justify-center">
                    <Link href={`/service_details/${service?.slug}`} aria-label={service?.title || 'service image'}>
                        <Image
                            src={imageSrc}
                            alt={service?.title || 'service image'}
                            width={800}
                            height={320}
                            className="object-cover w-full h-full"
                            loading='lazy'
                        />
                    </Link>
                </div>

                <Link href={`/service_details/${service?.slug}`} aria-label={service?.title || 'service image'}>
                    <h3 className="text-xl font-bold text-red-600 mb-2 group-hover:text-red-700 transition-colors duration-300">
                        {service?.title || 'Untitled Service'}
                    </h3>
                </Link>

                <Link href={`/service_details/${service?.slug}`} aria-label={service?.title || 'service image'}>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2 flex-grow text-justify line-clamp-3">
                        {service?.short_description}
                    </p>
                </Link>

                <div className="mt-1">
                    <button onClick={() => router.push(`/service_details/${service?.slug}`)} aria-label={service?.title || 'service image'}
                        className="inline-flex items-center justify-center gap-2 w-fit px-6 py-2 rounded-full 
                        border-2 text-white font-semibold text-sm bg-red-500 hover:bg-white hover:text-red-500 
                        hover:border-red-500 transition-all duration-300 group/btn cursor-pointer">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
}
