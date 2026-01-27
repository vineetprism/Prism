'use client';

import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const BRAND_COLOR = '#E92228';
const CONTACT_INFO = {
    phone: '+91-8062177080',
    email: 'info@prisminfoways.com',
    whatsapp: '+91-8062177080',
};

const WEBSITE_DEV_SOLUTIONS = [
    { title: 'Static website development', href: '/service_details/website-development/static-website-development' },
    { title: 'Corporate website development', href: '/service_details/website-development/corporate-website-development' },
    { title: 'Dynamic website development', href: '/service_details/website-development/dynamic-website-development' },
    { title: 'PHP Website Development', href: '/service_details/website-development/php-website-development' },
    { title: 'CMS Website Development', href: '/service_details/website-development/cms-website-development' },
    { title: 'Website Re-development', href: '/service_details/website-development/website-re-development' },
    { title: 'Travel Website Development', href: '/service_details/website-development/travel-website-development' },
    { title: 'React Js website Development', href: '/service_details/website-development/react-js-website-development' },
    { title: 'Angular Website Development', href: '/service_details/website-development/angular-website-development' },
    { title: 'Flutter Web Development', href: '/service_details/website-development/flutter-web-development' },
    { title: 'Wordpress Development', href: '/service_details/website-development/wordpress-development' },
    { title: 'Food Business Web Development', href: '/service_details/website-development/food-business-web-development' },
    { title: 'Custom Business Portal Development', href: '/service_details/website-development/custom-business-portal-development' },
    { title: 'Ecommerce Web development', href: '/service_details/website-development/ecommerce-web-development' },
    { title: 'Landing Page Development', href: '/service_details/website-development/landing-page-development' },
    { title: 'Shopify Website Development', href: '/service_details/website-development/shopify-website-development' },
];

// App Development Solutions (static data)
const APP_DEV_SOLUTIONS = [
    { title: 'Android App Development', href: '/service_details/app-development/android-app-development' },
    { title: 'iOS App Development', href: '/service_details/app-development/ios-app-development' },
    { title: 'Mobile App Design', href: '/service_details/app-development/mobile-app-design' },
    { title: 'Swift App Development', href: '/service_details/app-development/swift-app-development' },
    { title: 'Flutter App Development', href: '/service_details/app-development/flutter-app-development' },
    { title: 'React Native App Development', href: '/service_details/app-development/react-native-app-development' },
    { title: 'Gaming App Development', href: '/service_details/app-development/gaming-app-development' },
    { title: 'Xamarin App Development', href: '/service_details/app-development/xamarin-app-development' },
    { title: 'iOS SDK App Development', href: '/service_details/app-development/ios-sdk-app-development' },
    { title: 'Android SDK App Development', href: '/service_details/app-development/android-sdk-app-development' },
    { title: 'Ecommerce App Development', href: '/service_details/app-development/ecommerce-app-development' },
    { title: 'Education App Development', href: '/service_details/app-development/education-app-development' },
    { title: 'Corporate Business App Development', href: '/service_details/app-development/corporate-business-app-development' },
    { title: 'Food Delivery App Development', href: '/service_details/app-development/food-delivery-app-development' },
    { title: 'Job Portal App Development', href: '/service_details/app-development/job-portal-app-development' },
    { title: 'Astrology App Development', href: '/service_details/app-development/astrology-app-development' },
    { title: 'Restaurant App Development', href: '/service_details/app-development/restaurant-app-development' },
    { title: 'Taxi/Cab App Development', href: '/service_details/app-development/taxi-cab-app-development' },
    { title: 'Real Estate App Development', href: '/service_details/app-development/real-estate-app-development' },
    { title: 'Kotlin App Development', href: '/service_details/app-development/kotlin-app-development' },
    { title: 'All Business App Development', href: '/service_details/app-development/all-business-app-development' },
    { title: 'Custom App Development', href: '/service_details/app-development/custom-app-development' },
    { title: 'Website to App Development', href: '/service_details/app-development/website-to-app-development' },
];

