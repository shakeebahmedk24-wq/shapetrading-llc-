import { Product, PartnerBrand, MarketPresence, DistributorReview } from '../types';

import heroImg from '../assets/images/hero_skyline_hardware_1788860908318.jpg';
import voltageRegulatorImg from '../assets/images/voltage_regulator_1788860934911.jpg';
import cableReelImg from '../assets/images/cable_reel_1788860953492.jpg';
import extensionSocketImg from '../assets/images/extension_socket_1788860970475.jpg';
import steamIronImg from '../assets/images/steam_iron_1788860989534.jpg';
import electricFansImg from '../assets/images/electric_fans_1788861011492.jpg';

export { heroImg, voltageRegulatorImg, cableReelImg, extensionSocketImg, steamIronImg, electricFansImg };

export const OWN_BRANDS = [
  {
    id: 'philux',
    name: 'Philux',
    logoBadge: 'PHILUX',
    badgeStyle: 'border-2 border-neutral-700 bg-neutral-900 text-white font-serif tracking-widest px-4 py-1.5 rounded-full text-xs font-bold uppercase',
    headline: 'Precision Industrial Electrical Equipment',
    description: 'Specialized in heavy-duty Automatic Voltage Regulators (Servo & Relay), High-capacity Steel Cable Reels, and industrial grade step-up/step-down transformers built for volatile electrical grids.',
    flagshipCategories: ['Voltage Regulators', 'Cable Reels', 'Transformers', 'Heavy Pedestal Fans'],
    color: '#E50914'
  },
  {
    id: 'marshal',
    name: 'Marshal',
    logoBadge: 'Marshal',
    badgeStyle: 'border border-neutral-700 bg-neutral-900 text-white font-serif tracking-normal px-5 py-1 rounded text-sm font-black italic',
    headline: 'Durable Domestic & Commercial Home Appliances',
    description: 'Renowned across East and West Africa for indestructible steam irons, heavyweight dry irons, robust automatic voltage stabilizers, and high-velocity oscillating air circulation units.',
    flagshipCategories: ['Steam & Dry Irons', 'Automatic Voltage Regulators', 'Stand & Desk Fans', 'Blenders'],
    color: '#DC2626'
  },
  {
    id: 'power-king',
    name: 'Power King',
    logoBadge: 'POWER KING',
    badgeStyle: 'bg-amber-400 text-neutral-950 font-black tracking-wider px-4 py-1 rounded text-xs uppercase shadow-sm border border-amber-500',
    headline: 'High-Load Surge Protected Power Distribution',
    description: 'The industry benchmark for multi-gang extension sockets, unbreakable safety adaptors, surge protectors, and commercial power strips with 100% pure copper conductors.',
    flagshipCategories: ['Extension Cables', 'Multi-Gang Sockets', 'Universal Adaptors', 'Surge Strips'],
    color: '#F59E0B'
  }
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    name: 'Bajaj',
    origin: 'India',
    tagline: 'Inspiring Trust',
    category: 'Small Appliances & Ceiling Fans',
    specialty: 'High-speed copper motors & durable domestic appliances',
    accentColor: '#005CAB'
  },
  {
    name: 'Khind',
    origin: 'Malaysia',
    tagline: 'Delivering Happiness',
    category: 'Home & Kitchen Appliances',
    specialty: 'Reliable ventilation, kitchenware and cooling units',
    accentColor: '#D32F2F'
  },
  {
    name: 'Orient Electric',
    origin: 'India',
    tagline: 'Switch to Smart',
    category: 'Electricals & Fans',
    specialty: 'Energy efficient aerodynamic ceiling fans and switches',
    accentColor: '#FF6F00'
  },
  {
    name: 'Panasonic',
    origin: 'Japan',
    tagline: 'Live Your Best',
    category: 'Ventilation & Premium Home Living',
    specialty: 'Ultra-silent exhaust fans, wiring devices and precision appliances',
    accentColor: '#0041C2'
  },
  {
    name: 'KDK',
    origin: 'Since 1909 Japan',
    tagline: 'Pioneering Ventilation',
    category: 'Industrial & Domestic Fans',
    specialty: 'High-durability ceiling fans, wall fans and industrial blowers',
    accentColor: '#E60012'
  },
  {
    name: 'Amin',
    origin: 'Asia / Middle East',
    tagline: 'Solid Quality',
    category: 'Electrical Accessories',
    specialty: 'Robust power switches, plugs, fuses and connection hardware',
    accentColor: '#B71C1C'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'pk-912-916',
    slug: 'power-king-extension-cable-pk912-916',
    name: 'Power King Extension Cable PK 912, 913, 914, 915, 916',
    brand: 'Power King',
    category: 'extension_cables',
    modelNumber: 'PK-912 / 913 / 914 / 915 / 916',
    tagline: 'Heavy-Duty Multi-Gang Extension Socket with Individual Neon Switches',
    description: 'The definitive standard for power distribution in homes, offices, and commercial establishments. Engineered with 100% pure copper core wiring, individual safety shutter ports, child-protection baffles, and flame-retardant polycarbonate housing. Available in 2-gang, 3-gang, 4-gang, 5-gang, and 6-gang configurations with 3-meter and 5-meter heavy-gauge cable options.',
    image: extensionSocketImg,
    additionalImages: [extensionSocketImg],
    isStarProduct: true,
    features: [
      '100% pure high-conductivity copper conductor strips',
      'Individual neon power switches for each socket port',
      'Integrated surge and voltage spike suppression',
      'Spring-loaded safety shutters to prevent accidental insertion',
      'Flame-retardant engineering plastic enclosure',
      'Replaceable UK standard 13A ceramic safety fuse in plug'
    ],
    specs: [
      { label: 'Rated Voltage', value: '220V - 250V AC, 50/60Hz' },
      { label: 'Current Rating', value: '13 Amperes (Max 3250 Watts)' },
      { label: 'Gangs Available', value: '2 Gang (912), 3 Gang (913), 4 Gang (914), 5 Gang (915), 6 Gang (916)' },
      { label: 'Cable Length Options', value: '3 Meters / 5 Meters (Heavy Duty 3x1.25mm² Pure Copper)' },
      { label: 'Plug Standard', value: 'BS 1363 (UK Standard 3-Pin fused plug)' },
      { label: 'Housing Material', value: 'High-Impact Fire Retardant Polycarbonate (V-0 rating)' }
    ],
    packaging: {
      cartonQty: '24 Units per Master Carton',
      cartonDimensions: '480 x 360 x 310 mm',
      grossWeight: '18.5 KG per carton',
      moq: '50 Cartons (Wholesale Export MOQ)'
    },
    complianceStandards: ['BS 1363-2', 'SASO', 'SONCAP', 'G-Mark', 'CE']
  },
  {
    id: 'marshal-steam-iron-ma4777',
    slug: 'marshal-steam-iron-ma-4777',
    name: 'Marshal Steam Iron MA-4777',
    brand: 'Marshal',
    category: 'steam_irons',
    modelNumber: 'MA-4777',
    tagline: 'High-Output Continuous Steam Iron with Precision Ceramic Soleplate',
    description: 'Engineered specifically for demanding tropical and dry climates where heavy cottons and linens require rapid, effortless wrinkle release. Features a durable ceramic-glide non-stick soleplate, variable continuous steam flow, powerful concentrated burst-of-steam trigger, fine water mist spray, and automatic anti-calc self-cleaning function.',
    image: steamIronImg,
    additionalImages: [steamIronImg],
    isStarProduct: true,
    features: [
      'Scratch-resistant ultra-smooth ceramic non-stick soleplate',
      'High-velocity vertical steam burst for hanging drapes and garments',
      'Continuous steam rate with 5-position fabric temperature dial',
      '300ml transparent high-capacity water reservoir with sealed refill port',
      'Anti-calc system preventing mineral build-up in hard water areas',
      '360-degree flexible swivel power cord with reinforced strain relief'
    ],
    specs: [
      { label: 'Power Rating', value: '2000W - 2400W High Heating Output' },
      { label: 'Rated Voltage', value: '220V - 240V AC, 50/60Hz' },
      { label: 'Soleplate Type', value: 'Multi-Vent Ceramic Coated Aluminum' },
      { label: 'Water Tank Capacity', value: '320 ml' },
      { label: 'Safety Protection', value: 'Thermal Cut-off Overheat Protection' },
      { label: 'Cord Length', value: '1.8m Braided Heat-Resistant Cable' }
    ],
    packaging: {
      cartonQty: '10 Units per Master Export Carton',
      cartonDimensions: '630 x 320 x 340 mm',
      grossWeight: '14.2 KG per carton',
      moq: '30 Cartons'
    },
    complianceStandards: ['IEC 60335-2-3', 'CB Scheme', 'G-Mark', 'KEBS']
  },
  {
    id: 'marshal-avr-slr',
    slug: 'marshal-automatic-voltage-regulator-slr',
    name: 'Marshal Automatic Voltage Regulator SLR Series',
    brand: 'Marshal',
    category: 'voltage_regulators',
    modelNumber: 'SLR-500VA to SLR-5000VA',
    tagline: 'Heavy-Duty AC Automatic Voltage Regulator with Dual Analogue Meters',
    description: 'Built to safeguard refrigerators, air conditioners, home entertainment systems, and sensitive electronics in territories prone to extreme brownouts and volatile grid surges. Employs precision multi-tap high-efficiency transformers with rapid relay micro-switching, dual analogue meters displaying input and output voltages simultaneously, and dual output sockets.',
    image: voltageRegulatorImg,
    additionalImages: [voltageRegulatorImg],
    isStarProduct: true,
    features: [
      'Dual illuminated analogue meters for real-time Input & Output voltage monitoring',
      'Ultra-wide input voltage stabilization range (140V - 260V to stable 220V ±10%)',
      'Selectable delay timer switch (3 minutes / 6 seconds) for compressor protection',
      'Triple protection: Over-voltage, Under-voltage, and High-temperature thermal cutout',
      'Rugged powder-coated cold-rolled steel chassis with carry handle',
      'Dual universal output sockets accommodating international plug configurations'
    ],
    specs: [
      { label: 'Capacity Options', value: '500VA, 1000VA, 1500VA, 2000VA, 3000VA, 5000VA' },
      { label: 'Input Voltage Range', value: '140V - 260V AC' },
      { label: 'Output Voltage', value: '220V AC ± 8% stabilized' },
      { label: 'Frequency', value: '50Hz / 60Hz Auto-sensing' },
      { label: 'Response Time', value: '< 1 second against 10% input variation' },
      { label: 'Efficiency', value: '> 95% at rated load' }
    ],
    packaging: {
      cartonQty: '4 Units per Carton (1000VA-2000VA) / 2 Units (3000VA-5000VA)',
      cartonDimensions: '510 x 310 x 280 mm',
      grossWeight: '22.0 KG per carton',
      moq: '25 Cartons'
    },
    complianceStandards: ['IEC 61000-6', 'CE', 'SASO', 'SONCAP']
  },
  {
    id: 'philux-cable-reel-7250',
    slug: 'philux-cable-reel-7250',
    name: 'Philux Cable Reel 7250',
    brand: 'Philux',
    category: 'cable_reels',
    modelNumber: '7250 (50M) / 7225 (25M)',
    tagline: 'Industrial Heavy-Duty Portable Steel-Frame Cable Reel with 4 UK Sockets',
    description: 'The preferred choice for construction sites, industrial workshops, and residential power distribution. Features a reinforced tubular steel stand with insulated ergonomic grip, high-impact shatterproof drum, integrated thermal trip overload protection with manual reset, and 4 UK 3-pin shuttered sockets with individual neon indicators.',
    image: cableReelImg,
    additionalImages: [cableReelImg],
    isStarProduct: true,
    features: [
      'High-capacity shatterproof polypropylene drum with central winding knob',
      'Heavy-gauge tubular steel frame with durable anti-corrosion electrostatic coating',
      '4 individual BS 1363 UK 3-pin shuttered sockets with neon power indicators',
      'Automatic thermal cut-out switch prevents cable overheating when coiled',
      'Dual-color ergonomic molded carry handle with built-in cable clamp guide',
      'Heavy-duty 3-core pure copper cable rated for heavy inductive machinery'
    ],
    specs: [
      { label: 'Cable Length', value: '50 Meters (Model 7250) / 25 Meters (Model 7225)' },
      { label: 'Cable Specification', value: '3 x 1.5mm² Heavy Duty H05VV-F Pure Copper' },
      { label: 'Max Power (Fully Unwound)', value: '3120 Watts (13A, 240V)' },
      { label: 'Max Power (Fully Wound)', value: '1000 Watts (Thermal Safe Mode)' },
      { label: 'Protection Rating', value: 'IP20 with Thermal Overload Reset Button' },
      { label: 'Socket Standard', value: '4 x 13A BS 1363 Shuttered' }
    ],
    packaging: {
      cartonQty: '2 Units per Export Master Carton',
      cartonDimensions: '580 x 390 x 310 mm',
      grossWeight: '17.8 KG per carton',
      moq: '20 Cartons'
    },
    complianceStandards: ['EN 61242', 'BS 1363-2', 'CE', 'G-Mark']
  },
  {
    id: 'philux-svc-1000va-servo',
    slug: 'philux-svc-1000va-servo-stabilizer',
    name: 'Philux SVC-1000VA Servo Motor AC Automatic Voltage Regulator',
    brand: 'Philux',
    category: 'voltage_regulators',
    modelNumber: 'SVC-1000VA / SVC-2000VA',
    tagline: 'High Precision True Servo Motor Controlled AC Voltage Stabilizer',
    description: 'State-of-the-art servo motor controlled voltage regulation delivering continuous, ultra-smooth voltage correction without waveform distortion. Designed specifically for medical equipment, laboratory instruments, studio sound systems, and high-end air conditioning units requiring exacting 220V ±3% stability.',
    image: voltageRegulatorImg,
    additionalImages: [voltageRegulatorImg],
    isStarProduct: false,
    features: [
      'Genuine precision servo motor drive with toroidal autotransformer',
      'Zero waveform distortion (pure sine wave preservation)',
      'High accuracy voltage stabilization output within ±3%',
      'Analogue voltmeter with dual selector for input and output measurement',
      'Soft-start delay function protecting connected motors against initial surge'
    ],
    specs: [
      { label: 'Rated Power', value: '1000 VA (800 Watts continuous)' },
      { label: 'Input Voltage Range', value: '160V - 250V AC' },
      { label: 'Output Voltage Precision', value: '220V AC ± 3% (Precision Servo)' },
      { label: 'Temperature Rise', value: 'Less than 60°C under full load' },
      { label: 'Insulation Resistance', value: '> 5 Mega-Ohms' }
    ],
    packaging: {
      cartonQty: '4 Units per Master Carton',
      cartonDimensions: '490 x 300 x 260 mm',
      grossWeight: '24.0 KG',
      moq: '25 Cartons'
    },
    complianceStandards: ['IEC 60076', 'CE', 'SASO']
  },
  {
    id: 'philux-industrial-pedestal-fan',
    slug: 'philux-industrial-pedestal-fan-18',
    name: 'Philux Industrial Pedestal Stand Fan 18"',
    brand: 'Philux',
    category: 'fans',
    modelNumber: 'PF-1888',
    tagline: 'High-Velocity Commercial Air Circulator with Heavy Cast-Iron Base',
    description: 'Engineered for warehouses, workshops, event spaces, and large residential halls. Features aerodynamic aluminum alloy blades, a 100% heavy copper wound motor with thermal protector, 3 speed rotary settings, and a reinforced cast-iron circular weighted base ensuring rock-solid stability even at maximum oscillation velocity.',
    image: electricFansImg,
    additionalImages: [electricFansImg],
    isStarProduct: false,
    features: [
      'High-velocity 3-speed heavy duty copper motor',
      'Precision-balanced 18-inch aerodynamic 3-leaf metal blades',
      'Wide 90-degree smooth horizontal oscillation with tilt-back adjustment',
      'Heavy-gauge spiral safety wire guard with reinforced rim',
      'Telescopic height adjustment tube with locking collar (1.2m - 1.55m)'
    ],
    specs: [
      { label: 'Fan Blade Diameter', value: '18 Inches (450 mm)' },
      { label: 'Power Consumption', value: '110 Watts' },
      { label: 'Air Flow Delivery', value: '135 m³/min' },
      { label: 'Motor Speed', value: '1350 RPM (Max speed)' },
      { label: 'Base Type', value: 'Heavy Cast Iron Weighted Round Base' }
    ],
    packaging: {
      cartonQty: '1 Unit per Compact Brown Box (SKD Knockdown packing for container freight efficiency)',
      cartonDimensions: '610 x 510 x 190 mm',
      grossWeight: '8.9 KG',
      moq: '100 Units'
    },
    complianceStandards: ['IEC 60335-2-80', 'G-Mark', 'SONCAP']
  }
];

