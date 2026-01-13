// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { cn } from '@/lib/utils';
// import { WEBSITE_DEV_SOLUTIONS_DATA, ServiceCategory } from '@/data/websiteDevSolutions';

// // Define categories structure matching the design BUT with PRISM Brand Colors
// const CATEGORIES: { id: ServiceCategory; label: string; colorClass: string; activeColorClass: string; borderColorClass: string }[] = [
//     {
//         id: 'Startups',
//         label: 'STARTUPS',
//         colorClass: 'bg-[#E92228]', // Primary Red
//         activeColorClass: 'bg-[#bd202e]', // Deep Red
//         borderColorClass: 'border-[#bd202e]'
//     },
//     {
//         id: 'Enterprises',
//         label: 'ENTERPRISES',
//         colorClass: 'bg-[#1F1F1F]', // Footer Dark
//         activeColorClass: 'bg-black',
//         borderColorClass: 'border-black'
//     },
//     {
//         id: 'Expertise',
//         label: 'EXPERTISE',
//         colorClass: 'bg-gray-700', // Neutral Dark Grey for contrast
//         activeColorClass: 'bg-gray-800',
//         borderColorClass: 'border-gray-800'
//     }
// ];

// export default function Sidebar() {
//     const pathname = usePathname();
//     const currentSlug = pathname.split('/').pop();

//     // Determine initial active category based on current slug
//     const initialCategory = currentSlug && WEBSITE_DEV_SOLUTIONS_DATA[currentSlug]
//         ? WEBSITE_DEV_SOLUTIONS_DATA[currentSlug].category
//         : 'Startups';

//     const [activeCategory, setActiveCategory] = useState<ServiceCategory>(initialCategory);

//     // Update active category if URL changes
//     useEffect(() => {
//         if (currentSlug && WEBSITE_DEV_SOLUTIONS_DATA[currentSlug]) {
//             setActiveCategory(WEBSITE_DEV_SOLUTIONS_DATA[currentSlug].category);
//         }
//     }, [currentSlug]);

//     const services = Object.values(WEBSITE_DEV_SOLUTIONS_DATA).filter(s => s.category === activeCategory);
//     const activeCategoryData = CATEGORIES.find(c => c.id === activeCategory);

//     return (
//         <div className="flex w-full min-h-[450px] shadow-xl rounded-xl overflow-hidden">
//             {/* Services List Panel (Left Side of Sidebar) */}
//             <div className={cn(
//                 "flex-1 p-6 transition-all duration-300 relative",
//                 activeCategoryData?.colorClass || 'bg-[#E92228]'
//             )}>
//                 {/* Header for the panel */}
//                 <div className="mb-6 border-b border-white/20 pb-4">
//                     <h3 className="text-xl font-bold text-white uppercase tracking-wider font-heading">
//                         {activeCategory}
//                     </h3>
//                     <p className="text-sm text-white/80 mt-1">Select a service to explore</p>
//                 </div>

//                 <nav className="flex flex-col space-y-2">
//                     {services.map((service) => {
//                         const isActive = currentSlug === service.slug;
//                         return (
//                             <Link
//                                 key={service.slug}
//                                 href={`/service_details/${service.slug}`}
//                                 className={cn(
//                                     "px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg flex items-center justify-between group",
//                                     isActive
//                                         ? "bg-white text-[#E92228] font-bold shadow-lg transform translate-x-1"
//                                         : "text-white hover:bg-white/10 hover:translate-x-1"
//                                 )}
//                             >
//                                 <span>{service.title}</span>
//                                 {isActive && <span>→</span>}
//                             </Link>
//                         );
//                     })}
//                 </nav>
//             </div>

//             {/* Vertical Tabs (Right Side of Sidebar) */}
//             <div className="flex flex-col w-12 sm:w-16">
//                 {CATEGORIES.map((category) => {
//                     const isActive = activeCategory === category.id;
//                     return (
//                         <button
//                             key={category.id}
//                             onClick={() => setActiveCategory(category.id)}
//                             className={cn(
//                                 "flex-1 flex items-center justify-center relative transition-all duration-300 focus:outline-none overflow-hidden",
//                                 category.colorClass,
//                                 isActive ? "flex-[1.5] shadow-inner" : "flex-1 opacity-95 hover:opacity-100"
//                             )}
//                         >
//                             {/* Vertical Text */}
//                             <span className={cn(
//                                 "transform -rotate-90 whitespace-nowrap text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 absolute",
//                                 isActive ? "text-white scale-110" : "text-white/70"
//                             )}>
//                                 {category.label}
//                             </span>

//                             {/* Active Indicator (Arrow pointing left into content) */}
//                             {isActive && (
//                                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 
//                                     border-t-[8px] border-t-transparent
//                                     border-b-[8px] border-b-transparent
//                                     border-l-[8px] border-l-white/20"
//                                 />
//                             )}
//                         </button>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }




















