'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import {
    Compass,
    Network,
    ArrowRightLeft,
    Sparkles,
    ShieldCheck,
    Activity,
    Zap,
    Server,
    Wallet,
    Lock,
    Search,
    Code2,
    Rocket,
    Building2,
    ChevronRight,
    Brain,
    FileText,
    Cloud,
    Palette,
    GitBranch,
    Share2
} from 'lucide-react';

// Direct icon mapping for reliable display (no CDN dependency)
const techIconMap: { [key: string]: React.ReactNode } = {
    "Sitecore": <FileText className="w-5 h-5 text-[#E92228]" />,
    "Adobe AEM": <Palette className="w-5 h-5 text-[#E92228]" />,
    "Contentful": <FileText className="w-5 h-5 text-[#E92228]" />,
    "Drupal": <FileText className="w-5 h-5 text-[#E92228]" />,
    "AWS": <Cloud className="w-5 h-5 text-[#E92228]" />,
    "Azure": <Cloud className="w-5 h-5 text-[#E92228]" />,
    "Docker": <Server className="w-5 h-5 text-[#E92228]" />,
    "Kubernetes": <Network className="w-5 h-5 text-[#E92228]" />,
    "Elasticsearch": <Search className="w-5 h-5 text-[#E92228]" />,
    "OpenAI": <Sparkles className="w-5 h-5 text-[#E92228]" />,
    "Algolia": <Search className="w-5 h-5 text-[#E92228]" />,
    "MuleSoft": <GitBranch className="w-5 h-5 text-[#E92228]" />,
    "GraphQL": <Share2 className="w-5 h-5 text-[#E92228]" />,
    "REST API": <Code2 className="w-5 h-5 text-[#E92228]" />,
};

const TechIcon = ({ item }: { item: { name: string, slug: string | null } }) => {
    // Use direct Lucide icons - no CDN dependency
    if (techIconMap[item.name]) {
        return <>{techIconMap[item.name]}</>;
    }
    // Default fallback
    return <Code2 className="w-5 h-5 text-[#E92228]" />;
};

