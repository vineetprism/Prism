'use client';

import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Post {
    id: number;
    title: string;
    category: string;
    published_date: string;
    image: string;
    short_description: string;
    slug: string
}

export default function Blog({
    posts = [],
    limit = 3,
}: {
    posts?: Post[];
    limit?: number;
}) {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };



    return (
        <section className="relative w-full bg-gradient-to-b from-white via-pink-50/30 to-white px-6 py-16 sm:px-8 lg:px-12">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-[1440px] relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Latest Articles <span className="text-red-600">Posts</span>
                    </h2>
                    <p className="text-gray-600 text-base max-w-2xl mx-auto">
                        Stay informed with our latest insights, industry trends, and expert perspectives on technology and business.
                    </p>
                </div>

                <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                    {posts?.slice(0, limit)?.map((post) => (
                        <PostCard key={post?.id} post={post} formatDate={formatDate} />
                    ))}
                </div>

                <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
                    {posts?.slice(0, limit)?.map((post) => (
                        <PostCard key={post?.id} post={post} formatDate={formatDate} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:hidden gap-4">
                    {posts?.slice(0, limit)?.map((post) => (
                        <PostCard key={post?.id} post={post} formatDate={formatDate} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PostCard({ post, formatDate }: { post: Post; formatDate: (dateString: string) => string }) {
    const router = useRouter();
    return (
        <div className="group relative rounded-2xl overflow-hidden bg-white border border-red-100 shadow-md hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
                <Link href={`/blog-single/${post?.slug}`} aria-label={post?.title}>
                    <Image
                        src={post?.image}
                        alt={post?.title}
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </Link>
            </div>

            <div className="p-6 flex flex-col flex-grow border-t border-red-100">
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded">
                        {post?.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 text-red-600" />
                        <span>{formatDate(post?.published_date)}</span>
                    </div>
                </div>

                <Link href={`/blog-single/${post?.slug}`} aria-label={post?.title}>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-red-600 transition-colors duration-300 cursor-pointer">
                        {post.title}
                    </h3>
                </Link>

                <Link href={`/blog-single/${post?.slug}`} aria-label={post?.title}>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3 cursor-pointer text-justify">
                        {post?.short_description?.replace(/&nbsp;/g, ' ')}
                    </p>
                </Link>

                <button
                    onClick={() => router.push(`/blog-single/${post?.slug}`)}
                    aria-label="Learn More"
                    className="inline-flex items-center justify-center gap-2 w-fit px-6 py-2 rounded-full border-2 text-white font-semibold text-sm bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300 group/btn cursor-pointer">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </div >
    );
}