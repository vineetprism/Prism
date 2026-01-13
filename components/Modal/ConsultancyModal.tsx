'use client';

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ConsultancyModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

function isValidEmail(email: string) {
    if (!email) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
}

function isValidPhoneInput(raw: string) {
    if (!raw) return false;
    const cleaned = raw.replace(/[^\d+]/g, "");
    const digitsOnly = cleaned.replace(/\D/g, "");
    const len = digitsOnly.length;

    if (digitsOnly.startsWith("0")) {
        return len === 11;
    }

    if (len === 10) return true;
    if (len === 12) return true;
    return false;
}

function normalizePhone(raw: string) {
    const digits = raw.replace(/\D/g, "");
    if (digits.startsWith("0") && digits.length === 11) return digits;
    return digits;
}

export function ConsultancyModal({ open, onOpenChange }: ConsultancyModalProps) {
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        occupation: "",
        interestedIn: "",
        message: "",
    });

    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [submitting, setSubmitting] = React.useState(false);
    const [successMsg, setSuccessMsg] = React.useState<string | null>(null);
    const timerRef = React.useRef<number | null>(null);

    // Add blur effect to body when modal opens
    React.useEffect(() => {
        if (open) {
            const mainContent = document.querySelector('main');
            if (mainContent) {
                (mainContent as HTMLElement).style.filter = 'blur(5px)';
                (mainContent as HTMLElement).style.transition = 'filter 0.3s ease-in-out';
            }
        } else {
            const mainContent = document.querySelector('main');
            if (mainContent) {
                (mainContent as HTMLElement).style.filter = '';
            }
        }

        return () => {
            const mainContent = document.querySelector('main');
            if (mainContent) {
                (mainContent as HTMLElement).style.filter = '';
            }
        };
    }, [open]);

    // Clean up timer
    React.useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const API_BASE =
        typeof window !== "undefined" ? process.env.NEXT_PUBLIC_API_BASE ?? "" : "";
    const endpoint = (API_BASE ? API_BASE.replace(/\/$/, "") : "") + "/api/consultancies";

    const validate = () => {
        const e: Record<string, string> = {};
        if (!formData.fullName.trim()) e.fullName = "Full name is required";

        if (!formData.email.trim()) e.email = "Email is required";
        else if (!isValidEmail(formData.email)) e.email = "Enter a valid email";

        if (!formData.phoneNumber.trim()) e.phoneNumber = "Phone number is required";
        else if (!isValidPhoneInput(formData.phoneNumber))
            e.phoneNumber = "Invalid phone number";

        if (!formData.occupation) e.occupation = "Occupation is required";
        if (!formData.interestedIn) e.interestedIn = "Select a service";
        if (!formData.message.trim()) e.message = "Message is required";
        return e;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;

        setSuccessMsg(null);
        const validation = validate();
        setErrors(validation);
        if (Object.keys(validation).length) {
            return;
        }

        setSubmitting(true);

        const payload = {
            name: formData.fullName.trim(),
            email: formData.email.trim(),
            phone: normalizePhone(formData.phoneNumber.trim()),
            occupation: formData.occupation,
            interested: formData.interestedIn,
            message: formData.message.trim(),
        };

        try {
            // Simulation of API call if endpoint is not real
            await new Promise(resolve => setTimeout(resolve, 1000));
            // In real scenario: const res = await fetch(endpoint, ...);

            setSuccessMsg("Message sent successfully!");

            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                occupation: "",
                interestedIn: "",
                message: "",
            });
            setErrors({});

            timerRef.current = window.setTimeout(() => {
                onOpenChange(false);
                setSuccessMsg(null);
            }, 2000);
        } catch {
            setErrors({ __global: "Network error. Try again." });
        } finally {
            setSubmitting(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[95vw] sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-2xl border-none mx-2 sm:mx-auto">
                <DialogHeader className="mb-6 text-left">
                    <DialogTitle className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-2">
                        Send Us A Message
                    </DialogTitle>
                    <p className="text-gray-600 text-lg font-body">
                        Give us a chance to serve and bring magic to your brand.
                    </p>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {errors.__global && (
                        <div className="text-sm text-red-700 bg-red-50 p-3 rounded">{errors.__global}</div>
                    )}
                    {successMsg && (
                        <div className="text-sm text-green-800 bg-green-50 p-3 rounded">{successMsg}</div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-gray-900 font-bold text-base">
                                Full Name<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                placeholder="Enter Your Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`h-12 border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500 ${errors.fullName ? "border-red-500" : ""}`}
                            />
                            {errors.fullName && <p className="text-xs text-red-600">{errors.fullName}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-900 font-bold text-base">
                                Your Email Address<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="prisminfoways@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`h-12 border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500 ${errors.email ? "border-red-500" : ""}`}
                            />
                            {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-gray-900 font-bold text-base">
                                Your Phone<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="9876543210"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className={`h-12 border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500 ${errors.phoneNumber ? "border-red-500" : ""}`}
                            />
                            {errors.phoneNumber && <p className="text-xs text-red-600">{errors.phoneNumber}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="occupation" className="text-gray-900 font-bold text-base">
                                Occupation<span className="text-red-600">*</span>
                            </Label>
                            <Select
                                value={formData.occupation}
                                onValueChange={(val) => setFormData(prev => ({ ...prev, occupation: val }))}
                            >
                                <SelectTrigger className={`h-12 border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500 ${errors.occupation ? "border-red-500" : ""}`}>
                                    <SelectValue placeholder="Select Occupation" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="professional">Professional</SelectItem>
                                    <SelectItem value="business_owner">Business Owner</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.occupation && <p className="text-xs text-red-600">{errors.occupation}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="interestedIn" className="text-gray-900 font-bold text-base">
                            Interested In<span className="text-red-600">*</span>
                        </Label>
                        <Select
                            value={formData.interestedIn}
                            onValueChange={(val) => setFormData(prev => ({ ...prev, interestedIn: val }))}
                        >
                            <SelectTrigger className={`h-12 border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500 ${errors.interestedIn ? "border-red-500" : ""}`}>
                                <SelectValue placeholder="Select Interest" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="web_development">Web Development</SelectItem>
                                <SelectItem value="mobile_app">Mobile App</SelectItem>
                                <SelectItem value="consulting">Consulting</SelectItem>
                                <SelectItem value="ui_ux">UI/UX Design</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.interestedIn && <p className="text-xs text-red-600">{errors.interestedIn}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-900 font-bold text-base">
                            Message<span className="text-red-600">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`min-h-[120px] border-gray-200 rounded-lg focus:ring-red-500 focus:border-red-500 resize-none ${errors.message ? "border-red-500" : ""}`}
                        />
                        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                    </div>

                    <div className="">
                        <Button
                            type="submit"
                            disabled={submitting}
                            className="bg-[#E92228] hover:bg-[#bd202e] text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-auto min-w-[200px]"
                        >
                            {submitting ? "SENDING..." : "SEND MESSAGE"}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
