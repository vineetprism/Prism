'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles, Lightbulb, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-32">
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/about/about.webp"
                  alt="Team collaboration at Prism Infoways"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Where Client Success Meets Innovation
              </h1>

              <p className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg text-justify">
                At Prism Infoways Private Limited, we are dedicated to driving digital transformation through innovative web development, app development, digital marketing, and cloud solutions. Our team of experts leverages cutting-edge technology to deliver tailored solutions that meet the unique needs of each client. With a commitment to excellence and client satisfaction, we help businesses of all sizes achieve their digital goals and thrive in a competitive landscape.
              </p>

              <div className="mb-12 space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <Sparkles className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-base">
                      Drive your business forward with smart strategies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <Lightbulb className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-base">
                      Innovative solutions that fuel long-term success.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <Heart className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-base">
                      Dedicated support to help you grow faster.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/about"
                  aria-label="Learn More"
                  className="inline-flex items-center justify-center gap-2 w-fit px-10 py-4 rounded-full 
                    border-2 text-white font-bold text-md bg-red-500 hover:bg-white hover:text-red-500 
                    hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}