import React from 'react';
import { PARTNER_BRANDS } from '../data/mockData';
import { ShieldCheck, ExternalLink } from 'lucide-react';

interface PartnerBrandsStripProps {
  onSelectBrand?: (brandName: string) => void;
}

export const PartnerBrandsStrip: React.FC<PartnerBrandsStripProps> = ({ onSelectBrand }) => {
  return (
    <section id="partner-brands" className="py-16 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
            <span>Authorized Wholesale Distribution Alliances</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Other Associated Brands
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Shape Trading L.L.C. acts as an official authorized distributor and international supply partner for world-class global appliance and electrical brands.
          </p>
        </div>

        {/* Partner Brands Grid / Logo Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNER_BRANDS.map((partner) => (
            <div
              key={partner.name}
              className="p-5 rounded-xl bg-neutral-900/70 border border-neutral-800/90 hover:border-red-500/50 hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer"
              onClick={() => onSelectBrand && onSelectBrand(partner.name)}
            >
              {/* Logo / Typography Representation */}
              <div className="h-16 flex items-center justify-center w-full">
                {partner.name === 'Bajaj' && (
                  <div className="flex flex-col items-center">
                    <div className="text-blue-500 font-extrabold text-2xl tracking-tighter">
                      BAJAJ
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-neutral-400 font-medium">
                      India
                    </div>
                  </div>
                )}

                {partner.name === 'Khind' && (
                  <div className="flex flex-col items-center">
                    <div className="text-white font-black tracking-tight text-xl font-sans">
                      KHIND
                    </div>
                    <div className="text-[8px] text-red-400 tracking-wider font-semibold">
                      Delivering happiness
                    </div>
                  </div>
                )}

                {partner.name === 'Orient Electric' && (
                  <div className="flex flex-col items-center">
                    <div className="px-2 py-0.5 rounded bg-orange-600/20 border border-orange-500/40 text-orange-400 font-bold text-xs">
                      orient
                    </div>
                    <div className="text-white font-bold text-sm mt-0.5 tracking-tight">
                      electric
                    </div>
                    <div className="text-[7px] text-neutral-400">switch to smart</div>
                  </div>
                )}

                {partner.name === 'Panasonic' && (
                  <div className="flex flex-col items-center">
                    <div className="text-sky-400 font-black text-lg tracking-wider">
                      Panasonic
                    </div>
                    <div className="text-[8px] text-neutral-400 font-medium">
                      Ventilation & Living
                    </div>
                  </div>
                )}

                {partner.name === 'KDK' && (
                  <div className="flex flex-col items-center">
                    <div className="px-2 py-0.5 rounded bg-red-600 text-white font-black text-sm tracking-widest">
                      KDK
                    </div>
                    <div className="text-[8px] text-neutral-300 font-bold mt-1">
                      SINCE 1909 JAPAN
                    </div>
                  </div>
                )}

                {partner.name === 'Amin' && (
                  <div className="flex flex-col items-center">
                    <div className="px-3 py-1 rounded bg-red-900/60 border border-red-700 text-white font-black text-xs tracking-widest uppercase">
                      AMIN
                    </div>
                    <div className="text-[8px] text-neutral-400 mt-1">
                      Electrical Hardware
                    </div>
                  </div>
                )}
              </div>

              {/* Tagline / Subtitle */}
              <div className="mt-2 pt-2 border-t border-neutral-800/80 w-full">
                <span className="text-[10px] text-neutral-400 block font-medium">
                  {partner.category}
                </span>
                <span className="text-[9px] text-neutral-500 block">
                  {partner.origin}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
