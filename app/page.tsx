import React from 'react';
import HeroSection from '@/components/Home/Hero';
import Brand from '@/components/Home/Brand';
import AboutPage from '@/components/Home/About';
import Services from '@/components/Home/Services';
import Projects from '@/components/Home/Projects';
import Testimonials from '@/components/Home/Testimonial';
import Blog from '@/components/Home/Blog';
import ContactUs from '@/components/Home/Contact';

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

export default async function Home() {
  const base = process.env.NEXT_PUBLIC_API_BASE || '';

  const serviceUrl = base + '/api/services'
  const projectsUrl = base + '/api/portfolios';
  const testimonialsUrl = base + '/api/testimonials';
  const blogUrl = base + '/api/posts';

  const [serviceData, projectsData, testimonialsData, blogData] = await Promise.all([
    safeFetch(serviceUrl),
    safeFetch(projectsUrl),
    safeFetch(testimonialsUrl),
    safeFetch(blogUrl),
  ]);

  const services = Array.isArray(serviceData) ? serviceData : serviceData?.data ?? [];
  const projects = Array.isArray(projectsData) ? projectsData : projectsData?.data ?? [];
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : testimonialsData?.data ?? [];
  const posts = Array.isArray(blogData) ? blogData : blogData?.data ?? [];

  return (
    <>
      <HeroSection />
      <Brand />
      <AboutPage />
      <Services services={services} />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Blog posts={posts} />
      <ContactUs />
    </>
  );
}

