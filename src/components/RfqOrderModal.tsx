import React, { useState } from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, Send, Check, MessageSquare, Package, ArrowRight } from 'lucide-react';
import { RfqItem } from '../types';
import { CONTACT_INFO, PRODUCTS } from '../data/mockData';

interface RfqOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: RfqItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearItems: () => void;
}

export const RfqOrderModal: React.FC<RfqOrderModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearItems
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [company, setCompany] = useState('');
  const [destinationPort, setDestinationPort] = useState('Mombasa Port (Kenya)');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shippingTerm, setShippingTerm] = useState<'FOB Dubai' | 'CIF Destination'>('FOB Dubai');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalCartons = items.reduce((acc, curr) => acc + curr.quantityCartons, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClearItems();
      onClose();
    }, 2800);
  };

  const handleWhatsAppSend = () => {
    const itemsSummary = items
      .map(
        (it) =>
          `• ${it.product.name} (${it.product.modelNumber}): ${it.quantityCartons} Cartons [${it.product.packaging.cartonQty}]`
      )
      .join('\n');

    const message = `Hello Shape Trading L.L.C.,\nI would like to place an export inquiry / wholesale direct order:\n\n*Buyer / Company:* ${buyerName || 'Wholesale Buyer'} (${company || 'Electrical Importer'})\n*Destination Port:* ${destinationPort}\n*Trade Term:* ${shippingTerm}\n*Contact:* ${phone || email || 'N/A'}\n\n*Ordered Items:*\n${itemsSummary || 'All Standard Wholesale Consignment'}\n*Total Cartons:* ${totalCartons}\n\nPlease issue pro-forma invoice and container stuffing plan.`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsAppRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 text-neutral-200 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Wholesale Direct Order & RFQ Cart</h3>
              <p className="text-xs text-neutral-400">Direct export consignments from Dubai Jebel Ali</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Items List */}
        {items.length === 0 ? (
          <div className="py-10 text-center space-y-3 bg-neutral-900/40 rounded-xl border border-neutral-800/80 p-6">
            <Package className="w-10 h-10 text-neutral-600 mx-auto" />
            <p className="text-neutral-400 text-sm">
              Your wholesale RFQ cart is currently empty.
            </p>
            <p className="text-neutral-500 text-xs">
              Select products from the Star Products carousel or Product Catalog to calculate carton quantities and request pro-forma quotations.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400">
              <span>Selected Products ({items.length})</span>
              <button
                onClick={onClearItems}
                className="text-red-400 hover:underline text-[11px] lowercase"
              >
                clear all
              </button>
            </div>

            <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
              {items.map(({ product, quantityCartons }) => (
                <div
                  key={product.id}
                  className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 object-contain rounded bg-neutral-950 p-1 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-white truncate">{product.name}</div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {product.brand} • {product.packaging.cartonQty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center border border-neutral-700 rounded-lg bg-neutral-950">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        className="px-2 py-1 text-neutral-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-mono font-bold text-white text-xs">
                        {quantityCartons} ctn
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        className="px-2 py-1 text-neutral-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(product.id)}
                      className="p-1.5 text-neutral-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-semibold">Total Order Volume:</span>
              <span className="font-mono font-bold text-white text-sm">{totalCartons} Master Cartons</span>
            </div>
          </div>
        )}

        {/* Order Details Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-neutral-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Contact Person Name:
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Mwangi"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Company / Importer Name:
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Continental Electricals Ltd."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Business Phone / WhatsApp:
              </label>
              <input
                type="tel"
                required
                placeholder="+254 700 123456"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Business Email:
              </label>
              <input
                type="email"
                required
                placeholder="import@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Destination Port:
              </label>
              <select
                value={destinationPort}
                onChange={(e) => setDestinationPort(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:border-red-500 focus:outline-none"
              >
                <option value="Mombasa Port (Kenya)">Mombasa Port (Kenya)</option>
                <option value="Dar es Salaam Port (Tanzania)">Dar es Salaam Port (Tanzania)</option>
                <option value="Tema Port (Ghana)">Tema Port (Ghana)</option>
                <option value="Lagos / Apapa (Nigeria)">Lagos / Apapa (Nigeria)</option>
                <option value="Jeddah Islamic Port (Saudi Arabia)">Jeddah Islamic Port (Saudi Arabia)</option>
                <option value="Hamad Port (Qatar)">Hamad Port (Qatar)</option>
                <option value="Shuwaikh Port (Kuwait)">Shuwaikh Port (Kuwait)</option>
                <option value="Jebel Ali Port (UAE / Local Delivery)">Jebel Ali Port (UAE / Local Delivery)</option>
                <option value="Other African / Middle Eastern Port">Other African / Middle Eastern Port</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Shipping Term Preference:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShippingTerm('FOB Dubai')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    shippingTerm === 'FOB Dubai'
                      ? 'bg-red-600 text-white border-red-500'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                  }`}
                >
                  FOB Jebel Ali
                </button>
                <button
                  type="button"
                  onClick={() => setShippingTerm('CIF Destination')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    shippingTerm === 'CIF Destination'
                      ? 'bg-red-600 text-white border-red-500'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                  }`}
                >
                  CIF Destination
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            <button
              type="submit"
              disabled={items.length === 0}
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>RFQ Submitted Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Wholesale RFQ</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              disabled={items.length === 0}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant Dispatch via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
