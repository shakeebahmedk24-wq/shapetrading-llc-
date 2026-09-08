import React, { useState, useEffect } from 'react';
import { ShapeLogo } from './ShapeLogo';
import { Phone, Download, Menu, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenCatalogue: () => void;
  onOpenMobileDrawer: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCatalogue,
  onOpenMobileDrawer,
  onNavigate,
  activeSection = 'hero'
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 font-sans">
      {/* Top Utility Bar with Contact & Port Details */}
      <div className="bg-[#f8f9fa] border-b border-[#e8e8e8] text-[#535353] text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#535353]">
              <MapPin className="w-3.5 h-3.5 text-[#f53e6a]" />
              <span>90 Baniyas Road, Deira, Dubai, UAE</span>
            </span>
            <span className="text-[#d1d5db]">|</span>
            <a
              href={`tel:${CONTACT_INFO.phoneSales.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#f53e6a] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f53e6a]" />
              <span>Sales: {CONTACT_INFO.phoneSales}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#f53e6a] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#f53e6a]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="text-[#d1d5db]">|</span>
            <span className="font-semibold text-[#2f2f2f]">
              Export Hub: Jebel Ali Free Zone
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-white ${
          scrolled
            ? 'shadow-md border-b border-[#e8e8e8] py-3'
            : 'border-b border-[#e8e8e8] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <ShapeLogo
            size="md"
            onClick={() => onNavigate('hero')}
          />

          {/* Strictly Required Desktop Nav Links:
              Home, About Us, Products, Download E-Catalogue, Contact Us */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#2f2f2f]">
            <button
              onClick={() => onNavigate('hero')}
              className="hover:text-[#f53e6a] transition-colors cursor-pointer py-1 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about-us')}
              className="hover:text-[#f53e6a] transition-colors cursor-pointer py-1 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="hover:text-[#f53e6a] transition-colors cursor-pointer py-1 font-medium"
            >
              Products
            </button>
            <button
              onClick={onOpenCatalogue}
              className="hover:text-[#f53e6a] transition-colors cursor-pointer py-1 font-medium"
            >
              Download E-Catalogue
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#f53e6a] transition-colors cursor-pointer py-1 font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Primary Action Button */}
            <button
              onClick={onOpenCatalogue}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#f53e6a] hover:bg-[#2f2f2f] text-white transition-all cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download E-Catalogue</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-nav-toggle-btn"
              onClick={onOpenMobileDrawer}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 rounded-lg bg-[#f8f9fa] border border-[#e8e8e8] text-[#2f2f2f] hover:text-[#f53e6a] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
