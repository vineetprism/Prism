// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Sidebar from './Sidebar';
// import { WebDevService } from '@/data/websiteDevSolutions';

// interface DetailLayoutProps {
//     service: WebDevService;
// }

// export default function StaticWebDevLayout({ service }: DetailLayoutProps) {
//     const isRichContent = !!service.hero;

//     // Helper for FAQ Accordion
//     const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
//         <div className="border-b border-gray-200">
//             <button
//                 className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
//                 onClick={onClick}
//             >
//                 <span className={`text-lg font-bold font-heading transition-colors duration-300 ${isOpen ? 'text-[#E92228]' : 'text-gray-800'}`}>
//                     {question}
//                 </span>
//                 <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
//                     <svg className={`w-6 h-6 ${isOpen ? 'text-[#E92228]' : 'text-gray-400 group-hover:text-[#E92228]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                     </svg>
//                 </span>
//             </button>
//             <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
//                 <p className="text-gray-600 font-body leading-relaxed">{answer}</p>
//             </div>
//         </div>
//     );

//     const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

//     return (
//         <main className="w-full bg-white">
//             {/* 1. HERO SECTION */}
//             <section className="relative w-full min-h-[500px] lg:min-h-[550px] overflow-visible">
//                 {/* Background Gradient - Prism Brand Colors */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] via-[#500000] to-[#1a1a1a] z-0" />

//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
//                     <div className="flex flex-col lg:flex-row gap-8 pt-12 pb-16 lg:pt-20 lg:pb-24">

//                         {/* Main Content Column */}
//                         <div className="w-full lg:w-[60%] xl:w-[65%]">
//                             <div className="pl-6 sm:pl-8 border-l-4 border-[#E92228] py-2">
//                                 <span className="inline-block px-3 py-1.5 bg-[#E92228] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded mb-4">
//                                     {service.category}
//                                 </span>
//                                 <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight font-heading">
//                                     {service.hero ? service.hero.title : service.title}
//                                 </h1>
//                                 <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-body mb-8">
//                                     {service.hero ? service.hero.subtitle : service.description.replace(/<[^>]*>?/gm, '').substring(0, 180) + '...'}
//                                 </p>

//                                 <div>
//                                     <Link
//                                         href="/contact"
//                                         className="inline-flex items-center px-8 py-3.5 bg-[#E92228] hover:bg-white hover:text-[#E92228] text-white text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider border-2 border-transparent hover:border-[#E92228]"
//                                     >
//                                         {service.hero ? service.hero.cta : 'GET A QUOTE'}
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Sidebar Column - Desktop */}
//                         <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%]">
//                             <div className="sticky top-24">
//                                 <Sidebar />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Sidebar - Below Hero */}
//                 <div className="lg:hidden container mx-auto px-4 pb-8">
//                     <Sidebar />
//                 </div>
//             </section>

//             {/* RICH CONTENT SECTIONS */}
//             {isRichContent ? (
//                 <>
//                     {/* 2. BUSINESS IMPACT BLOCK */}
//                     {service.businessImpact && (
//                         <section className="py-16 sm:py-20 bg-white">
//                             <div className="container mx-auto px-4 max-w-5xl text-center">
//                                 <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-serif leading-relaxed italic border-l-4 sm:border-l-0 sm:border-t-4 border-[#E92228] pl-6 sm:pl-0 sm:pt-8 bg-gray-50 sm:bg-transparent p-6 sm:p-0 rounded-r-xl sm:rounded-none">
//                                     "{service.businessImpact.content}"
//                                 </p>
//                             </div>
//                         </section>
//                     )}

//                     {/* 3. SERVICE GRID */}
//                     {service.serviceGrid && (
//                         <section className="py-16 bg-gray-50">
//                             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                                 <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Expertise</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                                     {service.serviceGrid.map((item, idx) => (
//                                         <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[#E92228] group">
//                                             <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#E92228] transition-colors">{item.title}</h3>
//                                             <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </section>
//                     )}

//                     {/* 4. KEY BENEFITS */}
//                     {service.benefitsList && (
//                         <section className="py-16 sm:py-20 bg-white">
//                             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                                 <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Choose Static?</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                                     {service.benefitsList.map((benefit, idx) => (
//                                         <div key={idx} className="relative pl-4">
//                                             <div className="text-5xl font-black text-[#E92228]/10 absolute -top-4 -left-2 z-0 font-heading">
//                                                 0{idx + 1}
//                                             </div>
//                                             <div className="relative z-10">
//                                                 <h3 className="text-xl font-bold text-[#E92228] mb-3">{benefit.title}</h3>
//                                                 <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </section>
//                     )}

