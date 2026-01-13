'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

interface PortfolioPost {
    id: number;
    title: string;
    short_description?: string;
    excerpt?: string;
    image?: string;
    category?: string;
    published_date?: string;
    date?: string;
    slug?: string;
}

function trimOrUndef(value?: string) {
    if (value === undefined || value === null) return undefined;
    const t = String(value).trim();
    return t === '' ? undefined : t;
}

export default function PortfolioSection({ portfolios = [] }: { portfolios?: PortfolioPost[] }) {

    const router = useRouter()

    const cleanedPortfolios = useMemo(() => {
        return (portfolios || []).map((p) => ({
            ...p,
            title: trimOrUndef(p.title) ?? undefined,
            short_description: trimOrUndef(p.short_description) ?? undefined,
            excerpt: trimOrUndef(p.excerpt) ?? undefined,
            image: trimOrUndef(p.image) ?? undefined,
            category: trimOrUndef(p.category) ?? undefined,
            published_date: trimOrUndef(p.published_date) ?? trimOrUndef(p.date) ?? undefined,
        }));
    }, [portfolios]);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 6;

    const totalPages = Math.max(1, Math.ceil((cleanedPortfolios?.length || 0) / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPortfolios = (cleanedPortfolios || []).slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        const p = Math.min(Math.max(1, page), totalPages);
        setCurrentPage(p);
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderPageButtons = () => {
        const buttons: (number | 'ellipsis')[] = [];

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) buttons.push(i);
            return buttons;
        }

        // totalPages > 3: Show 1, 2, ..., last
        buttons.push(1, 2, 'ellipsis', totalPages);
        return buttons;
    };

    if (!cleanedPortfolios || cleanedPortfolios.length === 0) {
        return (
            <section className="relative w-full py-16 px-4 bg-gray-50">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
                    <p className="text-gray-600">No projects available right now. Check back later.</p>
                </div>
            </section>
        );
    }

    const pageButtons = renderPageButtons();

    return (
        <>
            <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-48" />

                <div className="mx-auto max-w-7xl relative z-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 sm:gap-12 mb-20">
                        {currentPortfolios?.map((portfolio, index) => (
                            <article
                                key={portfolio?.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md flex flex-col h-full border border-red-100"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.06}s both`,
                                }}
                            >
                                <div className="relative overflow-hidden bg-red-200 border border-red-100 aspect-video">
                                    <div className="relative w-full h-full">
                                        {portfolio?.image ? (
                                            <Link href={`/portfolio_details/${portfolio?.slug}`} aria-label={portfolio?.title || 'portfolio image'} className="block w-full h-full">
                                                <Image
                                                    src={portfolio?.image}
                                                    alt={portfolio?.title ?? 'portfolio image'}
                                                    fill
                                                    className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                                                    loading='lazy'
                                                />
                                            </Link>
                                        ) : (
                                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">No image</div>
                                        )}
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full hover:bg-red-700 transition-colors duration-300">
                                            {portfolio?.category ?? 'Uncategorized'}
                                        </span>
                                    </div>

                                    <Link href={`/portfolio_details/${portfolio?.slug}`} aria-label={portfolio?.title ?? 'portfolio image'}>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-red-600 transition-colors duration-300 cursor-pointer line-clamp-2">
                                            {portfolio?.title ?? 'Untitled'}
                                        </h3>
                                    </Link>

                                    <div className="mt-auto">
                                        <button
                                            onClick={() => router.push(`/portfolio_details/${portfolio?.slug}`)}
                                            aria-label={`View ${portfolio?.title}`}
                                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-2.5 rounded-full border-2 text-white font-semibold text-sm bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
                                        >
                                            <span>Learn More</span>
                                            <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex justify-center items-center gap-2 mt-2 pt-8 border-t border-gray-200">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                aria-disabled={currentPage === 1}
                                className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold 
                                hover:border-red-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed 
                                transition-all duration-300"
                                aria-label="Previous Page"
                            >
                                Previous
                            </button>

                            <div className="flex gap-1 sm:gap-2 mx-2 items-center">
                                {pageButtons.map((p, idx) =>
                                    p === 'ellipsis' ? (
                                        <span key={`e-${idx}`} className="px-3 py-2 text-gray-500 select-none">
                                            …
                                        </span>
                                    ) : (
                                        <button
                                            key={p}
                                            onClick={() => handlePageChange(p)}
                                            className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${currentPage === p
                                                ? 'bg-red-600 text-white shadow-lg shadow-red-400/50'
                                                : 'border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600'
                                                }`}
                                            aria-current={currentPage === p ? 'page' : undefined}
                                            aria-label={`Page ${p}`}
                                        >
                                            {p}
                                        </button>
                                    )
                                )}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                aria-disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-red-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                aria-label="Next Page"
                            >
                                Next
                            </button>
                        </div>

                        <div className="text-center mt-4 text-gray-600">
                            <p>
                                Showing {Math.min(startIndex + 1, cleanedPortfolios.length)} to {Math.min(endIndex, cleanedPortfolios.length)} of {cleanedPortfolios.length} projects
                            </p>
                        </div>
                    </div>
                </div>

                <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            </section >
        </>
    );
}