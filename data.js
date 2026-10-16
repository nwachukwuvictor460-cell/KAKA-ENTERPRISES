/* ============================================================
   KAKA ENTERPRISES — Shared data & logic
   ------------------------------------------------------------
   This is the ONLY shared file every page loads.
   When the PHP backend is ready, the in-memory arrays in this
   file are replaced by fetch() calls to /api/*.php — nothing
   else on the site needs to change.
   ============================================================ */

window.KE = window.KE || {};

/* ============================================================
   1. CONFIG
   ============================================================ */
KE.CONFIG = {
  freeDeliveryFrom: 50000,
  flatDeliveryFee: 2500,
  wholesale: [
    { min: 1,  max: 9,        off: 0    },
    { min: 10, max: 49,       off: 0.09 },
    { min: 50, max: Infinity, off: 0.15 }
  ],
  business: {
    name: 'KAKA ENTERPRISES',
    tagline: 'Power. Connect. Deliver.',
    address: 'No 19 St Micheals Road, Aba, Abia State',
    phone: '07034652385'
  }
};

/* ============================================================
   2. CATEGORY TREE — dynamic, unlimited nesting
   ============================================================ */
KE.CATEGORIES = [
  {
    slug: 'phones-tablets', name: 'Phones & Tablets', icon: 'phone', order: 1, published: true,
    children: [
      { slug: 'smartphones',    name: 'Smartphones',    order: 1, published: true, children: [] },
      { slug: 'tablets',        name: 'Tablets',        order: 2, published: true, children: [] },
      { slug: 'feature-phones', name: 'Feature Phones', order: 3, published: true, children: [] }
    ]
  },
  {
    slug: 'phone-accessories', name: 'Phone Accessories', icon: 'headphones', order: 2, published: true,
    children: [
      {
        slug: 'charging-accessories', name: 'Charging Accessories', order: 1, published: true,
        children: [
          { slug: 'chargers',          name: 'Chargers',          order: 1, published: true, children: [] },
          { slug: 'power-banks',       name: 'Power Banks',       order: 2, published: true, children: [] },
          { slug: 'charging-cables',   name: 'Charging Cables',   order: 3, published: true, children: [] },
          { slug: 'wireless-chargers', name: 'Wireless Chargers', order: 4, published: true, children: [] }
        ]
      },
      {
        slug: 'audio-accessories', name: 'Audio Accessories', order: 2, published: true,
        children: [
          { slug: 'earbuds',    name: 'Earbuds',    order: 1, published: true, children: [] },
          { slug: 'headphones', name: 'Headphones', order: 2, published: true, children: [] },
          { slug: 'speakers',   name: 'Speakers',   order: 3, published: true, children: [] }
        ]
      },
      {
        slug: 'phone-spare-parts', name: 'Phone Spare Parts', order: 3, published: true,
        children: [
          { slug: 'phone-batteries',     name: 'Phone Batteries',     order: 1, published: true, children: [] },
          { slug: 'phone-casing-covers', name: 'Phone Casing Covers', order: 2, published: true, children: [] },
          { slug: 'screen-protectors',   name: 'Screen Protectors',   order: 3, published: true, children: [] }
        ]
      },
      {
        slug: 'rechargeable-fans', name: 'Rechargeable Fans', order: 4, published: true,
        children: [
          { slug: 'portable-fans',     name: 'Portable Fans',     order: 1, published: true, children: [] },
          { slug: 'rechargeable-fans', name: 'Rechargeable Fans', order: 2, published: true, children: [] }
        ]
      },
      {
        slug: 'phone-stands', name: 'Phone Stands', order: 5, published: true,
        children: [
          { slug: 'desk-phone-stands', name: 'Desk Phone Stands', order: 1, published: true, children: [] },
          { slug: 'car-phone-holders', name: 'Car Phone Holders', order: 2, published: true, children: [] }
        ]
      },
      { slug: 'selfie-sticks', name: 'Selfie Sticks', order: 6, published: true, children: [] }
    ]
  },
  {
    slug: 'computer-accessories', name: 'Computer Accessories', icon: 'laptop', order: 3, published: true,
    children: [
      {
        slug: 'computer-input', name: 'Input Devices', order: 1, published: true,
        children: [
          { slug: 'keyboards', name: 'Keyboards', order: 1, published: true, children: [] },
          { slug: 'mice',      name: 'Mice',      order: 2, published: true, children: [] }
        ]
      },
      {
        slug: 'computer-desk', name: 'Desk & Hubs', order: 2, published: true,
        children: [
          { slug: 'usb-hubs',      name: 'USB Hubs & Docks', order: 1, published: true, children: [] },
          { slug: 'laptop-stands', name: 'Laptop Stands',    order: 2, published: true, children: [] },
          { slug: 'webcams',       name: 'Webcams',          order: 3, published: true, children: [] }
        ]
      },
      {
        slug: 'computer-storage', name: 'Storage Devices', order: 3, published: true,
        children: [
          { slug: 'ssds',         name: 'SSDs',         order: 1, published: true, children: [] },
          { slug: 'memory-cards', name: 'Memory Cards', order: 2, published: true, children: [] },
          { slug: 'flash-drives', name: 'Flash Drives', order: 3, published: true, children: [] }
        ]
      }
    ]
  },
  {
    slug: 'audio-gadgets', name: 'Audio Gadgets', icon: 'speaker', order: 4, published: true,
    children: [
      { slug: 'bluetooth-speakers', name: 'Bluetooth Speakers', order: 1, published: true, children: [] },
      { slug: 'soundbars',          name: 'Soundbars',          order: 2, published: true, children: [] }
    ]
  },
  {
    slug: 'smart-gadgets', name: 'Smart Gadgets', icon: 'watch', order: 5, published: true,
    children: [
      { slug: 'smart-watches', name: 'Smart Watches', order: 1, published: true, children: [] },
      { slug: 'smart-bands',   name: 'Smart Bands',   order: 2, published: true, children: [] }
    ]
  }
];

