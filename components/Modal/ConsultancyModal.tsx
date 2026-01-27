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
import { Textarea } from "@/components/ui/textarea";

interface ConsultancyModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    serviceTitle: string;
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
    // If it starts with 0 and has 11 digits, strip the leading 0 (backend strict max:10)
    if (digits.startsWith("0") && digits.length === 11) return digits.substring(1);
    // If it's longer than 10 digits, we might want to trim it, or let validation fail.
    // For now, let's just return digits. The backend validation max:10 will catch >10.
    // User asked to follow backend rules.
    return digits;
}

export function ConsultancyModal({ open, onOpenChange, serviceTitle }: ConsultancyModalProps) {
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

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://admin.prisminfoways.com";
    const endpoint = `${API_BASE}/api/service-inquiry`;

    const validate = () => {
        const e: Record<string, string> = {};
        if (!formData.fullName.trim()) e.fullName = "Full name is required";

        if (!formData.email.trim()) e.email = "Email is required";
        else if (!isValidEmail(formData.email)) e.email = "Enter a valid email";

        if (!formData.phoneNumber.trim()) e.phoneNumber = "Phone number is required";
        else if (!isValidPhoneInput(formData.phoneNumber))
            e.phoneNumber = "Invalid phone number";

        if (!formData.interestedIn) e.interestedIn = "Organisation Name is required";
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
            full_name: formData.fullName.trim(),
            business_email: formData.email.trim(),
            phone: normalizePhone(formData.phoneNumber.trim()),
            designation: formData.occupation.trim(),
            organization_name: formData.interestedIn.trim(),
            service_title: serviceTitle,
            message: formData.message.trim(),
        };

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errData = await res.json();
                let errorMsg = errData.message || "Submission failed";

                if (errData.errors) {
                    const detailedErrors = Object.values(errData.errors).flat().join(", ");
                    errorMsg = detailedErrors || errorMsg;
                }

                throw new Error(errorMsg);
            }

            setSuccessMsg("Inquiry sent successfully!");

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
        } catch (error: unknown) {
            console.error(error);
            const msg = error instanceof Error ? error.message : "Network error. Try again.";
            setErrors({ __global: msg });
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
            <DialogContent className="max-w-[95vw] sm:max-w-[640px] max-h-[90vh] overflow-y-auto p-0 rounded-lg">
                <DialogHeader className="border-b px-4 py-3 sm:px-6 sm:py-4">
                    <DialogTitle className="text-2xl font-normal text-red-600">
                        Consultancy
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6" noValidate>
                    {errors.__global ? (
                        <div className="text-sm text-red-700 bg-red-50 p-3 rounded">{errors.__global}</div>
                    ) : null}

                    {successMsg ? (
                        <div className="text-sm text-green-800 bg-green-50 p-3 rounded">{successMsg}</div>
                    ) : null}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 hidden-scrollbar">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-gray-700 font-medium">
                                Full Name<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                placeholder="Enter Your Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                aria-invalid={!!errors.fullName}
                                required
                                className="w-full border-gray-300"
                            />
                            {errors.fullName ? (
                                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                            ) : null}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700 font-medium">
                                Business Email<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Business Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                aria-invalid={!!errors.email}
                                required
                                className="w-full border-gray-300"
                            />
                            {errors.email ? (
                                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">
                                Phone Number<span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="Enter Your Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                aria-invalid={!!errors.phoneNumber}
                                required
                                className="w-full border-gray-300"
                            />
                            {errors.phoneNumber ? (
                                <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>
                            ) : null}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="occupation" className="text-gray-700 font-medium">
                                Designation
                            </Label>
                            <Input
                                id="occupation"
                                name="occupation"
                                placeholder="Enter Your Designation"
                                value={formData.occupation}
                                onChange={handleInputChange}
                                aria-invalid={!!errors.occupation}
                                className="w-full border-gray-300"
                            />
                            {errors.occupation ? (
                                <p className="text-xs text-red-600 mt-1">{errors.occupation}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="interestedIn" className="text-gray-700 font-medium">
                            Organisation Name<span className="text-red-600">*</span>
                        </Label>
                        <Input
                            id="interestedIn"
                            name="interestedIn"
                            placeholder="Enter Your Organisation Name"
                            value={formData.interestedIn}
                            onChange={handleInputChange}
                            aria-invalid={!!errors.interestedIn}
                            required
                            className="w-full border-gray-300"
                        />
                        {errors.interestedIn ? (
                            <p className="text-xs text-red-600 mt-1">{errors.interestedIn}</p>
                        ) : null}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                            Message<span className="text-red-600">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full min-h-[100px] border-gray-300 resize-none"
                        />
                        {errors.message ? (
                            <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                        ) : null}
                    </div>

                    <div className="flex justify-center pt-2">
                        <Button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 w-fit px-8 py-4 rounded-full 
                      border-2 text-white font-bold text-md bg-red-500 hover:bg-white hover:text-red-500 
                      hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
                            disabled={submitting}
                        >
                            {submitting ? "Submitting…" : "SUBMIT REQUEST"}
                            <span className="ml-2">→</span>
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
