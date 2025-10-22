// site-config.ts
// This file is auto-generated from your project configuration
// Edit via the dashboard at https://yourdomain.com/hub/projects/config

export interface SiteConfig {
  // Global site settings
  siteName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  primaryColor: string;
  footerText: string;
  menuItems: Array<{
    href: string;
    label: string;
  }>;

  // Pages configuration
  pages: {
    [pageName: string]: {
      page_name: string;
      page_title: string;
      page_description: string;
      sections: Array<{
        id: string;
        content: string; // HTML content from Froala editor
      }>;
      is_published: boolean;
    };
  };
}

// Generated configuration
const siteConfig: SiteConfig = {
  // From projects.site_config
  siteName: "test",
  tagline: "",
  heroTitle: "test",
  heroSubtitle: "",
  heroDescription: "wefw",
  primaryColor: "#10b981",
  footerText: "© 2024 All rights reserved",
  menuItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ],

  // From projects_pages table
  pages: {
    home: {
      page_name: "home",
      page_title: "Home",
      page_description: "Welcome to our homepage",
      sections: [
        {
          id: "42ce97fb-7343-4e32-98e1-ae9a071f6d8a",
          content: "<h1>Welcome to Your New Page</h1><p>Start editing this section to create your content.</p>"
        }
      ],
      is_published: true
    },
    about: {
      page_name: "about",
      page_title: "About Us",
      page_description: "Learn more about us",
      sections: [
        {
          id: "5d2e8a3b-1234-5678-9abc-def012345678",
          content: "<h1>About Us</h1><p>Our story...</p>"
        }
      ],
      is_published: true
    }
  }
};

export default siteConfig;