/* ============================================================
   3. BRANDS
   ============================================================ */
KE.BRANDS = [
  { slug:'voltix',    name:'Voltix',    initial:'V', description:'Chargers, power banks and batteries.', tint:'--t1', active:true },
  { slug:'kord',      name:'Kord',      initial:'K', description:'Cables and adapters that last.',       tint:'--t2', active:true },
  { slug:'sona',      name:'Sona',      initial:'S', description:'Earbuds and headsets for every day.',  tint:'--t3', active:true },
  { slug:'peak',      name:'Peak',      initial:'P', description:'Cases, protectors and desk stands.',   tint:'--t4', active:true },
  { slug:'northloop', name:'Northloop', initial:'N', description:'Keyboards, mice and hubs.',            tint:'--t5', active:true },
  { slug:'arkstore',  name:'Arkstore',  initial:'A', description:'SSDs, flash drives and webcams.',      tint:'--t1', active:true },
  { slug:'oraimo',    name:'Oraimo',    initial:'O', description:'Chargers, audio and smart gadgets.',   tint:'--t2', active:true }
];

/* ============================================================
   4. PRODUCTS
   ============================================================ */
KE.PRODUCTS = [
  /* ---- Charging ---- */
  { slug:'gan-65w-usb-c-wall-charger', sku:'KE-CHG-001', name:'GaN 65W USB-C Wall Charger', categoryPath:['phone-accessories','charging-accessories','chargers'], brand:'voltix', price:18500, compare_at_price:22000, tag:'Sale', stock:24, rating:4.8, reviews:246, img:'photo-1583863788434-e58a36330cf0',
    short:'Compact GaN charger with dual USB-C and USB-A.',
    specs:[['Output','65W'],['Ports','2× USB-C, 1× USB-A'],['Protocol','USB-PD 3.0']] },
  { slug:'magsafe-10000mah-power-bank', sku:'KE-PWB-001', name:'MagSafe 10,000mAh Power Bank', categoryPath:['phone-accessories','charging-accessories','power-banks'], brand:'voltix', price:24900, compare_at_price:null, tag:'New', stock:12, rating:4.7, reviews:132, img:'photo-1609091839311-d5365f9ff1c5',
    short:'Wireless and wired charging in one slim pack.',
    specs:[['Capacity','10,000mAh'],['Wireless','15W'],['Wired','20W USB-C']] },

  /* ---- Cables ---- */
  { slug:'usb-c-to-usb-c-2m-cable', sku:'KE-CBL-001', name:'USB-C to USB-C 2m Cable', categoryPath:['phone-accessories','charging-accessories','charging-cables'], brand:'kord', price:4500, compare_at_price:6000, tag:'Sale', stock:60, rating:4.6, reviews:320, img:'photo-1589996448606-27d6a0f8e8e5',
    short:'Durable 100W braided cable.', specs:[['Length','2m'],['Power','100W'],['Data','480 Mbps']] },
  { slug:'lightning-braided-1m-cable', sku:'KE-CBL-002', name:'Lightning Braided 1m Cable', categoryPath:['phone-accessories','charging-accessories','charging-cables'], brand:'kord', price:3800, compare_at_price:null, tag:null, stock:42, rating:4.5, reviews:180, img:'photo-1601524909162-ae8725290836',
    short:'Fast-charging Lightning cable.', specs:[['Length','1m'],['Power','20W'],['Finish','Braided nylon']] },

  /* ---- Audio ---- */
  { slug:'true-wireless-earbuds-pro', sku:'KE-AUD-001', name:'True Wireless Earbuds Pro', categoryPath:['phone-accessories','audio-accessories','earbuds'], brand:'sona', price:32500, compare_at_price:38000, tag:'Popular', stock:8, rating:4.9, reviews:412, img:'photo-1590658268037-6bf12165a8df',
    short:'Hybrid ANC, 24h battery, Bluetooth 5.3.', specs:[['Battery','6h + 24h case'],['ANC','Hybrid'],['Bluetooth','5.3']] },
  { slug:'over-ear-studio-headset', sku:'KE-AUD-002', name:'Over-Ear Studio Headset', categoryPath:['phone-accessories','audio-accessories','headphones'], brand:'sona', price:42000, compare_at_price:null, tag:null, stock:5, rating:4.7, reviews:210, img:'photo-1583394838336-acd977736f90',
    short:'40-hour battery, 40mm drivers.', specs:[['Battery','40h'],['Driver','40mm'],['Mic','Detachable']] },

  /* ---- Protection & wearables ---- */
  { slug:'clear-shock-case-iphone', sku:'KE-CAS-001', name:'Clear Shock Case — iPhone', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:6500, compare_at_price:null, tag:'New', stock:30, rating:4.4, reviews:96, img:'photo-1601784551446-20c9e07cdbdb',
    short:'Anti-yellow clear TPU case.', specs:[['Drop rating','2m'],['Material','TPU + PC'],['Finish','Anti-yellow']] },
  { slug:'tempered-glass-2-pack', sku:'KE-SCP-001', name:'Tempered Glass Screen Protector', categoryPath:['phone-accessories','phone-spare-parts','screen-protectors'], brand:'peak', price:3200, compare_at_price:4500, tag:'Sale', stock:100, rating:4.6, reviews:540, img:'photo-1603313010021-c5f0e70f3f5d',
    short:'9H hardness, 2 pieces per pack.', specs:[['Hardness','9H'],['Pack','2 pieces'],['Fit','Full-cover']] },
  { slug:'smart-watch-band-nylon', sku:'KE-WB-001', name:'Smart Watch Band — Nylon', categoryPath:['smart-gadgets','smart-watches'], brand:'peak', price:5500, compare_at_price:null, tag:null, stock:22, rating:4.3, reviews:88, img:'photo-1546868871-7041f2a55e12',
    short:'22mm universal nylon band.', specs:[['Width','22mm'],['Fit','Universal'],['Washable','Yes']] },

  /* ---- Oraimo ---- */
  { slug:'oraimo-picbuddy-dual-camera-kids-camera', sku:'KE-KID-001', name:'Oraimo PicBuddy Dual Camera HD Kids Camera', categoryPath:['smart-gadgets'], brand:'oraimo', price:35900, compare_at_price:39890, tag:'Sale', stock:20, rating:4.7, reviews:120, img:'photo-1512756290469-ec264b7fbf87',
    short:'Dual-lens HD kids camera with 2.4" IPS screen.',
    specs:[['Model','OBC-293A'],['Battery','600mAh'],['Storage','4GB (16GB HD video)'],['Screen','2.4" IPS'],['Camera','48MP dual lens'],['Extras','Music, time-lapse, variable-speed recording']] },

  /* ---- Batteries ---- */
  { slug:'phone-battery-iphone-11-oem', sku:'KE-BAT-001', name:'Phone Battery — iPhone 11 (OEM)', categoryPath:['phone-accessories','phone-spare-parts','phone-batteries'], brand:'voltix', price:12500, compare_at_price:15000, tag:'Sale', stock:18, rating:4.5, reviews:96, img:'photo-1603314585442-ee3b3c16fbcf', short:'OEM-grade iPhone 11 replacement battery.', specs:[['Model','iPhone 11'],['Capacity','3,110mAh'],['Type','Li-Ion'],['Warranty','6 months']] },
  { slug:'phone-battery-iphone-12-pro', sku:'KE-BAT-002', name:'Phone Battery — iPhone 12 Pro', categoryPath:['phone-accessories','phone-spare-parts','phone-batteries'], brand:'voltix', price:14500, compare_at_price:null, tag:'New', stock:14, rating:4.6, reviews:64, img:'photo-1603314585442-ee3b3c16fbcf', short:'OEM-grade iPhone 12 Pro battery.', specs:[['Model','iPhone 12 Pro'],['Capacity','2,815mAh'],['Type','Li-Ion'],['Warranty','6 months']] },
  { slug:'phone-battery-samsung-a52', sku:'KE-BAT-003', name:'Phone Battery — Samsung A52', categoryPath:['phone-accessories','phone-spare-parts','phone-batteries'], brand:'voltix', price:9800, compare_at_price:12000, tag:'Sale', stock:26, rating:4.4, reviews:118, img:'photo-1580910051074-3eb694886505', short:'Samsung A52 replacement battery.', specs:[['Model','Samsung A52'],['Capacity','4,500mAh'],['Type','Li-Ion'],['Warranty','6 months']] },
  { slug:'phone-battery-samsung-s21', sku:'KE-BAT-004', name:'Phone Battery — Samsung S21', categoryPath:['phone-accessories','phone-spare-parts','phone-batteries'], brand:'voltix', price:13500, compare_at_price:null, tag:null, stock:11, rating:4.5, reviews:72, img:'photo-1580910051074-3eb694886505', short:'Samsung S21 replacement battery.', specs:[['Model','Samsung S21'],['Capacity','4,000mAh'],['Type','Li-Ion'],['Warranty','6 months']] },
  { slug:'phone-battery-tecno-camon-17', sku:'KE-BAT-005', name:'Phone Battery — Tecno Camon 17', categoryPath:['phone-accessories','phone-spare-parts','phone-batteries'], brand:'voltix', price:7500, compare_at_price:null, tag:'Popular', stock:30, rating:4.3, reviews:140, img:'photo-1580910051074-3eb694886505', short:'Tecno Camon 17 replacement battery.', specs:[['Model','Tecno Camon 17'],['Capacity','5,000mAh'],['Type','Li-Ion'],['Warranty','6 months']] },
  { slug:'phone-battery-infinix-hot-10', sku:'KE-BAT-006', name:'Phone Battery — Infinix Hot 10', categoryPath:['phone-accessories','phone-spare-parts','phone-batteries'], brand:'voltix', price:6800, compare_at_price:8500, tag:'Sale', stock:24, rating:4.2, reviews:88, img:'photo-1580910051074-3eb694886505', short:'Infinix Hot 10 replacement battery.', specs:[['Model','Infinix Hot 10'],['Capacity','5,200mAh'],['Type','Li-Ion'],['Warranty','6 months']] },

  /* ---- Casing covers ---- */
  { slug:'case-clear-shock-iphone-14', sku:'KE-CAS-002', name:'Clear Shock Case — iPhone 14', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:4500, compare_at_price:6000, tag:'Sale', stock:45, rating:4.6, reviews:220, img:'photo-1601784551446-20c9e07cdbdb', short:'Clear TPU case with 2m drop protection.', specs:[['Drop rating','2m'],['Material','TPU'],['Finish','Anti-yellow']] },
  { slug:'case-silicone-iphone-13', sku:'KE-CAS-003', name:'Silicone Case — iPhone 13', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:3800, compare_at_price:null, tag:null, stock:52, rating:4.5, reviews:180, img:'photo-1601784551446-20c9e07cdbdb', short:'Soft-touch silicone case.', specs:[['Material','Silicone'],['Lining','Microfiber'],['Finish','Matte']] },
  { slug:'case-leather-samsung-s22', sku:'KE-CAS-004', name:'Leather Case — Samsung S22', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:7500, compare_at_price:9500, tag:'Sale', stock:20, rating:4.7, reviews:96, img:'photo-1601784551446-20c9e07cdbdb', short:'Genuine leather finish case.', specs:[['Material','Leather'],['Lining','Suede'],['Finish','Matte']] },
  { slug:'case-rugged-armour-tecno', sku:'KE-CAS-005', name:'Rugged Armour Case — Tecno', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:5500, compare_at_price:null, tag:'New', stock:34, rating:4.5, reviews:120, img:'photo-1601784551446-20c9e07cdbdb', short:'Heavy-duty case with reinforced corners.', specs:[['Drop rating','3m'],['Material','TPU + PC'],['Finish','Textured grip']] },
  { slug:'case-flip-cover-infinix', sku:'KE-CAS-006', name:'Flip Cover — Infinix', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:4200, compare_at_price:5200, tag:'Sale', stock:38, rating:4.4, reviews:140, img:'photo-1601784551446-20c9e07cdbdb', short:'Full-body flip cover with card slot.', specs:[['Material','PU Leather'],['Slot','Card + cash'],['Finish','Soft-touch']] },
  { slug:'case-transparent-shock-xiaomi', sku:'KE-CAS-007', name:'Transparent Shock Case — Xiaomi', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:3500, compare_at_price:null, tag:null, stock:60, rating:4.5, reviews:186, img:'photo-1601784551446-20c9e07cdbdb', short:'Ultra-slim transparent case.', specs:[['Material','TPU'],['Drop rating','1.5m'],['Finish','Crystal clear']] },
  { slug:'case-magsafe-iphone-15-pro', sku:'KE-CAS-008', name:'MagSafe Case — iPhone 15 Pro', categoryPath:['phone-accessories','phone-spare-parts','phone-casing-covers'], brand:'peak', price:8500, compare_at_price:null, tag:'Popular', stock:16, rating:4.8, reviews:92, img:'photo-1601784551446-20c9e07cdbdb', short:'MagSafe-compatible case with strong magnets.', specs:[['Material','TPU + magnets'],['MagSafe','Yes'],['Finish','Anti-fingerprint']] },

  /* ---- Computer ---- */
  { slug:'mechanical-keyboard-75', sku:'KE-KB-001', name:'Mechanical Keyboard 75%', categoryPath:['computer-accessories','computer-input','keyboards'], brand:'northloop', price:46500, compare_at_price:52000, tag:'Popular', stock:7, rating:4.8, reviews:310, img:'photo-1587829741301-dc798b83add3', short:'Hot-swap 75% mechanical keyboard.', specs:[['Layout','75%'],['Switch','Hot-swap'],['Connection','BT + USB-C']] },
  { slug:'silent-wireless-mouse', sku:'KE-MS-001', name:'Silent Wireless Mouse', categoryPath:['computer-accessories','computer-input','mice'], brand:'northloop', price:9800, compare_at_price:null, tag:null, stock:18, rating:4.6, reviews:220, img:'photo-1527814050087-3793815479db', short:'Silent-click wireless mouse.', specs:[['DPI','1600'],['Battery','12 months'],['Buttons','6']] },
  { slug:'usb-c-7in1-hub', sku:'KE-HUB-001', name:'USB-C 7-in-1 Hub', categoryPath:['computer-accessories','computer-desk','usb-hubs'], brand:'northloop', price:27500, compare_at_price:31000, tag:'Sale', stock:14, rating:4.7, reviews:188, img:'photo-1625842268584-8f3296236761', short:'7-port USB-C hub with 4K HDMI.', specs:[['Ports','7'],['HDMI','4K 60Hz'],['Power','100W PD']] },
  { slug:'laptop-stand-aluminium', sku:'KE-STD-001', name:'Aluminium Laptop Stand', categoryPath:['computer-accessories','computer-desk','laptop-stands'], brand:'peak', price:15900, compare_at_price:null, tag:null, stock:11, rating:4.5, reviews:140, img:'photo-1618384887929-16ec33fab9ef', short:'Adjustable aluminium laptop stand.', specs:[['Material','Aluminium'],['Fit','11–17"'],['Foldable','Yes']] },
  { slug:'1080p-webcam-with-mic', sku:'KE-CAM-001', name:'1080p Webcam with Mic', categoryPath:['computer-accessories','computer-desk','webcams'], brand:'arkstore', price:21500, compare_at_price:null, tag:'New', stock:9, rating:4.4, reviews:96, img:'photo-1587826080692-f439cd0b70da', short:'Full HD webcam with dual mic.', specs:[['Resolution','1080p 30fps'],['Mic','Dual'],['Mount','Clip + tripod']] },
  { slug:'nvme-ssd-1tb-enclosure', sku:'KE-SSD-001', name:'NVMe SSD 1TB + Enclosure', categoryPath:['computer-accessories','computer-storage','ssds'], brand:'arkstore', price:78000, compare_at_price:89000, tag:'Sale', stock:4, rating:4.9, reviews:210, img:'photo-1591370874773-6702e8f12fd8', short:'1TB NVMe SSD with USB 3.2 enclosure.', specs:[['Capacity','1TB'],['Interface','USB 3.2 Gen 2'],['Speed','1050 MB/s']] },
  { slug:'usb-c-dock-dual-hdmi', sku:'KE-DOCK-001', name:'USB-C Dock — Dual HDMI', categoryPath:['computer-accessories','computer-desk','usb-hubs'], brand:'northloop', price:58000, compare_at_price:null, tag:null, stock:6, rating:4.6, reviews:110, img:'photo-1618384887929-16ec33fab9ef', short:'10-port dock with dual 4K HDMI.', specs:[['HDMI','2× 4K 30Hz'],['Ports','10'],['Ethernet','Gigabit']] }
];

