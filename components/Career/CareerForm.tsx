'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface RawJob {
    id: number;
    title?: string;
    description?: string;
    experience?: string;
    qualification?: string;
    job_mode?: string;
    skills?: string | string[];
}

type JobMode = 'Remote' | 'On-site' | 'Hybrid' | 'On Site' | 'Unknown';

interface Job {
    id: number;
    title: string;
    description: string;
    experience: string;
    qualification: string;
    job_mode: JobMode;
    skills: string[];
}

interface ApplicationFormData {
    full_name: string;
    phone_number: string;
    email: string;
    job_request_name: string;
    experience: string;
    file: File | null;
}

function trimOrEmpty(s?: string) {
    if (s === undefined || s === null) return '';
    return String(s).trim();
}

function normalizeJobMode(m?: string): JobMode {
    if (!m) return 'Unknown';
    const s = m.trim().toLowerCase();
    if (s.includes('remote')) return 'Remote';
    if (s.includes('hybrid')) return 'Hybrid';
    if (s.includes('site') || s.includes('on-site') || s.includes('onsite')) return 'On-site';
    return (m as JobMode) ?? 'Unknown';
}

function normalizeSkills(sk?: string | string[]): string[] {
    if (!sk) return [];
    if (Array.isArray(sk)) return sk.map((x) => trimOrEmpty(x)).filter(Boolean);
    return String(sk)
        .split(',')
        .map((x) => trimOrEmpty(x))
        .filter(Boolean);
}

