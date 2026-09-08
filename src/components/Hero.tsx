import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { heroImg, voltageRegulatorImg } from '../data/mockData';

interface HeroProps {
  onOpenCatalogue: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenRfq: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCatalogue,
  onNavigate,
  onOpenRfq
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Multi-depth scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const hardwareY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background Layer 1: Cinematic Skyline & Hardware Backdrop with Parallax */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : bgY,
          opacity: shouldReduceMotion ? 1 : opacity
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={heroImg}
          alt="Dubai Skyline & Industrial Electrical Appliances"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110 transition-transform duration-1000 animate-subtle-drift"
        />

        {/* Industrial Gradients: Charcoal, deep Vignette, and Red atmospheric sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/15 via-transparent to-transparent" />
      </motion.div>

      {/* Subtle Grid Lines & Industrial Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      {/* Layer 2: Main Content Container */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : textY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Value Proposition & B2B Actions */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Trust & Location Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/60 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-red-300">
                Dubai Wholesale Trading & Distribution • Since Establishment
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Quality & Durability <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-red-500">
                  Engineered for Global Homes.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
                Shape Trading L.L.C. is Dubai's trusted wholesale distribution cornerstone for electrical home appliances, automatic voltage regulators, extension cables, and heavy-duty cable reels across <span className="text-white font-semibold">Africa, the Middle East, and Asia</span>.
              </p>
            </div>

            {/* Brand Portfolio Highlights Bar */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/90 backdrop-blur-md max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center justify-between">
                <span>Our Proprietary & Distributed Brand Portfolio:</span>
                <span className="text-[10px] text-red-400 font-mono">DUBAI HQ • EXPORT PORT: JEBEL ALI</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5">
                <div
                  onClick={() => onNavigate('own-brands')}
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-red-500/80 transition-all cursor-pointer group"
                >
                  <div className="text-xs font-bold font-serif tracking-widest text-white group-hover:text-red-400">
                    PHILUX
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">AVR & Cable Reels</div>
                </div>

                <div
                  onClick={() => onNavigate('own-brands')}
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-red-500/80 transition-all cursor-pointer group"
                >
                  <div className="text-xs font-black italic text-white group-hover:text-red-400">
                    Marshal
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Steam Irons & Fans</div>
                </div>

                <div
                  onClick={() => onNavigate('own-brands')}
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-400/80 transition-all cursor-pointer group"
                >
                  <div className="text-xs font-black text-amber-400 group-hover:text-amber-300">
                    POWER KING
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Extension Sockets</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-catalogue-btn"
                onClick={onOpenCatalogue}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-600/25 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download E-Catalogue</span>
              </button>

              <button
                id="hero-rfq-btn"
                onClick={onOpenRfq}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 font-semibold text-sm transition-all cursor-pointer"
              >
                <span>Direct Wholesale RFQ</span>
                <ArrowRight className="w-4 h-4 text-red-500" />
              </button>

              <button
                onClick={() => onNavigate('star-products')}
                className="text-xs font-semibold text-neutral-400 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-red-500 transition-colors py-2 px-1"
              >
                View Flagship Star Products →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Hardware Display Card with Parallax Depth */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : hardwareY }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-5 shadow-2xl backdrop-blur-xl">
              {/* Top Banner */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Industrial Hardware Spec
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-red-400 border border-neutral-700">
                  HEAVY DUTY
                </span>
              </div>

              {/* Hardware Preview Image */}
              <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 mb-4 group aspect-4/3">
                <img
                  src={voltageRegulatorImg}
                  alt="Industrial Automatic Voltage Regulator"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-serif font-bold tracking-wider text-white">
                    PHILUX & MARSHAL AVR
                  </span>
                  <span className="px-2 py-0.5 rounded bg-red-600/90 text-[10px] font-bold text-white">
                    Dual Voltmeter
                  </span>
                </div>
              </div>

              {/* Technical Specifications Summary */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Category:</span>
                  <span className="text-neutral-200 font-semibold">Automatic Voltage Regulators (AVR)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Grid Stabilization:</span>
                  <span className="text-neutral-200 font-semibold">140V – 260V to Constant 220V</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Primary Markets:</span>
                  <span className="text-neutral-200 font-semibold">Middle East & African Nations</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Export Standard:</span>
                  <span className="text-emerald-400 font-semibold">SASO / SONCAP / G-Mark</span>
                </div>
              </div>

              {/* Direct Quick Action */}
              <button
                onClick={() => onNavigate('star-products')}
                className="mt-4 w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Star Products Lineup</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-500" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
