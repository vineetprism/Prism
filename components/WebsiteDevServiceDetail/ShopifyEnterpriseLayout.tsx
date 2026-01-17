'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import {
    ArrowRightLeft,
    Layers,
    Settings,
    Users,
    Palette,
    TrendingUp,
    Search,
    Rocket,
    Activity,
    BarChart3,
    Building2,
    Sparkles,
    ChevronRight,
    ExternalLink,
    ShoppingBag,

} from 'lucide-react';

export default function ShopifyEnterpriseLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const services = [
        { num: "01", icon: ArrowRightLeft, title: "Enterprise Migration & Replatforming", desc: "Execute \"Zero-Data-Loss\" migrations from Magento, Oracle, or Salesforce. We handle complex data mapping, SEO preservation, and 301 redirect strategies to protect your ranking." },
        { num: "02", icon: Layers, title: "Headless Commerce (Hydrogen & Oxygen)", desc: "Decouple your frontend for sub-second load times. We build React-based storefronts using Shopify Hydrogen, deployed to the edge for maximum performance." },
        { num: "03", icon: Settings, title: "Custom Middleware & ERP Integration", desc: "Synchronize your ecosystem. We build custom Node.js/Go middleware to connect Shopify seamlessly with SAP, NetSuite, and Microsoft Dynamics for real-time inventory and order logic." },
        { num: "04", icon: Users, title: "B2B & Wholesale Solutions", desc: "Digitize your B2B operations. We configure custom pricing tiers, bulk ordering, and company profiles, leveraging Shopify Plus's native B2B capabilities and custom flows." },
        { num: "05", icon: Palette, title: "High-Performance UX/UI Design", desc: "Design for conversion. Our mobile-first approach focuses on \"Shop Pay\" optimization and checkout extensibility to reduce cart abandonment and increase AOV." },
        { num: "06", icon: TrendingUp, title: "Conversion Rate Optimization (CRO)", desc: "Data-driven growth. Post-launch, we utilize A/B testing and behavioral analytics to continuously refine the user journey and maximize revenue per session." }
    ];

    const lifecycle = [
        { num: "01", icon: Search, title: "Assessment", subtitle: "The Imagine Phase", desc: "Deep Dive: We audit your legacy code, map your data structures (ETL), and define business KPIs. We benchmark your SEO to ensure no traffic is lost during the transition." },
        { num: "02", icon: Rocket, title: "Transition", subtitle: "The Deliver Phase", desc: "Build & Migrate: We execute the \"heavy lifting\"—frontend development, middleware construction, and rigorous data validation. We employ automated testing to verify every SKU and customer record." },
        { num: "03", icon: Activity, title: "Monitoring", subtitle: "The Validation Phase", desc: "Launch & Stabilize: Cutover management with precise DNS updates. We monitor server logs, 404 errors, and payment gateways in real-time to ensure immediate stability." },
        { num: "04", icon: BarChart3, title: "Optimization", subtitle: "The Run Phase", desc: "Growth & Scale: The launch is just day one. We transition to a growth retainer, using analytics to refine the funnel, personalization to increase AOV, and ongoing feature enhancements." }
    ];

    const techStack = [
        { category: "Core", items: ["Shopify Plus", "Hydrogen", "Oxygen"] },
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Go (Golang)", "GraphQL", "Redis"] },
        { category: "Integrations", items: ["NetSuite", "SAP", "Microsoft Dynamics", "Segment", "Klaviyo", "Yotpo"] }
    ];

    const faqs = [
        { q: "How do you handle data migration from legacy platforms like Magento?", a: "We use a proprietary ETL (Extract, Transform, Load) process. We don't just \"import\" data; we clean, restructure, and validate it programmatically to match Shopify's document-oriented architecture, ensuring zero data loss." },
        { q: "Will I lose my SEO rankings during replatforming?", a: "Not with our strategy. We conduct a full crawl of your existing site to map every URL. We implement a comprehensive 301 redirect map and transfer all meta-data and schema tags, protecting your organic traffic." },
        { q: "Do I really need Headless Commerce?", a: "Headless is ideal for brands requiring unique, \"app-like\" experiences or sub-second performance. If your needs are simpler, we can build high-performance Liquid themes. We help you choose the right architecture based on your ROI goals." },
        { q: "Can you integrate Shopify with my existing ERP?", a: "Yes. We specialize in building custom middleware layers using Node.js to sync inventory, orders, and customer data between Shopify Plus and ERPs like SAP, NetSuite, and Microsoft Dynamics in real-time." },
        { q: "What happens after the site launches?", a: "We transition to our \"Run Phase.\" We offer support retainers that cover security patches, feature updates, and Conversion Rate Optimization (CRO) to ensure your store continues to grow." }
    ];

    return (
        <main className="w-full bg-white">
            {/* 1. HERO SECTION - Brand Dark Theme */}
            <section className="relative w-full min-h-[800px] lg:min-h-[850px] overflow-hidden bg-black">

                {/* Aurora Mesh Gradients */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#E92228] opacity-20 rounded-full blur-[150px]"></div>
                    <div className="absolute top-[30%] right-[-15%] w-[700px] h-[700px] bg-[#bd202e] opacity-15 rounded-full blur-[180px]"></div>
                    <div className="absolute bottom-[-30%] left-[20%] w-[500px] h-[500px] bg-[#E92228] opacity-10 rounded-full blur-[120px]"></div>
                </div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Floating Glass Elements */}
                <div className="absolute top-[15%] right-[8%] w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-2xl backdrop-blur-sm border border-white/10 hidden xl:block animate-pulse"></div>
                <div className="absolute bottom-[25%] right-[15%] w-20 h-20 bg-gradient-to-br from-[#E92228]/20 to-transparent rounded-xl backdrop-blur-sm border border-[#E92228]/20 hidden xl:block"></div>
                <div className="absolute top-[40%] left-[5%] w-16 h-16 bg-gradient-to-br from-[#E92228]/10 to-transparent rounded-lg backdrop-blur-sm border border-[#E92228]/10 hidden xl:block"></div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-24 pb-28 lg:pt-32 lg:pb-36 items-center">
                        {/* Left - Content */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-[#E92228] rounded-full animate-pulse"></div>
                                    <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">
                                        Shopify Plus Partner
                                    </span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] font-heading">
                                    Turn Commerce{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b]">Complexity</span>
                                    <br />
                                    <span className="text-gray-300">into Revenue at Scale.</span>
                                </h1>

                                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                    Move beyond rigid legacy systems. We engineer <span className="text-white font-medium">composable, high-performance Shopify Plus ecosystems</span> designed for <span className="text-[#E92228] font-semibold">99.99% uptime</span> and measurable TCO reduction.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group inline-flex items-center px-8 py-4 bg-[#E92228] text-white text-base sm:text-lg font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-300 cursor-pointer"
                                    >
                                        <ShoppingBag className="w-5 h-5 mr-3" />
                                        Schedule Your Strategic Consult
                                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <button className="inline-flex items-center text-gray-400 hover:text-[#E92228] font-medium transition-colors duration-200 cursor-pointer py-4">
                                        <span className="underline underline-offset-4 decoration-gray-600 hover:decoration-[#E92228]">View Migration Framework</span>
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </button>
                                </div>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-3 pt-4">
                                    {['Shopify Plus', 'Hydrogen', 'Headless Commerce', 'ERP Integration'].map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-sm font-medium hover:border-[#E92228]/50 hover:text-white transition-all cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right - Sidebar */}
                        <div className="hidden lg:block w-full lg:w-[40%] xl:w-[35%] relative z-20">
                            <Sidebar />
                        </div>
                    </div>
                </div>

                {/* CSS for Rain Animation */}
                <style jsx>{`
                    @keyframes rainDrop {
                        0% { transform: translateY(-100%); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: translateY(100%); opacity: 0; }
                    }
                `}</style>
            </section>

            {/* 2. BUSINESS IMPACT - Minimalist White */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-gray-800 leading-relaxed mb-12">
                            &quot;The era of the monolithic commerce suite is over. Modern enterprises require agility without sacrificing stability.&quot;
                        </blockquote>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gradient-to-br from-[#E92228]/5 to-[#E92228]/10 rounded-2xl p-8 border border-[#E92228]/20">
                                <span className="text-5xl sm:text-6xl font-bold text-[#E92228] font-heading">33%</span>
                                <p className="text-gray-600 mt-2">Reduction in Total Cost of Ownership</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#E92228]/5 to-[#E92228]/10 rounded-2xl p-8 border border-[#E92228]/20">
                                <span className="text-5xl sm:text-6xl font-bold text-[#E92228] font-heading">50%</span>
                                <p className="text-gray-600 mt-2">Faster Speed-to-Market</p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            We don&apos;t just build websites; we execute <span className="font-semibold text-gray-900">digital transformations</span>. By shifting to a cloud-native, composable architecture with Prism Infoways, enterprises bridge the gap between <span className="text-[#E92228] font-semibold">technical complexity</span> and <span className="text-[#E92228] font-semibold">business growth</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE GRID - 6-Block */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Enterprise Capabilities</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Full-Spectrum Commerce Solutions
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="group relative bg-white rounded-2xl p-8 border-t-4 border-[#E92228] border-x border-b border-x-gray-200 border-b-gray-200 shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                    {/* Number */}
                                    <div className="absolute top-4 right-4 text-6xl font-bold text-[#E92228]/20 font-heading">{service.num}</div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-xl bg-[#E92228] flex items-center justify-center mb-6 shadow-lg shadow-[#E92228]/20">
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#E92228] font-heading mb-3">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-body text-sm">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. LIFECYCLE FLOW - Vertical Timeline */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Our Methodology</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The Prism Delivery Lifecycle
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Center Vertical Line */}
                            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E92228] via-[#E92228]/50 to-gray-200 rounded-full"></div>

                            {lifecycle.map((item, idx) => (
                                <div key={idx} className={`relative flex gap-8 mb-16 last:mb-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Timeline Node */}
                                    <div className="relative z-10 shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#E92228] rounded-full flex items-center justify-center ring-4 ring-white shadow-lg shadow-[#E92228]/30">
                                            <span className="text-white font-bold text-lg">{item.num}</span>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 lg:w-[45%] ${idx % 2 === 1 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                                        <div className="bg-gray-50 p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-[#E92228]/30 hover:shadow-lg transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-3">
                                                <item.icon className="w-6 h-6 text-[#E92228]" />
                                                <span className="text-[#E92228] text-xs font-bold uppercase tracking-wider">{item.subtitle}</span>
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-3">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed font-body">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. AUDIENCE SEGMENTATION */}
            <section className="py-20 lg:py-28 bg-[#1F1F1F]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Choose Your Path</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                                Which Lane Are You In?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Card A - D2C Brands */}
                            <div className="group bg-white rounded-3xl p-8 lg:p-10 border-2 border-transparent hover:border-[#E92228] transition-all duration-300 hover:shadow-2xl">
                                <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Sparkles className="w-4 h-4" />
                                    For High-Growth D2C Brands
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                    Speed, Brand, Conversion.
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    You need to launch fast and look world-class. We focus on <span className="font-semibold">Headless UX</span>, high-converting checkout flows, and marketing integrations (Klaviyo/Attentive) to drive immediate sales velocity.
                                </p>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center px-6 py-3 bg-[#E92228] text-white font-bold rounded-full border-2 border-[#E92228] hover:bg-white hover:text-[#E92228] transition-all duration-200 cursor-pointer"
                                >
                                    Explore Brand Solutions
                                    <ChevronRight className="w-5 h-5 ml-1" />
                                </button>
                            </div>

                            {/* Card B - Enterprise */}
                            <div className="group bg-[#1F1F1F] rounded-3xl p-8 lg:p-10 border-2 border-white/10 hover:border-[#E92228] transition-all duration-300 hover:shadow-2xl">
                                <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Building2 className="w-4 h-4" />
                                    For Global Enterprises
                                </div>

                                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                                    Compliance, Integration, Scale.
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    You need to de-risk complex operations. We focus on <span className="font-semibold text-white">ERP connectivity</span>, multi-currency/multi-language setups, SSO, and handling high-volume API thresholds for global logistics.
                                </p>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-white hover:bg-[#E92228] hover:text-white hover:border-[#E92228] transition-all duration-200 cursor-pointer"
                                >
                                    Explore Enterprise Solutions
                                    <ChevronRight className="w-5 h-5 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECH STACK */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technology Partners</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Powered by Best-in-Class Technology
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {techStack.map((group, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#E92228]/30 transition-colors">
                                    <h4 className="text-[#E92228] font-bold text-sm uppercase tracking-wider mb-4">{group.category}</h4>
                                    <div className="space-y-3">
                                        {group.items.map((item, i) => (
                                            <div key={i} className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#E92228] transition-colors"></div>
                                                <span className="text-gray-700 font-medium text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="py-20 lg:py-28 bg-gray-50">
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
                                        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition-all ${openFAQ === idx ? 'bg-[#E92228] text-white' : 'bg-gray-100 text-[#E92228]'}`}>
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
            <section className="py-24 lg:py-32 bg-gradient-to-r from-[#E92228] to-[#c91e23] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                        Ready to Transform Your Commerce?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-body">
                        Let&apos;s architect a Shopify Plus ecosystem that scales with your ambitions.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group inline-flex items-center px-10 py-5 bg-white text-[#E92228] text-lg font-bold rounded-full border-2 border-white hover:bg-[#E92228] hover:text-white hover:border-[#E92228] transition-all duration-300 cursor-pointer"
                    >
                        Schedule Your Strategic Consult
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </main>
    );
}
