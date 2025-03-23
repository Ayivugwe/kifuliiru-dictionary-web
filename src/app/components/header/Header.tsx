import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, MoreHorizontal, Sun, Moon } from 'lucide-react';
import { MainMenu } from './MainMenu';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { mainNavigation, megaMenuCategories } from './menuData';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
  currentLanguage: string;
  onLanguageChange: (code: string) => void;
}

export const Header = ({
  isAuthenticated,
  onLogin,
  onLogout,
  currentLanguage,
  onLanguageChange,
}: HeaderProps) => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialDark = storedTheme ? storedTheme === 'dark' : darkModePreference;
    setIsDark(initialDark);
    updateTheme(initialDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    updateTheme(newDark);
  };

  if (!mounted) return null;

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Kifuliiru Dictionary
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {mainNavigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {item.title}
                </Link>
              ))}

              {/* More button */}
              <button
                onClick={() => setIsMegaMenuOpen(true)}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <span>More</span>
                <MoreHorizontal className="h-4 w-4" />
              </button>

              {/* Right-side utilities */}
              <div className="flex items-center space-x-4 ml-4">
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>

                <LanguageSelector
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                />

                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-600" />
                  )}
                </button>

                <UserMenu
                  isAuthenticated={isAuthenticated}
                  onLogin={onLogin}
                  onLogout={onLogout}
                />
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMegaMenuOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <span>More</span>
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mega Menu */}
      <MainMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        categories={megaMenuCategories}
      />
    </>
  );
}; 