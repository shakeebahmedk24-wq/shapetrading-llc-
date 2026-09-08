import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Eye, ShoppingCart, Check } from 'lucide-react';

interface StarProductsCarouselProps {
  onSelectProduct: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  onNavigate: (sectionId: string) => void;
}

export const StarProductsCarousel: React.FC<StarProductsCarouselProps> = ({
  onSelectProduct,
  onAddToRfq,
  onNavigate
}) => {
  const starProducts = PRODUCTS.filter((p) => p.isStarProduct);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addedId, setAddedId] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? starProducts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === starProducts.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToRfq(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="star-products" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded-full" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Star Products
              </h2>
            </div>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Our most celebrated export models across the Middle East and African markets. Built for durability, tested under extreme load, and backed by comprehensive wholesale warranty.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous star product"
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500 hover:bg-neutral-850 transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next star product"
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500 hover:bg-neutral-850 transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport (Desktop 4-card grid / Mobile swipeable view) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {starProducts.map((product, index) => {
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group relative rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer hover:translate-y-[-2px]"
              >
                {/* Brand Badge Ribbon */}
                <div className="p-5 pb-0 flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded ${
                      product.brand === 'Power King'
                        ? 'bg-amber-400 text-neutral-950 font-black'
                        : product.brand === 'Marshal'
                        ? 'bg-neutral-950 border border-neutral-700 text-white font-serif font-black italic'
                        : 'bg-neutral-950 border border-neutral-700 text-white font-serif tracking-widest'
                    }`}
                  >
                    {product.brand}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">
                    {product.modelNumber.split('/')[0]}
                  </span>
                </div>

                {/* Product Image Stage */}
                <div className="p-6 flex items-center justify-center min-h-[220px]">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-950/60 p-4 flex items-center justify-center group-hover:bg-neutral-950 transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain filter group-hover:scale-108 transition-transform duration-500 drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-5 pt-0 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Packaging Specification Pill */}
                  <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>Export Carton:</span>
                    <span className="font-mono text-neutral-200">{product.packaging.cartonQty.split(' ')[0]} Units/Ctn</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="py-2 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-neutral-400" />
                      <span>View Specs</span>
                    </button>

                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-red-600 hover:bg-red-700 text-white shadow-sm'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Order RFQ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators / Dot Pagination */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {starProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i ? 'w-8 bg-red-600' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View Full Catalog Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('catalog')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white group"
          >
            <span>Browse Complete Product Catalog & Technical Sheets</span>
            <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
