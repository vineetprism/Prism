import BlogSection from '@/components/Blog/Blog';
import BlogHeroSection from '@/components/Blog/HeroBlog';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Prism Infoways Latest News & Updates',
  description: 'Read Prism Infoways Blog to stay updated with the latest news, trends, and insights in the IT industry, including software development, digital marketing, and more.',
  keywords: [
    "Prism Infoways blog",
    "IT company news and updates",
    "Software development news",
    "Digital marketing trends",
    "Latest technology news",
    "IT industry updates",
    "Prism Infoways latest news",
    "IT company news updates",
    "Software development news updates",
    "Digital marketing trends updates"
  ]
}

export const dynamic = 'force-dynamic';

async function safeFetch(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) {
      console.error('Fetch error', url, res.status);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error('Fetch exception', url, err);
    return null;
  }
}

const getApiBase = () =>
  process.env.NEXT_PUBLIC_API_BASE || process.env.NEXT_PUBLIC_API_BASE || '';

const Page = async () => {
  const base = getApiBase();
  const postsUrl = base ? `${base.replace(/\/$/, '')}/api/posts` : '/api/posts';

  const postData = await safeFetch(postsUrl);
  // Normalize shape: if API returns { data: [...] } or an array directly
  const posts = Array.isArray(postData) ? postData : postData?.data ?? [];

  return (
    <>
      <BlogHeroSection />
      <BlogSection posts={posts} />
    </>
  );
};

export default Page;
