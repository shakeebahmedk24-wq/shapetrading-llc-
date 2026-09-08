import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Anchor, CheckCircle2, ChevronRight, X, Award, Factory, Truck } from 'lucide-react';
import { electricFansImg, CONTACT_INFO } from '../data/mockData';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about-us" className="py-20 lg:py-28 bg-neutral-900/50 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Motto & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Shape Trading L.L.C.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              About Us
            </h2>

            {/* Verbatim Business Motto from Source */}
            <blockquote className="p-5 rounded-xl bg-neutral-950 border-l-4 border-red-600 text-neutral-200 text-base sm:text-lg leading-relaxed font-normal shadow-sm">
              "{CONTACT_INFO.businessMotto}"
            </blockquote>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Operating out of Dubai's historic commercial trading district on Baniyas Road, Deira, Shape Trading L.L.C. serves as an indispensable bridge between precision manufacturing and growing consumer markets across the African continent and Middle East. Our product development philosophy prioritizes heavy-duty copper windings, fire-retardant enclosures, and reinforced mechanisms built specifically for demanding power conditions.
            </p>

            {/* Core Distribution Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Strict Durability Standards</span>
                  <span className="text-neutral-400">Pure copper wiring and rigorous batch testing.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800">
                <Anchor className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Dubai Jebel Ali Logistics</span>
                  <span className="text-neutral-400">Rapid container stuffing and customs clearance.</span>
                </div>
              </div>
            </div>

            {/* Know More Action Button */}
            <div className="pt-2">
              <button
                id="about-know-more-btn"
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md shadow-red-600/20 transition-all cursor-pointer"
              >
                <span>Know More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Wholesale Showroom Appliance Lineup Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl p-2 group">
              <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-16/10">
                <img
                  src={electricFansImg}
                  alt="Shape Trading Electrical Home Appliances Showroom Lineup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        Wholesale Distribution Lineup
                      </div>
                      <div className="text-xs text-neutral-400">
                        Pedestal Fans • Automatic Voltage Regulators • Steam Irons • Cable Reels
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-red-400 px-2 py-1 rounded bg-neutral-950 border border-neutral-800">
                      B2B DIRECT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Know More" Detailed Corporate Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 text-neutral-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">About Shape Trading L.L.C.</h3>
                <p className="text-xs text-red-400">Wholesale Commercial Profile & Global Operations</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                Established in Dubai, United Arab Emirates, <strong className="text-white">Shape Trading L.L.C.</strong> is an international trading house specializing in the wholesale distribution of electrical appliances engineered for longevity in emerging markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <Factory className="w-5 h-5 text-red-500 mb-2" />
                  <h4 className="font-bold text-white text-xs uppercase">Brand Ownership</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Direct oversight and manufacturing control of <strong>Philux</strong>, <strong>Marshal</strong>, and <strong>Power King</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <Award className="w-5 h-5 text-red-500 mb-2" />
                  <h4 className="font-bold text-white text-xs uppercase">Export Compliance</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fully compliant with SASO (Saudi), SONCAP (Nigeria), G-Mark (GCC), and KEBS (Kenya) standards.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <Truck className="w-5 h-5 text-red-500 mb-2" />
                  <h4 className="font-bold text-white text-xs uppercase">FCL & LCL Shipping</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Direct container consolidation out of Jebel Ali Port, Dubai to East, West, and Southern African ports.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs space-y-2">
                <div className="font-semibold text-white">Registered Address & Trade Location:</div>
                <p className="text-neutral-400">
                  {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}, {CONTACT_INFO.city}, {CONTACT_INFO.country}
                </p>
                <div className="text-neutral-400">
                  Main Office: <a href={`tel:${CONTACT_INFO.phoneMain}`} className="text-red-400 hover:underline">{CONTACT_INFO.phoneMain}</a> | Sales: <a href={`tel:${CONTACT_INFO.phoneSales}`} className="text-red-400 hover:underline">{CONTACT_INFO.phoneSales}</a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3 border-t border-neutral-800">
              <button
                onClick={() => {
                  setShowModal(false);
                  onNavigate('contact');
                }}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs"
              >
                Inquire for Wholesale Distributorship
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