'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { WEBSITE_DEV_SOLUTIONS_DATA, ServiceCategory } from '@/data/websiteDevSolutions';

// Categories with PRISM Brand Colors - matching screenshot
const CATEGORIES: {
    id: ServiceCategory;
    label: string;
    colorClass: string;
    activeColorClass: string;
}[] = [
        {
            id: 'WebsiteDevelopment',
            label: 'WEB DEV',
            colorClass: 'bg-[#E92228]',
            activeColorClass: 'bg-[#bd202e]'
        },
        {
            id: 'Enterprises',
            label: 'ENTERPRISES',
            colorClass: 'bg-[#1F1F1F]',
            activeColorClass: 'bg-black'
        },
        {
            id: 'Expertise',
            label: 'EXPERTISE',
            colorClass: 'bg-[#424242]',
            activeColorClass: 'bg-[#2a2a2a]'
        }
    ];

export default function Sidebar() {
    const pathname = usePathname();
    const currentSlug = pathname.split('/').pop();

    // Determine initial active category based on current slug
    const initialCategory = currentSlug && WEBSITE_DEV_SOLUTIONS_DATA[currentSlug]
        ? WEBSITE_DEV_SOLUTIONS_DATA[currentSlug].category
        : 'WebsiteDevelopment';

    const [activeCategory, setActiveCategory] = useState<ServiceCategory>(initialCategory);

    // Update active category if URL changes
    useEffect(() => {
        if (currentSlug && WEBSITE_DEV_SOLUTIONS_DATA[currentSlug]) {
            setActiveCategory(WEBSITE_DEV_SOLUTIONS_DATA[currentSlug].category);
        }
    }, [currentSlug]);

    const services = Object.values(WEBSITE_DEV_SOLUTIONS_DATA).filter(s => s.category === activeCategory);
    const activeCategoryData = CATEGORIES.find(c => c.id === activeCategory);

    return (
        <div className="flex w-full min-h-[420px] shadow-2xl rounded-xl overflow-hidden">
            {/* Services List Panel (Left Side) */}
            <div className={cn(
                "flex-1 transition-all duration-300",
                activeCategoryData?.colorClass || 'bg-[#E92228]'
            )}>
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/20">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider font-heading mb-1">
                        {activeCategory === 'WebsiteDevelopment' ? 'WEBSITE DEVELOPMENT SOLUTIONS' : activeCategory}
                    </h3>
                    <p className="text-xs text-white/80 font-body">
                        Select a service to explore
                    </p>
                </div>

                {/* Services Navigation */}
                <nav className="px-4 py-4 space-y-2">
                    {services.map((service) => {
                        const isActive = currentSlug === service.slug;
                        return (
                            <Link
                                key={service.slug}
                                href={`/service_details/${service.slug}`}
                                className={cn(
                                    "block px-4 py-3.5 text-sm font-semibold transition-all duration-200 rounded-lg group relative",
                                    isActive
                                        ? "bg-white text-[#E92228] shadow-lg"
                                        : "text-white hover:bg-white/10 hover:translate-x-1"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={cn(
                                        "font-body leading-tight",
                                        isActive ? "font-bold" : "font-medium"
                                    )}>
                                        {service.title}
                                    </span>
                                    {isActive && (
                                        <svg
                                            className="w-5 h-5 text-[#E92228] animate-pulse"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    )}
                                </div>

                                {/* Active indicator line */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#E92228] rounded-r-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Vertical Category Tabs (Right Side) */}
            <div className="flex flex-col w-14 sm:w-16">
                {CATEGORIES.map((category) => {
                    const isActive = activeCategory === category.id;
                    return (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "flex-1 flex items-center justify-center relative transition-all duration-300 focus:outline-none group",
                                category.colorClass,
                                isActive
                                    ? "flex-[1.5] shadow-inner"
                                    : "flex-1 opacity-90 hover:opacity-100 hover:flex-[1.2]"
                            )}
                        >
                            {/* Vertical Text */}
                            <span className={cn(
                                "transform -rotate-90 whitespace-nowrap text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300",
                                isActive
                                    ? "text-white scale-110"
                                    : "text-white/70 group-hover:text-white/90"
                            )}>
                                {category.label}
                            </span>

                            {/* Active Indicator */}
                            {isActive && (
                                <>
                                    {/* Left arrow pointing into content */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 
                                        border-t-[10px] border-t-transparent
                                        border-b-[10px] border-b-transparent
                                        border-l-[10px] border-l-white/30"
                                    />
                                    {/* Subtle glow effect */}
                                    <div className="absolute inset-0 bg-white/5" />
                                </>
                            )}

                            {/* Hover effect */}
                            {!isActive && (
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}