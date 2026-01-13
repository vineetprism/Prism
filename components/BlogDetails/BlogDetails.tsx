'use client';

import Link from 'next/link';
import React, { useMemo } from 'react';

export default function BlogDetailsSectionFullWidth({ data }: { data: { title?: string; short_description?: string; content?: string;[key: string]: unknown } }) {
    const title: string = data?.title ?? '';
    const heading: string = data?.short_description ?? '';
    const descriptionHtml: string = data?.content ?? '';

    const parsedNodes = useMemo(() => {
        if (typeof window === 'undefined' || !descriptionHtml) return [];

        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(descriptionHtml, 'text/html');
            const nodes = Array.from(doc.body.childNodes);

            const renderNode = (node: ChildNode, index: number): React.ReactNode | null => {
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
                        return (
                            <strong key={`strong-${index}`} dangerouslySetInnerHTML={{ __html: inner }} />
                        );
                    case 'em':
                    case 'i':
                        return <em key={`em-${index}`} dangerouslySetInnerHTML={{ __html: inner }} />;
                    case 'a': {
                        const href = (el as HTMLAnchorElement).getAttribute('href') ?? '#';
                        const rel = href.startsWith('http') ? 'noopener noreferrer' : undefined;
                        return (
                            <Link
                                key={`a-${index}`}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={rel}
                                className="text-red-700 hover:text-red-800 underline"
                                dangerouslySetInnerHTML={{ __html: inner }}
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
            };

            return nodes.map((n, i) => renderNode(n, i));
        } catch {
            return [
                <p key="desc-err" className="text-gray-700 leading-relaxed text-justify mb-4">
                    {descriptionHtml}
                </p>,
            ];
        }
    }, [descriptionHtml]);

    return (
        <section className="w-full bg-white">
            <div className="w-full bg-gradient-to-b from-white to-red-50/10">
                <div className="w-full px-6 sm:px-8 lg:px-12 py-8">
                    {title ? (
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">
                            {title}
                        </h2>
                    ) : null}
                    {heading ? <h3 className="text-lg sm:text-xl font-semibold text-red-700">{heading}</h3> : null}
                </div>
            </div>

            <div className="w-full px-6 sm:px-10 lg:px-16 py-6">
                <div className="w-full max-w-none text-gray-700 leading-relaxed">
                    {parsedNodes && parsedNodes.length ? parsedNodes : null}
                </div>
            </div>

            <div className="w-full h-12" />
        </section>
    );
}
