import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, MapPin, Download, ShoppingCart, MessageSquare, ChevronRight, ExternalLink } from 'lucide-react';
import { ShapeLogo } from './ShapeLogo';
import { CONTACT_INFO } from '../data/mockData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenCatalogue: () => void;
  onOpenRfq: () => void;
  rfqCount: number;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenCatalogue,
  onOpenRfq,
  rfqCount
}) => {
  // Prevent background body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'About Us', target: 'about-us' },
    { label: 'Our Brands (Philux, Marshal, Power King)', target: 'own-brands' },
    { label: 'Associated Partner Brands', target: 'partner-brands' },
    { label: 'Star Products Showcase', target: 'star-products' },
    { label: 'Full Product Catalog', target: 'catalog' },
    { label: 'Global Brand Presence & Markets', target: 'global-presence' },
    { label: 'Distributor Feedback', target: 'reviews' },
    { label: 'Contact & Export Inquiries', target: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Off-Canvas Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-sm h-full bg-neutral-950 border-l border-neutral-800 text-neutral-200 flex flex-col justify-between shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
              <ShapeLogo size="sm" onClick={() => { onNavigate('hero'); onClose(); }} />
              <button
                onClick={onClose}
                aria-label="Close navigation drawer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 space-y-6 flex-1">
              {/* Quick Actions Bar */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onOpenCatalogue();
                    onClose();
                  }}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-500/50 text-xs font-semibold text-neutral-200"
                >
                  <Download className="w-4 h-4 text-red-500" />
                  <span>E-Catalogue</span>
                </button>

                <button
                  onClick={() => {
                    onOpenRfq();
                    onClose();
                  }}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-red-600/20 border border-red-600/40 text-xs font-semibold text-red-400"
                >
                  <ShoppingCart className="w-4 h-4 text-red-500" />
                  <span>RFQ Cart {rfqCount > 0 && `(${rfqCount})`}</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 px-2 block mb-2">
                  Navigation
                </span>
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.target}
                      onClick={() => {
                        onNavigate(item.target);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:bg-neutral-900 hover:text-white transition-all text-left"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-600" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Proprietary Brands Quick Access */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block mb-2.5">
                  Proprietary Brands
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { onNavigate('own-brands'); onClose(); }}
                    className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-serif font-bold text-white tracking-widest hover:border-red-500"
                  >
                    PHILUX
                  </button>
                  <button
                    onClick={() => { onNavigate('own-brands'); onClose(); }}
                    className="px-3 py-1 rounded bg-neutral-900 border border-neutral-700 text-xs font-bold italic text-white hover:border-red-500"
                  >
                    Marshal
                  </button>
                  <button
                    onClick={() => { onNavigate('own-brands'); onClose(); }}
                    className="px-3 py-1 rounded bg-amber-400 text-neutral-950 text-xs font-black tracking-wider hover:bg-amber-300"
                  >
                    POWER KING
                  </button>
                </div>
              </div>

              {/* Direct Tap-To-Call Hotlines */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 px-2 block">
                  Tap to Call & Direct Sales
                </span>

                <a
                  href={`tel:${CONTACT_INFO.phoneSales.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs hover:border-neutral-700"
                >
                  <div className="w-8 h-8 rounded-full bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sales Hotline</div>
                    <div className="text-neutral-400">{CONTACT_INFO.phoneSales}</div>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phoneMain.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs hover:border-neutral-700"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Main Office</div>
                    <div className="text-neutral-400">{CONTACT_INFO.phoneMain}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsAppRaw}?text=${encodeURIComponent('Hello Shape Trading, I am interested in wholesale electrical appliances distribution.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs hover:border-emerald-600"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-300">WhatsApp Wholesale Order</div>
                    <div className="text-emerald-400/80">{CONTACT_INFO.phoneWhatsApp}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Footer Address */}
            <div className="p-5 border-t border-neutral-800 bg-neutral-950/60 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p>
                  {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}, {CONTACT_INFO.city}, {CONTACT_INFO.country}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