export default function CMSWebsiteLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const services = [
        { icon: Compass, title: "Content Strategy & Architecture", desc: "Information architecture audits, content modeling, and taxonomy design that ensures editorial efficiency at scale." },
        { icon: Network, title: "Headless & Composable CMS", desc: "API-first platforms (Contentful, Strapi, Sanity) that decouple content from presentation for omnichannel delivery." },
        { icon: ArrowRightLeft, title: "Legacy Platform Migration", desc: "Zero-downtime migrations from WordPress, Drupal, or Sitecore to modern, cloud-native architectures." },
        { icon: Sparkles, title: "AI-Powered Content Ops", desc: "Integrate generative AI for automated tagging, translation, summarization, and personalization workflows." },
        { icon: ShieldCheck, title: "Governance & Compliance", desc: "GDPR/CCPA-ready workflows, audit trails, role-based access controls, and content versioning." },
        { icon: Activity, title: "Performance & Analytics", desc: "Real-time dashboards, A/B testing integrations, and Core Web Vitals optimization for SEO dominance." }
    ];

    const faqs = [
        { q: "What is a Headless CMS and why should I consider it?", a: "A Headless CMS separates content management from content presentation. This allows you to deliver content to any platform—web, mobile apps, IoT devices—through APIs. It offers greater flexibility, scalability, and future-proofs your digital infrastructure." },
        { q: "How long does a typical CMS migration take?", a: "Migration timelines vary based on complexity. A standard WordPress to Headless migration typically takes 3-6 months. Enterprise migrations from Sitecore or AEM can take 6-12 months with parallel content validation and phased rollouts." },
        { q: "What CMS platforms do you specialize in?", a: "We are platform-agnostic but have deep expertise in Sitecore, Adobe AEM, Contentful, Sanity, Strapi, and Drupal. We recommend platforms based on your specific business requirements, scale, and team capabilities." },
        { q: "How do you ensure content governance and compliance?", a: "We implement role-based access controls (RBAC), content approval workflows, audit logging, and automated compliance checks for GDPR, CCPA, and accessibility standards (WCAG 2.1)." },
        { q: "Can you integrate AI into our content operations?", a: "Yes. We integrate Large Language Models (LLMs) for automated content tagging, translation, summarization, and personalization. Our AI implementations follow responsible AI principles with human oversight." }
    ];

    return (
        <main className="w-full bg-white">
            {/* 1. HERO SECTION - Dark Theme with Glassmorphism Stats */}
            <section className="relative w-full min-h-[700px] lg:min-h-[750px] overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#2a2a2a] to-[#1F1F1F]">
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.08]" style={{
                    backgroundImage: 'linear-gradient(#E92228 1px, transparent 1px), linear-gradient(90deg, #E92228 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Floating Gradient Orbs */}
                <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-[#E92228]/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-[#E92228]/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-20 lg:pt-24 lg:pb-28 items-center">
                        {/* Left - Main Content */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="text-left space-y-6">
                                {/* Eyebrow Badge */}
                                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-[#E92228] animate-pulse"></div>
                                    <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest">
                                        Enterprise Digital Transformation
                                    </span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-heading">
                                    Architecting{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">
                                        Intelligent
                                    </span>
                                    <br />
                                    Digital Experiences
                                </h1>

                                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                    Move beyond monolithic legacy systems. We build{' '}
                                    <span className="text-white font-medium">AI-integrated, headless CMS architectures</span>{' '}
                                    that drive <span className="text-[#E92228] font-semibold">83% faster time-to-market</span>{' '}
                                    and seamless omnichannel delivery.
                                </p>

                                {/* Glassmorphism Stats Row */}
                                <div className="flex flex-wrap gap-4 py-4">
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-[#E92228]" />
                                        <div>
                                            <div className="text-xl font-bold text-white font-heading">83%</div>
                                            <div className="text-gray-400 text-xs">Faster Rollouts</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                        <Network className="w-5 h-5 text-[#D1D1D1]" />
                                        <div>
                                            <div className="text-xl font-bold text-white font-heading">MACH</div>
                                            <div className="text-gray-400 text-xs">Architecture</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                                        <Server className="w-5 h-5 text-[#E92228]" />
                                        <div>
                                            <div className="text-xl font-bold text-white font-heading">99.9%</div>
                                            <div className="text-gray-400 text-xs">Uptime SLA</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-lg shadow-[#E92228]/25 cursor-pointer"
                                    >
                                        Schedule Architecture Assessment
                                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <a href="#case-studies" className="inline-flex items-center text-gray-400 hover:text-white text-base font-medium transition-colors underline underline-offset-4 py-4">
                                        View Case Studies →
                                    </a>
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

            {/* 2. BUSINESS IMPACT - The Central Nervous System */}
            <section className="py-24 lg:py-32 bg-[#f4f5f7] relative overflow-hidden">
                {/* Background: Subtle Tech Grid & Noise */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[80px] mix-blend-overlay"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left: Typography & Brand Statement */}
                        <div>
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="h-[2px] w-8 bg-[#E92228]"></div>
                                <span className="text-[#E92228] font-bold uppercase tracking-widest text-sm">Operational Core</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight text-gray-900">
                                The <span className="text-[#E92228]">Central Nervous System</span> of Your Brand
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed font-body mb-8 border-l-4 border-[#E92228] pl-6">
                                In the digital economy, your CMS is not just a repository—it is the <span className="text-gray-900 font-semibold">operational engine</span> of your business. We transition organizations from high-debt legacy monoliths to agile ecosystems.
                            </p>
                        </div>

                        {/* Right: Feature Blocks (The "Synapses") */}
                        <div className="space-y-6">
                            {[
                                { title: "Cloud-Native Ecosystem", subtitle: "MACH Architecture", icon: <Network className="w-6 h-6 text-[#E92228]" />, desc: "Scale effortlessly with infrastructure that breathes. 99.99% Uptime." },
                                { title: "Automated Supply Chain", subtitle: "Agentic AI Core", icon: <Brain className="w-6 h-6 text-[#E92228]" />, desc: "Automate tagging, translation, and distribution across 50+ locales." },
                                { title: "Omnichannel Delivery", subtitle: "Headless Distribution", icon: <Zap className="w-6 h-6 text-[#E92228]" />, desc: "Push content to Web, Mobile, IoT, and Vision Pro instantly." }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E92228] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                    <div className="flex items-start gap-5">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#fce7e7] flex items-center justify-center border border-[#E92228]/10 group-hover:bg-[#E92228] transition-colors duration-300">
                                            {React.cloneElement(item.icon, { className: "w-6 h-6 text-[#E92228] group-hover:text-white transition-colors duration-300" })}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 font-heading">{item.title}</h3>
                                            <p className="text-[#E92228] text-xs font-bold uppercase tracking-wide mb-2">{item.subtitle}</p>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE GRID - 6-Block Matrix */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Our Capabilities</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Enterprise CMS Services
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#E92228] transition-colors duration-300">
                                        <service.icon className="w-7 h-7 text-[#E92228] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-body">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY BENEFITS - ROI Data */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Measurable Impact</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The ROI of Modern CMS
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: <Zap className="w-7 h-7" />, title: "Accelerated Velocity", stat: "83%", statLabel: "Faster Rollouts", desc: "Decoupled codebases allow marketing and frontend teams to iterate instantly without risking backend stability." },
                                { icon: <Server className="w-7 h-7" />, title: "Elastic Scalability", stat: "99.9%", statLabel: "Uptime", desc: "Cloud-native architecture (K8s) that auto-scales during traffic surges like Black Friday or product launches." },
                                { icon: <Wallet className="w-7 h-7" />, title: "Cost Efficiency", stat: "30%", statLabel: "OpEx Reduction", desc: "Reduce licensing bloat and duplicative content creation through centralized \"Single Source of Truth\" assets." },
                                { icon: <Lock className="w-7 h-7" />, title: "Security Posture", stat: "Zero", statLabel: "Trust Architecture", desc: "Enterprise-grade compliance (GDPR/CCPA) with automated threat detection and immutable infrastructure." }
                            ].map((benefit, idx) => (
                                <div key={idx} className="bg-white relative overflow-hidden rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300 group">
                                    {/* Subtle decorative circle */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-50 rounded-full group-hover:bg-[#E92228]/5 transition-colors duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#E92228] transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-[#E92228]/30 group-hover:scale-110">
                                                <div className="text-[#E92228] group-hover:text-white transition-colors duration-500">
                                                    {benefit.icon}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <div className="text-4xl lg:text-5xl font-bold text-[#E92228] font-heading tracking-tight">{benefit.stat}</div>
                                            <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mt-1">{benefit.statLabel}</div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-3 group-hover:text-[#E92228] transition-colors">{benefit.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LIFECYCLE FLOW - Vertical Timeline */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Our Process</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                The Transformation Lifecycle
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform lg:-translate-x-1/2"></div>

                            {[
                                { icon: Search, title: "Assessment", timeline: "Weeks 1-4", desc: "Stakeholder interviews, legacy audit, and defining the \"Solution Architecture\" before code is written." },
                                { icon: Code2, title: "Transition", timeline: "Months 2-6", desc: "Agile development sprints. Parallel tracks for \"Platform Build\" and \"Content Migration\" to accelerate delivery." },
                                { icon: ShieldCheck, title: "Monitoring", timeline: "Launch Window", desc: "Orchestrated cutover with dry runs, automated load testing, and \"Hour-by-Hour\" launch scheduling." },
                                { icon: Rocket, title: "Optimization", timeline: "Ongoing", desc: "Continuous delivery of new features, AI model tuning, and proactive security patching." }
                            ].map((item, idx) => (
                                <div key={idx} className={`relative flex items-center gap-8 mb-12 last:mb-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-[#E92228] rounded-full transform -translate-x-1/2 z-10 ring-4 ring-white border-2 border-white"></div>

                                    {/* Content Card */}
                                    <div className={`ml-16 lg:ml-0 lg:w-[45%] bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#E92228]/30 group ${idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#E92228]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E92228] transition-colors duration-300">
                                                <item.icon className="w-6 h-6 text-[#E92228] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <p className="text-[#E92228] text-xs font-bold uppercase tracking-wider mb-1">{item.timeline}</p>
                                                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{item.title}</h3>
                                                <p className="text-gray-600 leading-relaxed font-body">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. AUDIENCE SEGMENTATION */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Tailored Solutions</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Built for Your Scale
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Card A - Startups & SMEs */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300 group">
                                <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Rocket className="w-4 h-4" />
                                    Startups & SMEs
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                                    Agility & Growth
                                </h3>

                                <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                    Lightweight, cost-effective CMS solutions (<span className="font-semibold">Laravel with Filament V3, Strapi, Payload CMS</span>) that scale with your business without enterprise overhead.
                                </p>

                                <a href="#startup" className="inline-flex items-center text-[#E92228] font-bold hover:underline">
                                    View Startup Accelerators
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                            {/* Card B - Enterprise & Public Sector */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#E92228]/30 transition-all duration-300 group">
                                <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Building2 className="w-4 h-4" />
                                    Enterprise & Public Sector
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                                    Governance & Complexity
                                </h3>

                                <p className="text-gray-600 mb-6 font-body leading-relaxed">
                                    Robust DXP implementations (<span className="font-semibold">Sitecore, Adobe AEM, Drupal</span>) designed for complex compliance needs, global content supply chains, and multi-region governance.
                                </p>

                                <a href="#enterprise" className="inline-flex items-center text-[#E92228] font-bold hover:underline">
                                    View Enterprise Solutions
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECH STACK - The Ecosystem */}
            <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Trusted Technologies</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The CMS & DXP Ecosystem
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    category: "CMS/DXP",
                                    items: [
                                        { name: "Sitecore", slug: "sitecore" },
                                        { name: "Adobe AEM", slug: "adobe" },
                                        { name: "Contentful", slug: "contentful" },
                                        { name: "Drupal", slug: "drupal" }
                                    ]
                                },
                                {
                                    category: "Cloud & Infra",
                                    items: [
                                        { name: "AWS", slug: "amazonaws" },
                                        { name: "Azure", slug: "microsoftazure" },
                                        { name: "Docker", slug: "docker" },
                                        { name: "Kubernetes", slug: "kubernetes" }
                                    ]
                                },
                                {
                                    category: "Search & AI",
                                    items: [
                                        { name: "Elasticsearch", slug: "elasticsearch" },
                                        { name: "OpenAI", slug: "openai" },
                                        { name: "Algolia", slug: "algolia" }
                                    ]
                                },
                                {
                                    category: "Integration",
                                    items: [
                                        { name: "MuleSoft", slug: "mulesoft" },
                                        { name: "GraphQL", slug: "graphql" },
                                        { name: "REST API", slug: null }
                                    ]
                                }
                            ].map((group, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300">
                                    <h4 className="text-gray-900 font-bold text-lg mb-5 font-heading">{group.category}</h4>

                                    <div className="space-y-3">
                                        {group.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <TechIcon item={item} />
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
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
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
                                <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
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
            <section className="py-20 lg:py-28 bg-[#3a3a3a] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                        Ready to Transform Your Digital Experience?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-body">
                        Let&apos;s architect a CMS solution that scales with your ambitions.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 shadow-xl cursor-pointer"
                    >
                        Schedule Architecture Assessment
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </main>
    );
}
