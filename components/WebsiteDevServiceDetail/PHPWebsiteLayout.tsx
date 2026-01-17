'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import { Search, Code2, ShieldCheck, Rocket } from 'lucide-react';

export default function PHPWebsiteLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const services = [
        {
            title: "Enterprise Modernization",
            description: "Transforming legacy \"spaghetti code\" into modular microservices using Rector automation and Domain-Driven Design."
        },
        {
            title: "High-Performance Laravel",
            description: "Leveraging Laravel Octane and Swoole to achieve sub-millisecond response times and handle massive concurrency."
        },
        {
            title: "API-First Architecture",
            description: "Building headless, RESTful, and GraphQL APIs that serve React, Vue, and Mobile frontends seamlessly."
        },
        {
            title: "SaaS Product Engineering",
            description: "Multi-tenant architectures with robust isolation, billing integration (Stripe/Paddle), and automated onboarding."
        },
        {
            title: "E-commerce & High Availability",
            description: "Scalable backends capable of surviving \"Black Friday\" traffic spikes using Redis caching and elastic infrastructure."
        },
        {
            title: "DevSecOps & Compliance",
            description: "Automated CI/CD pipelines with PHPStan static analysis to ensure GDPR/HIPAA compliance and zero-vulnerability releases."
        }
    ];

    const faqs = [
        {
            question: "Isn't PHP considered a \"legacy\" language?",
            answer: "Not anymore. Modern PHP (8.x) features JIT compilation, strong typing, and massive performance improvements. It powers 79% of the web, including giants like Slack and Wikipedia. It is \"legacy\" only in longevity, but \"cutting-edge\" in capability."
        },
        {
            question: "Can PHP handle high-traffic enterprise applications?",
            answer: "Absolutely. When architected correctly with caching layers (Redis) and asynchronous queues (Horizon), PHP applications handle millions of requests. We optimize systems to handle 50k+ concurrent connections seamlessly."
        },
        {
            question: "How do you handle migration from old PHP versions (5.6/7.x)?",
            answer: "We use the \"Strangler Fig\" pattern. We don't rewrite everything at once. We wrap your legacy app in a modern API layer and replace functionality piece-by-piece, ensuring zero business interruption."
        },
        {
            question: "Is PHP secure enough for Fintech or Healthcare?",
            answer: "Yes. We adhere to OWASP standards. Modern frameworks prevent SQL injection and XSS by default. We add layers of static analysis and encryption to meet GDPR and HIPAA requirements."
        },
        {
            question: "Why choose Prism Infoways over a large GSI?",
            answer: "We offer the \"Hybrid\" advantage. You get the process rigor and architectural maturity of a Global System Integrator, but with the agility, speed, and cost-structure of a specialized boutique."
        }
    ];

    return (
        <main className="w-full bg-white">
            {/* 1. HERO SECTION - Clean Light Theme */}
            <section className="relative w-full min-h-[650px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
                {/* Abstract Code Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#E92228]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">

                        {/* Main Content */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="text-center lg:text-left">
                                {/* Pre-Header */}
                                <span className="inline-block text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4">
                                    PHP 8.3 & Beyond
                                </span>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] font-heading">
                                    Engineer High-Performance Platforms with{' '}
                                    <span className="text-[#E92228]">Modern Enterprise PHP</span>
                                </h1>
                                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-body mb-10 max-w-3xl mx-auto lg:mx-0">
                                    Move beyond legacy scripting. We build secure, cloud-native architectures capable of handling <span className="font-semibold text-gray-900">50,000+ concurrent users</span> with <span className="font-semibold text-[#E92228]">45% greater cost efficiency</span> than Java counterparts.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#bd202e] cursor-pointer"
                                    >
                                        Analyze My Architecture
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                        </svg>
                                    </button>
                                    <a href="#case-studies" className="inline-flex items-center text-gray-600 hover:text-[#E92228] text-base font-medium transition-colors underline underline-offset-4">
                                        View Performance Case Studies
                                    </a>
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
            </section>

            {/* 2. BUSINESS IMPACT - Premium Quote with Stats */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E92228]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-5 gap-12 items-center">
                            {/* Left - Stats Column */}
                            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl hover:border-[#E92228]/20 transition-all duration-300">
                                    <div className="text-4xl lg:text-5xl font-bold text-[#E92228] mb-2 font-heading">79%</div>
                                    <p className="text-gray-500 text-sm">of the Web powered by PHP</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl hover:border-[#E92228]/20 transition-all duration-300">
                                    <div className="text-4xl lg:text-5xl font-bold text-[#E92228] mb-2 font-heading">91%</div>
                                    <p className="text-gray-500 text-sm">Reduction in API Response</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center col-span-2 group hover:shadow-xl hover:border-[#E92228]/20 transition-all duration-300">
                                    <div className="text-4xl lg:text-5xl font-bold text-[#E92228] mb-2 font-heading">45%</div>
                                    <p className="text-gray-500 text-sm">Cost Efficiency vs Java/Python</p>
                                </div>
                            </div>

                            {/* Right - Quote Content */}
                            <div className="lg:col-span-3 relative">
                                {/* Quote Mark */}
                                <div className="absolute -top-4 -left-4 text-[120px] text-[#E92228]/10 font-serif leading-none select-none hidden lg:block">&quot;</div>

                                <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-xl border-l-4 border-[#E92228]">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-heading mb-6">
                                        Code That <span className="text-[#E92228]">Compounds Value</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed font-body mb-6">
                                        In the modern digital ecosystem, technology selection defines competitive trajectory. PHP has evolved into a formidable enterprise platform. At Prism Infoways, we don&apos;t just &apos;write code.&apos;
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed font-body">
                                        We engineer resilient systems using the <span className="font-semibold text-[#E92228]">&apos;Strangler Fig&apos; pattern</span> to modernize legacy monoliths and Asynchronous architectures to crush latency—delivering a Total Cost of Ownership that fuels reinvestment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE GRID - 2x3 with Hover Effect */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
                                Our PHP Expertise
                            </h2>
                            <p className="text-gray-500 text-lg">Enterprise-grade solutions for modern businesses</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-xl border border-gray-200 hover:border-t-4 hover:border-t-[#E92228] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 font-heading pr-4 leading-tight group-hover:text-[#E92228] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <span className="text-5xl font-bold text-[#E92228] font-heading leading-none opacity-90 shrink-0">
                                            0{idx + 1}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY BENEFITS - Refined Design */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                The PHP Advantage
                            </h2>
                        </div>

                        <div className="space-y-10">
                            {[
                                { num: "01", title: "Economic Efficiency", desc: "Reduce development costs by 45% compared to Java/Python stacks. Access a global talent pool that prevents vendor lock-in and reduces recruitment risks." },
                                { num: "02", title: "Elastic Scalability", desc: "Shatter the \"PHP doesn't scale\" myth. Our asynchronous queuing architectures (RabbitMQ/Horizon) support 50,000+ concurrent users per instance." },
                                { num: "03", title: "Security Confidence", desc: "We implement \"Defense in Depth.\" With 70% of experts rating modern PHP security as \"High,\" we add layers of ORM protection, CSRF tokens, and automated vulnerability scanning." },
                                { num: "04", title: "Rapid Velocity", desc: "Move from concept to deployment in weeks, not months. The rich ecosystem of Composer packages allows us to focus on unique business logic, not boilerplate." }
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-6 group hover:bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#E92228]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                                    {/* Number Badge */}
                                    <div className="shrink-0 w-16 h-16 bg-[#E92228]/10 rounded-xl flex items-center justify-center border-l-4 border-[#E92228] group-hover:bg-[#E92228]/20 transition-colors duration-300">
                                        <span className="text-2xl font-bold text-[#E92228] font-heading">{benefit.num}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-2 group-hover:text-[#E92228] transition-colors duration-300">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-body">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LIFECYCLE FLOW - Vertical Timeline */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                The Prism Scaling Cycle
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform lg:-translate-x-1/2"></div>

                            {[
                                { icon: Search, title: "Assessment", subtitle: "The Blueprint", desc: "We audit your legacy codebase or scope your MVP. Output: A \"Predictive Plan\" defining KPIs, architecture, and ROI roadmap." },
                                { icon: Code2, title: "Transition", subtitle: "The Build", desc: "Agile sprints using PHP 8.x and strict PSR-12 coding standards. We integrate containerization (Docker) from Day 1 to ensure environmental consistency." },
                                { icon: ShieldCheck, title: "Monitoring", subtitle: "The Fortress", desc: "Automated QA via PHPUnit and Pest. We stress-test endpoints to 10k users and scan for security flaws using Snyk before any release." },
                                { icon: Rocket, title: "Optimization", subtitle: "The Evolution", desc: "Post-launch Blue-Green deployment. We utilize New Relic/Datadog to monitor APM metrics and refine database queries for speed." }
                            ].map((item, idx) => (
                                <div key={idx} className={`relative flex items-center gap-8 mb-12 last:mb-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-[#E92228] rounded-full transform -translate-x-1/2 z-10 ring-4 ring-gray-50 border-2 border-white"></div>

                                    {/* Content Card */}
                                    <div className={`ml-16 lg:ml-0 lg:w-[45%] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#E92228]/30 group ${idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#E92228]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E92228] transition-colors duration-300">
                                                <item.icon className="w-6 h-6 text-[#E92228] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <p className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-1">{item.subtitle}</p>
                                                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{item.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed font-body">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. AUDIENCE SEGMENTATION - Premium Cards */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Who We Serve</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Solutions for Every Stage
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left - Startups */}
                            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 bg-[#E92228]/10 px-4 py-2 rounded-full mb-6">
                                    <div className="w-2 h-2 rounded-full bg-[#E92228]"></div>
                                    <span className="text-[#E92228] text-xs font-bold uppercase tracking-wider">For Startups & Scale-ups</span>
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading mb-4 group-hover:text-[#E92228] transition-colors">
                                    Rapid Market Entry
                                </h3>

                                {/* Focus Points */}
                                <div className="space-y-3 mb-6">
                                    {["MVP in 8 weeks", "Laravel Framework", "Cost-efficiency", "Scalability for Growth"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[#E92228] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-500 italic mb-8 border-l-2 border-[#E92228] pl-4">
                                    &quot;Build a robust foundation that investors trust and users love.&quot;
                                </p>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group"
                                >
                                    Get Started
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Right - Enterprise */}
                            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 bg-gray-900/5 px-4 py-2 rounded-full mb-6">
                                    <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                                    <span className="text-gray-700 text-xs font-bold uppercase tracking-wider">For Enterprise & CTOs</span>
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-heading mb-4 group-hover:text-[#E92228] transition-colors">
                                    Legacy Modernization
                                </h3>

                                {/* Focus Points */}
                                <div className="space-y-3 mb-6">
                                    {["Symfony/Laminas", "Microservices", "HIPAA/Fintech Compliance", "Long-Term Support (LTS)"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[#E92228] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-600">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-500 italic mb-8 border-l-2 border-gray-400 pl-4">
                                    &quot;De-risk your digital transformation with zero downtime.&quot;
                                </p>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group"
                                >
                                    Schedule Consultation
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECH STACK - Light Premium Cards */}
            <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technologies We Use</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The Modern Enterprise Stack
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    category: "Core",
                                    num: "01",
                                    items: [
                                        { name: "PHP 8.3", slug: "php" },
                                        { name: "Laravel", slug: "laravel" },
                                        { name: "Symfony", slug: "symfony" }
                                    ]
                                },
                                {
                                    category: "Performance",
                                    num: "02",
                                    items: [
                                        { name: "Redis", slug: "redis" },
                                        { name: "Swoole", slug: "swoole" },
                                        { name: "Elasticsearch", slug: "elasticsearch" }
                                    ]
                                },
                                {
                                    category: "DevOps",
                                    num: "03",
                                    items: [
                                        { name: "Docker", slug: "docker" },
                                        { name: "Kubernetes", slug: "kubernetes" },
                                        { name: "AWS", slug: "amazonaws" }
                                    ]
                                },
                                {
                                    category: "Testing",
                                    num: "04",
                                    items: [
                                        { name: "PHPUnit", slug: "phpunit" },
                                        { name: "Pest", slug: "pest" }, // Might settle for generic if slug invalid, but Pest has a logo often
                                        { name: "PHPStan", slug: null }
                                    ]
                                }
                            ].map((group, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300 group">
                                    {/* Number Badge */}
                                    <div className="w-12 h-12 rounded-xl bg-[#E92228]/10 flex items-center justify-center mb-4 group-hover:bg-[#E92228]/20 transition-colors duration-300">
                                        <span className="text-[#E92228] font-bold font-mono text-lg">{group.num}</span>
                                    </div>
                                    <h4 className="text-gray-900 font-bold text-lg mb-4 font-heading">{group.category}</h4>

                                    {/* Tech Items */}
                                    <div className="space-y-3">
                                        {group.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    {item.slug ? (
                                                        /* eslint-disable-next-line @next/next/no-img-element */
                                                        <img
                                                            src={`https://cdn.simpleicons.org/${item.slug}/E92228`}
                                                            alt={item.name}
                                                            className="w-6 h-6 object-contain opacity-90"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).style.display = 'none';
                                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                            }}
                                                        />
                                                    ) : (
                                                        <Code2 className="w-5 h-5 text-[#E92228]" />
                                                    )}
                                                    {/* Fallback Icon (hidden by default if slug exists) */}
                                                    <Code2 className={`w-5 h-5 text-[#E92228] ${item.slug ? 'hidden' : ''}`} />
                                                </div>
                                                <span className="text-gray-700 font-semibold text-sm">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 rounded-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-lg font-semibold text-gray-900 pr-4 font-heading">
                                            {faq.question}
                                        </span>
                                        <span className={`text-2xl font-bold transition-colors duration-300 ${openFAQ === idx ? 'text-[#E92228]' : 'text-gray-400'}`}>
                                            {openFAQ === idx ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openFAQ === idx && (
                                        <div className="px-6 pb-5 bg-gray-50">
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
            <section className="py-16 sm:py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                        Ready to Modernize Your PHP Stack?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
                        Let&apos;s engineer a high-performance platform that scales with your ambition.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer group shadow-xl"
                    >
                        Analyze My Architecture
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