// Our Services (static data - general services)
const OUR_SERVICES = [
    { title: 'Mobile App Development', href: '/service_details/mobile-app-development' },
    { title: 'Cloud Computing', href: '/service_details/cloud-computing-solutions' },
    { title: 'AI & ML', href: '/service_details/artificial-intelligence-machine-learning-solutions' },
    { title: 'Digital Marketing', href: '/service_details/digital-marketing' },
    { title: 'E-commerce Solutions', href: '/service_details/ecommerce-solutions' },
    { title: 'IT Consulting', href: '/service_details/it-consulting' },
    { title: 'Cybersecurity', href: '/service_details/cybersecurity-solutions' },
    { title: 'Blockchain Development', href: '/service_details/blockchain-development' },
    { title: 'UI/UX Design', href: '/service_details/ui-ux-design' },
    { title: 'Web Development', href: '/service_details/web-development' },
];

// Cybersecurity Solutions (static data)
const CYBERSECURITY_SOLUTIONS = [
    { title: 'Managed Cybersecurity Services', href: '/service_details/cybersecurity/managed-cybersecurity-services' },
    { title: 'Cybersecurity Risk Assessment Services', href: '/service_details/cybersecurity/cybersecurity-risk-assessment-services' },
    { title: 'Virtual CISO Services & Solutions', href: '/service_details/cybersecurity/virtual-ciso-services-solutions' },
    { title: 'Multi Factor Authentication Managed Services', href: '/service_details/cybersecurity/multi-factor-authentication-managed-services' },
    { title: 'Endpoint Detection & Response Services', href: '/service_details/cybersecurity/endpoint-detection-response-services' },
    { title: 'Intrusion Detection & Response Services', href: '/service_details/cybersecurity/intrusion-detection-response-services' },
    { title: 'Phishing Prevention Training Services', href: '/service_details/cybersecurity/phishing-prevention-training-services' },
    { title: 'Vulnerability Testing & Assessment Services', href: '/service_details/cybersecurity/vulnerability-testing-assessment-services' },
    { title: 'Professional Dark Web Monitoring', href: '/service_details/cybersecurity/professional-dark-web-monitoring' },
];

const BASE_NAV_ITEMS = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    {
        title: 'Our Services',
        items: WEBSITE_DEV_SOLUTIONS // Initialize with static data
    },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Blogs', href: '/blog' },
    { title: 'Careers', href: '/career' },
    { title: 'Contact Us', href: '/contact' },
];

// WhatsApp Icon ...
const WhatsAppIcon = React.memo(React.forwardRef<
    HTMLDivElement,
    { className?: string; size?: number; strokeWidth?: number; style?: React.CSSProperties }
>(({ className = '', size }, ref) => {
    let computedSize = size || 24;
    if (!size && className) {
        if (className.includes('xl:h-10') || className.includes('xl:w-10')) computedSize = 40;
        else if (className.includes('lg:h-8') || className.includes('lg:w-8')) computedSize = 32;
        else if (className.includes('h-6') || className.includes('w-6')) computedSize = 24;
        else if (className.includes('h-5') || className.includes('w-5')) computedSize = 20;
        else if (className.includes('md:h-6') || className.includes('md:w-6')) computedSize = 24;
        else if (className.includes('sm:h-5') || className.includes('sm:w-5')) computedSize = 20;
    }

    return (
        <div
            ref={ref}
            className={cn('inline-flex items-center justify-center', className)}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width={computedSize}
                height={computedSize}
                fill={BRAND_COLOR}
                style={{
                    width: `${computedSize}px`,
                    height: `${computedSize}px`,
                }}
            >
                <path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8 
                0 2.256.592 4.448 1.712 6.384L3.2 28.8 l6.576-1.68A12.72 
                12.72 0 0 0 16 28.8c7.064 0 12.8-5.736 12.8-12.8 
                0-7.064-5.736-12.8-12.8-12.8zm0 23.04c-2.08 0-4.112-.552-5.92-1.6l-.424-.248-3.904.992 
                1.024-3.808-.272-.448A10.53 10.53 0 0 1 5.28 16c0-5.888 
                4.832-10.72 10.72-10.72S26.72 10.112 26.72 16 
                21.888 26.24 16 26.24zm5.44-7.616c-.296-.152-1.744-.864-2.016-.96-.272-.112-.472-.152-.672.152-.2.296-.768.96-.944 
                1.152-.176.192-.352.224-.648.08-.296-.152-1.248-.456-2.376-1.456-.88-.784-1.472-1.76-1.648-2.064-.176-.304-.02-.464.132-.616.136-.136.304-.352.456-.528.152-.176.2-.304.304-.504.104-.2.056-.376-.024-.528-.08-.152-.672-1.616-.92-2.208-.24-.576-.48-.496-.672-.504-.176-.008-.376-.008-.576-.008-.2 
                0-.528.08-.8.376-.272.296-1.04 1.016-1.04 2.48 0 1.464 
                1.064 2.88 1.208 3.08.152.2 2.088 3.192 5.064 4.464.708.304 1.26.488 
                1.688.624.712.224 1.36.192 1.872.12.576-.088 1.744-.712 1.992-1.408.248-.696.248-1.296.176-1.408-.072-.112-.264-.176-.56-.328z"/>
            </svg>
        </div>
    );
}));
WhatsAppIcon.displayName = 'WhatsAppIcon';