//                     {/* 5. LIFECYCLE FLOW */}
//                     {service.lifecycle && (
//                         <section className="py-16 bg-[#1a1a1a] text-white">
//                             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                                 <h2 className="text-3xl font-bold text-center mb-16 text-white font-heading">Development Lifecycle</h2>
//                                 <div className="relative max-w-4xl mx-auto">
//                                     <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#333] sm:-translate-x-1/2" />
//                                     <div className="space-y-12">
//                                         {service.lifecycle.map((step, idx) => (
//                                             <div key={idx} className={`relative flex flex-col sm:flex-row items-center ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
//                                                 <div className="w-full sm:w-1/2" />
//                                                 <div className="absolute left-8 sm:left-1/2 w-4 h-4 bg-[#E92228] rounded-full border-4 border-[#1a1a1a] sm:-translate-x-1/2 z-10" />
//                                                 <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${idx % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
//                                                     <span className="text-[#E92228] font-bold tracking-widest text-xs uppercase mb-1 block">{step.step}</span>
//                                                     <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
//                                                     <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     )}

//                     {/* 6. AUDIENCE SEGMENTATION */}
//                     {service.audience && (
//                         <section className="relative w-full">
//                             <div className="flex flex-col md:flex-row min-h-[500px]">
//                                 {/* Startup Side */}
//                                 <div className="flex-1 bg-gray-50 p-12 lg:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">For The Visionary Startup</h3>
//                                     <p className="text-[#E92228] font-bold italic mb-6">"{service.audience.startup.focus}"</p>
//                                     <ul className="space-y-4">
//                                         {service.audience.startup.points.map((point, i) => (
//                                             <li key={i} className="flex items-start">
//                                                 <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                 </svg>
//                                                 <span className="text-gray-700">{point}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 {/* Enterprise Side */}
//                                 <div className="flex-1 bg-white p-12 lg:p-20 flex flex-col justify-center">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">For The Global Enterprise</h3>
//                                     <p className="text-[#E92228] font-bold italic mb-6">"{service.audience.enterprise.focus}"</p>
//                                     <ul className="space-y-4">
//                                         {service.audience.enterprise.points.map((point, i) => (
//                                             <li key={i} className="flex items-start">
//                                                 <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                 </svg>
//                                                 <span className="text-gray-700">{point}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </section>
//                     )}

//                     {/* 7. TECH STACK */}
//                     {service.techStack && (
//                         <section className="py-16 bg-gray-900 text-white">
//                             <div className="container mx-auto px-4 text-center">
//                                 <h2 className="text-2xl font-bold mb-12 font-heading">Powered by Best-in-Class Technologies</h2>
//                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                                     <div className="space-y-4">
//                                         <h4 className="text-[#E92228] text-sm font-bold uppercase tracking-wider">Frontend</h4>
//                                         <ul className="space-y-2 text-gray-400">
//                                             {service.techStack.frontend.map((t, i) => <li key={i} className="hover:text-white transition-colors cursor-default">{t}</li>)}
//                                         </ul>
//                                     </div>
//                                     <div className="space-y-4">
//                                         <h4 className="text-[#E92228] text-sm font-bold uppercase tracking-wider">Headless CMS</h4>
//                                         <ul className="space-y-2 text-gray-400">
//                                             {service.techStack.cms.map((t, i) => <li key={i} className="hover:text-white transition-colors cursor-default">{t}</li>)}
//                                         </ul>
//                                     </div>
//                                     <div className="space-y-4">
//                                         <h4 className="text-[#E92228] text-sm font-bold uppercase tracking-wider">Cloud</h4>
//                                         <ul className="space-y-2 text-gray-400">
//                                             {service.techStack.cloud.map((t, i) => <li key={i} className="hover:text-white transition-colors cursor-default">{t}</li>)}
//                                         </ul>
//                                     </div>
//                                     <div className="space-y-4">
//                                         <h4 className="text-[#E92228] text-sm font-bold uppercase tracking-wider">Commerce</h4>
//                                         <ul className="space-y-2 text-gray-400">
//                                             {service.techStack.commerce.map((t, i) => <li key={i} className="hover:text-white transition-colors cursor-default">{t}</li>)}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     )}

