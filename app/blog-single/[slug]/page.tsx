import React from 'react';
import BlogDetailsSectionFullWidth from '@/components/BlogDetails/BlogDetails';
import BlogDetailsHeroSection from '@/components/BlogDetails/BlogHero';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Post = {
    id: string;
    title?: string;
    slug?: string;
    image?: string | null;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    meta_image?: string;
    [k: string]: unknown;
};

async function getPosts(): Promise<Post[]> {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
    if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not set');

    const url = `${API_BASE.replace(/\/$/, '')}/api/posts`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
    const json = await res.json();

    if (Array.isArray(json)) return json as Post[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (Array.isArray((json as any)?.data)) return (json as any).data as Post[];
    return [];
}

async function getPostBySlug(slug: string): Promise<Post | null> {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
    const singleUrl = `${API_BASE.replace(/\/$/, '')}/api/posts/${encodeURIComponent(slug)}`;

    try {
        const res = await fetch(singleUrl, { next: { revalidate: 3600 } });
        if (res.ok) {
            return (await res.json()) as Post;
        }
    } catch {
        // ignore error
    }

    const list = await getPosts();
    return list.find((p) => String(p.slug).trim() === String(slug).trim()) ?? null;
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Blog Details',
            description: 'Blog details page',
        };
    }

    return {
        title: post.meta_title || 'Blog Details',
        description: post.meta_description || 'Blog details page',
        keywords:
            post.meta_keywords && typeof post.meta_keywords === 'string'
                ? post.meta_keywords.split(',').map((k) => k.trim())
                : undefined,
        openGraph: {
            title: post.meta_title || 'Blog Details',
            description: post.meta_description || 'Blog details page',
            images: post.meta_image ? [post.meta_image] : [],
        },
        twitter: {
            title: post.meta_title || 'Blog Details',
            description: post.meta_description || 'Blog details page',
            images: post.meta_image ? [post.meta_image] : [],
        },
    };
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    if (!slug) notFound();

    let posts: Post[] = [];
    try {
        posts = await getPosts();
    } catch (err) {
        console.error('Error fetching posts:', err);
        notFound();
    }

    const post = posts.find((p) => String(p.slug).trim() === String(slug).trim());
    if (!post) notFound();

    return (
        <>
            <BlogDetailsHeroSection post={post} />
            <BlogDetailsSectionFullWidth data={post} />
        </>
    );
}