/* ============================================================
   5. HELPERS
   ============================================================ */
KE.money = n => '₦' + (Number(n) || 0).toLocaleString('en-NG', { maximumFractionDigits: 0 });

KE.esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[c]));

KE.img = (id, w = 500) => {
  if (!id) return '';
  if (id.startsWith('assets/') || id.startsWith('http')) return id;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
};

KE.slugify = s => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

KE.tierFor    = qty => KE.CONFIG.wholesale.find(t => qty >= t.min && qty <= t.max) || KE.CONFIG.wholesale[0];
KE.unitPrice  = (p, qty = 1) => Math.round(p.price * (1 - KE.tierFor(qty).off));

KE.findProduct = slug => KE.PRODUCTS.find(p => p.slug === slug) || null;
KE.findBrand   = slug => KE.BRANDS.find(b => b.slug === slug) || null;
KE.brandName   = slug => KE.findBrand(slug)?.name || slug;

KE.findCategory = function (slug, list = KE.CATEGORIES) {
  for (const c of list) {
    if (c.slug === slug) return c;
    if (c.children?.length) {
      const f = KE.findCategory(slug, c.children);
      if (f) return f;
    }
  }
  return null;
};

KE.categoryPath = function (slug, list = KE.CATEGORIES, trail = []) {
  for (const c of list) {
    const next = [...trail, c];
    if (c.slug === slug) return next;
    if (c.children?.length) {
      const f = KE.categoryPath(slug, c.children, next);
      if (f) return f;
    }
  }
  return null;
};

