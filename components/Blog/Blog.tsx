'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

interface BlogPost {
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
    const t = String(value).replace(/&nbsp;/g, ' ').trim();
    return t === '' ? undefined : t;
}

export default function BlogSection({ posts = [] }: { posts?: BlogPost[] }) {

    const router = useRouter()

    const cleanedPosts = useMemo(() => {
        return (posts || []).map((p) => ({
            ...p,
            title: trimOrUndef(p.title) ?? undefined,
            short_description: trimOrUndef(p.short_description) ?? undefined,
            excerpt: trimOrUndef(p.excerpt) ?? undefined,
            image: trimOrUndef(p.image) ?? undefined,
            category: trimOrUndef(p.category) ?? undefined,
            published_date: trimOrUndef(p.published_date) ?? trimOrUndef(p.date) ?? undefined,
        }));
    }, [posts]);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9;

    const totalPages = Math.max(1, Math.ceil((cleanedPosts?.length || 0) / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPosts = (cleanedPosts || []).slice(startIndex, endIndex);

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

    if (!cleanedPosts || cleanedPosts.length === 0) {
        return (
            <section className="relative w-full py-16 px-4 bg-gray-50">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
                    <p className="text-gray-600">No posts available right now. Check back later.</p>
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
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="mb-4 flex justify-center">
                            <div className="h-1 w-20 bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-full" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Latest <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Blog Posts</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Stay updated with insights, trends, and best practices in IT solutions and digital transformation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {currentPosts?.map((post, index) => (
                            <article
                                key={post?.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md flex flex-col h-full border border-red-100"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.06}s both`,
                                }}
                            >
                                <div className="relative overflow-hidden bg-gray-200 aspect-video">
                                    <div className="relative w-full h-full">

                                        {post?.image ? (
                                            <Link href={`/blog-single/${post?.slug}`}>
                                                <Image
                                                    src={post?.image}
                                                    alt={post?.title ?? 'blog image'}
                                                    fill
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        ) : (
                                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">No image</div>
                                        )}
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 sm:p-8 flex flex-col flex-1 border-t border-red-100">
                                    <div className="flex items-center justify-between mb-4 gap-4">
                                        <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full hover:bg-red-700 transition-colors duration-300">
                                            {post?.category ?? 'Uncategorized'}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-500 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar">
                                                <path d="M8 2v4" />
                                                <path d="M16 2v4" />
                                                <rect width="18" height="18" x="3" y="4" rx="2" />
                                                <path d="M3 10h18" />
                                            </svg>
                                            <span>{post?.published_date ?? '—'}</span>
                                        </span>
                                    </div>

                                    <Link href={`/blog-single/${post?.slug}`}
                                        aria-label="Read More"
                                    >
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-red-600 transition-colors duration-300 cursor-pointer">
                                            {post?.title ?? 'Untitled'}
                                        </h3>
                                    </Link>

                                    <Link href={`/blog-single/${post?.slug}`}
                                        aria-label="Read More"
                                    >
                                        <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1 text-justify line-clamp-4">
                                            {post.short_description ?? post.excerpt ?? 'No description available.'}
                                        </p>
                                    </Link>

                                    <div>
                                        <button
                                            onClick={() => router.push(`/blog-single/${post?.slug}`)}
                                            aria-label={`Read more about ${post.title}`}
                                            className="inline-flex items-center justify-center gap-2 w-fit px-6 py-2 rounded-full border-2 text-white font-semibold text-sm bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
                                        >
                                            <span>Learn More</span>
                                            <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
                                type="button"
                                aria-label="Previous Page"
                                disabled={currentPage === 1}
                                aria-disabled={currentPage === 1}
                                className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-red-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
                                            type="button"
                                            aria-label={`Page ${p}`}
                                            className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${currentPage === p
                                                ? 'bg-red-600 text-white shadow-lg shadow-red-400/50'
                                                : 'border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600'
                                                }`}
                                            aria-current={currentPage === p ? 'page' : undefined}
                                        >
                                            {p}
                                        </button>
                                    )
                                )}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                type="button"
                                aria-label="Next Page"
                                disabled={currentPage === totalPages}
                                aria-disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-red-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                Next
                            </button>
                        </div>

                        <div className="text-center mt-4 text-gray-600">
                            <p>
                                Showing {Math.min(startIndex + 1, cleanedPosts.length)} to {Math.min(endIndex, cleanedPosts.length)} of {cleanedPosts.length} posts
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
