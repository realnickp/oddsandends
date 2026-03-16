export interface QuizOption {
  label: string
  value: string
}

export interface QuizStep {
  id: string
  question: string
  type: 'single-select' | 'multi-select' | 'text' | 'number'
  options?: QuizOption[]
  placeholder?: string
}

export interface ServiceQuizConfig {
  serviceSlug: string
  serviceName: string
  headline: string
  subtitle: string
  steps: QuizStep[]
}

export const quizConfigs: Record<string, ServiceQuizConfig> = {
  'tv-mounting': {
    serviceSlug: 'tv-mounting',
    serviceName: 'TV Mounting',
    headline: 'Plan Your TV Mounting',
    subtitle: 'A few quick questions so Dan can prep the right hardware',
    steps: [
      {
        id: 'wall-type',
        question: 'What type of wall?',
        type: 'single-select',
        options: [
          { label: '🪨 Drywall', value: 'drywall' },
          { label: '🧱 Brick / Stone', value: 'brick-stone' },
          { label: '🏠 Plaster', value: 'plaster' },
          { label: '🔲 Concrete', value: 'concrete' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
      {
        id: 'tv-size',
        question: 'How big is your TV?',
        type: 'single-select',
        options: [
          { label: '📺 Under 40"', value: 'under-40' },
          { label: '📺 40–55"', value: '40-55' },
          { label: '📺 55–65"', value: '55-65' },
          { label: '📺 65–75"', value: '65-75' },
          { label: '📺 75"+', value: '75-plus' },
        ],
      },
      {
        id: 'mount-type',
        question: 'What kind of mount?',
        type: 'single-select',
        options: [
          { label: '📐 Fixed (flat to wall)', value: 'fixed' },
          { label: '↕️ Tilt', value: 'tilt' },
          { label: '🔄 Full-motion / Swivel', value: 'full-motion' },
          { label: '🤷 Not sure — Dan can help', value: 'not-sure' },
        ],
      },
      {
        id: 'cable-management',
        question: 'Want the cables hidden?',
        type: 'single-select',
        options: [
          { label: '✨ Yes, hide cables in the wall', value: 'in-wall' },
          { label: '👍 Basic cable management', value: 'basic' },
          { label: '🚫 Not needed', value: 'none' },
        ],
      },
    ],
  },

  'drywall-repair': {
    serviceSlug: 'drywall-repair',
    serviceName: 'Drywall Repair',
    headline: 'Plan Your Drywall Repair',
    subtitle: 'Help Dan understand the damage so he can come prepared',
    steps: [
      {
        id: 'damage-type',
        question: 'What kind of damage?',
        type: 'single-select',
        options: [
          { label: '🔘 Small holes / Nail pops', value: 'small-holes' },
          { label: '👊 Medium hole (fist-size)', value: 'medium-hole' },
          { label: '🕳️ Large hole or section', value: 'large-hole' },
          { label: '📏 Cracks along seams', value: 'cracks' },
          { label: '💧 Water damage', value: 'water-damage' },
          { label: '📋 Multiple areas', value: 'multiple' },
        ],
      },
      {
        id: 'num-areas',
        question: 'How many spots need repair?',
        type: 'single-select',
        options: [
          { label: '1️⃣ Just one spot', value: '1' },
          { label: '2️⃣ 2–3 spots', value: '2-3' },
          { label: '🔢 4 or more spots', value: '4-plus' },
          { label: '🏠 Full wall or room', value: 'full-wall' },
        ],
      },
      {
        id: 'paint-match',
        question: 'Need paint matching after?',
        type: 'single-select',
        options: [
          { label: '🎨 Yes, match and paint', value: 'yes' },
          { label: '🚫 No, just patch it', value: 'no' },
          { label: '🤷 Not sure yet', value: 'not-sure' },
        ],
      },
    ],
  },

  'door-installation': {
    serviceSlug: 'door-installation',
    serviceName: 'Door Installation',
    headline: 'Plan Your Door Installation',
    subtitle: 'Tell Dan about the door project so he can come ready',
    steps: [
      {
        id: 'door-type',
        question: 'What type of door?',
        type: 'single-select',
        options: [
          { label: '🚪 Interior door', value: 'interior' },
          { label: '🏠 Exterior door', value: 'exterior' },
          { label: '📦 Closet / Bi-fold', value: 'closet' },
          { label: '🔲 Pocket door', value: 'pocket' },
          { label: '🚜 Barn-style sliding', value: 'barn' },
        ],
      },
      {
        id: 'door-style',
        question: 'Pre-hung or slab?',
        type: 'single-select',
        options: [
          { label: '📦 Pre-hung (with frame)', value: 'pre-hung' },
          { label: '🪵 Slab only (door only)', value: 'slab' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
      {
        id: 'num-doors',
        question: 'How many doors?',
        type: 'single-select',
        options: [
          { label: '1️⃣ Just one', value: '1' },
          { label: '2️⃣ 2–3 doors', value: '2-3' },
          { label: '🔢 4 or more', value: '4-plus' },
        ],
      },
    ],
  },

  'fence-repair': {
    serviceSlug: 'fence-repair',
    serviceName: 'Fence Repair',
    headline: 'Plan Your Fence Repair',
    subtitle: 'Quick details so Dan knows what tools and materials to bring',
    steps: [
      {
        id: 'fence-material',
        question: "What's your fence made of?",
        type: 'single-select',
        options: [
          { label: '🪵 Wood', value: 'wood' },
          { label: '⬜ Vinyl', value: 'vinyl' },
          { label: '🔗 Chain-link', value: 'chain-link' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
      {
        id: 'fence-issue',
        question: "What's the issue?",
        type: 'single-select',
        options: [
          { label: '↗️ Leaning posts', value: 'leaning' },
          { label: '💔 Broken boards', value: 'broken-boards' },
          { label: '🚪 Sagging gate', value: 'sagging-gate' },
          { label: '⬇️ Full section down', value: 'section-down' },
          { label: '📋 Multiple issues', value: 'multiple' },
        ],
      },
      {
        id: 'fence-scope',
        question: 'How much fence is affected?',
        type: 'single-select',
        options: [
          { label: '📏 Small (1–2 panels)', value: 'small' },
          { label: '📐 Medium (3–5 panels)', value: 'medium' },
          { label: '📏 Large section (6+)', value: 'large' },
        ],
      },
    ],
  },

  'deck-repair': {
    serviceSlug: 'deck-repair',
    serviceName: 'Deck Repair',
    headline: 'Plan Your Deck Repair',
    subtitle: 'Help Dan assess your deck before the visit',
    steps: [
      {
        id: 'deck-issue',
        question: 'What needs fixing?',
        type: 'single-select',
        options: [
          { label: '🪵 Boards (cracked/rotted)', value: 'boards' },
          { label: '🔩 Railing / Balusters', value: 'railing' },
          { label: '🪜 Stairs / Steps', value: 'stairs' },
          { label: '🏗️ Structural support', value: 'structural' },
          { label: '📋 Multiple issues', value: 'multiple' },
        ],
      },
      {
        id: 'deck-material',
        question: 'Deck material?',
        type: 'single-select',
        options: [
          { label: '🪵 Wood (cedar, pine, etc.)', value: 'wood' },
          { label: '🔲 Composite (Trex, etc.)', value: 'composite' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
      {
        id: 'deck-size',
        question: 'Approximate deck size?',
        type: 'single-select',
        options: [
          { label: '📏 Small (under 100 sq ft)', value: 'small' },
          { label: '📐 Medium (100–300 sq ft)', value: 'medium' },
          { label: '🏗️ Large (300+ sq ft)', value: 'large' },
        ],
      },
    ],
  },

  'furniture-assembly': {
    serviceSlug: 'furniture-assembly',
    serviceName: 'Furniture Assembly',
    headline: 'Plan Your Furniture Assembly',
    subtitle: "Tell Dan what you've got so he can estimate time",
    steps: [
      {
        id: 'furniture-brand',
        question: 'Where did you buy it?',
        type: 'single-select',
        options: [
          { label: '🟡 IKEA', value: 'ikea' },
          { label: '🛋️ Wayfair', value: 'wayfair' },
          { label: '📦 Amazon', value: 'amazon' },
          { label: '🏬 Other retailer', value: 'other' },
        ],
      },
      {
        id: 'furniture-type',
        question: 'What type of furniture?',
        type: 'single-select',
        options: [
          { label: '🖥️ Desk / Office', value: 'desk' },
          { label: '🛏️ Bed frame', value: 'bed' },
          { label: '📚 Bookcase / Shelving', value: 'bookcase' },
          { label: '🍽️ Table / Chairs', value: 'table' },
          { label: '📺 Entertainment center', value: 'entertainment' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'furniture-complexity',
        question: 'How complex is the build?',
        type: 'single-select',
        options: [
          { label: '📦 Simple — small item, under 20 parts', value: 'simple' },
          { label: '🔧 Moderate — medium item, 20–50 parts', value: 'moderate' },
          { label: '🛠️ Complex — large item, 50+ parts or wall-anchoring needed', value: 'complex' },
          { label: '🤷 Not sure — I\'ll send photos', value: 'not-sure' },
        ],
      },
    ],
  },

  'light-fixture-installation': {
    serviceSlug: 'light-fixture-installation',
    serviceName: 'Light Fixture Installation',
    headline: 'Plan Your Light Fixture Install',
    subtitle: 'Quick details so Dan comes with the right tools',
    steps: [
      {
        id: 'fixture-type',
        question: 'What type of fixture?',
        type: 'single-select',
        options: [
          { label: '🪫 Chandelier', value: 'chandelier' },
          { label: '💡 Pendant', value: 'pendant' },
          { label: '🔦 Recessed / Can light', value: 'recessed' },
          { label: '🪞 Vanity light', value: 'vanity' },
          { label: '🕯️ Sconce / Wall light', value: 'sconce' },
          { label: '💡 Flush mount / Ceiling', value: 'flush-mount' },
        ],
      },
      {
        id: 'fixture-qty',
        question: 'How many fixtures?',
        type: 'single-select',
        options: [
          { label: '1️⃣ Just one', value: '1' },
          { label: '2️⃣ 2–3 fixtures', value: '2-3' },
          { label: '🔢 4 or more', value: '4-plus' },
        ],
      },
      {
        id: 'existing-wiring',
        question: 'Is there existing wiring?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, replacing old fixture', value: 'replacing' },
          { label: '🆕 New location needed', value: 'new-location' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
    ],
  },

  'bathroom-renovation': {
    serviceSlug: 'bathroom-renovation',
    serviceName: 'Bathroom Renovation',
    headline: 'Plan Your Bathroom Project',
    subtitle: 'Check off everything you need and Dan will put together a complete estimate',
    steps: [
      {
        id: 'bathroom-scope',
        question: 'What kind of project is this?',
        type: 'single-select',
        options: [
          { label: '🏗️ Full bathroom refresh', value: 'full-refresh' },
          { label: '🔄 Update a few things', value: 'partial' },
          { label: '🔧 One fixture or repair', value: 'single' },
          { label: '🤔 Not sure — want Dan\'s input', value: 'unsure' },
        ],
      },
      {
        id: 'bathroom-items',
        question: 'What needs work?',
        type: 'multi-select',
        options: [
          { label: '🚽 Toilet', value: 'toilet' },
          { label: '🪞 Vanity & sink', value: 'vanity' },
          { label: '🚰 Faucet', value: 'faucet' },
          { label: '🚿 Shower head / Shower fixtures', value: 'shower-fixtures' },
          { label: '🛁 Tub or shower surround', value: 'tub-surround' },
          { label: '🧱 Wall tile', value: 'wall-tile' },
          { label: '🔲 Floor tile / Flooring', value: 'flooring' },
          { label: '🪞 Mirror', value: 'mirror' },
          { label: '💡 Lighting', value: 'lighting' },
          { label: '🌀 Exhaust fan', value: 'exhaust-fan' },
          { label: '🧴 Accessories (towel bars, etc.)', value: 'accessories' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'bathroom-which',
        question: 'Which bathroom?',
        type: 'single-select',
        options: [
          { label: '🛏️ Master bathroom', value: 'master' },
          { label: '🚿 Guest / Hall bathroom', value: 'guest' },
          { label: '🚽 Half bath / Powder room', value: 'half-bath' },
          { label: '🏚️ Basement bathroom', value: 'basement' },
          { label: '📦 Multiple bathrooms', value: 'multiple' },
        ],
      },
      {
        id: 'bathroom-materials',
        question: 'Do you have materials and fixtures already?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, everything is purchased', value: 'have-all' },
          { label: '🛒 Some things, still shopping', value: 'have-some' },
          { label: '🤷 No, need Dan\'s recommendations', value: 'need-help' },
        ],
      },
    ],
  },

  'kitchen-renovation': {
    serviceSlug: 'kitchen-renovation',
    serviceName: 'Kitchen Renovation',
    headline: 'Plan Your Kitchen Project',
    subtitle: 'Check off what you need and Dan will put together a complete estimate',
    steps: [
      {
        id: 'kitchen-scope',
        question: 'What kind of project is this?',
        type: 'single-select',
        options: [
          { label: '🏗️ Full kitchen refresh', value: 'full-refresh' },
          { label: '🔄 Update a few things', value: 'partial' },
          { label: '🔧 One item or repair', value: 'single' },
          { label: '🤔 Not sure — want Dan\'s input', value: 'unsure' },
        ],
      },
      {
        id: 'kitchen-items',
        question: 'What needs work?',
        type: 'multi-select',
        options: [
          { label: '🗄️ Cabinets', value: 'cabinets' },
          { label: '🪨 Countertops', value: 'countertops' },
          { label: '🧱 Backsplash', value: 'backsplash' },
          { label: '🔲 Flooring', value: 'flooring' },
          { label: '🚰 Sink & faucet', value: 'sink-faucet' },
          { label: '🍳 Appliance installation', value: 'appliances' },
          { label: '🏝️ Island or cart', value: 'island' },
          { label: '💡 Lighting (under-cabinet, fixtures)', value: 'lighting' },
          { label: '🔩 Cabinet hardware', value: 'hardware' },
          { label: '🗃️ Pantry / Storage solutions', value: 'storage' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'kitchen-cabinets',
        question: 'If cabinets are involved, what\'s the plan?',
        type: 'single-select',
        options: [
          { label: '🆕 Full new cabinet install', value: 'full-install' },
          { label: '🔄 Replace a few cabinets', value: 'partial' },
          { label: '🎨 Reface or paint existing', value: 'reface' },
          { label: '🔩 Just new hardware', value: 'hardware-only' },
          { label: '⏭️ No cabinet work needed', value: 'skip' },
        ],
      },
      {
        id: 'kitchen-materials',
        question: 'Do you have materials already?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, everything is purchased', value: 'have-all' },
          { label: '🛒 Some things, still shopping', value: 'have-some' },
          { label: '🤷 No, need Dan\'s recommendations', value: 'need-help' },
        ],
      },
    ],
  },

  'flooring': {
    serviceSlug: 'flooring',
    serviceName: 'Flooring Installation',
    headline: 'Plan Your Flooring Project',
    subtitle: 'A few details so Dan can give you an accurate quote',
    steps: [
      {
        id: 'flooring-material',
        question: 'What type of flooring?',
        type: 'single-select',
        options: [
          { label: '🪵 Luxury vinyl plank (LVP)', value: 'lvp' },
          { label: '🔲 Laminate', value: 'laminate' },
          { label: '🌳 Engineered hardwood', value: 'engineered-hardwood' },
          { label: '🔲 Floor tile (ceramic / porcelain)', value: 'floor-tile' },
          { label: '🤔 Not sure yet', value: 'unsure' },
        ],
      },
      {
        id: 'flooring-scope',
        question: 'What needs to be done?',
        type: 'single-select',
        options: [
          { label: '🏗️ New flooring installation', value: 'new-install' },
          { label: '🔄 Replace existing flooring', value: 'replace' },
          { label: '🔧 Repair damaged sections', value: 'repair' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'flooring-room',
        question: 'Which area of the home?',
        type: 'multi-select',
        options: [
          { label: '🍳 Kitchen', value: 'kitchen' },
          { label: '🚿 Bathroom', value: 'bathroom' },
          { label: '🛋️ Living room / Family room', value: 'living' },
          { label: '🛏️ Bedroom', value: 'bedroom' },
          { label: '🚪 Hallway / Entryway', value: 'hallway' },
          { label: '🏚️ Basement', value: 'basement' },
          { label: '📦 Other / Multiple rooms', value: 'other' },
        ],
      },
      {
        id: 'flooring-size',
        question: 'Approximate area?',
        type: 'single-select',
        options: [
          { label: '📏 Small — one room or less', value: 'small' },
          { label: '📐 Medium — a couple of rooms', value: 'medium' },
          { label: '🏗️ Large — most of a floor or full home', value: 'large' },
          { label: '🤷 Not sure', value: 'unsure' },
        ],
      },
      {
        id: 'flooring-existing',
        question: 'What\'s on the floor now?',
        type: 'single-select',
        options: [
          { label: '🧶 Carpet', value: 'carpet' },
          { label: '🪵 Hardwood or laminate', value: 'hardwood' },
          { label: '🔲 Tile', value: 'tile' },
          { label: '📄 Sheet vinyl / Linoleum', value: 'vinyl' },
          { label: '🏗️ Bare subfloor / Concrete', value: 'subfloor' },
          { label: '🤷 Not sure', value: 'unsure' },
        ],
      },
    ],
  },

  'tile-work': {
    serviceSlug: 'tile-work',
    serviceName: 'Tile Work',
    headline: 'Plan Your Tile Project',
    subtitle: 'Tell Dan about your tile job so he can give you an accurate quote',
    steps: [
      {
        id: 'tile-type',
        question: 'What kind of tile project?',
        type: 'single-select',
        options: [
          { label: '🍳 Kitchen backsplash', value: 'backsplash' },
          { label: '🚿 Shower surround / Tub surround', value: 'shower' },
          { label: '🧱 Accent wall', value: 'accent-wall' },
          { label: '🔲 Floor tile', value: 'floor-tile' },
          { label: '🔧 Regrout / Repair existing tile', value: 'repair' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'tile-material',
        question: 'What tile material?',
        type: 'single-select',
        options: [
          { label: '🔲 Ceramic', value: 'ceramic' },
          { label: '💎 Porcelain', value: 'porcelain' },
          { label: '✨ Glass / Mosaic', value: 'glass' },
          { label: '🪨 Natural stone', value: 'stone' },
          { label: '🤔 Not sure yet', value: 'unsure' },
        ],
      },
      {
        id: 'tile-size',
        question: 'How big is the area?',
        type: 'single-select',
        options: [
          { label: '📏 Small — a backsplash or small repair', value: 'small' },
          { label: '📐 Medium — a shower or accent wall', value: 'medium' },
          { label: '🏗️ Large — full bathroom or large floor area', value: 'large' },
        ],
      },
      {
        id: 'tile-condition',
        question: 'Current condition of the area?',
        type: 'single-select',
        options: [
          { label: '🆕 Bare wall / new construction', value: 'bare' },
          { label: '🔄 Existing tile that needs replacing', value: 'replace' },
          { label: '🔧 Existing tile with grout or damage issues', value: 'damaged' },
          { label: '🤷 Not sure', value: 'unsure' },
        ],
      },
    ],
  },

  'painting': {
    serviceSlug: 'painting',
    serviceName: 'Painting',
    headline: 'Plan Your Painting Project',
    subtitle: 'A few details so Dan can give you an accurate quote',
    steps: [
      {
        id: 'paint-scope',
        question: 'What needs painting?',
        type: 'single-select',
        options: [
          { label: '🏠 Single room', value: 'single-room' },
          { label: '🏘️ 2–3 rooms', value: '2-3-rooms' },
          { label: '🏢 Full interior', value: 'full-interior' },
          { label: '🖌️ Touch-ups only', value: 'touch-ups' },
          { label: '🚪 Trim / Doors / Cabinets', value: 'trim' },
        ],
      },
      {
        id: 'wall-condition',
        question: 'Current wall condition?',
        type: 'single-select',
        options: [
          { label: '✅ Good — just refreshing color', value: 'good' },
          { label: '🔧 Some patching needed', value: 'some-patching' },
          { label: '🚧 Significant prep needed', value: 'significant-prep' },
        ],
      },
      {
        id: 'color-situation',
        question: 'Have you picked colors?',
        type: 'single-select',
        options: [
          { label: '🎨 Yes, colors are picked', value: 'picked' },
          { label: '🤔 Still deciding', value: 'deciding' },
          { label: '🔄 Same color, just refreshing', value: 'same-color' },
        ],
      },
    ],
  },

  'shelving-installation': {
    serviceSlug: 'shelving-installation',
    serviceName: 'Shelving Installation',
    headline: 'Plan Your Shelving Install',
    subtitle: 'Quick details about your shelving project',
    steps: [
      {
        id: 'shelf-type',
        question: 'What type of shelves?',
        type: 'single-select',
        options: [
          { label: '🪵 Floating shelves', value: 'floating' },
          { label: '📐 Bracket shelves', value: 'bracket' },
          { label: '🗄️ Pantry / Closet system', value: 'pantry' },
          { label: '✨ Custom built', value: 'custom' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'shelf-qty',
        question: 'How many shelves?',
        type: 'single-select',
        options: [
          { label: '1️⃣ 1–2 shelves', value: '1-2' },
          { label: '3️⃣ 3–5 shelves', value: '3-5' },
          { label: '🔢 6 or more', value: '6-plus' },
        ],
      },
      {
        id: 'shelf-wall',
        question: 'Wall type?',
        type: 'single-select',
        options: [
          { label: '🪨 Drywall', value: 'drywall' },
          { label: '🧱 Brick / Masonry', value: 'brick' },
          { label: '🏠 Plaster', value: 'plaster' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
    ],
  },

  'cabinet-installation': {
    serviceSlug: 'cabinet-installation',
    serviceName: 'Cabinet Installation',
    headline: 'Plan Your Cabinet Install',
    subtitle: 'Help Dan understand the cabinet project',
    steps: [
      {
        id: 'cabinet-type',
        question: 'What type of cabinets?',
        type: 'single-select',
        options: [
          { label: '🍳 Kitchen wall cabinets', value: 'kitchen-wall' },
          { label: '🗄️ Kitchen base cabinets', value: 'kitchen-base' },
          { label: '🚿 Bathroom vanity', value: 'bathroom' },
          { label: '📦 Storage / Utility', value: 'storage' },
          { label: '🟡 IKEA cabinets', value: 'ikea' },
        ],
      },
      {
        id: 'cabinet-scope',
        question: 'How many cabinets?',
        type: 'single-select',
        options: [
          { label: '1️⃣ 1–2 cabinets', value: '1-2' },
          { label: '3️⃣ 3–5 cabinets', value: '3-5' },
          { label: '🔢 Full set', value: 'full-set' },
        ],
      },
      {
        id: 'old-removal',
        question: 'Need old cabinets removed?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, remove old ones', value: 'yes' },
          { label: '🚫 No, fresh install', value: 'no' },
        ],
      },
    ],
  },

  'picture-hanging': {
    serviceSlug: 'picture-hanging',
    serviceName: 'Picture Hanging',
    headline: 'Plan Your Picture Hanging',
    subtitle: "Tell Dan what you're hanging",
    steps: [
      {
        id: 'hanging-scope',
        question: 'What are you hanging?',
        type: 'single-select',
        options: [
          { label: '🖼️ Single frame', value: 'single' },
          { label: '🎨 Gallery wall (3–5)', value: 'gallery-small' },
          { label: '🏛️ Large gallery (6+)', value: 'gallery-large' },
          { label: '🪞 Heavy mirror', value: 'mirror' },
          { label: '📏 Floating ledge / Shelf', value: 'ledge' },
        ],
      },
      {
        id: 'heaviest-item',
        question: 'Heaviest item?',
        type: 'single-select',
        options: [
          { label: '🪶 Light (under 10 lbs)', value: 'light' },
          { label: '⚖️ Medium (10–30 lbs)', value: 'medium' },
          { label: '🏋️ Heavy (30+ lbs)', value: 'heavy' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
    ],
  },

  'air-filter-replacement': {
    serviceSlug: 'air-filter-replacement',
    serviceName: 'Air Filter Replacement',
    headline: 'Plan Your Air Filter Change',
    subtitle: 'Quick info about your HVAC system',
    steps: [
      {
        id: 'system-type',
        question: 'What type of system?',
        type: 'single-select',
        options: [
          { label: '🌀 Central HVAC', value: 'central' },
          { label: '❄️ Window unit(s)', value: 'window' },
          { label: '🔢 Multiple systems', value: 'multiple' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
      {
        id: 'filter-qty',
        question: 'How many filters?',
        type: 'single-select',
        options: [
          { label: '1️⃣ Just one', value: '1' },
          { label: '2️⃣ 2–3 filters', value: '2-3' },
          { label: '🔢 4 or more', value: '4-plus' },
        ],
      },
    ],
  },

  'doorknob-and-handle-replacement': {
    serviceSlug: 'doorknob-and-handle-replacement',
    serviceName: 'Doorknob & Handle Replacement',
    headline: 'Plan Your Hardware Upgrade',
    subtitle: 'Tell Dan about your door hardware project',
    steps: [
      {
        id: 'hardware-type',
        question: 'What type of hardware?',
        type: 'single-select',
        options: [
          { label: '🔘 Interior knobs', value: 'interior-knob' },
          { label: '🔐 Exterior / Deadbolt', value: 'exterior' },
          { label: '🚪 Lever handles', value: 'lever' },
          { label: '🔧 Full hardware set', value: 'full-set' },
        ],
      },
      {
        id: 'hardware-qty',
        question: 'How many doors?',
        type: 'single-select',
        options: [
          { label: '1️⃣ 1–2 doors', value: '1-2' },
          { label: '3️⃣ 3–5 doors', value: '3-5' },
          { label: '🔢 6 or more', value: '6-plus' },
        ],
      },
    ],
  },

  'smoke-detector-testing-and-replacement': {
    serviceSlug: 'smoke-detector-testing-and-replacement',
    serviceName: 'Smoke Detector Service',
    headline: 'Plan Your Smoke Detector Service',
    subtitle: 'Keep your family safe with working detectors',
    steps: [
      {
        id: 'detector-need',
        question: 'What do you need?',
        type: 'single-select',
        options: [
          { label: '🔍 Test existing detectors', value: 'test' },
          { label: '🔋 Replace batteries', value: 'batteries' },
          { label: '🔄 Replace expired units', value: 'replace' },
          { label: '🆕 Add new detectors', value: 'add-new' },
          { label: '⚠️ CO detectors too', value: 'co-detectors' },
        ],
      },
      {
        id: 'detector-qty',
        question: 'How many detectors?',
        type: 'single-select',
        options: [
          { label: '1️⃣ 1–3 units', value: '1-3' },
          { label: '4️⃣ 4–6 units', value: '4-6' },
          { label: '🔢 7 or more', value: '7-plus' },
        ],
      },
    ],
  },

  'curtain-and-blind-installation': {
    serviceSlug: 'curtain-and-blind-installation',
    serviceName: 'Curtain & Blind Installation',
    headline: 'Plan Your Window Treatment Install',
    subtitle: 'Tell Dan about your curtain or blind project',
    steps: [
      {
        id: 'treatment-type',
        question: 'What type?',
        type: 'single-select',
        options: [
          { label: '🪟 Curtain rods', value: 'curtain-rods' },
          { label: '🪟 Blinds', value: 'blinds' },
          { label: '🌤️ Shades', value: 'shades' },
          { label: '🔲 Shutters', value: 'shutters' },
          { label: '📋 Mix of types', value: 'mixed' },
        ],
      },
      {
        id: 'window-qty',
        question: 'How many windows?',
        type: 'single-select',
        options: [
          { label: '1️⃣ 1–2 windows', value: '1-2' },
          { label: '3️⃣ 3–5 windows', value: '3-5' },
          { label: '🔢 6 or more', value: '6-plus' },
        ],
      },
      {
        id: 'have-hardware',
        question: 'Have the hardware already?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, everything purchased', value: 'yes' },
          { label: '🛒 No, need to buy still', value: 'no' },
        ],
      },
    ],
  },


  'ceiling-fan-installation-and-replacement': {
    serviceSlug: 'ceiling-fan-installation-and-replacement',
    serviceName: 'Ceiling Fan Installation',
    headline: 'Plan Your Ceiling Fan Install',
    subtitle: 'Details so Dan can prep for the job',
    steps: [
      {
        id: 'fan-situation',
        question: "What's the situation?",
        type: 'single-select',
        options: [
          { label: '🔄 Replace existing fan', value: 'replace-fan' },
          { label: '💡 Replace light fixture with fan', value: 'light-to-fan' },
          { label: '🆕 Brand new installation', value: 'new' },
        ],
      },
      {
        id: 'have-fan',
        question: 'Do you have the fan?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, already purchased', value: 'yes' },
          { label: '🛒 No, need recommendation', value: 'no' },
        ],
      },
      {
        id: 'electrical-box',
        question: 'Is there a fan-rated electrical box?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, fan-rated', value: 'yes' },
          { label: '🤷 Not sure', value: 'not-sure' },
          { label: '🆕 Need new box installed', value: 'need-new' },
        ],
      },
    ],
  },

  'smart-home-device-setup': {
    serviceSlug: 'smart-home-device-setup',
    serviceName: 'Smart Home Setup',
    headline: 'Plan Your Smart Home Setup',
    subtitle: 'Tell Dan which devices need installing',
    steps: [
      {
        id: 'smart-devices',
        question: 'Which devices?',
        type: 'multi-select',
        options: [
          { label: '🌡️ Thermostat', value: 'thermostat' },
          { label: '🔔 Doorbell camera', value: 'doorbell' },
          { label: '🔐 Smart locks', value: 'locks' },
          { label: '📷 Security cameras', value: 'cameras' },
          { label: '🔊 Smart speakers', value: 'speakers' },
          { label: '💡 Smart lights', value: 'lights' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'device-qty',
        question: 'How many devices total?',
        type: 'single-select',
        options: [
          { label: '1️⃣ Just one', value: '1' },
          { label: '2️⃣ 2–3 devices', value: '2-3' },
          { label: '🔢 4 or more', value: '4-plus' },
        ],
      },
    ],
  },

  'home-office-setup': {
    serviceSlug: 'home-office-setup',
    serviceName: 'Home Office Setup',
    headline: 'Plan Your Home Office Setup',
    subtitle: 'Tell Dan what your workspace needs',
    steps: [
      {
        id: 'office-needs',
        question: 'What do you need?',
        type: 'multi-select',
        options: [
          { label: '🖥️ Desk assembly', value: 'desk' },
          { label: '🖥️ Monitor mounting', value: 'monitors' },
          { label: '📚 Shelving', value: 'shelving' },
          { label: '🔌 Cable management', value: 'cables' },
          { label: '🏗️ Full office setup', value: 'full-setup' },
        ],
      },
      {
        id: 'monitor-count',
        question: 'How many monitors?',
        type: 'single-select',
        options: [
          { label: '0️⃣ None', value: '0' },
          { label: '1️⃣ One', value: '1' },
          { label: '2️⃣ Two or more', value: '2-plus' },
        ],
      },
    ],
  },

  'closet-system-installation': {
    serviceSlug: 'closet-system-installation',
    serviceName: 'Closet System Installation',
    headline: 'Plan Your Closet Makeover',
    subtitle: 'Help Dan understand the closet project',
    steps: [
      {
        id: 'closet-type',
        question: 'What type of closet?',
        type: 'single-select',
        options: [
          { label: '🚪 Reach-in closet', value: 'reach-in' },
          { label: '🚶 Walk-in closet', value: 'walk-in' },
          { label: '🍳 Pantry', value: 'pantry' },
          { label: '🧹 Utility / Linen', value: 'utility' },
          { label: '📋 Multiple closets', value: 'multiple' },
        ],
      },
      {
        id: 'closet-brand',
        question: 'Have a system picked out?',
        type: 'single-select',
        options: [
          { label: '🟡 IKEA PAX', value: 'ikea' },
          { label: '🔧 Elfa (Container Store)', value: 'elfa' },
          { label: '✨ Custom / Other brand', value: 'custom' },
          { label: '🤷 Not decided yet', value: 'undecided' },
        ],
      },
    ],
  },

  'custom-accent-walls': {
    serviceSlug: 'custom-accent-walls',
    serviceName: 'Custom Accent Walls',
    headline: 'Plan Your Accent Wall',
    subtitle: 'Tell Dan about your vision',
    steps: [
      {
        id: 'wall-style',
        question: 'What style?',
        type: 'single-select',
        options: [
          { label: '📏 Board & Batten', value: 'board-batten' },
          { label: '🪵 Shiplap', value: 'shiplap' },
          { label: '🔲 Wood slat / Modern', value: 'wood-slat' },
          { label: '🏛️ Wainscoting', value: 'wainscoting' },
          { label: '🧱 Stone / Brick veneer', value: 'stone' },
          { label: '🎨 Other / Custom idea', value: 'other' },
        ],
      },
      {
        id: 'wall-scope',
        question: 'How much wall space?',
        type: 'single-select',
        options: [
          { label: '📏 Small accent section', value: 'small' },
          { label: '🏠 One full wall', value: 'full-wall' },
          { label: '🏘️ Multiple walls', value: 'multiple' },
        ],
      },
      {
        id: 'wall-material',
        question: 'Have materials already?',
        type: 'single-select',
        options: [
          { label: '✅ Yes, materials purchased', value: 'have-materials' },
          { label: '🛒 Need Dan to recommend', value: 'need-recommendation' },
          { label: '🤔 Still deciding', value: 'deciding' },
        ],
      },
    ],
  },

  'built-ins': {
    serviceSlug: 'built-ins',
    serviceName: 'Custom Built-Ins',
    headline: 'Plan Your Built-In Project',
    subtitle: 'Help Dan understand your custom build',
    steps: [
      {
        id: 'builtin-type',
        question: 'What type of built-in?',
        type: 'single-select',
        options: [
          { label: '📚 Bookcase / Shelving', value: 'bookcase' },
          { label: '🪟 Window seat', value: 'window-seat' },
          { label: '📺 Entertainment center', value: 'entertainment' },
          { label: '🧥 Mudroom cubbies', value: 'mudroom' },
          { label: '🔥 Fireplace surround', value: 'fireplace' },
          { label: '📦 Other custom', value: 'other' },
        ],
      },
      {
        id: 'builtin-room',
        question: 'Which room?',
        type: 'single-select',
        options: [
          { label: '🛋️ Living room', value: 'living' },
          { label: '🛏️ Bedroom', value: 'bedroom' },
          { label: '🖥️ Office / Study', value: 'office' },
          { label: '🚪 Hallway / Entryway', value: 'hallway' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'builtin-finish',
        question: 'Preferred finish?',
        type: 'single-select',
        options: [
          { label: '🎨 Painted wood', value: 'painted' },
          { label: '🪵 Natural / Stained wood', value: 'natural' },
          { label: '🔀 Mixed materials', value: 'mixed' },
          { label: '🤷 Not sure yet', value: 'not-sure' },
        ],
      },
    ],
  },

  'outdoor-structures': {
    serviceSlug: 'outdoor-structures',
    serviceName: 'Outdoor Structures',
    headline: 'Plan Your Outdoor Build',
    subtitle: 'Tell Dan about your backyard project',
    steps: [
      {
        id: 'structure-type',
        question: 'What are you building?',
        type: 'single-select',
        options: [
          { label: '🏛️ Pergola', value: 'pergola' },
          { label: '⛺ Gazebo', value: 'gazebo' },
          { label: '🏠 Shed', value: 'shed' },
          { label: '☀️ Canopy / Shade structure', value: 'canopy' },
          { label: '📦 Other', value: 'other' },
        ],
      },
      {
        id: 'structure-size',
        question: 'Approximate size?',
        type: 'single-select',
        options: [
          { label: '📏 Small (under 100 sq ft)', value: 'small' },
          { label: '📐 Medium (100–200 sq ft)', value: 'medium' },
          { label: '🏗️ Large (200+ sq ft)', value: 'large' },
        ],
      },
      {
        id: 'structure-material',
        question: 'Preferred material?',
        type: 'single-select',
        options: [
          { label: '🪵 Wood', value: 'wood' },
          { label: '🔩 Metal', value: 'metal' },
          { label: '🔀 Mixed', value: 'mixed' },
          { label: '🤷 Not sure', value: 'not-sure' },
        ],
      },
    ],
  },
}

export function getQuizConfig(serviceSlug: string): ServiceQuizConfig | null {
  return quizConfigs[serviceSlug] ?? null
}