KE.productsInCategory = catSlug => KE.PRODUCTS.filter(p => p.categoryPath.includes(catSlug));
KE.productsByBrand    = brandSlug => KE.PRODUCTS.filter(p => p.brand === brandSlug);

KE.searchProducts = function (q) {
  if (!q) return KE.PRODUCTS;
  const term = q.toLowerCase().trim();
  return KE.PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(term) ||
    (p.sku || '').toLowerCase().includes(term) ||
    (p.short || '').toLowerCase().includes(term) ||
    (p.specs || []).some(([k, v]) =>
      String(k).toLowerCase().includes(term) ||
      String(v).toLowerCase().includes(term)
    )
  );
};

KE.sortProducts = function (list, sort) {
  const copy = [...list];
  switch (sort) {
    case 'low':     return copy.sort((a, b) => a.price - b.price);
    case 'high':    return copy.sort((a, b) => b.price - a.price);
    case 'name':    return copy.sort((a, b) => a.name.localeCompare(b.name));
    case 'popular': return copy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'new':     return copy.sort((a, b) => (b.tag === 'New' ? 1 : 0) - (a.tag === 'New' ? 1 : 0));
    default:        return copy;
  }
};

KE.featured    = (n = 8) => KE.sortProducts(KE.PRODUCTS.filter(p => p.tag), 'popular').slice(0, n);
KE.newArrivals = (n = 5) => KE.PRODUCTS.filter(p => p.tag === 'New' || p.tag === 'Popular').slice(0, n);
KE.topRated    = (n = 4) => KE.sortProducts(KE.PRODUCTS, 'popular').slice(0, n);
KE.onSale      = (n = 6) => KE.PRODUCTS.filter(p => p.compare_at_price).slice(0, n);

