'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { ContactModal } from '../Modal/ContactModal';

interface WhyUsFeature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export default function WhyUsBetterSection(): React.JSX.Element {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const features: WhyUsFeature[] = [
    {
      id: 1,
      icon: (
        <svg
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
          focusable={false}
        >
          <path
            d="M8.49016 1.23L3.50016 3.11C2.35016 3.54 1.41016 4.9 1.41016 6.12V13.55C1.41016 14.73 2.19016 16.28 3.14016 16.99L7.44016 20.2C8.85016 21.26 11.1702 21.26 12.5802 20.2L16.8802 16.99C17.8302 16.28 18.6102 14.73 18.6102 13.55V6.12C18.6102 4.89 17.6702 3.53 16.5202 3.1L11.5302 1.23C10.6802 0.919998 9.32016 0.919998 8.49016 1.23Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.0498 10.87L8.6598 12.48L12.9598 8.17999"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Quality-Driven Solutions',
    },
    {
      id: 2,
      icon: (
        <svg
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
          focusable={false}
        >
          <path
            d="M2.16992 6.44L10.9999 11.55L19.7699 6.47"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 20.61V11.54"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.92965 1.48004L3.58965 4.44004C2.37965 5.11004 1.38965 6.79004 1.38965 8.17004V13.82C1.38965 15.2 2.37965 16.88 3.58965 17.55L8.92965 20.52C10.0696 21.15 11.9396 21.15 13.0796 20.52L18.4196 17.55C19.6296 16.88 20.6196 15.2 20.6196 13.82V8.17004C20.6196 6.79004 19.6296 5.11004 18.4196 4.44004L13.0796 1.47004C11.9296 0.840037 10.0696 0.840037 8.92965 1.48004Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Timely Project Delivery',
    },
    {
      id: 3,
      icon: (
        <svg
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
          focusable={false}
        >
          <path
            d="M5.44 1H16.55C20.11 1 21 1.89 21 5.44V11.77C21 15.33 20.11 16.21 16.56 16.21H5.44C1.89 16.22 1 15.33 1 11.78V5.44C1 1.89 1.89 1 5.44 1Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 16.22V21"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 12H21"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 21H15.5"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Skilled & Certified Developers',
    },
    {
      id: 4,
      icon: (
        <svg
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
          focusable={false}
        >
          <path
            d="M10.6103 1.21C10.2503 0.93 9.75032 0.93 9.39032 1.21C7.49032 2.66 1.88028 7.39 1.91028 12.9C1.91028 17.36 5.54031 21 10.0103 21C14.4803 21 18.1103 17.37 18.1103 12.91C18.1203 7.48 12.5003 2.67 10.6103 1.21Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeMiterlimit={10}
          />
          <path
            d="M10 1V21"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 17.96L17.7 14.22"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12.96L17.37 9.38"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 7.96001L15.03 5.51001"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Flexible Collaboration',
    },
    {
      id: 5,
      icon: (
        <svg
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
          focusable={false}
        >
          <path
            d="M21 5V7.42C21 9 20 10 18.42 10H15V3.01C15 1.9 15.91 1 17.02 1C18.11 1.01 19.11 1.45 19.83 2.17C20.55 2.9 21 3.9 21 5Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 6V20C1 20.83 1.94001 21.3 2.60001 20.8L4.31 19.52C4.71 19.22 5.27 19.26 5.63 19.62L7.28999 21.29C7.67999 21.68 8.32001 21.68 8.71001 21.29L10.39 19.61C10.74 19.26 11.3 19.22 11.69 19.52L13.4 20.8C14.06 21.29 15 20.82 15 20V3C15 1.9 15.9 1 17 1H6H5C2 1 1 2.79 1 5V6Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M5.25 9H10.75" stroke="#E92228" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 11.75V6.25" stroke="#E92228" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Transparent Pricing',
    },
    {
      id: 6,
      icon: (
        <svg
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
          focusable={false}
        >
          <path
            d="M13.0291 9.76999L18.6891 5.98001C19.2591 5.60001 19.4091 4.82001 19.0291 4.26001L17.2091 1.54999C16.8291 0.979986 16.0491 0.829989 15.4891 1.20999L9.8291 5L13.0291 9.76999Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1732 5.47923L5.39551 8.67911L7.95541 12.5013L12.7331 9.30138L10.1732 5.47923Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.82955 14.9L7.77955 12.26L5.53955 8.92001L1.58955 11.56C1.12955 11.87 1.00955 12.49 1.31955 12.95L2.44955 14.63C2.74955 15.08 3.36955 15.2 3.82955 14.9Z"
            stroke="#E92228"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.0496 11.2L5.55957 21" stroke="#E92228" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 11.2L14.44 21" stroke="#E92228" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Scalable Growth Solutions',
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/about/whyus.webp"
              alt="Prism Infoways Team Collaboration"
              width={1700}
              height={1120}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-start order-1 lg:order-2">
            <div className="mb-6 sm:mb-8 flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-red-600 text-white rounded-full text-xs sm:text-sm font-bold">
                Why Us
              </span>
              <span className="text-gray-600 text-sm sm:text-base font-medium">Better</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 leading-tight">
              At Prism Infoways, we turn your vision into scalable and innovative digital solutions.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">{feature.title}</h3>
                    {feature.description ? <p className="text-sm text-gray-600 mt-1">{feature.description}</p> : null}
                  </div>
                </div>
              ))}

            </div>

            <div className="mt-10 sm:mt-12">
              <button
                className="inline-flex items-center justify-center gap-2 w-fit px-10 py-3 rounded-full 
                                border-2 text-white font-bold text-md bg-red-500 hover:bg-white hover:text-red-500 
                                hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
                onClick={() => setIsContactModalOpen(true)}
                type="button"
                aria-label="Start Your Project"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
}
