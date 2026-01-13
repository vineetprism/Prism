'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

type Testimonial = {
  id: number;
  full_name: string;
  company?: string;
  designation?: string;
  title?: string;
  content?: string;
  rating?: string | number;
  profile_image?: string;
  image?: string;
};

const DEFAULT_FALLBACK = '/mnt/data/9f196286-7f9c-4a34-8449-1c5018ae9f0f.png';

export default function Testimonials({
  testimonials = [],
}: {
  testimonials?: Testimonial[];
  limit?: number;
}): React.JSX.Element {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);


  const handleInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(Boolean(swiper.isBeginning));
    setIsEnd(Boolean(swiper.isEnd));
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(Boolean(swiper.isBeginning));
    setIsEnd(Boolean(swiper.isEnd));
  };

  const goPrev = () => {
    if (!swiperRef.current || isBeginning) return;
    swiperRef.current.slidePrev();
  };

  const goNext = () => {
    if (!swiperRef.current || isEnd) return;
    swiperRef.current.slideNext();
  };

  return (
    <section className="relative w-full overflow-hidden bg-red-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3 italic">
            Real Stories, Real Results – Testimonials from Industry Leaders.
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear directly from our satisfied clients about their transformative experiences and the impact we&apos;ve made on their businesses.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-none text-center lg:text-left px-1 sm:px-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              From our <br />
              <span className="font-bold">community.</span>
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
              Join hundreds of successful businesses that have transformed their operations with our innovative solutions and dedicated support.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                aria-disabled={isBeginning}
                className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 transition-all duration-300 group cursor-pointer ${isBeginning
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg'
                  }`}
              >
                <ArrowIcon direction="left" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                aria-disabled={isEnd}
                className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 transition-all duration-300 group cursor-pointer ${isEnd
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg'
                  }`}
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm sm:max-w-lg mx-auto lg:max-w-none">
            <Swiper
              onSwiper={handleInit}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={false}
              onSlideChange={handleSlideChange}
              className="w-full"
              breakpoints={{
                0: { slidesPerView: 1.05, spaceBetween: 16 },
                480: { slidesPerView: 1.02, spaceBetween: 12 },
                640: { slidesPerView: 1, spaceBetween: 0 },
                1024: { slidesPerView: 1, spaceBetween: 0 },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="flex justify-center">
                  <div className="w-full max-w-[300px] sm:max-w-none mx-auto">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  const isLeft = direction === 'left';

  return (
    <svg
      className={`w-7 h-7 ${isLeft ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 7L18 12L12 17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function stripHtmlTags(value?: string): string {
  if (!value) return '';
  return value.replace(/<[^>]*>/g, '').trim();
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote =
    stripHtmlTags(testimonial.content) ||
    stripHtmlTags(testimonial.title) ||
    '';

  const author = testimonial.full_name;
  const roleParts = [testimonial.designation, testimonial.company].filter(Boolean);
  const role = roleParts.join(' · ');

  const imageSrc = testimonial.profile_image || testimonial.image || DEFAULT_FALLBACK;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md h-full flex flex-col border border-gray-200 hover:border-red-200 max-w-sm sm:max-w-none mx-auto">
      <div className="mb-6 text-red-600">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2.25-7-2s-6 .75-6 4v10c0 1 0 2 .5 4s.5 3 1 4c1 2 2 4 4 6 1.5 1.5 3 2 5 2 1.5 0 2.5-.5 2.5-1.5S4.5 23 3 21z" />
        </svg>
      </div>

      <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 sm:mb-8 flex-grow font-semibold text-justify">
        {quote}
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        {imageSrc && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-red-200">
            <Image src={imageSrc} alt={author} fill className="object-cover" loading='lazy'/>
          </div>
        )}
        <div className="min-w-0 flex-grow">
          <h4 className="font-bold text-gray-900 text-base">{author}</h4>
          {role && <p className="text-gray-600 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
}