//                     {/* 8. FAQ SCHEMA */}
//                     {service.faq && (
//                         <section className="py-16 sm:py-20 bg-gray-50">
//                             <div className="container mx-auto px-4 max-w-4xl">
//                                 <div className="text-center mb-12">
//                                     <h2 className="text-3xl font-bold text-gray-900 font-heading">Frequently Asked Questions</h2>
//                                     <div className="w-16 h-1 bg-[#E92228] mx-auto mt-4 rounded-full" />
//                                 </div>
//                                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
//                                     {service.faq.map((item, idx) => (
//                                         <AccordionItem
//                                             key={idx}
//                                             question={item.question}
//                                             answer={item.answer}
//                                             isOpen={openFaqIndex === idx}
//                                             onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                         </section>
//                     )}
//                 </>
//             ) : (
//                 /* BACKWARD COMPATIBILITY: EXISTING LAYOUT FOR OTHER SERVICES */
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//                     <div className="max-w-7xl mx-auto">
//                         <div
//                             className="prose prose-lg max-w-none mb-12 text-gray-700 font-body leading-relaxed"
//                             dangerouslySetInnerHTML={{ __html: service.description }}
//                         />
//                         {service.features.length > 0 && (
//                             <div className="mb-16">
//                                 <div className="flex items-center mb-8">
//                                     <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
//                                     <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading">Key Benefits</h3>
//                                 </div>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     {service.features.map((feature, idx) => (
//                                         <div key={idx} className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 group">
//                                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E92228] mr-5 group-hover:bg-[#E92228] group-hover:text-white transition-all duration-300">
//                                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
//                                                 </svg>
//                                             </div>
//                                             <span className="text-gray-800 font-semibold text-base leading-relaxed group-hover:text-[#E92228] transition-colors">{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                         {/* Contact Card Repetitive for consistency or optional */}
//                         <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 text-center shadow-md">
//                             <h4 className="font-bold text-xl text-gray-900 mb-2 font-heading">Need Expert Advice?</h4>
//                             <p className="text-base text-gray-600 mb-6 font-body">Our consultants are ready to help you.</p>
//                             <a href="tel:+918062177080" className="inline-flex items-center text-[#E92228] font-bold text-lg hover:text-[#bd202e] transition-colors duration-200">
//                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                                 </svg>
//                                 +91-8062177080
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </main>
//     );
// }









'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import { WebDevService } from '../../data/websiteDevSolutions';

