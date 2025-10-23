// site-config.ts
// This file is auto-generated from your project configuration
// Edit via the dashboard at https://yourdomain.com/hub/projects/config

export interface SiteConfig {
    // Global site settings
    siteName: string;
    siteAuthor?: string;
    siteDescription?: string;
    tagline: string;
    menuItems: Array<{
        href: string;
        label: string;
    }>;

    // Hero section
    heroTitle: string;
    heroSubtitle?: string;
    heroDescription: string;
    heroBadge?: string;
    heroCTA?: string;
    heroCTALink?: string;
    heroStats?: Array<{
        label: string;
        value: string;
    }>;
    enableHeroAnimation?: boolean;
    heroImageUrl?: string;
    heroVideoUrl?: string;

    // Footer + theme
    footerText: string;
    primaryColor: string;

    // SEO
    ogImage?: string;
    favicon?: string;
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;

    // Pages configuration
    pages: {
        [pageName: string]: {
            page_name: string;
            page_title: string;
            page_description: string;
            sections: Array<{
                id: string;
                content: string;
            }>;
            is_published: boolean;
        };
    };
}

// Generated configuration
const siteConfig: SiteConfig = {
    // Global site settings
    siteName: 'My Awesome App',
    siteAuthor: 'Your Company Name',
    siteDescription: 'Build amazing web applications with our platform',
    tagline: 'The future of web development',
    menuItems: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/features', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/contact', label: 'Contact' },
    ],

    // Hero section
    heroTitle: 'Build Faster, Ship Smarter',
    heroSubtitle: 'The modern platform for developers',
    heroDescription: 'Create beautiful, high-performance web applications with our intuitive platform. No complex setup, no hassle - just pure productivity.',
    heroBadge: '🚀 New Release',
    heroCTA: 'Get Started Free',
    heroCTALink: '/signup',
    heroStats: [
        { label: 'Active Users', value: '10,000+' },
        { label: 'Projects Built', value: '50,000+' },
        { label: 'Success Rate', value: '99.9%' },
    ],
    enableHeroAnimation: true,
    heroImageUrl: '',
    heroVideoUrl: '',

    // Footer + theme
    footerText: '© 2025 My Awesome App. All rights reserved.',
    primaryColor: '#3b82f6',

    // SEO
    ogImage: '',
    favicon: '',
    seoTitle: 'My Awesome App - Build Faster, Ship Smarter',
    seoDescription: 'Create beautiful, high-performance web applications with our intuitive platform.',
    seoKeywords: 'web development, app builder, no-code, low-code, platform',

    // Pages configuration
    pages: {
        home: {
            page_name: 'home',
            page_title: 'Home',
            page_description: 'Welcome to our homepage',
            sections: [
                {
                    id: '1',
                    content: '<h2>Why Choose Us?</h2><p>We provide the best tools and features to help you build amazing web applications quickly and efficiently.</p><ul><li>Fast and reliable</li><li>Easy to use</li><li>Great support</li></ul>',
                },
            ],
            is_published: true,
        },
        about: {
            page_name: 'about',
            page_title: 'About Us',
            page_description: 'Learn more about our company and mission',
            sections: [
                {
                    id: '1',
                    content: '<h2>Our Story</h2><p>We started with a simple mission: make web development accessible to everyone. Today, we serve thousands of developers worldwide.</p>',
                },
            ],
            is_published: true,
        },
        features: {
            page_name: 'features',
            page_title: 'Features',
            page_description: 'Explore our powerful features',
            sections: [
                {
                    id: '1',
                    content: '<h2>Powerful Features</h2><p>Our platform comes with everything you need to build modern web applications.</p>',
                },
            ],
            is_published: true,
        },
    },
};

export default siteConfig;