const ContactButton = React.memo(function ContactButton({
    href,
    icon,
    label,
    isMobile = false,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    isMobile?: boolean;
}) {
    return (
        <Button
            asChild
            variant={isMobile ? 'outline' : 'ghost'}
            size={isMobile ? 'lg' : 'icon'}
            className={cn(
                'transition-all duration-200',
                isMobile ? 'w-full gap-2 hover:bg-red-50 hover:text-red-600' : 'h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 hover:bg-red-50 hover:text-red-600'
            )}
        >
            <Link href={href} className="inline-flex items-center gap-2" target={isMobile ? '_blank' : undefined}>
                {icon}
                {isMobile && <span className="text-sm font-medium">{label}</span>}
            </Link>
        </Button>
    );
});
ContactButton.displayName = 'ContactButton';

type NavItem = {
    title: string;
    href?: string;
    description?: string;
    items?: Array<{ title: string; href: string; description?: string }>;
};

const DesktopNav = React.memo(({ navItems }: { navItems: NavItem[] }) => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const [pos, setPos] = useState<{ left: number; top: number; buttonLeft: number; buttonWidth: number } | null>(null);
    const menuRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                setOpenIdx(null);
            }
        }
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('keydown', onKey);
            // clear any pending timer on unmount
            if (closeTimer.current) {
                clearTimeout(closeTimer.current);
                closeTimer.current = null;
            }
        };
    }, []);

    const handleOpen = useCallback((index: number) => {
        const btn = menuRefs.current[index];
        if (!btn) {
            setOpenIdx(null);
            setPos(null);
            return;
        }
        const rect = btn.getBoundingClientRect();
        const top = rect.bottom + 8;

        setPos({
            left: rect.left,
            top,
            buttonLeft: rect.left,
            buttonWidth: rect.width
        });
        setOpenIdx(index);
    }, []);

    const handleClose = useCallback(() => {
        setOpenIdx(null);
        setPos(null);
    }, []);

    const handleMouseLeaveButton = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        closeTimer.current = setTimeout(() => {
            setOpenIdx(null);
            setPos(null);
            closeTimer.current = null;
        }, 150);
    }, []);

    const handleMouseEnterMenu = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    }, []);

    const handleMouseLeaveMenu = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        closeTimer.current = setTimeout(() => {
            setOpenIdx(null);
            setPos(null);
            closeTimer.current = null;
        }, 150);
    }, []);

    return (
        <>
            <nav className="hidden md:flex flex-1 justify-center items-center relative">
                <div className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                    {navItems.map((item, idx) => {
                        if (!item.items) {
                            return (
                                <Link
                                    key={item?.title}
                                    href={item?.href ?? '#'}
                                    aria-label={item?.title}
                                    className="text-sm md:text-base font-medium text-foreground transition-colors duration-200 hover:text-red-600 whitespace-nowrap cursor-pointer"
                                >
                                    {item?.title}
                                </Link>
                            );
                        }

                        return (
                            <div key={item?.title} className="relative">
                                <button
                                    ref={(el) => { menuRefs.current[idx] = el; }}
                                    onMouseEnter={() => {
                                        if (closeTimer.current) {
                                            clearTimeout(closeTimer.current);
                                            closeTimer.current = null;
                                        }
                                        handleOpen(idx);
                                    }}
                                    onFocus={() => handleOpen(idx)}
                                    onMouseLeave={handleMouseLeaveButton}
                                    className="text-sm md:text-base font-medium text-foreground transition-colors duration-200 hover:text-red-600 flex items-center gap-1 whitespace-nowrap cursor-pointer"
                                    aria-expanded={openIdx === idx}
                                    aria-haspopup="menu"
                                    aria-label={item?.title}
                                >
                                    {item?.title}
                                    <ChevronDown className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-200" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </nav>

            {openIdx !== null && pos && navItems[openIdx]?.items && typeof document !== 'undefined'
                ? createPortal(
                    <div
                        onMouseEnter={handleMouseEnterMenu}
                        onMouseLeave={handleMouseLeaveMenu}
                        style={{
                            position: 'fixed',
                            left: pos.left,
                            top: pos.top,
                            transform: 'translateX(-50%)',
                            marginLeft: `${pos.buttonWidth / 2}px`,
                            pointerEvents: 'auto',
                            zIndex: 9999,
                        }}
                    >
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderLeft: '8px solid transparent',
                                    borderRight: '8px solid transparent',
                                    borderBottom: '8px solid white',
                                    filter: 'drop-shadow(0 -2px 2px rgba(0,0,0,0.05))',
                                }}
                            />
                            <div
                                className="bg-white rounded-md shadow-lg ring-1 ring-black/5 overflow-hidden"
                                style={{
                                    width: '1450px',
                                    maxWidth: '95vw',
                                }}
                            >
                                <div className="flex flex-col md:flex-row md:items-stretch">
                                    {/* Website Development Solutions - Column 1 (Scrollable) */}
                                    <div className="w-full md:w-1/4 px-4 py-5 relative group">
                                        <h4 className="text-sm font-bold text-red-600 mb-5 uppercase tracking-wide">Website Development Solutions</h4>
                                        <div className="relative">
                                            <ul className="space-y-1.5 max-h-[450px] overflow-y-auto custom-scrollbar pr-2 relative z-10 pb-4">
                                                {WEBSITE_DEV_SOLUTIONS.map((s, i) => (
                                                    <li key={s.title + i}>
                                                        <Link
                                                            href={s.href}
                                                            onClick={handleClose}
                                                            aria-label={s.title}
                                                            className="block px-2 py-1 hover:bg-red-50 hover:text-red-600 transition-colors duration-150 rounded cursor-pointer"
                                                        >
                                                            <span className="text-sm font-semibold text-foreground">{s.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* Scroll Indicator Gradient */}
                                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-px bg-gray-200" />

                                    {/* Our Services - Column 2 */}
                                    <div className="w-full md:w-1/4 px-4 py-5">
                                        <h4 className="text-sm font-bold text-red-600 mb-5 uppercase tracking-wide">Our Services</h4>
                                        <ul className="space-y-1.5">
                                            {OUR_SERVICES.map((s, i) => (
                                                <li key={s.title + i}>
                                                    <Link
                                                        href={s.href}
                                                        onClick={handleClose}
                                                        aria-label={s.title}
                                                        className="block px-2 py-1 hover:bg-red-50 hover:text-red-600 transition-colors duration-150 rounded cursor-pointer"
                                                    >
                                                        <span className="text-sm font-semibold text-foreground">{s.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="hidden md:block w-px bg-gray-200" />

                                    {/* App Development Solutions - Column 3 (Scrollable) */}
                                    <div className="w-full md:w-1/4 px-4 py-5 relative group">
                                        <h4 className="text-sm font-bold text-red-600 mb-5 uppercase tracking-wide">App Development Solutions</h4>
                                        <div className="relative">
                                            <ul className="space-y-1.5 max-h-[450px] overflow-y-auto custom-scrollbar pr-2 relative z-10 pb-4">
                                                {APP_DEV_SOLUTIONS.map((s, i) => (
                                                    <li key={s.title + i}>
                                                        <Link
                                                            href={s.href}
                                                            onClick={handleClose}
                                                            aria-label={s.title}
                                                            className="block px-2 py-1 hover:bg-red-50 hover:text-red-600 transition-colors duration-150 rounded cursor-pointer"
                                                        >
                                                            <span className="text-sm font-semibold text-foreground">{s.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* Scroll Indicator Gradient */}
                                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-px bg-gray-200" />

                                    {/* Cybersecurity Solutions - Column 4 */}
                                    <div className="w-full md:w-1/4 px-4 py-5">
                                        <h4 className="text-sm font-bold text-red-600 mb-5 uppercase tracking-wide">Cybersecurity Solutions</h4>
                                        <ul className="space-y-1.5">
                                            {CYBERSECURITY_SOLUTIONS.map((s, i) => (
                                                <li key={s.title + i}>
                                                    <Link
                                                        href={s.href}
                                                        onClick={handleClose}
                                                        aria-label={s.title}
                                                        className="block px-2 py-1 hover:bg-red-50 hover:text-red-600 transition-colors duration-150 rounded cursor-pointer"
                                                    >
                                                        <span className="text-sm font-semibold text-foreground">{s.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
                : null}
        </>
    );
});
DesktopNav.displayName = 'DesktopNav';

// MobileNav and rest unchanged...
const MobileNav = React.memo(function MobileNav({
    isOpen,
    onOpenChange,
    navItems,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    navItems: NavItem[];
}) {
    const [openServices, setOpenServices] = useState<boolean>(false);

    const handleNavClick = useCallback(() => {
        onOpenChange(false);
    }, [onOpenChange]);

    const toggleServices = useCallback(() => {
        setOpenServices((v) => !v);
    }, []);

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden h-12 w-12 sm:h-12 sm:w-12 hover:bg-red-50 hover:text-red-600" aria-label="Toggle navigation menu">
                    {isOpen ? <X className="h-12 w-12 sm:h-12 sm:w-12" aria-hidden="true" /> : <Menu className="h-12 w-12 sm:h-12 sm:w-12" aria-hidden="true" />}
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:w-[350px] md:w-[380px] p-0 flex flex-col max-w-full">
                <div className="border-b p-3 sm:p-4">
                    <Link href="/" onClick={handleNavClick} aria-label="Home">
                        <Image src="/logo/logo.webp" alt="Prism Infoways" width={120} height={38} className="h-14 sm:h-16 w-auto" />
                    </Link>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 pt-3 sm:pt-4">
                    <div className="space-y-3 sm:space-y-4">
                        {navItems?.map((item) => (
                            <React.Fragment key={item.title}>
                                <div className="space-y-2 sm:space-y-3">
                                    {item.items ? (
                                        <>
                                            <button
                                                onClick={toggleServices}
                                                aria-label={item.title}
                                                className="w-full flex items-center justify-between px-2 py-1.5 sm:py-2 cursor-pointer"
                                                aria-expanded={openServices}
                                            >
                                                <span className="font-bold text-sm sm:text-base text-foreground">{item.title}</span>
                                                <ChevronDown
                                                    className={cn('w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200', openServices ? 'rotate-180' : 'rotate-0')}
                                                    aria-hidden="true"
                                                />
                                            </button>

                                            <div className={cn(openServices ? 'block' : 'hidden', 'pl-3 sm:pl-4')}>
                                                {/* Website Development Solutions - Sub section */}
                                                <p className="text-xs font-bold text-red-600 uppercase tracking-wide mt-2 mb-2 px-2">Website Development Solutions</p>
                                                <ul className="space-y-0.5 sm:space-y-1 mb-4">
                                                    {WEBSITE_DEV_SOLUTIONS.slice(0, 8).map((subItem) => (
                                                        <li key={subItem.title}>
                                                            <Link
                                                                href={subItem.href}
                                                                onClick={handleNavClick}
                                                                aria-label={subItem.title}
                                                                className="block text-sm sm:text-base font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded transition-colors duration-150 hover:bg-red-600 hover:text-white cursor-pointer"
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Our Services - Sub section */}
                                                <p className="text-xs font-bold text-red-600 uppercase tracking-wide mt-2 mb-2 px-2">Our Services</p>
                                                <ul className="space-y-0.5 sm:space-y-1 mb-4">
                                                    {item.items?.map((subItem) => (
                                                        <li key={subItem.title}>
                                                            <Link
                                                                href={subItem.href || '#'}
                                                                onClick={handleNavClick}
                                                                aria-label={subItem.title}
                                                                className="block text-sm sm:text-base font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded transition-colors duration-150 hover:bg-red-600 hover:text-white cursor-pointer"
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Separator Line */}
                                                <div className="h-px bg-gray-200 my-4" />

                                                {/* App Development Solutions - Sub section */}
                                                <p className="text-xs font-bold text-red-600 uppercase tracking-wide mt-2 mb-2 px-2">App Development Solutions</p>
                                                <ul className="space-y-0.5 sm:space-y-1">
                                                    {APP_DEV_SOLUTIONS.map((subItem) => (
                                                        <li key={subItem.title}>
                                                            <Link
                                                                href={subItem.href}
                                                                onClick={handleNavClick}
                                                                aria-label={subItem.title}
                                                                className="block text-sm sm:text-base font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded transition-colors duration-150 hover:bg-red-600 hover:text-white cursor-pointer"
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href={item.href ?? '#'} onClick={handleNavClick} aria-label={item.title} className="text-sm sm:text-base font-medium text-foreground hover:text-red-600 transition-colors duration-200 block py-1.5 sm:py-2 px-2 cursor-pointer">
                                            {item.title}
                                        </Link>
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </nav>

                <div className="border-t p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3">
                    <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide">Get in Touch</p>
                    <div className="flex items-center justify-start gap-2 sm:gap-3">
                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                            aria-label="Phone"
                            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                        >
                            <Link href={`tel:${CONTACT_INFO.phone}`} target="_blank" aria-label="Phone">
                                <Phone className="h-5 w-5 sm:h-5.5 sm:w-5.5 md:h-6 md:w-6" strokeWidth={2.5} style={{ color: BRAND_COLOR }} />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                            aria-label="Email"
                            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                        >
                            <Link href={`mailto:${CONTACT_INFO.email}`} target="_blank" aria-label="Email">
                                <Mail className="h-5 w-5 sm:h-5.5 sm:w-5.5 md:h-6 md:w-6" strokeWidth={2.5} style={{ color: BRAND_COLOR }} />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                            aria-label="WhatsApp"
                        >
                            <Link href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" aria-label="WhatsApp">
                                <WhatsAppIcon className="h-5 w-5 sm:h-5.5 sm:w-5.5 md:h-6 md:w-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
});
MobileNav.displayName = 'MobileNav';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [navItems, setNavItems] = useState<NavItem[]>(BASE_NAV_ITEMS);

    useEffect(() => {
        let mounted = true;
        const base = process.env.NEXT_PUBLIC_API_BASE;
        if (!base) return;

        const url = `${base.replace(/\/$/, '')}/api/header`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Network response not ok');
                return res.json();
            })
            .then((payload) => {
                if (!mounted) return;
                const rawServices = Array.isArray(payload) ? payload : payload?.services ?? null;
                if (!rawServices || !Array.isArray(rawServices) || rawServices.length === 0) return;

                const serviceItems = rawServices.map((s: { title?: string; name?: string; slug?: string; url_slug?: string; short_description?: string; description?: string }) => {
                    const title = s?.title ?? s?.name ?? 'Service';
                    const slug = s?.slug ?? s?.url_slug ?? '';
                    return {
                        title,
                        href: `/service_details/${slug}`,
                        description: s?.short_description ?? s?.description ?? undefined,
                    };
                });

                setNavItems((prev) => {
                    const next = [...prev];
                    const idx = next.findIndex((n) => n.title === 'Our Services');
                    if (idx === -1) {
                        next.splice(2, 0, { title: 'Our Services', items: serviceItems.slice(0, 10) });
                    } else {
                        next[idx] = { ...next[idx], items: serviceItems.slice(0, 10) };
                    }
                    return next;
                });
            })
            .catch(() => {
            });

        return () => {
            mounted = false;
        };
    }, []);

    const desktopContactIcons = useMemo(
        () => (
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                <ContactButton
                    href={`tel:${CONTACT_INFO.phone}`}
                    icon={<Phone className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" strokeWidth={2.5} style={{ color: BRAND_COLOR }} />}
                    label="Call Us"
                />
                <ContactButton
                    href={`mailto:${CONTACT_INFO.email}`}
                    icon={<Mail className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" strokeWidth={2.5} style={{ color: BRAND_COLOR }} />}
                    label="Email"
                />
                <ContactButton
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    icon={<WhatsAppIcon className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" />}
                    label="WhatsApp"
                />
            </div>
        ),
        []
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/80" role="banner">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center h-20 sm:h-20 md:h-22 lg:h-24 gap-2 sm:gap-3 md:gap-4">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center" aria-label="Prism Infoways Private Limited - Home">
                            <Image
                                src="/logo/logo.webp" alt="Prism Infoways Private Limited - Home"
                                aria-label="Prism Infoways Private Limited - Home"
                                width={140} height={80} priority
                                className="h-16 sm:h-16 md:h-18 lg:h-20 w-auto" />
                        </Link>
                    </div>

                    <DesktopNav navItems={navItems} />

                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 ml-auto">
                        {desktopContactIcons}
                        <MobileNav isOpen={isOpen} onOpenChange={setIsOpen} navItems={navItems} />
                    </div>
                </div>
            </div>
        </header>
    );
}
