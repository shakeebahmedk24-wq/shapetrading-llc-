import React, { useState } from 'react';
import { GLOBAL_PRESENCE_MARKETS } from '../data/mockData';
import { MarketPresence } from '../types';
import { Globe, MapPin, Anchor, ArrowUpRight, Search, ShieldCheck, CheckCircle } from 'lucide-react';

export const GlobalPresenceMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'middle_east' | 'africa' | 'asia'>('all');
  const [activeMarket, setActiveMarket] = useState<MarketPresence | null>(GLOBAL_PRESENCE_MARKETS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMarkets = GLOBAL_PRESENCE_MARKETS.filter((m) => {
    const matchesRegion = selectedRegion === 'all' || m.region === selectedRegion;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.ports && m.ports.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="global-presence" className="py-20 lg:py-28 bg-neutral-900/60 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>International Trade Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Brand Presence
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              From our Dubai headquarters and Jebel Ali Port gateway, Shape Trading L.L.C. supplies wholesale consignments across the Middle East, East & West Africa, and Southern Africa.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === 'all'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Markets ({GLOBAL_PRESENCE_MARKETS.length})
            </button>
            <button
              onClick={() => setSelectedRegion('middle_east')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === 'middle_east'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Middle East (6)
            </button>
            <button
              onClick={() => setSelectedRegion('africa')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === 'africa'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Africa (22)
            </button>
            <button
              onClick={() => setSelectedRegion('asia')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === 'asia'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Asia (2)
            </button>
          </div>
        </div>

        {/* Illustrated Interactive Map Canvas */}
        <div className="relative rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl p-4 sm:p-8">
          {/* Subtle Map Coordinate Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* SVG Map Graphic */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] min-h-[360px] max-h-[580px] bg-neutral-900/40 rounded-xl overflow-hidden border border-neutral-800/60 flex items-center justify-center">
            {/* Stylized World / EMEA Continents Silhouettes */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-cover select-none pointer-events-none opacity-35"
              fill="currentColor"
            >
              {/* Europe & Mediterranean */}
              <path
                d="M450 110 C 470 100, 520 110, 540 130 C 560 150, 520 170, 500 180 C 480 190, 460 170, 440 160 Z"
                className="text-neutral-700"
              />
              {/* Africa Continent Silhouette */}
              <path
                d="M430 190 C 490 180, 580 200, 580 240 C 590 280, 570 340, 540 390 C 520 420, 500 420, 480 370 C 460 340, 420 300, 400 260 C 390 230, 400 200, 430 190 Z"
                className="text-neutral-600"
              />
              {/* Arabian Peninsula & Middle East */}
              <path
                d="M570 200 C 610 190, 640 220, 640 260 C 620 280, 590 270, 570 240 Z"
                className="text-neutral-500"
              />
              {/* Indian Subcontinent */}
              <path
                d="M670 220 C 720 230, 740 270, 710 320 C 690 310, 670 270, 660 240 Z"
                className="text-neutral-600"
              />
              {/* East & Southeast Asia */}
              <path
                d="M720 150 C 800 140, 850 180, 840 250 C 800 270, 760 230, 730 200 Z"
                className="text-neutral-700"
              />
              {/* Trade Routes (Jebel Ali Dubai Hub connecting outward) */}
              <line x1="620" y1="240" x2="560" y2="320" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
              <line x1="620" y1="240" x2="430" y2="280" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
              <line x1="620" y1="240" x2="520" y2="370" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
              <line x1="620" y1="240" x2="700" y2="260" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
            </svg>

            {/* Interactive Pins Overlay */}
            {filteredMarkets.map((market) => {
              const isSelected = activeMarket?.id === market.id;
              const isHq = market.type === 'headquarters';

              return (
                <div
                  key={market.id}
                  style={{
                    left: `${market.x}%`,
                    top: `${market.y}%`,
                  }}
                  onClick={() => setActiveMarket(market)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                >
                  {/* Pulse Effect for Headquarters and Selected */}
                  {(isHq || isSelected) && (
                    <span className="absolute -inset-2 rounded-full bg-red-500/40 animate-ping" />
                  )}

                  {/* Marker Pin */}
                  <div
                    className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 shadow-md ${
                      isHq
                        ? 'bg-red-600 text-white ring-2 ring-white scale-110'
                        : isSelected
                        ? 'bg-white text-neutral-950 scale-105 ring-2 ring-red-500'
                        : 'bg-neutral-900/90 text-neutral-200 border border-neutral-700 hover:border-red-500 hover:bg-neutral-800'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isHq ? 'bg-white' : isSelected ? 'bg-red-600' : 'bg-red-500'
                      }`}
                    />
                    <span className="whitespace-nowrap">{market.name}</span>
                  </div>
                </div>
              );
            })}

            {/* Map Legend Overlay (Top Left) */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-neutral-950/90 border border-neutral-800 backdrop-blur-md text-[11px] text-neutral-300 space-y-1.5 hidden sm:block pointer-events-none">
              <div className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                Distribution Network
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                <span>Dubai Global HQ & Jebel Ali Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                <span>Active Wholesale Markets (28+ Countries)</span>
              </div>
            </div>
          </div>

          {/* Market Details Bottom Card */}
          {activeMarket && (
            <div className="mt-6 p-4 sm:p-6 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800/60 text-xs font-semibold uppercase">
                    {activeMarket.region.replace('_', ' ')}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {activeMarket.name}
                  </h3>
                  {activeMarket.type === 'headquarters' && (
                    <span className="text-xs px-2 py-0.5 rounded bg-red-600 text-white font-bold">
                      HEADQUARTERS
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Anchor className="w-3.5 h-3.5 text-red-500" />
                    <span>Port / Transit Corridor: <strong className="text-neutral-200">{activeMarket.ports}</strong></span>
                  </span>
                  {activeMarket.popularCategories && (
                    <span>
                      Key Categories: <strong className="text-neutral-200">{activeMarket.popularCategories.join(', ')}</strong>
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/971566266883?text=${encodeURIComponent(`Hello Shape Trading, I am inquiring about wholesale appliance export to ${activeMarket.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire for {activeMarket.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Quick Country Pill Cloud for Fast Mobile & Desktop Browsing */}
          <div className="mt-6 pt-6 border-t border-neutral-800/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Quick Market Directory:
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Showing {filteredMarkets.length} of {GLOBAL_PRESENCE_MARKETS.length} destinations
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
              {filteredMarkets.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMarket(m)}
                  className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                    activeMarket?.id === m.id
                      ? 'bg-red-600 text-white font-bold'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
