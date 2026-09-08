import React, { useState } from 'react';
import { X, Download, FileText, Check, ShieldCheck, Mail, ArrowRight, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, PRODUCTS } from '../data/mockData';

interface DownloadCatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadCatalogueModal: React.FC<DownloadCatalogueModalProps> = ({
  isOpen,
  onClose
}) => {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);

    // Virtual PDF/Text E-Catalogue download
    const catalogueContent = `========================================================================
             SHAPE TRADING L.L.C. - DUBAI, UAE
             WHOLESALE ELECTRICAL HOME APPLIANCES E-CATALOGUE
========================================================================
Registered Office: New Deira Building, Emirates NBD Bank Building,
                  90 Baniyas Road, Deira, Dubai, UAE
Export Port: Jebel Ali Port (FOB Dubai / CIF Available)
Sales Hotline: ${CONTACT_INFO.phoneSales} | Main Office: ${CONTACT_INFO.phoneMain}
WhatsApp Sales: ${CONTACT_INFO.phoneWhatsApp} | Email: ${CONTACT_INFO.email}
Website: https://shapet.ae

------------------------------------------------------------------------
PROPRIETARY BRANDS:
1. PHILUX:
   - AC Automatic Voltage Regulators (Servo Motor & High Speed Relay Type)
   - Heavy-Duty Steel Frame Cable Reels (25M / 50M 3x1.5mm² pure copper)
   - Step-up & Step-down Industrial Transformers
   - Commercial High-Velocity Pedestal Fans

2. MARSHAL:
   - High-Output Steam Irons (MA-4777 Ceramic Soleplate, Self-cleaning)
   - Heavyweight Classic Dry Irons
   - Dual-Meter Voltage Stabilizers (SLR Series 500VA - 5000VA)
   - Domestic Oscillating Stand & Table Fans

3. POWER KING:
   - Surge Protected Multi-Gang Extension Sockets (PK-912, 913, 914, 915, 916)
   - 100% Pure Copper 3-core cables, BS 1363 UK Standard plugs
   - Heavy Duty Universal Travel Adaptors & Multi-way Splitters

------------------------------------------------------------------------
DISTRIBUTED / PARTNER ALLIANCES:
- BAJAJ (India) - Domestic Appliances & High Speed Ceiling Fans
- KHIND (Malaysia) - Delivering Happiness Home Appliances
- ORIENT ELECTRIC (India) - Energy Efficient Aerodynamic Fans
- PANASONIC (Japan) - Ventilation & Premium Living
- KDK (Since 1909 Japan) - High Durability Fans & Blowers
- AMIN (Asia / Middle East) - Electrical Accessories & Switchgear

------------------------------------------------------------------------
EXPORT LOGISTICS & PACKAGING SPECIFICATIONS:
All products are packed in reinforced export-grade master cartons suited for
ocean freight containerization and transcontinental overland transport.
FCL (Full Container Load) and LCL (Less than Container Load) consolidation
available out of Dubai Jebel Ali Free Zone.
========================================================================`;

    const blob = new Blob([catalogueContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Shape_Trading_LLC_Wholesale_ECatalogue_Dubai.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 text-neutral-200 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Download Official E-Catalogue</h3>
              <p className="text-xs text-neutral-400">Shape Trading L.L.C. • Dubai Wholesale Edition</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Catalogue Highlights */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            What is Included in the E-Catalogue:
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Philux Voltage Regulators</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Philux 50M Cable Reels</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Marshal Steam & Dry Irons</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Power King Multi-Gang Sockets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Bajaj, KDK & Khind Fans</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Master Carton & MOQ Data</span>
            </div>
          </div>
        </div>

        {/* Download Form */}
        <form onSubmit={handleDownload} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Enter Your Business Email / Contact:
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="purchasing@yourcompany.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Catalogue Download Initiated!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download E-Catalogue Now (PDF / Spec Format)</span>
              </>
            )}
          </button>
        </form>

        {/* Direct WhatsApp Option */}
        <div className="pt-2 border-t border-neutral-800 text-center">
          <p className="text-xs text-neutral-400 mb-2">Prefer instant dispatch via WhatsApp?</p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsAppRaw}?text=${encodeURIComponent('Hello Shape Trading L.L.C., please send me your latest Wholesale E-Catalogue and price lists.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Request E-Catalogue via WhatsApp (+971 56 626 6883)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
