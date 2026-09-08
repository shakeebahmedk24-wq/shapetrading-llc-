import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Product, ProductCategory, BrandType } from '../types';
import { Search, Filter, ShoppingCart, Eye, Check, Package, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  selectedBrandFilter?: string | null;
  onClearBrandFilter?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToRfq,
  selectedBrandFilter,
  onClearBrandFilter
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>(selectedBrandFilter || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);

  // Sync if external filter provided
  React.useEffect(() => {
    if (selectedBrandFilter) {
      setSelectedBrand(selectedBrandFilter);
    }
  }, [selectedBrandFilter]);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Appliances' },
    { id: 'voltage_regulators', label: 'Voltage Regulators (AVR)' },
    { id: 'extension_cables', label: 'Extension Cables' },
    { id: 'cable_reels', label: 'Cable Reels' },
    { id: 'steam_irons', label: 'Steam & Dry Irons' },
    { id: 'fans', label: 'Cooling Fans' }
  ];

  const brands = ['all', 'Philux', 'Marshal', 'Power King'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || p.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  const handleQuickAdd = (p: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToRfq(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-neutral-900/40 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <Package className="w-3.5 h-3.5" />
              <span>Commercial Product Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Wholesale Product Catalog
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Explore our full inventory of electrical appliances available for export and bulk delivery. Direct factory container consignments shipped from Dubai Jebel Ali.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10 p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
          {/* Brand Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-red-500" />
              <span>Brand:</span>
            </span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => {
                  setSelectedBrand(b);
                  if (onClearBrandFilter && b === 'all') onClearBrandFilter();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedBrand.toLowerCase() === b.toLowerCase()
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                }`}
              >
                {b === 'all' ? 'All Brands' : b}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-neutral-850">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mr-2">
              Category:
            </span>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-white text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-neutral-950 rounded-2xl border border-neutral-800 p-8">
            <p className="text-neutral-400 text-sm">
              No products found matching your active filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
                if (onClearBrandFilter) onClearBrandFilter();
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-neutral-900 text-xs text-red-400 font-semibold border border-neutral-800"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isAdded = addedId === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg cursor-pointer hover:translate-y-[-2px]"
                >
                  <div className="p-5 pb-0 flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded ${
                        product.brand === 'Power King'
                          ? 'bg-amber-400 text-neutral-950 font-black'
                          : product.brand === 'Marshal'
                          ? 'bg-neutral-900 border border-neutral-700 text-white font-serif font-black italic'
                          : 'bg-neutral-900 border border-neutral-700 text-white font-serif tracking-widest'
                      }`}
                    >
                      {product.brand}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {product.modelNumber.split('/')[0]}
                    </span>
                  </div>

                  {/* Image Canvas */}
                  <div className="p-6 flex items-center justify-center min-h-[210px]">
                    <div className="relative w-full aspect-square rounded-xl bg-neutral-900/50 p-4 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain filter group-hover:scale-106 transition-transform duration-500 drop-shadow-md"
                      />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 pt-0 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Specifications List */}
                    <div className="pt-2 border-t border-neutral-850 space-y-1 text-[11px] text-neutral-400">
                      <div className="flex justify-between">
                        <span>Carton Pack:</span>
                        <span className="text-neutral-200 font-mono">{product.packaging.cartonQty.split(' ')[0]} Units</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Export MOQ:</span>
                        <span className="text-red-400 font-semibold">{product.packaging.moq}</span>
                      </div>
                    </div>

                    {/* Key Engineering Highlights */}
                    <div className="pt-2.5 border-t border-neutral-850 space-y-1.5">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Key Engineering Highlights:
                      </h4>
                      <div className="space-y-1">
                        {product.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Export Packaging & Logistics */}
                    <div className="pt-2.5 border-t border-neutral-850 space-y-1.5">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-red-500" />
                        <span>Export Packaging & Logistics:</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 text-xs">
                        <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800">
                          <div className="text-neutral-400 text-[9px] uppercase font-medium">Carton Qty</div>
                          <div className="font-bold text-white mt-0.5 text-[11px]">{product.packaging.cartonQty}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800">
                          <div className="text-neutral-400 text-[9px] uppercase font-medium">Dimensions</div>
                          <div className="font-mono text-white mt-0.5 text-[10px] truncate">{product.packaging.cartonDimensions}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800">
                          <div className="text-neutral-400 text-[9px] uppercase font-medium">Gross Wt</div>
                          <div className="font-bold text-white mt-0.5 text-[11px]">{product.packaging.grossWeight}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800">
                          <div className="text-neutral-400 text-[9px] uppercase font-medium">Export MOQ</div>
                          <div className="font-bold text-red-400 mt-0.5 text-[11px]">{product.packaging.moq}</div>
                        </div>
                      </div>
                    </div>

                    {/* Actions Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="py-2 px-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-1.5 border border-neutral-800"
                      >
                        <Eye className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Specs Page</span>
                      </button>

                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-red-600 hover:bg-red-700 text-white shadow-sm'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Order RFQ</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
