'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
    privacy: boolean;
};

type FieldErrors = Partial<Record<keyof FormState, string | null>>;


export default function ContactUs(): React.JSX.Element {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false,
    });

    const [errors, setErrors] = useState<FieldErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<string>('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validatePhone(value: string): boolean {
        const digitsOnly = value.replace(/\D/g, '');
        if (/^\d{10}$/.test(digitsOnly)) return true;
        if (/^\d{12,}$/.test(digitsOnly)) return true;
        return false;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        const { name } = target;
        if (!name || !(name in formData)) return;
        const fieldName = name as keyof FormState;

        if ((target as HTMLInputElement).type === 'checkbox') {
            const checked = (target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [fieldName]: checked }));
            setErrors((prev) => ({ ...prev, [fieldName]: checked ? null : prev[fieldName] ?? null }));
            return;
        }

        const value = target.value;
        setFormData((prev) => ({ ...prev, [fieldName]: value }));

        if (fieldName === 'email') {
            setErrors((prev) => ({
                ...prev,
                email: value.trim() === '' ? 'Email is required.' : emailRegex.test(value) ? null : 'Invalid email address.',
            }));
        } else if (fieldName === 'phone') {
            setErrors((prev) => ({
                ...prev,
                phone: value.trim() === '' ? null : validatePhone(value) ? null : 'Invalid phone. Enter 10 digits.',
            }));
        } else if (fieldName === 'name') {
            setErrors((prev) => ({ ...prev, name: value.trim() ? null : 'Name is required.' }));
        } else if (fieldName === 'message') {
            setErrors((prev) => ({ ...prev, message: value.trim() ? null : 'Message is required.' }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: FieldErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        if (formData.phone.trim() && !validatePhone(formData.phone)) newErrors.phone = 'Invalid phone. Enter 10 digits.';

        setErrors((prev) => ({ ...prev, ...newErrors }));
        const hasErrors = Object.values(newErrors).some(Boolean);
        if (hasErrors) {
            setSubmitMessage('Please fix validation errors and try again.');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');
        try {
            const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
            const url = `${API_BASE.replace(/\/$/, '')}/api/contacts`;
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                message: formData.message.trim(),
            };

            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                let errText = `Request failed: ${res.status} ${res.statusText}`;
                try {
                    const maybeJson: unknown = await res.json();
                    if (maybeJson && typeof maybeJson === 'object') {
                        const msg = (maybeJson as Record<string, unknown>)['message'];
                        if (typeof msg === 'string' && msg.trim().length) errText = msg;
                    }
                } catch { }
                throw new Error(errText);
            }

            setSubmitMessage('Thank you for contacting us! We will get back to you soon.');
            setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
            setErrors({});
        } catch (err: unknown) {
            console.error('Contact submit error:', err);
            const message = err instanceof Error ? err.message : 'Failed to submit. Try again later.';
            setSubmitMessage(message);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitMessage(''), 5000);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            label: 'Call Us:',
            value: '+91-8062177080',
            href: 'tel:+918062177080',
        },
        {
            icon: Mail,
            label: 'E-mail:',
            value: 'info@prisminfoways.com',
            href: 'mailto:info@prisminfoways.com',
        },
        {
            icon: MapPin,
            label: 'Visit Us:',
            value: 'Plot No.-CP9, Sector 8, IMT Manesar, Gurugram, Haryana 122052',
            href: 'https://www.google.com/maps?q=Plot+No.+CP+09,+Sector+8,+Imt+Manesar,+Gurugram,+Haryana+122052',
        },
    ] as const;

    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com/PrismInfoways', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/prisminfoways/', label: 'Instagram' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/prisminfoways/', label: 'LinkedIn' },
    ] as const;

    return (
        <section className="relative w-full bg-red-50 px-4 py-10 sm:px-8 sm:py-16 lg:px-12">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="mx-auto max-w-[1100px] relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-3">Contact Us</h2>
                    <p className="text-gray-700 text-base sm:text-lg font-medium">Any question or remarks? Just write us a message!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-stretch">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 sm:rounded-3xl sm:p-10 text-white shadow-xmd flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-1">Contact Information</h3>
                            <p className="text-red-100 text-sm sm:text-lg">Let&apos;s build something amazing together</p>
                        </div>

                        <div className="space-y-4 sm:space-y-6 mb-8">
                            {contactInfo?.map((item, index) => {
                                const Icon = item?.icon;
                                return (
                                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                                <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-grow pt-1">
                                            <p className="text-sm font-semibold text-red-100 mb-0 sm:mb-1">{item.label}</p>
                                            <Link
                                                href={item.href}
                                                aria-label={item.label}
                                                className="text-white hover:text-red-100 transition-colors duration-300 text-sm sm:text-base whitespace-pre-wrap break-words"
                                            >
                                                {item.value}
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pt-6 sm:pt-8 border-t border-white/20">
                            <div className="flex gap-3 sm:gap-4 flex-wrap">
                                {socialLinks?.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-red-600 transition-all duration-300"
                                        >
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col h-full justify-center">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        aria-invalid={!!errors.name}
                                        aria-describedby="name-error"
                                        className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full border-2 border-gray-300 focus:border-red-600 focus:outline-none bg-white placeholder-gray-500 text-gray-900 transition-colors duration-300 text-sm sm:text-base"
                                    />
                                    {errors.name && <p id="name-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        aria-invalid={!!errors.email}
                                        aria-describedby="email-error"
                                        className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full border-2 border-gray-300 focus:border-red-600 focus:outline-none bg-white placeholder-gray-500 text-gray-900 transition-colors duration-300 text-sm sm:text-base"
                                    />
                                    {errors.email && <p id="email-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby="phone-error"
                                    className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full border-2 border-gray-300 focus:border-red-600 focus:outline-none bg-white placeholder-gray-500 text-gray-900 transition-colors duration-300 text-sm sm:text-base"
                                />
                                {errors.phone && <p id="phone-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.phone}</p>}
                            </div>

                            <textarea
                                name="message"
                                placeholder="Your message here"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                aria-invalid={!!errors.message}
                                aria-describedby="message-error"
                                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl border-2 border-gray-300 focus:border-red-600 focus:outline-none bg-white placeholder-gray-500 text-gray-900 resize-none transition-colors duration-300 text-sm sm:text-base"
                            />
                            {errors.message && <p id="message-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.message}</p>}

                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="privacy"
                                    id="privacy"
                                    checked={formData.privacy}
                                    onChange={handleChange}
                                    className="w-4 h-4 sm:w-5 sm:h-5 rounded cursor-pointer accent-red-600"
                                />
                                <label htmlFor="privacy" className="text-gray-700 text-sm sm:text-base">
                                    Your email address will not be published. <span className="text-red-600 font-semibold">*</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                aria-label="Submit"
                                className="inline-flex items-center justify-center gap-2 w-fit px-8 py-3 sm:px-10 sm:py-4 rounded-full border-2 text-white font-bold text-sm sm:text-md bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300 group/btn cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Contact us'}
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            {submitMessage && (
                                <div className="mt-3 p-3 bg-green-50 border-2 border-green-600 rounded-lg">
                                    <p className="text-green-700 font-semibold text-sm">{submitMessage}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
