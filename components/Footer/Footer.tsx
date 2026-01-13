'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const [servicesList, setServicesList] = useState<{ name: string; href: string }[] | null>(null);

    useEffect(() => {
        let mounted = true;
        const base = process.env.NEXT_PUBLIC_API_BASE;
        if (!base) {
            return;
        }

        const url = `${base.replace(/\/$/, '')}/api/footer`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Network response not ok');
                return res.json();
            })
            .then((payload) => {
                if (!mounted) return;
                const rawServices = Array.isArray(payload) ? payload : payload?.services ?? null;
                if (!rawServices || !Array.isArray(rawServices) || rawServices.length === 0) {
                    return;
                }

                const serviceItems = rawServices.map((s: { title?: string; name?: string; slug?: string; url_slug?: string }) => {
                    const title = s?.title ?? s?.name ?? 'Service';
                    const slug = s?.slug ?? s?.url_slug ?? '';
                    return {
                        name: title,
                        href: slug ? `/service_details/${slug}` : '',
                    };
                });

                setServicesList(serviceItems.slice(0, 6));
            })
            .catch(() => {
            });

        return () => {
            mounted = false;
        };
    }, []);

    const company = [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Services', href: '/service' },
        { name: 'Privacy & Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'GDPR', href: '/gdpr' },
    ];

    const contact = {
        email: 'info@prisminfoways.com',
        phone: '+91-8062177080',
        address: 'Plot No.-CP9, Sector 8, IMT Manesar, Gurugram, Haryana 122052',
    };

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/PrismInfoways' },
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/prisminfoways/' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/prisminfoways/' },
    ];

    return (
        <footer className="relative w-full bg-[#1F1F1F] text-gray-300 px-6 sm:px-8 lg:px-12">
            <div className="border-b border-white/10">
                <div className="mx-auto max-w-[1440px] py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group flex items-start gap-4 transition-all duration-300 hover:transform hover:translate-x-2">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110 group-hover:rotate-6">
                                    <Mail className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-red-500">
                                    Write to us
                                </h3>
                                <Link
                                    href={`mailto:${contact.email}`}
                                    aria-label={contact.email}
                                    className="text-gray-300 hover:text-gray-200 transition-all duration-300 cursor-pointer break-all inline-flex items-center gap-1 group/link"
                                >
                                    <span>{contact.email}</span>
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                </Link>
                            </div>
                        </div>

                        <div className="group flex items-start gap-4 transition-all duration-300 hover:transform hover:translate-x-2">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110 group-hover:rotate-6">
                                    <Phone className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-red-500">
                                    Call Us (IN)
                                </h3>
                                <Link
                                    href={`tel:${contact.phone}`}
                                    aria-label={contact.phone}
                                    className="text-gray-300 hover:text-gray-200 transition-all duration-300 cursor-pointer inline-flex items-center gap-1 group/link"
                                >
                                    <span>{contact.phone}</span>
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                </Link>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="group flex items-start gap-4 transition-all duration-300 hover:transform hover:translate-x-2">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110 group-hover:rotate-6">
                                    <MapPin className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bounce" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-red-500">
                                    Our Office
                                </h3>
                                <p className="text-md text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                                    {contact?.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="mx-auto max-w-[1440px] py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <div className="mb-6 group">
                            <Link href="/">
                                <Image src="/logo/logo2.png" alt="Logo" width={250} height={250} className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto" loading="lazy" />
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {socialLinks?.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={social?.name}
                                        href={social?.href}
                                        className="group/social relative inline-flex items-center justify-center w-10 h-10 rounded-full hover:border-2 hover:border-red-600 text-red-600 bg-red-600 text-white transition-all duration-300 cursor-pointer overflow-hidden hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-red-600/50"
                                        aria-label={social?.name}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="absolute inset-0 bg-red-600 transform scale-0 group-hover/social:scale-100 transition-transform duration-300 rounded-full"></span>
                                        <Icon className="h-5 w-5 relative z-10 transition-all duration-300 group-hover/social:rotate-[360deg]" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {servicesList?.map((service) => (
                                <li key={service?.name} className="group/item flex items-center">
                                    <ChevronRight className="h-4 w-4 text-red-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 flex-shrink-0" />
                                    <Link
                                        href={service?.href}
                                        aria-label={service?.name}
                                        className="text-gray-300 hover:text-red-600 transition-all duration-300 text-md cursor-pointer hover:translate-x-2 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        {service?.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {company?.map((link) => (
                                <li key={link?.name} className="group/item flex items-center">
                                    <ChevronRight className="h-4 w-4 text-red-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 flex-shrink-0" />
                                    <Link
                                        href={link?.href}
                                        aria-label={link?.name}
                                        className="text-gray-300 hover:text-red-600 transition-all duration-300 text-md cursor-pointer hover:translate-x-2 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        {link?.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Stay Connected
                        </h3>
                        <ul className="space-y-3">
                            <li className="group/item flex items-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 flex-shrink-0 mr-2"></span>
                                <Link
                                    href={`tel:${contact?.phone}`}
                                    aria-label="Phone"
                                    className="text-gray-300 hover:text-red-600 transition-all duration-300 text-md cursor-pointer inline-flex items-center gap-1 group/link"
                                >
                                    <span>{contact?.phone}</span>
                                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                </Link>
                            </li>
                            <li className="group/item flex items-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 flex-shrink-0 mr-2"></span>
                                <Link
                                    href={`mailto:${contact?.email}`}
                                    className="text-gray-300 hover:text-red-600 transition-all duration-300 text-md 
                                    break-all cursor-pointer inline-flex items-center gap-1 group/link"
                                    aria-label="Email"
                                >
                                    <span>{contact?.email}</span>
                                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10"></div>

                {/* Bottom Copyright */}
                <div className="py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-center md:text-left text-gray-300 text-md transition-colors duration-300 hover:text-gray-200">
                            Copyright © {currentYear} Prism Infoways Pvt. Ltd, All rights reserved.
                        </p>
                        <p className="text-center md:text-right text-gray-300 text-md transition-colors duration-300 hover:text-gray-200 group cursor-default">
                            Developed by{' '}
                            <Link
                                href="https://prisminfoways.com/"
                                target="_blank"
                                className="text-red-600 font-semibold transition-all duration-300 group-hover:text-red-500 group-hover:tracking-wider"
                            >
                                Prism Infoways Pvt. Ltd.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}