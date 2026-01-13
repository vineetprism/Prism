'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Introduction Section */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-3xl text-red-600">Terms & Conditions</CardTitle>
                        <CardDescription>Please read these terms and conditions carefully before using our services</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            At Prism Infoways, we cater to businesses of all sizes—be it a startup, established company, or enterprise. Our web designers are skilled in creating innovative and customized websites that align with your business requirements. Our team ensures that the websites we develop are responsive, quick to load, and visually appealing, attracting the attention of your target audience.
                        </p>
                    </CardContent>
                </Card>

                {/* 1. Use of Website Information */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">1. Use of Website Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            This website contains material owned by or licensed to Prism Infoways. This includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction of any part of this material is prohibited unless it complies with the copyright notice that forms part of these terms and conditions.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            All trademarks reproduced on this website, which are not the property of or licensed to the operator, are acknowledged on the website. Unauthorized use of this website may lead to a claim for damages and/or criminal prosecution.
                        </p>
                    </CardContent>
                </Card>

                {/* 2. For Employees */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">2. For Employees</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Employees in both the marketing and technical teams must agree to these terms and conditions as a prerequisite to their employment with Prism Infoways. Our focus is solely on results, not efforts.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The marketing staff must report to the office no later than 9:15 A.M. Employees are entitled to two leaves per month; any additional leave will result in a deduction in salary.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            If any employee is absent for more than three days without notice, they will be terminated immediately without prior notice. Prism Infoways reserves the right to terminate any employee not meeting performance expectations.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            If an employee wishes to resign, they must provide a written notice at least 45 days before their intended departure.
                        </p>
                    </CardContent>
                </Card>

                {/* 3. Pricing */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">3. Pricing</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Pricing for products, services, and resources is provided to the client and may vary. Specific pricing details are outlined in the order agreement signed by the client.
                        </p>
                    </CardContent>
                </Card>

                {/* 4. Restricted Reuse of Service */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">4. Restricted Reuse of Service</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            You agree not to reproduce, sell, resell, duplicate, or copy any part of the service for any commercial purpose.
                        </p>
                    </CardContent>
                </Card>

                {/* 5. Cancellation of Order */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">5. Cancellation of Order</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Prism Infoways reserves the right to cancel any order during processing or delivery if the order does not comply with these terms and conditions. You will be notified of such action.
                        </p>
                    </CardContent>
                </Card>

                {/* 6. Delivery of Order */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">6. Delivery of Order</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Prism Infoways is committed to delivering your order within the specified time frame. However, in cases of unforeseen delays, Prism Infoways shall not be held responsible.
                        </p>
                    </CardContent>
                </Card>

                {/* 7. Changes to Terms and Conditions */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">7. Changes to Terms and Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Prism Infoways reserves the right to modify or amend these terms and conditions for any reason, with reasonable notice provided on our website or via email. Such changes will take effect once the notice is issued.
                        </p>
                    </CardContent>
                </Card>

                {/* 8. Security */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">8. Security</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Passwords and/or secret codes provided for using Prism Infoways services are for personal use only. You are responsible for keeping these credentials confidential and will be held accountable for any misuse.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            In the event of loss, theft, or unauthorized use of these credentials, you agree to inform Prism Infoways immediately.
                        </p>
                    </CardContent>
                </Card>

                {/* 9. Disclaimer */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">9. Disclaimer</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Prism Infoways may suspend or terminate website operations for any reason, with or without prior notice. Prism Infoways reserves the right to change website content or suspend or alter products or services offered.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            By using this website, you agree to do so at your own risk, and Prism Infoways is not responsible for any loss or damage.
                        </p>
                    </CardContent>
                </Card>

                {/* 10. Refunds */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">10. Refunds</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            As a policy, Prism Infoways does not offer refunds. If you are dissatisfied with our services, please contact our customer support within two weeks of order completion.
                        </p>
                    </CardContent>
                </Card>

                {/* 11. Feedback */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">11. Feedback</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            You agree to report any violations of these terms and conditions or any complaints to our support team.
                        </p>
                    </CardContent>
                </Card>

                {/* Contact Us Footer Section */}
                <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms & Conditions?</h2>
                        <p className="text-gray-700 mb-6 text-justify">
                            Please do not hesitate to contact us at any time if you have questions about these terms and conditions or any other related issues.
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