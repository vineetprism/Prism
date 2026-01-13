'use client';

import React from 'react';
import Image from 'next/image';

type Post = {
    id?: number | string;
    title?: string;
    slug?: string;
    image?: string | null;
    short_description?: string;
    [k: string]: unknown;
};

export default function BlogDetailsHeroSection({ post }: { post: Post }) {
    const fallbackImage = '/mnt/data/85517579-d7b0-4598-aead-25b1c951a603.png';
    const imgSrc = typeof post?.image === 'string' && post.image.trim() ? post.image : fallbackImage;

    return (
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[45rem] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={imgSrc}
                    alt={post?.title ?? 'Blog Hero'}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    loading='lazy'
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%]" />

            <div className="absolute inset-0 flex flex-col justify-center z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 drop-shadow-sm leading-tight">
                        {post?.title ?? 'Untitled'}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed drop-shadow-sm text-justify">
                        {post?.short_description ?? ''}
                    </p>
                </div>
            </div>
        </section>
    );
}