export default function CareerSection({ jobs = [] }: { jobs?: RawJob[] }) {
    const cleanJobs: Job[] = useMemo(
        () =>
            (jobs || []).map((j) => ({
                id: j.id,
                title: trimOrEmpty(j.title) || 'Untitled Role',
                description: trimOrEmpty(j.description) || 'No description provided.',
                experience: trimOrEmpty(j.experience) || 'Not specified',
                qualification: trimOrEmpty(j.qualification) || 'Not specified',
                job_mode: normalizeJobMode(j.job_mode),
                skills: normalizeSkills(j.skills),
            })),
        [jobs]
    );

    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<ApplicationFormData>({
        full_name: '',
        phone_number: '',
        email: '',
        job_request_name: '',
        experience: '',
        file: null,
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [fileName, setFileName] = useState('No file chosen');
    const [fileError, setFileError] = useState('');
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const API_BASE =
        typeof window !== 'undefined' ? (process.env.NEXT_PUBLIC_API_BASE || '') : '';
    const SUBMIT_URL = `${API_BASE.replace(/\/$/, '')}/api/view-job-requests`;

    const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5MB

    const handleApplyClick = (job: Job) => {
        setSelectedJob(job);
        setFormData({
            full_name: '',
            phone_number: '',
            email: '',
            job_request_name: job.title,
            experience: '',
            file: null,
        });
        setFileName('No file chosen');
        setFileError('');
        setSubmitMessage('');
        setIsModalOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFileError('');
        const file = e.target.files?.[0] ?? null;
        if (file) {
            if (file.size > MAX_FILE_BYTES) {
                setFileError('File too large. Maximum allowed size is 5MB.');
                setFormData((prev) => ({ ...prev, file: null }));
                setFileName('No file chosen');
                if (fileInputRef.current) fileInputRef.current.value = '';
                return;
            }
            setFormData((prev) => ({ ...prev, file }));
            setFileName(file.name);
        } else {
            setFormData((prev) => ({ ...prev, file: null }));
            setFileName('No file chosen');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedJob) return;
        if (!formData.full_name.trim() || !formData.phone_number.trim() || !formData.email.trim()) {
            setSubmitMessage('Please fill required fields: name, phone, email.');
            return;
        }
        if (!formData.file) {
            setSubmitMessage('Please attach your resume file.');
            return;
        }

        setSubmitting(true);
        setSubmitMessage('');
        setFileError('');

        try {
            const payload = new FormData();
            payload.append('full_name', formData.full_name.trim());
            payload.append('phone_number', formData.phone_number.trim());
            payload.append('email', formData.email.trim());
            payload.append('job_request_name', formData.job_request_name);
            payload.append('experience', formData.experience.trim());
            payload.append('job_id', String(selectedJob.id));
            if (formData.file) payload.append('file', formData.file, formData.file.name);

            const res = await fetch(SUBMIT_URL, {
                method: 'POST',
                body: payload,
            });

            if (!res.ok) {
                let errText = `Server returned ${res.status}`;
                try {
                    const json = await res.json();
                    errText = json?.message || JSON.stringify(json) || errText;
                } catch {
                    const txt = await res.text().catch(() => '');
                    if (txt) errText = txt;
                }
                setSubmitMessage(`Submission failed: ${errText}`);
                setSubmitting(false);
                return;
            }

            const data = await res.json().catch(() => null);
            setSubmitMessage(
                data?.message || 'Application submitted successfully. We will review your submission.'
            );
            setTimeout(() => {
                setIsModalOpen(false);
                setSubmitMessage('');
                if (fileInputRef.current) fileInputRef.current.value = '';
            }, 1400);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            console.error('Submit error', err);
            setSubmitMessage(`Network error: ${message}`);
        } finally {
            setSubmitting(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSubmitMessage('');
        setFileError('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const prevOverflow = document.body.style.overflow;
        if (isModalOpen) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prevOverflow || '';
        };
    }, [isModalOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsModalOpen(false);
        };
        if (isModalOpen) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isModalOpen]);

    if (!cleanJobs || cleanJobs.length === 0) {
        return (
            <section className="relative w-full py-12 px-4 bg-white">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Career Opportunities</h2>
                    <p className="text-gray-600">No job openings available right now. Check back later.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <div className="mb-4 flex justify-center">
                        <div className="h-1 w-20 bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-full" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Join Our <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Team</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore exciting career opportunities and become part of our growing organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    {cleanJobs.map((job, idx) => (
                        <div
                            key={job.id}
                            className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-red-600 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl"
                            style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.04}s both` }}
                        >
                            <div className="mb-6">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600">{job.title}</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">{job.description}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 mb-4">
                                    <span className="inline-block px-4 py-2 bg-red-100 text-red-700 text-sm font-semibold rounded-full">{job.job_mode}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-4 pb-6 border-b border-gray-200">
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Experience Required</p>
                                    <p className="text-gray-900 font-medium">{job.experience}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Qualification</p>
                                    <p className="text-gray-900 font-medium">{job.qualification}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Required Skills</p>
                                <div className="flex flex-wrap gap-2">
                                    {job?.skills?.length ? (
                                        job.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                                                {skill}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-500 text-sm">Not specified</span>
                                    )}
                                </div>
                            </div>

                            <button onClick={() => handleApplyClick(job)} className="cursor-pointer w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-red-400/50 transition-all duration-300 hover:-translate-y-1">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={closeModal} />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl">
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-red-600">Job Application</h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600" aria-label="Close modal">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6 max-h-[75vh] overflow-y-auto">
                                {submitMessage && (
                                    <div className={`mb-6 p-4 rounded-lg ${submitMessage.toLowerCase().includes('success') ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                                        {submitMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="full_name" className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                                        <input id="full_name" name="full_name" type="text" placeholder="Enter full name" value={formData.full_name} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                                            <input id="email" name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                                        </div>

                                        <div>
                                            <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
                                            <input id="phone_number" name="phone_number" type="tel" placeholder="Enter phone number" value={formData.phone_number} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="experience" className="block text-sm font-semibold text-gray-800 mb-2">Enter Your Experience</label>
                                        <input id="experience" name="experience" type="text" placeholder="e.g., 2-4 years" value={formData.experience} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                                    </div>

                                    <div>
                                        <label htmlFor="job_request_name" className="block text-sm font-semibold text-gray-800 mb-2">Job Request Name</label>
                                        <input id="job_request_name" name="job_request_name" type="text" value={formData.job_request_name} disabled className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-800 mb-2">Upload Resume</label>
                                        <div className="flex items-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg bg-white hover:border-red-500 transition-colors cursor-pointer">
                                            <input ref={fileInputRef} id="file" name="file" type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
                                            <label htmlFor="file" className="cursor-pointer text-gray-600 hover:text-red-600 font-medium">Choose file</label>
                                            <span className="text-gray-500 text-sm ml-auto">{fileName}</span>
                                        </div>
                                        {fileError && <p className="text-sm text-red-600 mt-2">{fileError}</p>}
                                    </div>

                                    <div>
                                        <button type="submit" disabled={submitting} className="cursor-pointer w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-red-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                            {submitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
        </section>
    );
}
