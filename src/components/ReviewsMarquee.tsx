import React from 'react';
import { DISTRIBUTOR_REVIEWS } from '../data/mockData';
import { ShieldCheck, Building2, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsMarquee: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
            <span>Wholesale Distributor Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Trusted by Importers Across Two Continents
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Commercial partners rely on our Dubai export logistics, authentic copper engineering, and consistent container replenishment.
          </p>
        </div>

        {/* Desktop Grid (hidden on mobile, visible md+) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {DISTRIBUTOR_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-red-600/40" />
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 space-y-1">
                <div className="font-bold text-white text-xs flex items-center gap-1.5">
                  <span>{rev.partnerName}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-[11px] text-neutral-400 font-medium">{rev.company}</div>
                <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
                  <span>{rev.country} ({rev.region})</span>
                  <span className="font-mono text-red-400">{rev.yearsPartnered}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scrolling Marquee (as required by prompt: "Reviews Section: Convert customer reviews into a scrolling marquee on mobile devices") */}
        <div className="md:hidden relative w-full overflow-hidden py-2">
          {/* Edge gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-4 w-max animate-marquee hover:pause">
            {/* Repeat list twice for seamless infinite marquee loop */}
            {[...DISTRIBUTOR_REVIEWS, ...DISTRIBUTOR_REVIEWS].map((rev, idx) => (
              <div
                key={`${rev.id}-${idx}`}
                className="w-[290px] shrink-0 p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between shadow-md"
              >
                <div className="space-y-3">
                  <Quote className="w-5 h-5 text-red-600/50" />
                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-4 italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 space-y-1">
                  <div className="font-bold text-white text-xs flex items-center gap-1.5">
                    <span>{rev.partnerName}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-[10px] text-neutral-400 truncate">{rev.company}</div>
                  <div className="flex items-center justify-between text-[9px] text-neutral-500 pt-0.5">
                    <span>{rev.country}</span>
                    <span className="font-mono text-red-400">{rev.yearsPartnered}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
