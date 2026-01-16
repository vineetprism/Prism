'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import { WebDevService } from '../../data/websiteDevSolutions';
import {
    Puzzle,
    RefreshCw,
    Link as LinkIcon,
    Cloud,
    Brain,
    ShieldCheck,
    Zap,
    TrendingUp,
    Wallet,
    Lock,
    Rocket,
    Building2
} from 'lucide-react';

export default function DynamicWebsiteLayout({ service: _service }: { service: WebDevService }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [activeAudience, setActiveAudience] = useState<'startup' | 'enterprise'>('startup');

    const services = [
        {
            title: "Composable Web Applications",
            description: "Modular, component-based architectures using React and Next.js. Built for speed, SEO dominance, and effortless scalability.",
            icon: <Puzzle className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "Legacy Rescue & Modernization",
            description: "Paralyzed by technical debt? We refactor \"spaghetti code\" into clean, documented microservices without disrupting business continuity.",
            icon: <RefreshCw className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "API & Ecosystem Integration",
            description: "Eliminate data silos. We orchestrate seamless communication between your web front-end, ERP, CRM (Salesforce/HubSpot), and payment gateways.",
            icon: <LinkIcon className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "Cloud-Native Infrastructure",
            description: "Serverless and containerized deployments (Docker/Kubernetes) that auto-scale to handle traffic spikes without crashing.",
            icon: <Cloud className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "AI-Infused User Experiences",
            description: "Integrate LLMs and Python agents for \"Smart Search,\" personalized recommendations, and automated customer service workflows.",
            icon: <Brain className="w-10 h-10 text-[#E92228]" />
        },
        {
            title: "High-Security Architecture",
            description: "Security by design. Protection against XSS, SQLi, and supply chain attacks. We audit third-party plugins so you don't have to.",
            icon: <ShieldCheck className="w-10 h-10 text-[#E92228]" />
        }
    ];

    const faqs = [
        {
            question: "How do you prevent project budget blowouts?",
            answer: "We mandate a paid \"Discovery Workshop\" phase. This allows us to define the scope with extreme precision, virtually eliminating the \"unknowns\" that cause budget inflation."
        },
        {
            question: "Do you work with Legacy Code?",
            answer: "Yes. We specialize in \"Legacy Rescue.\" We can encapsulate your old code in modern APIs or incrementally refactor it to a modern stack like React/Node."
        },
        {
            question: "How is this different from a WordPress template?",
            answer: "Templates are static and vulnerable. We build dynamic applications. Our solutions are custom-engineered for specific business logic, high security, and massive scaleâ€”things a template cannot do."
        },
        {
            question: "What is your post-launch support?",
            answer: "We offer Experience Level Agreements (XLAs). We don't just keep the server on; we monitor performance, security, and user satisfaction to ensure the site continues to deliver ROI."
        },
        {
            question: "Who owns the code?",
            answer: "You do. Unlike some agencies that hold IP hostage, we provide full code ownership and documentation upon delivery."
        }
    ];

    return (
        <main className="w-full">
            {/* 1. HERO SECTION - Premium Red Gradient */}
            <section className="relative w-full min-h-[650px] lg:min-h-[750px] overflow-hidden">
                {/* Gradient Background - Red to Dark */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E92228] via-[#bd202e] to-[#1a0a0a]">
                    {/* Geometric Diamond Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="diamonds" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#diamonds)" />
                        </svg>
                    </div>

                    {/* Radial Glow Effects */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[300px] opacity-10 -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E92228] rounded-full blur-[200px] opacity-30 translate-y-1/2 -translate-x-1/3"></div>

                    {/* Floating Orbs */}
                    <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-20 pb-24 lg:pt-28 lg:pb-32 items-center">

                        {/* Main Content */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="text-center lg:text-left">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    <span className="text-white/90 text-sm font-medium">Enterprise Web Solutions</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1] font-heading drop-shadow-lg">
                                    Engineer Your<br />
                                    <span className="text-white/90">Digital Revenue Engine.</span>
                                </h1>
                                <p className="text-white/80 text-lg sm:text-xl lg:text-2xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                    Move beyond static brochures. We build <span className="text-white font-semibold">mission-critical, cloud-native</span> web applications that drive <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">748% ROI</span> and scale with your business ambition.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group inline-flex items-center px-8 py-4 bg-white text-[#E92228] text-base sm:text-lg font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                                    >
                                        Start Your Discovery Strategy
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                        </svg>
                                    </button>
                                    <a href="#tech-stack" className="inline-flex items-center text-white/70 hover:text-white text-base font-medium transition-colors group">
                                        <span className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center mr-2 group-hover:border-white group-hover:bg-white/10 transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                            </svg>
                                        </span>
                                        Explore Tech Stack
                                    </a>
                                </div>

                                {/* Quick Stats */}
                                <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
                                    {[
                                        { num: "748%", label: "ROI Delivered" },
                                        { num: "70%", label: "Efficiency Boost" },
                                        { num: "100+", label: "Projects Launched" }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="text-center lg:text-left">
                                            <div className="text-3xl font-bold text-white font-heading">{stat.num}</div>
                                            <div className="text-white/60 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%]">
                            <Sidebar />
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div className="lg:hidden container mx-auto px-4 pb-8 relative z-10">
                    <Sidebar />
                </div>

                {/* Curved Bottom Edge */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 80V60C240 20 480 0 720 0C960 0 1200 20 1440 60V80H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* 2. BUSINESS IMPACT - Large Number Callout Style */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E92228]/5 rounded-full blur-[100px]"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Giant Number */}
                            <div className="text-center lg:text-left">
                                <div className="inline-block">
                                    <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-bold text-[#E92228] leading-none font-heading">
                                        $2.5M
                                    </span>
                                    <p className="text-gray-500 text-lg mt-2 font-body">Lost annually per 1-second delay</p>
                                </div>
                            </div>

                            {/* Right - Text */}
                            <div className="relative">
                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#E92228] rounded-full hidden lg:block"></div>
                                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-body lg:pl-8">
                                    In 2025, a website is not a URLâ€”it is your <span className="font-bold text-gray-900">primary operational layer</span>.
                                    You don't need a design agency; you need a partner who understands that
                                    <span className="font-bold text-gray-900"> Performance = Revenue</span> and
                                    <span className="font-bold text-gray-900"> Downtime = Liability</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE GRID - Bento Box Style */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                                Our Capabilities
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From rescue to innovationâ€”comprehensive solutions for modern enterprises</p>
                        </div>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E92228] transition-all duration-500 cursor-default
                                        ${idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}
                                        ${idx === 3 ? 'lg:col-span-2' : ''}
                                    `}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="shrink-0">{service.icon}</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-2 group-hover:text-[#E92228] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 font-body text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY BENEFITS - Why Prism Grid Refined */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#000000] text-white overflow-hidden relative">
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E92228]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
                                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">Prism</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xl mx-auto">
                                The measurable advantages of engineering excellence
                            </p>
                        </div>

                        {/* Refined Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                {
                                    icon: <Zap className="w-8 h-8 text-[#E92228]" />,
                                    title: "The ROI of Speed",
                                    stat: "40%",
                                    statLabel: "Reduction in Abandonment",
                                    desc: "We adhere to the \"3-Second Rule.\" By optimizing Core Web Vitals, we protect your conversion rates and ad spend."
                                },
                                {
                                    icon: <TrendingUp className="w-8 h-8 text-[#E92228]" />,
                                    title: "Operational Efficiency",
                                    stat: "70%",
                                    statLabel: "Workflow Acceleration",
                                    desc: "Our integrated systems reduce manual data entry and workflow friction, allowing your team to focus on high-value tasks."
                                },
                                {
                                    icon: <Wallet className="w-8 h-8 text-[#E92228]" />,
                                    title: "Financial Predictability",
                                    stat: "0%",
                                    statLabel: "Surprise Costs",
                                    desc: "Our rigorous Discovery Workshop and transparent Agile Sprints ensure you know exactly what you're building, before we build it."
                                },
                                {
                                    icon: <Lock className="w-8 h-8 text-[#E92228]" />,
                                    title: "Security as a Standard",
                                    stat: "35%",
                                    statLabel: "Risk Mitigation",
                                    desc: "We don't just \"install plugins.\" We harden your architecture against XSS, SQLi, and the modern threat landscape."
                                }
                            ].map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#E92228]/50 hover:bg-white/[0.07] transition-all duration-300 group overflow-hidden"
                                >
                                    {/* Abstract background shape for visual interest */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#E92228]/10 transition-colors duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#E92228]/30 group-hover:scale-110 transition-all duration-300">
                                                {benefit.icon}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight group-hover:text-[#E92228] transition-colors duration-300">
                                                    {benefit.stat}
                                                </div>
                                                <div className="text-[#E92228] text-xs font-bold uppercase tracking-wider mt-1">
                                                    {benefit.statLabel}
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-bold mb-3 font-heading text-white group-hover:text-white/90">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LIFECYCLE FLOW - Horizontal Steps */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-2">
                                From Vision to Evolution
                            </h2>
                            <p className="text-gray-500">The Delivery Lifecycle</p>
                        </div>

                        {/* Horizontal Process Flow */}
                        <div className="relative">
                            {/* Connection Line */}
                            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { phase: "01", title: "The Deep Dive", subtitle: "Discovery", desc: "We map user personas, audit technical feasibility, and define Business KPIs before writing a line of code.", color: "bg-[#E92228]" },
                                    { phase: "02", title: "The Blueprint", subtitle: "Architecture", desc: "UX wireframing and System Architecture modeling. We build a digital twin to validate scalability.", color: "bg-[#E92228]" },
                                    { phase: "03", title: "The Build", subtitle: "Agile Development", desc: "2-week iterative sprints. You see working demos every fortnight. No \"Black Box\" development.", color: "bg-[#E92228]" },
                                    { phase: "04", title: "The Evolution", subtitle: "Run & Optimize", desc: "Moving beyond SLAs to Experience Level Agreements (XLAs). We iterate based on data.", color: "bg-[#E92228]" }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative text-center lg:text-left">
                                        {/* Step Circle */}
                                        <div className={`w-24 h-24 ${item.color} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg`}>
                                            <span className="text-white text-3xl font-bold font-heading">{item.phase}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 font-heading mb-1">{item.title}</h3>
                                        <p className="text-[#E92228] text-sm font-semibold mb-3">{item.subtitle}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. AUDIENCE SEGMENTATION - Tab Toggle Style */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-6">
                                Built for You
                            </h2>

                            {/* Toggle Switch */}
                            <div className="inline-flex bg-white rounded-full p-1.5 border border-gray-200 shadow-sm">
                                <button
                                    onClick={() => setActiveAudience('startup')}
                                    className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${activeAudience === 'startup'
                                        ? 'bg-[#E92228] text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    High-Growth Startups
                                </button>
                                <button
                                    onClick={() => setActiveAudience('enterprise')}
                                    className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${activeAudience === 'enterprise'
                                        ? 'bg-[#E92228] text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    Enterprise Leaders
                                </button>
                            </div>
                        </div>

                        {/* Content Panel */}
                        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 transition-all duration-500">
                            {activeAudience === 'startup' ? (
                                <div className="text-center">
                                    <div className="mb-6 flex justify-center">
                                        <Rocket className="w-16 h-16 text-[#E92228]" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">Scale & Velocity</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                        You need an MVP that isn't throwaway code. We build scalable foundations (MERN/Laravel) that let you launch fast and handle your first million users.
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer"
                                    >
                                        View Startup Packages
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="mb-6 flex justify-center">
                                        <Building2 className="w-16 h-16 text-[#E92228]" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">Security & Governance</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                        You need compliance, disaster recovery, and integration with legacy mainframes. We deliver ISO-grade security and "Digital Reinvention."
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-8 py-4 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer"
                                    >
                                        Consult Enterprise Solutions
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECH STACK - Logo Cloud */}
            <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-2">
                                The Modern Convergence Stack
                            </h2>
                            <p className="text-gray-500">Industry-leading technologies for scalable solutions</p>
                        </div>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {[
                                { name: "React", category: "Frontend" },
                                { name: "Next.js", category: "Frontend" },
                                { name: "Angular", category: "Frontend" },
                                { name: "Vue.js", category: "Frontend" },
                                { name: "Tailwind CSS", category: "Frontend" },
                                { name: "Node.js", category: "Backend" },
                                { name: "Python", category: "Backend" },
                                { name: "Django", category: "Backend" },
                                { name: "FastAPI", category: "Backend" },
                                { name: "Laravel", category: "Backend" },
                                { name: "PostgreSQL", category: "Database" },
                                { name: "MongoDB", category: "Database" },
                                { name: "Redis", category: "Database" },
                                { name: "TimescaleDB", category: "Database" },
                                { name: "AWS", category: "Cloud" },
                                { name: "Azure", category: "Cloud" },
                                { name: "Docker", category: "DevOps" },
                                { name: "Kubernetes", category: "DevOps" },
                                { name: "Jenkins", category: "DevOps" }
                            ].map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-5 py-2.5 bg-gray-100 hover:bg-[#E92228] hover:text-white rounded-full text-sm font-medium text-gray-700 transition-all duration-300 cursor-default"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ Section - Clean Minimal */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Common Questions
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'ring-2 ring-[#E92228]' : 'hover:shadow-md'}`}
                                >
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer"
                                    >
                                        <span className="text-lg font-semibold text-gray-900 pr-4 font-heading">
                                            {faq.question}
                                        </span>
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFAQ === idx ? 'bg-[#E92228] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'max-h-48' : 'max-h-0'}`}>
                                        <div className="px-6 pb-5">
                                            <p className="text-gray-600 leading-relaxed font-body">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Gradient Banner */}
            <section className="relative py-20 sm:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#161b22] to-[#0d1117]"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E92228] rounded-full blur-[200px] opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                        Ready to Engineer Your Revenue Engine?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
                        Let&apos;s build the mission-critical web application that scales with your ambition.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer group shadow-2xl shadow-red-500/30"
                    >
                        Start Your Discovery Strategy
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </button>
                    <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
                </div>
            </section>
        </main>
    );
}
