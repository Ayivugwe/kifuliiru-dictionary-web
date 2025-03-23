import { LucideIcon } from 'lucide-react';
import { Book, Users, Globe, BookOpen, Bookmark, HelpCircle, MoreHorizontal } from 'lucide-react';

export interface MenuItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  external?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const mainNavigation: MenuItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Book,
  },
  {
    title: 'Dictionary',
    href: '/dictionary',
    icon: BookOpen,
  },
  {
    title: 'Contribute',
    href: '/contribute',
    icon: Bookmark,
    description: 'Help preserve the Kifuliiru language by contributing to our dictionary',
  },
];

export const megaMenuCategories: MenuCategory[] = [
  {
    title: 'Learn',
    items: [
      {
        title: 'Numbers',
        href: '/numbers',
        icon: Book,
        description: 'Learn to count in Kifuliiru',
      },
      {
        title: 'Categories',
        href: '/categories',
        icon: Bookmark,
        description: 'Browse words by category',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        title: 'Kifuliiru',
        href: '/kifuliiru',
        icon: Globe,
        description: 'Learn about the Kifuliiru language',
      },
      {
        title: 'Ibufuliiru',
        href: '/ibufuliiru',
        icon: Users,
        description: 'About the Ibufuliiru people',
      },
      {
        title: 'Abafuliiru',
        href: '/abafuliiru',
        icon: Users,
        description: 'About the Abafuliiru people',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Fuliiru Hub',
        href: 'https://fuliiruhub.com/',
        icon: Globe,
        description: 'Join our community platform',
        external: true,
      },
      {
        title: 'Help Center',
        href: '/help',
        icon: HelpCircle,
        description: 'Get help and support',
      },
    ],
  },
]; 