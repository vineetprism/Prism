'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import {
    Network,
    Unplug,
    FileText,
    Cloud,
    Bot,
    GitBranch,
    ShieldCheck,

    Search,
    Code2,
    Rocket,
    Building2,
    ChevronRight,
    Brain,
    Server,
    Database,
    Layers,
    Cpu,
    Activity,

} from 'lucide-react';

// Tech icon mapping
const techIconMap: { [key: string]: React.ReactNode } = {
    "React": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Next.js": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Vue.js": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Tailwind CSS": <Layers className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Laravel": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Python": <Brain className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Node.js": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "AWS": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "DigitalOcean": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Docker": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Kubernetes": <Network className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "PostgreSQL": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Redis": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "TimescaleDB": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
};

export default function RedevelopmentLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const services = [
        { icon: Unplug, title: "Digital Decoupling & API First", desc: "We break down monolithic barriers using \"Backend-for-Frontend\" (BFF) patterns, exposing your data via GraphQL and RESTful APIs for seamless integration." },
        { icon: FileText, title: "Headless CMS Architecture", desc: "Separate your content from your code. Omnichannel delivery to web, mobile, and IoT using Strapi, Contentful, or Sanity." },
        { icon: Cloud, title: "Cloud-Native Infrastructure", desc: "Move from fixed servers to elastic scalability. Containerized deployments (Docker/K8s) that scale to zero when idle, reducing Cloud TCO." },
        { icon: Bot, title: "AI Agent Integration", desc: "Agentic Readiness. We architect your \"Digital Core\" to support autonomous Python-based AI agents for customer service and data analysis." },
        { icon: GitBranch, title: "Legacy Migration (Strangler Fig)", desc: "Risk-free migration. We build the new system around the edges of the old one, gradually replacing functionality until the legacy system is retired." },
        { icon: ShieldCheck, title: "DevSecOps & Compliance", desc: "Security baked in, not bolted on. Automated CI/CD pipelines with SAST/DAST scanning to ensure GDPR/CCPA compliance." }
    ];

    const benefits = [
        { num: "01", title: "Velocity & Agility", stat: "50%", statLabel: "More Deploys", desc: "Increase deployment frequency by 50%. Move from quarterly \"Big Bang\" releases to daily, risk-free feature updates." },
        { num: "02", title: "Cost Efficiency", stat: "30%", statLabel: "Reduced Waste", desc: "Shift from CAPEX to OPEX. Modern cloud architectures reduce hosting waste by up to 30% via auto-scaling." },
        { num: "03", title: "Conversion Acceleration", stat: "8.4%", statLabel: "More Conversions", desc: "Speed equals revenue. A 0.1s improvement in load time can drive an 8.4% increase in retail conversions." },
        { num: "04", title: "Future-Proof Security", stat: "80", statLabel: "Days Saved", desc: "Eliminate \"Black Box\" vulnerabilities. Documented, modern codebases reduce breach containment time by 80 days." }
    ];

    const lifecycle = [
        { icon: Search, title: "AI-Driven Discovery", subtitle: "The X-Ray", desc: "We use AI tools to \"mine\" your legacy code, mapping dependencies and business logic to create a zero-loss blueprint." },
        { icon: GitBranch, title: "Strategy & Architecture", subtitle: "The Strangler", desc: "We identify \"Thin Slices\" of high-value components to migrate first, ensuring business continuity." },
        { icon: Code2, title: "Dual-Track Agile Build", subtitle: "Parallel Development", desc: "Parallel development streams ensure your current site stays live while the new \"Digital Core\" is built and tested." },
        { icon: Activity, title: "Day 2 Operations & Evolution", subtitle: "Continuous Optimization", desc: "Launch is just the start. We implement real-time observability (Datadog/New Relic) for continuous optimization." }
    ];

    const techStack = [
        { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
        { category: "Backend", items: ["Laravel", "Python", "Node.js"] },
        { category: "Infrastructure", items: ["AWS", "DigitalOcean", "Docker", "Kubernetes"] },
        { category: "Data", items: ["PostgreSQL", "Redis", "TimescaleDB"] }
    ];

    const faqs = [
        { q: "Will re-developing my site hurt my SEO rankings?", a: "No. We execute a \"No-Loss Migration\" strategy. By utilizing Next.js for Server-Side Rendering and a meticulous 301 redirect map, we often see an increase in rankings due to improved Core Web Vitals (Speed and Mobile usability)." },
        { q: "Do we have to shut down our current business during the build?", a: "Absolutely not. We use the Strangler Fig Pattern. We build the new system alongside the old one, routing specific traffic to the new features gradually. Your users never experience downtime." },
        { q: "How is this different from a standard website redesign?", a: "A redesign is a \"facelift\" (Frontend). We perform Application Modernization (Full Stack). We refactor the backend logic, decouple the database, and optimize the infrastructure. It's a fundamental business transformation, not just a paint job." },
        { q: "Can you work with our existing legacy database?", a: "Yes. We specialize in \"Binary Archaeology.\" We can build modern APIs that sit on top of your legacy databases, allowing you to keep your data while modernizing the user interface." },
        { q: "What is \"Agentic Readiness\"?", a: "Modern websites must be readable by AI. We structure your data and APIs so that future AI agents (yours or your customers') can interact with your business autonomously." }
    ];

    return (
        <main className="w-full bg-white">
            {/* 1. HERO SECTION - Clean Dark Theme (No Animation) */}
            <section className="relative w-full min-h-[750px] lg:min-h-[800px] overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">

                {/* Static Premium Gradient Layer */}
                <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-to-bl from-[#E92228]/15 via-[#E92228]/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gradient-to-tr from-gray-800/30 to-transparent"></div>

                {/* Subtle Dot Grid */}
                <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: 'radial-gradient(#E92228 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-20 pb-24 lg:pt-28 lg:pb-32 items-center">
                        {/* Left - Content */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 bg-[#E92228]/10 border border-[#E92228]/30 px-4 py-2 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-[#E92228] animate-pulse"></div>
                                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest">
                                        Application Modernization
                                    </span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] font-heading">
                                    Stop <span className="text-gray-500 line-through">&quot;Redesigning.&quot;</span>
                                    <br />
                                    Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">Reinventing.</span>
                                </h1>

                                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                    Transform your legacy monolithic website into a scalable, <span className="text-white font-medium">AI-ready Digital Core</span>. We utilize the <span className="text-[#E92228] font-semibold">Strangler Fig Pattern</span> to modernize your infrastructure without operational downtime.
                                </p>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-lg border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/25 cursor-pointer"
                                    >
                                        Schedule Technical Debt Assessment
                                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-gray-500 text-sm italic">
                                        Zero-Risk &quot;X-Ray&quot; Analysis of your current codebase.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right - Sidebar */}
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

            {/* 2. BUSINESS IMPACT - The Economic Imperative */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4 block">Why Modernize Now</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-8">
                            The Economic Imperative
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed font-body mb-8">
                            Your website is no longer just a billboard; it is the <span className="font-semibold text-gray-900">operating system of your business</span>. Legacy systems are a liability—costing you <span className="text-[#E92228] font-bold">30% more in hosting fees</span> and exposing you to security breaches averaging <span className="text-[#E92228] font-bold">$4.44M</span>.
                        </p>

                        {/* Warning Callout */}
                        <div className="bg-[#E92228]/5 border-l-4 border-[#E92228] p-5 rounded-r-xl mb-12 text-left max-w-2xl mx-auto">
                            <p className="text-gray-700 font-medium">
                                <span className="text-[#E92228] font-bold">⚠️ Technical Debt Warning:</span> Prism Infoways moves you from &quot;Lift and Shift&quot; to <span className="font-semibold">&quot;Migrate to Modernize&quot;</span>—turning your IT department from a cost center into an innovation engine.
                            </p>
                        </div>

                        {/* Visual: Monolith to Microservices - Enhanced */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200 shadow-lg">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                {/* Monolith */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="w-28 h-36 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                                            <Database className="w-12 h-12 text-gray-600" />
                                        </div>
                                        {/* Crack effect */}
                                        <div className="absolute top-4 right-2 w-0.5 h-8 bg-gray-500/50 rotate-12"></div>
                                        <div className="absolute bottom-8 left-3 w-0.5 h-6 bg-gray-500/50 -rotate-12"></div>
                                    </div>
                                    <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Monolith</span>
                                    <span className="text-[#E92228] text-xs font-medium mt-1">High Debt</span>
                                </div>

                                {/* Arrow Animation */}
                                <div className="flex items-center gap-1">
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-[#E92228]"></div>
                                    <ChevronRight className="w-8 h-8 text-[#E92228] animate-pulse" />
                                </div>

                                {/* Microservices */}
                                <div className="flex flex-col items-center group">
                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 bg-gradient-to-br from-[#E92228] to-[#ff6b6b] rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                                                style={{ animationDelay: `${i * 100}ms` }}
                                            >
                                                <Cpu className="w-5 h-5 text-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-wider">Microservices</span>
                                    <span className="text-[#E92228] text-xs font-medium mt-1">Scalable & Agile</span>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mt-8 italic">Transitioning from rigid monoliths to flexible, decoupled microservices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE GRID - 6-Block Matrix */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Modernization Capabilities</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Full-Stack Transformation
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="relative bg-gradient-to-br from-white to-red-50/30 rounded-2xl p-8 border-2 border-[#E92228] shadow-xl overflow-hidden">
                                    {/* Gradient overlay - always visible */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E92228]/0 to-[#E92228]/5"></div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-xl bg-[#E92228] flex items-center justify-center mb-6 shadow-lg shadow-[#E92228]/30">
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#E92228] font-heading mb-3">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-body">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY BENEFITS - Numbered List */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Measurable Outcomes</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The Business Case
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:from-white hover:to-white hover:shadow-2xl border border-gray-100 hover:border-[#E92228]/20 transition-all duration-500 hover:-translate-y-1">
                                    {/* Large Number */}
                                    <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#E92228]/5 flex items-center justify-center group-hover:bg-[#E92228] transition-all duration-500">
                                        <span className="text-4xl font-bold text-[#E92228] font-heading group-hover:text-white transition-colors">{benefit.num}</span>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <h3 className="text-2xl font-bold text-gray-900 font-heading">{benefit.title}</h3>
                                            {/* Stat Pill */}
                                            <div className="inline-flex items-center gap-2 bg-[#E92228]/10 px-4 py-2 rounded-full">
                                                <span className="text-2xl font-bold text-[#E92228]">{benefit.stat}</span>
                                                <span className="text-xs text-[#E92228] font-bold uppercase">{benefit.statLabel}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed font-body text-lg">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LIFECYCLE FLOW - Vertical Timeline */}
            <section className="py-20 lg:py-28 bg-[#0a0a0a] text-white relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E92228]/5 rounded-full blur-[150px]"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Our Process</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">
                                The 4-Phase Modernization Lifecycle
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Gradient Vertical Line */}
                            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E92228] via-gray-700 to-gray-800 rounded-full"></div>

                            {lifecycle.map((item, idx) => (
                                <div key={idx} className="relative flex gap-8 mb-12 last:mb-0">
                                    {/* Timeline Node */}
                                    <div className="relative z-10 shrink-0">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#E92228] rounded-full flex items-center justify-center ring-4 ring-[#0a0a0a] shadow-lg shadow-[#E92228]/30">
                                            <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 bg-gray-900 p-6 lg:p-8 rounded-2xl border border-gray-800 hover:border-[#E92228]/50 transition-colors duration-300">
                                        <p className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-2">{item.subtitle}</p>
                                        <h3 className="text-xl lg:text-2xl font-bold font-heading mb-3">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed font-body">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. AUDIENCE SEGMENTATION */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Tailored Approach</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Built for Your Reality
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Card A - Startups */}
                            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-10 border-2 border-gray-100 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Rocket className="w-4 h-4" />
                                    High-Growth Startups & SMEs
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                    Velocity & Scalability
                                </h3>

                                <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                    You need to move fast. We build <span className="font-semibold">composable stacks</span> that allow you to pivot quickly, integrate with Stripe/HubSpot instantly, and look like a Fortune 500 company from <span className="text-[#E92228] font-semibold">Day 1</span>.
                                </p>

                                <a href="#startup" className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg">
                                    Build for Speed
                                    <ChevronRight className="w-5 h-5 ml-1" />
                                </a>
                            </div>

                            {/* Card B - Enterprise */}
                            <div className="group bg-gradient-to-br from-gray-900 to-[#0a0a0a] rounded-2xl p-8 lg:p-10 border-2 border-gray-800 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Building2 className="w-4 h-4" />
                                    Enterprise & Legacy Organizations
                                </div>

                                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                                    Risk Mitigation & Security
                                </h3>

                                <p className="text-gray-400 mb-6 font-body leading-relaxed">
                                    You cannot afford downtime. Our <span className="font-semibold text-white">&quot;Strangler Fig&quot;</span> approach ensures <span className="text-[#E92228] font-semibold">zero operational disruption</span> while we pay down your technical debt and modernize your security posture.
                                </p>

                                <a href="#enterprise" className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg">
                                    Modernize Safely
                                    <ChevronRight className="w-5 h-5 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECH STACK - The Convergence Stack */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technology Partners</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The Convergence Stack
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {techStack.map((group, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200">
                                    <h4 className="text-gray-900 font-bold text-lg mb-5 font-heading">{group.category}</h4>
                                    <div className="space-y-3">
                                        {group.items.map((item, i) => (
                                            <div key={i} className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                                <div className="w-8 h-8 flex items-center justify-center">
                                                    {techIconMap[item] || <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />}
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">{item}</span>
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
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors cursor-pointer"
                                    >
                                        <span className="text-lg font-bold text-gray-900 font-heading pr-4">{faq.q}</span>
                                        <span className={`shrink-0 text-2xl font-light transition-colors ${openFAQ === idx ? 'text-[#E92228]' : 'text-gray-400'}`}>
                                            {openFAQ === idx ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openFAQ === idx && (
                                        <div className="px-6 pb-6 pt-0">
                                            <p className="text-gray-600 leading-relaxed font-body">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #E92228 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                        Ready to Reinvent Your Digital Core?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
                        Let&apos;s eliminate your technical debt and build a future-proof platform.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-lg border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-xl shadow-[#E92228]/30 cursor-pointer"
                    >
                        Schedule Technical Debt Assessment
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </main>
    );
}
