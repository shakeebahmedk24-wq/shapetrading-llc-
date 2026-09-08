import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, MessageSquare, ExternalLink, Globe, Shield, ArrowUp } from 'lucide-react';
import { ShapeLogo } from './ShapeLogo';
import { CONTACT_INFO } from '../data/mockData';

interface ContactFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCatalogue: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onNavigate, onOpenCatalogue }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Voltage Regulators & Stabilizers');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 relative">
      {/* Contact & Inquiries Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details, Map Link & Brand Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <ShapeLogo size="lg" onClick={() => onNavigate('hero')} />
              <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed pt-2">
                Wholesale trading and distribution of electrical home appliances across the Middle East, Africa, and Asia.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Direct Communication Channels:
              </h4>

              {/* Tap to call main office */}
              <a
                href={`tel:${CONTACT_INFO.phoneMain.replace(/\s+/g, '')}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 hover:bg-neutral-850 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300 group-hover:text-red-500 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Main Office Line</div>
                  <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {CONTACT_INFO.phoneMain}
                  </div>
                </div>
              </a>

              {/* Tap to call sales line */}
              <a
                href={`tel:${CONTACT_INFO.phoneSales.replace(/\s+/g, '')}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 hover:bg-neutral-850 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Sales & Export Desk</div>
                  <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {CONTACT_INFO.phoneSales}
                  </div>
                </div>
              </a>

              {/* Tap to chat WhatsApp Sales */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsAppRaw}?text=${encodeURIComponent('Hello Shape Trading L.L.C., I am contacting you for wholesale electrical appliances distribution.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 hover:border-emerald-500 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400/90 font-medium">Sales & Direct Orders (WhatsApp)</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {CONTACT_INFO.phoneWhatsApp}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 hover:bg-neutral-850 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300 group-hover:text-red-500 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Official Inquiries & Documentation</div>
                  <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </a>

              {/* Address with Google Maps link */}
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/60 hover:bg-neutral-850 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 text-red-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-neutral-400 flex items-center gap-1">
                    <span>Headquarters & Commercial Office</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-white group-hover:text-neutral-200 mt-0.5 leading-snug">
                    {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}, {CONTACT_INFO.city}, {CONTACT_INFO.country}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Trade Inquiry / RFQ Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-2xl space-y-6">
              <div className="space-y-1 border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
                  B2B Wholesale Inquiries
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Request Export Quotation / Pro-Forma Invoice
                </h3>
                <p className="text-xs text-neutral-400">
                  Submit your required products, target destination port, and container specifications. Our Dubai export desk responds promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Name / Representative:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmed Al-Mansoor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Company / Trading Establishment:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gulf Horizon General Trading"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Business Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="trade@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Phone / WhatsApp Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Target Product Category of Interest:
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-red-500 focus:outline-none"
                  >
                    <option value="Automatic Voltage Regulators (Philux / Marshal)">Automatic Voltage Regulators (Philux / Marshal)</option>
                    <option value="Power King Extension Sockets & Adaptors">Power King Extension Sockets & Adaptors</option>
                    <option value="Philux Heavy-Duty Steel Cable Reels">Philux Heavy-Duty Steel Cable Reels</option>
                    <option value="Marshal Steam & Dry Household Irons">Marshal Steam & Dry Household Irons</option>
                    <option value="Industrial & Domestic Cooling Fans (Philux / Bajaj / KDK)">Industrial & Domestic Cooling Fans (Philux / Bajaj / KDK)</option>
                    <option value="Mixed Full Container Load (FCL Export)">Mixed Full Container Load (FCL Export)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Consignment Notes & Destination Details:
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Specify estimated carton quantities, target port of discharge (e.g., Mombasa, Dar es Salaam, Tema, Jeddah), or customs requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/25 transition-all cursor-pointer"
                >
                  {sent ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Inquiry Dispatched to Shape Trading Export Desk!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Wholesale Export Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Navigation Strip */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Shape Trading L.L.C. All rights reserved.</span>
            <span>•</span>
            <span>Dubai, United Arab Emirates</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => onNavigate('about-us')} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('own-brands')} className="hover:text-white transition-colors">
              Brands
            </button>
            <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">
              Catalog
            </button>
            <button onClick={onOpenCatalogue} className="hover:text-white transition-colors">
              E-Catalogue
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
