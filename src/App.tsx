/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OwnBrandsSection } from './components/OwnBrandsSection';
import { PartnerBrandsStrip } from './components/PartnerBrandsStrip';
import { StarProductsCarousel } from './components/StarProductsCarousel';
import { ProductCatalog } from './components/ProductCatalog';
import { GlobalPresenceMap } from './components/GlobalPresenceMap';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { ContactFooter } from './components/ContactFooter';
import { SingleProductPage } from './components/SingleProductPage';
import { DownloadCatalogueModal } from './components/DownloadCatalogueModal';
import { RfqOrderModal } from './components/RfqOrderModal';
import { PRODUCTS, CONTACT_INFO } from './data/mockData';
import { Product, RfqItem } from './types';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqItems, setRfqItems] = useState<RfqItem[]>([]);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | null>(null);

  // Check URL hash on load for deep-linking (e.g. #product/power-king-pk912-916)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#product/')) {
        const slug = hash.replace('#product/', '');
        const found = PRODUCTS.find((p) => p.slug === slug || p.id === slug);
        if (found) {
          setSelectedProduct(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      } else if (hash.startsWith('#')) {
        setSelectedProduct(null);
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.location.hash = `product/${product.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromSingleProduct = () => {
    setSelectedProduct(null);
    window.location.hash = 'catalog';
    setTimeout(() => {
      const el = document.getElementById('catalog');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigate = (sectionId: string) => {
    if (selectedProduct) {
      setSelectedProduct(null);
    }
    window.location.hash = sectionId;
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleAddToRfq = (product: Product, cartons: number = 5) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantityCartons: item.quantityCartons + cartons }
            : item
        );
      }
      return [...prev, { product, quantityCartons: cartons }];
    });
  };

  const handleUpdateRfqQuantity = (productId: string, delta: number) => {
    setRfqItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantityCartons + delta;
            return newQty > 0 ? { ...item, quantityCartons: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as RfqItem[]
    );
  };

  const handleRemoveRfqItem = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearRfqItems = () => {
    setRfqItems([]);
  };

  const handleSelectBrandFilter = (brandName: string) => {
    setSelectedBrandFilter(brandName);
    handleNavigate('catalog');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-red-600 selection:text-white font-sans">
      {/* Sticky Global Navigation */}
      <Navbar
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
        onOpenRfqModal={() => setIsRfqOpen(true)}
        onNavigate={handleNavigate}
        rfqCount={rfqItems.reduce((acc, curr) => acc + curr.quantityCartons, 0)}
      />

      {/* Slide-out Off-Canvas Mobile Drawer Menu */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        onNavigate={handleNavigate}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenRfq={() => setIsRfqOpen(true)}
        rfqCount={rfqItems.reduce((acc, curr) => acc + curr.quantityCartons, 0)}
      />

      {/* Conditional View: Dedicated Single Product Page OR Complete Standalone Showcase Page */}
      <main className="flex-1">
        {selectedProduct ? (
          <SingleProductPage
            product={selectedProduct}
            onBack={handleBackFromSingleProduct}
            onSelectProduct={handleSelectProduct}
            onAddToRfq={handleAddToRfq}
          />
        ) : (
          <>
            {/* Hero Section with Cinematic Video / Skyline & Hardware Backdrop */}
            <Hero
              onOpenCatalogue={() => setIsCatalogueOpen(true)}
              onNavigate={handleNavigate}
              onOpenRfq={() => setIsRfqOpen(true)}
            />

            {/* About Us with Quality / Durability Motto */}
            <AboutSection onNavigate={handleNavigate} />

            {/* Proprietary Own Brands (Philux, Marshal, Power King) */}
            <OwnBrandsSection
              onSelectBrand={handleSelectBrandFilter}
              onNavigate={handleNavigate}
            />

            {/* Associated / Distributed Partner Brands Logo Strip */}
            <PartnerBrandsStrip onSelectBrand={handleSelectBrandFilter} />

            {/* Flagship Star Products Carousel */}
            <StarProductsCarousel
              onSelectProduct={handleSelectProduct}
              onAddToRfq={handleAddToRfq}
              onNavigate={handleNavigate}
            />

            {/* Full Product Catalog with Direct B2B Ordering Option */}
            <ProductCatalog
              onSelectProduct={handleSelectProduct}
              onAddToRfq={handleAddToRfq}
              selectedBrandFilter={selectedBrandFilter}
              onClearBrandFilter={() => setSelectedBrandFilter(null)}
            />

            {/* Global Brand Presence Illustrated Interactive Map */}
            <GlobalPresenceMap />

            {/* Wholesale Distributor Feedback / Reviews Marquee */}
            <ReviewsMarquee />
          </>
        )}
      </main>

      {/* Comprehensive Functional Contact Footer */}
      <ContactFooter
        onNavigate={handleNavigate}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${CONTACT_INFO.whatsAppRaw}?text=${encodeURIComponent('Hello Shape Trading L.L.C., I am interested in wholesale electrical appliances distribution.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact sales on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-108 transition-all duration-300 ring-4 ring-emerald-600/20"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">Chat with Wholesale Sales on WhatsApp</span>
      </a>

      {/* Interactive E-Catalogue Download Modal */}
      <DownloadCatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
      />

      {/* Direct Wholesale RFQ & Order Modal */}
      <RfqOrderModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        items={rfqItems}
        onUpdateQuantity={handleUpdateRfqQuantity}
        onRemoveItem={handleRemoveRfqItem}
        onClearItems={handleClearRfqItems}
      />
    </div>
  );
}
