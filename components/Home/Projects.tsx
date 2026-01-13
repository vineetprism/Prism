'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    description: string;
    icon_image: string;
    category: string;
    slug: string
}

export default function Projects({ projects = [] }: { projects?: Project[] }) {

    if (!projects.length) return <div>No projects yet.</div>;

    return (
        <section className="relative w-full bg-gradient-to-b from-white via-red-50/30 to-white px-6 py-16 sm:px-8 lg:px-12">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-[1440px] relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-red-600">Projects</span>
                    </h2>
                    <p className="text-lg font-semibold text-gray-700 mb-3 italic">
                        Transforming Ideas into Reality – Showcase of Our Work.
                    </p>
                    <p className="text-gray-600 text-base max-w-2xl mx-auto">
                        Explore our portfolio of innovative projects that demonstrate our expertise and commitment to excellence.
                    </p>
                </div>

                {/* Projects Swiper */}
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={24}
                        slidesPerView="auto"
                        freeMode={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={6000}
                        loop={true}
                        className="w-full"
                        breakpoints={{
                            320: {
                                slidesPerView: 'auto',
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1440: {
                                slidesPerView: 3.5,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id} className="h-auto flex justify-center">
                                <div className="w-full max-w-[320px] mx-auto sm:max-w-none">
                                    <ProjectCard project={project} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const router = useRouter();
    const imgSrc = project?.icon_image;

    return (
        <div className="group relative h-full rounded-3xl overflow-hidden shadow-sm bg-white border border-red-100">
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-200">
                <Link href={`/portfolio_details/${project?.slug}`} aria-label="portfolio details page">
                    <Image
                        src={imgSrc}
                        alt={project?.title}
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </Link>
                <div className="absolute inset-0 cursor-pointer bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="relative p-6 flex flex-col h-full border-t border-red-100">
                <div className="inline-block w-fit mb-3">
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {project?.category}
                    </span>
                </div>

                <Link href={`/portfolio_details/${project?.slug}`} aria-label="portfolio details page">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 cursor-pointer">
                        {project?.title}
                    </h3>
                </Link>

                <Link href={`/portfolio_details/${project?.slug}`} aria-label="portfolio details page">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                        {project?.description}
                    </p>
                </Link>

                <button
                    onClick={() => router.push(`/portfolio_details/${project?.slug}`)}
                    aria-label="portfolio details page"
                    className="inline-flex items-center justify-center gap-2 w-fit px-6 py-2 rounded-full border-2 text-white font-semibold text-sm bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300 group/btn cursor-pointer">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </div>
    );
}
