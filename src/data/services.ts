export interface Service {
  slug: string
  name: string
  shortDescription: string
  heroHeadline: string
  heroSubheadline: string
  intro: string
  commonProblems: string[]
  jobExamples: string[]
  whyHireHandyman: string
  whyChooseUs: string
  faqs: { question: string; answer: string }[]
  relatedServices: string[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
  image?: string
  altText?: string
  processSteps: { title: string; description: string }[]
  whyChooseUsCards: { title: string; description: string }[]
}

export const services: Service[] = [
  {
    slug: 'tv-mounting',
    name: 'TV Mounting',
    shortDescription: 'Professional TV mounting services in Rockland County. Flat screen installation on any wall type with clean cable management.',
    heroHeadline: 'Expert TV Mounting in Rockland County, NY',
    heroSubheadline: 'Secure, level, and perfectly positioned — every time.',
    intro: 'Nothing upgrades your living space quite like a professionally mounted television. Whether you have a brand-new 75-inch flat screen or want to relocate an existing TV, proper wall mounting requires the right hardware, precise stud finding, and careful cable management. A poorly mounted TV is not just an eyesore — it can be a genuine safety hazard.\n\nAt Odds & Ends Handyman Service, Dan and the team have been mounting TVs for homeowners across Rockland County for over 20 years. We handle every detail: selecting the right bracket for your wall type, ensuring a perfectly level installation, and routing cables so your setup looks clean and professional. From drywall to brick, plaster to concrete — we have the tools and experience to get the job done right.',
    commonProblems: [
      'TV not level after self-installation',
      'Brackets not anchored into studs properly',
      'Visible cables and wires hanging below the TV',
      'Drywall damage from incorrect mounting attempts',
      'Wrong bracket type chosen for TV weight or wall material',
      'Inability to find studs in older Rockland County homes'
    ],
    jobExamples: [
      'Mounted 65-inch Samsung on brick fireplace in New City',
      'Installed full-motion bracket with in-wall cable concealment in Pearl River',
      'Relocated TV from stand to wall mount in Suffern living room',
      'Set up multi-TV mounting for finished basement in Nanuet',
      'Mounted outdoor TV on covered patio in Nyack',
      'Installed tilting mount above fireplace mantel in Stony Point'
    ],
    whyHireHandyman: 'Mounting a TV yourself might seem straightforward, but one wrong drill hole can mean damaged plumbing or electrical wiring hidden behind your walls. Without proper stud anchoring, a heavy flat screen can pull free and crash to the floor. A professional handyman has the stud finders, levels, and experience to mount your TV safely and securely on the first try — saving you from costly wall repairs and potential injury.',
    whyChooseUs: 'Odds & Ends has been the go-to TV mounting service in Rockland County for over two decades. Dan takes the time to discuss optimal viewing height and angle before drilling a single hole. We carry a full range of mounting hardware for every wall type found in Rockland County homes, from 1950s plaster to modern drywall. Our work is guaranteed, and we always clean up after ourselves.',
    faqs: [
      { question: 'Can you mount a TV on a brick or stone fireplace?', answer: 'Absolutely. We use masonry anchors and specialized drill bits designed for brick and stone. This is one of our most common requests in Rockland County homes.' },
      { question: 'How long does a TV mounting appointment take?', answer: 'Most standard TV mountings take 1 to 2 hours. If you need in-wall cable concealment or a power outlet relocated, it may take a bit longer.' },
      { question: 'Do I need to buy the mount ahead of time?', answer: 'You can, but we are happy to recommend and source the right bracket for your specific TV and wall type. Just let us know your TV model and size when you call.' },
      { question: 'Can you hide the cables inside the wall?', answer: 'Yes. We offer in-wall cable management that gives your installation a clean, wire-free look. We can also install a recessed power outlet behind the TV.' },
      { question: 'What size TVs can you mount?', answer: 'We mount TVs of all sizes, from 32-inch bedroom sets to 85-inch home theater displays. The process varies based on weight and wall type, but we have solutions for every scenario.' }
    ],
    relatedServices: ['shelving-installation', 'picture-hanging', 'smart-home-device-setup', 'light-fixture-installation'],
    metaTitle: 'Professional TV Mounting Service | Rockland County, NY',
    metaDescription: 'Professional TV mounting in Rockland County, NY. Secure bracket installation, cable management, and all wall types. 20+ years experience. Call today!',
    keywords: ['TV mounting Rockland County', 'TV installation New City NY', 'flat screen mounting', 'TV wall mount service', 'TV mounting near me', 'cable management', 'TV bracket installation'],
    image: '/images/services/tv-mounting.jpg',
    altText: 'Odds & Ends mounting a 65-inch TV on a brick fireplace wall',
    processSteps: [
      { title: 'Site Assessment', description: 'We evaluate your wall type, locate studs, and identify any hidden wiring or plumbing before touching a drill.' },
      { title: 'Bracket & Hardware Selection', description: 'Based on your TV\'s weight and your wall material, we select the right bracket type and mounting hardware for a secure hold.' },
      { title: 'Mount, Level & Secure', description: 'We drill precisely into structural framing, attach the bracket, and hang your TV perfectly level at the optimal viewing height.' },
      { title: 'Cable Management & Cleanup', description: 'Cables are routed through the wall or in discreet raceways, and we clean up all packaging and debris.' }
    ],
    whyChooseUsCards: [
      { title: 'Every Wall Type', description: 'Drywall, plaster, brick, concrete, stone — we have the right hardware and technique for any wall in your Rockland County home.' },
      { title: 'Clean Cable Management', description: 'We route cables through the wall or in discreet raceways so your setup looks sharp — no dangling wires.' },
      { title: 'Optimal Viewing Position', description: 'We calculate the ideal height and angle based on your seating distance and room layout before drilling a single hole.' },
      { title: 'Safe & Secure', description: 'Every mount is anchored into structural framing with weight-rated hardware. Your TV isn\'t going anywhere.' },
      { title: '20+ Years on Rockland County Walls', description: 'From 1950s plaster in Nyack bungalows to modern drywall in New City builds, we\'ve mounted TVs on every wall type in the county.' }
    ]
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    shortDescription: 'Expert drywall patching, hole repair, and finishing for Rockland County homes. Seamless results every time.',
    heroHeadline: 'Drywall Repair Services in Rockland County',
    heroSubheadline: 'Holes, cracks, and dents patched to a flawless finish.',
    intro: 'Drywall damage is one of the most common issues in any home. Whether it is a doorknob that punched through the wall, a crack that appeared after settling, or water damage from a leak upstairs, damaged drywall looks bad and can get worse if ignored. Dust, moisture, and pests can all enter through even small openings.\n\nOdds & Ends Handyman Service provides fast, reliable drywall repair throughout Rockland County. Dan and the team handle everything from small nail holes to large patch jobs, matching your existing texture and paint so the repair virtually disappears. With over 20 years of experience working on homes in Suffern, New City, Nyack, and beyond, we know the common drywall issues these homes face and how to fix them right.',
    commonProblems: [
      'Holes from doorknobs, furniture, or accidents',
      'Nail pops and screw pops in ceilings and walls',
      'Hairline cracks along seams and corners',
      'Water-damaged drywall from leaks or condensation',
      'Crumbling drywall around old anchor points',
      'Poorly patched previous repairs that look uneven'
    ],
    jobExamples: [
      'Patched a fist-sized hole in a hallway wall in New City',
      'Repaired water-damaged ceiling drywall in Pearl River bathroom',
      'Fixed multiple nail pops throughout a Stony Point colonial',
      'Patched and textured wall after removing old built-in shelving in Suffern',
      'Repaired drywall around newly installed door frame in Nanuet',
      'Skim-coated a damaged accent wall in a Nyack living room'
    ],
    whyHireHandyman: 'Drywall repair looks simple on YouTube, but achieving a truly invisible patch requires skill with joint compound, proper sanding technique, and texture matching. An amateur repair often leaves visible bumps, ridges, or mismatched textures that look worse than the original damage. A professional handyman gets it smooth and seamless on the first attempt, saving you the frustration of repeated sanding and reapplication.',
    whyChooseUs: 'Odds & Ends has repaired thousands of drywall imperfections across Rockland County. We carry multiple grades of joint compound and texturing tools so we can match virtually any existing wall finish. Dan personally inspects every repair under angled light before considering the job complete. We also handle the painting to ensure a perfect color match.',
    faqs: [
      { question: 'How big of a hole can you repair?', answer: 'We repair everything from tiny nail holes to openings up to several feet across. For very large areas, we cut in a new piece of drywall and tape and finish the seams for a seamless result.' },
      { question: 'Will the repair be visible?', answer: 'Our goal is always an invisible repair. We match your existing wall texture and paint color so the patched area blends in completely.' },
      { question: 'Can you fix water-damaged drywall?', answer: 'Yes, but the source of the water must be fixed first. Once the area is dry, we remove the damaged section, install new drywall, and finish it to match the surrounding wall.' },
      { question: 'How long does drywall repair take?', answer: 'Small patches can be completed in one visit. Larger repairs that require multiple coats of compound may need two visits to allow for proper drying time between coats.' },
      { question: 'Do you also paint after the repair?', answer: 'Yes. We can paint the repaired area or the entire wall to ensure a perfect match. We recommend painting the full wall for the most seamless result.' }
    ],
    relatedServices: ['painting', 'door-installation', 'shelving-installation', 'custom-accent-walls'],
    metaTitle: 'Professional Drywall Repair Service | Rockland County, NY',
    metaDescription: 'Professional drywall repair in Rockland County. Holes, cracks, water damage patched seamlessly. 20+ years experience. Free estimates available.',
    keywords: ['drywall repair Rockland County', 'drywall patching', 'hole repair', 'wall repair New City NY', 'drywall contractor near me', 'ceiling repair', 'drywall finishing'],
    image: '/images/services/drywall-repair.jpg',
    altText: 'Odds & Ends handyman patching drywall in a living room',
    processSteps: [
      { title: 'Assess the Damage', description: 'We examine the affected area to determine the extent of damage and whether underlying issues like moisture need to be addressed first.' },
      { title: 'Cut & Prep the Area', description: 'Damaged drywall is cleanly cut out and the area is prepared with proper backing for the new patch.' },
      { title: 'Patch, Tape & Mud', description: 'We set the new drywall, tape the seams, and apply multiple coats of joint compound, sanding between each coat for a smooth finish.' },
      { title: 'Sand, Prime & Paint Match', description: 'The repair is sanded perfectly smooth, primed, and painted to match your existing wall color and texture.' }
    ],
    whyChooseUsCards: [
      { title: 'Invisible Repairs', description: 'Dan inspects every patch under angled light to ensure it blends seamlessly — your wall should look like it was never damaged.' },
      { title: 'Texture Matching', description: 'We carry multiple texturing tools and compounds to match knockdown, orange peel, smooth, and other common wall finishes found in Rockland County homes.' },
      { title: 'Water Damage Expertise', description: 'We know how to properly handle water-damaged drywall, including ensuring the area is fully dry and mold-free before patching.' },
      { title: 'Full-Service Finish', description: 'We don\'t just patch — we prime and paint so the repair is truly complete. No half-finished jobs left for you to deal with.' },
      { title: 'Every Size Repair', description: 'From tiny nail holes to large sections that need full drywall replacement, we have the tools and technique for any repair.' }
    ]
  },
  {
    slug: 'door-installation',
    name: 'Door Installation',
    shortDescription: 'Interior and exterior door installation and replacement in Rockland County. Pre-hung and slab doors expertly fitted.',
    heroHeadline: 'Door Installation & Replacement in Rockland County',
    heroSubheadline: 'Interior and exterior doors hung straight, sealed tight, and operating smoothly.',
    intro: 'A door that sticks, drafts, or will not latch properly is more than an annoyance — it affects your home\'s energy efficiency, security, and everyday comfort. Whether you are upgrading interior doors for a fresh look or replacing an exterior door for better insulation and security, proper installation is critical.\n\nOdds & Ends Handyman Service installs and replaces doors throughout Rockland County. Dan and the team work with pre-hung doors, slab doors, pocket doors, and barn-style sliding doors. With over 20 years of experience, we know the quirks of older Rockland County homes where door frames are rarely perfectly square — and we have the skills to make every door fit and function like it was made for the space.',
    commonProblems: [
      'Doors that stick or drag on the floor',
      'Gaps around the door frame causing drafts',
      'Doors that will not latch or lock properly',
      'Outdated hollow-core doors offering no privacy or sound dampening',
      'Misaligned hinges from settling foundations',
      'Rotting exterior door frames in older homes'
    ],
    jobExamples: [
      'Replaced six interior hollow-core doors with solid-core in New City',
      'Installed a new pre-hung exterior door with weatherstripping in Suffern',
      'Hung a barn-style sliding door for a master bathroom in Nyack',
      'Replaced a sticking bedroom door in a 1960s Pearl River split-level',
      'Installed a pocket door to save space in a small Nanuet bathroom',
      'Trimmed and rehung a swollen door after humidity changes in Stony Point'
    ],
    whyHireHandyman: 'Door installation requires precise measurements, proper shimming, and careful alignment. An improperly hung door can damage flooring, fail to seal against weather, or simply refuse to close. Older homes in Rockland County often have out-of-square frames that require custom fitting — something a quick DIY job rarely accounts for. A professional ensures your door operates perfectly from day one.',
    whyChooseUs: 'Odds & Ends has installed hundreds of doors across Rockland County, from modern pocket doors to period-appropriate replacements for historic homes. Dan takes precise measurements before ordering and dry-fits every door before final installation. We handle the full job: removing the old door, prepping the frame, installing the new door, and adding all hardware. Our work comes with a satisfaction guarantee.',
    faqs: [
      { question: 'Can you install a door I already purchased?', answer: 'Absolutely. We install doors purchased from any retailer. Just make sure to confirm measurements with us before buying to ensure a proper fit.' },
      { question: 'How long does a door installation take?', answer: 'A standard pre-hung interior door takes 1 to 2 hours. Exterior doors or custom situations may take half a day.' },
      { question: 'Do you install pocket doors or barn doors?', answer: 'Yes, we install both. Pocket doors require some wall modification, while barn-style sliding doors mount on a track on the wall exterior. We handle both regularly.' },
      { question: 'Can you fix a door that sticks instead of replacing it?', answer: 'Often, yes. We can plane, trim, or rehang a sticking door for much less than a full replacement. We will always recommend the most cost-effective solution.' }
    ],
    relatedServices: ['doorknob-and-handle-replacement', 'drywall-repair', 'painting', 'cabinet-installation'],
    metaTitle: 'Professional Door Installation | Rockland County, NY',
    metaDescription: 'Professional door installation in Rockland County, NY. Interior and exterior doors, pre-hung and slab. Expert fitting for older homes. Call today!',
    keywords: ['door installation Rockland County', 'door replacement', 'interior door installation', 'exterior door installation', 'door hanging service', 'pre-hung door install near me'],
    image: '/images/services/door-installation.jpg',
    altText: 'Odds & Ends installing a solid wood front door on colonial home',
    processSteps: [
      { title: 'Measure & Evaluate', description: 'We measure the existing frame and assess the condition of the jamb, threshold, and surrounding structure for any issues.' },
      { title: 'Prep the Opening', description: 'The old door and hardware are removed, and the frame is checked for plumb and square — shimming or trimming as needed.' },
      { title: 'Install & Align', description: 'The new door is set in place, shimmed for perfect alignment, and secured so it swings freely and latches properly.' },
      { title: 'Hardware, Trim & Finish', description: 'We install all hardware, apply weatherstripping for exterior doors, and install or reinstall trim for a polished look.' }
    ],
    whyChooseUsCards: [
      { title: 'Older Home Specialists', description: 'Rockland County homes from the 1950s–1970s often have out-of-square frames. We know how to make doors fit perfectly despite these quirks.' },
      { title: 'Pre-Hung & Slab Doors', description: 'We work with both pre-hung units and slab doors, fitting each precisely to your specific opening.' },
      { title: 'Full Hardware Installation', description: 'Hinges, knobs, deadbolts, and strike plates — all installed, aligned, and functioning perfectly before we leave.' },
      { title: 'Weathertight Exterior Doors', description: 'For exterior doors, we install proper weatherstripping and thresholds to seal out drafts, moisture, and pests.' },
      { title: 'One-Visit Completion', description: 'We bring everything needed to complete the job in a single visit — removal, prep, installation, hardware, and trim.' }
    ]
  },
  {
    slug: 'fence-repair',
    name: 'Fence Repair',
    shortDescription: 'Fence repair and maintenance services in Rockland County. Wood, vinyl, and chain-link fence fixes.',
    heroHeadline: 'Fence Repair Services in Rockland County, NY',
    heroSubheadline: 'Leaning posts, broken boards, and sagging gates fixed fast.',
    intro: 'A damaged fence is more than an eyesore — it compromises your property\'s security, privacy, and curb appeal. Rockland County weather takes a toll on fences year after year, with freeze-thaw cycles loosening posts, wind snapping boards, and moisture causing rot. Addressing fence damage early prevents small problems from becoming expensive full replacements.\n\nOdds & Ends Handyman Service repairs all types of residential fencing throughout Rockland County. Whether you have a classic wood privacy fence, vinyl panels, or chain-link, Dan and the team can replace broken sections, reset leaning posts, and get your fence looking and functioning like new. With 20+ years of local experience, we understand the soil and weather conditions that affect fences in this area.',
    commonProblems: [
      'Leaning or shifted fence posts from frost heave',
      'Broken or missing fence boards after storms',
      'Rotting wood at ground level from moisture',
      'Sagging or misaligned gates that will not close',
      'Loose or rusted hardware and brackets',
      'Sections knocked down by fallen branches or wind'
    ],
    jobExamples: [
      'Reset four leaning fence posts and replaced rails in New City',
      'Replaced a full section of storm-damaged privacy fence in Suffern',
      'Repaired and rehung a sagging wooden gate in Pearl River',
      'Patched chain-link fencing torn by a fallen branch in Nanuet',
      'Replaced rotted bottom rails on a cedar fence in Nyack',
      'Reinforced and stained a fence along a Stony Point property line'
    ],
    whyHireHandyman: 'Fence repair often involves heavy posts, concrete setting, and precise alignment over long spans. A leaning post that is not properly reset will continue to shift, dragging neighboring sections with it. Getting boards level and evenly spaced requires experience and the right tools. A professional repair restores structural integrity and appearance, extending the life of your entire fence.',
    whyChooseUs: 'Odds & Ends has repaired fences across every neighborhood in Rockland County. We carry common fence hardware, brackets, and fasteners on our truck so most repairs can be completed in a single visit. Dan matches replacement boards to your existing fence as closely as possible and can stain or paint them to blend in. We always clean up the worksite and haul away old materials.',
    faqs: [
      { question: 'Can you match my existing fence boards?', answer: 'In most cases, yes. We source replacement boards that match your fence\'s wood species, width, and profile. Some weathering difference is normal, but staining can help blend new and old boards.' },
      { question: 'Do you install brand new fences?', answer: 'We focus on fence repairs and partial replacements. For a full new fence installation, we can recommend a fencing contractor, but we are happy to handle any repair or section replacement.' },
      { question: 'How do you fix a leaning fence post?', answer: 'We dig around the base, reset the post to plumb, and secure it with fresh concrete or compacted gravel depending on the situation. We also check adjacent posts to prevent future leaning.' },
      { question: 'Can you repair vinyl fencing?', answer: 'Yes. Vinyl fence sections are modular, so we can replace individual panels, posts, or caps as needed. We source matching vinyl components from major manufacturers.' }
    ],
    relatedServices: ['deck-repair', 'painting', 'door-installation', 'custom-accent-walls'],
    metaTitle: 'Professional Fence Repair Service | Rockland County, NY',
    metaDescription: 'Fence repair services in Rockland County, NY. Leaning posts, broken boards, sagging gates fixed fast. Wood, vinyl, and chain-link. Call today!',
    keywords: ['fence repair Rockland County', 'fence repair near me', 'broken fence board replacement', 'fence post repair', 'wood fence repair NY', 'vinyl fence repair'],
    image: '/images/services/fence-repair.jpg',
    altText: 'Handyman replacing a broken fence board in Rockland County backyard',
    processSteps: [
      { title: 'Inspect the Full Fence Line', description: 'We walk the entire fence and assess every post, rail, and board to identify all issues — not just the obvious ones.' },
      { title: 'Source Matching Materials', description: 'We find replacement boards, posts, and hardware that match your existing fence\'s wood species, width, and profile.' },
      { title: 'Repair & Reinforce', description: 'Leaning posts are reset in concrete, broken boards are replaced, sagging gates are realigned, and weak joints are reinforced.' },
      { title: 'Stain, Seal & Clean Up', description: 'New wood is stained or painted to blend with existing sections, and all debris and old materials are hauled away.' }
    ],
    whyChooseUsCards: [
      { title: 'Full Fence Assessment', description: 'We check the entire fence, not just the damaged section, so we catch problems before they spread to neighboring panels.' },
      { title: 'Material Matching', description: 'We source replacement boards that match your fence\'s species, width, and profile for a consistent look across old and new sections.' },
      { title: 'Rockland County Weather Knowledge', description: 'Freeze-thaw cycles, heavy snow loads, and high winds — we know what breaks fences here and how to fix them to last.' },
      { title: 'Same-Day Repairs', description: 'We carry common fence hardware and fasteners on our truck, so most repairs are completed in a single visit.' },
      { title: 'Post Setting Done Right', description: 'Leaning posts are reset with fresh concrete, checked for plumb, and given time to cure properly — no shortcuts.' }
    ]
  },
  {
    slug: 'deck-repair',
    name: 'Deck Repair',
    shortDescription: 'Deck repair and maintenance for Rockland County homeowners. Board replacement, railing fixes, and structural repairs.',
    heroHeadline: 'Deck Repair & Maintenance in Rockland County',
    heroSubheadline: 'Keep your deck safe, solid, and looking great for years to come.',
    intro: 'Your deck is an extension of your living space, but Rockland County\'s harsh winters and humid summers put constant stress on outdoor wood structures. Cracked boards, wobbly railings, and soft spots are not just cosmetic issues — they are safety hazards that get worse every season they are ignored.\n\nOdds & Ends Handyman Service provides comprehensive deck repair and maintenance throughout Rockland County. Dan and the team handle everything from replacing a few cracked boards to rebuilding entire railing systems and reinforcing structural supports. With over 20 years of experience, we know which problems are cosmetic and which signal deeper structural issues that need immediate attention.',
    commonProblems: [
      'Cracked, warped, or splintering deck boards',
      'Wobbly or loose railings and balusters',
      'Soft or spongy spots indicating rot underneath',
      'Popped nails and screws creating trip hazards',
      'Stair treads that are worn, cracked, or loose',
      'Fading and weathering from lack of sealant',
      'Ledger board separation from the house'
    ],
    jobExamples: [
      'Replaced 12 rotted deck boards and resealed entire deck in Suffern',
      'Rebuilt a wobbly railing system on a second-story deck in New City',
      'Reinforced deck stairs and replaced treads in Pearl River',
      'Repaired structural joists and replaced decking in Nanuet',
      'Power washed and restained a cedar deck in Nyack',
      'Replaced a rotting ledger board and reflashed in Stony Point'
    ],
    whyHireHandyman: 'Deck repair can involve structural elements that support the weight of people, furniture, and snow loads. Improperly replacing boards, joists, or railings can create dangerous conditions. A professional handyman assesses the full structure — not just the visible surface — and ensures every repair meets safety standards. This is especially important for elevated decks where a failure could cause serious injury.',
    whyChooseUs: 'Odds & Ends has repaired decks of every size and material across Rockland County. We inspect the full substructure before starting surface repairs, so we catch hidden rot and failing hardware before they become bigger problems. Dan uses stainless steel and exterior-rated fasteners on every job. We also offer deck staining and sealing to protect your investment after repairs are complete.',
    faqs: [
      { question: 'How do I know if my deck needs repair or replacement?', answer: 'If the structural elements — posts, beams, and joists — are solid, repair is usually the better option. If multiple structural members are rotted or the deck is more than 25 years old, replacement may be more cost-effective. We provide honest assessments.' },
      { question: 'Can you repair a composite deck?', answer: 'Yes. Composite decking boards can crack, fade, or come loose just like wood. We replace individual boards and address any fastener or substructure issues.' },
      { question: 'Do you also stain and seal decks?', answer: 'Yes. After making repairs, we can power wash, stain, and seal your deck to protect it from Rockland County weather. This is the best way to extend the life of any deck.' },
      { question: 'Is a permit needed for deck repairs?', answer: 'Minor repairs like replacing boards or railings typically do not require permits. If structural work is needed, we will let you know if a permit is required in your municipality.' }
    ],
    relatedServices: ['fence-repair', 'painting', 'custom-accent-walls', 'door-installation'],
    metaTitle: 'Professional Deck Repair Service | Rockland County, NY',
    metaDescription: 'Professional deck repair in Rockland County. Board replacement, railing fixes, structural repairs, staining and sealing. 20+ years experience.',
    keywords: ['deck repair Rockland County', 'deck board replacement', 'railing repair', 'deck maintenance NY', 'deck staining near me', 'deck repair service'],
    image: '/images/services/deck-repair.jpg',
    altText: 'Handyman staining a backyard deck on a sunny afternoon',
    processSteps: [
      { title: 'Inspect & Diagnose', description: 'We examine the full deck structure — boards, joists, ledger, railings, and hardware — to find every issue, not just surface damage.' },
      { title: 'Source Matching Materials', description: 'We select replacement boards, fasteners, and structural lumber that match your existing deck\'s materials and dimensions.' },
      { title: 'Repair & Reinforce', description: 'Damaged boards are replaced, structural members are reinforced, and all hardware is upgraded to exterior-rated stainless steel.' },
      { title: 'Seal & Protect', description: 'After repairs, we can power wash, stain, and seal the deck to defend against Rockland County\'s harsh seasonal weather.' }
    ],
    whyChooseUsCards: [
      { title: 'Full Structural Inspection', description: 'We check the substructure — joists, ledger board, posts — before starting surface repairs so nothing hidden gets worse.' },
      { title: 'Safety First', description: 'Elevated decks carry serious risk. Every repair we make meets structural safety standards for load-bearing capacity.' },
      { title: 'Matching Materials', description: 'We match replacement boards to your existing deck\'s wood species and dimensions for a cohesive, natural look.' },
      { title: 'Staining & Sealing', description: 'We offer complete deck finishing after repairs to protect your investment from UV, moisture, and freeze-thaw damage.' },
      { title: 'Rockland County Deck Experts', description: 'Over 20 years of repairing decks that endure New York winters — we know what fails and how to fix it right.' }
    ]
  },
  {
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    shortDescription: 'Professional furniture assembly in Rockland County. IKEA, Wayfair, and all brands assembled quickly and correctly.',
    heroHeadline: 'Furniture Assembly Services in Rockland County',
    heroSubheadline: 'From flat-pack to finished — fast, sturdy, and stress-free.',
    intro: 'Flat-pack furniture from IKEA, Wayfair, Amazon, and other retailers can save money, but assembling it yourself often means hours of frustration, confusing instructions, and leftover hardware you are not sure about. A single misaligned piece can compromise the structural integrity of the entire unit.\n\nOdds & Ends Handyman Service takes the stress out of furniture assembly for homeowners across Rockland County. Dan and the team assemble everything from simple bookshelves to complex wardrobes, bed frames, office desks, and outdoor furniture sets. With 20+ years of experience, we work efficiently and ensure every piece is assembled correctly, level, and anchored to the wall when needed for safety.',
    commonProblems: [
      'Confusing or missing instructions',
      'Stripped screws or damaged cam locks from incorrect assembly',
      'Wobbly or unstable final product',
      'Missing hardware or parts requiring reorder',
      'Heavy pieces requiring two people to safely assemble',
      'Furniture not anchored to wall, creating tip-over hazard for children'
    ],
    jobExamples: [
      'Assembled a full IKEA PAX wardrobe system in New City',
      'Put together a Wayfair king bed frame and two nightstands in Suffern',
      'Assembled an L-shaped office desk and filing cabinet in Pearl River',
      'Built a complex entertainment center with glass doors in Nanuet',
      'Assembled outdoor patio furniture set including umbrella in Nyack',
      'Built and wall-anchored two IKEA KALLAX units in a Stony Point playroom'
    ],
    whyHireHandyman: 'Professional assembly is faster, more reliable, and eliminates the risk of stripped hardware or structural mistakes. Many furniture-related injuries come from improperly assembled or unsecured pieces, especially bookcases and dressers that can tip over onto children. A handyman ensures everything is tight, level, and safely anchored where needed.',
    whyChooseUs: 'Odds & Ends has assembled thousands of furniture pieces across Rockland County. We are familiar with every major furniture brand and their assembly systems. Dan brings professional tools that make the job go faster and produce better results than the included Allen wrenches. We also haul away all packaging materials so you are left with just the finished product.',
    faqs: [
      { question: 'How long does furniture assembly take?', answer: 'Simple items like nightstands or small shelves take 30 to 60 minutes. Complex pieces like wardrobes, large desks, or bed frames typically take 1 to 3 hours.' },
      { question: 'Do I need to have the furniture delivered before you come?', answer: 'Yes, please have all boxes on-site and ideally in the room where the furniture will live. We can help move boxes within the home if needed.' },
      { question: 'Can you anchor furniture to the wall?', answer: 'Absolutely, and we strongly recommend it for tall bookcases, dressers, and any furniture in homes with small children. We use appropriate anchors for your wall type.' },
      { question: 'What if parts are missing from the box?', answer: 'We will identify any missing parts and help you contact the manufacturer for replacements. We can return to finish assembly once the parts arrive.' }
    ],
    relatedServices: ['shelving-installation', 'home-office-setup', 'closet-system-installation', 'picture-hanging', 'tv-mounting'],
    metaTitle: 'Professional Furniture Assembly | Rockland County, NY',
    metaDescription: 'Professional furniture assembly in Rockland County. IKEA, Wayfair, and all brands. Fast, sturdy assembly with wall anchoring. Call for a quote!',
    keywords: ['furniture assembly Rockland County', 'IKEA assembly', 'furniture assembly near me', 'Wayfair assembly service', 'flat pack assembly NY', 'furniture building service'],
    image: '/images/services/furniture-assembly.jpg',
    altText: 'Odds & Ends assembling an IKEA wardrobe in a bedroom',
    processSteps: [
      { title: 'Unbox & Inventory', description: 'We open all boxes, verify that all parts and hardware are present, and organize components for efficient assembly.' },
      { title: 'Assemble with Precision', description: 'Using professional tools, we assemble the furniture following manufacturer specifications — no stripped screws or misaligned pieces.' },
      { title: 'Level, Adjust & Anchor', description: 'The finished piece is checked for stability, leveled on your floor, and wall-anchored when needed for tip-over safety.' },
      { title: 'Clean Up & Haul Away', description: 'All packaging, boxes, styrofoam, and plastic wrap are cleaned up and removed so you\'re left with just the finished product.' }
    ],
    whyChooseUsCards: [
      { title: 'All Brands Welcome', description: 'IKEA, Wayfair, Amazon, Target, Pottery Barn, West Elm — we\'ve assembled them all and know each brand\'s quirks.' },
      { title: 'Professional Tools', description: 'We use power drivers, rubber mallets, and precision levels — not the flimsy Allen wrench packed in the box.' },
      { title: 'Wall Anchoring Included', description: 'Tall bookcases, dressers, and wardrobes are anchored to wall studs to prevent dangerous tip-overs, especially in homes with children.' },
      { title: 'Packaging Removal', description: 'We haul away every box, bag, and piece of styrofoam so you enjoy the furniture without the mess.' },
      { title: 'Fast & Reliable', description: 'What takes you a frustrating weekend takes us a couple of focused hours. Your furniture is built right the first time.' }
    ]
  },
  {
    slug: 'light-fixture-installation',
    name: 'Light Fixture Installation',
    shortDescription: 'Light fixture installation and replacement in Rockland County. Chandeliers, sconces, vanity lights, and more.',
    heroHeadline: 'Light Fixture Installation in Rockland County, NY',
    heroSubheadline: 'Upgrade your lighting safely and beautifully.',
    intro: 'New light fixtures can transform a room instantly — adding style, improving functionality, and increasing your home\'s value. But replacing a light fixture involves working with electrical wiring, which can be intimidating and dangerous if you are not experienced. Even a simple swap requires proper wire connections, secure mounting, and correct grounding.\n\nOdds & Ends Handyman Service handles light fixture installation throughout Rockland County. Dan and the team replace and install ceiling lights, chandeliers, pendant lights, wall sconces, vanity lights, and under-cabinet lighting. With 20+ years of experience, we ensure every fixture is safely wired, securely mounted, and looking its best.',
    commonProblems: [
      'Outdated or broken light fixtures reducing room appeal',
      'Flickering lights from loose or corroded wire connections',
      'Heavy chandeliers requiring reinforced ceiling boxes',
      'Mismatched fixture style after a room renovation',
      'Bathroom vanity lights that provide poor illumination',
      'Difficulty removing old fixtures painted or caulked in place'
    ],
    jobExamples: [
      'Replaced a flush-mount ceiling light with a modern pendant in New City',
      'Installed a 5-light chandelier in a Suffern dining room',
      'Upgraded bathroom vanity lighting in a Pearl River colonial',
      'Installed under-cabinet LED lighting in a Nanuet kitchen',
      'Replaced three wall sconces in a Nyack hallway',
      'Hung a heavy wrought-iron chandelier with reinforced ceiling box in Stony Point'
    ],
    whyHireHandyman: 'Working with electrical connections requires knowledge of proper wiring techniques and safety protocols. An incorrect connection can cause flickering, tripped breakers, or even an electrical fire. Heavy fixtures like chandeliers need reinforced mounting to handle the weight safely. A professional handyman makes the right connections, installs proper support, and tests everything before leaving.',
    whyChooseUs: 'Odds & Ends has installed thousands of light fixtures in homes across Rockland County. We handle the full process: safely disconnecting the old fixture, checking the wiring condition, installing a reinforced junction box if needed, and mounting your new fixture securely. Dan tests every fixture before leaving and cleans up all packaging and old hardware.',
    faqs: [
      { question: 'Can you install a fixture where there is no existing light?', answer: 'Adding a new fixture where no wiring exists is a larger electrical project. We handle fixture replacements where wiring is already in place. For new wiring runs, we can recommend a licensed electrician.' },
      { question: 'Can you install a heavy chandelier?', answer: 'Yes. We install a fan-rated or chandelier-rated junction box that can support the weight. We always verify the ceiling structure can handle the load before installation.' },
      { question: 'How long does it take to replace a light fixture?', answer: 'A straightforward swap typically takes 30 to 60 minutes per fixture. More complex installations like chandeliers or fixtures requiring new junction boxes may take longer.' },
      { question: 'Do you install dimmer switches too?', answer: 'Yes, we can install a dimmer switch at the same time as your new fixture. We will confirm your new fixture is dimmer-compatible and recommend the right switch.' }
    ],
    relatedServices: ['ceiling-fan-installation-and-replacement', 'smart-home-device-setup', 'painting'],
    metaTitle: 'Expert Light Fixture Installation | Rockland County, NY',
    metaDescription: 'Light fixture installation in Rockland County. Chandeliers, pendants, sconces, vanity lights installed safely. 20+ years experience. Call today!',
    keywords: ['light fixture installation Rockland County', 'chandelier installation', 'light replacement near me', 'vanity light installation', 'pendant light install NY', 'sconce installation'],
    image: '/images/services/light-fixture-installation.jpg',
    altText: 'Installing a chandelier in a Rockland County dining room',
    processSteps: [
      { title: 'Turn Off Power & Assess', description: 'We shut off the circuit at the breaker and verify it\'s dead before removing your old fixture and inspecting the wiring.' },
      { title: 'Check the Junction Box', description: 'We confirm the electrical box is rated for your new fixture\'s weight and upgrade it if needed — critical for heavy chandeliers.' },
      { title: 'Wire & Mount', description: 'We connect the wiring correctly, secure the fixture to the junction box, and ensure proper grounding for safety.' },
      { title: 'Test & Adjust', description: 'Every fixture is tested on all settings, and we verify the switch and any dimmer operate correctly before leaving.' }
    ],
    whyChooseUsCards: [
      { title: 'Safe Electrical Work', description: 'We follow proper wiring protocols and always verify circuits are dead before starting — no shortcuts with electricity.' },
      { title: 'Heavy Fixture Capable', description: 'Chandeliers and large pendants need rated junction boxes. We upgrade the box when needed so your fixture is secure overhead.' },
      { title: 'All Fixture Types', description: 'Flush mounts, pendants, chandeliers, sconces, vanity bars, under-cabinet LEDs — we install them all.' },
      { title: 'Dimmer Compatible', description: 'We install dimmer switches alongside new fixtures and confirm compatibility so you get the ambiance you want.' },
      { title: 'Clean Swap', description: 'We remove your old fixture, install the new one, and take all packaging and old hardware with us. No mess left behind.' }
    ]
  },
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    shortDescription: 'Bathroom updates and renovation in Rockland County. Toilets, vanities, showers, tubs, tile, flooring, faucets, and fixtures — all in one call.',
    heroHeadline: 'Bathroom Renovation in Rockland County, NY',
    heroSubheadline: 'From a single fixture swap to a full bathroom refresh — Dan handles every detail so you don\'t have to juggle multiple contractors.',
    intro: 'A bathroom renovation doesn\'t have to mean gutting everything down to the studs. Most homeowners just want their bathroom to look better and work better — a new vanity, updated fixtures, fresh tile, a modern toilet. That\'s exactly what Odds & Ends specializes in.\n\nDan handles the full scope of bathroom updates: toilet installation, vanity and sink replacement, faucet upgrades, shower head swaps, tub and shower surrounds, bathroom tile and flooring, mirror hanging, towel bar installation, and exhaust fan replacement. Whether it\'s one fixture or a complete refresh, you get one point of contact, one estimate, and one team that handles the whole job from start to finish.',
    commonProblems: [
      'Outdated vanity, toilet, and fixtures that make the whole bathroom feel old',
      'Cracked or moldy shower tile and failing grout letting water behind walls',
      'Toilet that runs constantly, wobbles, or leaks at the base',
      'Dripping faucet wasting water and driving you crazy',
      'Low water pressure from clogged shower head',
      'Peeling or damaged bathroom flooring from moisture',
      'Exhaust fan that barely works, leading to mold and humidity issues',
      'Bathroom just needs a cosmetic refresh — not a full gut job'
    ],
    jobExamples: [
      'Full bathroom refresh in New City — new toilet, vanity, faucet, mirror, and towel bars',
      'Retiled a shower surround and installed a rain shower head in Suffern',
      'Replaced a pedestal sink with a vanity and installed new flooring in Pearl River',
      'Installed a comfort-height toilet and new faucet in a Nanuet master bath',
      'Swapped out a tub surround, re-grouted floor tile, and hung a new mirror in Nyack',
      'Complete half-bath update in Stony Point — toilet, vanity, paint, and lighting',
      'Installed vinyl plank flooring, new toilet, and vessel sink in a Haverstraw bathroom',
      'Replaced corroded shower arm, installed handheld system, and regrouted tile in Congers'
    ],
    whyHireHandyman: 'Bathroom work involves plumbing connections, tile cutting, precise fixture mounting, and working in tight spaces where mistakes are costly. A toilet not seated on a good flange will leak into the subfloor. A shower surround without proper waterproofing will grow mold behind the wall. A vanity that\'s not level will never look right. Dan has 20+ years of experience handling all of these trades in one visit — no juggling a plumber, tile guy, and handyman separately.',
    whyChooseUs: 'Most bathroom projects involve multiple trades — plumbing, tile, flooring, fixtures. Dan handles all of it, which means fewer scheduling headaches, lower total cost, and one person accountable for the finished result. We inspect flanges before setting toilets, waterproof behind shower tile, test every plumbing connection under full pressure, and leave the bathroom cleaner than we found it.',
    faqs: [
      { question: 'Do you do full bathroom remodels?', answer: 'We handle bathroom updates and renovations — everything from single fixture swaps to complete refreshes. We install toilets, vanities, faucets, shower heads, tile, flooring, mirrors, and accessories. We don\'t do structural work, plumbing rough-in, or move walls — for that you\'d need a general contractor.' },
      { question: 'Can I buy my own fixtures and have you install them?', answer: 'Absolutely, and we encourage it. Pick the toilet, vanity, faucet, and shower head you love and we\'ll install everything. We\'re happy to advise on sizing and compatibility before you buy.' },
      { question: 'How long does a bathroom renovation take?', answer: 'A single fixture swap takes a couple hours. A full bathroom refresh — new toilet, vanity, faucet, flooring, and tile work — typically takes 3 to 5 days depending on scope.' },
      { question: 'Do you handle tile and flooring in the bathroom?', answer: 'Yes. Bathroom floor tile, wall tile, shower surrounds, and flooring are all part of what we do. We prep surfaces, waterproof wet areas, and grout and seal everything properly.' },
      { question: 'Can you replace just one thing like a toilet?', answer: 'Of course. Not every bathroom project is a full renovation. We\'re just as happy installing a single toilet or faucet as we are doing a complete refresh.' },
      { question: 'Do you remove and dispose of old fixtures?', answer: 'Yes. We haul away old toilets, vanities, mirrors, and fixtures as part of the job. You don\'t need to worry about disposal.' }
    ],
    relatedServices: ['tile-work', 'flooring', 'painting', 'drywall-repair', 'light-fixture-installation'],
    metaTitle: 'Bathroom Renovation & Updates | Rockland County, NY',
    metaDescription: 'Bathroom renovation in Rockland County. Toilets, vanities, showers, tile, flooring, faucets, and fixtures installed by one trusted handyman. Free estimates.',
    keywords: ['bathroom renovation Rockland County', 'bathroom remodel near me', 'toilet installation NY', 'vanity installation', 'shower tile installation', 'bathroom update service', 'bathroom handyman'],
    image: '/images/services/toilet-installation.jpg',
    altText: 'Freshly renovated bathroom with new vanity and tile',
    processSteps: [
      { title: 'Walk-Through & Plan', description: 'Dan visits your bathroom, discusses what you want updated, takes measurements, and puts together a clear scope and estimate.' },
      { title: 'Demo & Prep', description: 'Old fixtures, tile, or flooring are carefully removed. Surfaces are prepped, subfloors checked, and any repairs made before new work begins.' },
      { title: 'Install Everything', description: 'Toilets, vanities, faucets, tile, flooring, shower fixtures, mirrors, and accessories are all installed with precision and tested.' },
      { title: 'Final Check & Clean Up', description: 'Every plumbing connection is pressure-tested, every fixture is verified, grout is sealed, and the bathroom is left spotless.' }
    ],
    whyChooseUsCards: [
      { title: 'One Call Does It All', description: 'Toilet, vanity, faucet, tile, flooring, shower fixtures, mirrors, accessories — Dan handles every aspect of your bathroom update in one project.' },
      { title: 'Leak-Free Plumbing', description: 'Every toilet flange is inspected, every supply line is replaced fresh, and every connection is pressure-tested before we leave.' },
      { title: 'Proper Waterproofing', description: 'Shower and tub surrounds get proper moisture barriers behind the tile — the invisible detail that prevents mold and costly damage down the road.' },
      { title: 'Fixture Expertise', description: 'Toilets, vessel sinks, pedestal sinks, wall-mounted vanities, rain shower heads, handheld systems — we\'ve installed every type on the market.' },
      { title: 'No Contractor Markup', description: 'You\'re hiring one experienced handyman, not a general contractor with subcontractors and overhead. Quality work at a fair price.' },
      { title: 'Old Fixture Disposal', description: 'We remove and haul away old toilets, vanities, mirrors, and tile as part of the job. No pile of debris left for you to deal with.' }
    ]
  },
  {
    slug: 'kitchen-renovation',
    name: 'Kitchen Renovation',
    shortDescription: 'Kitchen updates and renovation in Rockland County. Cabinets, countertops, backsplash, appliances, flooring, islands, sinks, and faucets.',
    heroHeadline: 'Kitchen Renovation in Rockland County, NY',
    heroSubheadline: 'Cabinets, countertops, backsplash, appliances, flooring, and more — one handyman, one project, done right.',
    intro: 'The kitchen is the hardest-working room in your home, and it shows. Outdated cabinets, worn countertops, a tired backsplash, and aging appliances can make the whole space feel behind the times. A kitchen renovation doesn\'t have to mean a six-figure gut job with months of construction.\n\nOdds & Ends handles practical kitchen updates that make a real difference: cabinet installation, countertop replacement, backsplash tile, appliance installation, sink and faucet upgrades, kitchen flooring, island builds, pantry storage, hardware swaps, and under-cabinet lighting. Dan coordinates every piece so your kitchen comes together as one cohesive project — not a patchwork of separate contractors.',
    commonProblems: [
      'Outdated cabinets that waste space and look worn',
      'Laminate countertops that are chipped, stained, or peeling',
      'No backsplash or an outdated one that\'s hard to clean',
      'Old appliances that need replacing but you don\'t want to deal with installation',
      'Kitchen faucet that drips or doesn\'t match the updated style',
      'Flooring that\'s scratched, stained, or water-damaged near the sink',
      'No island or prep space in a kitchen that needs more workspace',
      'Cabinet hardware that\'s dated — small change, big visual impact'
    ],
    jobExamples: [
      'Installed new stock cabinets, laminate countertops, and subway tile backsplash in New City',
      'Replaced kitchen faucet, garbage disposal, and installed under-cabinet lighting in Suffern',
      'Built and installed a custom kitchen island with storage in Pearl River',
      'Installed vinyl plank flooring and new cabinet hardware throughout a Nanuet kitchen',
      'Full kitchen refresh in Nyack — cabinets, countertops, backsplash, faucet, and flooring',
      'Installed a dishwasher, microwave, and range hood for a Stony Point homeowner',
      'Added a pantry cabinet, pull-out shelving, and lazy susan to a Haverstraw kitchen',
      'Replaced a damaged under-sink cabinet and installed a touchless faucet in Congers'
    ],
    whyHireHandyman: 'Kitchen work brings together cabinetry, countertops, tile, plumbing, appliance hookups, and flooring — all in one room where precision matters because everything is visible. Cabinets must be perfectly level because countertops sit on top of them. Backsplash tile needs to align with the countertop edge and cabinet bottoms. Appliances need proper electrical and plumbing connections. Dan handles all of these trades, which means your kitchen comes together seamlessly instead of as a relay race between different contractors.',
    whyChooseUs: 'Odds & Ends brings 20+ years of kitchen experience to every project. Dan installs cabinets with laser-level precision, tiles backsplashes with clean lines, hooks up appliances properly, and tests every plumbing connection under pressure. Because one person coordinates the whole project, everything fits together — cabinets align with countertops, backsplash meets the wall cleanly, and flooring transitions are seamless.',
    faqs: [
      { question: 'Do you do full kitchen remodels?', answer: 'We handle kitchen updates and renovations — cabinets, countertops, backsplash, flooring, sinks, faucets, appliance installation, islands, and more. We don\'t move walls, relocate plumbing, or do electrical rough-in — for that scope you\'d need a general contractor.' },
      { question: 'Do you install countertops?', answer: 'We install pre-fabricated laminate and butcher block countertops. For granite, quartz, or solid surface, you\'d need a fabricator, but we install the cabinets they sit on and coordinate timing.' },
      { question: 'Can you install appliances?', answer: 'Yes. We install dishwashers, microwaves, range hoods, and freestanding appliances. For gas appliance hookups, we recommend a licensed plumber for the gas line.' },
      { question: 'Do you install IKEA kitchens?', answer: 'Yes. We assemble and install IKEA cabinet systems regularly. We\'re familiar with their rail-hanging system and can handle the full install.' },
      { question: 'How long does a kitchen renovation take?', answer: 'A single upgrade like a backsplash takes 1–2 days. A bigger project with cabinets, countertops, flooring, and backsplash typically takes 1–2 weeks depending on scope.' },
      { question: 'Can you just do one thing like a backsplash?', answer: 'Absolutely. Not every kitchen project is a full renovation. A new backsplash, cabinet hardware swap, or faucet replacement on its own is a great way to refresh the space.' }
    ],
    relatedServices: ['tile-work', 'flooring', 'cabinet-installation', 'painting', 'light-fixture-installation', 'built-ins'],
    metaTitle: 'Kitchen Renovation & Updates | Rockland County, NY',
    metaDescription: 'Kitchen renovation in Rockland County. Cabinets, countertops, backsplash, appliances, flooring, islands, sinks, and faucets. One trusted handyman.',
    keywords: ['kitchen renovation Rockland County', 'kitchen remodel near me', 'cabinet installation NY', 'countertop installation', 'backsplash installation', 'kitchen update service', 'kitchen handyman'],
    image: '/images/services/cabinet-installation.jpg',
    altText: 'Kitchen with freshly installed cabinets and tile backsplash',
    processSteps: [
      { title: 'Consult & Plan', description: 'Dan visits your kitchen, discusses your priorities and budget, takes measurements, and creates a clear project plan and estimate.' },
      { title: 'Demo & Prep', description: 'Old cabinets, countertops, backsplash, or flooring are removed as needed. Walls are patched, surfaces prepped, and the workspace is protected.' },
      { title: 'Build It Out', description: 'Cabinets are installed level and plumb, countertops are set, backsplash is tiled, flooring is laid, and fixtures and appliances are connected.' },
      { title: 'Detail & Deliver', description: 'Hardware is installed, grout is sealed, every connection is tested, transitions are finished, and the kitchen is cleaned and ready to use.' }
    ],
    whyChooseUsCards: [
      { title: 'Complete Kitchen Capability', description: 'Cabinets, countertops, backsplash, flooring, sinks, faucets, appliances, islands, hardware — Dan does it all so you have one person to call.' },
      { title: 'Cabinet Precision', description: 'Laser-leveled, shimmed, and anchored into studs — cabinets are installed to exact specs so countertops sit perfectly flat.' },
      { title: 'Backsplash Expertise', description: 'Subway, mosaic, herringbone, large-format — we tile backsplashes with clean lines, consistent spacing, and proper sealing.' },
      { title: 'Appliance Installation', description: 'Dishwashers, microwaves, range hoods, and more — installed, leveled, and connected so they work right from day one.' },
      { title: 'No GC Overhead', description: 'You\'re hiring one experienced tradesman who does the work himself — not a contractor managing subcontractors with markup on top of markup.' },
      { title: 'Island & Storage Builds', description: 'Custom kitchen islands, pantry cabinets, pull-out shelving, and lazy susans — we build and install storage solutions that maximize your kitchen\'s potential.' }
    ]
  },
  {
    slug: 'flooring',
    name: 'Flooring Installation',
    shortDescription: 'Complete flooring installation and repair in Rockland County. Vinyl plank, laminate, engineered hardwood, floor tile, carpet removal, and subfloor prep.',
    heroHeadline: 'Flooring Installation in Rockland County, NY',
    heroSubheadline: 'Vinyl plank, laminate, engineered hardwood, floor tile — beautiful new floors installed right the first time.',
    intro: 'A new floor transforms an entire room. Odds & Ends Handyman Service handles complete flooring installation — from tearing out old carpet to laying the final transition strip. We work with all the most popular materials: luxury vinyl plank (LVP), laminate, engineered hardwood, and floor tile.\n\nEvery flooring job starts with proper preparation. We inspect and level the subfloor, install appropriate underlayment, and ensure moisture barriers are in place where needed. Whether you are updating a single bathroom or re-flooring your entire first floor, Dan brings 20+ years of hands-on experience to every cut and every seam.',
    commonProblems: [
      'Worn-out carpet that needs to be replaced with hard flooring',
      'Peeling or buckling vinyl plank from moisture or poor installation',
      'Squeaky or uneven subfloors that need leveling before new flooring',
      'Laminate edges lifting or separating at the seams',
      'Cracked or chipped floor tiles that need replacement',
      'Outdated linoleum or sheet vinyl ready for an upgrade',
      'Gaps or shifting in floating floor installations',
      'Water-damaged flooring around bathrooms or kitchens'
    ],
    jobExamples: [
      'Installed vinyl plank flooring throughout an entire living area in New City',
      'Ripped out old carpet and installed laminate flooring in a Nyack bedroom',
      'Laid engineered hardwood in a Haverstraw dining room',
      'Installed floor tile in a Stony Point bathroom',
      'Replaced water-damaged laminate in a Suffern kitchen',
      'Installed LVP throughout a full first floor in Pearl River',
      'Prepped and leveled a subfloor in a Nanuet basement before vinyl plank install',
      'Removed sheet vinyl and installed porcelain floor tile in a Congers laundry room'
    ],
    whyHireHandyman: 'Flooring installation requires precise measurements, proper subfloor preparation, and the right tools for each material type. One wrong cut or improper underlayment can ruin expensive materials and create problems that are costly to fix down the road. A professional ensures level installations, tight seams, proper transitions between rooms, and a finished result that looks and feels solid underfoot.',
    whyChooseUs: 'Odds & Ends has installed flooring in hundreds of Rockland County homes. Dan treats every job — whether a single bathroom or an entire first floor — with the same precision. We prep subfloors properly, use quality adhesives and underlayment, and achieve seamless transitions between rooms and materials.',
    faqs: [
      { question: 'What types of flooring do you install?', answer: 'We install luxury vinyl plank (LVP), laminate, engineered hardwood, and floor tile. For solid hardwood refinishing or wall-to-wall carpet installation, we can recommend a specialist.' },
      { question: 'How long does flooring installation take?', answer: 'A single room of vinyl plank or laminate typically takes a day. Larger projects like a full first floor usually take 2–3 days depending on subfloor prep and transitions.' },
      { question: 'Do you remove old flooring?', answer: 'Yes, we handle complete demo and removal of old flooring including carpet, tile, laminate, sheet vinyl, and linoleum. We also prep the subfloor for the new installation.' },
      { question: 'What about subfloor issues?', answer: 'We inspect every subfloor before installation. If there are squeaks, low spots, or moisture concerns, we address them first so your new floor sits flat and lasts.' },
      { question: 'Can you install flooring over existing floors?', answer: 'In some cases, yes. Vinyl plank and laminate can often go over existing hard surfaces if they are flat and in good condition. We will assess your situation and recommend the best approach.' },
      { question: 'Do you handle transitions between rooms?', answer: 'Absolutely. Clean transitions between different flooring types and rooms are one of the details that separate a professional install from a DIY job.' }
    ],
    relatedServices: ['tile-work', 'painting', 'drywall-repair', 'cabinet-installation', 'door-installation'],
    metaTitle: 'Professional Flooring Installation | Rockland County, NY',
    metaDescription: 'Professional flooring installation in Rockland County, NY. Vinyl plank, laminate, engineered hardwood, and floor tile. Subfloor prep and flawless finishing.',
    keywords: ['flooring installation Rockland County', 'vinyl plank flooring near me', 'laminate flooring NY', 'hardwood floor installation', 'floor tile installation', 'flooring contractor', 'floor replacement service'],
    image: '/images/services/flooring.jpg',
    altText: 'Vinyl plank flooring freshly installed in a Rockland County living room',
    processSteps: [
      { title: 'Evaluate & Measure', description: 'We assess the existing floor condition, check the subfloor for levelness and moisture, and take precise measurements for materials.' },
      { title: 'Demo & Prep', description: 'Old flooring is removed, the subfloor is leveled and repaired if needed, and proper underlayment or moisture barrier is installed.' },
      { title: 'Install with Precision', description: 'Flooring is cut and laid with consistent spacing, tight seams, proper adhesion, and clean transitions between rooms.' },
      { title: 'Finish & Clean Up', description: 'Transition strips are installed, baseboards are replaced or added, edges are sealed, and the entire area is cleaned up.' }
    ],
    whyChooseUsCards: [
      { title: 'Full-Service Installation', description: 'From demo and subfloor prep to installation, transitions, and finishing — we handle the complete job start to finish.' },
      { title: 'All Major Materials', description: 'Luxury vinyl plank, laminate, engineered hardwood, and floor tile — we install them all with equal precision.' },
      { title: 'Subfloor Prep Done Right', description: 'We fix squeaks, level uneven areas, and install proper underlayment so your new floor feels solid and lasts for years.' },
      { title: 'Clean Room-to-Room Transitions', description: 'Smooth, professional transitions between different flooring types and rooms — a detail that makes the whole job look right.' },
      { title: 'Complete Demo Included', description: 'Carpet, old tile, sheet vinyl, laminate — we rip it all out, haul it away, and leave a clean surface ready for the new floor.' }
    ]
  },
  {
    slug: 'tile-work',
    name: 'Tile Work',
    shortDescription: 'Backsplash installation, wall tile, shower surrounds, regrouting, and tile repair in Rockland County.',
    heroHeadline: 'Tile Work & Backsplash Installation in Rockland County, NY',
    heroSubheadline: 'Kitchen backsplashes, shower surrounds, accent walls, floor tile, and grout repair — done with precision.',
    intro: 'Tile work is one of those trades where the difference between professional and amateur is immediately visible. Odds & Ends Handyman Service handles all types of tile projects — kitchen backsplashes, bathroom shower surrounds, accent walls, floor tile, and full regrouting jobs.\n\nProper tile installation demands careful layout planning, precise cuts, correct thin-set application, and clean grout lines. Failing grout and cracked tiles are more than cosmetic issues — they let water penetrate behind walls and under floors, leading to mold and structural damage. Dan has been setting tile across Rockland County for over 20 years and treats every project with the same level of care, whether it is a small backsplash repair or a full shower retile.',
    commonProblems: [
      'Cracked, chipped, or loose wall or floor tiles',
      'Deteriorating or missing grout that lets water behind walls',
      'Stained or moldy grout lines in showers and backsplashes',
      'Hollow-sounding tiles indicating adhesive failure beneath',
      'Outdated backsplash that needs a modern refresh',
      'Shower tiles pulling away from the wall or leaking',
      'Uneven or lippy tile from poor original installation',
      'Caulk failure where tile meets tub, shower pan, or countertop'
    ],
    jobExamples: [
      'Installed subway tile backsplash in a Pearl River kitchen',
      'Re-grouted an entire shower surround and installed new wall tile in Nanuet',
      'Replaced cracked floor tiles in a Suffern kitchen',
      'Installed herringbone accent wall tile in a Nyack bathroom',
      'Retiled a full shower enclosure in New City',
      'Repaired and patched damaged tile behind a stove in Clarkstown',
      'Installed mosaic tile backsplash in a Haverstraw kitchen remodel',
      'Regrouted and sealed a Congers master bathroom floor'
    ],
    whyHireHandyman: 'Tile work demands careful cutting, precise thin-set application, and proper grout color matching. One wrong cut or uneven layout can ruin expensive materials and create problems that are very costly to redo. Professional installation means straight lines, consistent spacing, proper waterproofing behind wet-area tile, and grout sealed to last.',
    whyChooseUs: 'Tile is one of Dan\'s specialties. From full shower retiles to small backsplash installs, every job gets the same meticulous attention — precise cuts, tight grout lines, and proper sealing. We carry a range of grout colors and apply quality sealant to protect against moisture and staining.',
    faqs: [
      { question: 'What types of tile do you install?', answer: 'Ceramic, porcelain, glass, natural stone, subway tile, mosaic, and large-format tiles. We work with whatever material fits your design and budget.' },
      { question: 'Can you match my existing tile?', answer: 'We do our best. If you have spare tiles from the original installation, that is ideal. Otherwise, we can often source close matches from local tile suppliers.' },
      { question: 'How long does a backsplash take?', answer: 'A standard kitchen backsplash typically takes 1–2 days — one day for setting tile and one day for grouting after the thin-set cures.' },
      { question: 'Do you regrout showers?', answer: 'Yes, shower regrouting is one of our most requested services. We remove old failing grout, apply new grout, and seal it to prevent moisture penetration and mold growth.' },
      { question: 'Do you waterproof behind shower tile?', answer: 'Absolutely. Proper waterproofing behind shower and tub tile is critical. We use appropriate moisture barriers to protect the wall structure.' },
      { question: 'Can you install tile on a floor too?', answer: 'Yes. While we have a separate flooring service for large floor installations, floor tile — especially in bathrooms, entryways, and kitchens — is core tile work that we handle regularly.' }
    ],
    relatedServices: ['flooring', 'bathroom-renovation', 'kitchen-renovation', 'painting', 'drywall-repair', 'cabinet-installation'],
    metaTitle: 'Tile Work & Backsplash Installation | Rockland County, NY',
    metaDescription: 'Professional tile installation in Rockland County. Backsplashes, shower surrounds, wall tile, floor tile, regrouting, and tile repair. 20+ years experience.',
    keywords: ['tile installation Rockland County', 'backsplash installation near me', 'shower tile NY', 'floor tile installation', 'tile repair service', 'regrouting service', 'tile contractor'],
    image: '/images/services/tile-work.jpg',
    altText: 'Subway tile backsplash freshly installed in a kitchen',
    processSteps: [
      { title: 'Plan the Layout', description: 'We measure the area, plan tile layout for visual balance, and determine cut placements so no awkward slivers end up in visible spots.' },
      { title: 'Prep the Surface', description: 'Walls or floors are cleaned, leveled, and waterproofed where needed. Backer board is installed for wet areas to ensure a solid, lasting bond.' },
      { title: 'Set the Tile', description: 'Tiles are cut precisely, thin-set is applied evenly, and each tile is placed with consistent spacing using leveling clips for a flat, professional result.' },
      { title: 'Grout, Seal & Finish', description: 'Grout is applied, cleaned, and sealed. Caulk is placed at all change-of-plane joints. The area is cleaned up and ready to use.' }
    ],
    whyChooseUsCards: [
      { title: 'Precision Cuts & Layout', description: 'Careful layout planning means balanced tile placement with no awkward slivers — the details that make the whole project look intentional.' },
      { title: 'Wet-Area Expertise', description: 'Showers, tub surrounds, and kitchen backsplashes require proper waterproofing. We do it right to prevent costly water damage behind walls.' },
      { title: 'Grout & Seal Specialists', description: 'Color-matched grout, consistent lines, and proper sealing protect your investment from moisture, staining, and mold.' },
      { title: 'All Tile Types', description: 'Ceramic, porcelain, glass, mosaic, natural stone, subway, herringbone, large-format — we work with whatever your design calls for.' },
      { title: 'Repairs & Regrouting', description: 'Not every tile job is a full install. We handle spot repairs, single tile replacements, and full shower regrouting with the same care.' }
    ]
  },
  {
    slug: 'painting',
    name: 'Painting',
    shortDescription: 'Interior and exterior painting services in Rockland County. Rooms, trim, doors, and accent walls painted with precision.',
    heroHeadline: 'Professional Painting Services in Rockland County',
    heroSubheadline: 'Clean lines, smooth finishes, and colors that transform your space.',
    intro: 'A fresh coat of paint is one of the fastest and most affordable ways to transform any room in your home. But a truly professional paint job requires more than just rolling on color — it demands proper surface preparation, quality materials, clean cutting-in, and attention to detail that separates a polished result from a sloppy one.\n\nOdds & Ends Handyman Service provides interior and exterior painting throughout Rockland County. Whether you need a single accent wall, a full room repaint, or trim and door refinishing, Dan and the team deliver smooth, even results with crisp lines and zero mess. With over 20 years of painting experience in Rockland County homes, we know which products work best for every surface and situation.',
    commonProblems: [
      'Peeling or bubbling paint from moisture or poor prep',
      'Visible roller marks and uneven coverage',
      'Paint bleeding under tape for messy edges',
      'Outdated colors making rooms feel dark or dated',
      'Stains bleeding through new paint',
      'Trim and baseboards nicked and scuffed from daily wear'
    ],
    jobExamples: [
      'Painted an entire first floor open-concept space in New City',
      'Repainted kitchen cabinets a modern white in Suffern',
      'Painted exterior shutters and front door in Pearl River',
      'Applied primer and two coats in a nursery with zero-VOC paint in Nanuet',
      'Painted a dining room accent wall in deep navy in Nyack',
      'Refinished all interior trim and baseboards in a Stony Point cape cod'
    ],
    whyHireHandyman: 'Professional painting is all about preparation and technique. Proper taping, priming, and surface repair before any paint goes on is what separates a lasting, beautiful finish from one that peels or shows imperfections within months. A professional handyman also knows which paints and sheens work best for different rooms — flat for ceilings, eggshell for walls, semi-gloss for trim and wet areas.',
    whyChooseUs: 'Odds & Ends has painted hundreds of rooms across Rockland County, from cozy bedrooms to expansive living areas. We prep every surface thoroughly, use premium paints, and apply proper primer when needed. Dan cuts in by hand for razor-sharp edges and always applies two coats for full, even coverage. We protect your floors and furniture with drop cloths and clean up completely when finished.',
    faqs: [
      { question: 'Do you provide the paint?', answer: 'We can pick up paint for you from local suppliers, or you can purchase it yourself. We are happy to recommend colors, brands, and sheens for your specific project.' },
      { question: 'How long does it take to paint a room?', answer: 'An average bedroom takes one day including prep, priming if needed, and two coats. Larger rooms or those needing significant prep work may take two days.' },
      { question: 'Do you paint exteriors?', answer: 'We handle exterior touch-up painting, shutters, doors, trim, and small exterior areas. For a full house exterior repaint, we can recommend a painting contractor.' },
      { question: 'Do you move furniture?', answer: 'We move light furniture to the center of the room and cover it with drop cloths. For very heavy or delicate pieces, we ask that you arrange to have them moved beforehand.' },
      { question: 'Can you paint kitchen cabinets?', answer: 'Yes. Cabinet painting requires thorough degreasing, sanding, priming, and multiple coats of durable paint. It is one of the most transformative upgrades you can make to a kitchen.' }
    ],
    relatedServices: ['drywall-repair', 'custom-accent-walls', 'cabinet-installation', 'door-installation'],
    metaTitle: 'Professional Painting Services | Rockland County, NY',
    metaDescription: 'Professional painting services in Rockland County, NY. Interior rooms, trim, doors, accent walls. Clean lines and smooth finishes. Free estimates!',
    keywords: ['painting Rockland County', 'interior painting', 'room painting near me', 'house painter NY', 'accent wall painting', 'trim painting service', 'cabinet painting'],
    image: '/images/services/painting.jpg',
    altText: 'Odds & Ends painter applying second coat to accent wall',
    processSteps: [
      { title: 'Protect & Prep', description: 'We cover floors and furniture with drop cloths, tape edges precisely, and repair any wall imperfections before priming.' },
      { title: 'Prime Problem Areas', description: 'Stains, new drywall patches, and dramatic color changes all get proper primer so the topcoat covers evenly and lasts.' },
      { title: 'Cut In & Roll Two Coats', description: 'We cut in by hand for razor-sharp edges and roll two full coats for complete, even coverage with the right sheen for each surface.' },
      { title: 'Detail & Clean Up', description: 'We remove all tape, touch up any spots, clean all tools, and leave the room looking perfect and ready to enjoy.' }
    ],
    whyChooseUsCards: [
      { title: 'Razor-Sharp Lines', description: 'Dan cuts in by hand along ceilings, trim, and corners for crisp edges — no wavy tape lines or sloppy overlaps.' },
      { title: 'Proper Prep Work', description: 'Surface repair, sanding, cleaning, and priming before paint goes on — this is what separates a lasting finish from one that peels.' },
      { title: 'Right Sheen for Every Surface', description: 'Flat for ceilings, eggshell for walls, semi-gloss for trim and wet areas — we know what works where and why.' },
      { title: 'Zero-Mess Guarantee', description: 'Drop cloths on every surface, careful taping, and a full cleanup when we\'re done. Your home stays spotless.' },
      { title: 'Color Consultation', description: 'Not sure what color to choose? We help you pick shades that work with your lighting, furnishings, and personal style.' }
    ]
  },
  {
    slug: 'shelving-installation',
    name: 'Shelving Installation',
    shortDescription: 'Custom shelving installation in Rockland County. Floating shelves, bracket shelves, and pantry systems installed securely.',
    heroHeadline: 'Shelving Installation Services in Rockland County',
    heroSubheadline: 'Sturdy, level shelves installed exactly where you need them.',
    intro: 'Well-placed shelving adds both storage and style to any room. But shelves that are not properly anchored into studs or installed with the right hardware can sag, pull away from the wall, or even crash down — potentially damaging whatever was on display and the wall itself.\n\nOdds & Ends Handyman Service installs all types of shelving in homes throughout Rockland County. From sleek floating shelves in living rooms to heavy-duty pantry shelving in kitchens, Dan and the team ensure every shelf is level, securely anchored, and built to hold what you need it to hold. With 20+ years of experience, we handle everything from a single decorative shelf to full wall shelving systems.',
    commonProblems: [
      'Shelves sagging under weight from improper anchoring',
      'Floating shelves pulling away from the wall',
      'Uneven or unlevel shelf installations',
      'Wrong anchor type used for wall material',
      'Insufficient support for heavy items like books',
      'Poorly spaced shelves that waste vertical space'
    ],
    jobExamples: [
      'Installed five floating shelves in a New City living room',
      'Built heavy-duty pantry shelving in a Suffern kitchen',
      'Mounted adjustable bracket shelves in a Pearl River garage',
      'Installed decorative bathroom shelving in Nanuet',
      'Created a wall-to-wall bookshelf system in a Nyack home office',
      'Installed laundry room shelving above washer and dryer in Stony Point'
    ],
    whyHireHandyman: 'The key to a shelf that stays on the wall for years is hitting studs or using the correct heavy-duty anchors for your wall type. Floating shelves are particularly tricky because the mounting hardware is hidden — there is no room for error. A professional handyman ensures every shelf is anchored to support its intended load and installed perfectly level.',
    whyChooseUs: 'Odds & Ends has installed shelving in hundreds of Rockland County homes. Dan uses a laser level for precision alignment and always locates studs for maximum support. We work with you to determine optimal shelf height and spacing for your specific items and space. Whether it is a single floating shelf or a full garage shelving system, we deliver a clean, professional result.',
    faqs: [
      { question: 'Can you install floating shelves on plaster walls?', answer: 'Yes. Older Rockland County homes with plaster walls require specific anchoring techniques. We use toggle bolts and stud mounting to ensure floating shelves stay secure on plaster.' },
      { question: 'How much weight can shelves hold?', answer: 'It depends on the shelf type, material, and mounting method. A properly stud-mounted wood shelf can hold 50+ pounds. We will discuss your intended use and install accordingly.' },
      { question: 'Do you supply the shelves?', answer: 'We typically install shelves that you purchase. However, we can build custom wood shelves or recommend where to buy specific shelving for your needs.' },
      { question: 'Can you install shelves without damaging the wall?', answer: 'All shelf installations require holes in the wall for anchors or brackets. We minimize the number of holes by placing them strategically and hitting studs when possible.' }
    ],
    relatedServices: ['closet-system-installation', 'furniture-assembly', 'tv-mounting', 'built-ins'],
    metaTitle: 'Professional Shelving Installation | Rockland County, NY',
    metaDescription: 'Professional shelving installation in Rockland County, NY. Floating shelves, pantry shelving, and custom systems installed level and secure. Call today!',
    keywords: ['shelving installation Rockland County', 'floating shelves', 'shelf installation near me', 'pantry shelving', 'custom shelves NY', 'wall shelf mounting'],
    image: '/images/services/shelving-installation.jpg',
    altText: 'Odds & Ends installing floating shelves on living room wall',
    processSteps: [
      { title: 'Plan the Layout', description: 'We discuss your storage needs, determine optimal shelf height and spacing, and mark stud locations on the wall.' },
      { title: 'Select the Right Hardware', description: 'Based on your wall type and intended load, we choose the correct anchors, brackets, or hidden mounting systems.' },
      { title: 'Install Level & Secure', description: 'Using a laser level, we mount each shelf perfectly level and anchored into structural support or heavy-duty anchors.' },
      { title: 'Final Check & Clean Up', description: 'We verify every shelf is solid under load, clean up all dust and debris, and ensure the placement works for your needs.' }
    ],
    whyChooseUsCards: [
      { title: 'Laser-Level Precision', description: 'Every shelf is installed using a laser level for perfect alignment — no eyeballing or guessing.' },
      { title: 'Stud-Mounted When Possible', description: 'We always locate and anchor into studs for maximum weight support, especially for heavy items like books and kitchenware.' },
      { title: 'Any Wall Type', description: 'Drywall, plaster, brick, concrete — we have the right hardware and technique for every wall found in Rockland County homes.' },
      { title: 'Floating Shelf Experts', description: 'Hidden-bracket floating shelves require zero margin for error. We install them tight to the wall, perfectly level, and secure.' },
      { title: 'Custom Spacing', description: 'We configure shelf heights based on what you\'re actually storing — not just even increments that waste vertical space.' }
    ]
  },
  {
    slug: 'cabinet-installation',
    name: 'Cabinet Installation',
    shortDescription: 'Cabinet installation and replacement in Rockland County. Kitchen, bathroom, and storage cabinets installed professionally.',
    heroHeadline: 'Cabinet Installation Services in Rockland County',
    heroSubheadline: 'Kitchen, bathroom, and storage cabinets installed with precision.',
    intro: 'New cabinets can completely transform a kitchen, bathroom, or laundry room — but only if they are installed correctly. Cabinets that are not level, plumb, and securely fastened will develop problems quickly: doors that will not close, drawers that stick, and gaps that ruin the finished look.\n\nOdds & Ends Handyman Service installs cabinets throughout Rockland County. Dan and the team handle stock cabinets, semi-custom units, and wall-mounted storage cabinets for kitchens, bathrooms, garages, and laundry rooms. With over 20 years of experience, we ensure every cabinet is perfectly aligned, securely mounted, and functioning smoothly.',
    commonProblems: [
      'Cabinets not level causing doors to swing open or closed on their own',
      'Gaps between cabinets or between cabinets and walls',
      'Cabinets pulling away from the wall due to poor anchoring',
      'Drawers that stick or do not slide smoothly',
      'Uneven countertop surfaces from unlevel base cabinets',
      'Outdated cabinets that waste space and look worn'
    ],
    jobExamples: [
      'Installed a full set of stock kitchen cabinets in New City',
      'Hung wall-mounted bathroom cabinets in Suffern',
      'Installed a laundry room storage cabinet system in Pearl River',
      'Replaced under-sink kitchen cabinet damaged by water in Nanuet',
      'Installed garage wall cabinets for workshop storage in Nyack',
      'Added a pantry cabinet to an underused kitchen corner in Stony Point'
    ],
    whyHireHandyman: 'Cabinet installation demands precision. Base cabinets must be shimmed perfectly level because countertops sit on top of them — any variance shows immediately. Wall cabinets must be anchored into studs to support the weight of dishes, glasses, and supplies. Doors and drawers need to be adjusted for proper alignment. This is not a job where close enough is good enough.',
    whyChooseUs: 'Odds & Ends has installed cabinets in kitchens, bathrooms, and utility spaces across Rockland County. Dan uses laser levels and shims to achieve perfect alignment on every job, even in older homes with uneven walls and floors. We adjust all doors and drawers for smooth operation and install soft-close hardware when requested. Our attention to detail ensures a result that looks and functions like a professional kitchen remodel.',
    faqs: [
      { question: 'Do you install IKEA kitchen cabinets?', answer: 'Yes. IKEA cabinets use a specific rail-hanging system that we are very familiar with. We assemble and install IKEA kitchens regularly.' },
      { question: 'Can you replace just a few cabinets?', answer: 'Absolutely. We can replace individual damaged cabinets, add new ones to existing runs, or install a single cabinet in a bathroom or laundry room.' },
      { question: 'Do you install countertops too?', answer: 'We install pre-fabricated laminate countertops. For stone or solid-surface countertops, you will need a countertop fabricator, but we can handle the cabinet installation they sit on.' },
      { question: 'How long does cabinet installation take?', answer: 'A single cabinet takes 1 to 2 hours. A full kitchen with upper and lower cabinets typically takes 1 to 2 days depending on the complexity.' }
    ],
    relatedServices: ['shelving-installation', 'painting', 'door-installation', 'built-ins'],
    metaTitle: 'Professional Cabinet Installation | Rockland County, NY',
    metaDescription: 'Professional cabinet installation in Rockland County, NY. Kitchen, bathroom, and storage cabinets installed level and secure. 20+ years experience.',
    keywords: ['cabinet installation Rockland County', 'kitchen cabinet install', 'cabinet replacement near me', 'bathroom cabinet installation', 'IKEA cabinet install NY', 'cabinet hanging service'],
    image: '/images/services/cabinet-installation.jpg',
    altText: 'Odds & Ends installing kitchen cabinets during renovation',
    processSteps: [
      { title: 'Measure & Layout', description: 'We check walls and floors for level and plumb, then mark precise layout lines for every cabinet position.' },
      { title: 'Hang Upper Cabinets', description: 'Wall cabinets are mounted on a ledger rail, leveled, shimmed, and screwed into studs for rock-solid support.' },
      { title: 'Set & Level Base Cabinets', description: 'Base cabinets are shimmed to level on the floor, connected to each other, and anchored securely to the wall.' },
      { title: 'Align Doors & Hardware', description: 'Every door and drawer is adjusted for smooth operation, consistent gaps, and proper alignment. Hardware is installed to your specifications.' }
    ],
    whyChooseUsCards: [
      { title: 'Precision Alignment', description: 'Laser levels and shims ensure every cabinet is perfectly level and plumb — even on the uneven walls and floors common in older Rockland County homes.' },
      { title: 'All Cabinet Systems', description: 'Stock, semi-custom, IKEA, and RTA cabinets — we\'re experienced with every major system and assembly method.' },
      { title: 'Soft-Close Upgrades', description: 'We install soft-close hinges and drawer slides on request for a modern, quiet cabinet experience.' },
      { title: 'Full Kitchen Competence', description: 'Upper and lower cabinets, fillers, end panels, crown molding — we handle the complete kitchen cabinet installation.' },
      { title: 'Countertop Ready', description: 'Base cabinets are installed to exact specifications so your countertop fabricator has a perfectly level surface to work with.' }
    ]
  },
  {
    slug: 'picture-hanging',
    name: 'Picture Hanging',
    shortDescription: 'Professional picture and art hanging in Rockland County. Gallery walls, mirrors, and heavy frames hung securely and level.',
    heroHeadline: 'Picture & Art Hanging Services in Rockland County',
    heroSubheadline: 'Your art deserves to be displayed perfectly.',
    intro: 'Hanging pictures and artwork may seem simple, but getting frames perfectly level, properly spaced, and securely anchored is an art in itself. A crooked frame or a nail that pulls out of the wall can damage both your art and your walls. Gallery walls with multiple pieces require careful planning and precise measurements.\n\nOdds & Ends Handyman Service provides professional picture and art hanging throughout Rockland County. Dan and the team hang everything from lightweight prints to heavy mirrors, gallery wall arrangements, and oversized artwork. With 20+ years of experience, we know the right hanging hardware for every wall type and frame weight — so your art stays secure and looks perfect.',
    commonProblems: [
      'Pictures hanging crooked or at inconsistent heights',
      'Nails pulling out of drywall under frame weight',
      'Heavy mirrors not properly anchored',
      'Gallery wall spacing looking uneven or cluttered',
      'Excessive holes from failed hanging attempts',
      'Uncertainty about proper hanging height and arrangement'
    ],
    jobExamples: [
      'Arranged and hung a 12-piece gallery wall in a New City stairway',
      'Mounted a 50-pound framed mirror above a Suffern fireplace',
      'Hung artwork throughout a newly renovated Pearl River home',
      'Installed a salon-style art wall in a Nanuet dining room',
      'Hung oversized canvas prints in a Nyack living room',
      'Mounted a heavy antique mirror with French cleats in Stony Point'
    ],
    whyHireHandyman: 'Heavy frames and mirrors require anchoring into studs or using heavy-duty wall anchors. Using the wrong hardware can result in a frame crashing to the floor, damaging the art, the frame, and the wall. Gallery walls require advance planning and precise measurements — every hole counts. A professional gets the spacing, height, and hardware right the first time with minimal wall damage.',
    whyChooseUs: 'Odds & Ends has hung art in homes and offices across Rockland County for over two decades. Dan uses laser levels, measures twice, and carries a full range of hanging hardware including French cleats for heavy pieces, museum-style hangers for fine art, and toggle bolts for plaster walls. We help you find the perfect arrangement before making a single hole.',
    faqs: [
      { question: 'What is the right height to hang pictures?', answer: 'The standard is to center artwork at 57 to 60 inches from the floor — average eye level. We adjust based on the room, furniture below, and ceiling height.' },
      { question: 'Can you hang heavy mirrors?', answer: 'Yes. We use French cleats, toggle bolts, or stud-mounted hardware depending on the weight and wall type. We regularly hang mirrors over 50 pounds.' },
      { question: 'Can you help me plan a gallery wall layout?', answer: 'Absolutely. We can lay out your frames on the floor to find the best arrangement, then transfer that layout to the wall with precise measurements.' },
      { question: 'What about plaster walls?', answer: 'Many Rockland County homes have plaster walls, which require different anchoring techniques than drywall. We carry the right hardware for plaster and use careful drilling to avoid cracking.' }
    ],
    relatedServices: ['tv-mounting', 'shelving-installation', 'custom-accent-walls'],
    metaTitle: 'Professional Picture Hanging Service | Rockland County, NY',
    metaDescription: 'Professional picture and art hanging services in Rockland County, NY. Gallery walls, mirrors, heavy frames hung level and secure. Call today!',
    keywords: ['picture hanging Rockland County', 'art hanging service', 'gallery wall installation', 'mirror hanging near me', 'picture hanging service NY', 'heavy frame mounting'],
    image: '/images/services/picture-hanging.jpg',
    altText: 'Gallery wall of framed artwork hung on a Rockland County stairway',
    processSteps: [
      { title: 'Plan the Arrangement', description: 'We discuss placement, help choose the right height and grouping, and can lay out gallery walls on the floor before committing to holes.' },
      { title: 'Select the Right Hardware', description: 'Based on frame weight and wall type, we choose the appropriate hangers — from standard hooks to French cleats and toggle bolts.' },
      { title: 'Hang Level & Precise', description: 'Using a laser level, we hang each piece at the perfect height with precise spacing between grouped pieces.' },
      { title: 'Step Back & Adjust', description: 'We evaluate the final arrangement from viewing distance and make any fine adjustments to height, spacing, or angle.' }
    ],
    whyChooseUsCards: [
      { title: 'Gallery Wall Specialists', description: 'We plan and execute multi-piece arrangements with consistent spacing and alignment across the entire wall.' },
      { title: 'Heavy Frame & Mirror Safe', description: 'French cleats, toggle bolts, and stud-mounted hardware for pieces that weigh 50 pounds or more.' },
      { title: 'Minimal Wall Damage', description: 'We measure precisely and hang right the first time — no constellation of extra holes from trial and error.' },
      { title: 'Plaster Wall Expertise', description: 'Many Rockland County homes have plaster walls that crack easily. We use the right techniques and hardware to avoid damage.' },
      { title: 'Eye-Level Science', description: 'We place art at the standard 57-60 inch center height and adjust for furniture, ceiling height, and room proportions.' }
    ]
  },
  {
    slug: 'air-filter-replacement',
    name: 'Air Filter Replacement',
    shortDescription: 'HVAC air filter replacement in Rockland County. Keep your system running efficiently with regular filter changes.',
    heroHeadline: 'Air Filter Replacement in Rockland County',
    heroSubheadline: 'Breathe easier and protect your HVAC system with fresh filters.',
    intro: 'Your HVAC air filter is one of the most important and most neglected maintenance items in your home. A dirty, clogged filter forces your heating and cooling system to work harder, driving up energy bills and shortening equipment life. It also allows dust, allergens, and pollutants to circulate through your living spaces.\n\nOdds & Ends Handyman Service provides air filter replacement for homeowners throughout Rockland County. Dan and the team replace standard furnace filters, return vent filters, and whole-house filtration media. We can set up a regular replacement schedule so you never have to think about it again. With 20+ years of home maintenance experience, we also spot other HVAC issues during our visit.',
    commonProblems: [
      'Clogged filter reducing airflow and HVAC efficiency',
      'Increased energy bills from overworked system',
      'Dust buildup throughout the home despite regular cleaning',
      'Allergy symptoms worsening indoors',
      'Filter size confusion when purchasing replacements',
      'Difficulty accessing filter in tight utility spaces',
      'Forgetting to change filters on schedule'
    ],
    jobExamples: [
      'Replaced a severely clogged furnace filter in New City',
      'Set up quarterly filter replacement schedule for Suffern homeowner',
      'Changed filters in two HVAC zones in Pearl River',
      'Replaced hard-to-reach return vent filters in Nanuet',
      'Upgraded a homeowner from fiberglass to MERV-11 pleated filters in Nyack',
      'Replaced filters in a Stony Point home as part of seasonal maintenance visit'
    ],
    whyHireHandyman: 'While changing an air filter sounds simple, many homeowners either forget to do it, buy the wrong size, or have filters in hard-to-reach locations. Some HVAC systems have multiple filters in different locations. A handyman takes the guesswork out of filter maintenance and can combine it with other small tasks during the same visit, saving you time and effort.',
    whyChooseUs: 'Odds & Ends offers air filter replacement as a standalone service or as part of a home maintenance visit. Dan verifies the correct filter size, installs the right MERV rating for your system and needs, and checks that the filter housing is properly sealed. We can set up recurring visits so your filters are always fresh — especially important during Rockland County\'s heating season.',
    faqs: [
      { question: 'How often should air filters be changed?', answer: 'Most filters should be changed every 1 to 3 months, depending on the filter type, whether you have pets, and the season. We can recommend the right schedule for your home.' },
      { question: 'Do you supply the filters?', answer: 'We can bring standard-size filters to your appointment. For unusual sizes or specialty filters, we will coordinate in advance or you can have them on hand.' },
      { question: 'What MERV rating do you recommend?', answer: 'For most homes, MERV 8 to 11 offers a good balance of filtration and airflow. Higher MERV ratings filter more particles but can restrict airflow in some systems.' },
      { question: 'Can you combine filter replacement with other tasks?', answer: 'Absolutely. Many customers have us change filters while we handle other small maintenance tasks like smoke detector testing, light bulb replacement, or minor repairs.' }
    ],
    relatedServices: ['smoke-detector-testing-and-replacement', 'smart-home-device-setup', 'home-office-setup'],
    metaTitle: 'Professional Air Filter Replacement | Rockland County, NY',
    metaDescription: 'Professional HVAC air filter replacement in Rockland County, NY. Improve air quality and system efficiency. Regular schedules available. Call today!',
    keywords: ['air filter replacement Rockland County', 'HVAC filter change', 'furnace filter replacement', 'air filter service near me', 'home air quality NY', 'filter change service'],
    image: '/images/services/air-filter-replacement.jpg',
    altText: 'Replacing a furnace air filter in a utility closet',
    processSteps: [
      { title: 'Identify Your System', description: 'We locate all filter access points in your HVAC system and verify the correct filter size and type for each location.' },
      { title: 'Remove & Inspect', description: 'Old filters are removed and we inspect the filter housing, checking for gaps or damage that could let unfiltered air bypass.' },
      { title: 'Install Fresh Filters', description: 'New filters are installed in the correct orientation with a proper seal, using the right MERV rating for your system and needs.' },
      { title: 'Schedule Future Changes', description: 'We can set up a recurring maintenance schedule so your filters are always changed on time — you\'ll never have to think about it.' }
    ],
    whyChooseUsCards: [
      { title: 'Right Filter, Right Fit', description: 'We verify the exact size and MERV rating your system needs — no guessing at the hardware store or ordering the wrong size online.' },
      { title: 'Every Access Point', description: 'Some HVAC systems have multiple filters in different locations. We find and replace them all in a single visit.' },
      { title: 'Recurring Service Available', description: 'We set up quarterly or seasonal filter changes so you never forget — especially important during Rockland County\'s long heating season.' },
      { title: 'Bundled Maintenance', description: 'Combine filter changes with smoke detector testing, light bulb swaps, or other quick maintenance tasks in a single visit to save time.' },
      { title: 'System Health Check', description: 'While we\'re at your HVAC unit, we spot-check for any obvious issues like unusual noise, leaks, or debris that might need attention.' }
    ]
  },
  {
    slug: 'doorknob-and-handle-replacement',
    name: 'Doorknob and Handle Replacement',
    shortDescription: 'Doorknob and handle replacement in Rockland County. Upgrade hardware on interior and exterior doors quickly.',
    heroHeadline: 'Doorknob & Handle Replacement in Rockland County',
    heroSubheadline: 'Fresh hardware that looks great and works perfectly.',
    intro: 'Doorknobs and handles get used dozens of times a day, and over time they loosen, stick, or simply look dated. Upgrading your door hardware is one of the easiest ways to modernize your home and improve the feel of every room. But mismatched hardware, incorrect sizing, or improper installation can leave you with doors that do not latch or locks that do not align.\n\nOdds & Ends Handyman Service replaces doorknobs, lever handles, deadbolts, and door hardware throughout Rockland County. Dan and the team work quickly and precisely, ensuring every new handle operates smoothly and every lock aligns perfectly. With 20+ years of experience, we handle everything from quick interior knob swaps to exterior lockset upgrades.',
    commonProblems: [
      'Loose doorknobs that spin or wobble',
      'Sticky latches that do not retract properly',
      'Outdated brass or gold-tone hardware',
      'Door locks that do not align with strike plates',
      'Mismatched hardware throughout the home',
      'Child-safety lever covers no longer needed'
    ],
    jobExamples: [
      'Replaced all interior doorknobs with brushed nickel lever handles in New City',
      'Upgraded front and back door locksets in Suffern',
      'Installed new bathroom privacy locks throughout a Pearl River home',
      'Swapped all brass knobs for matte black handles in Nanuet',
      'Replaced a sticky exterior deadbolt and handle set in Nyack',
      'Installed child-proof lever covers on three doors in Stony Point'
    ],
    whyHireHandyman: 'While replacing a doorknob seems simple, issues arise when the new hardware does not match the existing bore holes, when strike plates need repositioning, or when the latch does not align properly. Exterior locksets are more complex, with deadbolts requiring precise alignment for security. A professional ensures everything works correctly and your doors close and lock properly.',
    whyChooseUs: 'Odds & Ends replaces door hardware efficiently across Rockland County. Dan can swap an entire house worth of doorknobs in a single visit, ensuring consistent style and finish throughout. We adjust strike plates and door jambs as needed so every latch catches perfectly. We also dispose of your old hardware and clean up completely.',
    faqs: [
      { question: 'Should I buy the new hardware or will you?', answer: 'Most customers buy their own hardware to choose the exact style and finish. We can advise on compatibility and recommend brands before you purchase.' },
      { question: 'How long does it take to replace a doorknob?', answer: 'A straightforward knob replacement takes about 15 to 20 minutes per door. If strike plate adjustment is needed, add another 10 minutes.' },
      { question: 'Can you replace knobs with lever handles?', answer: 'Yes, as long as your doors have standard bore holes. Most modern lever handles are designed to fit existing door preparations without modification.' },
      { question: 'Do you install smart locks?', answer: 'Yes. We install keypad locks, smart deadbolts, and app-controlled locks. We ensure they are properly aligned and help you with initial setup if needed.' }
    ],
    relatedServices: ['door-installation', 'smart-home-device-setup', 'painting'],
    metaTitle: 'Professional Doorknob Replacement | Rockland County, NY',
    metaDescription: 'Professional doorknob and handle replacement in Rockland County, NY. Interior and exterior hardware upgraded quickly. All styles and finishes. Call today!',
    keywords: ['doorknob replacement Rockland County', 'door handle replacement', 'door hardware installation near me', 'lever handle installation', 'deadbolt replacement NY', 'door lock replacement'],
    image: '/images/services/doorknob-and-handle-replacement.jpg',
    altText: 'Installing brushed nickel lever handles on interior doors',
    processSteps: [
      { title: 'Assess Existing Hardware', description: 'We check your door\'s bore holes, backset measurement, and latch configuration to ensure compatibility with the new hardware.' },
      { title: 'Remove Old Hardware', description: 'The old knob, latch, and strike plate are carefully removed without damaging the door or frame.' },
      { title: 'Install New Hardware', description: 'The new handle, latch, and strike plate are installed and adjusted so the door latches smoothly and locks align perfectly.' },
      { title: 'Test & Fine-Tune', description: 'Every door is opened, closed, latched, and locked multiple times to verify smooth, reliable operation.' }
    ],
    whyChooseUsCards: [
      { title: 'Whole-House Consistency', description: 'We can replace every doorknob in your home in a single visit for a cohesive, updated look throughout all your rooms.' },
      { title: 'Strike Plate Alignment', description: 'We adjust or reposition strike plates and door jambs so every latch catches perfectly — no doors that won\'t stay closed.' },
      { title: 'Smart Lock Installation', description: 'We install keypad locks, smart deadbolts, and app-controlled locks with full alignment and initial setup.' },
      { title: 'All Finishes & Styles', description: 'Brushed nickel, matte black, oil-rubbed bronze, satin chrome — we work with every style and finish on the market.' },
      { title: 'Quick Turnaround', description: 'Most doorknob replacements take just 15-20 minutes per door, so a whole house can be done in a few hours.' }
    ]
  },
  {
    slug: 'smoke-detector-testing-and-replacement',
    name: 'Smoke Detector Testing and Replacement',
    shortDescription: 'Smoke detector testing and replacement in Rockland County. Keep your family safe with properly functioning detectors.',
    heroHeadline: 'Smoke Detector Testing & Replacement in Rockland County',
    heroSubheadline: 'Peace of mind starts with working smoke detectors.',
    intro: 'Smoke detectors save lives, but only when they are working properly. Batteries die, sensors degrade over time, and many homeowners have detectors that are well past their 10-year replacement date. Testing and maintaining your smoke detectors is one of the most important safety tasks in any home.\n\nOdds & Ends Handyman Service tests and replaces smoke detectors and carbon monoxide detectors for homeowners throughout Rockland County. Dan and the team check every detector in your home, replace batteries, swap out expired units, and install new detectors where coverage is lacking. With 20+ years of experience, we know the placement requirements and help ensure your home meets current safety standards.',
    commonProblems: [
      'Smoke detectors chirping from low batteries',
      'Detectors older than 10 years with degraded sensors',
      'Missing detectors in bedrooms or on every level',
      'Detectors painted over during room painting',
      'Carbon monoxide detectors missing near gas appliances',
      'Hard-wired detectors that have stopped working',
      'Difficulty reaching ceiling-mounted detectors'
    ],
    jobExamples: [
      'Tested and replaced batteries in all detectors throughout a New City home',
      'Installed new smoke detectors in every bedroom of a Suffern colonial',
      'Replaced expired detectors with 10-year sealed-battery units in Pearl River',
      'Added carbon monoxide detectors near furnace and garage in Nanuet',
      'Installed interconnected wireless smoke detectors in a Nyack bungalow',
      'Replaced hard-wired detectors throughout a Stony Point split-level'
    ],
    whyHireHandyman: 'Smoke detector placement matters — detectors installed in the wrong location, too close to kitchens or bathrooms, or painted over may not function properly in an emergency. Hard-wired detectors require electrical knowledge to replace. A professional handyman ensures proper placement, tests every unit, and makes sure your entire home has adequate coverage.',
    whyChooseUs: 'Odds & Ends takes home safety seriously. Dan tests every detector in your home using manufacturer-approved methods and replaces units that are expired or malfunctioning. We install detectors at the correct height and location per safety guidelines, and we help you understand the difference between ionization and photoelectric sensors. We also pair this service with other maintenance tasks for an efficient visit.',
    faqs: [
      { question: 'How often should smoke detectors be replaced?', answer: 'Every 10 years, regardless of whether they seem to be working. The sensors degrade over time and may not detect smoke reliably. Check the manufacturing date on the back of each unit.' },
      { question: 'Do you replace hard-wired smoke detectors?', answer: 'Yes. We disconnect the old unit, connect the new one to the existing wiring, and test the interconnection with other detectors in the system.' },
      { question: 'Where should smoke detectors be placed?', answer: 'Inside every bedroom, outside each sleeping area, on every level of the home including the basement, and near kitchens (but not too close). We will assess your home and recommend any additions.' },
      { question: 'Do you also handle carbon monoxide detectors?', answer: 'Yes. CO detectors should be installed near bedrooms and on every level. If your home has gas appliances, a fireplace, or an attached garage, CO detectors are essential.' }
    ],
    relatedServices: ['air-filter-replacement', 'smart-home-device-setup', 'light-fixture-installation'],
    metaTitle: 'Expert Smoke Detector Replacement | Rockland County, NY',
    metaDescription: 'Professional smoke detector testing and replacement in Rockland County, NY. Batteries, expired units, and CO detectors. Keep your family safe. Call!',
    keywords: ['smoke detector replacement Rockland County', 'smoke alarm testing', 'smoke detector installation near me', 'CO detector installation', 'fire safety NY', 'smoke alarm battery replacement'],
    image: '/images/services/smoke-detector-testing-and-replacement.jpg',
    altText: 'Testing a ceiling-mounted smoke detector',
    processSteps: [
      { title: 'Full Home Audit', description: 'We locate and test every smoke and CO detector in your home, noting each unit\'s age, type, and condition.' },
      { title: 'Replace Expired Units', description: 'Detectors older than 10 years or with failing sensors are swapped out with new units — battery-powered or hard-wired.' },
      { title: 'Fill Coverage Gaps', description: 'We identify locations where detectors are missing and install new units per current safety placement guidelines.' },
      { title: 'Test & Document', description: 'Every detector is tested after installation, and we note the replacement date so you know when the next change is due.' }
    ],
    whyChooseUsCards: [
      { title: 'Complete Home Coverage', description: 'We check every floor, every bedroom, and every area near gas appliances — not just the ones that are chirping.' },
      { title: '10-Year Sealed Battery Units', description: 'We install modern sealed-battery detectors that last a full decade with no battery changes needed.' },
      { title: 'Hard-Wired Replacement', description: 'We safely disconnect and reconnect hard-wired detectors, maintaining interconnection with the rest of your system.' },
      { title: 'CO Detectors Included', description: 'We install and test carbon monoxide detectors near bedrooms, gas appliances, and attached garages — essential for Rockland County homes.' },
      { title: 'Peace of Mind', description: 'Working detectors are the most important safety feature in your home. We make sure yours will perform when they\'re needed.' }
    ]
  },
  {
    slug: 'curtain-and-blind-installation',
    name: 'Curtain and Blind Installation',
    shortDescription: 'Curtain rod and blind installation in Rockland County. Window treatments hung level and secure on any wall type.',
    heroHeadline: 'Curtain & Blind Installation in Rockland County',
    heroSubheadline: 'Window treatments installed perfectly for privacy, style, and light control.',
    intro: 'Window treatments complete a room — adding privacy, controlling light, and enhancing your home\'s style. But installing curtain rods, blinds, and shades involves precise measurements, level mounting, and the right hardware for your wall type. A crooked curtain rod or blinds that do not operate smoothly can undermine the entire look.\n\nOdds & Ends Handyman Service installs curtain rods, drapery hardware, blinds, shades, and shutters for homeowners throughout Rockland County. Dan and the team ensure every rod is level, every bracket is secure, and every blind operates smoothly. With over 20 years of experience, we handle everything from simple tension rods to heavy drapery systems on motorized tracks.',
    commonProblems: [
      'Curtain rods pulling out of drywall from inadequate anchors',
      'Blinds not level or operating unevenly',
      'Incorrect measurements leading to gaps or coverage issues',
      'Heavy drapes requiring reinforced mounting',
      'Multiple windows needing consistent height and spacing',
      'Cellular shades jamming or not raising evenly'
    ],
    jobExamples: [
      'Installed curtain rods in five bedrooms of a New City colonial',
      'Hung custom cellular shades throughout a Suffern home',
      'Mounted heavy drapery rods with center support brackets in Pearl River',
      'Installed plantation shutters in a Nanuet living room',
      'Hung blackout roller shades in a nursery in Nyack',
      'Installed a double curtain rod system for sheers and drapes in Stony Point'
    ],
    whyHireHandyman: 'Curtain rods and blinds need to be mounted level and at the right height to look professional. Heavy drapes require brackets anchored into studs to prevent the rod from sagging or pulling away from the wall. Blinds need precise inside or outside mount measurements and careful installation to operate smoothly. A professional gets these details right on every window.',
    whyChooseUs: 'Odds & Ends has installed window treatments in hundreds of Rockland County homes. Dan mounts curtain rods at the optimal height above the window — typically 4 to 6 inches — to make windows appear larger and rooms feel taller. We use laser levels for multi-window installations to ensure consistent height across an entire room. Every blind is tested for smooth operation before we leave.',
    faqs: [
      { question: 'Should curtain rods be mounted above the window frame?', answer: 'Yes, mounting the rod 4 to 6 inches above the window frame and extending it 3 to 6 inches beyond each side makes windows look larger and allows drapes to clear the glass when open.' },
      { question: 'Can you install blinds inside the window frame?', answer: 'Yes. Inside-mount blinds create a clean, built-in look. We verify that the window frame has enough depth and is square enough for a proper inside mount.' },
      { question: 'How long does curtain rod installation take?', answer: 'About 20 to 30 minutes per window for standard curtain rods. Blinds and shades take slightly longer. A whole-house installation can usually be completed in half a day.' },
      { question: 'Do you install motorized shades?', answer: 'Yes. We install motorized roller shades and cellular shades. We mount the hardware and ensure the motor operates correctly. For smart home integration, we can set that up as well.' }
    ],
    relatedServices: ['picture-hanging', 'shelving-installation', 'smart-home-device-setup', 'painting'],
    metaTitle: 'Curtain & Blind Installation | Rockland County, NY',
    metaDescription: 'Professional curtain rod and blind installation in Rockland County, NY. Window treatments mounted level and secure. All types and styles. Call today!',
    keywords: ['curtain installation Rockland County', 'blind installation', 'curtain rod hanging near me', 'window treatment installation', 'shade installation NY', 'drapery hardware mounting'],
    image: '/images/services/curtain-and-blind-installation.jpg',
    altText: 'Curtain rod mounted above a window with draped fabric',
    processSteps: [
      { title: 'Measure the Windows', description: 'We take precise inside and outside mount measurements for every window, noting any differences between frames.' },
      { title: 'Determine Mounting Position', description: 'We select the optimal rod height and extension — typically 4-6 inches above the frame to make windows appear taller.' },
      { title: 'Install Brackets & Hardware', description: 'Brackets are anchored into studs or with heavy-duty anchors, leveled across multiple windows for a consistent look throughout the room.' },
      { title: 'Hang & Test', description: 'Curtains are hung, blinds are mounted, and every piece is tested for smooth operation. We adjust until everything is perfect.' }
    ],
    whyChooseUsCards: [
      { title: 'Multi-Window Alignment', description: 'We use a laser level to ensure every rod and blind is at the exact same height across an entire room — consistent and clean.' },
      { title: 'Heavy Drapery Support', description: 'For thick, heavy drapes, we install center support brackets and anchor into studs to prevent sagging over time.' },
      { title: 'All Window Treatment Types', description: 'Curtain rods, cellular shades, roller blinds, plantation shutters, motorized shades — we install them all.' },
      { title: 'Room-Enhancing Placement', description: 'Rods mounted high and wide make windows look bigger and rooms feel taller — we know the design tricks that elevate a space.' },
      { title: 'Smooth Operation Guaranteed', description: 'Every blind and shade is tested for smooth raising, lowering, and tilting before we leave your home.' }
    ]
  },
  {
    slug: 'ceiling-fan-installation-and-replacement',
    name: 'Ceiling Fan Installation and Replacement',
    shortDescription: 'Ceiling fan installation and replacement in Rockland County. Stay comfortable year-round with a properly installed fan.',
    heroHeadline: 'Ceiling Fan Installation in Rockland County, NY',
    heroSubheadline: 'Cool in summer, efficient in winter — ceiling fans installed right.',
    intro: 'A ceiling fan is one of the most energy-efficient ways to stay comfortable year-round. In summer, the downdraft creates a cooling breeze that lets you raise the thermostat. In winter, reversing the fan circulates warm air from the ceiling back down to living level. But ceiling fan installation requires a fan-rated electrical box, secure mounting, and proper wiring — it is not a simple light fixture swap.\n\nOdds & Ends Handyman Service installs and replaces ceiling fans throughout Rockland County. Dan and the team handle everything from straightforward fan replacements to new fan installations where a light fixture currently exists. With 20+ years of experience, we ensure every fan is safely wired, securely mounted, perfectly balanced, and ready to keep you comfortable.',
    commonProblems: [
      'Wobbly or noisy ceiling fan from poor installation',
      'Standard electrical box not rated for fan weight and vibration',
      'Fan too large or too small for the room',
      'Pull chains broken or difficult to reach',
      'Fan mounted on a sloped ceiling without proper adapter',
      'Outdated or unattractive fan needing replacement'
    ],
    jobExamples: [
      'Replaced a dated ceiling fan with a modern remote-controlled model in New City',
      'Installed a fan-rated box and new fan where a light fixture was in Suffern',
      'Hung a 52-inch fan on a vaulted ceiling in Pearl River',
      'Replaced a wobbly fan with a balanced, quiet model in Nanuet',
      'Installed matching fans in two bedrooms in Nyack',
      'Upgraded a pull-chain fan to a wall-switch and remote model in Stony Point'
    ],
    whyHireHandyman: 'Ceiling fans are heavier than light fixtures and generate vibration during operation. They must be mounted to a fan-rated electrical box attached directly to a ceiling joist — a standard light fixture box can fail, sending the fan crashing down. Wiring must be correct for the fan motor, lights, and any remote or wall control. A professional ensures safe, secure installation.',
    whyChooseUs: 'Odds & Ends has installed ceiling fans in bedrooms, living rooms, porches, and sunrooms across Rockland County. Dan always verifies the electrical box is fan-rated and upgrades it if necessary before mounting. We balance every fan to eliminate wobble, set up all controls, and test the fan on every speed before leaving. Clean, safe, and done right.',
    faqs: [
      { question: 'Can you install a fan where there is currently just a light?', answer: 'Yes. We upgrade the electrical box to a fan-rated box and install the fan using the existing wiring. This is one of our most common fan installation requests.' },
      { question: 'Can I keep the light and add a fan?', answer: 'Most ceiling fans include integrated lights. We can install a fan with a light kit so you get both functions from one fixture.' },
      { question: 'What size fan do I need?', answer: 'Room size determines fan size. Generally: up to 75 sq ft needs a 29-36 inch fan, 76-144 sq ft needs 36-42 inches, 144-225 sq ft needs 44-50 inches, and over 225 sq ft needs 52+ inches.' },
      { question: 'Can you install a fan on a vaulted ceiling?', answer: 'Yes. Vaulted or sloped ceilings require an angled mounting adapter and a longer downrod. We carry these accessories and handle vaulted installations regularly.' }
    ],
    relatedServices: ['light-fixture-installation', 'smart-home-device-setup', 'painting'],
    metaTitle: 'Professional Ceiling Fan Installation | Rockland County, NY',
    metaDescription: 'Professional ceiling fan installation and replacement in Rockland County, NY. Fan-rated boxes, balanced mounting, and remote setup. Call for a quote!',
    keywords: ['ceiling fan installation Rockland County', 'ceiling fan replacement', 'fan installation near me', 'ceiling fan mounting NY', 'fan installation service', 'ceiling fan electrician'],
    image: '/images/services/ceiling-fan-installation-and-replacement.jpg',
    altText: 'Ceiling fan installation in a Rockland County bedroom',
    processSteps: [
      { title: 'Shut Off Power & Remove', description: 'We kill the circuit at the breaker, verify it\'s dead, and carefully remove the existing light fixture or old fan.' },
      { title: 'Upgrade the Junction Box', description: 'We verify the electrical box is fan-rated for the weight and vibration of your new fan. If not, we install a proper fan-rated box anchored to the ceiling joist.' },
      { title: 'Assemble & Mount', description: 'The fan is assembled, wired correctly for the motor and light kit, and hung securely from the rated junction box.' },
      { title: 'Balance, Test & Configure', description: 'We run the fan on every speed, check for wobble, balance the blades, and set up the remote or wall control.' }
    ],
    whyChooseUsCards: [
      { title: 'Fan-Rated Box Guaranteed', description: 'We always verify and upgrade the junction box if needed — a standard light fixture box cannot safely support a ceiling fan.' },
      { title: 'Wobble-Free Installation', description: 'Every fan is balanced during installation so it runs quietly and smoothly on every speed setting.' },
      { title: 'Remote & Wall Control Setup', description: 'We install and program remotes, wall controls, and smart switches so you have easy, convenient fan control from anywhere.' },
      { title: 'Vaulted Ceiling Capable', description: 'Sloped and cathedral ceilings need angled adapters and extended downrods — we handle these installations regularly.' },
      { title: 'Year-Round Comfort', description: 'We set the correct rotation direction for summer cooling and winter heat circulation, and show you how to switch between seasons.' }
    ]
  },
  {
    slug: 'smart-home-device-setup',
    name: 'Smart Home Device Setup',
    shortDescription: 'Smart home device installation and setup in Rockland County. Thermostats, doorbells, cameras, and smart speakers configured.',
    heroHeadline: 'Smart Home Device Setup in Rockland County',
    heroSubheadline: 'Smart thermostats, doorbells, cameras, and more — installed and configured.',
    intro: 'Smart home technology can make your life more convenient, secure, and energy-efficient — but only if the devices are set up correctly. From smart thermostats that learn your schedule to video doorbells that let you see who is at the door from anywhere, these devices require proper installation, Wi-Fi configuration, and app setup to work reliably.\n\nOdds & Ends Handyman Service installs and configures smart home devices for homeowners throughout Rockland County. Dan and the team handle smart thermostats, video doorbells, security cameras, smart locks, smart light switches, and voice assistant devices. With 20+ years of adapting to new home technology, we bridge the gap between buying a smart device and actually getting it to work.',
    commonProblems: [
      'Smart thermostat not compatible with existing HVAC wiring',
      'Video doorbell Wi-Fi connection dropping frequently',
      'Security cameras not positioned for optimal coverage',
      'Smart locks not syncing with phone apps',
      'Smart switches requiring neutral wire that older homes lack',
      'Multiple smart devices not communicating with each other',
      'Difficulty navigating setup apps and configurations'
    ],
    jobExamples: [
      'Installed a Nest thermostat and configured scheduling in New City',
      'Set up a Ring doorbell and two security cameras in Suffern',
      'Installed smart light switches throughout a Pearl River home',
      'Configured a smart lock and keypad on a Nanuet front door',
      'Set up Alexa-controlled smart plugs and lights in Nyack',
      'Installed a smart garage door opener and configured the app in Stony Point'
    ],
    whyHireHandyman: 'Smart home devices often require basic electrical work, drilling, mounting, and technical configuration. A smart thermostat involves wire identification and connection. Video doorbells need proper mounting and electrical hookup. Security cameras need strategic positioning, drilling, and cable routing. A handyman handles both the physical installation and the technical setup in one visit.',
    whyChooseUs: 'Odds & Ends stays current with the latest smart home technology so homeowners in Rockland County do not have to. Dan installs the hardware securely, connects everything to your Wi-Fi, configures the apps, and walks you through how to use your new devices before leaving. We troubleshoot connectivity issues and ensure everything works together seamlessly.',
    faqs: [
      { question: 'Can you install a smart thermostat in an older home?', answer: 'Usually, yes. Most smart thermostats work with standard heating systems. Some require a C-wire, which we can add if your thermostat wiring does not include one.' },
      { question: 'Do I need strong Wi-Fi for smart devices?', answer: 'Yes. Smart devices rely on Wi-Fi. If your signal is weak in certain areas, we can recommend and install Wi-Fi extenders or mesh systems.' },
      { question: 'Can you set up voice control with Alexa or Google?', answer: 'Yes. We connect your smart devices to your voice assistant and configure routines and automations so you can control your home by voice.' },
      { question: 'What smart home brands do you work with?', answer: 'We work with all major brands including Nest, Ring, Ecobee, Schlage, Lutron, TP-Link, Wyze, and more. If you have a specific device, we can install it.' }
    ],
    relatedServices: ['light-fixture-installation', 'doorknob-and-handle-replacement', 'ceiling-fan-installation-and-replacement', 'home-office-setup'],
    metaTitle: 'Professional Smart Home Device Setup | Rockland County, NY',
    metaDescription: 'Professional smart home device installation in Rockland County, NY. Thermostats, doorbells, cameras, locks, and more set up and configured. Call today!',
    keywords: ['smart home setup Rockland County', 'smart thermostat installation', 'Ring doorbell installation near me', 'smart home installation NY', 'home automation setup', 'smart lock installation'],
    image: '/images/services/smart-home-device-setup.jpg',
    altText: 'Smart thermostat mounted on hallway wall',
    processSteps: [
      { title: 'Review Devices & Goals', description: 'We discuss which devices you have, what you want them to do, and check compatibility with your existing systems and Wi-Fi network.' },
      { title: 'Mount & Install Hardware', description: 'Thermostats, doorbells, cameras, and locks are physically installed with proper wiring, mounting, and strategic positioning.' },
      { title: 'Connect & Configure', description: 'Each device is connected to your Wi-Fi, paired with its app, and configured with your preferences, schedules, and automations.' },
      { title: 'Walk You Through It', description: 'Before we leave, we demonstrate how to use each device and answer your questions so you\'re confident managing your smart home.' }
    ],
    whyChooseUsCards: [
      { title: 'Physical + Digital Setup', description: 'We handle both the hardware installation and the app configuration in one visit — no separate tech call needed afterward.' },
      { title: 'Wi-Fi Troubleshooting', description: 'If your signal is weak where a device needs to go, we can recommend and install Wi-Fi extenders or mesh systems.' },
      { title: 'All Major Brands', description: 'Nest, Ring, Ecobee, Schlage, Lutron, Wyze, TP-Link, and more — we work with whatever brand and ecosystem you\'ve chosen.' },
      { title: 'Older Home Wiring Solutions', description: 'Smart thermostats and switches sometimes need a C-wire or neutral wire. We add them when your existing wiring falls short.' },
      { title: 'Patient Training', description: 'We walk you through every app, routine, and voice command so you\'re comfortable with your new tech before we leave.' }
    ]
  },
  {
    slug: 'home-office-setup',
    name: 'Home Office Setup',
    shortDescription: 'Home office setup and organization in Rockland County. Desks, monitors, shelving, and cable management installed professionally.',
    heroHeadline: 'Home Office Setup Services in Rockland County',
    heroSubheadline: 'A productive, organized workspace — set up right from day one.',
    intro: 'Working from home is here to stay, and a well-organized home office makes all the difference in productivity and comfort. From assembling desks and mounting monitors to installing shelving, managing cables, and setting up proper lighting, creating an efficient workspace involves more tasks than most people realize.\n\nOdds & Ends Handyman Service creates functional, organized home offices for remote workers throughout Rockland County. Dan and the team handle desk assembly, monitor mounting, cable management systems, shelving installation, and all the physical setup that turns a spare room or corner into a real workspace. With 20+ years of experience, we help you avoid the ergonomic and organizational mistakes that make home offices frustrating.',
    commonProblems: [
      'Tangled cables and power strips creating a messy workspace',
      'Desk assembled incorrectly or wobbling',
      'Monitor at wrong height causing neck strain',
      'Insufficient shelving and storage for supplies',
      'Poor lighting causing eye strain',
      'No dedicated workspace leading to working from the couch or kitchen table'
    ],
    jobExamples: [
      'Set up a complete two-monitor home office with cable management in New City',
      'Assembled an L-shaped desk and installed wall shelving in Suffern',
      'Mounted dual monitors and installed a keyboard tray in Pearl River',
      'Created a home office in a converted closet in Nanuet',
      'Installed under-desk cable management and a UPS shelf in Nyack',
      'Built out a full home office with desk, shelving, and task lighting in Stony Point'
    ],
    whyHireHandyman: 'Setting up a home office involves multiple tasks that individually seem small but add up to a full day of work: desk assembly, monitor mounting, cable routing, shelf installation, and lighting. Each task requires different tools and skills. A handyman handles everything in a single visit, creating a workspace that is organized, ergonomic, and ready to use.',
    whyChooseUs: 'Odds & Ends has helped dozens of Rockland County residents set up productive home offices. Dan approaches each setup with an eye for ergonomics, cable management, and practical organization. We mount monitors at the correct height, route cables cleanly, install shelving within arm\'s reach, and make sure your workspace is both functional and pleasant. One visit, fully set up.',
    faqs: [
      { question: 'What does home office setup include?', answer: 'It varies by client. Common tasks include desk assembly, monitor mounting, shelf installation, cable management, lighting installation, and organizing the workspace. We customize the visit to your needs.' },
      { question: 'Can you set up a standing desk?', answer: 'Yes. We assemble standing desks, sit-stand converters, and motorized desk frames. We also mount monitors and manage cables for standing desk setups.' },
      { question: 'Do you handle the technology setup?', answer: 'We handle the physical setup — assembly, mounting, and cable management. For computer configuration, networking, or software issues, an IT specialist would be more appropriate.' },
      { question: 'How long does a home office setup take?', answer: 'A basic setup with desk assembly and monitor mounting takes 2 to 3 hours. A full office build-out with shelving, cable management, and lighting can take half a day.' }
    ],
    relatedServices: ['furniture-assembly', 'shelving-installation', 'tv-mounting', 'smart-home-device-setup', 'light-fixture-installation'],
    metaTitle: 'Professional Home Office Setup | Rockland County, NY',
    metaDescription: 'Professional home office setup in Rockland County, NY. Desk assembly, monitor mounting, cable management, and shelving. Work from home comfortably!',
    keywords: ['home office setup Rockland County', 'desk assembly', 'monitor mounting near me', 'home office organization', 'cable management service NY', 'remote work setup'],
    image: '/images/services/home-office-setup.jpg',
    altText: 'Dual monitor setup with cable management on desk',
    processSteps: [
      { title: 'Plan the Layout', description: 'We discuss your work habits, equipment, and available space to determine the optimal desk placement, monitor position, and storage arrangement.' },
      { title: 'Assemble & Position', description: 'Desks, shelving, and storage are assembled and placed for the best ergonomic setup — proper monitor height, keyboard position, and chair distance.' },
      { title: 'Mount & Manage Cables', description: 'Monitors are mounted at the correct height, and all cables are routed through management trays, clips, or raceways for a clean workspace.' },
      { title: 'Lighting & Final Touches', description: 'Task lighting is installed, power strips are organized, and every element is tested and adjusted for a workspace that\'s ready to use.' }
    ],
    whyChooseUsCards: [
      { title: 'Ergonomic Focus', description: 'Monitors at eye level, keyboard at elbow height, proper chair distance — we set up your office to prevent strain and fatigue.' },
      { title: 'Cable Management Pros', description: 'Under-desk trays, cable clips, and raceways keep your workspace clean and professional — no tangled mess of wires on the floor.' },
      { title: 'One-Visit Setup', description: 'Desk assembly, monitor mounting, shelving, cable management, and lighting — all done in a single appointment.' },
      { title: 'Any Space Works', description: 'Spare bedroom, basement corner, closet conversion — we optimize whatever space you have into a functional, comfortable workspace.' },
      { title: 'Standing Desk Ready', description: 'We assemble motorized standing desks and sit-stand converters with integrated cable management that moves with the desk.' }
    ]
  },
  {
    slug: 'closet-system-installation',
    name: 'Closet System Installation',
    shortDescription: 'Closet organization system installation in Rockland County. Custom and modular closet systems that maximize your storage.',
    heroHeadline: 'Closet System Installation in Rockland County',
    heroSubheadline: 'Maximize every inch of closet space with a professionally installed system.',
    intro: 'A cluttered, disorganized closet wastes space and makes your morning routine more stressful than it needs to be. A well-designed closet system with double hang rods, adjustable shelving, drawers, and dedicated spaces for shoes and accessories can double or triple your closet\'s usable storage.\n\nOdds & Ends Handyman Service installs closet organization systems throughout Rockland County. Dan and the team work with modular systems from retailers like IKEA, ClosetMaid, and Elfa, as well as custom-cut shelving solutions. With 20+ years of experience, we ensure every component is level, secure, and configured to maximize your specific closet dimensions.',
    commonProblems: [
      'Single rod and shelf wasting vertical space',
      'Shelving that sags under the weight of clothing',
      'No drawer space in the closet for folded items',
      'Wire shelving that items fall through or tip on',
      'Closet too deep, causing items to get lost in the back',
      'Inconsistent organization from haphazard added hooks and baskets'
    ],
    jobExamples: [
      'Installed a full IKEA PAX wardrobe system in a New City master closet',
      'Built a custom reach-in closet system with double rods and shelving in Suffern',
      'Installed an Elfa closet system in a Pearl River walk-in closet',
      'Created a children\'s closet system with low rods and cubbies in Nanuet',
      'Installed a ClosetMaid wire-to-laminate conversion in Nyack',
      'Built a custom entryway closet with hooks, shelves, and shoe storage in Stony Point'
    ],
    whyHireHandyman: 'Closet systems require precise measurement, level installation, and secure anchoring to support the weight of a full wardrobe. Modular systems come with many components that must be assembled and mounted correctly. A professional ensures the system is level, stable, and configured to make the best use of your specific closet dimensions and storage needs.',
    whyChooseUs: 'Odds & Ends has transformed closets across Rockland County from chaotic catch-alls to organized, efficient storage spaces. Dan measures your closet precisely and configures the system to maximize every inch. We install components level and secure, with reinforced anchoring for heavy loads. Whether it is a simple reach-in makeover or a full walk-in system, we deliver a result that changes how you use the space.',
    faqs: [
      { question: 'Do you design custom closet systems?', answer: 'We help configure modular systems to fit your space and needs. For fully custom built-in closets with specialty finishes, we can recommend a closet design company, but we install many modular and semi-custom systems.' },
      { question: 'Can you install IKEA closet systems?', answer: 'Yes. We regularly install IKEA PAX, ALGOT, and BOAXEL systems. We handle the assembly and mounting for a precise fit.' },
      { question: 'How long does closet system installation take?', answer: 'A simple reach-in closet system takes 3 to 4 hours. A walk-in closet with multiple components can take a full day.' },
      { question: 'Will you remove the old closet setup?', answer: 'Yes. We remove existing rods, shelves, and hardware, patch any wall damage, and install your new system on a clean surface.' }
    ],
    relatedServices: ['shelving-installation', 'furniture-assembly', 'built-ins', 'painting'],
    metaTitle: 'Professional Closet Organization | Rockland County, NY',
    metaDescription: 'Professional closet organization system installation in Rockland County, NY. Modular, IKEA, and custom closet systems installed. Maximize your storage!',
    keywords: ['closet system installation Rockland County', 'closet organizer installation', 'closet organization near me', 'IKEA PAX installation', 'walk-in closet system NY', 'closet makeover service'],
    image: '/images/services/closet-system-installation.jpg',
    altText: 'Custom closet organizer with double rods and shelving',
    processSteps: [
      { title: 'Measure & Design', description: 'We take precise closet measurements and discuss your wardrobe and storage needs to configure the optimal layout for your space.' },
      { title: 'Remove the Old Setup', description: 'Existing rods, shelves, and hardware are removed, and we patch any wall damage for a clean starting surface.' },
      { title: 'Install the System', description: 'Components are assembled, leveled, and securely anchored to wall studs with proper spacing for your specific items.' },
      { title: 'Organize & Adjust', description: 'Shelves and rods are set to the right heights for your wardrobe, and all adjustable components are configured for immediate use.' }
    ],
    whyChooseUsCards: [
      { title: 'Maximized Space', description: 'We configure double-hang rods, adjustable shelves, and drawer units to squeeze every usable inch from your closet dimensions.' },
      { title: 'All Major Systems', description: 'IKEA PAX, ClosetMaid, Elfa, BOAXEL, and custom-cut solutions — we\'re experienced with every popular closet system.' },
      { title: 'Kid-Friendly Configurations', description: 'Children\'s closets get low-hung rods, accessible shelves, and cubbies sized for smaller clothes and shoes.' },
      { title: 'Old Setup Removed', description: 'We remove everything from your old closet — rods, shelves, anchors — and patch wall damage before installing the new system.' },
      { title: 'Walk-In or Reach-In', description: 'Whether it\'s a small reach-in or a spacious walk-in, we design and install a system that transforms how you use the space.' }
    ]
  },
  {
    slug: 'custom-accent-walls',
    name: 'Custom Accent Walls',
    shortDescription: 'Custom accent wall installation in Rockland County. Board and batten, shiplap, wainscoting, and wood feature walls.',
    heroHeadline: 'Custom Accent Walls in Rockland County, NY',
    heroSubheadline: 'Board and batten, shiplap, wainscoting, and more — crafted for your space.',
    intro: 'A well-designed accent wall adds architectural interest, texture, and personality to any room. Whether you want the clean lines of board and batten, the warmth of shiplap, the elegance of wainscoting, or a bold geometric pattern, a custom accent wall creates a focal point that elevates your entire space.\n\nOdds & Ends Handyman Service designs and installs custom accent walls throughout Rockland County. Dan and the team build board and batten, shiplap, wainscoting, slat walls, and panel molding feature walls. With over 20 years of carpentry experience, we handle every detail from design and layout to precise cutting, installation, caulking, and painting for a finished result that looks like it was always part of the home.',
    commonProblems: [
      'Blank walls that feel flat and uninspired',
      'DIY accent wall attempts that look uneven or amateur',
      'Incorrect spacing or pattern layout',
      'Gaps between boards and wall surface',
      'Poor caulking and finishing leaving visible seams',
      'Accent wall that does not suit the room proportions'
    ],
    jobExamples: [
      'Built a full-height board and batten accent wall in a New City dining room',
      'Installed white shiplap on a bedroom wall in Suffern',
      'Created a wainscoting feature with chair rail in a Pearl River hallway',
      'Built a modern wood slat accent wall in a Nanuet living room',
      'Installed panel molding in a box pattern in a Nyack master bedroom',
      'Created a herringbone wood feature wall in a Stony Point family room'
    ],
    whyHireHandyman: 'Accent walls require precise measurements, consistent spacing, accurate miter cuts, and careful caulking to look professional. Board and batten needs perfectly plumb vertical boards. Shiplap needs level horizontal planks. Any error in layout compounds across the entire wall. A professional carpenter achieves the crisp, clean lines that make an accent wall look intentional and polished.',
    whyChooseUs: 'Odds & Ends has built accent walls across Rockland County in a variety of styles and materials. Dan plans the layout mathematically to ensure even spacing and symmetry. We use quality trim materials, construction adhesive, and pin nails for a secure hold. Every joint is caulked, every nail hole filled, and the finished wall is primed and painted to perfection. The result looks like custom millwork.',
    faqs: [
      { question: 'What accent wall styles do you offer?', answer: 'We build board and batten, shiplap, wainscoting, panel molding, wood slat walls, picture frame molding, and geometric patterns. We can also work from inspiration photos you provide.' },
      { question: 'How long does an accent wall take?', answer: 'Most accent walls take 1 to 2 days depending on the style and wall size. Board and batten and shiplap are typically one-day projects. More complex patterns may take two days.' },
      { question: 'Do you paint the accent wall?', answer: 'Yes. We prime and paint the finished wall as part of the project. A painted accent wall in a bold color or crisp white looks dramatically better than raw wood.' },
      { question: 'How much does an accent wall cost?', answer: 'Cost depends on the style, wall size, and materials. We provide a detailed quote after discussing your vision and measuring the wall. Accent walls are one of the most affordable ways to add architectural detail to a room.' },
      { question: 'Can you do an accent wall in a bathroom?', answer: 'Yes. We use moisture-appropriate materials and finishes for bathroom accent walls. Board and batten and wainscoting are popular bathroom choices.' }
    ],
    relatedServices: ['painting', 'drywall-repair', 'built-ins', 'shelving-installation', 'cabinet-installation'],
    metaTitle: 'Professional Custom Accent Walls | Rockland County, NY',
    metaDescription: 'Professional custom accent wall installation in Rockland County, NY. Board and batten, shiplap, wainscoting, and wood features. Transform any room!',
    keywords: ['accent wall Rockland County', 'board and batten installation', 'shiplap wall near me', 'wainscoting installation NY', 'custom feature wall', 'accent wall contractor', 'wood slat wall'],
    image: '/images/services/custom-accent-walls.jpg',
    altText: 'White board and batten accent wall in a dining room',
    processSteps: [
      { title: 'Design & Layout', description: 'We discuss your vision, select the style, and mathematically plan the layout for even spacing and symmetry across the entire wall.' },
      { title: 'Measure & Cut', description: 'All trim pieces are precisely measured and cut — including tight miter joints and scribed fits against uneven ceilings or floors.' },
      { title: 'Install & Secure', description: 'Boards are attached with construction adhesive and pin nails for a secure, lasting hold. Every piece is checked for plumb or level.' },
      { title: 'Caulk, Fill & Paint', description: 'Nail holes are filled, joints are caulked seamlessly, and the entire wall is primed and painted for a finished result that looks like custom millwork.' }
    ],
    whyChooseUsCards: [
      { title: 'Mathematical Precision', description: 'We calculate board spacing mathematically for perfect symmetry — no uneven gaps or awkward end pieces that reveal a rushed job.' },
      { title: 'Multiple Styles', description: 'Board and batten, shiplap, wainscoting, slat walls, panel molding, herringbone — we build whatever style suits your space.' },
      { title: 'Full Paint Finish', description: 'Every accent wall is caulked, filled, primed, and painted as part of the project — delivered as a polished, complete feature.' },
      { title: 'Any Room, Any Wall', description: 'Bedrooms, dining rooms, bathrooms, hallways — we build accent walls wherever you want to add architectural character.' },
      { title: 'Inspiration to Installation', description: 'Bring us a Pinterest photo or magazine page and we\'ll make it real. We work from reference images regularly.' }
    ]
  },
  {
    slug: 'built-ins',
    name: 'Built-Ins',
    shortDescription: 'Custom built-in shelving, bookcases, and storage solutions in Rockland County. Maximize space with permanent, integrated furniture.',
    heroHeadline: 'Custom Built-Ins in Rockland County, NY',
    heroSubheadline: 'Bookcases, window seats, and storage — built to fit your space perfectly.',
    intro: 'Built-in shelving, bookcases, window seats, and storage units add character, functionality, and value to your home in a way that freestanding furniture simply cannot match. They maximize awkward spaces, create architectural interest, and provide permanent storage that feels like a natural part of the home.\n\nOdds & Ends Handyman Service designs and builds custom built-ins for homeowners throughout Rockland County. Dan and the team create built-in bookcases, entertainment centers, window seats with storage, mudroom cubbies, and alcove shelving. With over 20 years of carpentry experience, we craft built-ins that look like they have always been part of the home — because they are built specifically for your space.',
    commonProblems: [
      'Awkward alcoves and niches that waste space',
      'Freestanding furniture that does not fit properly or looks out of place',
      'Lack of storage in living rooms, hallways, or entryways',
      'Unused space around fireplaces or under windows',
      'Need for display and storage that matches existing trim and molding',
      'Rooms that lack architectural character or focal points'
    ],
    jobExamples: [
      'Built floor-to-ceiling bookcases flanking a fireplace in New City',
      'Created a mudroom built-in with cubbies, hooks, and bench in Suffern',
      'Built a window seat with storage drawers in a Pearl River bay window',
      'Installed an entertainment center built-in with adjustable shelves in Nanuet',
      'Built alcove shelving in a Nyack living room with crown molding detail',
      'Created a hallway built-in bookcase in a Stony Point colonial'
    ],
    whyHireHandyman: 'Built-ins require custom measurements, precise cutting, and integration with existing trim and architectural details. Every wall has quirks — slight bows, out-of-plumb corners, uneven floors — that a built-in must accommodate to look seamless. Shelves need to be level and evenly spaced, facings need to align, and the finished piece needs to look like it was always part of the home. This is skilled carpentry work.',
    whyChooseUs: 'Odds & Ends has built custom built-ins across Rockland County for over two decades. Dan measures meticulously and scribes every piece to fit your walls precisely, accommodating the imperfections that every home has. We match existing trim profiles and paint finishes so the built-in integrates seamlessly with your home\'s style. From concept to completion, we handle design, building, installation, caulking, and painting.',
    faqs: [
      { question: 'How long does a built-in project take?', answer: 'A simple built-in bookcase takes 2 to 3 days. Larger projects like flanking fireplace units or mudroom systems may take 3 to 5 days. We will provide a timeline with your estimate.' },
      { question: 'What materials do you use?', answer: 'We typically use a combination of cabinet-grade plywood for shelves and structure, with solid wood or MDF trim for facings and moldings. We paint everything to match your room.' },
      { question: 'Can you match my existing trim and molding?', answer: 'Yes. We source matching trim profiles or custom-mill them to match your home\'s existing moldings. The goal is always a built-in that looks original to the house.' },
      { question: 'Do built-ins add home value?', answer: 'Yes. Quality built-ins are consistently cited by real estate professionals as a feature that adds both value and buyer appeal. They are a permanent improvement that stays with the home.' },
      { question: 'Can you build around a TV or fireplace?', answer: 'Absolutely. Entertainment center built-ins and fireplace surrounds with flanking bookcases are among our most popular projects. We accommodate wiring, cable management, and heat clearances.' }
    ],
    relatedServices: ['shelving-installation', 'cabinet-installation', 'custom-accent-walls', 'painting', 'closet-system-installation'],
    metaTitle: 'Professional Custom Built-Ins | Rockland County, NY',
    metaDescription: 'Custom built-in bookcases, shelving, and storage in Rockland County. Designed and built to fit your space perfectly. Call for a consultation!',
    keywords: ['custom built-ins Rockland County', 'built-in bookcase', 'built-in shelving near me', 'custom bookcases NY', 'window seat built-in', 'fireplace built-ins', 'mudroom built-in'],
    image: '/images/services/built-ins.jpg',
    altText: 'Floor-to-ceiling built-in bookcases flanking a fireplace',
    processSteps: [
      { title: 'Consult & Design', description: 'We discuss your vision, measure the space meticulously, and plan the built-in to integrate with your home\'s existing trim and architectural style.' },
      { title: 'Build & Assemble', description: 'Cabinet-grade plywood shelves and structures are built, with solid wood or MDF trim and facings cut to match your home\'s molding profiles.' },
      { title: 'Install & Scribe', description: 'The unit is installed in place, scribed to fit your walls precisely, and shimmed for perfect level and plumb despite any wall irregularities.' },
      { title: 'Caulk, Fill & Paint', description: 'Every seam is caulked, every nail hole is filled, and the built-in is primed and painted to match your room — looking like it was always there.' }
    ],
    whyChooseUsCards: [
      { title: 'Scribed to Fit', description: 'We custom-scribe every piece to your walls, accounting for the bows, bumps, and out-of-plumb corners that every home has.' },
      { title: 'Matching Trim & Molding', description: 'We source or custom-mill trim to match your existing profiles so the built-in looks original to the house, not bolted on.' },
      { title: 'Adds Home Value', description: 'Quality built-ins are consistently cited by real estate professionals as a feature that increases both buyer appeal and resale value.' },
      { title: 'Versatile Designs', description: 'Bookcases, entertainment centers, window seats, mudroom cubbies, fireplace surrounds — we build whatever your space needs.' },
      { title: 'Concept to Completion', description: 'From initial design through building, installation, caulking, and painting — one team handles every step of the project.' }
    ]
  },
  {
    slug: 'outdoor-structures',
    name: 'Outdoor Structures',
    shortDescription: 'Custom pergolas, canopies, sheds, and gazebos built and installed in Rockland County. Designed to fit your yard and built to last.',
    heroHeadline: 'Custom Outdoor Structures in Rockland County, NY',
    heroSubheadline: 'Pergolas, canopies, sheds, and gazebos — built to last and designed for your space.',
    intro: 'Your backyard should be more than just a lawn. A well-built outdoor structure transforms unused yard space into a functional extension of your home — whether it is a pergola for shaded dining, a gazebo for relaxing, a canopy over your patio, or a shed for storage and workshop space.\n\nOdds & Ends Handyman Service designs and builds custom outdoor structures throughout Rockland County. Dan and the team handle everything from ground preparation and footings to framing, roofing, and finishing. With over 20 years of experience building in Rockland County backyards, we know how to work with local terrain, drainage patterns, and weather conditions to create structures that look great and stand up to New York seasons.',
    commonProblems: [
      'No shade or shelter in the backyard for outdoor entertaining',
      'Need for additional storage space that a garage cannot provide',
      'Existing shed or gazebo is rotting, leaning, or falling apart',
      'Want a defined outdoor living area for dining or lounging',
      'Backyard lacks visual interest or a focal point',
      'Pre-fab kits that are too flimsy or do not fit the available space'
    ],
    jobExamples: [
      'Built a custom cedar pergola over a patio in New City',
      'Assembled and anchored a 12x16 storage shed in Suffern',
      'Constructed a poolside cabana with curtain rods and lighting in Pearl River',
      'Built a freestanding gazebo with built-in bench seating in Nanuet',
      'Installed a canopy structure over an outdoor kitchen area in Nyack',
      'Built a custom firewood shed with ventilation in Stony Point'
    ],
    whyHireHandyman: 'Outdoor structures need to withstand wind, rain, snow, and years of UV exposure. Proper footings, pressure-treated or naturally rot-resistant lumber, correct hardware, and weatherproof finishing are all critical. A poorly built structure can lean, warp, or collapse entirely. Pre-fab kits often skimp on structural integrity — a professional build ensures your investment lasts decades, not seasons.',
    whyChooseUs: 'Odds & Ends has built pergolas, gazebos, sheds, and canopies across Rockland County for over 20 years. Dan works with you on design and placement, considering sun angles, drainage, and how you actually want to use the space. We use quality lumber, stainless steel hardware, and proper construction techniques. Every structure we build is level, plumb, square, and built to handle whatever Rockland County weather throws at it.',
    faqs: [
      { question: 'Do I need a permit for an outdoor structure?', answer: 'It depends on the size and your municipality. Many sheds under 120 square feet do not require permits, but larger structures and anything with a permanent foundation typically do. We can help you determine what is needed for your project.' },
      { question: 'What materials do you use?', answer: 'We typically use pressure-treated lumber for structural elements and cedar or composite materials for visible surfaces. Hardware is always stainless steel or hot-dipped galvanized to prevent rust.' },
      { question: 'How long does it take to build a pergola or gazebo?', answer: 'A standard pergola takes 2 to 3 days. Gazebos with roofing typically take 3 to 5 days. Sheds vary based on size — a basic 8x10 takes about 2 days, larger structures take longer.' },
      { question: 'Can you build on a slope or uneven ground?', answer: 'Yes. Rockland County has plenty of sloped yards. We handle grading, footings, and leveling to ensure your structure sits properly regardless of terrain.' },
      { question: 'Do you also do decks and patios?', answer: 'Yes. Outdoor structures often pair with deck or patio work. We can build a pergola attached to your deck, a gazebo on a new paver patio, or a shed on a gravel pad — all in one project.' }
    ],
    relatedServices: ['deck-repair', 'fence-repair', 'light-fixture-installation', 'painting', 'custom-accent-walls'],
    metaTitle: 'Custom Outdoor Structures & Sheds | Rockland County, NY',
    metaDescription: 'Custom pergolas, canopies, sheds, and gazebos in Rockland County. Built to last with quality materials. 20+ years experience. Free estimates!',
    keywords: ['pergola builder Rockland County', 'gazebo installation', 'custom shed builder near me', 'outdoor canopy installation NY', 'pergola contractor', 'backyard gazebo', 'storage shed builder', 'outdoor structures Rockland County'],
    image: '/images/services/outdoor-structures.jpg',
    altText: 'Cedar pergola built over a Rockland County backyard patio',
    processSteps: [
      { title: 'Site Evaluation & Design', description: 'We assess your yard\'s terrain, drainage, and sun exposure, then work with you on the structure\'s design, size, and optimal placement.' },
      { title: 'Ground Prep & Footings', description: 'The site is cleared and leveled, and proper footings, gravel pads, or concrete piers are installed to support the structure long-term.' },
      { title: 'Frame, Build & Finish', description: 'Using pressure-treated or rot-resistant lumber and stainless steel hardware, we frame, assemble, and finish the structure to withstand New York weather.' },
      { title: 'Final Details & Cleanup', description: 'Roofing, trim, stain or paint, lighting, and any accessories are completed. The site is cleaned and all construction debris is hauled away.' }
    ],
    whyChooseUsCards: [
      { title: 'Built for New York Weather', description: 'Pressure-treated lumber, stainless steel hardware, and weatherproof finishes that stand up to Rockland County\'s freeze-thaw cycles, snow loads, and summer storms.' },
      { title: 'Custom Design', description: 'Every structure is designed to fit your specific yard, style, and intended use — not a one-size-fits-all kit from a big box store.' },
      { title: 'Proper Footings', description: 'We install correct foundations for your terrain, whether it\'s level ground, a slope, or a rocky Rockland County hillside.' },
      { title: 'Permitting Guidance', description: 'We help you determine if your project needs a permit and can advise on your specific municipality\'s requirements.' },
      { title: 'Full Finishing', description: 'Stain, paint, roofing, lighting, curtain rods — we finish every detail so the structure is ready to enjoy the day we\'re done.' }
    ]
  },
  {
    slug: 'excavation',
    name: 'Excavation',
    shortDescription: 'Small to medium excavation services in Rockland County. Trenching, grading, drainage, and site prep done right.',
    heroHeadline: 'Excavation Services in Rockland County, NY',
    heroSubheadline: 'Precision digging and grading for projects big and small.',
    intro: 'Many home improvement and outdoor projects start with excavation — and getting it wrong can mean drainage problems, foundation failures, or costly do-overs. Whether you need a trench dug for a new utility line, a section of yard graded for proper water flow, or a site excavated for a new shed foundation, the work needs to be done with precision and an understanding of Rockland County\'s rocky, variable terrain.\n\nOdds & Ends Handyman Service handles small to medium excavation projects for homeowners across Rockland County. Dan and the team have over 25 years of experience working with the clay, rock, and uneven ground conditions found throughout Suffern, New City, Nyack, and surrounding communities. We bring the right equipment, dig to the correct depth, and leave your site graded and ready for the next phase of your project.',
    commonProblems: [
      'Yard flooding due to improper grading or drainage',
      'Rocky soil making digging difficult for DIY homeowners',
      'Utility lines that need trenching for water, electric, or gas',
      'Uneven terrain requiring leveling before a structure can be built',
      'Old tree stumps and root systems blocking a build site',
      'Erosion washing away topsoil and exposing foundations'
    ],
    jobExamples: [
      'Trenched and graded a 60-foot French drain line in New City',
      'Excavated and leveled a shed pad site on a rocky slope in Suffern',
      'Dug utility trench for new outdoor electrical run in Pearl River',
      'Graded a backyard for proper drainage away from foundation in Nanuet',
      'Excavated for a retaining wall footer along a hillside in Stony Point',
      'Site prep and excavation for a gravel parking pad in Nyack'
    ],
    whyHireHandyman: 'Excavation is physically demanding and technically precise work. Dig too shallow and your drainage or foundation will fail; dig too deep and you risk hitting utility lines or destabilizing nearby structures. Rockland County\'s terrain is full of rock ledges, clay pockets, and variable soil conditions that can turn a simple trench into a serious problem without the right experience and equipment. A professional handyman knows how to read the ground, call in utility markings, and get the job done safely.',
    whyChooseUs: 'Odds & Ends has been digging in Rockland County dirt for over 25 years. Dan knows where the rock ledges hide in Suffern, how the clay drains in New City, and what Nyack hillsides demand in terms of erosion control. We handle projects that are too small for big excavation contractors but too involved for a homeowner with a shovel. Our pricing is fair, our work is precise, and we always leave your property clean.',
    faqs: [
      { question: 'How deep can you excavate?', answer: 'We handle most residential excavation depths, typically up to 4 to 6 feet for trenching and drainage projects. For anything deeper or requiring heavy commercial equipment, we can recommend a trusted partner.' },
      { question: 'Do I need to call 811 before you dig?', answer: 'Yes, and we can help coordinate this. New York law requires utility marking before any excavation. We will not break ground until all lines are clearly marked and we know exactly what is beneath the surface.' },
      { question: 'Can you excavate on rocky Rockland County terrain?', answer: 'Absolutely. Rocky ground is the norm here, not the exception. We carry the right tools to work through and around rock, and we know when a rock ledge means adjusting the plan versus powering through.' },
      { question: 'Do you handle the disposal of excavated soil?', answer: 'Yes. We haul away excavated material or, if the soil is clean fill, we can redistribute it elsewhere on your property for grading purposes. Either way, your site is left clean.' },
      { question: 'How long does a typical excavation job take?', answer: 'Most residential excavation projects take one to three days depending on scope, soil conditions, and weather. We will give you a clear timeline during our initial site assessment.' }
    ],
    relatedServices: ['gravel-pads', 'sheds', 'deck-repair', 'fence-repair'],
    metaTitle: 'Professional Excavation Services | Rockland County, NY',
    metaDescription: 'Professional residential excavation in Rockland County, NY. Trenching, grading, drainage, and site prep. 25+ years experience. Call Odds & Ends today!',
    keywords: ['excavation Rockland County', 'trenching service New City NY', 'grading contractor near me', 'drainage excavation', 'site prep Rockland County', 'residential excavation Suffern', 'yard grading Nyack', 'utility trenching'],
    image: '/images/services/excavation.svg',
    altText: 'Odds & Ends excavating and grading a residential site in Rockland County',
    processSteps: [
      { title: 'Site Assessment & Utility Check', description: 'We evaluate the terrain, soil conditions, and grade, then coordinate utility markings through 811 before any digging begins.' },
      { title: 'Excavation & Digging', description: 'Using the right equipment for your project\'s scale, we excavate to the correct depth and dimensions, working carefully around rock and existing structures.' },
      { title: 'Grading & Compaction', description: 'The excavated area is graded to the proper slope for drainage or leveled for a foundation, then compacted to prevent future settling.' },
      { title: 'Cleanup & Soil Disposal', description: 'Excess soil is hauled away or redistributed on-site, the work area is cleaned up, and your property is left ready for the next phase.' }
    ],
    whyChooseUsCards: [
      { title: 'Rockland County Terrain Experts', description: 'We have 25 years of experience working with the rocky, clay-heavy, and variable soil conditions found across Rockland County — no surprises underground.' },
      { title: 'Right-Sized for Residential', description: 'We specialize in the small to medium jobs that big excavation companies either overcharge for or won\'t bother with.' },
      { title: 'Utility-Safe Digging', description: 'We always coordinate 811 utility markings and dig carefully around existing lines. No cut cables, no broken pipes.' },
      { title: 'Proper Grading', description: 'Every excavation is graded correctly so water flows away from structures — not toward them. We prevent the drainage problems other contractors create.' },
      { title: 'Clean Worksite', description: 'We haul away excavated material, restore disturbed areas, and leave your property clean when the job is done.' }
    ]
  },
  {
    slug: 'gravel-pads',
    name: 'Gravel Pads',
    shortDescription: 'Professional gravel pad installation in Rockland County. Shed pads, hot tub bases, fire pit areas, and parking pads built to last.',
    heroHeadline: 'Gravel Pad Installation in Rockland County, NY',
    heroSubheadline: 'A solid, level foundation for sheds, hot tubs, fire pits, and more.',
    intro: 'A gravel pad is the unsung hero of outdoor projects. It provides the level, well-drained foundation that sheds, hot tubs, fire pits, and parking areas need to stay stable and last for years. Skip the proper base and your shed will settle unevenly, your hot tub will shift, and your gravel parking area will turn into a muddy mess after the first heavy rain.\n\nOdds & Ends Handyman Service builds gravel pads the right way for homeowners throughout Rockland County. Dan and the team handle every step — excavation, landscape fabric, proper gravel selection, compaction, and edging — so your pad is level, drains correctly, and stays put through New York\'s freeze-thaw cycles. With over 25 years of experience on Rockland County properties, we know the soil and drainage conditions in every corner of the county.',
    commonProblems: [
      'Sheds settling unevenly on bare ground or improperly prepared pads',
      'Gravel washing away due to lack of edging or fabric underlayment',
      'Water pooling on pads that were not graded or compacted correctly',
      'Hot tubs and fire pits shifting on unstable or unlevel surfaces',
      'Weeds growing up through gravel that was laid without landscape fabric',
      'Parking areas turning to mud because the wrong type of gravel was used'
    ],
    jobExamples: [
      'Built a 10x12 gravel pad for a new storage shed in New City',
      'Installed a compacted gravel base for a hot tub installation in Pearl River',
      'Created a 20-foot gravel parking pad for extra vehicles in Stony Point',
      'Prepared a level fire pit area with gravel surround in Suffern',
      'Built a gravel pad with timber edging for a backyard gazebo in Nanuet',
      'Installed a drainage-focused gravel pad on a sloped lot in Nyack'
    ],
    whyHireHandyman: 'Building a gravel pad that lasts requires more than dumping stone on the ground. The site must be excavated to the right depth, the soil compacted, landscape fabric laid to prevent weed growth and gravel migration, and the correct type and depth of gravel installed and compacted in layers. Get any step wrong and you end up with a pad that settles, shifts, or floods. A professional handyman handles every step correctly so your pad stays level and functional for years.',
    whyChooseUs: 'Odds & Ends has installed gravel pads for sheds, hot tubs, and outdoor living spaces across Rockland County for over 25 years. We know which gravel types work best for Rockland County\'s soil and climate, we compact in proper lifts, and we always install edging to keep your gravel where it belongs. Dan personally checks every pad with a level before the job is done. Fair pricing, clean work, no shortcuts.',
    faqs: [
      { question: 'What type of gravel do you use for shed pads?', answer: 'We typically use a combination of crushed stone base (often called process or crusher run) compacted in layers, topped with clean 3/4-inch stone for drainage. The exact mix depends on your soil conditions and what the pad is supporting.' },
      { question: 'How deep should a gravel pad be?', answer: 'Most residential gravel pads require 4 to 6 inches of compacted gravel over landscape fabric. Heavy-load applications like hot tubs or parking areas may require 6 to 8 inches. We always excavate below the gravel depth to remove organic material.' },
      { question: 'Do you install edging around the gravel pad?', answer: 'Yes. Edging — whether pressure-treated timber, steel landscape edging, or stone — is essential to keep gravel contained and maintain clean edges. We recommend edging on every pad we build.' },
      { question: 'Can you build a gravel pad on a slope?', answer: 'Absolutely. Sloped sites are common in Rockland County. We excavate into the hillside, build up the low side with proper retaining, and ensure the finished pad is level and drains correctly.' },
      { question: 'How long does a gravel pad installation take?', answer: 'Most gravel pad projects take one to two days. A standard 10x12 shed pad on reasonably flat ground is typically a one-day job. Larger pads or challenging terrain may take two days.' }
    ],
    relatedServices: ['excavation', 'sheds', 'deck-repair', 'fence-repair'],
    metaTitle: 'Professional Gravel Pad Installation | Rockland County, NY',
    metaDescription: 'Professional gravel pad installation in Rockland County, NY. Shed pads, hot tub bases, fire pits, parking areas. 25+ years experience. Call Odds & Ends!',
    keywords: ['gravel pad installation Rockland County', 'shed pad New City NY', 'gravel base hot tub', 'gravel parking pad', 'fire pit gravel pad', 'crushed stone pad Suffern', 'gravel pad near me'],
    image: '/images/services/gravel-pads.svg',
    altText: 'Freshly installed and compacted gravel pad ready for a shed in Rockland County',
    processSteps: [
      { title: 'Site Layout & Excavation', description: 'We mark the pad dimensions, excavate to the correct depth, remove organic material, and grade the subsoil for proper drainage.' },
      { title: 'Fabric & Edging Installation', description: 'Heavy-duty landscape fabric is laid to prevent weed growth and gravel migration, and edging is installed to define clean borders.' },
      { title: 'Gravel Placement & Compaction', description: 'Crushed stone is placed in lifts and mechanically compacted in layers to create a solid, stable base that will not settle.' },
      { title: 'Leveling & Final Inspection', description: 'The finished pad is checked for level across all points, drainage is confirmed, and the surrounding area is cleaned up.' }
    ],
    whyChooseUsCards: [
      { title: 'Proper Base Preparation', description: 'We excavate, grade, and compact the subsoil before a single stone is placed — the step most DIYers and some contractors skip.' },
      { title: 'Compacted in Lifts', description: 'Gravel is placed and compacted in layers, not dumped all at once. This creates a pad that stays level and supports heavy loads without settling.' },
      { title: 'Drainage Done Right', description: 'Every pad is graded so water flows away from structures. No pooling, no erosion, no water finding its way into your shed or under your hot tub.' },
      { title: 'Edging Included', description: 'We install proper edging on every pad to keep gravel contained and maintain clean, professional borders that last.' },
      { title: '25+ Years in Rockland County', description: 'We know the soil, the slopes, and the drainage patterns across every town in the county. That local knowledge shows in every pad we build.' }
    ]
  },
  {
    slug: 'sheds',
    name: 'Sheds',
    shortDescription: 'Shed building, assembly, and installation in Rockland County. Pre-fab assembly, custom builds, and foundation prep.',
    heroHeadline: 'Shed Building & Assembly in Rockland County, NY',
    heroSubheadline: 'From foundation to finish — your shed, built right.',
    intro: 'Every homeowner eventually runs out of storage space. A well-built shed solves the problem, giving you a dedicated place for lawn equipment, tools, seasonal gear, and everything else that has been cluttering your garage or basement. But a shed is only as good as its foundation, framing, and weatherproofing — and cutting corners on any of these means a structure that rots, sags, or leaks within a few years.\n\nOdds & Ends Handyman Service builds and assembles sheds for homeowners throughout Rockland County. Whether you have a pre-fab shed kit that needs proper assembly or want a custom-built shed designed for your specific needs and property, Dan and the team handle every step. With over 25 years of experience, we ensure your shed is level, structurally sound, weathertight, and built to last through decades of Rockland County weather.',
    commonProblems: [
      'Pre-fab shed kits arriving with confusing instructions and missing hardware',
      'Sheds built on bare ground without a proper foundation settling and rotting',
      'Doors that stick or will not close properly due to unlevel framing',
      'Roof leaks from improper shingle installation or flashing',
      'Sheds too small for actual storage needs because sizing was not planned',
      'Interior space wasted due to lack of shelving or organizational layout'
    ],
    jobExamples: [
      'Assembled a 10x16 Tuff Shed kit on a prepared gravel pad in New City',
      'Built a custom 12x20 workshop shed with electrical and workbench in Suffern',
      'Installed a foundation and assembled a Keter resin shed in Pearl River',
      'Built interior shelving and pegboard wall in an existing shed in Nanuet',
      'Constructed a cedar garden shed with potting bench and window boxes in Nyack',
      'Replaced rotted floor joists and re-leveled a settling shed in Stony Point'
    ],
    whyHireHandyman: 'Shed assembly and construction involves foundation work, precise framing, roofing, and weatherproofing — skills that overlap with house building. A pre-fab shed kit might look simple, but improper assembly leads to doors that jam, roofs that leak, and walls that bow. A custom shed requires carpentry expertise from the ground up. A professional handyman ensures your shed is square, level, weathertight, and anchored properly so it stands strong for decades rather than sagging within a few seasons.',
    whyChooseUs: 'Odds & Ends has been building and assembling sheds across Rockland County for over 25 years. Dan insists on proper foundations — whether that means a gravel pad, concrete piers, or a pressure-treated timber frame — because a shed is only as good as what it sits on. We build with quality materials, install proper roofing, and can add interior shelving, electrical, lighting, and workbenches to make your shed truly functional. Our sheds are built to handle heavy snow loads, driving rain, and Rockland County\'s freeze-thaw cycles.',
    faqs: [
      { question: 'Do I need a permit to build a shed in Rockland County?', answer: 'It depends on your municipality and the size of the shed. Many Rockland County towns require permits for sheds over 100 or 120 square feet. We can advise you on your specific town\'s requirements and help you navigate the process.' },
      { question: 'Can you assemble a shed kit I already purchased?', answer: 'Absolutely. We assemble all major brands including Tuff Shed, Best Barns, Keter, and Rubbermaid kits. We also prepare the foundation the kit manufacturer recommends, which most homeowners skip.' },
      { question: 'What type of foundation does a shed need?', answer: 'It depends on the shed size and your site conditions. Options include compacted gravel pads, concrete pier blocks, pressure-treated timber frames, or poured concrete slabs. We will recommend the best option for your specific situation and terrain.' },
      { question: 'Can you add electricity, lighting, or shelving to my shed?', answer: 'Yes. We regularly add interior shelving, pegboard walls, workbenches, lighting, and electrical outlets to sheds. These additions transform a basic storage box into a truly functional workspace.' },
      { question: 'How long does it take to build a shed?', answer: 'A pre-fab shed assembly on a prepared foundation typically takes one to two days. A custom-built shed usually takes three to five days depending on size, features, and weather. Foundation prep is additional time if needed.' }
    ],
    relatedServices: ['gravel-pads', 'excavation', 'shelving-installation', 'door-installation'],
    metaTitle: 'Professional Shed Building & Assembly | Rockland County, NY',
    metaDescription: 'Professional shed building and assembly in Rockland County, NY. Pre-fab kits, custom builds, foundations, and interiors. 25+ years experience. Call today!',
    keywords: ['shed building Rockland County', 'shed assembly New City NY', 'custom shed builder', 'shed installation near me', 'pre-fab shed assembly', 'shed foundation Suffern', 'storage shed Nyack', 'shed contractor Rockland County'],
    image: '/images/services/sheds.svg',
    altText: 'Custom-built storage shed with shelving on a gravel pad in Rockland County',
    processSteps: [
      { title: 'Site Selection & Foundation Prep', description: 'We help choose the best location on your property, then excavate, level, and install the appropriate foundation — gravel pad, pier blocks, or timber frame.' },
      { title: 'Framing & Assembly', description: 'Whether assembling a pre-fab kit or custom framing from scratch, we build the floor, walls, and roof structure square, plumb, and level.' },
      { title: 'Roofing & Weatherproofing', description: 'Shingles, drip edge, and flashing are installed properly. Doors and windows are sealed, and all joints are caulked to keep water out.' },
      { title: 'Interior Finish & Cleanup', description: 'Shelving, hooks, pegboard, workbenches, and electrical are installed. The site is cleaned up and all construction debris is removed.' }
    ],
    whyChooseUsCards: [
      { title: 'Foundation First', description: 'We never set a shed on bare ground. Every build starts with a proper, level foundation designed for your terrain and shed type.' },
      { title: 'Built for Rockland County Weather', description: 'Heavy snow loads, driving rain, freeze-thaw cycles — we build with materials and techniques that handle everything this climate throws at a structure.' },
      { title: 'Pre-Fab or Custom', description: 'We assemble any brand of shed kit correctly, or we can design and build a custom shed to your exact specifications and needs.' },
      { title: 'Functional Interiors', description: 'Shelving, pegboard, workbenches, lighting, electrical — we set up the inside so your shed works as hard as you need it to.' },
      { title: 'Permitting Guidance', description: 'We know Rockland County\'s shed regulations and can help you understand what your specific town requires before we start building.' }
    ]
  },
  {
    slug: 'tiki-bars',
    name: 'Tiki Bars',
    shortDescription: 'Custom outdoor tiki bar construction in Rockland County. Bamboo, wood, thatch, countertops, and electrical for the ultimate backyard hangout.',
    heroHeadline: 'Custom Tiki Bar Construction in Rockland County, NY',
    heroSubheadline: 'Your backyard paradise — designed, built, and ready to enjoy.',
    intro: 'There is nothing quite like a backyard tiki bar to turn an ordinary patio or deck into the ultimate outdoor entertaining space. Whether you want a classic Polynesian-style bar with a thatched roof and bamboo accents or a more modern outdoor bar with clean lines and a stone countertop, a custom-built tiki bar adds character, function, and serious fun to your Rockland County backyard.\n\nOdds & Ends Handyman Service designs and builds custom outdoor tiki bars for homeowners throughout Rockland County. Dan and the team have over 25 years of construction experience and handle every detail — framing, roofing, countertops, seating, and electrical for lighting, outlets, and blender hookups. We build structures that look incredible and stand up to New York weather year after year.',
    commonProblems: [
      'Store-bought tiki bar kits that fall apart after one season',
      'Lack of electrical outlets for blenders, refrigerators, and lighting',
      'Thatched roofing that leaks or blows off in high winds',
      'Countertops that warp, stain, or deteriorate from weather exposure',
      'Bars built without proper footings that shift or lean over time',
      'Poor lighting that makes the bar unusable after dark'
    ],
    jobExamples: [
      'Built a 10-foot bamboo tiki bar with thatched roof and LED lighting on a Suffern patio',
      'Constructed a custom cedar outdoor bar with granite countertop and electrical in New City',
      'Built a poolside tiki bar with built-in cooler and overhead fan hookup in Pearl River',
      'Designed and built a 12-foot tiki bar with wrap-around seating in Nanuet',
      'Constructed a two-level tiki bar with storage and mini-fridge cabinet in Nyack',
      'Built a rustic wood bar with thatched pergola roof and string light wiring in Stony Point'
    ],
    whyHireHandyman: 'A tiki bar is a structure that needs to handle weight on the countertop, support a roof, resist weather exposure, and often include electrical wiring for lights and appliances. Building one from scratch involves carpentry, roofing, electrical, and finishing skills. A cheap kit bar from a big box store will look tired and fall apart after a season or two. A professionally built tiki bar becomes a permanent backyard feature that impresses guests and lasts for years.',
    whyChooseUs: 'Odds & Ends brings over 25 years of construction experience to every tiki bar build. Dan works with each homeowner to design a bar that fits their space, style, and entertaining needs. We use weather-resistant materials — pressure-treated framing, marine-grade fasteners, rot-resistant countertop options, and properly secured thatching — to ensure your bar survives Rockland County winters and looks great every summer. We also handle the electrical work for outlets, lighting, and appliance hookups so your bar is fully functional from day one.',
    faqs: [
      { question: 'How much does a custom tiki bar cost?', answer: 'Pricing varies based on size, materials, and features. A basic 8-foot bar with a thatched roof starts at a different price point than a 14-foot bar with granite countertops and full electrical. We provide a detailed quote after discussing your vision and assessing your space.' },
      { question: 'Can you add electrical outlets and lighting?', answer: 'Yes. We wire outlets for blenders and mini-fridges, install overhead and ambient lighting, and can add ceiling fans under covered roofs. All electrical work is done safely and to code.' },
      { question: 'What materials hold up best outdoors in Rockland County?', answer: 'Pressure-treated lumber or cedar for framing, marine-grade stainless steel hardware, stone or sealed hardwood countertops, and synthetic thatch that resists wind and rot all perform well through our freeze-thaw cycles and heavy weather.' },
      { question: 'Do I need a permit for an outdoor bar?', answer: 'It depends on the size of the structure and your municipality\'s rules. Many freestanding bars under a certain square footage do not require permits, but covered structures or those with electrical may. We can advise based on your town\'s specific requirements.' },
      { question: 'Can the bar be built on an existing deck or patio?', answer: 'Absolutely. We build tiki bars on existing decks, concrete patios, paver patios, and directly on gravel pads. We assess the existing surface to ensure it can support the bar\'s weight and make any reinforcements needed.' }
    ],
    relatedServices: ['deck-repair', 'outdoor-structures', 'light-fixture-installation', 'painting'],
    metaTitle: 'Custom Tiki Bar Construction | Rockland County, NY',
    metaDescription: 'Custom outdoor tiki bar construction in Rockland County, NY. Bamboo, wood, thatch, countertops, lighting, and electrical. 25+ years experience. Call today!',
    keywords: ['tiki bar builder Rockland County', 'outdoor bar construction New City NY', 'custom tiki bar', 'backyard bar builder near me', 'outdoor bar with roof', 'tiki bar contractor Suffern', 'patio bar Nyack'],
    image: '/images/services/tiki-bars.svg',
    altText: 'Custom tiki bar with thatched roof and string lights built on a Rockland County patio',
    processSteps: [
      { title: 'Design & Planning', description: 'We discuss your vision, measure your space, and design a bar that fits your style, budget, and entertaining needs — including layout for electrical and seating.' },
      { title: 'Foundation & Framing', description: 'Proper footings or anchoring are installed, then the bar is framed with pressure-treated or rot-resistant lumber built to handle weight and weather.' },
      { title: 'Countertops, Roof & Finishing', description: 'Your chosen countertop material is installed, roofing or thatching is secured, and all surfaces are sealed, stained, or finished for weather resistance.' },
      { title: 'Electrical, Lighting & Final Details', description: 'Outlets, lighting, fans, and any built-in features like cooler cabinets or shelving are installed. The site is cleaned and your bar is ready to enjoy.' }
    ],
    whyChooseUsCards: [
      { title: 'Fully Custom Design', description: 'Every tiki bar we build is designed from scratch for your specific space, style, and how you like to entertain — no cookie-cutter kits.' },
      { title: 'Built to Last', description: 'Pressure-treated framing, marine-grade hardware, and weather-resistant finishes mean your bar stands up to Rockland County winters and keeps looking great.' },
      { title: 'Electrical Included', description: 'We handle outlets for blenders and mini-fridges, overhead lighting, string light hookups, and fan wiring so your bar is fully functional.' },
      { title: 'One Contractor, Every Trade', description: 'Carpentry, roofing, countertops, electrical, finishing — we handle every aspect of the build so you deal with one team, not five subcontractors.' },
      { title: '25+ Years of Building', description: 'Dan and the team bring decades of construction experience to every bar build. Your tiki bar is built with the same care and precision as any structural project we take on.' }
    ]
  }
]