export const GLOBAL_PRESENCE_MARKETS: MarketPresence[] = [
  // Headquarters
  { id: 'uae', name: 'United Arab Emirates', region: 'middle_east', x: 62, y: 44, type: 'headquarters', ports: 'Jebel Ali Port / Dubai Central Warehousing', popularCategories: ['All Categories', 'Export Transshipment Hub'] },
  // Middle East
  { id: 'ksa', name: 'Saudi Arabia', region: 'middle_east', x: 57, y: 45, type: 'distribution_hub', ports: 'Jeddah Islamic Port / Dammam Port', popularCategories: ['Voltage Regulators', 'Extension Sockets', 'Fans'] },
  { id: 'kwt', name: 'Kuwait', region: 'middle_east', x: 58, y: 40, type: 'export_market', ports: 'Shuwaikh Port', popularCategories: ['Cable Reels', 'Extension Cables'] },
  { id: 'qat', name: 'Qatar', region: 'middle_east', x: 60, y: 43, type: 'export_market', ports: 'Hamad Port', popularCategories: ['AVR Regulators', 'Power Strips'] },
  { id: 'bhr', name: 'Bahrain', region: 'middle_east', x: 60, y: 42, type: 'export_market', ports: 'Khalifa Bin Salman Port', popularCategories: ['Domestic Appliances'] },
  { id: 'omn', name: 'Oman', region: 'middle_east', x: 63, y: 47, type: 'export_market', ports: 'Sohar / Salalah Port', popularCategories: ['Fans', 'Cable Reels', 'Irons'] },
  // Africa
  { id: 'ken', name: 'Kenya', region: 'africa', x: 56, y: 64, type: 'distribution_hub', ports: 'Mombasa Port (Gateway to East Africa)', popularCategories: ['Voltage Regulators', 'Extension Cables', 'Steam Irons'] },
  { id: 'tza', name: 'Tanzania', region: 'africa', x: 55, y: 69, type: 'export_market', ports: 'Dar es Salaam Port', popularCategories: ['Cable Reels', 'Voltage Regulators', 'Irons'] },
  { id: 'uga', name: 'Uganda', region: 'africa', x: 53, y: 63, type: 'export_market', ports: 'Inland Depot via Mombasa corridor', popularCategories: ['Power King Extensions', 'Marshal Irons'] },
  { id: 'gha', name: 'Ghana', region: 'africa', x: 38, y: 58, type: 'distribution_hub', ports: 'Tema Port / Takoradi', popularCategories: ['Voltage Regulators', 'Fans', 'Extension Cables'] },
  { id: 'mali', name: 'Mali', region: 'africa', x: 37, y: 50, type: 'export_market', ports: 'Via Dakar/Abidjan transit', popularCategories: ['Fans', 'Dry & Steam Irons'] },
  { id: 'bfa', name: 'Burkina Faso', region: 'africa', x: 38, y: 53, type: 'export_market', ports: 'Ouagadougou Freight Hub', popularCategories: ['Voltage Stabilizers', 'Fans'] },
  { id: 'mau', name: 'Mauritania', region: 'africa', x: 33, y: 49, type: 'export_market', ports: 'Nouakchott Port', popularCategories: ['Extension Cables', 'Regulators'] },
  { id: 'sle', name: 'Sierra Leone', region: 'africa', x: 34, y: 57, type: 'export_market', ports: 'Freetown Port', popularCategories: ['Power King Strips', 'Steam Irons'] },
  { id: 'lbr', name: 'Liberia', region: 'africa', x: 35, y: 58, type: 'export_market', ports: 'Monrovia Freeport', popularCategories: ['Cable Reels', 'Regulators'] },
  { id: 'gin', name: 'Guinea', region: 'africa', x: 34, y: 55, type: 'export_market', ports: 'Conakry Port', popularCategories: ['Stabilizers', 'Extension Plugs'] },
  { id: 'gmb', name: 'Gambia', region: 'africa', x: 32, y: 52, type: 'export_market', ports: 'Banjul Port', popularCategories: ['Household Appliances'] },
  { id: 'eth', name: 'Ethiopia', region: 'africa', x: 56, y: 59, type: 'export_market', ports: 'Via Djibouti Corridor', popularCategories: ['Voltage Stabilizers', 'Power King Strips'] },
  { id: 'dji', name: 'Djibouti', region: 'africa', x: 57, y: 56, type: 'export_market', ports: 'Port of Djibouti', popularCategories: ['Transshipment Hub'] },
  { id: 'sdn', name: 'Sudan', region: 'africa', x: 51, y: 52, type: 'export_market', ports: 'Port Sudan', popularCategories: ['Fans', 'Voltage Regulators'] },
  { id: 'rwa', name: 'Rwanda', region: 'africa', x: 52, y: 66, type: 'export_market', ports: 'Kigali Logistic Hub', popularCategories: ['Extension Sockets', 'Irons'] },
  { id: 'bdi', name: 'Burundi', region: 'africa', x: 52, y: 67, type: 'export_market', ports: 'Bujumbura Port', popularCategories: ['Voltage Regulators'] },
  { id: 'gab', name: 'Gabon', region: 'africa', x: 43, y: 65, type: 'export_market', ports: 'Owendo Port / Libreville', popularCategories: ['Domestic Appliances'] },
  { id: 'cog', name: 'Congo', region: 'africa', x: 46, y: 66, type: 'export_market', ports: 'Pointe-Noire Port', popularCategories: ['Cable Reels', 'Extension Boards'] },
  { id: 'mwi', name: 'Malawi', region: 'africa', x: 54, y: 72, type: 'export_market', ports: 'Via Beira / Nacala corridor', popularCategories: ['Marshal Irons', 'Fans'] },
  { id: 'zmb', name: 'Zambia', region: 'africa', x: 51, y: 73, type: 'export_market', ports: 'Lusaka / Ndola Distribution', popularCategories: ['Stabilizers', 'Power King Sockets'] },
  { id: 'mzo', name: 'Mozambique', region: 'africa', x: 54, y: 76, type: 'export_market', ports: 'Maputo / Beira Port', popularCategories: ['Cable Reels', 'Irons'] },
  { id: 'zwe', name: 'Zimbabwe', region: 'africa', x: 52, y: 75, type: 'export_market', ports: 'Harare / Bulawayo Hub', popularCategories: ['Heavy-Duty Regulators', 'Fans'] },
  // Asia
  { id: 'chn', name: 'China', region: 'asia', x: 74, y: 40, type: 'distribution_hub', ports: 'Ningbo / Shenzhen / Shanghai (Factory Inspection & QC)', popularCategories: ['Manufacturing Supply Partner Hub'] },
  { id: 'ind', name: 'India', region: 'asia', x: 69, y: 50, type: 'distribution_hub', ports: 'Nhava Sheva / Chennai Port', popularCategories: ['Partner Distribution & Motor Sourcing'] }
];

