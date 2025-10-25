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
    siteName: 'My Website',
    siteAuthor: undefined,
    siteDescription: undefined,
    tagline: '',
    menuItems: [
        { href: '/', label: 'Home' },
    ],

    // Hero section
    heroTitle: 'Welcome',
    heroSubtitle: undefined,
    heroDescription: '',
    heroBadge: undefined,
    heroCTA: undefined,
    heroCTALink: undefined,
    heroStats: undefined,
    enableHeroAnimation: true,
    heroImageUrl: undefined,
    heroVideoUrl: undefined,

    // Footer + theme
    footerText: '© 2025 All rights reserved.',
    primaryColor: '#10b981',

    // SEO
    ogImage: undefined,
    favicon: undefined,
    seoTitle: undefined,
    seoDescription: undefined,
    seoKeywords: undefined,

    // Pages configuration
    pages: {
        home: {
            page_name: 'home',
            page_title: 'Home',
            page_description: 'Welcome to your new website',
            sections: [
                {
                    id: 'welcome-section',
                    content: '<div class="container mx-auto px-4 py-16"><div class="max-w-4xl mx-auto text-center"><h1 class="text-5xl font-bold mb-6">Welcome</h1><p class="text-xl text-gray-600 mb-8">This is your home page. Edit this content in the Page Layout Editor to customize your website.</p></div></div>',
                },
            ],
            is_published: true,
        },
    },
};

export default siteConfig;
