'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import { WebDevService } from '../../data/websiteDevSolutions';

export default function CorporateDXPLayout({ service: _service }: { service: WebDevService }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const services = [
        {
            title: "Legacy Modernization & Re-Platforming",
            description: "Unshackle your enterprise from monolithic debt. We use the \"Strangler Fig\" pattern to safely migrate legacy logic to scalable microservices without downtime."
        },
        {
            title: "AI-Native Development",
            description: "Integrate GenAI directly into your UX. From RAG-powered search to autonomous service agents, we build the \"Action Web\" of tomorrow."
        },
        {
            title: "Cloud-Native Infrastructure",
            description: "Built for resilience on AWS/Azure. We utilize Kubernetes and Terraform to ensure your platform scales instantly during traffic spikes."
        },
        {
            title: "Experience Design (UX/UI)",
            description: "Data-driven design that converts. We map customer journeys to engineering value streams, ensuring every pixel drives revenue."
        },
        {
            title: "DevSecOps & Compliance",
            description: "Security shifts left. Automated SAST/DAST pipelines and AI-driven guardrails ensure GDPR/CCPA compliance by design."
        },
        {
            title: "Performance Engineering",
            description: "Speed is a feature. We optimize Core Web Vitals to millisecond precision, ensuring 100% SEO visibility and user retention."
        }
    ];

    const faqs = [
        {
            question: "We have a massive legacy monolith. Do we need to rebuild from scratch?",
            answer: "No. We advocate for the 'Strangler Fig' pattern. We gradually replace specific functionalities with microservices, allowing the new system to grow around the old one until the legacy system can be safely decommissioned without business disruption."
        },
        {
            question: "How do you ensure AI features don't hallucinate or pose a security risk?",
            answer: "We implement strict guardrails using tools like NVIDIA NeMo and RAG (Retrieval-Augmented Generation) architectures. This ensures your AI agents only reference approved corporate data and adhere to strict safety protocols."
        },
        {
            question: "How does UX design translate to a 9,900% ROI?",
            answer: "Research shows that every $1 invested in UX returns $100. By removing friction, optimizing load times (where 100ms delay drops conversion), and personalizing journeys, we directly increase customer acquisition and retention rates."
        },
        {
            question: "What is 'Shift-Left' Security and why does it matter?",
            answer: "Instead of testing for security at the end, we integrate SAST and DAST scanning into the code-writing process. This reduces vulnerability remediation time by 27% and prevents costly post-launch patches."
        },
        {
            question: "How quickly can you deploy a modernized MVP?",
            answer: "By leveraging AI coding agents and component-driven libraries, we can reduce standard development cycles by 30-50%, often delivering a functional MVP in weeks rather than months."
        }
    ];

    // Service offerings ticker data
    const serviceOfferings = [
        "Static Website Development",
        "Corporate Digital Experience Platforms",
        "Dynamic Website Development",
        "PHP Website Development",
        "CMS Website Development",
        "Website Re-development",
        "Travel Website Development",
        "React Js Website Development"
    ];

    return (
        <main className="w-full bg-[#0a0a0a]">
            {/* 1. HERO SECTION - Dark Mode with 3D Abstract Visualization */}
            <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
                {/* Background - Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] z-0">
                    {/* 3D Abstract Visualization - Data Streams */}
                    <div className="absolute inset-0 opacity-60 pointer-events-none overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Central Core */}
                            <circle cx="1100" cy="350" r="80" fill="url(#coreGradient)" opacity="0.9">
                                <animate attributeName="r" values="80;90;80" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="1100" cy="350" r="120" stroke="#E92228" strokeWidth="1" fill="none" opacity="0.3">
                                <animate attributeName="r" values="120;140;120" dur="4s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="1100" cy="350" r="160" stroke="#E92228" strokeWidth="0.5" fill="none" opacity="0.2">
                                <animate attributeName="r" values="160;180;160" dur="5s" repeatCount="indefinite" />
                            </circle>

                            {/* Data Streams connecting to core */}
                            {/* Stream 1 */}
                            <path d="M200 150 Q 500 200, 700 280 T 1020 350" stroke="url(#streamGradient1)" strokeWidth="2" fill="none" opacity="0.8">
                                <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" repeatCount="indefinite" />
                            </path>
                            <circle r="4" fill="#E92228">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M200 150 Q 500 200, 700 280 T 1020 350" />
                            </circle>

                            {/* Stream 2 */}
                            <path d="M100 400 Q 400 380, 650 360 T 1020 350" stroke="url(#streamGradient2)" strokeWidth="2" fill="none" opacity="0.6">
                                <animate attributeName="stroke-dasharray" values="0,800;800,0" dur="2.5s" repeatCount="indefinite" />
                            </path>
                            <circle r="3" fill="#ffffff">
                                <animateMotion dur="2.5s" repeatCount="indefinite" path="M100 400 Q 400 380, 650 360 T 1020 350" />
                            </circle>

                            {/* Stream 3 */}
                            <path d="M300 550 Q 550 500, 750 420 T 1020 350" stroke="url(#streamGradient3)" strokeWidth="1.5" fill="none" opacity="0.5">
                                <animate attributeName="stroke-dasharray" values="0,900;900,0" dur="3s" repeatCount="indefinite" />
                            </path>
                            <circle r="2.5" fill="#E92228" opacity="0.8">
                                <animateMotion dur="3s" repeatCount="indefinite" path="M300 550 Q 550 500, 750 420 T 1020 350" />
                            </circle>

                            {/* Stream 4 */}
                            <path d="M50 250 Q 350 300, 600 320 T 1020 350" stroke="url(#streamGradient4)" strokeWidth="1" fill="none" opacity="0.4">
                                <animate attributeName="stroke-dasharray" values="0,700;700,0" dur="3.5s" repeatCount="indefinite" />
                            </path>

                            {/* Floating Nodes */}
                            <circle cx="300" cy="200" r="8" fill="#E92228" opacity="0.6">
                                <animate attributeName="cy" values="200;180;200" dur="4s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="500" cy="450" r="6" fill="#ffffff" opacity="0.4">
                                <animate attributeName="cy" values="450;430;450" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="700" cy="150" r="5" fill="#E92228" opacity="0.5">
                                <animate attributeName="cy" values="150;170;150" dur="5s" repeatCount="indefinite" />
                            </circle>

                            {/* Gradient Definitions */}
                            <defs>
                                <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#E92228" />
                                    <stop offset="100%" stopColor="#8B0000" />
                                </radialGradient>
                                <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#E92228" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#E92228" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#E92228" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="streamGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#E92228" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#E92228" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#E92228" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="streamGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#888888" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#888888" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#888888" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">

                        {/* Main Content Column */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1] font-heading">
                                    Build the <span className="text-[#E92228]">Central Nervous System</span> of Your Digital Enterprise.
                                </h1>
                                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                    Move beyond the brochure. We engineer <span className="text-white font-semibold">AI-native, cloud-resilient</span> corporate platforms designed to eliminate legacy debt and drive a <span className="text-[#E92228] font-bold">9,900% ROI</span> through superior User Experience.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer group border-2 border-[#E92228] hover:bg-transparent"
                                    >
                                        Schedule Technical Discovery
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <a
                                        href="#roi-benchmarks"
                                        className="inline-flex items-center text-gray-400 hover:text-white text-base font-medium transition-colors duration-300 group"
                                    >
                                        View ROI Benchmarks
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
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

                {/* Service Offerings Ticker */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-white/10 py-4 z-20">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center gap-8 overflow-hidden">
                            <span className="text-gray-500 text-sm uppercase tracking-wider font-heading shrink-0">Our Services</span>
                            <div className="flex items-center gap-8 animate-marquee">
                                {serviceOfferings.concat(serviceOfferings).map((service: string, idx: number) => (
                                    <span key={idx} className="text-gray-400 text-sm font-medium whitespace-nowrap">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. BUSINESS IMPACT BLOCK - Split Design */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-200">

                            {/* Left Side - Red Quote Block */}
                            <div className="lg:w-[45%] bg-[#E92228] p-10 sm:p-12 lg:p-16 flex flex-col justify-center relative">
                                {/* Decorative Quote Marks */}
                                <span className="text-white/30 text-[100px] sm:text-[120px] font-serif absolute top-2 left-4 leading-none select-none">"</span>

                                <div className="relative z-10 pt-8">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-heading">
                                        The Era of<br />Static Websites<br />is <span className="underline decoration-4 underline-offset-4">Over.</span>
                                    </h2>

                                    <span className="text-white/30 text-[60px] sm:text-[80px] font-serif absolute -bottom-4 right-0 leading-none select-none">"</span>
                                </div>

                                <p className="text-white/80 text-sm sm:text-base mt-10 font-body italic">
                                    — 2026 Digital Reality
                                </p>
                            </div>

                            {/* Right Side - White Content Block */}
                            <div className="lg:w-[55%] bg-white p-10 sm:p-12 lg:p-16 flex flex-col justify-center">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading leading-tight">
                                    The Era of Static Websites is <span className="text-[#E92228]">Over.</span>
                                </h3>

                                <div className="space-y-4 text-gray-600 leading-relaxed font-body">
                                    <p>
                                        In 2026, your corporate website is not a marketing asset; it is <span className="font-semibold text-gray-900">operational infrastructure</span>. Legacy systems and monolithic codebases create <span className="font-bold text-[#E92228]">"Innovation Paralysis,"</span> leaving you vulnerable to <span className="font-semibold text-gray-900">$4.88M average breach costs</span> and agile competitors.
                                    </p>
                                    <p>
                                        We don&apos;t just write code. We deliver <span className="font-bold text-[#E92228]">Total Application Modernization</span>. By transitioning to composable, AI-integrated architectures, we turn your cost center into a revenue engine, securing your data and future-proofing your brand against the next decade of digital disruption.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-8 inline-flex items-center px-6 py-3 bg-[#1a1a1a] text-white text-sm font-bold rounded-lg transition-all duration-300 hover:bg-[#E92228] cursor-pointer group w-fit"
                                >
                                    Explore Solutions
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE GRID - 6 Block Grid */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center mb-12">
                            <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Enterprise Capabilities
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E92228]/30 group relative overflow-hidden"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 font-heading pr-4 leading-tight group-hover:text-[#E92228] transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Large Red Number on Right */}
                                        <span className="text-5xl font-bold text-[#E92228] font-heading leading-none opacity-90 shrink-0">
                                            0{idx + 1}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed font-body text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY BENEFITS - The Hard Stats */}
            <section id="roi-benchmarks" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading">
                                Key <span className="text-[#E92228]">Benefits</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-body">
                                The Hard Stats: Real measurable impact from our enterprise digital transformation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    num: "01",
                                    metric: "9,900%",
                                    label: "Financial Velocity",
                                    desc: "ROI on User Experience investments. We transform design from an aesthetic choice into a primary revenue driver."
                                },
                                {
                                    num: "02",
                                    metric: "$2.2M",
                                    label: "Risk Mitigation",
                                    desc: "Savings annually on data breach costs through AI-driven security automation and proactive threat modeling."
                                },
                                {
                                    num: "03",
                                    metric: "50%",
                                    label: "Development Speed",
                                    desc: "Faster time-to-market. Our AI-augmented engineering teams reduce manual testing by 80%."
                                },
                                {
                                    num: "04",
                                    metric: "30%",
                                    label: "Operational Efficiency",
                                    desc: "OpEx Reduction achieved by modernizing data platforms and retiring legacy infrastructure."
                                }
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E92228]/50 transition-all duration-300 group">
                                    <div className="text-[#E92228]/30 text-sm font-bold mb-2 font-heading">{stat.num}</div>
                                    <div className="text-5xl sm:text-6xl font-bold text-[#E92228] mb-2 font-heading group-hover:scale-110 transition-transform duration-300">
                                        {stat.metric}
                                    </div>
                                    <div className="text-white font-semibold text-lg mb-2 font-heading">{stat.label}</div>
                                    <div className="text-gray-500 text-sm font-body leading-relaxed">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LIFECYCLE FLOW - Vertical Timeline */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-center mb-16">
                            <span className="w-1.5 h-10 bg-[#E92228] mr-4 rounded-full"></span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                The Lifecycle Flow
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                            {[
                                {
                                    step: "01",
                                    title: "Assessment",
                                    subtitle: "Value Stream Mapping",
                                    desc: "We don't guess. We use AI tools to reverse-engineer your legacy code, map dependencies, and identify \"Knowledge Fragmentation\" gaps before we start."
                                },
                                {
                                    step: "02",
                                    title: "Transition",
                                    subtitle: "The AI-Augmented Build",
                                    desc: "Agile sprints powered by Copilots. We build modular components using React/Next.js, ensuring type safety with Python and Pydantic."
                                },
                                {
                                    step: "03",
                                    title: "Monitoring",
                                    subtitle: "Resilience Engineering",
                                    desc: "Deployment is not the end. We implement \"Blue/Green\" strategies and SRE protocols to monitor Experience Level Agreements (XLAs)."
                                },
                                {
                                    step: "04",
                                    title: "Optimization",
                                    subtitle: "Continuous Evolution",
                                    desc: "We treat your site as a product. Continuous feedback loops drive feature updates, ensuring you never face \"legacy\" issues again."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className={`relative flex items-start gap-8 mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#E92228] rounded-full transform -translate-x-1/2 mt-2 z-10 ring-4 ring-white"></div>

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#E92228]/30 transition-all duration-300 ${idx % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                                        <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <span className="text-[#E92228] font-bold text-sm font-heading">{item.step}</span>
                                            <h3 className="text-xl font-bold text-gray-900 font-heading">{item.title}</h3>
                                        </div>
                                        <p className="text-[#E92228] text-sm font-semibold mb-2">{item.subtitle}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed font-body">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. AUDIENCE SEGMENTATION - Split Screen */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
                                Are you a...
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Segment A - Agile Disrupter */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E92228]/20 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-wider font-heading">Segment A</span>
                                    <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 font-heading">The Agile Disrupter</h3>
                                    <p className="text-gray-400 text-sm mb-4 font-heading">Startups / Scale-ups</p>

                                    <p className="text-red-400 font-semibold mb-2 text-sm">Pain Point:</p>
                                    <p className="text-gray-300 mb-6 font-body leading-relaxed">Needing to prove value fast without technical debt.</p>

                                    <p className="text-green-400 font-semibold mb-2 text-sm">Our Offer:</p>
                                    <p className="text-gray-300 mb-8 font-body leading-relaxed">Rapid deployment of "Headless" architectures. Scalable foundations (Node.js/Fastify) that grow with your funding rounds.</p>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group/btn"
                                    >
                                        Launch Fast
                                        <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>


                            {/* Segment B - Global Enterprise */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-10 border-2 border-gray-100 relative overflow-hidden group hover:border-[#E92228]/30 hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E92228]/10 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-wider font-heading">Segment B</span>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 font-heading">The Global Enterprise</h3>
                                    <p className="text-gray-500 text-sm mb-4 font-heading">Fortune 500 / Multinationals</p>

                                    <p className="text-red-600 font-semibold mb-2 text-sm">Pain Point:</p>
                                    <p className="text-gray-600 mb-6 font-body leading-relaxed">"Legacy Paralysis" and Supply Chain Vulnerability.</p>

                                    <p className="text-green-600 font-semibold mb-2 text-sm">Our Offer:</p>
                                    <p className="text-gray-600 mb-8 font-body leading-relaxed">Risk-averse modernization. We focus on "Compliance-as-Code," Data Mesh implementation, and preserving institutional knowledge while upgrading the stack.</p>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group/btn"
                                    >
                                        Modernize Securely
                                        <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECH STACK - Technology Partners Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading inline-block relative">
                                Engineered with Best-in-Class Technology
                                <span className="block h-1.5 w-24 bg-[#E92228] mx-auto mt-4 rounded-full"></span>
                            </h2>
                        </div>

                        {/* Tech Categories */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Frontend */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-4 font-heading">Frontend</h3>
                                <div className="space-y-3">
                                    {["React", "Next.js", "Vue (Nuxt)"].map((tech, idx) => (
                                        <span key={idx} className="block text-gray-700 font-medium text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-4 font-heading">Backend</h3>
                                <div className="space-y-3">
                                    {["Node.js (Fastify)", "Python (Django/FastAPI)", "Java (Spring Boot)"].map((tech, idx) => (
                                        <span key={idx} className="block text-gray-700 font-medium text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Data & AI */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-4 font-heading">Data & AI</h3>
                                <div className="space-y-3">
                                    {["ClickHouse", "PostgreSQL", "LangGraph", "NVIDIA NeMo"].map((tech, idx) => (
                                        <span key={idx} className="block text-gray-700 font-medium text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Infra & Ops */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-4 font-heading">Infra & Ops</h3>
                                <div className="space-y-3">
                                    {["AWS", "Docker", "Kubernetes", "Terraform", "Datadog"].map((tech, idx) => (
                                        <span key={idx} className="block text-gray-700 font-medium text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Logo Marquee */}
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
                                {
                                    name: "Azure",
                                    isSvg: true,
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="#0078D4" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4 20.9l5.1-13.6h4.6l2.8 13.6h-4l-.6-3.2H7.9l-.6 3.2H5.4zm3.9-6.2h3.4l-1.7-8.7-1.7 8.7zm5.3-7.4l-5 13.6h4l1.6-4.4h5.7l1.6 4.4h4.1L21.6 7.3h-7z" />
                                        </svg>
                                    )
                                },
                                { name: "Kubernetes", slug: "kubernetes" },
                                { name: "Terraform", slug: "terraform" },
                                { name: "React", slug: "react" },
                                { name: "Next.js", slug: "nextdotjs" },
                                { name: "Node.js", slug: "nodedotjs" },
                                { name: "Python", slug: "python" },
                                { name: "Docker", slug: "docker" },
                                { name: "PostgreSQL", slug: "postgresql" },
                                { name: "Datadog", slug: "datadog" },
                                { name: "NVIDIA", slug: "nvidia" }
                            ].map((tech: any, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default"
                                >
                                    <div className="w-14 h-14 mb-4 flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110">
                                        {tech.isSvg ? (
                                            <div className="w-full h-full text-[#0078D4]">
                                                {tech.icon}
                                            </div>
                                        ) : (
                                            <img
                                                src={tech.url || `https://cdn.simpleicons.org/${tech.slug}`}
                                                alt={tech.name}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        )}
                                    </div>
                                    <span className="text-gray-600 font-semibold text-xs text-center group-hover:text-[#E92228] transition-colors uppercase tracking-tight">
                                        {tech.name}
                                    </span>

                                    {/* Subtle active indicator line */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#E92228] rounded-t-full group-hover:w-1/3 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
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
                                    className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#E92228] transition-all duration-300"
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
            </section >

            {/* CTA Section */}
            < section className="py-16 sm:py-20 bg-gradient-to-r from-[#E92228] to-[#bd202e] relative overflow-hidden" >
                {/* Background Pattern */}
                < div className="absolute inset-0 opacity-10" >
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }} />
                </div >

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                        Ready to Transform Your Digital Enterprise?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-body">
                        Let&apos;s architect the central nervous system that will power your business for the next decade.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-8 py-4 bg-white text-[#E92228] text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer group border-2 border-white hover:bg-transparent hover:text-white"
                    >
                        Schedule Technical Discovery
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
                </div>
            </section >
        </main >
    );
}
