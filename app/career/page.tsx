import CareerAboutSection from '@/components/Career/AboutWork';
import CareerSection from '@/components/Career/CareerForm';
import CareerHeroSection from '@/components/Career/HeroCareer';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Career at Prism Infoways – Join Our High-Performance Tech Team',
  description: 'Explore career opportunities at Prism Infoways. We hire frontend, backend, full-stack, mobile, DevOps, and QA talent working with modern technologies, real projects, and fast growth opportunities.',
  keywords: [
    "IT careers in India",
    "Software developer jobs Gurugram",
    "Tech jobs Gurugram",
    "Frontend developer jobs India",
    "Backend developer careers India",
    "Full stack developer jobs Delhi NCR",
    "Career growth in IT industry",
    "Join Prism Infoways careers",
    "Hiring software engineers India",
    "Best company for developers in Gurugram"
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

const base = process.env.NEXT_PUBLIC_API_BASE?.replace(/\/$/, '') ?? '';
const jobUrl = `${base}/api/job-requests`;

const Page = async () => {
  const jobData = await safeFetch(jobUrl);

  let jobs;
  if (Array.isArray(jobData)) jobs = jobData;
  else if (jobData && Array.isArray(jobData.data)) jobs = jobData.data;
  else jobs = [];

  return (
    <>
      <CareerHeroSection />
      <CareerAboutSection />
      <CareerSection jobs={jobs} />
    </>
  );
};

export default Page;
