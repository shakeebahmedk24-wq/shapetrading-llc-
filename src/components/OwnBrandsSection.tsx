import React from 'react';
import { OWN_BRANDS } from '../data/mockData';
import { ArrowRight, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { voltageRegulatorImg, cableReelImg, extensionSocketImg, steamIronImg } from '../data/mockData';

interface OwnBrandsSectionProps {
  onSelectBrand: (brandName: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const OwnBrandsSection: React.FC<OwnBrandsSectionProps> = ({
  onSelectBrand,
  onNavigate
}) => {
  const brandThumbnails: Record<string, string> = {
    philux: cableReelImg,
    marshal: steamIronImg,
    'power-king': extensionSocketImg
  };

  return (
    <section id="own-brands" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Proprietary Manufacturing Brands</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Own Brands
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Engineered under our direct supervision, our proprietary brand trinity delivers uncompromising electrical endurance across volatile grid environments.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-xl self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>GENUINE COPPER WINDINGS • B2B WHOLESALE ONLY</span>
          </div>
        </div>

        {/* 3 Brand Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {OWN_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group relative rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  {/* Brand Badge Replica */}
                  {brand.id === 'philux' && (
                    <div className="px-5 py-1.5 rounded-full border-2 border-neutral-700 bg-neutral-950 text-white font-serif font-black tracking-widest text-sm shadow-md">
                      PHILUX
                    </div>
                  )}
                  {brand.id === 'marshal' && (
                    <div className="px-5 py-1.5 rounded border border-neutral-700 bg-neutral-950 text-white font-serif font-black italic tracking-wide text-base shadow-md">
                      Marshal
                    </div>
                  )}
                  {brand.id === 'power-king' && (
                    <div className="px-4 py-1.5 rounded bg-amber-400 text-neutral-950 font-black tracking-wider text-xs uppercase shadow-md border border-amber-500">
                      POWER KING
                    </div>
                  )}

                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Shape Proprietary
                  </span>
                </div>

                {/* Product Category Preview Image */}
                <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 aspect-16/10 group-hover:border-red-500/40 transition-colors">
                  <img
                    src={brandThumbnails[brand.id]}
                    alt={`${brand.name} flagship product category`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-200">
                      {brand.headline}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {brand.description}
                </p>

                {/* Flagship Lines Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Key Product Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.flagshipCategories.map((cat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 sm:p-8 pt-0 border-t border-neutral-850">
                <button
                  onClick={() => {
                    onSelectBrand(brand.name);
                    onNavigate('catalog');
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-red-600 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:bg-red-600 group-hover:border-red-600"
                >
                  <span>Explore {brand.name} Catalog</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
