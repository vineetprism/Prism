'use client';

import React from 'react';
import { Users, Target, BookOpen, TrendingUp } from 'lucide-react';

interface BenefitCard {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    iconBg: string;
}

export const CareerAboutSection: React.FC = () => {
    const benefits: BenefitCard[] = [
        {
            icon: <Users className="w-6 h-6 text-red-600" />,
            title: 'Team work',
            description: 'Together, we build more than just solutions – we build a culture of collaboration.',
            bgColor: 'bg-red-50',
            iconBg: 'bg-red-100',
        },
        {
            icon: <Target className="w-6 h-6 text-red-600" />,
            title: 'Secured Future',
            description: 'We\'re here to grow with you, not just around you. Because your future isn\'t just a goal — it\'s a promise.',
            bgColor: 'bg-orange-50',
            iconBg: 'bg-orange-100',
        },
        {
            icon: <BookOpen className="w-6 h-6 text-red-600" />,
            title: 'Learning Opportunity',
            description: 'You\'ll grow your confidence, creativity, and career. Because when you learn more, you build more — for yourself and the future.',
            bgColor: 'bg-amber-50',
            iconBg: 'bg-amber-100',
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-red-600" />,
            title: 'Upgrade Skills',
            description: 'Learning isn\'t extra – it\'s essential. Because when you upgrade your skills, you unlock your future.',
            bgColor: 'bg-red-50',
            iconBg: 'bg-red-100',
        },
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        Why you Should Join Our <br />
                        <span className="text-red-600">Awesome Team</span>
                    </h1>

                    <div className="max-w-2xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            Your Growth = Our Growth
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            From personalized career paths to upskilling programs and hands-on experience across domains,
                            we invest in your long-term success — not just your job title.
                        </p>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
                    {benefits?.map((benefit, index) => (
                        <div
                            key={index}
                            className={`${benefit.bgColor} rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group`}
                        >
                            {/* Icon Container */}
                            <div
                                className={`${benefit.iconBg} w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerAboutSection;