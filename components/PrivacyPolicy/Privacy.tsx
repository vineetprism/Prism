'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">1. An Overview of Data Protection</CardTitle>
                        <CardDescription>General Information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term &quot;personal data&quot; comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Recording on This Website</h3>
                            <h4 className="font-semibold text-red-600 mb-2">Who is the responsible party for the recording of data on this website?</h4>
                            <p className="text-gray-700 mb-4 text-justify">
                                The data on this website is processed by the operator of the website, whose contact information is available under section &quot;Information about the responsible party (referred to as the &quot;controller&quot; in the GDPR)&quot; in this Privacy Policy.
                            </p>

                            <h4 className="font-semibold text-red-600 mb-2">How do we record your data?</h4>
                            <p className="text-gray-700 mb-4 text-justify">
                                We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form. Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
                            </p>

                            <h4 className="font-semibold text-red-600 mb-2">What are the purposes we use your data for?</h4>
                            <p className="text-gray-700 mb-4 text-justify">
                                A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns.
                            </p>

                            <h4 className="font-semibold text-red-600 mb-2">What rights do you have as far as your information is concerned?</h4>
                            <p className="text-gray-700 text-justify">
                                You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Hosting Section */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">2. Hosting</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700">We are hosting the content of our website at the following provider:</p>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">IONOS</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                The provider is the IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany (hereinafter referred to as: IONOS). Whenever you visit our website, IONOS records various logfiles along with your IP addresses. For details, please consult the data privacy policy of IONOS: <a href="https://www.ionos.de/terms-gtc/terms-privacy" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ionos.de/terms-gtc/terms-privacy</a>.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                We use IONOS on the basis of Art. 6 (1)(f) GDPR. Our company has a legitimate interest in presenting a website that is as dependable as possible. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TTDSG. This consent can be revoked at any time.
                            </p>

                            <h4 className="font-semibold text-red-600 mb-2">Data Processing</h4>
                            <p className="text-gray-700 mb-4 text-justify">
                                We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* General Information Section */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">3. General Information and Mandatory Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                We herewith advise you that the transmission of data via the Internet (i.e., through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third-party access.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Information About the Responsible Party</h3>
                            <p className="text-gray-700 mb-2">The data processing controller on this website is:</p>
                            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                <p className="font-semibold text-gray-900">ChainStats, Inc.</p>
                                <p className="text-gray-700">651 North Broad Street</p>
                                <p className="text-gray-700">Middletown 19709, USA</p>
                                <p className="text-gray-700 mt-3">
                                    <span className="font-semibold">Phone:</span> <a href="tel:+4915770441160" className="text-red-600 hover:underline">+4915770441160</a>
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">E-mail:</span> <a href="mailto:support@chainstats.pro" className="text-red-600 hover:underline">support@chainstats.pro</a>
                                </p>
                            </div>
                            <p className="text-gray-700 mt-4 text-justify">
                                The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g., names, e-mail addresses, etc.).
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Storage Duration</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">General Information on the Legal Basis</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if special categories of data are processed according to Art. 9 (1) DSGVO. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 (1)(a) GDPR.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                If you have consented to the storage of cookies or to the access to information in your end device (e.g., via device fingerprinting), the data processing is additionally based on § 25 (1) TTDSG. The consent can be revoked at any time.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, if your data is required for the fulfillment of a legal obligation, we process it on the basis of Art. 6(1)(c) GDPR. Furthermore, the data processing may be carried out on the basis of our legitimate interest according to Art. 6(1)(f) GDPR.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Information on Data Transfer to the USA and Other Non-EU Countries</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                Among other things, we use tools of companies domiciled in the United States or other from a data protection perspective non-secure non-EU countries. If these tools are active, your personal data may potentially be transferred to these non-EU countries and may be processed there.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                We must point out that in these countries, a data protection level that is comparable to that in the EU cannot be guaranteed. For instance, U.S. enterprises are under a mandate to release personal data to the security agencies and you as the data subject do not have any litigation options to defend yourself in court. Hence, it cannot be ruled out that U.S. agencies (e.g., the Secret Service) may process, analyze, and permanently archive your personal data for surveillance purposes. We have no control over these processing activities.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Revocation of Your Consent to the Processing of Data</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                A wide range of data processing transactions are possible only subject to your express consent. You can also revoke at any time any consent you have already given us. This shall be without prejudice to the lawfulness of any data collection that occurred prior to your revocation.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Right to Object to Data Collection</h3>
                            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                <p className="text-gray-700 font-semibold mb-3 text-justify">
                                    IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION.
                                </p>
                                <p className="text-gray-700 mb-3 text-justify">
                                    THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED, PLEASE CONSULT THIS DATA PROTECTION DECLARATION.
                                </p>
                                <p className="text-gray-700 mb-3 text-justify">
                                    IF YOU LOG AN OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO ART. 21(1) GDPR).
                                </p>
                                <p className="text-gray-700 mb-3 text-justify">
                                    IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING AT ANY TIME. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).
                                </p>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Right to Log a Complaint</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                In the event of violations of the GDPR, data subjects are entitled to log a complaint with a supervisory agency, in particular in the member state where they usually maintain their domicile, place of work or at the place where the alleged violation occurred. The right to log a complaint is in effect regardless of any other administrative or court proceedings available as legal recourses.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Right to Data Portability</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you should demand the direct transfer of the data to another controller, this will be done only if it is technically feasible.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Information, Rectification and Eradication of Data</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                Within the scope of the applicable statutory provisions, you have the right to demand information about your archived personal data, their source and recipients as well as the purpose of the processing of your data at any time. You may also have a right to have your data rectified or eradicated. If you have questions about this subject matter or any other questions about personal data, please do not hesitate to contact us at any time.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Right to Demand Processing Restrictions</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                You have the right to demand the imposition of restrictions as far as the processing of your personal data is concerned. To do so, you may contact us at any time. The right to demand restriction of processing applies in the following cases:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-justify">
                                <li>In the event that you should dispute the correctness of your data archived by us, we will usually need some time to verify this claim. During the time that this investigation is ongoing, you have the right to demand that we restrict the processing of your personal data.</li>
                                <li>If the processing of your personal data was/is conducted in an unlawful manner, you have the option to demand the restriction of the processing of your data instead of demanding the eradication of this data.</li>
                                <li>If we do not need your personal data any longer and you need it to exercise, defend or claim legal entitlements, you have the right to demand the restriction of the processing of your personal data instead of its eradication.</li>
                                <li>If you have raised an objection pursuant to Art. 21(1) GDPR, your rights and our rights will have to be weighed against each other. As long as it has not been determined whose interests prevail, you have the right to demand a restriction of the processing of your personal data.</li>
                            </ul>
                            <p className="text-gray-700 mt-4 text-justify">
                                If you have restricted the processing of your personal data, these data – with the exception of their archiving – may be processed only subject to your consent or to claim, exercise or defend legal entitlements or to protect the rights of other natural persons or legal entities or for important public interest reasons cited by the European Union or a member state of the EU.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">SSL and/or TLS Encryption</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                For security reasons and to protect the transmission of confidential content, such as purchase orders or inquiries you submit to us as the website operator, this website uses either an SSL or a TLS encryption program. You can recognize an encrypted connection by checking whether the address line of the browser switches from &quot;http://&quot; to &quot;https://&quot; and also by the appearance of the lock icon in the browser line.
                            </p>
                            <p className="text-gray-700 text-justify">
                                If the SSL or TLS encryption is activated, data you transmit to us cannot be read by third parties.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Recording of Data Section */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">4. Recording of Data on This Website</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                Our websites and pages use what the industry refers to as &quot;cookies.&quot; Cookies are small data packages that do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or they are permanently archived on your device (permanent cookies). Session cookies are automatically deleted once you terminate your visit. Permanent cookies remain archived on your device until you actively delete them, or they are automatically eradicated by your web browser.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Cookies can be issued by us (first-party cookies) or by third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services of third-party companies into websites (e.g., cookies for handling payment services).
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Cookies have a variety of functions. Many cookies are technically essential since certain website functions would not work in the absence of these cookies (e.g., the shopping cart function or the display of videos). Other cookies may be used to analyze user behavior or for promotional purposes.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Cookies, which are required for the performance of electronic communication transactions, for the provision of certain functions you want to use (e.g., for the shopping cart function) or those that are necessary for the optimization (required cookies) of the website (e.g., cookies that provide measurable insights into the web audience), shall be stored on the basis of Art. 6(1)(f) GDPR, unless a different legal basis is cited.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                You have the option to set up your browser in such a manner that you will be notified any time cookies are placed and to permit the acceptance of cookies only in specific cases. You may also exclude the acceptance of cookies in certain cases or in general or activate the delete-function for the automatic eradication of cookies when the browser closes. If cookies are deactivated, the functions of this website may be limited.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Consent with Borlabs Cookie</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                Our website uses the Borlabs consent technology to obtain your consent to the storage of certain cookies in your browser or for the use of certain technologies and for their data privacy protection compliant documentation. The provider of this technology is Borlabs GmbH, Rübenkamp 32, 22305 Hamburg, Germany (hereinafter referred to as Borlabs).
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Whenever you visit our website, a Borlabs cookie will be stored in your browser, which archives any declarations or revocations of consent you have entered. These data are not shared with the provider of the Borlabs technology.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                The recorded data shall remain archived until you ask us to eradicate them, delete the Borlabs cookie on your own or the purpose of storing the data no longer exists. This shall be without prejudice to any retention obligations mandated by law. To review the details of Borlabs&apos; data processing policies, please visit <a href="https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/</a>
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                We use the Borlabs cookie consent technology to obtain the declarations of consent mandated by law for the use of cookies. The legal basis for the use of such cookies is Art. 6(1)(c) GDPR.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Form</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                If you submit inquiries to us via our contact form, the information provided in the contact form as well as any contact information provided therein will be stored by us in order to handle your inquiry and in the event that we have further questions. We will not share this information without your consent.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                The processing of these data is based on Art. 6(1)(b) GDPR, if your request is related to the execution of a contract or if it is necessary to carry out pre-contractual measures. In all other cases the processing is based on our legitimate interest in the effective processing of the requests addressed to us (Art. 6(1)(f) GDPR) or on your agreement (Art. 6(1)(a) GDPR) if this has been requested; the consent can be revoked at any time.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                The information you have entered into the contact form shall remain with us until you ask us to eradicate the data, revoke your consent to the archiving of data or if the purpose for which the information is being archived no longer exists (e.g., after we have concluded our response to your inquiry). This shall be without prejudice to any mandatory legal provisions, in particular retention periods.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Request by E-mail, Telephone, or Fax</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                If you contact us by e-mail, telephone or fax, your request, including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                These data are processed on the basis of Art. 6(1)(b) GDPR if your inquiry is related to the fulfillment of a contract or is required for the performance of pre-contractual measures. In all other cases, the data are processed on the basis of our legitimate interest in the effective handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or on the basis of your consent (Art. 6(1)(a) GDPR) if it has been obtained; the consent can be revoked at any time.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                The data sent by you to us via contact requests remain with us until you request us to delete, revoke your consent to the storage or the purpose for the data storage lapses (e.g. after completion of your request). Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Forms</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                We have integrated Google Forms into this website. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (hereinafter referred to as &bdquo;Google&quot;).
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Google Forms enables us to generate online forms to record messages, inquiries and other entries entered by visitors to our website. All entries you make will be processed on Google&apos;s servers. Google Forms stores a cookie in your browser that contains a unique ID (NID cookie). This cookie stores a wide range of information, including, for example your language settings.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                We use Google Forms on the basis of our legitimate interest in determining your needs as effectively as possible (Art. 6(1)(f) GDPR). If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TTDSG. This consent can be revoked at any time.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                The data you enter into the form will remain in our possession until you ask us to delete them, revoke your consent to the archiving of your data or until the purpose of archiving the data no longer exists (e.g., upon completion of the processing of your inquiry). This does not affect mandatory statutory provisions – in particular those governing retention periods.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                For more information, please consult Google&apos;s Data Privacy Policy at <a href="https://policies.google.com/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/</a>.
                            </p>

                            <h4 className="font-semibold text-red-600 mb-2">Data Processing</h4>
                            <p className="text-gray-700 mb-4 text-justify">
                                We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Social Media Section */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">5. Social Media</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Twitter</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                We have integrated functions of the social media platform Twitter into this website. These functions are provided by Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Ireland.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                If the social media element has been activated, a direct connection between your device and Twitter&apos;s server will be established. As a result, Twitter will receive information on your visit to this website. While you use Twitter and the &quot;Re-Tweet&quot; function, websites you visit are linked to your Twitter account and disclosed to other users.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                If your approval (consent) has been obtained the use of the abovementioned service shall occur on the basis of Art. 6(1)(a) GDPR and § 25 TTDSG. Such consent may be revoked at any time. If your consent was not obtained, the use of the service will occur on the basis of our legitimate interest in making our information as comprehensively visible as possible on social media.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Data transmission to the US is based on the Standard Contractual Clauses (SCC) of the European Commission. Details can be found here: <a href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://gdpr.twitter.com/en/controller-to-controller-transfers.html</a>.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                You have the option to reset your data protection settings on Twitter under the account settings at <a href="https://twitter.com/account/settings" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://twitter.com/account/settings</a>.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Plugins and Tools Section */}
                <Card className="mb-8 border-red-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-red-600">6. Plugins and Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">YouTube with Expanded Data Protection Integration</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                Our website embeds videos of the website YouTube. The website operator is Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Ireland.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                We use YouTube in the expanded data protection mode. According to YouTube, this mode ensures that YouTube does not store any information about visitors to this website before they watch the video. Nevertheless, this does not necessarily mean that the sharing of data with YouTube partners can be ruled out as a result of the expanded data protection mode.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                As soon as you start to play a YouTube video on this website, a connection to YouTube&apos;s servers will be established. As a result, the YouTube server will be notified, which of our pages you have visited. If you are logged into your YouTube account while you visit our site, you enable YouTube to directly allocate your browsing patterns to your personal profile.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                The use of YouTube is based on our interest in presenting our online content in an appealing manner. Pursuant to Art. 6(1)(f) GDPR, this is a legitimate interest. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                For more information on how YouTube handles user data, please consult the YouTube Data Privacy Policy under: <a href="https://policies.google.com/privacy?hl=en" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Fonts</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                To ensure that fonts used on this website are uniform, this website uses so-called Google Fonts provided by Google. When you access a page on our website, your browser will load the required fonts into your browser cache to correctly display text and fonts.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                To do this, the browser you use will have to establish a connection with Google&apos;s servers. As a result, Google will learn that your IP address was used to access this website. The use of Google Fonts is based on Art. 6(1)(f) GDPR.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                For more information on Google Fonts, please follow this link: <a href="https://developers.google.com/fonts/faq" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> and consult Google&apos;s Data Privacy Declaration under: <a href="https://policies.google.com/privacy?hl=en" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Maps</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                This website uses the mapping service Google Maps. The provider is Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Ireland.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                To enable the use of the Google Maps features, your IP address must be stored. As a rule, this information is transferred to one of Google&apos;s servers in the United States, where it is archived. The operator of this website has no control over the data transfer.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                We use Google Maps to present our online content in an appealing manner and to make the locations disclosed on our website easy to find. This constitutes a legitimate interest as defined in Art. 6(1)(f) GDPR.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                For more information on the handling of user data, please review Google&apos;s Data Privacy Declaration under: <a href="https://policies.google.com/privacy?hl=en" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">hCaptcha</h3>
                            <p className="text-gray-700 mb-4 text-justify">
                                We use &quot;hCaptcha&quot; (hereinafter referred to as &quot;hCaptcha&quot;) on this website. The provider is Intuition Machines, Inc., 2211 Selig Drive, Los Angeles, CA 90026, USA (hereinafter referred to as &quot;IMI&quot;).
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                hCaptcha is being used to determine whether the entry of data into this website (e.g., into a contact form) is being processed by a person or an automated program. For this purpose, hCaptcha analyzes the behavior patterns of website visitors on the basis of several characteristics.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                This analysis begins automatically as soon as the website visitor enters a website with the activated hCaptcha feature. For the analysis, hCaptcha uses a wide range of information (e.g., the IP address, time spent on the website or mouse actions taken by the user). The data recorded during this analysis is forwarded to IMI.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                The storage and analysis of the data occurs on the basis of Art. 6 (1)(f) GDPR. The website operator has a legitimate interest in protecting the operator&apos;s web presentations against abusive automatic spying and SPAM.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                For further information on hCaptcha, please consult the Data Protection Policy and Terms of Use under the following links: <a href="https://www.hcaptcha.com/privacy" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.hcaptcha.com/privacy</a> and <a href="https://hcaptcha.com/terms" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://hcaptcha.com/terms</a>.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Us Footer Section */}
                <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Privacy Policy?</h2>
                        <p className="text-gray-700 mb-6 text-justify">
                            Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.
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