'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Shield, Lock, FileText, UserCheck, Clock, Cookie, Users, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function GDPRCompliance() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Introduction Section */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-3xl text-red-600 flex items-center gap-3">
                            <Shield className="w-8 h-8" />
                            GDPR Compliance
                        </CardTitle>
                        <CardDescription>General Data Protection Regulation - Your Privacy Rights</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            At Prism Infoways, we prioritize your privacy and ensure compliance with the General Data Protection Regulation (GDPR). This policy outlines how we collect, use, protect, and manage your personal data.
                        </p>
                    </CardContent>
                </Card>

                {/* 1. Data Collection & Usage */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <FileText className="w-6 h-6" />
                            1. Data Collection & Usage
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            We collect personal data such as name, email, phone number, and business details when you use our website, services, or contact us. This data is used to provide and improve our services, communicate with you, and fulfill legal obligations.
                        </p>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Types of Data We Collect:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Personal identification information (Name, Email, Phone Number)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Business details and company information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Communication preferences and inquiry details</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Technical data (IP address, browser type, device information)</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* 2. Data Protection & Security */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <Lock className="w-6 h-6" />
                            2. Data Protection & Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            We implement appropriate technical and organizational measures to ensure the security of your personal data. Data is stored securely and access is restricted to authorized personnel only.
                        </p>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Our Security Measures Include:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>SSL/TLS encryption for data transmission</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Secure data storage with restricted access controls</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Regular security audits and updates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Employee training on data protection practices</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* 3. Your Rights Under GDPR */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <UserCheck className="w-6 h-6" />
                            3. Your Rights Under GDPR
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify mb-4">
                            You have the right to:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <h4 className="font-semibold text-red-600 mb-2">Right to Access</h4>
                                <p className="text-gray-700 text-sm">Access your personal data and receive information about how we process it.</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <h4 className="font-semibold text-red-600 mb-2">Right to Rectification</h4>
                                <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete personal data.</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <h4 className="font-semibold text-red-600 mb-2">Right to Erasure</h4>
                                <p className="text-gray-700 text-sm">Request deletion of your data under certain conditions (&quot;right to be forgotten&quot;).</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <h4 className="font-semibold text-red-600 mb-2">Right to Restriction</h4>
                                <p className="text-gray-700 text-sm">Restrict or object to the processing of your personal data.</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <h4 className="font-semibold text-red-600 mb-2">Right to Data Portability</h4>
                                <p className="text-gray-700 text-sm">Request your data in a structured, machine-readable format.</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <h4 className="font-semibold text-red-600 mb-2">Right to Object</h4>
                                <p className="text-gray-700 text-sm">Object to processing based on legitimate interests or direct marketing.</p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <p className="text-gray-700 font-semibold">
                                You can exercise these rights by contacting us at <a href="mailto:support@prisminfoways.com" className="text-red-600 hover:underline">support@prisminfoways.com</a>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 4. Data Retention */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <Clock className="w-6 h-6" />
                            4. Data Retention
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            We retain your data only for as long as necessary to fulfill our obligations or as required by law. Once data is no longer needed, it is securely deleted.
                        </p>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Retention Periods:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Customer data: Retained for the duration of the business relationship plus any legally required period</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Marketing data: Retained until consent is withdrawn</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Technical logs: Typically retained for 90 days</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* 5. Cookies & Tracking Technologies */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <Cookie className="w-6 h-6" />
                            5. Cookies & Tracking Technologies
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Our website uses cookies to enhance user experience. You have the option to accept or decline cookies through your browser settings.
                        </p>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span><strong>Essential Cookies:</strong> Required for website functionality</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span><strong>Performance Cookies:</strong> Help us understand how visitors use our website</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-justify mt-4">
                            You can manage your cookie preferences at any time through your browser settings or our cookie consent banner.
                        </p>
                    </CardContent>
                </Card>

                {/* 6. Third-Party Services */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <Users className="w-6 h-6" />
                            6. Third-Party Services
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            We may share data with trusted third-party service providers for operational purposes. These providers are required to comply with GDPR and ensure data protection.
                        </p>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Third-Party Service Categories:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Hosting and infrastructure providers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Email and communication services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Analytics and performance monitoring tools</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Payment processors and financial services</span>
                                </li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                All third-party processors are bound by Data Processing Agreements (DPAs) that ensure GDPR compliance.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 7. Data Breach Notification */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6" />
                            7. Data Breach Notification
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            In the event of a data breach, we will notify affected individuals and relevant authorities in accordance with GDPR requirements.
                        </p>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Our Breach Response Process:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Immediate investigation and containment of the breach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Notification to supervisory authorities within 72 hours (when applicable)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Direct communication with affected individuals without undue delay</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Implementation of measures to prevent future breaches</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* 8. Contact Us */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                            <Mail className="w-6 h-6" />
                            8. Contact Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            If you have any concerns regarding your data privacy, please contact our Data Protection Officer at <a href="mailto:support@prisminfoways.com" className="text-red-600 hover:underline font-semibold">support@prisminfoways.com</a>.
                        </p>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Data Protection Officer</h4>
                            <p className="text-gray-700 mb-2">
                                For all GDPR-related inquiries, requests to exercise your rights, or privacy concerns, please reach out to our dedicated Data Protection Officer.
                            </p>
                            <p className="text-gray-700">
                                <strong>Email:</strong> <a href="mailto:support@prisminfoways.com" className="text-red-600 hover:underline">support@prisminfoways.com</a>
                            </p>
                            <p className="text-gray-700 mt-2">
                                We are committed to responding to all inquiries within 30 days in accordance with GDPR requirements.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information Footer Section */}
                <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-gray-700 mb-6 text-justify">
                            Have questions about GDPR compliance or how we handle your data? Our team is here to help and ensure your privacy is protected.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <Phone className="w-5 h-5 text-red-600" />
                                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                                </div>
                                <Link href="tel:+918062177080" className="text-red-600 hover:underline font-medium">
                                    +91-8062177080
                                </Link>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <Mail className="w-5 h-5 text-red-600" />
                                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                                </div>
                                <Link href="mailto:info@prisminfoways.com" className="text-red-600 hover:underline font-medium break-all">
                                    info@prisminfoways.com
                                </Link>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="w-5 h-5 text-red-600" />
                                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Plot No.-CP9, Sector 8, IMT Manesar,<br />
                                    Gurugram, Haryana 122052
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}