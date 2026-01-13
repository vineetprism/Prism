'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  occupation: string;
  interested: string;
  message: string;
};

type StatusMessageType = { type: 'success' | 'error'; text: string } | null;

interface ContactCard {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

export const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    interested: '',
    message: '',
  });

  const [phoneTouched, setPhoneTouched] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<StatusMessageType>(null);

  const contactCards: ContactCard[] = [
    {
      icon: <MapPin className="w-4 h-4 text-red-600" />,
      title: 'Location',
      details: ['Plot No. CP 09, Sector 8, IMT Manesar,', 'Gurugram, Haryana 122052'],
    },
    {
      icon: <Phone className="w-4 h-4 text-red-600" />,
      title: 'Contact',
      details: ['+91 8062177080'],
    },
    {
      icon: <Mail className="w-4 h-4 text-red-600" />,
      title: 'Email',
      details: ['info@prisminfoways.com'],
    },
    {
      icon: <Clock className="w-4 h-4 text-red-600" />,
      title: 'Visit Between',
      details: ['Mon - Sat: 9:00 - 6:00', 'Sunday: Closed'],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      if (!phoneTouched) setPhoneTouched(true);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearStatus = () => {
    const t = setTimeout(() => setStatusMessage(null), 3500);
    return () => clearTimeout(t);
  };

  const isPhoneValid = formData.phone.replace(/\D/g, '').length === 10;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.occupation ||
      !formData.interested ||
      !formData.message
    ) {
      setStatusMessage({ type: 'error', text: 'Please fill all required fields.' });
      clearStatus();
      return;
    }

    if (!isPhoneValid) {
      setPhoneTouched(true);
      setStatusMessage({ type: 'error', text: 'Phone number must be exactly 10 digits.' });
      clearStatus();
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';
    const url = `${API_BASE.replace(/\/$/, '')}/api/consultancies`;

    const payload: FormDataType = { ...formData };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let errText = `Request failed with status ${res.status}`;

        // read JSON safely and extract message if available
        try {
          const errJson: unknown = await res.json();
          if (errJson && typeof errJson === 'object') {
            const maybeMessage = (errJson as Record<string, unknown>)['message'];
            if (typeof maybeMessage === 'string' && maybeMessage.trim().length > 0) {
              errText = maybeMessage;
            }
          }
        } catch {
          // ignore parse errors, keep generic message
        }

        throw new Error(errText);
      }

      setStatusMessage({ type: 'success', text: 'Message sent — we will contact you shortly.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        occupation: '',
        interested: '',
        message: '',
      });
      setPhoneTouched(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to send. Try again later.';
      // keep useful debug info in console; don't use `any` here
      console.error('Submit error:', err);
      setStatusMessage({ type: 'error', text: message });
    } finally {
      setIsSubmitting(false);
      clearStatus();
    }
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.446374917873!2d76.89540637613057!3d28.375582895701605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f26ffca426d%3A0x9020c131fa5635f9!2sPrism%20Infoways%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763806794889!5m2!1sen!2sin";

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-md transition-shadow border border-gray-100 border-t-4 border-red-600"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 p-2 rounded-xl">{card.icon}</div>
                </div>
                <h3 className="text-center text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <div className="text-center space-y-1">
                  {card.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-red-600 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Send Us A Message</h2>
              <p className="text-gray-600 text-lg mb-8">Give us a chance to serve and bring magic to your brand.</p>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Your Email Address<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="prisminfoways@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Your Phone<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={() => setPhoneTouched(true)}
                      inputMode="numeric"
                      pattern="\d{10}"
                      maxLength={10}
                      placeholder="9876543210"
                      aria-invalid={phoneTouched && !isPhoneValid}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${phoneTouched && !isPhoneValid
                          ? 'border-red-600 focus:border-red-600 focus:ring-red-100'
                          : 'border-gray-300 focus:border-red-600 focus:ring-red-100'
                        }`}
                    />
                    {phoneTouched && !isPhoneValid && (
                      <p className="mt-2 text-sm text-red-600">Phone must contain exactly 10 digits.</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Occupation<span className="text-red-600">*</span>
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all bg-white text-gray-900"
                    >
                      <option value="">Select Occupation</option>
                      <option value="Student">Student</option>
                      <option value="Professional">Professional</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Interested In<span className="text-red-600">*</span>
                  </label>
                  <select
                    name="interested"
                    value={formData.interested}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all bg-white text-gray-900"
                  >
                    <option value="">Select Interest</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Message<span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 w-fit px-6 py-3 rounded-full border-2 text-white font-semibold text-sm transition-all duration-300 group/btn cursor-pointer ${isSubmitting ? 'bg-red-400 border-red-400 pointer-events-none' : 'bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {statusMessage && (
                  <div className={`mt-2 text-sm px-3 py-2 rounded ${statusMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {statusMessage.text}
                  </div>
                )}
              </form>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-8 rounded-2xl overflow-hidden shadow-2xl h-[600px] border-2 border-red-600">
                <iframe
                  title="Prism Infoways - IMT Manesar"
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600 h-[400px]">
              <iframe
                title="Prism Infoways - IMT Manesar Mobile"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-red-600 to-red-400 mt-12" />
    </section>
  );
};

export default ContactUsPage;
