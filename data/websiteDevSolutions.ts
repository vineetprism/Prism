export type ServiceCategory = 'WebsiteDevelopment' | 'AppDevelopment' | 'Enterprises' | 'Expertise' | 'Cybersecurity';

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
            title: 'Static Website Development: Turning Digital Performance Into Enterprise ROI',
            subtitle: 'Immutable architectures engineered for the speed of now. Our static website development solutions help enterprises replace infrastructure complexity with architectural clarity, delivering sub-second load times, enterprise-grade security, and global availability.',
            cta: 'Get Your Performance Audit'
        },
        businessImpact: {
            content: "In an era where digital patience is measured in milliseconds, legacy monolithic systems introduce unacceptable performance, security, and scalability risks. At Prism Infoways, we architect performance-first, statically optimized systems that eliminate runtime attack surfaces and latency bottlenecks. We don't just build websites; we engineer hardened digital assets that minimize vectors such as SQL injection, ensure predictable performance at scale, and deliver quantifiable ROI through reduced infrastructure, security, and operational costs."
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
            { title: 'Unmatched Performance at Enterprise Scale', description: 'Our static website development architecture eliminates TTFB, delivers ~0.8s load times, exceeds Core Web Vitals thresholds, and improves engagement and conversion metrics across distributed global traffic.' },
            { title: 'Ironclad Security by Design', description: 'Our static website designing services decouple databases from the presentation layer, removing entire classes of vulnerabilities such as SQL injection and ensuring a predictable, low-risk security posture with minimal ongoing patching.' },
            { title: 'Infinite Scalability Without Infrastructure Stress', description: 'Delivered as enterprise-grade static website services, the platform auto-scales via global CDNs to support traffic surges from hundreds to millions of users—without downtime, reconfiguration, or performance regression.' },
            { title: 'Reduced Total Cost of Ownership (TCO)', description: 'As a performance-focused static website development company, we reduce TCO by up to 65% by eliminating complex hosting layers, database licensing, and reactive maintenance while maintaining predictable performance at scale.' }
        ],
        lifecycle: [
            { step: 'Step 1', title: 'Assessment (Discovery & Architecture)', description: 'We evaluate your existing stack, define scalable data models, and select the optimal technology framework (Next.js or Gatsby) aligned with your long-term growth roadmap.' },
            { step: 'Step 2', title: 'Transition (Development & Migration)', description: 'We implement atomic design and hydration-ready architecture, executing automated migrations to transition legacy content with complete data integrity.' },
            { step: 'Step 3', title: 'Monitoring (Automated Deployment)', description: 'CI/CD pipelines enable instant global deployments. Each publish triggers automated builds, testing, and zero-downtime releases across CDN networks.' },
            { step: 'Step 4', title: 'Optimization (Growth & Iteration)', description: 'Continuous performance audits and analytics ensure sustained Lighthouse "Green" scores while supporting scalable content and ongoing optimization.' }
        ],
        audience: {
            startup: {
                focus: 'Launch at Light Speed',
                points: ['Rapid MVP deployment in weeks, not months.', 'Near-zero hosting costs (pay only for bandwidth).', 'SEO Dominance from Day 1 with perfect Lighthouse scores.']
            },
            enterprise: {
                focus: 'Governance & Resilience',
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
            { question: "What Is Static Website Development?", answer: "Static website development is a modern approach where web pages are pre-built and served directly via CDNs, eliminating server-side processing. This results in faster load times, higher security, and predictable performance compared to dynamic websites." },
            { question: "How Is A Static Website Different From A Dynamic Website?", answer: "A static website delivers pre-rendered pages without database queries, while dynamic websites generate pages at runtime. Static websites are faster, more secure, and easier to scale, making them ideal for enterprise-grade performance and SEO." },
            { question: "Are Static Websites Secure For Enterprise Use?", answer: "Yes. With no database connected to the presentation layer, static websites remove common attack vectors such as SQL injection and server-side exploits, making them inherently secure and suitable for enterprise environments." },
            { question: "Can Static Websites Scale For High Traffic?", answer: "Absolutely. Static website services leverage global CDNs, allowing websites to scale automatically from hundreds to millions of users without downtime, infrastructure upgrades, or performance degradation." },
            { question: "Do Static Websites Support SEO And Core Web Vitals?", answer: "Yes. Static website development consistently outperforms Core Web Vitals due to minimal TTFB, fast rendering, and clean code structures—leading to better crawlability, rankings, and user engagement." },
            { question: "Is Content Management Possible With Static Websites?", answer: "Yes. Static websites can be integrated with headless CMS platforms, enabling non-technical teams to manage content while maintaining static performance, security, and scalability." },
            { question: "What Businesses Benefit Most From Static Website Designing Services?", answer: "Enterprises, SaaS companies, startups, and content-heavy brands benefit most from static website designing services due to lower operational costs, higher reliability, and improved digital performance." }
        ]
    },
    'corporate-website-development': {
        slug: 'corporate-website-development',
        title: 'Corporate Website Development',
        category: 'WebsiteDevelopment',
        description: 'Build the central nervous system of your digital enterprise with AI-native, cloud-resilient corporate platforms.',
        features: [
            'Legacy Modernization & Re-Platforming',
            'AI-Native Development',
            'Cloud-Native Infrastructure',
            'Experience Design (UX/UI)',
            'DevSecOps & Compliance',
            'Performance Engineering'
        ],
        hero: {
            title: 'Build the Central Nervous System of Your Digital Enterprise.',
            subtitle: 'Move beyond the brochure. We engineer AI-native, cloud-resilient corporate platforms designed to eliminate legacy debt and drive a 9,900% ROI through superior User Experience.',
            cta: 'Schedule Technical Discovery'
        },
        businessImpact: {
            content: "In 2026, your corporate website is not a marketing asset; it is operational infrastructure. Legacy systems and monolithic codebases create 'Innovation Paralysis,' leaving you vulnerable to $4.88M average breach costs and agile competitors. We don't just write code. We deliver Total Application Modernization."
        },
        serviceGrid: [
            { title: 'Legacy Modernization & Re-Platforming', description: 'Unshackle your enterprise from monolithic debt. We use the "Strangler Fig" pattern to safely migrate legacy logic to scalable microservices without downtime.' },
            { title: 'AI-Native Development', description: 'Integrate GenAI directly into your UX. From RAG-powered search to autonomous service agents, we build the "Action Web" of tomorrow.' },
            { title: 'Cloud-Native Infrastructure', description: 'Built for resilience on AWS/Azure. We utilize Kubernetes and Terraform to ensure your platform scales instantly during traffic spikes.' },
            { title: 'Experience Design (UX/UI)', description: 'Data-driven design that converts. We map customer journeys to engineering value streams, ensuring every pixel drives revenue.' },
            { title: 'DevSecOps & Compliance', description: 'Security shifts left. Automated SAST/DAST pipelines and AI-driven guardrails ensure GDPR/CCPA compliance by design.' },
            { title: 'Performance Engineering', description: 'Speed is a feature. We optimize Core Web Vitals to millisecond precision, ensuring 100% SEO visibility and user retention.' }
        ],
        benefitsList: [
            { title: '9,900% ROI', description: 'Average return on DXP investment through reduced costs and increased revenue.' },
            { title: '65% Cost Reduction', description: 'Infrastructure and operational savings through modern architecture.' },
            { title: '0.8s Load Time', description: 'Average page performance for optimal user experience and SEO.' },
            { title: '99.99% Uptime', description: 'Enterprise-grade reliability with cloud-native resilience.' }
        ],
        techStack: {
            frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            cms: ['Contentful', 'Sanity', 'Strapi', 'Payload CMS'],
            cloud: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
            commerce: ['SAP Integration', 'Salesforce', 'Oracle APIs', 'Custom Solutions']
        },
        faq: [
            { question: "What makes a Digital Experience Platform different from a traditional website?", answer: "A DXP is not just a website—it's the operational infrastructure of your digital enterprise. It integrates AI, analytics, personalization, and omnichannel delivery into a unified platform that drives business outcomes, not just page views." },
            { question: "How do you ensure zero downtime during legacy migration?", answer: "We employ the 'Strangler Fig' pattern, incrementally replacing legacy components with modern microservices. This allows both systems to run in parallel until the migration is complete, ensuring business continuity." },
            { question: "What is AI-Native development?", answer: "AI-Native means AI is not bolted on as an afterthought—it's architected into the platform's DNA. This includes RAG-powered intelligent search, autonomous chatbots, predictive personalization, and AI-driven security monitoring." },
            { question: "How do you measure the 9,900% ROI claim?", answer: "ROI is calculated across multiple vectors: reduced infrastructure costs, increased conversion rates from improved UX, decreased security incident costs, and accelerated time-to-market for new features. We provide detailed benchmarking reports." },
            { question: "What compliance standards do you support?", answer: "Our DevSecOps pipelines are built to meet GDPR, CCPA, HIPAA, SOC2, and PCI-DSS requirements. Compliance is automated into the CI/CD process, not manually audited post-deployment." }
        ]
    },
    'dynamic-website-development': { slug: 'dynamic-website-development', title: 'Dynamic Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'php-website-development': { slug: 'php-website-development', title: 'PHP Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'cms-website-development': { slug: 'cms-website-development', title: 'CMS Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'website-re-development': { slug: 'website-re-development', title: 'Website Re-development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'travel-website-development': { slug: 'travel-website-development', title: 'Travel Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'react-js-website-development': { slug: 'react-js-website-development', title: 'React Js website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'angular-website-development': { slug: 'angular-website-development', title: 'Angular Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'flutter-web-development': { slug: 'flutter-web-development', title: 'Flutter Web Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'wordpress-development': { slug: 'wordpress-development', title: 'Wordpress Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'food-business-web-development': { slug: 'food-business-web-development', title: 'Food Business Web Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'custom-business-portal-development': { slug: 'custom-business-portal-development', title: 'Custom Business Portal Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'ecommerce-web-development': { slug: 'ecommerce-web-development', title: 'Ecommerce Web development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'landing-page-development': { slug: 'landing-page-development', title: 'Landing Page Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'shopify-website-development': { slug: 'shopify-website-development', title: 'Shopify Website Development', category: 'WebsiteDevelopment', description: '<p>Coming Soon...</p>', features: [] },

    // App Development Solutions
    'android-app-development': { slug: 'android-app-development', title: 'Android App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'ios-app-development': { slug: 'ios-app-development', title: 'iOS App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'mobile-app-design': { slug: 'mobile-app-design', title: 'Mobile App Design', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'swift-app-development': { slug: 'swift-app-development', title: 'Swift App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'flutter-app-development': { slug: 'flutter-app-development', title: 'Flutter App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'react-native-app-development': { slug: 'react-native-app-development', title: 'React Native App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'gaming-app-development': { slug: 'gaming-app-development', title: 'Gaming App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'xamarin-app-development': { slug: 'xamarin-app-development', title: 'Xamarin App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'ios-sdk-app-development': {
        slug: 'ios-sdk-app-development',
        title: 'iOS SDK App Development',
        category: 'AppDevelopment',
        description: 'Transform Business Logic into Intelligent Digital Assets with enterprise-grade iOS solutions.',
        features: ['Swift & SwiftUI', 'Legacy Migration', 'Enterprise Security'],

        // Rich Content
        hero: {
            title: 'Transform Business Logic into Intelligent Digital Assets.',
            subtitle: 'Drive 30-40% higher operational efficiency with enterprise-grade iOS solutions designed for scale, security, and zero-friction compliance.',
            cta: 'Start Your Technical Assessment'
        },
        businessImpact: {
            content: "The iOS ecosystem is no longer just a channel; it is the primary revenue driver, capturing 75% of global consumer app spending. We move beyond simple functional deployment to build \"Intelligent Mobility\" ecosystems—integrating On-Device ML, AR, and Cloud connectivity to future-proof your enterprise against a $626 billion market trajectory."
        },
        serviceGrid: [
            { title: 'Native Engineering', description: 'High-performance development using Swift & SwiftUI. We build responsive, ABI-stable applications that scale from iPhone SE to iPad Pro.' },
            { title: 'Legacy Rescue & Migration', description: 'Stabilize and modernize aging Objective-C codebases. We eliminate technical debt and migrate to Swift without disrupting operations.' },
            { title: 'The Compliance Shield', description: 'Guaranteed App Store approval support. We conduct pre-submission audits for Privacy Manifests and HIG standards to prevent rejection.' },
            { title: 'Performance Tuning', description: 'Eliminate crashes and memory leaks. We utilize XCode Instruments to optimize memory retention and battery consumption for fluid UX.' },
            { title: 'Next-Gen Integration', description: 'Unlock the power of the device. Implementation of ARKit for immersive experiences and CoreML for secure, on-device intelligence.' },
            { title: 'Enterprise Security', description: 'Bank-grade protection. We implement SSL Pinning, Keychain storage, and code obfuscation to protect IP and prevent data breaches.' }
        ],
        benefitsList: [
            { title: 'Operational Efficiency', description: 'Custom workflows reduce manual friction, delivering verified 30-40% efficiency gains over generic software.' },
            { title: 'Maximum Monetization', description: 'Target the premium user base. iOS users drive higher average order values and 5x higher Customer Lifetime Value (CLV).' },
            { title: 'Rapid Validation', description: 'Leverage our agile frameworks to launch MVPs faster. 91.9% of our rapid-dev projects recover investment within year one.' },
            { title: 'Risk Mitigation', description: 'From "Unexpected Rejections" to data theft, our rigorous compliance and security protocols de-risk your digital innovation.' }
        ],
        lifecycle: [
            { step: 'Step 1', title: 'Strategic Assessment (The Blueprint)', description: 'Feasibility audits, MVP scoping, and User Persona mapping. We define the "Why" before writing the code.' },
            { step: 'Step 2', title: 'Agile Transition (The Build)', description: 'Iterative engineering using SwiftUI for rapid UI dev and Combine for robust data handling. Bi-weekly sprints with visible deliverables.' },
            { step: 'Step 3', title: 'Rigorous Monitoring (The Quality Firewall)', description: 'Automated testing via XCTest, memory profiling to catch leaks, and security audits before the binary ever leaves the building.' },
            { step: 'Step 4', title: 'Lifecycle Optimization (The Growth)', description: 'App Store Optimization (ASO), seamless iOS version updates, and continuous feature integration to prevent churn.' }
        ],
        audience: {
            startup: {
                focus: 'Speed & Validation',
                points: ['You need to hit the market fast. We provide rapid MVP development, cost-efficient resource scaling, and a direct path to monetization.']
            },
            enterprise: {
                focus: 'Scale & Security',
                points: ['You need to integrate and transform. We provide legacy modernization, strict data governance, and secure integration with backend legacy systems.']
            }
        },
        techStack: {
            frontend: ['Swift', 'SwiftUI', 'UIKit', 'Combine'],
            cms: ['CoreML', 'ARKit', 'Xcode', 'TestFlight'],
            cloud: ['Firebase', 'Jenkins', 'CI/CD'],
            commerce: ['StoreKit', 'Apple Pay', 'In-App Purchase']
        },
        faq: [
            { question: "My previous app was rejected by the App Store. Can you fix it?", answer: "Yes. We offer a \"Compliance Rescue\" service. We audit your code against Apple's latest guidelines (including Privacy Manifests) to identify the rejection trigger and fix it for resubmission." },
            { question: "Should we build in SwiftUI or UIKit?", answer: "We recommend SwiftUI for most new \"greenfield\" projects for its speed and code efficiency. However, for complex legacy apps requiring granular control, we maintain deep expertise in UIKit." },
            { question: "How do you handle data security for enterprise apps?", answer: "We employ a \"Security-First\" architecture. This includes SSL Pinning for network requests, Keychain Services for credential storage, and code obfuscation to prevent reverse engineering." },
            { question: "Do you support legacy Objective-C apps?", answer: "Absolutely. We are one of the few firms with a dedicated \"Legacy Modernization\" team that can maintain your existing Objective-C app while incrementally migrating it to Swift." },
            { question: "What happens after the app launches?", answer: "Launch is just the beginning. We offer Lifecycle Management packages to handle iOS updates, bug fixes, and feature additions, ensuring your investment doesn't degrade over time." }
        ]
    },

    'ecommerce-app-development': { slug: 'ecommerce-app-development', title: 'Ecommerce App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'education-app-development': { slug: 'education-app-development', title: 'Education App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'corporate-business-app-development': { slug: 'corporate-business-app-development', title: 'Corporate Business App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'food-delivery-app-development': { slug: 'food-delivery-app-development', title: 'Food Delivery App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'job-portal-app-development': { slug: 'job-portal-app-development', title: 'Job Portal App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'astrology-app-development': { slug: 'astrology-app-development', title: 'Astrology App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'restaurant-app-development': { slug: 'restaurant-app-development', title: 'Restaurant App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'taxi-cab-app-development': { slug: 'taxi-cab-app-development', title: 'Taxi/Cab App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'real-estate-app-development': { slug: 'real-estate-app-development', title: 'Real Estate App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'kotlin-app-development': { slug: 'kotlin-app-development', title: 'Kotlin App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'all-business-app-development': { slug: 'all-business-app-development', title: 'All Business App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'custom-app-development': { slug: 'custom-app-development', title: 'Custom App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'website-to-app-development': { slug: 'website-to-app-development', title: 'Website to App Development', category: 'AppDevelopment', description: '<p>Coming Soon...</p>', features: [] },
    'android-sdk-app-development': {
        slug: 'android-sdk-app-development',
        title: 'Android SDK App Development',
        category: 'AppDevelopment',
        description: 'Secure your digital core with enterprise-grade Android SDKs and Kotlin Multiplatform.',
        features: ['Kotlin Multiplatform', 'SDK Architecture', 'Device Farm Testing'],

        // Rich Content
        hero: {
            title: 'Secure Your Digital Core with Enterprise-Grade Android SDKs.',
            subtitle: 'Move beyond fragmentation. We engineer high-performance, compliant Android architectures that reduce technical debt and maximize ROI using Kotlin Multiplatform.',
            cta: 'Consult Our Architects'
        },
        businessImpact: {
            content: "In 2025, the mobile endpoint is not just a channel; it is your infrastructure. With the global Cost of Poor Software Quality (CoPQ) reaching $2.41 Trillion, the risk of sub-par engineering is existential. Prism Infoways eliminates this risk by replacing legacy fragility with resilient, defensible Android architectures."
        },
        serviceGrid: [
            { title: 'Kotlin Multiplatform (KMP)', description: 'Reduce dev costs by 60% by sharing business logic across iOS and Android while retaining 100% native UI performance.' },
            { title: 'SDK Facade Architecture', description: 'Defensive SDK design using Facade Patterns to prevent integration conflicts and ensure seamless client-side adoption.' },
            { title: 'Compliance & Security', description: 'Automated generation of SBOMs and Privacy Manifests to meet EU Cyber Resilience, GDPR, and HIPAA standards.' },
            { title: 'Modern UI Engineering', description: "High-fidelity interfaces built with Jetpack Compose for 'Lookahead' animations and fluid, jank-free user experiences." },
            { title: 'Legacy Modernization', description: 'Strategic migration of monolithic Java codebases to modular Kotlin architectures without disrupting business continuity.' },
            { title: 'AI-Driven Quality Eng.', description: "'Shift Left' automated testing pipelines that catch defects early, reducing the cost of bugs by 100x." }
        ],
        benefitsList: [
            { title: 'Economic Efficiency', description: 'Leverage KMP to share 99% of business logic, cutting duplicate maintenance costs by half.' },
            { title: 'Risk Mitigation', description: "Eliminate the 'Process Killing' risks of fragmented device manufacturers through rigorous device farm testing." },
            { title: 'Data Sovereignty', description: 'Secure your proprietary algorithms with ProGuard/R8 obfuscation and encrypted, token-based authentication.' },
            { title: 'Market Velocity', description: 'Accelerate integration for your partners with strictly versioned (SemVer), self-documenting SDKs.' }
        ],
        techStack: {
            frontend: ['Kotlin', 'Java 17', 'Jetpack Compose', 'Material Design 3'],
            cms: ['Kotlin Multiplatform', 'Google Jetpack', 'Dokka'],
            cloud: ['Jenkins', 'GitLab CI', 'Maven Central', 'Docker'],
            commerce: ['Retrofit', 'OkHttp', 'Room', 'Coroutines/Flow']
        },
        faq: [
            { question: "Why choose Kotlin Multiplatform (KMP) over Flutter or React Native?", answer: "KMP allows us to share business logic while using 100% native UI (Jetpack Compose). This ensures the app feels native and performant, while still reducing logic code by ~60%." },
            { question: "How do you handle Android Device Fragmentation?", answer: "We utilize cloud-based device farms to test against the top 100 most common device models. We specifically code defensibly against aggressive battery management used by manufacturers like Xiaomi and OnePlus." },
            { question: "How do you secure SDKs against reverse engineering?", answer: "We employ rigorous code obfuscation using R8/ProGuard and implement encrypted data storage (Jetpack Security). For regulated industries, we provide full SBOMs and Privacy Manifests." },
            { question: "What is your approach to SDK Versioning?", answer: "We strictly adhere to Semantic Versioning (Major.Minor.Patch). We use automated CI/CD tools to enforce this, ensuring updates never break client integrations." },
            { question: "Do you provide SDK documentation?", answer: "Yes. We use 'Docs as Code' (Dokka) to generate up-to-date HTML documentation directly from the source code." }
        ]
    },

    // Cybersecurity Solutions
    'managed-cybersecurity-services': { slug: 'managed-cybersecurity-services', title: 'Managed Cybersecurity Services', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
    'cybersecurity-risk-assessment-services': { slug: 'cybersecurity-risk-assessment-services', title: 'Cybersecurity Risk Assessment Services', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
    'virtual-ciso-services-solutions': {
        slug: 'virtual-ciso-services-solutions',
        title: 'Virtual CISO Services & Solutions',
        category: 'Cybersecurity',
        description: 'Secure your organization, accelerate SOC 2/ISO 27001 compliance, and reduce breach risk by 70%. Get the strategic oversight of a veteran CISO without the $250k+ salary burden.',
        features: ['SOC 2 Readiness', 'Zero Long-Term Contracts', 'Conflict-Free Advisory'],
        hero: {
            title: 'Enterprise-Grade Security Leadership. Fractional Cost.',
            subtitle: 'Secure your organization, accelerate SOC 2/ISO 27001 compliance, and reduce breach risk by 70%. Get the strategic oversight of a veteran CISO without the $250k+ salary burden.',
            cta: 'Start Your 100-Day Security Roadmap'
        },
        businessImpact: {
            content: "In an era where the average data breach costs $4.88 million, security is no longer just IT maintenance—it is your insurance policy. The traditional hiring model is broken; with salaries inflating and tenure shrinking, your business cannot afford strategic drift. Prism Infoways delivers Fractional Strategic Leadership to navigate complex regulatory landscapes."
        },
        serviceGrid: [
            { title: 'Regulatory Compliance Engine', description: 'Architecting your path to SOC 2 Type II, ISO 27001, and CMMC in months, not years, using automated evidence collection.' },
            { title: 'Third-Party Risk Management', description: 'We implement "Pre-Contract Security Gates" to vet vendors and manage the Business Associate Agreement (BAA) lifecycle.' },
            { title: 'Incident Response Planning', description: 'Development of battle-tested IR plans and execution of Tabletop Exercises (TTX) to ensure your team is ready when—not if—an attack occurs.' },
            { title: 'Governance & Policy Design', description: 'Drafting enforceable Information Security Policies, Acceptable Use Policies, and Disaster Recovery protocols tailored to your specific culture.' },
            { title: 'Board Advisory & Reporting', description: 'Quarterly presentations that translate technical vulnerability metrics into financial risk models for your Board of Directors.' },
            { title: 'Security Architecture Review', description: 'Overseeing the deployment of MFA, SSO (Okta/Entra), and EDR tools to eliminate "Shadow IT" and harden your perimeter.' }
        ],
        benefitsList: [
            { title: '70% Cost Efficiency', description: 'Eliminate the $425k+ Total Cost of Ownership of a full-time executive. Reallocate savings ($200k+) into operational tooling and cyber insurance.' },
            { title: 'Accelerated Sales Cycles', description: 'Stop losing enterprise deals due to security questionnaires. We slash response times and achieve SOC 2 readiness in as little as 12 weeks.' },
            { title: 'Platform-Driven Visibility', description: 'We leverage AI-driven GRC platforms (Drata, Vanta) to provide real-time, 24/7 visibility into your compliance posture—no spreadsheets required.' },
            { title: 'Conflict-Free Independence', description: 'Unlike MSPs, we don\'t resell hardware. Our advice is objective, technology-agnostic, and focused entirely on your risk profile, not our margins.' }
        ],
        lifecycle: [
            { step: 'Phase 1', title: 'Assessment (Discovery)', description: 'We deploy automated scanning (Cynomi/Reco) to map "Shadow IT" and conduct deep-dive stakeholder interviews. Deliverable: Gap Analysis.' },
            { step: 'Phase 2', title: 'Transition (Strategy)', description: 'We build the Risk Register and prioritize the Remediation Roadmap. Quick wins (MFA, Admin rights) are executed immediately. Deliverable: Policy Library.' },
            { step: 'Phase 3', title: 'Monitoring (Execution)', description: 'Launching Vendor Risk Management (VRM) and conducting Ransomware Tabletop Exercises to test your defenses. Deliverable: Security Training.' },
            { step: 'Phase 4', title: 'Optimization (Governance)', description: 'Steady-state leadership. We manage the audit cycle and present "State of Security" metrics to your Board. Deliverable: Quarterly Business Reviews.' }
        ],
        audience: {
            startup: {
                focus: 'SOC 2 / ISO 27001 Certification.',
                points: ['We can\'t close deals with Banks/Enterprises without a security report.', 'Aggressive, automation-first sprint to get you "Audit Ready".']
            },
            enterprise: {
                focus: 'CMMC, HIPAA, & Operational Resilience.',
                points: ['We are worried about Ransomware stopping the production line.', 'Governance-heavy approach focusing on Business Continuity & supply chain hardening.']
            }
        },
        techStack: {
            frontend: ['Drata', 'Vanta'],
            cms: ['Cynomi', 'RealCISO'],
            cloud: ['Okta', 'Microsoft Entra ID'],
            commerce: ['Tenable', 'Qualys', 'AppOmni']
        },
        faq: [
            { question: "How is a vCISO different from a full-time CISO?", answer: "A vCISO provides the same executive-level strategy and governance but on a fractional basis. You get the expertise of a veteran leader for a specific scope at ~30% of the cost." },
            { question: "Can you help us get SOC 2 certified?", answer: "Yes. We act as the architect, implementing controls and managing the GRC platform to reduce the timeline to 2-4 months." },
            { question: "Do you provide 24/7 monitoring (SOC)?", answer: "We provide strategy and governance, overseeing your MSSP to ensure they are performing effectively, but do not operate SOC analysts ourselves to maintain independence." },
            { question: "What is the pricing model?", answer: "We operate on a flat-rate monthly retainer ($3k-$15k/month) to ensure predictable billing and avoid hourly traps." },
            { question: "How quickly can we start?", answer: "We can deploy the 'First 100 Days' framework within 48 hours of contract signing." }
        ]
    },
    'multi-factor-authentication-managed-services': { slug: 'multi-factor-authentication-managed-services', title: 'Multi Factor Authentication Managed Services', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
    'endpoint-detection-response-services': { slug: 'endpoint-detection-response-services', title: 'Endpoint Detection & Response Services', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
    'intrusion-detection-response-services': { slug: 'intrusion-detection-response-services', title: 'Intrusion Detection & Response Services', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
    'phishing-prevention-training-services': { slug: 'phishing-prevention-training-services', title: 'Phishing Prevention Training Services', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
    'vulnerability-testing-assessment-services': { slug: 'vulnerability-testing-assessment-services', title: 'Vulnerability Testing & Assessment Services', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
    'professional-dark-web-monitoring': { slug: 'professional-dark-web-monitoring', title: 'Professional Dark Web Monitoring', category: 'Cybersecurity', description: '<p>Coming Soon...</p>', features: [] },
};
