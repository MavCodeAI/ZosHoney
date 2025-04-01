// Website settings types
export interface WebsiteSettings {
  id: string;
  header: {
    logo: string;
    menuItems: MenuItem[];
    showSearch: boolean;
    showCart: boolean;
  };
  footer: {
    logo: string;
    description: string;
    socialLinks: SocialLink[];
    menuSections: FooterMenuSection[];
    copyright: string;
  };
  homepage: {
    hero: {
      title: string;
      subtitle: string;
      image: string;
      ctaText: string;
      ctaLink: string;
    };
    featuredCategories: string[];
    showTestimonials: boolean;
    showNewsletter: boolean;
  };
}

export interface MenuItem {
  id: string;
  title: string;
  link: string;
  children?: MenuItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterMenuSection {
  title: string;
  items: MenuItem[];
}

// Blog post types
export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  publishDate: string;
  categories: string[];
  tags: string[];
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
} 