export const DISTRIBUTOR_REVIEWS: DistributorReview[] = [
  {
    id: 'rev-1',
    quote: 'We have distributed Power King extension cables and Philux voltage regulators in Nairobi for over 14 years. Grid fluctuations here demand genuine copper transformers that do not burn out. Shape Trading’s consignment quality and Jebel Ali container turnaround time is unmatched in the industry.',
    partnerName: 'K. Patel & Sons',
    company: 'East African Electrical Wholesale Ltd.',
    country: 'Kenya',
    region: 'East Africa',
    verifiedWholesaler: true,
    yearsPartnered: '14+ Years Partner'
  },
  {
    id: 'rev-2',
    quote: 'The Marshal MA-4777 steam iron is our fastest moving SKU across multiple wholesale depots in Kumasi and Accra. The carton packaging withstands overland trucking with zero breakages, and the B2B direct order process via Dubai is exceptionally dependable.',
    partnerName: 'Alhaji Ibrahim Mensah',
    company: 'West Coast Hardware & Electronics Importers',
    country: 'Ghana',
    region: 'West Africa',
    verifiedWholesaler: true,
    yearsPartnered: '11 Years Partner'
  },
  {
    id: 'rev-3',
    quote: 'For our electrical retail dealers throughout Riyadh and the Eastern Province, Philux 50M cable reels and Marshal voltage stabilizers comply reliably with SASO requirements. Shape Trading understands wholesale volume, container consolidation, and punctual export documentation.',
    partnerName: 'Tariq Al-Ghamdi',
    company: 'Modern Gulf Electrical Trading Est.',
    country: 'Saudi Arabia',
    region: 'GCC / Middle East',
    verifiedWholesaler: true,
    yearsPartnered: '9 Years Partner'
  },
  {
    id: 'rev-4',
    quote: 'Operating across Dar es Salaam and inland up to Dodoma, durability is everything. When customers buy Marshal and Power King from our stores, they know it will last years. Dealing with Shape Trading from Dubai gives us direct access to factory-grade stock with steady availability.',
    partnerName: 'M. S. Mwamba',
    company: 'Kilimanjaro Electro Supplies',
    country: 'Tanzania',
    region: 'East Africa',
    verifiedWholesaler: true,
    yearsPartnered: '8 Years Partner'
  }
];

export const CONTACT_INFO = {
  companyName: 'Shape Trading L.L.C.',
  legalStatus: 'Wholesale Trading & Commercial Distribution (Limited Liability Company)',
  registeredLocation: 'Dubai, United Arab Emirates',
  phoneMain: '+971-4-3990012',
  phoneSales: '+971-4-2561779',
  phoneWhatsApp: '+971 56 626 6883',
  whatsAppRaw: '971566266883',
  email: 'info@shapet.ae',
  addressLine1: 'New Deira Building, Emirates NBD Bank Building',
  addressLine2: '90 Baniyas Road, Deira',
  city: 'Dubai',
  country: 'United Arab Emirates',
  googleMapsUrl: 'https://maps.google.com/?q=New+Deira+Building+Emirates+NBD+Baniyas+Road+Deira+Dubai',
  exportPort: 'Jebel Ali Port (FOB Dubai / CIF Available)',
  businessMotto: 'To provide quality products with durability to suit our customers homes, holding this motto as the heartbeat of our business throughout Africa and the Middle East.'
};
