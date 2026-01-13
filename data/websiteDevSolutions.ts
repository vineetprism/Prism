export type ServiceCategory = 'WebsiteDevelopment' | 'Enterprises' | 'Expertise';

export interface WebDevService {
    title: string;
    description: string;
    features: string[]; // Keep for backward compatibility or simplistic view
    image?: string;
    slug: string;
    category: ServiceCategory;

    // New Rich Content Fields
    hero?: {
        title: string;
        subtitle: string;
        cta: string;
    };
    businessImpact?: {
        content: string;
    };
    serviceGrid?: {
        title: string;
        description: string;
    }[];
    benefitsList?: {
        title: string;
        description: string;
    }[];
    lifecycle?: {
        step: string;
        title: string;
        description: string;
    }[];
    audience?: {
        startup: {
            focus: string;
            points: string[];
        };
        enterprise: {
            focus: string;
            points: string[];
        };
    };
    techStack?: {
        frontend: string[];
        cms: string[];
        cloud: string[];
        commerce: string[];
    };
    faq?: {
        question: string;
        answer: string;
    }[];
}

export const WEBSITE_DEV_SOLUTIONS_DATA: Record<string, WebDevService> = {
    'static-website-development': {
        slug: 'static-website-development',
        title: 'Static Website Development',
        category: 'WebsiteDevelopment',
        description: 'Static Website Development involves creating web pages with fixed content...', // Fallback
        features: [], // Fallback

        // Rich Content
        hero: {
            title: 'Static Website Development: The Foundation of Digital Velocity',
            subtitle: 'Immutable architectures engineered for the speed of now. We replace infrastructure complexity with architectural elegance, delivering sub-second load times and global availability.',
            cta: 'Get Your Performance Audit'
        },
        businessImpact: {
            content: "In an era where digital patience is measured in milliseconds, traditional monolithic systems are liabilities. At Prism Infoways, we architect the antidote to latency. We don't just build websites; we engineer digital assets that accelerate your growth, mathematically eliminate SQL injection risks, and deliver a Return on Investment that redefines industry standards."
        },
        serviceGrid: [
            { title: 'Enterprise JAMstack Migration', description: 'Transform your legacy. We migrate monolithic platforms (WordPress, Drupal) to decoupled architectures, preserving SEO equity via precision 301 redirects.' },
            { title: 'Headless CMS Integration', description: 'Empower your content teams. We implement user-friendly platforms (Contentful, Strapi) that decouple content from code for ultimate marketing agility.' },
            { title: 'Next.js & React Applications', description: 'Leverage Hybrid Rendering (SSG + SSR). We deliver the speed of static sites combined with the personalized functionality of dynamic applications.' },
            { title: 'Global Edge Deployment', description: 'Your server is everywhere. We replicate content across hundreds of Edge nodes (AWS, Vercel), ensuring identical speeds for users in Tokyo and New York.' },
            { title: 'Progressive Web Apps (PWA)', description: 'Blur the line between web and mobile. We engineer sites that function offline and offer app-like experiences without App Store friction.' },
            { title: 'Automated CI/CD & DevOps', description: 'Eliminate deployment fear. We build robust pipelines where every line of code is automatically tested for bugs and performance before production.' }
        ],
        benefitsList: [
            { title: 'Unmatched Performance', description: 'Eliminate Time to First Byte (TTFB). With 0.8s average load times, you dominate Core Web Vitals and boost conversion rates.' },
            { title: 'Ironclad Security', description: 'With no database connected to the presentation layer, SQL injection attacks are mathematically impossible. Secure by default.' },
            { title: 'Infinite Scalability', description: 'Handle Super Bowl level traffic spikes without crashing. Your site scales from 100 to 1 million users automatically via global CDNs.' },
            { title: 'Reduced TCO', description: 'Cut operational expenses by 65%. Save on expensive hosting, database licenses, and emergency maintenance contracts.' }
        ],
        lifecycle: [
            { step: 'Step 1', title: 'Assessment (Discovery & Architecture)', description: 'We audit your current stack, define data models, and select the perfect tech mix (Next.js vs. Gatsby) to align with your 3-year growth roadmap.' },
            { step: 'Step 2', title: 'Transition (Development & Migration)', description: 'Atomic design implementation and "Hydration" architecture. We run automated scripts to migrate legacy content, ensuring no data is lost.' },
            { step: 'Step 3', title: 'Monitoring (Automated Deployment)', description: 'CI/CD setup. When you press "Publish," the system rebuilds and deploys globally in seconds. Rigorous testing ensures zero-downtime launches.' },
            { step: 'Step 4', title: 'Optimization (Growth & Iteration)', description: 'Post-launch performance audits and analytics integration to ensure the site maintains "Green" scores on Lighthouse as you scale content.' }
        ],
        audience: {
            startup: {
                focus: 'Launch at Light Speed.',
                points: ['Rapid MVP deployment in weeks, not months.', 'Near-zero hosting costs (pay only for bandwidth).', 'SEO Dominance from Day 1 with perfect Lighthouse scores.']
            },
            enterprise: {
                focus: 'Governance & Resilience.',
                points: ['Impenetrable security (GDPR, HIPAA, SOC2 compliant).', 'Secure integration with SAP, Oracle, and Salesforce APIs.', 'High-traffic stability for millions of concurrent users.']
            }
        },
        techStack: {
            frontend: ['Next.js', 'Gatsby', 'Nuxt.js', 'React'],
            cms: ['Contentful', 'Strapi', 'Sanity', 'Storyblok'],
            cloud: ['Vercel', 'Netlify', 'AWS Amplify', 'Docker'],
            commerce: ['Shopify Headless', 'Stripe', 'BigCommerce']
        },
        faq: [
            { question: "If it's \"static,\" does that mean I can't have dynamic features like search or logins?", answer: "Not at all. We use APIs to load dynamic features like Algolia search, forms, and Auth0 user authentication instantly. You get static speed with dynamic power." },
            { question: "Will my marketing team need to learn code to update the site?", answer: "No. We implement Headless CMS interfaces that look similar to WordPress. Your team drags-and-drops content; the system handles the code." },
            { question: "How does this impact my SEO?", answer: "It is a massive advantage. Google prioritizes page speed. Static sites naturally excel at Core Web Vitals, often resulting in immediate ranking boosts." },
            { question: "Is migrating from WordPress difficult?", answer: "It requires planning, but it is our specialty. We use automated tools to map and transfer your content, ensuring your SEO history is preserved." },
            { question: "How does this architecture improve security?", answer: "It virtually eliminates the attack surface. There is no database to hack and no login page to brute-force on the public site, making it ideal for high-security sectors." }
        ]
    },
    'corporate-website-development': { slug: 'corporate-website-development', title: 'Corporate Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'dynamic-website-development': { slug: 'dynamic-website-development', title: 'Dynamic Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'php-website-development': { slug: 'php-website-development', title: 'PHP Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'cms-website-development': { slug: 'cms-website-development', title: 'CMS Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'website-re-development': { slug: 'website-re-development', title: 'Website Re-development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'travel-website-development': { slug: 'travel-website-development', title: 'Travel Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'react-js-website-development': { slug: 'react-js-website-development', title: 'React Js website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
};
