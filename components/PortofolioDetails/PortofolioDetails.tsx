'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortofolioDetailsSectionFullWidth({ data }: { data: { title?: string; content?: string; icon_image?: string; image?: string;[key: string]: unknown } }) {
    const title = data?.title ?? '';
    const descriptionHtml = data?.content ?? '';

    const leftSrc = data?.icon_image && String(data.icon_image).trim() ? String(data.icon_image).trim() : '';
    const rightSrc = data?.image && String(data.image).trim() ? String(data.image).trim() : '';

    const renderDescriptionContent = useMemo(() => {
        return (html: string) => {
            if (typeof window === 'undefined' || !html) return null;

            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const elements = Array.from(doc.body.childNodes);

                return elements.map((node, index) => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        const text = node.textContent?.trim();
                        if (!text) return null;
                        return (
                            <p key={`text-${index}`} className="text-gray-700 leading-relaxed text-justify mb-4">
                                {text}
                            </p>
                        );
                    }

                    if (node.nodeType !== Node.ELEMENT_NODE) return null;
                    const el = node as HTMLElement;
                    const tag = el.tagName.toLowerCase();
                    const inner = el.innerHTML;

                    switch (tag) {
                        case 'h1':
                            return (
                                <h1
                                    key={`h1-${index}`}
                                    className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 mt-8"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'h2':
                            return (
                                <h2
                                    key={`h2-${index}`}
                                    className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 mt-8"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'h3':
                            return (
                                <h3
                                    key={`h3-${index}`}
                                    className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 mt-6"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'h4':
                            return (
                                <h4
                                    key={`h4-${index}`}
                                    className="text-lg font-semibold mb-3 text-gray-900 mt-4"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'h5':
                        case 'h6':
                            return (
                                <h5
                                    key={`h5-${index}`}
                                    className="text-base font-semibold mb-2 text-gray-900 mt-3"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'p':
                            return (
                                <p
                                    key={`p-${index}`}
                                    className="text-gray-700 leading-relaxed text-justify mb-4"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'ul':
                            return (
                                <ul
                                    key={`ul-${index}`}
                                    className="list-disc list-inside text-gray-700 leading-relaxed mb-4 ml-2"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'ol':
                            return (
                                <ol
                                    key={`ol-${index}`}
                                    className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 ml-2"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'li':
                            return (
                                <li
                                    key={`li-${index}`}
                                    className="text-gray-700 leading-relaxed mb-2"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'blockquote':
                            return (
                                <blockquote
                                    key={`blockquote-${index}`}
                                    className="border-l-4 border-red-700 pl-4 italic text-gray-700 mb-4"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                        case 'br':
                            return <div key={`br-${index}`} className="h-4" />;
                        case 'strong':
                        case 'b':
                            return <strong key={`strong-${index}`} dangerouslySetInnerHTML={{ __html: inner }} />;
                        case 'em':
                        case 'i':
                            return <em key={`em-${index}`} dangerouslySetInnerHTML={{ __html: inner }} />;
                        case 'a': {
                            const href = (el as HTMLAnchorElement).getAttribute('href') ?? '#';
                            const isExternal = href.startsWith('http');
                            return (
                                <Link
                                    key={`a-${index}`}
                                    href={href}
                                    target={isExternal ? '_blank' : undefined}
                                    rel={isExternal ? 'noopener noreferrer' : undefined}
                                    className="text-red-700 hover:text-red-800 underline"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                    aria-label={inner}
                                />
                            );
                        }
                        default:
                            return (
                                <div
                                    key={`${tag}-${index}`}
                                    className="text-gray-700 mb-4"
                                    dangerouslySetInnerHTML={{ __html: inner }}
                                />
                            );
                    }
                });
            } catch {
                return [
                    <p key="desc-err" className="text-gray-700 leading-relaxed text-justify mb-4">
                        {html}
                    </p>,
                ];
            }
        };
    }, []);

    return (
        <section className="w-full bg-white">
            <div className="w-full bg-gradient-to-b from-white to-red-50/10">
                <div className="w-full px-6 sm:px-8 lg:px-12 py-8">
                    {title ? (
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">{title}</h2>
                    ) : null}
                </div>
            </div>

            <div className="w-full px-6 sm:px-10 lg:px-16 py-6">
                <div className="w-full max-w-none text-gray-700 leading-relaxed">
                    {renderDescriptionContent(descriptionHtml)}
                </div>
            </div>

            <div className="w-full px-6 sm:px-10 lg:px-16 pb-12">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative w-full h-[360px] md:h-[440px] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                            <Image
                                src={leftSrc}
                                alt="left"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                loading='lazy'
                            />
                        </div>

                        <div className="relative w-full h-[360px] md:h-[440px] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                            <Image
                                src={rightSrc}
                                alt="right"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-12" />
        </section>
    );
}
