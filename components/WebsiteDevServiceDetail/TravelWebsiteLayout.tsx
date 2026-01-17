'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ConsultancyModal } from '../Modal/ConsultancyModal';
import {
    Cloud,
    Zap,
    Network,
    Brain,
    Plane,
    ShieldCheck,

    Database,
    TrendingUp,

    Search,
    Code2,
    Rocket,
    Building2,
    ChevronRight,
    Server,
    Layers,
    Activity,

} from 'lucide-react';

// Tech icon mapping
const techIconMap: { [key: string]: React.ReactNode } = {
    "Next.js": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "React Native": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Flutter": <Code2 className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Java (Spring Boot)": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Kotlin": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Node.js": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Snowflake": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "PostgreSQL": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Cassandra": <Database className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "AWS": <Cloud className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Kubernetes (EKS)": <Network className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Terraform": <Layers className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Docker": <Server className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Redis": <Zap className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Elasticsearch": <Search className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
    "Algolia": <Search className="w-5 h-5 text-gray-400 group-hover:text-[#E92228] transition-colors" />,
};

export default function TravelWebsiteLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const services = [
        { icon: Cloud, title: "Cloud-Native Microservices", desc: "Decouple your logic. We migrate rigid monoliths to scalable AWS/GCP microservices, utilizing the Strangler Fig Pattern to ensure zero downtime during transition." },
        { icon: Zap, title: "High-Performance Search Engineering", desc: "Stop the \"Thundering Herd.\" We implement multi-tier caching (Redis/ElastiCache) to achieve p99.9 latency under 25ms, ensuring instant availability checks." },
        { icon: Network, title: "Federated GraphQL Orchestration", desc: "Unified Data Graphs. We aggregate disparate APIs (Flights, Hotels, Cars) into a single endpoint, reducing network payloads and mobile battery drain." },
        { icon: Brain, title: "AI & Data Lakehouse Architecture", desc: "From Chatbots to Agentic AI. Centralize your data in Snowflake to power hyper-personalized itineraries and generative AI search agents." },
        { icon: Plane, title: "Smart GDS & NDC Integration", desc: "Bypass legacy limitations. Direct integration with Amadeus, Sabre, and NDC standards to offer \"Retail-like\" experiences (legroom, meals) directly to users." },
        { icon: ShieldCheck, title: "FinOps & Compliance Shield", desc: "Secure by Design. Full PCI-DSS and GDPR compliance architectures, coupled with automated resource downscaling to reduce cloud costs by up to 25%." }
    ];

    const benefits = [
        { num: "01", title: "Ultra-Low Latency", stat: "<160ms", statLabel: "Response Time", desc: "Keep users engaged with search results delivered in under 160ms, minimizing drop-off rates." },
        { num: "02", title: "Inventory Integrity", stat: "0", statLabel: "Double Bookings", desc: "Eliminate double-bookings. We use Distributed Locking (Redis SETNX) to manage high-concurrency \"hot\" inventory." },
        { num: "03", title: "Cloud Cost Efficiency", stat: "50-60%", statLabel: "Cost Reduction", desc: "Reduce OpEx. Our FinOps strategies and serverless implementations (AWS Lambda) cut infrastructure costs by 50-60%." },
        { num: "04", title: "Scalability on Demand", stat: "∞", statLabel: "Auto-Scaling", desc: "Ready for Black Friday. Auto-scaling Kubernetes clusters that handle traffic spikes without manual intervention." }
    ];

    const lifecycle = [
        { icon: Search, title: "Strategic Discovery & Audit", subtitle: "Phase 1", desc: "We don't guess. We map your \"Technical Debt,\" analyze legacy code, and define user personas (e.g., \"The Spontaneous Traveler\") before writing a line of code." },
        { icon: Rocket, title: "Agile Engineering & MVP", subtitle: "Phase 2", desc: "Velocity over perfection. We deploy \"Thin Slice\" architectures to validate tech stacks early, launching MVPs in as little as 30-90 days." },
        { icon: Activity, title: "Resilience & Chaos Engineering", subtitle: "Phase 3", desc: "We break it on purpose. Using Chaos Engineering, we simulate network failures and database outages to ensure your Circuit Breakers hold up under pressure." },
        { icon: TrendingUp, title: "FinOps & Continuous Optimization", subtitle: "Phase 4", desc: "Post-launch, we implement strict tagging and monitoring (Datadog/Grafana) to optimize resources and lower your cost-per-booking." }
    ];

    const techStack = [
        { category: "Frontend", items: ["Next.js", "React Native", "Flutter"] },
        { category: "Backend", items: ["Java (Spring Boot)", "Kotlin", "Node.js"] },
        { category: "Data", items: ["Snowflake", "PostgreSQL", "Cassandra"] },
        { category: "Infrastructure", items: ["AWS", "Kubernetes (EKS)", "Terraform", "Docker"] },
        { category: "Caching/Search", items: ["Redis", "Elasticsearch", "Algolia"] }
    ];

    const faqs = [
        { q: "How do you handle \"Double Bookings\" during high traffic?", a: "We implement robust concurrency control using Distributed Locking mechanisms. When a user selects a room or seat, we apply a temporary, time-bound lock (via Redis) that prevents other users from booking the same unit until the transaction clears or expires." },
        { q: "Can you migrate our legacy Mainframe/COBOL system without downtime?", a: "Yes. We utilize the Strangler Fig Pattern. We build a cloud-native \"Anti-Corruption Layer\" around your legacy system and migrate functionality piece-by-piece. This allows you to keep operating while we modernize the backend." },
        { q: "How do you manage slow responses from GDS providers (Amadeus/Sabre)?", a: "We use Asynchronous Processing and Circuit Breakers. If a provider is slow, our system serves the fast results first and \"trips the breaker\" on the slow provider to prevent your entire search engine from hanging." },
        { q: "What is your approach to Data Security and GDPR?", a: "We employ a \"Security by Design\" approach. Sensitive PII is encrypted at rest, and payment data is tokenized via secure gateways so that raw credit card numbers never touch your servers, ensuring full PCI-DSS compliance." },
        { q: "How does your architecture support \"Agentic AI\"?", a: "We build on a Data Lakehouse foundation (like Snowflake). This unifies your data, allowing LLMs to access clean, structured history to generate autonomous itineraries and personalized recommendations." }
    ];

    return (
        <main className="w-full bg-white">
            {/* 1. HERO SECTION - Unique Travel Theme with Flight Paths */}
            <section className="relative w-full min-h-[800px] lg:min-h-[850px] overflow-hidden bg-gradient-to-br from-white via-[#F9F1F0] to-white">

                {/* Animated Flight Paths Background */}
                <div className="absolute inset-0">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            {/* Flight path gradient */}
                            <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#E92228" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                            {/* Glow filter */}
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Flight curves */}
                        <path d="M-50 200 Q 300 50 700 300 T 1500 200" stroke="url(#flightGradient)" strokeWidth="2" fill="none" opacity="0.4" className="animate-pulse" />
                        <path d="M-100 400 Q 400 150 800 400 T 1600 350" stroke="url(#flightGradient)" strokeWidth="1.5" fill="none" opacity="0.3" />
                        <path d="M-50 600 Q 350 400 750 550 T 1550 500" stroke="url(#flightGradient)" strokeWidth="1" fill="none" opacity="0.25" />

                        {/* Location dots */}
                        <circle cx="150" cy="180" r="4" fill="#E92228" filter="url(#glow)" opacity="0.8" />
                        <circle cx="450" cy="120" r="3" fill="#E92228" filter="url(#glow)" opacity="0.6" />
                        <circle cx="750" cy="280" r="5" fill="#E92228" filter="url(#glow)" opacity="0.9" />
                        <circle cx="1000" cy="220" r="3" fill="#E92228" filter="url(#glow)" opacity="0.5" />
                        <circle cx="1200" cy="180" r="4" fill="#E92228" filter="url(#glow)" opacity="0.7" />
                    </svg>
                </div>

                {/* Globe Visualization on Right */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] opacity-10 pointer-events-none">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                        {/* Globe circles */}
                        <circle cx="200" cy="200" r="180" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.5" />
                        <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.4" />
                        <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                        <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.4" />
                        <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                        {/* Meridian lines */}
                        <line x1="200" y1="20" x2="200" y2="380" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                        <line x1="20" y1="200" x2="380" y2="200" stroke="#E92228" strokeWidth="0.5" opacity="0.3" />
                    </svg>
                </div>


                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 pt-24 pb-28 lg:pt-32 lg:pb-36 items-center">
                        {/* Left - Content */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E92228] to-[#ff4444] flex items-center justify-center shadow-lg shadow-[#E92228]/30">
                                        <Plane className="w-6 h-6 text-white transform -rotate-45" />
                                    </div>
                                    <div>
                                        <span className="text-gray-900 text-sm font-bold uppercase tracking-widest block">
                                            Travel Tech Engineering
                                        </span>
                                        <span className="text-[#E92228] text-xs font-medium">Next-Gen Platforms</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] font-heading">
                                    Engineered for{' '}
                                    <span className="relative inline-block">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] via-[#ff6b6b] to-[#E92228]">Velocity</span>
                                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#E92228] to-transparent rounded-full"></span>
                                    </span>
                                    <br />
                                    <span className="text-[#E92228]">The Next-Gen Travel Ecosystem.</span>
                                </h1>

                                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-body max-w-2xl">
                                    Move beyond transaction-based legacy systems. We architect <span className="text-gray-900 font-medium">cloud-native travel platforms</span> capable of handling <span className="text-[#E92228] font-bold">200k+ requests per second</span> with sub-millisecond latency.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E92228] to-[#ff4444] text-white text-base sm:text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-[#E92228]/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                    >
                                        <Plane className="w-5 h-5 mr-3 transform -rotate-45" />
                                        Book a Technical Discovery
                                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <div className="flex -space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-xs text-white font-bold">A</div>
                                            <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-xs text-white font-bold">S</div>
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E92228] to-[#ff4444] border-2 border-white flex items-center justify-center text-xs text-white">N</div>
                                        </div>
                                        <span>Amadeus • Sabre • NDC</span>
                                    </div>
                                </div>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {['Microservices', 'Federated GraphQL', 'NDC Integration', 'Real-time Inventory'].map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-xs font-medium hover:border-[#E92228]/50 hover:text-[#E92228] transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
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

            {/* 2. BUSINESS IMPACT - Era of Monolith (Unique Split Layout) */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E92228]/5 rounded-full blur-[150px]"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                            {/* Left - Big Stat */}
                            <div className="lg:col-span-2 text-center lg:text-left">
                                <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-4 block">Market Reality</span>
                                <div className="mb-6">
                                    <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E92228] to-[#ff6b6b] font-heading">$1.44T</span>
                                </div>
                                <p className="text-gray-600 text-lg">Projected travel planner market by <span className="font-bold text-gray-900">2032</span></p>
                                <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                                    <div className="w-3 h-3 rounded-full bg-[#E92228] animate-pulse"></div>
                                    <span className="text-gray-500 text-sm">Legacy infrastructure is the bottleneck</span>
                                </div>
                            </div>

                            {/* Right - Content */}
                            <div className="lg:col-span-3">
                                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-heading mb-8">
                                    The Era of the Monolith is <span className="relative">Over<span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E92228]"></span></span>.
                                </h2>

                                <div className="space-y-6">
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        The winners in 2026 aren&apos;t just selling rooms; they are mastering <span className="font-semibold text-gray-900">inventory concurrency</span>, <span className="font-semibold text-gray-900">dynamic AI pricing</span>, and <span className="font-semibold text-gray-900">data sovereignty</span>.
                                    </p>

                                    <div className="bg-gradient-to-r from-[#0c1929] to-[#0a1628] rounded-2xl p-6 border-l-4 border-[#E92228]">
                                        <p className="text-gray-300 leading-relaxed">
                                            We don&apos;t just build websites; we engineer <span className="text-[#E92228] font-bold">Intelligent Operations</span> that turn latency into conversion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE GRID - 6-Block Matrix (Unique Travel Style) */}
            <section className="py-20 lg:py-28 bg-[#0c1929] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40 L40 0" stroke="white" strokeWidth="0.5" fill="none" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">The Gold Standard Stack</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                                Enterprise-Grade Capabilities
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="group relative bg-gradient-to-br from-gray-900/80 to-[#0a1628] rounded-2xl p-8 border border-gray-800 hover:border-[#E92228]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E92228]/10 overflow-hidden">
                                    {/* Top accent bar */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E92228] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Number */}
                                    <div className="absolute top-4 right-4 text-5xl font-bold text-gray-800/30 font-heading">0{idx + 1}</div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E92228] to-[#ff4444] flex items-center justify-center mb-6 shadow-lg shadow-[#E92228]/30 group-hover:scale-110 transition-transform duration-300">
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-[#E92228] transition-colors">{service.title}</h3>
                                        <p className="text-gray-400 leading-relaxed font-body text-sm">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY BENEFITS - ROI Data */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">The ROI Data</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Hard Numbers. Real Impact.
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
                                The Engineering Lifecycle: From Audit to Automation
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
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Custom Solutions</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                Tailored Engineering Models
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Card A - Scale-Up */}
                            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-10 border-2 border-gray-100 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center gap-2 bg-[#E92228] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Rocket className="w-4 h-4" />
                                    The Scale-Up (SME/Startup)
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                                    Speed-to-Market
                                </h3>

                                <ul className="space-y-2 mb-6 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                        Rapid prototyping, MVP launch in &lt;3 months
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                        Cross-platform Mobile Apps (Flutter)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                        Cost-effective GDS integration
                                    </li>
                                </ul>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                                >
                                    Launch Your Platform
                                    <ChevronRight className="w-5 h-5 ml-1" />
                                </button>
                            </div>

                            {/* Card B - Enterprise */}
                            <div className="group bg-gradient-to-br from-gray-900 to-[#0a0a0a] rounded-2xl p-8 lg:p-10 border-2 border-gray-800 hover:border-[#E92228] transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full mb-6 text-sm font-bold">
                                    <Building2 className="w-4 h-4" />
                                    The Enterprise (Airline/Hotel Chain)
                                </div>

                                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                                    Modernization & Governance
                                </h3>

                                <ul className="space-y-2 mb-6 text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                        Mainframe-to-Cloud migration
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                        Legacy &quot;Strangulation&quot; with Strangler Fig
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                        Data Lakehouse implementation
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#E92228] shrink-0 mt-1" />
                                        Enterprise-grade Security (ISO/SOC2)
                                    </li>
                                </ul>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center text-[#E92228] font-bold hover:underline text-lg cursor-pointer"
                                >
                                    Modernize Your Infrastructure
                                    <ChevronRight className="w-5 h-5 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECH STACK - The Gold Standard */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technology Partners</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
                                The &quot;Gold Standard&quot; Stack
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
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
                            <span className="text-[#E92228] text-sm font-bold uppercase tracking-widest mb-2 block">Technical FAQ</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
                                Addressing Your Pain Points
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
                        Ready to Build the Future of Travel?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
                        Let&apos;s architect a platform that scales, converts, and dominates.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group inline-flex items-center px-10 py-5 bg-[#E92228] text-white text-lg font-bold rounded-lg border-2 border-[#E92228] hover:bg-transparent hover:text-[#E92228] transition-all duration-300 shadow-xl shadow-[#E92228]/30 cursor-pointer"
                    >
                        Book a Technical Discovery
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            <ConsultancyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </main>
    );
}