export default function StaticWebsiteDevelopment({ service: _service }: { service: WebDevService }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const services = [
        {
            title: "Enterprise JAMstack Migration",
            description: "Transform your legacy. We migrate monolithic platforms (WordPress, Drupal) to decoupled architectures, preserving SEO equity via precision 301 redirects."
        },
        {
            title: "Headless CMS Integration",
            description: "Empower your content teams. We implement user-friendly platforms (Contentful, Strapi) that decouple content from code for ultimate marketing agility."
        },
        {
            title: "Next.js & React Applications",
            description: "Leverage Hybrid Rendering (SSG + SSR). We deliver the speed of static sites combined with the personalized functionality of dynamic applications."
        },
        {
            title: "Global Edge Deployment",
            description: "Your server is everywhere. We replicate content across hundreds of Edge nodes (AWS, Vercel), ensuring identical speeds for users in Tokyo and New York."
        },
        {
            title: "Progressive Web Apps (PWA)",
            description: "Blur the line between web and mobile. We engineer sites that function offline and offer app-like experiences without App Store friction."
        },
        {
            title: "Automated CI/CD & DevOps",
            description: "Eliminate deployment fear. We build robust pipelines where every line of code is automatically tested for bugs and performance before production."
        }
    ];

    const benefits = [
        {
            number: "01",
            title: "Unmatched Performance",
            description: "Eliminate Time to First Byte (TTFB). With 0.8s average load times, you dominate Core Web Vitals and boost conversion rates."
        },
        {
            number: "02",
            title: "Ironclad Security",
            description: "With no database connected to the presentation layer, SQL injection attacks are mathematically impossible. Secure by default."
        },
        {
            number: "03",
            title: "Infinite Scalability",
            description: "Handle Super Bowl level traffic spikes without crashing. Your site scales from 100 to 1 million users automatically via global CDNs."
        },
        {
            number: "04",
            title: "Reduced TCO",
            description: "Cut operational expenses by 65%. Save on expensive hosting, database licenses, and emergency maintenance contracts."
        }
    ];

    const lifecycle = [
        {
            step: "01",
            title: "Assessment",
            subtitle: "Discovery & Architecture",
            description: "We audit your current stack, define data models, and select the perfect tech mix (Next.js vs. Gatsby) to align with your 3-year growth roadmap."
        },
        {
            step: "02",
            title: "Transition",
            subtitle: "Development & Migration",
            description: "Atomic design implementation and 'Hydration' architecture. We run automated scripts to migrate legacy content, ensuring no data is lost."
        },
        {
            step: "03",
            title: "Monitoring",
            subtitle: "Automated Deployment",
            description: "CI/CD setup. When you press 'Publish,' the system rebuilds and deploys globally in seconds. Rigorous testing ensures zero-downtime launches."
        },
        {
            step: "04",
            title: "Optimization",
            subtitle: "Growth & Iteration",
            description: "Post-launch performance audits and analytics integration to ensure the site maintains 'Green' scores on Lighthouse as you scale content."
        }
    ];

    const techStack = {
        frontend: ["Next.js", "Gatsby", "Nuxt.js", "React"],
        cms: ["Contentful", "Strapi", "Sanity", "Storyblok"],
        cloud: ["Vercel", "Netlify", "AWS Amplify", "Docker"],
        commerce: ["Shopify Headless", "Stripe", "BigCommerce"]
    };

    const faqs = [
        {
            question: "If it's 'static,' does that mean I can't have dynamic features like search or logins?",
            answer: "Not at all. We use APIs to load dynamic features like Algolia search, forms, and Auth0 user authentication instantly. You get static speed with dynamic power."
        },
        {
            question: "Will my marketing team need to learn code to update the site?",
            answer: "No. We implement Headless CMS interfaces that look similar to WordPress. Your team drags-and-drops content; the system handles the code."
        },
        {
            question: "How does this impact my SEO?",
            answer: "It is a massive advantage. Google prioritizes page speed. Static sites naturally excel at Core Web Vitals, often resulting in immediate ranking boosts."
        },
        {
            question: "Is migrating from WordPress difficult?",
            answer: "It requires planning, but it is our specialty. We use automated tools to map and transfer your content, ensuring your SEO history is preserved."
        },
        {
            question: "How does this architecture improve security?",
            answer: "It virtually eliminates the attack surface. There is no database to hack and no login page to brute-force on the public site, making it ideal for high-security sectors."
        }
    ];

    const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

    return (
        <main className="w-full bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[500px] lg:min-h-[550px] overflow-hidden bg-white">
                {/* Background - Clean White/Light Gray as requested */}
                <div className="absolute inset-0 bg-[#F9F9F9] z-0">
                    {/* Abstract "Request" Graphic - SVG Animation */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Path for the request */}
                            <path
                                d="M-100 300 C 200 300, 400 100, 720 300 C 1040 500, 1240 300, 1540 300"
                                stroke="#E92228"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                fill="none"
                            />
                            {/* Moving Particle - Simulating Data/Request */}
                            <circle r="6" fill="#E92228">
                                <animateMotion
                                    dur="3s"
                                    repeatCount="indefinite"
                                    path="M-100 300 C 200 300, 400 100, 720 300 C 1040 500, 1240 300, 1540 300"
                                />
                            </circle>
                            <circle r="3" fill="#E92228" opacity="0.5">
                                <animateMotion
                                    dur="3s"
                                    begin="0.2s"
                                    repeatCount="indefinite"
                                    path="M-100 300 C 200 300, 400 100, 720 300 C 1040 500, 1240 300, 1540 300"
                                />
                            </circle>
                            {/* Abstract Nodes */}
                            <circle cx="200" cy="200" r="40" stroke="#ccc" strokeWidth="1" fill="none" opacity="0.5" />
                            <circle cx="1200" cy="400" r="60" stroke="#ccc" strokeWidth="1" fill="none" opacity="0.5" />
                        </svg>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-12 pb-16 lg:pt-20 lg:pb-24 items-center">

                        {/* Main Content Column - Center Aligned as per generic hero, but specific layout asked for Center-aligned in wireframe */}
                        {/* Wireframe says: "Layout: Center-aligned... Background clean..." but we have a Sidebar structure in this file.
                            Adhering to the file structure but updating visuals. If center-alignment implies NO sidebar, that contradicts the file structure.
                            I will keep the sidebar structure but align the CONTENT inside the hero column to be clean and punchy as requested.
                         */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-heading">
                                    Static Website Development: <br /> <span className="text-[#E92228]">The Foundation of Digital Velocity</span>
                                </h1>
                                <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                    Immutable architectures engineered for the speed of now. We replace infrastructure complexity with architectural elegance, delivering sub-second load times and global availability.
                                </p>

                                <div>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer group border-2 border-[#E92228] hover:bg-white hover:text-[#E92228]"
                                    >
                                        GET FREE CONSULTECH
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column - Desktop */}
                        <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%]">
                            <div className="sticky top-24">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar - Below Hero */}
                <div className="lg:hidden container mx-auto px-4 pb-8 relative z-10">
                    <Sidebar />
                </div>
            </section>

            {/* Business Impact Block */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className=" px-4 sm:px-6 lg:px-8 ">
                    <div className="container mx-auto">
                        <blockquote className="text-2xl sm:text-3xl lg:text-2xl leading-relaxed text-gray-900 font-serif italic text-justify border-l-[6px] border-[#E92228] pl-8 sm:pl-12 py-1">
                            In an era where digital patience is measured in milliseconds, traditional monolithic systems are liabilities. At Prism Infoways, we architect the antidote to latency. We don&apos;t just build websites; we engineer digital assets that accelerate your growth, mathematically eliminate SQL injection risks, and deliver a Return on Investment that redefines industry standards.
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center mb-12">
                            <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Our Services
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E92228] group"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading group-hover:text-[#E92228] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-body text-justify">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center mb-12">
                            <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Key Benefits
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-6 p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="flex-shrink-0">
                                        <span className="text-6xl font-bold text-[#E92228] font-heading">
                                            {benefit.number}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed font-body">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lifecycle Flow */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-center mb-16">
                            <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                The Lifecycle Flow
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Vertical Line - Centered */}
                            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 sm:-translate-x-1/2"></div>

                            <div className="space-y-12 sm:space-y-24">
                                {lifecycle.map((step, idx) => (
                                    <div key={idx} className={`relative flex flex-col sm:flex-row items-center ${idx % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>

                                        {/* Spacer for 50% width on Desktop */}
                                        <div className="hidden sm:block sm:w-1/2" />

                                        {/* Node - Centered on Line */}
                                        <div className="absolute left-4 sm:left-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-[#E92228] rounded-full flex items-center justify-center shadow-lg sm:-translate-x-1/2 z-10 -translate-x-1/2">
                                            <span className="text-xl sm:text-2xl font-bold text-white font-heading">
                                                {step.step}
                                            </span>
                                        </div>

                                        {/* Content Box */}
                                        <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${idx % 2 !== 0 ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                                            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-heading group-hover:text-[#E92228] transition-colors">
                                                    {step.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-[#E92228] font-semibold uppercase tracking-wider mb-4">
                                                    {step.subtitle}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed font-body text-justify">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audience Segmentation */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Startups */}
                            <div className="bg-gradient-to-br from-[#E92228] to-[#bd202e] p-10 rounded-2xl text-white shadow-2xl">
                                <h3 className="text-3xl font-bold mb-4 font-heading">
                                    For The Visionary Startup
                                </h3>
                                <p className="text-xl font-semibold mb-8 text-white/90">
                                    Launch at Light Speed
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-lg leading-relaxed">
                                            Rapid MVP deployment in weeks, not months.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-lg leading-relaxed">
                                            Near-zero hosting costs (pay only for bandwidth).
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-lg leading-relaxed">
                                            SEO Dominance from Day 1 with perfect Lighthouse scores.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Enterprises */}
                            <div className="bg-gradient-to-br from-[#1F1F1F] to-black p-10 rounded-2xl text-white shadow-2xl">
                                <h3 className="text-3xl font-bold mb-4 font-heading">
                                    For The Global Enterprise
                                </h3>
                                <p className="text-xl font-semibold mb-8 text-white/90">
                                    Governance & Resilience
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-lg leading-relaxed">
                                            Impenetrable security (GDPR, HIPAA, SOC2 compliant).
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-lg leading-relaxed">
                                            Secure integration with SAP, Oracle, and Salesforce APIs.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-lg leading-relaxed">
                                            High-traffic stability for millions of concurrent users.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading inline-block relative">
                                Powered by Best-in-Class Technologies
                                <span className="block h-1.5 w-24 bg-[#E92228] mx-auto mt-4 rounded-full"></span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Tech Stack Rendering Logic */}
                            {[
                                { title: "Frontend", items: techStack.frontend },
                                { title: "Headless CMS", items: techStack.cms },
                                { title: "Cloud", items: techStack.cloud },
                                { title: "Commerce", items: techStack.commerce }
                            ].map((group, gIdx) => (
                                <div key={gIdx} className="space-y-6">
                                    <h3 className="text-lg font-bold text-gray-900 text-center uppercase tracking-wider font-heading">{group.title}</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {group.items.map((tech, idx) => {
                                            // Mapping names to Simple Icons slugs and brand colors
                                            const techConfig: Record<string, { slug?: string; color?: string; localPath?: string }> = {
                                                "Next.js": { slug: "nextdotjs", color: "000000" },
                                                "Gatsby": { slug: "gatsby", color: "663399" },
                                                "Nuxt.js": { slug: "nuxt", color: "00C58E" },
                                                "React": { slug: "react", color: "61DAFB" },
                                                "Contentful": { slug: "contentful", color: "2478CC" },
                                                "Strapi": { slug: "strapi", color: "2E7EEA" },
                                                "Sanity": { slug: "sanity", color: "F03E2F" },
                                                "Storyblok": { slug: "storyblok", color: "00B3B0" },
                                                "Vercel": { slug: "vercel", color: "000000" },
                                                "Netlify": { slug: "netlify", color: "00C7B7" },
                                                "AWS Amplify": { localPath: "/icons/amplify.png" },
                                                "Docker": { slug: "docker", color: "2496ED" },
                                                "Shopify Headless": { slug: "shopify", color: "7AB55C" },
                                                "Stripe": { slug: "stripe", color: "008CDD" },
                                                "BigCommerce": { slug: "bigcommerce", color: "121118" }
                                            };

                                            const config = techConfig[tech] || {
                                                slug: tech.toLowerCase().replace(/\s+/g, '').replace(/\.js$/, 'dotjs'),
                                                color: "4B5563" // Default gray
                                            };

                                            const logoUrl = config.localPath || `https://cdn.simpleicons.org/${config.slug}/${config.color}`;

                                            return (
                                                <div key={idx} className="bg-white aspect-square rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-4 hover:border-[#E92228] hover:shadow-lg transition-all duration-300 group cursor-default">
                                                    <div className="w-12 h-12 mb-3 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                                        <img
                                                            src={logoUrl}
                                                            alt={tech}
                                                            className="max-w-full max-h-full object-contain"
                                                            onError={(e) => {
                                                                const img = e.target as HTMLImageElement;
                                                                // If it's a CDN URL and color version fails, try original brand color
                                                                if (!config.localPath && config.color && img.src.includes(config.color)) {
                                                                    img.src = `https://cdn.simpleicons.org/${config.slug}`;
                                                                } else {
                                                                    img.style.display = 'none';
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-gray-500 font-bold text-[10px] sm:text-xs text-center group-hover:text-[#E92228] transition-colors uppercase tracking-tight">{tech}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-12">
                            <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#E92228] transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between group cursor-pointer"
                                    >
                                        <span className="text-lg font-semibold text-gray-900 pr-4 font-heading group-hover:text-[#E92228] transition-colors duration-200">
                                            {faq.question}
                                        </span>
                                        <span className={`text-2xl font-bold transition-all duration-300 group-hover:text-[#E92228] ${openFAQ === idx ? 'text-[#E92228] rotate-45' : 'text-gray-400'
                                            }`}>
                                            +
                                        </span>
                                    </button>
                                    {openFAQ === idx && (
                                        <div className="px-6 pb-5">
                                            <p className="text-gray-600 leading-relaxed font-body">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#E92228] to-[#bd202e]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                        Ready to Accelerate Your Digital Presence?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-body">
                        Let&apos;s architect your next-generation website that delivers unmatched performance and security.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-8 py-4 bg-white text-[#E92228] text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer group border-2 border-white hover:bg-[#E92228] hover:text-white"
                    >
                        START YOUR PROJECT
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
                </div>
            </section>
        </main>
    );
}