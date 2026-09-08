export type BrandType = 'Philux' | 'Marshal' | 'Power King' | 'Partner Brands';

export type ProductCategory = 
  | 'all'
  | 'voltage_regulators'
  | 'extension_cables'
  | 'cable_reels'
  | 'steam_irons'
  | 'fans'
  | 'accessories';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: BrandType;
  category: ProductCategory;
  modelNumber: string;
  tagline: string;
  description: string;
  image: string;
  additionalImages?: string[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  packaging: {
    cartonQty: string;
    cartonDimensions: string;
    grossWeight: string;
    moq: string;
  };
  isStarProduct?: boolean;
  complianceStandards?: string[];
}

export interface PartnerBrand {
  name: string;
  origin: string;
  tagline: string;
  category: string;
  specialty: string;
  accentColor: string;
}

export interface MarketPresence {
  id: string;
  name: string;
  region: 'middle_east' | 'africa' | 'asia';
  x: number; // SVG coordinate percent (0-100)
  y: number; // SVG coordinate percent (0-100)
  type: 'headquarters' | 'distribution_hub' | 'export_market';
  ports?: string;
  established?: string;
  popularCategories?: string[];
}

export interface DistributorReview {
  id: string;
  quote: string;
  partnerName: string;
  company: string;
  country: string;
  region: string;
  verifiedWholesaler: boolean;
  yearsPartnered: string;
}

export interface RfqItem {
  product: Product;
  quantityCartons: number;
}