/* ============================================================
   6. CART — localStorage backed
   ============================================================ */
KE.cart = (function () {
  const KEY = 'kaka:cart:v1';

  function read()  { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
  function write(c) {
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {}
    document.dispatchEvent(new CustomEvent('cart:updated'));
  }

  return {
    items() { return read(); },
    count() { return Object.values(read()).reduce((a, b) => a + b, 0); },
    add(slug, qty = 1) {
      const p = KE.findProduct(slug);
      if (!p) return;
      const c = read();
      const next = Math.min((c[slug] || 0) + qty, p.stock);
      c[slug] = next;
      write(c);
    },
    setQty(slug, qty) {
      const p = KE.findProduct(slug);
      if (!p) return;
      const c = read();
      const n = Math.max(0, Math.min(qty, p.stock));
      if (n <= 0) delete c[slug]; else c[slug] = n;
      write(c);
    },
    remove(slug) { const c = read(); delete c[slug]; write(c); },
    clear()      { write({}); },
    totals() {
      const c = read();
      let subtotal = 0;
      let wholesale = false;
      for (const [slug, qty] of Object.entries(c)) {
        const p = KE.findProduct(slug);
        if (!p) continue;
        const unit = KE.unitPrice(p, qty);
        subtotal += unit * qty;
        if (KE.tierFor(qty).off > 0) wholesale = true;
      }
      const free = subtotal >= KE.CONFIG.freeDeliveryFrom;
      const delivery = subtotal === 0 ? 0 : (free ? 0 : KE.CONFIG.flatDeliveryFee);
      return { subtotal, delivery, total: subtotal + delivery, free, wholesale };
    }
  };
})();

/* ============================================================
   7. API LAYER — placeholder
   ------------------------------------------------------------
   Right now these return in-memory data. When PHP is live,
   replace each function body with:
       return fetch('/api/products.php').then(r => r.json());
   No other file changes.
   ============================================================ */
KE.api = {
  async getCategories()         { return KE.CATEGORIES; },
  async getCategory(slug)       { return KE.findCategory(slug); },
  async getBrands()             { return KE.BRANDS; },
  async getBrand(slug)          { return KE.findBrand(slug); },
  async getProducts(filter = {}) {
    let list = KE.PRODUCTS;
    if (filter.cat)   list = list.filter(p => p.categoryPath.includes(filter.cat));
    if (filter.brand) list = list.filter(p => p.brand === filter.brand);
    if (filter.q)     list = KE.searchProducts(filter.q);
    if (filter.tag)   list = list.filter(p => p.tag === filter.tag);
    if (filter.sort)  list = KE.sortProducts(list, filter.sort);
    return list;
  },
  async getProduct(slug)        { return KE.findProduct(slug); },
  async createOrder(payload) {
    /* TODO: POST /api/order.php when PHP is ready.
       For now, save to localStorage and return a ref. */
    const ref = 'WW-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    const order = { ...payload, ref, createdAt: new Date().toISOString() };
    try {
      const orders = JSON.parse(localStorage.getItem('kaka:orders') || '[]');
      orders.push(order);
      localStorage.setItem('kaka:orders', JSON.stringify(orders));
    } catch {}
    return order;
  },
  async getOrder(ref) {
    try {
      const orders = JSON.parse(localStorage.getItem('kaka:orders') || '[]');
      return orders.find(o => o.ref === ref) || null;
    } catch { return null; }
  }
};

/* ============================================================
   8. TOAST — shared across pages
   ============================================================ */
KE.toast = function (msg, kind = '') {
  let stack = document.getElementById('toastStack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'toast-stack';
    stack.setAttribute('aria-live', 'polite');
    document.body.appendChild(stack);
  }
  const el = document.createElement('div');
  el.className = 'toast' + (kind ? ' toast--' + kind : '');
  el.textContent = msg;
  stack.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity .2s ease, transform .2s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => el.remove(), 240);
  }, 2200);
};