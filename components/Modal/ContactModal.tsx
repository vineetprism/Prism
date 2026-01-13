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

interface ContactModalProps {
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

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
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
      document.body.style.overflow = 'hidden';
      const mainContent = document.querySelector('main') || document.querySelector('#root') || document.querySelector('#__next');

      if (mainContent) {
        (mainContent as HTMLElement).style.filter = 'blur(10px)';
        (mainContent as HTMLElement).style.transition = 'filter 0.2s ease-in-out';
        (mainContent as HTMLElement).style.pointerEvents = 'none';
      } else {
        const children = Array.from(document.body.children);
        children.forEach((child) => {
          if (!child.hasAttribute('data-radix-portal') &&
            !child.hasAttribute('data-sonner-toaster') &&
            child.tagName !== 'SCRIPT' &&
            child.tagName !== 'STYLE') {
            (child as HTMLElement).style.filter = 'blur(10px)';
            (child as HTMLElement).style.transition = 'filter 0.2s ease-in-out';
            (child as HTMLElement).style.pointerEvents = 'none';
          }
        });
      }
    } else {
      document.body.style.overflow = '';
      const mainContent = document.querySelector('main') || document.querySelector('#root') || document.querySelector('#__next');

      if (mainContent) {
        (mainContent as HTMLElement).style.filter = '';
        (mainContent as HTMLElement).style.pointerEvents = '';
      } else {
        const children = Array.from(document.body.children);
        children.forEach((child) => {
          if (!child.hasAttribute('data-radix-portal') &&
            !child.hasAttribute('data-sonner-toaster') &&
            child.tagName !== 'SCRIPT' &&
            child.tagName !== 'STYLE') {
            (child as HTMLElement).style.filter = '';
            (child as HTMLElement).style.pointerEvents = '';
          }
        });
      }
    }

    return () => {
      document.body.style.overflow = '';
      const mainContent = document.querySelector('main') || document.querySelector('#root') || document.querySelector('#__next');

      if (mainContent) {
        (mainContent as HTMLElement).style.filter = '';
        (mainContent as HTMLElement).style.pointerEvents = '';
      } else {
        const children = Array.from(document.body.children);
        children.forEach((child) => {
          if (!child.hasAttribute('data-radix-portal') &&
            !child.hasAttribute('data-sonner-toaster') &&
            child.tagName !== 'SCRIPT' &&
            child.tagName !== 'STYLE') {
            (child as HTMLElement).style.filter = '';
            (child as HTMLElement).style.pointerEvents = '';
          }
        });
      }
    };
  }, [open]);

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
      e.phoneNumber =
        "Invalid phone. Use 10 digits (local), 11 digits starting with 0, or 12-digit country code (+91...).";

    if (!formData.occupation) e.occupation = "Occupation is required";
    if (!formData.interestedIn) e.interestedIn = "Select a service";
    return e;
  };

  const focusFirstError = (err: Record<string, string>) => {
    const keys = Object.keys(err);
    if (!keys.length) return;
    const first = keys[0];
    const elem = document.querySelector<HTMLElement>(`[name="${first}"]`) as HTMLElement | null;
    if (elem) elem.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSuccessMsg(null);
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length) {
      focusFirstError(validation);
      return;
    }

    setSubmitting(true);

    const payload = {
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: normalizePhone(formData.phoneNumber.trim()),
      occupation: formData.occupation,
      interested: formData.interestedIn,
      message: formData.message?.trim() ?? "",
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let txt = `Submission failed (${res.status})`;
        try {
          const j = await res.json();
          txt = j?.message || txt;
        } catch {
          txt = await res.text().catch(() => txt);
        }
        setErrors({ __global: txt });
        setSubmitting(false);
        return;
      }

      try {
        const j = await res.json().catch(() => null);
        const msg = j?.message || "Consultancy created successfully";
        setSuccessMsg(msg);
      } catch {
        setSuccessMsg("Consultancy created successfully");
      }

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
        timerRef.current = null;
      }, 2000);
    } catch {
      setErrors({ __global: "Network error. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const validateField = (name: string, value: string) => {
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!isValidEmail(value)) return "Enter a valid email";
      return "";
    }
    if (name === "phoneNumber") {
      if (!value.trim()) return "Phone number is required";
      if (!isValidPhoneInput(value)) return "Invalid phone number";
      return "";
    }
    return "";
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email" || name === "phoneNumber") {
      const fieldErr = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldErr }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[640px] p-0">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="text-2xl font-normal text-red-600">
            Contact Us / Job Application
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6" noValidate>
          {errors.__global ? (
            <div className="text-sm text-red-700 bg-red-50 p-3 rounded">{errors.__global}</div>
          ) : null}

          {successMsg ? (
            <div className="text-sm text-green-800 bg-green-50 p-3 rounded">{successMsg}</div>
          ) : null}

          <div className="grid grid-cols-2 gap-4">
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
                aria-describedby={errors.fullName ? "err-fullName" : undefined}
                required
                className="w-full border-gray-300"
              />
              {errors.fullName ? (
                <p id="err-fullName" className="text-xs text-red-600 mt-1">
                  {errors.fullName}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email<span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
                required
                className="w-full border-gray-300"
              />
              {errors.email ? (
                <p id="err-email" className="text-xs text-red-600 mt-1">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
                aria-describedby={errors.phoneNumber ? "err-phoneNumber" : undefined}
                required
                className="w-full border-gray-300"
              />
              {errors.phoneNumber ? (
                <p id="err-phoneNumber" className="text-xs text-red-600 mt-1">
                  {errors.phoneNumber}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation" className="text-gray-700 font-medium">
                Occupation<span className="text-red-600">*</span>
              </Label>
              <Select
                name="occupation"
                value={formData.occupation}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, occupation: value }))
                }
              >
                <SelectTrigger
                  id="occupation"
                  className="w-full border-gray-300"
                  aria-invalid={!!errors.occupation}
                >
                  <SelectValue placeholder="Select Occupation" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="business-owner">Business Owner</SelectItem>
                  <SelectItem value="freelancer">Freelancer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.occupation ? (
                <p className="text-xs text-red-600 mt-1">{errors.occupation}</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestedIn" className="text-gray-700 font-medium">
              Interested In<span className="text-red-600">*</span>
            </Label>
            <Select
              name="interestedIn"
              value={formData.interestedIn}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, interestedIn: value }))
              }
            >
              <SelectTrigger id="interestedIn" className="w-full border-gray-300">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-development">Mobile Development</SelectItem>
                <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="job-application">Job Application</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.interestedIn ? (
              <p className="text-xs text-red-600 mt-1">{errors.interestedIn}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full min-h-[100px] border-gray-300 resize-none"
            />
          </div>

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-fit px-8 py-4 rounded-full 
                    border-2 text-white font-bold text-md bg-red-500 hover:bg-white hover:text-red-500 
                    hover:border-red-500 transition-all duration-300 group/btn cursor-pointer"
              disabled={submitting}
            >
              {submitting ? "Submitting…" : "SUBMIT APPLICATION"}
              <span className="ml-2">→</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactModal;
