import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, CONTACT_INFO } from '../data/mockData';
import {
  ArrowLeft,
  Download,
  ShieldCheck,
  Truck,
  FileText,
  Share2,
  MessageSquare,
  ShoppingCart,
  Check,
  Info,
  ChevronRight
} from 'lucide-react';

interface SingleProductPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (p: Product) => void;
  onAddToRfq: (p: Product, cartons: number) => void;
}

export const SingleProductPage: React.FC<SingleProductPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onAddToRfq
}) => {
  const [cartons, setCartons] = useState(5);
  const [destinationPort, setDestinationPort] = useState('Mombasa Port (Kenya)');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Calculate units per carton
  const unitsPerCtnMatch = product.packaging.cartonQty.match(/\d+/);
  const unitsPerCtn = unitsPerCtnMatch ? parseInt(unitsPerCtnMatch[0], 10) : 10;
  const totalUnits = cartons * unitsPerCtn;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToRfq(product, cartons);
    setOrderSubmitted(true);
    setTimeout(() => setOrderSubmitted(false), 3000);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Shape Trading L.L.C.,\nI would like to place a wholesale order/RFQ inquiry for:\n\n• Product: ${product.name}\n• Model: ${product.modelNumber}\n• Quantity: ${cartons} Cartons (${totalUnits} Units)\n• Destination Port: ${destinationPort}\n\nPlease provide FOB Jebel Ali / CIF quotation and earliest dispatch schedule.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsAppRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDownloadSpecSheet = () => {
    setDownloadSuccess(true);
    // Trigger virtual spec sheet download
    const blob = new Blob([
      `SHAPE TRADING L.L.C. - TECHNICAL SPECIFICATION SHEET
Product: ${product.name}
Brand: ${product.brand}
Model Number: ${product.modelNumber}
Category: ${product.category}

OVERVIEW:
${product.description}

TECHNICAL SPECIFICATIONS:
${product.specs.map(s => `- ${s.label}: ${s.value}`).join('\n')}

PACKAGING & SHIPPING:
- Carton Quantity: ${product.packaging.cartonQty}
- Dimensions: ${product.packaging.cartonDimensions}
- Gross Weight: ${product.packaging.grossWeight}
- MOQ: ${product.packaging.moq}
- Export Port: ${CONTACT_INFO.exportPort}

COMPLIANCE STANDARDS:
${product.complianceStandards?.join(', ')}

SHAPE TRADING L.L.C. - DUBAI, UAE
Phone (Sales): ${CONTACT_INFO.phoneSales} | Email: ${CONTACT_INFO.email}
Address: ${CONTACT_INFO.addressLine1}, ${CONTACT_INFO.city}, ${CONTACT_INFO.country}`
    ], { type: 'text/plain;charset=utf-8' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.modelNumber.replace(/[\/\s]/g, '_')}_Spec_Sheet_ShapeTrading.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)).slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-red-500" />
            <span>Back to All Products</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="hover:text-neutral-200 cursor-pointer" onClick={onBack}>Home</span>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="hover:text-neutral-200 cursor-pointer" onClick={onBack}>Catalog</span>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-red-400 font-semibold">{product.brand}</span>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-neutral-300 truncate max-w-[200px]">{product.modelNumber}</span>
          </nav>
        </div>

        {/* Main Product Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: High Resolution Product Imagery Stage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-8 flex items-center justify-center aspect-4/3 sm:aspect-square overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
              />
              {/* Brand Watermark Overlay */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-neutral-950/80 border border-neutral-800 text-xs font-mono text-neutral-300">
                  {product.brand}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 rounded bg-red-950/80 border border-red-800 text-red-400 text-xs font-bold">
                  GENUINE B2B EXPORT
                </span>
              </div>
            </div>

            {/* Quick Action Tools Bar */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleDownloadSpecSheet}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 text-xs font-semibold text-neutral-200 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-red-500" />
                <span>{downloadSuccess ? 'Downloaded!' : 'Download Spec Sheet'}</span>
              </button>

              <button
                onClick={handleWhatsAppDirect}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 hover:border-emerald-500 text-xs font-semibold text-emerald-300 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp RFQ</span>
              </button>
            </div>

            {/* Quality & Standards Verification Badge */}
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Export Quality Compliance & Certification</span>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] text-neutral-400">
                {product.complianceStandards?.map((std, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 font-mono">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specifications, Description & Direct Wholesale Order */}
          <div className="lg:col-span-6 space-y-6">
            {/* Title & Brand Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-red-500 tracking-wider uppercase">
                  {product.category.replace('_', ' ')}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs font-mono text-neutral-400">
                  Model: {product.modelNumber}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {product.tagline}
              </p>
            </div>

            {/* Description Paragraph */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {product.description}
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Technical Specifications:
              </h3>
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/40 text-xs">
                {product.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 ${
                      idx % 2 === 0 ? 'bg-neutral-900/60' : 'bg-neutral-950/40'
                    } border-b border-neutral-800/60 last:border-0`}
                  >
                    <span className="text-neutral-400 font-medium">{spec.label}</span>
                    <span className="text-white font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Wholesale Order / RFQ Drawer Section */}
            <div className="p-5 rounded-2xl bg-neutral-900 border-2 border-red-600/30 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-red-500" />
                    <span>Direct B2B Order & RFQ Form</span>
                  </h3>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Order directly by master carton. Consolidate mixed container loads out of Dubai Jebel Ali.
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800">
                  WHOLESALE
                </span>
              </div>

              <form onSubmit={handleOrderSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Cartons Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Quantity (Master Cartons):
                    </label>
                    <div className="flex items-center border border-neutral-700 rounded-lg overflow-hidden bg-neutral-950">
                      <button
                        type="button"
                        onClick={() => setCartons(Math.max(1, cartons - 5))}
                        className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={cartons}
                        onChange={(e) => setCartons(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-center bg-transparent py-2 text-sm font-bold text-white focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setCartons(cartons + 5)}
                        className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1">
                      Total Units: <strong className="text-white">{totalUnits} pieces</strong>
                    </div>
                  </div>

                  {/* Destination Port */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Destination Port / Region:
                    </label>
                    <select
                      value={destinationPort}
                      onChange={(e) => setDestinationPort(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-xs text-white focus:border-red-500 focus:outline-none"
                    >
                      <option value="Mombasa Port (Kenya)">Mombasa Port (Kenya)</option>
                      <option value="Dar es Salaam Port (Tanzania)">Dar es Salaam Port (Tanzania)</option>
                      <option value="Tema Port (Ghana)">Tema Port (Ghana)</option>
                      <option value="Lagos / Apapa (Nigeria)">Lagos / Apapa (Nigeria)</option>
                      <option value="Jeddah Islamic Port (Saudi Arabia)">Jeddah Islamic Port (Saudi Arabia)</option>
                      <option value="Hamad Port (Qatar)">Hamad Port (Qatar)</option>
                      <option value="Shuwaikh Port (Kuwait)">Shuwaikh Port (Kuwait)</option>
                      <option value="Jebel Ali Port (UAE / Local Delivery)">Jebel Ali Port (UAE / Local Delivery)</option>
                    </select>
                    <div className="text-[11px] text-neutral-400 mt-1">
                      Export Origin: <strong className="text-neutral-200">FOB Dubai Jebel Ali</strong>
                    </div>
                  </div>
                </div>

                {/* Form Submit Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
                  >
                    {orderSubmitted ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Added to RFQ Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to Wholesale RFQ List</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant Order via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Related Products Showcase */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-neutral-800">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                More from {product.brand} & Similar Categories
              </h2>
              <button
                onClick={onBack}
                className="text-xs font-semibold text-red-400 hover:text-red-300"
              >
                View Full Catalog →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="aspect-4/3 rounded-lg overflow-hidden bg-neutral-950 p-3 mb-4 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold">{p.brand}</span>
                    <h3 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-[11px] text-neutral-400 line-clamp-1">{p.tagline}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-300">
                    <span>{p.packaging.cartonQty}</span>
                    <span className="text-red-400 group-hover:translate-x-1 transition-transform">View Specs →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
