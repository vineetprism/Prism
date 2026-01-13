'use client';


import React, { useMemo } from 'react';

import CarouselServices, { Service } from '../Services/CarouselServices';

export default function ServiceDetailsSectionFullWidth({
    data,
    allServices,
}: {
    data: { title?: string; heading?: string; description?: string; icon_image?: string; image?: string;[key: string]: unknown };
    allServices?: Service[];
}) {
    const title = data?.title ?? '';
    const heading = data?.heading ?? '';
    const descriptionHtml = data?.description ?? '';



    const renderDescriptionContent = useMemo(() => {
        return (html: string) => {
            if (typeof window === 'undefined') {
                return null;
            }

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const elements = doc.body.childNodes;

            return Array?.from(elements)?.map((node, index) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent?.trim();
                    if (text) {
                        return (
                            <p key={`text-${index}`} className="text-gray-700 leading-relaxed text-justify mb-4">
                                {text}
                            </p>
                        );
                    }
                    return null;
                }

                if (node.nodeType === Node.ELEMENT_NODE) {
                    const element = node as HTMLElement;
                    const tagName = element.tagName.toLowerCase();
                    const innerHTML = element.innerHTML;

                    switch (tagName) {
                        case 'h1':
                            return (
                                <h1
                                    key={`h1-${index}`}
                                    className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 mt-8"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'h2':
                            return (
                                <h2
                                    key={`h2-${index}`}
                                    className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 mt-8"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'h3':
                            return (
                                <h3
                                    key={`h3-${index}`}
                                    className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 mt-6"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'h4':
                            return (
                                <h4
                                    key={`h4-${index}`}
                                    className="text-lg font-semibold mb-3 text-gray-900 mt-4"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'h5':
                        case 'h6':
                            return (
                                <h5
                                    key={`h5-${index}`}
                                    className="text-base font-semibold mb-2 text-gray-900 mt-3"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'p':
                            return (
                                <p
                                    key={`p-${index}`}
                                    className="text-gray-700 leading-relaxed text-justify mb-4"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'ul':
                            return (
                                <ul
                                    key={`ul-${index}`}
                                    className="list-disc list-inside text-gray-700 leading-relaxed mb-4 ml-2"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'ol':
                            return (
                                <ol
                                    key={`ol-${index}`}
                                    className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 ml-2"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'li':
                            return (
                                <li
                                    key={`li-${index}`}
                                    className="text-gray-700 leading-relaxed mb-2"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'blockquote':
                            return (
                                <blockquote
                                    key={`blockquote-${index}`}
                                    className="border-l-4 border-red-700 pl-4 italic text-gray-700 mb-4"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'br':
                            return <div key={`br-${index}`} className="h-4" />;

                        case 'strong':
                        case 'b':
                            return (
                                <strong
                                    key={`strong-${index}`}
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'em':
                        case 'i':
                            return (
                                <em
                                    key={`em-${index}`}
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        case 'a':
                            return (
                                <a
                                    key={`a-${index}`}
                                    href={(node as HTMLAnchorElement).href}
                                    className="text-red-700 hover:text-red-800 underline"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );

                        default:
                            return (
                                <div
                                    key={`${tagName}-${index}`}
                                    className="text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                                />
                            );
                    }
                }

                return null;
            });
        };
    }, []);

    return (
        <section className="w-full bg-white">
            <div className="w-full bg-gradient-to-b from-white to-red-50/10">
                <div className="w-full px-6 sm:px-8 lg:px-12 py-8">
                    {title ? (
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">
                            {title}
                        </h2>
                    ) : null}
                    {heading ? (
                        <h3 className="text-lg sm:text-xl font-semibold text-red-700">{heading}</h3>
                    ) : null}
                </div>
            </div>

            <div className="w-full px-6 sm:px-10 lg:px-16 py-6">
                <div className="w-full max-w-none text-gray-700 leading-relaxed">
                    {renderDescriptionContent(descriptionHtml)}
                </div>
            </div>

            {/* Carousel Services Section */}
            <div className="w-full bg-white pb-12">
                <CarouselServices services={allServices || []} />
            </div>

            <div className="w-full h-12" />
        </section>
    );
}