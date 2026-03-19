export interface City {
  slug: string
  name: string
  county: string
  state: string
  heroHeadline: string
  heroSubheadline: string
  intro: string
  commonNeeds: string[]
  whyChooseUs: string
  faqs: { question: string; answer: string }[]
  nearbyAreas: string[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
  localAdvantage: string
  neighborhoods: string[]
  housingStock: string
  popularServiceSlugs: string[]
  localTips: string
  stats: { label: string; value: string }[]
  image: string
}

export const cities: City[] = [
  {
    slug: "nyack",
    image: "/images/areas/nyack.jpg",
    name: "Nyack",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Nyack's Trusted Handyman Service",
    heroSubheadline: "Expert craftsmanship for the homes that make this Hudson River village so special.",
    intro: "Nyack homeowners trust Odds & Ends for reliable handyman work. From Victorian trim restoration to porch repair and weatherproofing, Dan has been serving Nyack since 2001.",
    commonNeeds: [
      "Victorian trim and woodwork restoration",
      "Porch repair and weatherproofing",
      "Basement waterproofing and moisture control",
      "Window replacement in older frames",
      "Interior plaster repair and painting",
      "Gutter cleaning and replacement on steep rooflines",
      "Deck building and refinishing",
      "Bathroom and kitchen updates in period homes"
    ],
    whyChooseUs: `We've worked in Nyack long enough to understand what these homes need. We know that a Victorian restoration requires a different touch than a modern renovation, and we take the time to match materials, respect original details, and deliver results that honor the craftsmanship these homes were built with. Our clients in Nyack appreciate that we're straightforward, detail-oriented, and genuinely invested in doing quality work — not just checking boxes. When your home is a piece of local history, you deserve a handyman team that treats it that way.`,
    faqs: [
      {
        question: "Do you have experience working on Nyack's older Victorian homes?",
        answer: "Absolutely. We've spent over 20 years working on homes throughout Nyack, including many of the village's Victorians and craftsman-era properties. We understand how to work with original plaster, period trim, and older framing in ways that preserve the home's character while solving modern problems."
      },
      {
        question: "Can you handle exterior work on homes near the Hudson River?",
        answer: "Yes. Homes along the river and in the lower village face extra moisture exposure, which accelerates wear on paint, siding, and decks. We use materials and techniques suited to Nyack's riverfront conditions and can help you stay ahead of weather-related damage."
      },
      {
        question: "How quickly can you start a project in Nyack?",
        answer: "We're based right here in Rockland County, so Nyack is one of our core service areas. For smaller repairs, we can often schedule within a few days. Larger projects are typically booked within one to two weeks, depending on the season."
      },
      {
        question: "Do you provide free estimates for Nyack homeowners?",
        answer: "Yes, we offer free on-site estimates for all projects. We'll walk through the work with you, explain our approach, and provide a clear, written quote before any work begins."
      },
      {
        question: "Can you match original woodwork and trim on older Nyack homes?",
        answer: "That's one of our specialties. We work carefully to match profiles, wood species, and finishes so that repairs blend seamlessly with the original construction. We believe restoration should be invisible when it's done right."
      }
    ],
    nearbyAreas: ["piermont", "grandview-on-hudson", "clarkstown", "orangetown"],
    metaTitle: "Expert Handyman Services in Nyack, NY | Odds & Ends",
    metaDescription: "Trusted handyman service for Nyack, NY homeowners. Expert repairs, restoration, and maintenance for Victorian and craftsman homes in Rockland County.",
    keywords: ["handyman Nyack NY", "Nyack home repair", "Victorian home maintenance Nyack", "Rockland County handyman", "Nyack porch repair", "home improvement Nyack"],
    localAdvantage: "Nyack's position directly on the Hudson River means homes here endure relentless moisture, wind-driven rain, and salt air that accelerate paint failure and deck rot far faster than inland properties. The village's concentration of Victorian and Queen Anne homes — many dating to the 1880s and 1890s — demands period-appropriate repair techniques, from matching original plaster profiles to sourcing compatible trim moldings that modern lumber yards don't stock.",
    neighborhoods: ["Upper Nyack", "South Nyack", "Broadway corridor", "Hudson Avenue area", "Midland Avenue", "North Broadway", "Castle Heights", "Main Street district"],
    housingStock: "Nyack's housing ranges from grand Victorian homes and Queen Annes near Broadway to more modest Cape Cods and bungalows on the side streets. Many properties feature original plaster walls, narrow-gauge wood floors, and ornate exterior woodwork that require specialized care.",
    popularServiceSlugs: ["painting", "deck-repair", "drywall-repair", "caulking-weatherstripping"],
    localTips: "Nyack is within the Village of Nyack jurisdiction and requires building permits for structural work, decks, and fence installations. Properties in the Historic District along Broadway and adjacent streets may need additional Architectural Review Board approval before exterior changes. River-facing homes should plan for annual paint and caulk inspections given the accelerated weathering from Hudson River exposure.",
    stats: [
      { label: "Serving Nyack Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "new-city",
    image: "/images/areas/new-city.jpg",
    name: "New City",
    county: "Rockland",
    state: "New York",
    heroHeadline: "New City's Go-To Handyman Team",
    heroSubheadline: "Reliable, detail-driven home repairs for Clarkstown's busiest hamlet.",
    intro: "New City homeowners trust Odds & Ends for reliable handyman work. From deck repairs to basement finishing, Dan has been serving New City since 2001.",
    commonNeeds: [
      "Deck repair, staining, and replacement",
      "Basement finishing and waterproofing",
      "Kitchen and bathroom remodeling",
      "Fence installation and repair",
      "Interior painting and drywall repair",
      "Window and door replacement",
      "Siding repair and power washing",
      "Garage organization and shelving"
    ],
    whyChooseUs: `We treat every New City home like it's our own. That means showing up when we say we will, keeping the work area clean, and delivering the kind of quality finish that makes you glad you didn't try to DIY it. We've been doing this in Rockland County for over 20 years, and a big part of our business comes from repeat clients and referrals right here in New City. When your neighbor recommends us, we take that seriously — and we work hard to earn that trust every single time.`,
    faqs: [
      {
        question: "What areas of New City do you serve?",
        answer: "We serve all of New City and the surrounding Clarkstown area, from the neighborhoods around the county complex to the homes off Little Tor Road, Congers Road, and everywhere in between."
      },
      {
        question: "Can you handle both small repairs and larger projects?",
        answer: "Absolutely. We're just as comfortable replacing a faucet or patching drywall as we are rebuilding a deck or finishing a basement. Many of our New City clients start with a small job and end up calling us back for bigger projects once they see our work."
      },
      {
        question: "Do you work on split-level and raised ranch homes?",
        answer: "Yes, and we know them well. These mid-century home styles are common in New City, and they have their own set of typical maintenance needs — from updating dated layouts to addressing issues with lower-level moisture and aging mechanicals."
      },
      {
        question: "How do you handle estimates and pricing?",
        answer: "We provide free on-site estimates with clear, written quotes. No hidden fees, no surprise charges. We'll walk through the scope of work with you so you know exactly what to expect before we start."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. We carry full liability insurance and are properly licensed to perform handyman and home improvement work throughout Rockland County, including New City."
      }
    ],
    nearbyAreas: ["clarkstown", "nanuet", "pomona", "stony-point"],
    metaTitle: "Professional Handyman in New City, NY | Odds & Ends",
    metaDescription: "Professional handyman services for New City, NY. From deck repairs to basement finishing, Odds & Ends has served Rockland County homes for over 20 years.",
    keywords: ["handyman New City NY", "New City home repair", "Clarkstown handyman", "home improvement New City", "deck repair New City NY", "Rockland County handyman"],
    localAdvantage: "New City's housing boom in the 1960s and 1970s means most homes here are hitting the 50- to 60-year mark — the age when original decks fail, basement waterproofing breaks down, and dated split-level layouts start begging for modernization. The heavy clay soil common throughout central Clarkstown creates persistent foundation moisture pressure, making basement waterproofing a recurring need.",
    neighborhoods: ["Little Tor Road area", "near the Rockland County complex", "Congers Road corridor", "South Main Street", "Old Schoolhouse Road", "College Road area", "West Clarkstown", "Phillips Hill Road"],
    housingStock: "The housing stock in New City is predominantly split-level and raised ranch homes built in the 1960s–70s, with some newer colonial developments in the western sections. Many feature original wood decks, aging aluminum siding, and lower-level family rooms prone to moisture issues.",
    popularServiceSlugs: ["deck-repair", "drywall-repair", "shelving-installation", "ceiling-fan-installation"],
    localTips: "New City falls under the Town of Clarkstown building department. Permits are required for decks, fences over 6 feet, and any electrical or plumbing work. If you're finishing a basement, Clarkstown requires egress windows for any bedroom space. Many neighborhoods have deed restrictions beyond standard zoning, so check with the building department before adding structures.",
    stats: [
      { label: "Serving New City Since", value: "2001" },
      { label: "Local Referral Rate", value: "85%+" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "nanuet",
    image: "/images/areas/nanuet.jpg",
    name: "Nanuet",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Dependable Handyman Service in Nanuet",
    heroSubheadline: "Honest work, fair prices, and the kind of reliability Nanuet homeowners count on.",
    intro: "Nanuet homeowners trust Odds & Ends for reliable handyman work. From kitchen and bathroom updates to window replacement, Dan has been serving Nanuet since 2001.",
    commonNeeds: [
      "Window and door replacement",
      "Kitchen and bathroom updates",
      "Basement moisture remediation",
      "Interior and exterior painting",
      "Drywall repair and patching",
      "Flooring installation and repair",
      "Light fixture and ceiling fan installation",
      "Storm damage repairs"
    ],
    whyChooseUs: `We're not a franchise or a call center — we're a local Rockland County business that's been earning trust in communities like Nanuet for over 20 years. Our clients appreciate that we're straightforward about pricing, realistic about timelines, and focused on getting the job done right the first time. We treat every home with care, whether it's a quick repair or a weekend-long project. That's why so many of our Nanuet clients call us back year after year.`,
    faqs: [
      {
        question: "What's the typical cost for handyman services in Nanuet?",
        answer: "Costs vary depending on the scope of work, but we always provide a free estimate up front so you know what to expect. We're competitively priced for the Rockland County area and focus on delivering strong value for every dollar you spend."
      },
      {
        question: "Can you update an older kitchen or bathroom?",
        answer: "Yes. Many Nanuet homes have kitchens and bathrooms that are original or haven't been updated in decades. We can handle everything from installing new fixtures and vanities to replacing flooring and updating lighting."
      },
      {
        question: "Do you work on townhomes and condos in Nanuet?",
        answer: "We do. We work on single-family homes, townhomes, and condos throughout Nanuet. For condo and townhome work, we're happy to coordinate with your HOA if needed."
      },
      {
        question: "How far in advance should I book?",
        answer: "For smaller jobs, we can often fit you in within a few days. Larger projects typically require one to two weeks of lead time. We recommend calling early if you have a seasonal project like exterior painting or deck work."
      }
    ],
    nearbyAreas: ["new-city", "pearl-river", "clarkstown", "spring-valley"],
    metaTitle: "Expert Handyman Services in Nanuet, NY | Odds & Ends",
    metaDescription: "Affordable, reliable handyman services in Nanuet, NY. Home repairs, updates, and maintenance from a trusted Rockland County team with 20+ years of experience.",
    keywords: ["handyman Nanuet NY", "Nanuet home repair", "home improvement Nanuet", "Rockland County handyman", "Nanuet kitchen remodel", "bathroom update Nanuet"],
    localAdvantage: "Nanuet sits at the crossroads of Route 59 and Route 304, and its housing reflects the post-war suburban expansion that followed the Tappan Zee Bridge opening. Many homes are original-owner properties now being updated by second or third owners, meaning we frequently encounter decades-old wiring, galvanized plumbing, and original single-pane windows that need thoughtful upgrading rather than quick patches.",
    neighborhoods: ["Middletown Road area", "Route 59 corridor", "Smith Hill Road", "Highview Avenue", "Prospect Street area", "near the Nanuet Mall site", "Blauvelt Road", "Demarest Mill Road"],
    housingStock: "Nanuet is a mix of post-war Cape Cods and ranches built in the 1950s, along with townhome and condo developments near the Route 59 commercial corridor. Many of the older single-family homes still have original kitchens and bathrooms that are prime candidates for modernization.",
    popularServiceSlugs: ["light-fixture-installation", "drywall-repair", "bathroom-renovation", "ceiling-fan-installation"],
    localTips: "Nanuet is part of the Town of Clarkstown and uses its building department for permits. Any electrical work beyond basic fixture swaps requires a permit, and bathroom renovations involving plumbing relocation need approval. Townhome and condo owners should check HOA guidelines before exterior modifications — many complexes along Route 59 have strict rules about windows, doors, and even satellite dish placement.",
    stats: [
      { label: "Serving Nanuet Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Typical Scheduling", value: "Within Days" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "pearl-river",
    image: "/images/areas/pearl-river.jpg",
    name: "Pearl River",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Pearl River's Reliable Handyman Service",
    heroSubheadline: "Keeping Pearl River homes in great shape — from downtown bungalows to quiet side streets.",
    intro: "Pearl River homeowners trust Odds & Ends for reliable handyman work. From exterior painting to porch and step repair, Dan has been serving Pearl River since 2001.",
    commonNeeds: [
      "Exterior painting and siding repair",
      "Porch and step repair",
      "Basement waterproofing",
      "Hardwood floor refinishing",
      "Window and storm door installation",
      "Plaster wall repair and skim coating",
      "Gutter maintenance and replacement",
      "Bathroom fixture upgrades"
    ],
    whyChooseUs: `Pearl River is a community built on trust and word of mouth, and that's exactly how we've built our business. We've been doing this in Rockland County for over 20 years, and a significant share of our work comes from referrals by satisfied clients. We know the older homes in this area inside and out, and we approach every job with the same respect and attention to detail whether it's a quick fix or a full renovation. We keep our pricing fair, our communication clear, and our work top-notch.`,
    faqs: [
      {
        question: "Do you work on the older homes near downtown Pearl River?",
        answer: "Yes, and we enjoy it. The older bungalows and Capes near Central Avenue have a lot of character, and we have extensive experience working with plaster walls, original trim, and the other features that make these homes special."
      },
      {
        question: "Can you help with basement water issues?",
        answer: "Basement moisture is one of the most common issues we see in Pearl River. We can assess the situation, address the source of the problem, and help you protect your finished or unfinished basement space from future water intrusion."
      },
      {
        question: "Do you serve all of Pearl River?",
        answer: "We serve the entire Pearl River hamlet and the broader Orangetown area. Whether you're on Central Avenue, Middletown Road, or anywhere in between, we're happy to come out for a free estimate."
      },
      {
        question: "What's your availability like?",
        answer: "We stay busy, but we always make room for our Pearl River clients. For most jobs, we can schedule a visit within a week. Emergency repairs get priority attention."
      }
    ],
    nearbyAreas: ["orangetown", "nanuet", "sparkill", "tappan"],
    metaTitle: "Handyman Services in Pearl River, NY | Odds & Ends",
    metaDescription: "Reliable handyman services in Pearl River, NY. Experienced home repair and maintenance for Rockland County homeowners. Free estimates, honest pricing.",
    keywords: ["handyman Pearl River NY", "Pearl River home repair", "Orangetown handyman", "home maintenance Pearl River", "Rockland County handyman", "Pearl River basement repair"],
    localAdvantage: "Pearl River's tight-knit walkable downtown means many homes sit close together on compact lots, so exterior work needs to be coordinated carefully with neighboring properties. The hamlet's older housing core — built largely in the early to mid-1900s — features plaster-over-lath walls, original hardwood floors, and cedar-shake details that require a craftsman's touch rather than a tear-and-replace approach.",
    neighborhoods: ["Central Avenue", "Middletown Road", "Franklin Avenue", "North Main Street", "Pearl River hilltop", "East Central Avenue", "Blauvelt Road area", "near Pearl River High School"],
    housingStock: "Pearl River's downtown core features charming bungalows, Cape Cods, and modest colonials from the 1920s through 1940s, many with original plaster walls and hardwood floors. Farther out, you'll find larger mid-century ranches and split-levels from the 1960s expansion.",
    popularServiceSlugs: ["painting", "drywall-repair", "bathroom-renovation", "caulking-weatherstripping"],
    localTips: "Pearl River is part of the Town of Orangetown, which handles all building permits. Permits are required for decks, fences over 6 feet, and structural modifications. The downtown area has its own parking and access considerations for contractors — we know to plan ahead for jobs near Central Avenue. Pearl River's older homes often have knob-and-tube wiring that should be evaluated before any renovation work begins.",
    stats: [
      { label: "Serving Pearl River Since", value: "2001" },
      { label: "Repeat Client Rate", value: "90%+" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "spring-valley",
    image: "/images/areas/spring-valley.jpg",
    name: "Spring Valley",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Affordable Handyman Services in Spring Valley",
    heroSubheadline: "Quality home repairs at fair prices for Spring Valley's hardworking homeowners.",
    intro: "Spring Valley homeowners trust Odds & Ends for reliable handyman work. From plumbing fixture replacement to interior and exterior painting, Dan has been serving Spring Valley since 2001.",
    commonNeeds: [
      "Plumbing fixture replacement",
      "Electrical outlet and panel updates",
      "Interior and exterior painting",
      "Door and lock replacement",
      "Flooring repair and installation",
      "Roof and gutter maintenance",
      "Drywall patching and repair",
      "General property maintenance and cleanup"
    ],
    whyChooseUs: `We believe every homeowner in Rockland County deserves access to honest, quality handyman service — and that includes Spring Valley. We keep our pricing fair and transparent, we communicate clearly from start to finish, and we treat every home with the same professionalism regardless of the neighborhood. We've been a trusted name in this county for over 20 years because we do what we say and we do it well.`,
    faqs: [
      {
        question: "Do you work on multi-family properties in Spring Valley?",
        answer: "Yes, we work on both single-family and multi-family properties. Whether you need repairs for your own home or maintenance across multiple units, we can help."
      },
      {
        question: "What are your rates for Spring Valley?",
        answer: "Our rates are competitive and transparent. We provide free estimates on all jobs and never add hidden charges. Every project gets a clear, upfront quote so you know what to expect."
      },
      {
        question: "Can you help prioritize repairs on a tight budget?",
        answer: "Absolutely. We're happy to walk through your property and help you identify the most important repairs to tackle first. We'll work with your budget and help you get the most impact for your money."
      },
      {
        question: "Do you handle emergency repairs?",
        answer: "We do our best to accommodate urgent situations like plumbing leaks, broken locks, or safety hazards. Call us and we'll work to get someone out to you as quickly as possible."
      }
    ],
    nearbyAreas: ["ramapo", "nanuet", "suffern", "clarkstown"],
    metaTitle: "Handyman Services in Spring Valley, NY | Odds & Ends",
    metaDescription: "Affordable handyman services in Spring Valley, NY. Reliable home repair and maintenance from a local Rockland County team. Free estimates, fair pricing.",
    keywords: ["handyman Spring Valley NY", "Spring Valley home repair", "affordable handyman Rockland County", "home maintenance Spring Valley", "Spring Valley property repair"],
    localAdvantage: "Spring Valley has a higher concentration of multi-family and converted properties than most Rockland County communities, which means repair work here often involves coordinating with landlords, tenants, or multiple units at once. The older infrastructure — some homes still have original galvanized pipes and fuse boxes — calls for a handyman who can assess what's safe to repair versus what needs a full upgrade for code compliance and safety.",
    neighborhoods: ["Main Street corridor", "Route 45 area", "Ewing Avenue", "Memorial Park neighborhood", "North Main Street", "Maple Avenue", "Church Street area", "near Spring Valley High School"],
    housingStock: "Spring Valley features a mix of multi-family homes, older single-family houses from the early to mid-1900s, and some apartment complexes. Many single-family properties have been converted to two- or three-family use, and the housing stock tends to be older with deferred maintenance that benefits from a systematic repair approach.",
    popularServiceSlugs: ["door-installation", "drywall-repair", "smart-home-device-setup", "bathroom-renovation"],
    localTips: "Spring Valley is an incorporated village with its own building department, separate from the Town of Ramapo. Permits are required for plumbing, electrical, and structural work. Multi-family properties are subject to village code inspections, and landlords should be aware of smoke and carbon monoxide detector requirements for rental units. Budget-conscious homeowners can get the most impact by prioritizing safety items — working doors and locks, functioning smoke detectors, and sound plumbing — before cosmetic upgrades.",
    stats: [
      { label: "Serving Spring Valley Since", value: "2001" },
      { label: "Pricing", value: "Fair & Transparent" },
      { label: "Emergency Repairs", value: "Available" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "haverstraw",
    image: "/images/areas/haverstraw.jpg",
    name: "Haverstraw",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Haverstraw's Trusted Handyman Team",
    heroSubheadline: "Reliable home repairs for Haverstraw homeowners — from the waterfront to the hilltops.",
    intro: "Haverstraw homeowners trust Odds & Ends for reliable handyman work. From siding repair to kitchen and bathroom modernization, Dan has been serving Haverstraw since 2001.",
    commonNeeds: [
      "Siding repair and replacement",
      "Kitchen and bathroom modernization",
      "Deck and patio construction",
      "Window and door upgrades",
      "Interior painting and trim work",
      "Basement moisture and drainage solutions",
      "Fence installation and repair",
      "General maintenance and seasonal upkeep"
    ],
    whyChooseUs: `We take pride in serving every community in Rockland County, and Haverstraw is no exception. We approach every job here with the same professionalism and commitment to quality that has kept us in business for over two decades. Our pricing is fair, our work is solid, and we show up when we say we will. We've built our reputation one satisfied homeowner at a time, and we intend to keep it that way.`,
    faqs: [
      {
        question: "Do you serve both the Village and Town of Haverstraw?",
        answer: "Yes, we serve the entire Haverstraw area, including the village, West Haverstraw, and the surrounding town. We're familiar with the different housing types throughout the area."
      },
      {
        question: "Can you work on older brick buildings in the village?",
        answer: "We can handle many common repairs on the older buildings in Haverstraw's village, including interior work, window replacement, and general maintenance. For structural masonry work, we can also connect you with trusted specialists."
      },
      {
        question: "Do you offer seasonal maintenance services?",
        answer: "Yes. Many of our Haverstraw clients set up seasonal maintenance visits — spring and fall — to address weather damage, clean gutters, check for moisture issues, and handle small repairs before they become bigger problems."
      },
      {
        question: "What's the best way to get started?",
        answer: "Just give us a call or send a message through our website. We'll schedule a free on-site estimate at a time that works for you and walk through whatever your home needs."
      }
    ],
    nearbyAreas: ["stony-point", "clarkstown", "ramapo", "new-city"],
    metaTitle: "Professional Handyman in Haverstraw, NY | Odds & Ends",
    metaDescription: "Trusted handyman services in Haverstraw, NY. Home repairs, upgrades, and maintenance for the village and town. Serving Rockland County for over 20 years.",
    keywords: ["handyman Haverstraw NY", "Haverstraw home repair", "home improvement Haverstraw", "Rockland County handyman", "Haverstraw village repairs"],
    localAdvantage: "Haverstraw's dramatic terrain — from the waterfront village streets up through the steep hillside neighborhoods — creates unique challenges: retaining walls need constant attention, hillside drainage must be managed proactively, and the older brick and frame buildings in the village core require a different skill set than the suburban homes in the outer town. The former brickmaking center of the Hudson Valley, Haverstraw has a building stock that reflects its industrial heritage with sturdy but aging construction.",
    neighborhoods: ["Village of Haverstraw", "West Haverstraw", "Garner Arts District area", "Route 9W corridor", "Short Clove Road", "Samsondale Avenue", "Gurnee Avenue", "near Bowline Point Park"],
    housingStock: "The Village of Haverstraw features older multi-story brick and frame buildings, many dating to the late 1800s brickmaking era, alongside modest single-family homes. West Haverstraw and the outer town areas have more typical mid-century ranches, capes, and split-levels from the 1950s–70s suburban expansion.",
    popularServiceSlugs: ["painting", "drywall-repair", "door-installation", "caulking-weatherstripping"],
    localTips: "The Village of Haverstraw and Town of Haverstraw have separate building departments — make sure you know which jurisdiction your property falls under before applying for permits. The village has been actively encouraging revitalization, and some renovation projects in the downtown area may qualify for incentive programs. Hillside properties should budget for annual drainage and retaining wall inspections, especially after heavy rain seasons.",
    stats: [
      { label: "Serving Haverstraw Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Seasonal Maintenance", value: "Available" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "stony-point",
    image: "/images/areas/stony-point.jpg",
    name: "Stony Point",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Handyman Service You Can Count On in Stony Point",
    heroSubheadline: "From park-side homes to quiet cul-de-sacs — dependable repairs for Stony Point homeowners.",
    intro: "Stony Point homeowners trust Odds & Ends for reliable handyman work. From deck building to storm damage repair, Dan has been serving Stony Point since 2001.",
    commonNeeds: [
      "Deck building and repair",
      "Gutter cleaning and leaf guard installation",
      "Siding repair and exterior maintenance",
      "Interior remodeling and updates",
      "Shed construction and repair",
      "Basement finishing and moisture control",
      "Driveway and walkway repairs",
      "Storm damage cleanup and repair"
    ],
    whyChooseUs: `We've been working throughout northern Rockland County for years, and we understand the specific challenges that Stony Point homes face. We're reliable, we communicate clearly, and we do quality work at fair prices. Our clients in this area appreciate that we don't cut corners and that we treat their homes with respect. If something isn't right, we make it right — that's our standard.`,
    faqs: [
      {
        question: "Do you serve all of Stony Point?",
        answer: "Yes, we serve the entire Town of Stony Point, including neighborhoods off Route 9W, Buckberg Mountain Road, and the areas near the state park."
      },
      {
        question: "Can you build or repair a deck?",
        answer: "Deck work is one of our most common requests in Stony Point. We build new decks, repair existing ones, and handle staining and sealing to protect your investment from the elements."
      },
      {
        question: "Do you help with storm damage?",
        answer: "We do. After storms, we can help with fallen tree limb damage, siding repair, gutter replacement, and general cleanup. Call us as soon as you can and we'll prioritize getting your home back in shape."
      },
      {
        question: "How do I request a free estimate?",
        answer: "Call us or fill out the form on our website. We'll schedule a visit to assess the work and provide a clear, written estimate with no obligation."
      }
    ],
    nearbyAreas: ["haverstraw", "new-city", "clarkstown", "pomona"],
    metaTitle: "Handyman Services in Stony Point, NY | Odds & Ends",
    metaDescription: "Dependable handyman services in Stony Point, NY. Home repairs, deck building, and expert property maintenance from a trusted Rockland County team.",
    keywords: ["handyman Stony Point NY", "Stony Point home repair", "deck building Stony Point", "Rockland County handyman", "home maintenance Stony Point"],
    localAdvantage: "Stony Point's heavily wooded lots and proximity to Harriman State Park and the Stony Point Battlefield mean homes here deal with constant tree debris in gutters, heavy shade that promotes moss and algae on siding and decks, and extra moisture from the dense forest canopy. Northeast storm systems push hard through the river corridor here, making storm damage repair and proactive exterior maintenance a regular part of homeownership.",
    neighborhoods: ["Route 9W corridor", "Buckberg Mountain Road", "Tomkins Cove", "near Stony Point Battlefield", "Mott Farm Road area", "Wayne Avenue", "Crickettown Road", "Filors Lane area"],
    housingStock: "Stony Point is characterized by mid-century ranches and Cape Cods on generous wooded lots, along with some newer colonial developments and a handful of older farmhouse properties in the northern reaches. Many homes feature wrap-around decks and screened porches designed to take advantage of the natural wooded setting.",
    popularServiceSlugs: ["deck-repair", "pressure-washing", "ceiling-fan-installation", "caulking-weatherstripping"],
    localTips: "Stony Point has its own town building department. Deck permits are required and inspections are enforced — don't skip this step, as unpermitted deck work can create problems when you sell. Homes near the state park and Buckberg Mountain should plan for aggressive gutter maintenance schedules, typically three cleanings per year due to heavy leaf and pine needle fall. Pressure washing siding and decks annually helps prevent the moss buildup common in shaded Stony Point lots.",
    stats: [
      { label: "Serving Stony Point Since", value: "2001" },
      { label: "Storm Damage Response", value: "Priority" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "clarkstown",
    image: "/images/areas/clarkstown.jpg",
    name: "Clarkstown",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Clarkstown's Premier Handyman Service",
    heroSubheadline: "Expert home care for every hamlet in Rockland County's largest town.",
    intro: "Clarkstown homeowners trust Odds & Ends for reliable handyman work. From kitchen renovations to deck construction, Dan has been serving Clarkstown since 2001.",
    commonNeeds: [
      "Kitchen and bathroom renovation",
      "Deck construction and refinishing",
      "Basement finishing and waterproofing",
      "Crown molding and trim installation",
      "Siding, fascia, and soffit repair",
      "Interior painting and accent walls",
      "Window and door upgrades",
      "Custom shelving and built-in storage"
    ],
    whyChooseUs: `We've spent over 20 years building a reputation for excellence throughout Clarkstown. Our work speaks for itself — in the decks we've built, the kitchens we've updated, and the countless repairs we've completed across the town's hamlets. We hold ourselves to the same high standard that Clarkstown homeowners hold their properties, and we take pride in delivering results that reflect real craftsmanship. From your first phone call to the final walkthrough, we make the process smooth, transparent, and professional.`,
    faqs: [
      {
        question: "Which Clarkstown hamlets do you serve?",
        answer: "We serve the entire Town of Clarkstown, including New City, Nanuet, Congers, West Nyack, Central Nyack, and all surrounding areas. No matter where you are in Clarkstown, we can be there."
      },
      {
        question: "Can you handle whole-room renovations?",
        answer: "Yes. While we handle plenty of small repairs and quick fixes, we also take on larger renovation projects including kitchen and bathroom remodels, basement finishing, and custom built-in work. We bring a craftsman's attention to detail to every project."
      },
      {
        question: "What sets Odds & Ends apart from other handyman services?",
        answer: "Twenty-plus years of experience in Rockland County, a commitment to quality craftsmanship, and a focus on clear communication and honest pricing. We treat your home the way we'd treat our own, and our long list of repeat clients is proof that the approach works."
      },
      {
        question: "Do you offer any maintenance plans?",
        answer: "We're happy to set up seasonal maintenance visits to keep your home in top condition year-round. Many of our Clarkstown clients schedule spring and fall check-ups to stay ahead of wear and weather damage."
      },
      {
        question: "Can you work around my family's schedule?",
        answer: "Absolutely. We understand that Clarkstown families are busy, and we'll work with you to find scheduling that minimizes disruption. We're also respectful of your space and always clean up thoroughly before we leave."
      }
    ],
    nearbyAreas: ["new-city", "nanuet", "nyack", "stony-point"],
    metaTitle: "Professional Handyman in Clarkstown, NY | Odds & Ends",
    metaDescription: "Premier handyman services for Clarkstown, NY homeowners. Expert craftsmanship, reliable scheduling, and over 20 years serving Rockland County.",
    keywords: ["handyman Clarkstown NY", "Clarkstown home repair", "home renovation Clarkstown", "Rockland County handyman", "Clarkstown kitchen remodel", "Clarkstown deck building"],
    localAdvantage: "As Rockland County's largest town by population, Clarkstown spans a huge range of housing types and eras across its hamlets. This means our work here is incredibly varied — one day we're updating a 1960s split-level kitchen in New City, the next we're rebuilding a deck on a lakeside home in Congers. The town's mature suburban infrastructure means we frequently encounter aging decks, original windows, and fascia and soffit deterioration that comes from 50+ years of Hudson Valley freeze-thaw cycles.",
    neighborhoods: ["New City hamlet", "Nanuet hamlet", "Congers", "West Nyack", "Central Nyack", "Bardonia", "Germonds", "near Lake DeForest"],
    housingStock: "Clarkstown's housing runs the full suburban spectrum: 1950s Cape Cods in Central Nyack, 1960s–70s split-levels and raised ranches that dominate New City and Nanuet, lakeside cottages in Congers, and some newer colonial developments throughout. The town-wide building boom of the mid-20th century created a remarkably consistent (and now simultaneously aging) housing stock.",
    popularServiceSlugs: ["deck-repair", "custom-accent-walls", "built-ins", "shelving-installation"],
    localTips: "The Clarkstown building department is one of the busiest in Rockland County. Permits are required for decks, fences, structural work, and any electrical or plumbing modifications. Inspection wait times can vary, so plan accordingly for time-sensitive projects. Homeowners near Lake DeForest should be aware of additional setback and environmental requirements. Many Clarkstown neighborhoods have active HOAs that require pre-approval for visible exterior changes.",
    stats: [
      { label: "Serving Clarkstown Since", value: "2001" },
      { label: "Hamlets Covered", value: "All of Them" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "orangetown",
    image: "/images/areas/orangetown.jpg",
    name: "Orangetown",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Orangetown's Experienced Handyman Service",
    heroSubheadline: "Quality home repairs for one of Rockland County's most established communities.",
    intro: "Orangetown homeowners trust Odds & Ends for reliable handyman work. From exterior painting to bathroom and kitchen upgrades, Dan has been serving Orangetown since 2001.",
    commonNeeds: [
      "Exterior painting and staining",
      "Roof and gutter maintenance",
      "Bathroom and kitchen upgrades",
      "Window replacement and weatherization",
      "Deck and patio maintenance",
      "Basement waterproofing",
      "Interior trim and molding work",
      "Seasonal property maintenance"
    ],
    whyChooseUs: `We've been a trusted name throughout Orangetown for years because we share the same values as the homeowners here: quality, reliability, and attention to detail. We show up when we say we will, we do the work right, and we stand behind every project. Our deep experience in Rockland County means we understand the specific needs of homes in this area, and we bring that knowledge to every job — large or small.`,
    faqs: [
      {
        question: "Which Orangetown hamlets do you cover?",
        answer: "We serve the entire Town of Orangetown, including Pearl River, Tappan, Sparkill, Blauvelt, Orangeburg, Palisades, and South Nyack. We know the housing across all these communities."
      },
      {
        question: "Do you have experience with historic homes?",
        answer: "Yes. Orangetown has some of the oldest homes in Rockland County, and we have the experience to work on them respectfully. We understand the importance of preserving historic character while making practical updates."
      },
      {
        question: "Can you handle exterior work?",
        answer: "Absolutely. Exterior painting, siding repair, deck maintenance, gutter work, and seasonal prep are all regular parts of our service. We help keep Orangetown homes looking their best from the curb."
      },
      {
        question: "What's the process for getting an estimate?",
        answer: "Call us or reach out online, and we'll schedule a convenient time to come look at the work. You'll get a free, written estimate with clear pricing and no obligation."
      }
    ],
    nearbyAreas: ["pearl-river", "tappan", "sparkill", "piermont"],
    metaTitle: "Professional Handyman in Orangetown, NY | Odds & Ends",
    metaDescription: "Experienced handyman services in Orangetown, NY. Reliable home repairs and maintenance for Pearl River, Tappan, Sparkill, and all Orangetown hamlets.",
    keywords: ["handyman Orangetown NY", "Orangetown home repair", "Rockland County handyman", "home maintenance Orangetown", "Orangetown property care"],
    localAdvantage: "Orangetown encompasses some of Rockland County's most historically significant hamlets, and the housing stock reflects that heritage — from colonial-era stone houses in Tappan to early 20th-century bungalows in Pearl River to riverfront properties in Palisades. Working across this range demands versatility: we might need period-appropriate restoration skills in one hamlet and straightforward mid-century maintenance skills in the next, all within the same town.",
    neighborhoods: ["Pearl River hamlet", "Tappan hamlet", "Sparkill", "Blauvelt", "Orangeburg", "Palisades", "South Nyack", "near the Tappan Zee (Mario Cuomo) Bridge"],
    housingStock: "Orangetown's housing is among the most diverse in Rockland County, spanning colonial-era stone homes in Tappan, early 1900s bungalows and Cape Cods in Pearl River and Sparkill, mid-century suburban homes in Orangeburg and Blauvelt, and high-end riverfront properties in Palisades. Each hamlet has its own character and typical maintenance profile.",
    popularServiceSlugs: ["painting", "pressure-washing", "caulking-weatherstripping", "light-fixture-installation"],
    localTips: "The Town of Orangetown building department handles permits for all unincorporated hamlets. Permits are required for decks, fences, structural modifications, and any electrical or plumbing work. Properties in Tappan's historic areas may face additional scrutiny for exterior changes. Palisades properties near the river and the Palisades Interstate Parkway may have environmental and setback restrictions. Orangetown's leaf pickup schedule is aggressive in fall — coordinate exterior projects to avoid conflicts with curbside leaf piles.",
    stats: [
      { label: "Serving Orangetown Since", value: "2001" },
      { label: "Hamlets Covered", value: "All 7" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "ramapo",
    image: "/images/areas/ramapo.jpg",
    name: "Ramapo",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Reliable Handyman Services in Ramapo",
    heroSubheadline: "Serving the diverse communities of Rockland County's largest town with quality home repairs.",
    intro: "Ramapo homeowners trust Odds & Ends for reliable handyman work. From interior painting to deck and fence repair, Dan has been serving Ramapo since 2001.",
    commonNeeds: [
      "Interior and exterior painting",
      "Plumbing and fixture updates",
      "Window and door replacement",
      "Deck and fence repair",
      "Basement finishing",
      "Tile work and flooring",
      "Weatherization and insulation",
      "General home maintenance"
    ],
    whyChooseUs: `We've worked across every part of Ramapo and understand the unique needs of each community. Whether you're in Suffern, Spring Valley, Pomona, or anywhere in between, we bring consistent quality, honest communication, and competitive pricing. After more than two decades in Rockland County, we know how to adapt our approach to whatever your specific home requires — and we take pride in doing the job right every time.`,
    faqs: [
      {
        question: "Do you serve all communities within Ramapo?",
        answer: "Yes. We work throughout the Town of Ramapo, including Suffern, Spring Valley, Pomona, Monsey, Airmont, Hillburn, and all surrounding areas."
      },
      {
        question: "Can you handle different types of homes?",
        answer: "Absolutely. We work on everything from vintage village properties to modern suburban homes. Our 20-plus years of experience in Rockland County means we've seen and worked on virtually every type of home in the area."
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes, every estimate is free and comes with no obligation. We'll visit your property, discuss the work, and provide a clear, written quote."
      },
      {
        question: "What's the best way to reach you?",
        answer: "Call us directly or use the contact form on our website. We respond quickly and will work with you to schedule an estimate at a time that's convenient."
      }
    ],
    nearbyAreas: ["suffern", "spring-valley", "pomona", "clarkstown"],
    metaTitle: "Expert Handyman Services in Ramapo, NY | Odds & Ends",
    metaDescription: "Reliable handyman services across the Town of Ramapo, NY. Quality home repairs and maintenance for Suffern, Spring Valley, Pomona, and more.",
    keywords: ["handyman Ramapo NY", "Ramapo home repair", "Rockland County handyman", "home maintenance Ramapo", "Ramapo property repair"],
    localAdvantage: "Ramapo is Rockland County's largest town by area, stretching from the Suffern village core at the base of the Ramapo Mountains westward through wooded Pomona and down into densely populated Spring Valley. This geographic spread means homes here face dramatically different conditions: mountain-adjacent properties deal with steep grades, rocky soil, and heavy runoff, while the flatter eastern sections contend with older infrastructure and higher-density housing demands.",
    neighborhoods: ["Suffern Village", "Spring Valley", "Pomona", "Monsey", "Airmont", "Hillburn", "Tallman", "Viola"],
    housingStock: "Ramapo's housing is the most diverse in Rockland County — from charming Victorian-era homes in Suffern's village to dense multi-family properties in Spring Valley, wooded colonials on large lots in Pomona, and everything in between. The town has no single dominant style, which keeps our work varied and interesting.",
    popularServiceSlugs: ["door-installation", "painting", "bathroom-renovation", "smart-home-device-setup"],
    localTips: "The Town of Ramapo building department handles permits for unincorporated areas, but the villages of Suffern, Spring Valley, and Hillburn each have their own building departments and codes. Always verify which jurisdiction your property falls under before starting permitted work. Properties in the western mountainous areas may have well water and septic systems that affect renovation planning. Ramapo's varied elevation means winter weather can differ significantly between hamlets — hilltop homes in Pomona may see significantly more ice and wind than properties in the valley.",
    stats: [
      { label: "Serving Ramapo Since", value: "2001" },
      { label: "Communities Covered", value: "8+" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "suffern",
    image: "/images/areas/suffern.jpg",
    name: "Suffern",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Suffern's Trusted Local Handyman",
    heroSubheadline: "Quality repairs and honest service for Suffern's village homes and beyond.",
    intro: "Suffern homeowners trust Odds & Ends for reliable handyman work. From historic home maintenance to kitchen and bathroom modernization, Dan has been serving Suffern since 2001.",
    commonNeeds: [
      "Historic home maintenance and repair",
      "Interior painting and wallpaper removal",
      "Porch and front step repair",
      "Kitchen and bathroom modernization",
      "Gutter and downspout maintenance",
      "Exterior wood repair and rot remediation",
      "Flooring refinishing and replacement",
      "Storm window installation"
    ],
    whyChooseUs: `We appreciate the character of Suffern's homes and we work hard to maintain it. Our team has the experience to handle everything from delicate restoration work on older village properties to practical updates on mid-century homes. We're straightforward, we're fairly priced, and we take genuine pride in our work. Suffern homeowners who've worked with us know they can count on us to show up, do it right, and leave their home better than we found it.`,
    faqs: [
      {
        question: "Do you work on the older homes near downtown Suffern?",
        answer: "Yes, and we particularly enjoy it. The older Victorians, foursquares, and bungalows near Lafayette Avenue require a skilled touch, and we have decades of experience working with the materials and construction methods found in these homes."
      },
      {
        question: "Can you help with drainage issues on hillside properties?",
        answer: "We can address many common drainage concerns, including regrading around foundations, installing French drains, and ensuring gutters and downspouts are directing water properly away from your home."
      },
      {
        question: "How far ahead do I need to schedule?",
        answer: "Small repairs can often be scheduled within a few days. Larger projects typically need one to two weeks of lead time. We always try to accommodate our Suffern clients as quickly as possible."
      },
      {
        question: "Do you provide references?",
        answer: "Happy to. We've been working in Rockland County for over 20 years and have a long list of satisfied clients throughout Suffern and the surrounding area."
      }
    ],
    nearbyAreas: ["ramapo", "spring-valley", "pomona", "pearl-river"],
    metaTitle: "Professional Handyman in Suffern, NY | Odds & Ends",
    metaDescription: "Trusted handyman services in Suffern, NY. Expert home repairs for village homes and hillside properties. Serving Rockland County for over 20 years.",
    keywords: ["handyman Suffern NY", "Suffern home repair", "village home maintenance Suffern", "Rockland County handyman", "Suffern property maintenance"],
    localAdvantage: "Suffern's position at the base of the Ramapo Mountains creates a distinct microclimate — heavy runoff from the mountain slopes puts extra pressure on foundations and basements, while the village's collection of century-old homes along Lafayette Avenue and surrounding streets features construction methods that require experienced hands. Hillside properties face grading and drainage challenges that flatter communities simply don't encounter.",
    neighborhoods: ["Lafayette Avenue corridor", "Village downtown", "Wayne Avenue", "Orange Avenue", "Chestnut Street area", "Mountain Avenue", "Hillside neighborhood", "near Good Samaritan Hospital"],
    housingStock: "Suffern's downtown village features graceful Victorians, American Foursquares, and craftsman bungalows from the late 1800s through early 1900s. Above the village, hillside ranches and split-levels from the 1950s–60s sit on sloped lots. A handful of newer townhome developments round out the mix near the village edges.",
    popularServiceSlugs: ["painting", "drywall-repair", "door-installation", "caulking-weatherstripping"],
    localTips: "Suffern is an incorporated village with its own building department, separate from the Town of Ramapo. Permits are required for structural work, electrical, plumbing, and decks. The village's older homes near Lafayette Avenue may have balloon framing, which has specific fire-stopping requirements if you're opening walls for renovation. Hillside properties should have gutters and downspouts checked after every major rainstorm — the mountain runoff can overwhelm undersized drainage systems quickly.",
    stats: [
      { label: "Serving Suffern Since", value: "2001" },
      { label: "Village Experience", value: "20+ Years" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "piermont",
    image: "/images/areas/piermont.jpg",
    name: "Piermont",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Piermont's Handyman for Distinctive Homes",
    heroSubheadline: "Meticulous craftsmanship for the homes that define this one-of-a-kind Hudson River village.",
    intro: "Piermont homeowners trust Odds & Ends for reliable handyman work. From custom carpentry to exterior restoration, Dan has been serving Piermont since 2001.",
    commonNeeds: [
      "Custom carpentry and millwork",
      "High-end bathroom and kitchen renovations",
      "Exterior restoration and weatherproofing",
      "Deck and terrace construction with river views",
      "Historic home preservation work",
      "Moisture control and foundation repair",
      "Custom shelving and built-in cabinetry",
      "Interior painting with premium finishes"
    ],
    whyChooseUs: `We hold ourselves to the same high standards that Piermont homeowners hold their homes. Our work in this village is defined by precision, attention to detail, and a deep respect for each property's unique character. We use quality materials, we take the time to get things right, and we communicate openly throughout every project. Over 20 years in Rockland County, we've developed the skills and the sensibility that Piermont homes demand — and we bring that to every job, whether it's a small repair or a complete renovation.`,
    faqs: [
      {
        question: "Do you have experience with the unique homes in Piermont?",
        answer: "Yes. We've worked on a wide variety of Piermont properties, from historic cottages on the hillside to modern homes near the waterfront. We understand the architectural diversity here and tailor our approach to each home's specific requirements."
      },
      {
        question: "Can you handle hillside access and construction challenges?",
        answer: "We're experienced with the logistical challenges that Piermont's terrain presents, including hillside access, limited workspace, and the structural considerations that come with building on a slope."
      },
      {
        question: "Do you use premium materials?",
        answer: "We always match materials to the quality level the project requires. For Piermont homes, that typically means premium paints, hardwoods, and finishes that stand up to river exposure and complement the home's character."
      },
      {
        question: "Can you work on historic properties without compromising their character?",
        answer: "That's one of our core strengths. We believe that repairs and improvements should enhance a home's original character, not erase it. We work carefully to match existing details and preserve the features that make older Piermont homes so special."
      },
      {
        question: "How do I get started with a project in Piermont?",
        answer: "Reach out by phone or through our website. We'll arrange a visit to discuss your project, evaluate the work, and provide a detailed estimate. We're happy to consult on the best approach before any work begins."
      }
    ],
    nearbyAreas: ["nyack", "grandview-on-hudson", "orangetown", "sparkill"],
    metaTitle: "Professional Handyman in Piermont, NY | Odds & Ends",
    metaDescription: "Expert handyman services for Piermont, NY's distinctive homes. Meticulous craftsmanship and premium finishes for this unique Hudson River village.",
    keywords: ["handyman Piermont NY", "Piermont home repair", "Hudson River village handyman", "Piermont home renovation", "Rockland County handyman", "premium home repair Piermont"],
    localAdvantage: "Piermont's hillside terrain and waterfront exposure present challenges you won't find in typical suburban communities. Many homes are built on steep, narrow lots where access for materials and equipment requires creative logistics. The Hudson River is literally at the village's doorstep, and that proximity drives accelerated deterioration of exterior finishes, deck materials, and any exposed metal hardware. Compact lot sizes also mean working in tight quarters where precision matters more than usual.",
    neighborhoods: ["Piermont Pier area", "Ash Street", "Hudson Terrace", "Ferdon Avenue", "Paradise Avenue", "Flywheel Park vicinity", "Sparkill Creek border", "Piermont Avenue"],
    housingStock: "Piermont's housing is an eclectic mix of historic cottages and workers' homes from the village's 19th-century paper mill era, hillside homes with dramatic river views, and tasteful modern renovations squeezed onto compact footprints. No two blocks look alike, and many properties have been thoughtfully expanded or updated while retaining their original character.",
    popularServiceSlugs: ["deck-repair", "painting", "custom-accent-walls", "pressure-washing"],
    localTips: "The Village of Piermont has its own building department and is particular about maintaining the village's character. Permits are required for decks, structural work, and any exterior modifications. Waterfront and flood-zone properties along the pier and lower streets may be subject to FEMA flood zone regulations that affect renovation scope and insurance requirements. Material deliveries can be tricky on Piermont's narrow hillside streets — we always plan logistics in advance to avoid blocking neighbors.",
    stats: [
      { label: "Serving Piermont Since", value: "2001" },
      { label: "Premium Craftsmanship", value: "Guaranteed" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "grandview-on-hudson",
    image: "/images/areas/grandview-on-hudson.jpg",
    name: "Grandview-on-Hudson",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Handyman Excellence for Grandview-on-Hudson",
    heroSubheadline: "Skilled craftsmanship worthy of the most exclusive address on the Hudson.",
    intro: "Grandview-on-Hudson homeowners trust Odds & Ends for reliable handyman work. From deck maintenance to premium exterior finishing, Dan has been serving Grandview-on-Hudson since 2001.",
    commonNeeds: [
      "Deck and terrace maintenance and rebuilding",
      "Premium exterior painting and finishing",
      "Window and door replacement for river exposure",
      "Custom interior carpentry",
      "Moisture management and waterproofing",
      "Bathroom and kitchen renovations",
      "Landscape retaining wall repair",
      "Custom outdoor living features"
    ],
    whyChooseUs: `We bring a level of craftsmanship and attention to detail that matches the caliber of Grandview-on-Hudson's homes. Over two decades in Rockland County, we've developed the expertise to handle the unique demands of riverfront properties — from selecting materials that withstand Hudson River exposure to executing work with the precision these homes warrant. We're discreet, respectful of your property and privacy, and committed to results that you'll be proud of for years to come.`,
    faqs: [
      {
        question: "Do you understand the specific challenges of riverfront homes?",
        answer: "Yes. We have extensive experience with Hudson River-adjacent properties and understand the accelerated wear that moisture, wind, and salt air cause on exterior finishes, decks, and structural elements. We select materials and techniques specifically suited to these conditions."
      },
      {
        question: "Can you work on architecturally unique homes?",
        answer: "Absolutely. Grandview's homes are anything but cookie-cutter, and we appreciate the individuality. We take the time to understand each property's design language and ensure our work integrates seamlessly with the existing architecture."
      },
      {
        question: "How do you handle the logistics of working in Grandview?",
        answer: "We're sensitive to the village's quiet, residential character. We keep our work area tidy, minimize noise disruption, and coordinate schedules to be respectful of your neighbors and your own daily life."
      },
      {
        question: "What quality of materials do you use?",
        answer: "For Grandview properties, we use premium-grade materials selected for both aesthetics and durability. We're happy to discuss specific product choices with you to ensure they meet your expectations and perform well in the riverfront environment."
      },
      {
        question: "Can you provide a consultation before committing to a project?",
        answer: "Of course. We offer free on-site consultations where we'll assess the work, discuss options, and provide a detailed written estimate. There's never any pressure — we want you to feel confident in the plan before we begin."
      }
    ],
    nearbyAreas: ["nyack", "piermont", "orangetown", "clarkstown"],
    metaTitle: "Handyman in Grandview-on-Hudson, NY | Odds & Ends Handyman",
    metaDescription: "Premium handyman services for Grandview-on-Hudson, NY. Expert craftsmanship for riverfront homes in Rockland County's most exclusive village.",
    keywords: ["handyman Grandview-on-Hudson NY", "Grandview-on-Hudson home repair", "riverfront home maintenance", "Rockland County handyman", "premium handyman service"],
    localAdvantage: "Grandview-on-Hudson is one of the smallest villages in New York State, and virtually every property here has direct or near-direct Hudson River exposure. The combination of constant moisture, wind off the Tappan Zee, and steep wooded lots means exterior materials degrade faster than anywhere else in the county. Homes here are often architect-designed or extensively customized, so cookie-cutter repair approaches don't work — each project requires understanding the specific home's design intent and materials palette.",
    neighborhoods: ["River Road", "Broadway", "Highland Avenue", "Grand View Avenue", "near the Tappan Zee overlook", "upper hillside homes"],
    housingStock: "Grandview-on-Hudson features an eclectic collection of architect-designed homes, mid-century modern properties, and thoughtfully renovated older houses, nearly all perched on steep, heavily wooded lots with Hudson River views. The housing stock resists easy categorization — what unites it is a high standard of design and finish that owners expect to be maintained.",
    popularServiceSlugs: ["deck-repair", "painting", "pressure-washing", "built-ins"],
    localTips: "Grandview-on-Hudson is a tiny incorporated village with its own building code and zoning. Even minor exterior work may require a village permit, and the small-government structure means permit processing can take time — plan ahead. The steep terrain makes material delivery and equipment access challenging; we typically stage materials at the roadside and transport them by hand to the work area. River-facing decks and siding should be inspected and treated annually at minimum. Many homes here have retaining walls that need periodic assessment after heavy rains.",
    stats: [
      { label: "Serving Grandview Since", value: "2001" },
      { label: "Riverfront Expertise", value: "Specialized" },
      { label: "Material Quality", value: "Premium" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "sparkill",
    image: "/images/areas/sparkill.jpg",
    name: "Sparkill",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Sparkill's Trusted Handyman Craftsmen",
    heroSubheadline: "Careful, quality work for the quiet homes and tree-lined streets of Sparkill.",
    intro: "Sparkill homeowners trust Odds & Ends for reliable handyman work. From exterior painting to kitchen and bathroom remodeling, Dan has been serving Sparkill since 2001.",
    commonNeeds: [
      "Exterior painting and wood restoration",
      "Kitchen and bathroom remodeling",
      "Crown molding and interior trim work",
      "Basement waterproofing and finishing",
      "Window and door replacement",
      "Deck and patio construction",
      "Gutter systems and drainage solutions",
      "Seasonal home maintenance"
    ],
    whyChooseUs: `We approach Sparkill homes with the quiet professionalism this community deserves. Our work is careful, clean, and detail-oriented — we understand that homeowners here value quality above all else. We've spent over 20 years perfecting our craft throughout Rockland County, and we bring every bit of that experience to each Sparkill project. From a simple repair to a thoughtful renovation, we deliver results that enhance your home's character and value.`,
    faqs: [
      {
        question: "Do you work regularly in Sparkill?",
        answer: "Yes, Sparkill and the broader Orangetown area are part of our core service territory. We're familiar with the housing stock, the common maintenance needs, and the community's expectations for quality work."
      },
      {
        question: "Can you help with moisture issues near the Sparkill Creek?",
        answer: "We can. Properties near the creek sometimes face drainage and basement moisture challenges. We can assess the situation, recommend solutions, and implement them properly to protect your home."
      },
      {
        question: "Do you preserve original details when working on older homes?",
        answer: "Absolutely. We believe strongly in respecting the original craftsmanship of older homes. When we do repair or renovation work, we take care to match existing profiles, materials, and finishes so the result looks like it has always been there."
      },
      {
        question: "How do I schedule work?",
        answer: "Just call us or reach out through our website. We'll arrange a convenient time for a free on-site estimate and go from there. We're flexible with scheduling and respectful of your time."
      },
      {
        question: "What sizes of projects do you take on?",
        answer: "Everything from a single repair to multi-room renovations. Many of our Sparkill clients start with a small job and become long-term clients as they see the quality of our work. No project is too small for our full attention."
      }
    ],
    nearbyAreas: ["tappan", "piermont", "orangetown", "pearl-river"],
    metaTitle: "Professional Handyman in Sparkill, NY | Odds & Ends",
    metaDescription: "Quality handyman services for Sparkill, NY. Careful craftsmanship for older homes in this quiet Orangetown hamlet. Free estimates, 20+ years experience.",
    keywords: ["handyman Sparkill NY", "Sparkill home repair", "Orangetown handyman", "home maintenance Sparkill", "Rockland County handyman", "Sparkill home improvement"],
    localAdvantage: "Sparkill's position along its namesake creek means properties on the lower streets can experience periodic flooding and persistent basement moisture — a very different challenge than the well-drained hillside lots just a few blocks away. The hamlet's quiet, tree-canopied streets produce heavy leaf fall that clogs gutters and downspouts, and the mature tree roots common throughout the area can crack walkways and shift foundations over time.",
    neighborhoods: ["Route 340 corridor", "Main Street", "near St. Thomas Aquinas College", "Sparkill Creek area", "Eastern Road", "Mountainview Avenue", "Depot Square area", "Valentines Lane"],
    housingStock: "Sparkill features a well-maintained collection of early 20th-century colonials and Cape Cods, many with original woodwork and character details intact. A few older Victorian-era properties near the historic center are interspersed with mid-century ranches on the hamlet's outer edges. The overall housing quality is high, reflecting an owner-occupied community that invests in upkeep.",
    popularServiceSlugs: ["painting", "drywall-repair", "shelving-installation", "light-fixture-installation"],
    localTips: "Sparkill falls under the Town of Orangetown building department for all permits. Properties near Sparkill Creek should verify their flood zone status before undertaking basement finishing work — FEMA maps were updated recently and some properties may have changed zones. The hamlet's mature trees are beautiful but produce aggressive root systems that can affect underground utilities and walkways. Plan for gutter cleaning at least twice during fall — the dense canopy drops leaves over a longer period than open suburban lots.",
    stats: [
      { label: "Serving Sparkill Since", value: "2001" },
      { label: "Attention to Detail", value: "Our Standard" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "tappan",
    image: "/images/areas/tappan.jpg",
    name: "Tappan",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Tappan's Handyman for Historic & Modern Homes",
    heroSubheadline: "Preserving the character of one of Rockland County's most historic hamlets — one home at a time.",
    intro: "Tappan homeowners trust Odds & Ends for reliable handyman work. From historic stone repair to kitchen and bathroom renovations, Dan has been serving Tappan since 2001.",
    commonNeeds: [
      "Historic stone and masonry repair",
      "Period-appropriate interior restoration",
      "Kitchen and bathroom renovations",
      "Exterior painting and wood preservation",
      "Custom trim and molding installation",
      "Foundation maintenance and waterproofing",
      "Deck and outdoor living construction",
      "Window replacement and weatherization"
    ],
    whyChooseUs: `We treat Tappan's homes with the reverence they deserve. Our team understands that working on a historic property requires patience, knowledge, and respect for the materials and methods of the original builders. At the same time, we're fully capable of modern updates and renovations that bring comfort and function to homes of any era. Over 20 years in Rockland County, we've developed a reputation for thoughtful, high-quality work — the kind that enhances a home's character rather than diminishing it. In Tappan, that philosophy matters more than almost anywhere else.`,
    faqs: [
      {
        question: "Can you work on Tappan's historic stone homes?",
        answer: "Yes. We have experience working on older stone and colonial-era homes and understand the importance of using appropriate materials and techniques. We take a preservation-first approach that protects both the home's structural integrity and its historic character."
      },
      {
        question: "Do you handle modern updates on older properties?",
        answer: "Absolutely. Many Tappan homeowners want to modernize kitchens, bathrooms, or living spaces while preserving the home's overall character. We're skilled at blending contemporary comfort with traditional aesthetics."
      },
      {
        question: "What's your experience with period-appropriate finishes?",
        answer: "We've spent years learning to match historic profiles, wood species, and finish techniques. Whether it's replicating original trim, matching stone, or selecting historically appropriate paint colors, we bring the knowledge to get it right."
      },
      {
        question: "Do you provide free estimates in Tappan?",
        answer: "Yes. We'll come to your property, discuss the work in detail, and provide a clear written estimate at no charge. For projects involving historic elements, we'll take extra time to ensure our approach is exactly right."
      },
      {
        question: "How do you protect historic features during renovations?",
        answer: "We take careful precautions to protect original features — covering floors, masking trim, and working methodically to avoid damage to irreplaceable elements. If we're removing something for access, we document it and restore it properly when the work is complete."
      }
    ],
    nearbyAreas: ["sparkill", "orangetown", "pearl-river", "piermont"],
    metaTitle: "Expert Handyman Services in Tappan, NY | Odds & Ends",
    metaDescription: "Expert handyman services for Tappan, NY. Skilled craftsmanship for historic and modern homes in this storied Rockland County hamlet. Free estimates.",
    keywords: ["handyman Tappan NY", "Tappan home repair", "historic home maintenance Tappan", "Orangetown handyman", "Rockland County handyman", "Tappan home renovation"],
    localAdvantage: "Tappan is one of the oldest continuously settled communities in Rockland County, with stone houses dating to the 1700s alongside every subsequent era of American residential construction. This layered history means a handyman working here needs to be comfortable with colonial-era stone foundations one day and mid-century drywall the next. The hamlet's low-lying areas along the creek corridors also face seasonal moisture challenges that require proactive waterproofing attention.",
    neighborhoods: ["Old Tappan Road area", "Kings Highway", "Western Highway corridor", "Route 303 area", "near the DeWint House", "Tappan historic center", "Oak Tree Road area", "near the '76 House"],
    housingStock: "Tappan's housing is uniquely layered: colonial-era Dutch stone homes and frame houses from the 1700s and 1800s in the historic center, surrounded by rings of 1920s–40s bungalows and capes, mid-century ranches, and newer colonial-style developments on the outskirts. The historic homes often have hand-hewn beam construction, stone walls, and wide-plank floors that require specialized repair knowledge.",
    popularServiceSlugs: ["painting", "drywall-repair", "door-installation", "caulking-weatherstripping"],
    localTips: "Tappan is within the Town of Orangetown, which handles building permits. Properties in the recognized historic area around the DeWint House and Old '76 House may face additional scrutiny for exterior modifications — while there's no formal historic district overlay, the community is preservation-minded and the town takes visual impact seriously. Stone homes require lime-based mortar for repointing, not Portland cement — using the wrong material can trap moisture and damage the stone. We know these details because we've worked on these homes for decades.",
    stats: [
      { label: "Serving Tappan Since", value: "2001" },
      { label: "Historic Home Skills", value: "Specialized" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "pomona",
    image: "/images/areas/pomona.jpg",
    name: "Pomona",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Pomona's Preferred Handyman Service",
    heroSubheadline: "Quality craftsmanship for Pomona's nature-surrounded homes and growing community.",
    intro: "Pomona homeowners trust Odds & Ends for reliable handyman work. From deck construction to exterior painting, Dan has been serving Pomona since 2001.",
    commonNeeds: [
      "Deck construction, repair, and staining",
      "Exterior painting and wood protection",
      "Gutter systems and leaf management",
      "Kitchen and bathroom renovations",
      "Basement finishing and moisture control",
      "Custom closets and storage solutions",
      "Window and door upgrades",
      "Seasonal property maintenance and inspection"
    ],
    whyChooseUs: `We appreciate the care that Pomona homeowners put into their properties, and we match it with our own commitment to quality. Our team has the experience to handle everything from fine interior carpentry to rugged exterior maintenance, and we use materials and techniques suited to Pomona's unique wooded environment. We've been building trust across Rockland County for over 20 years, one excellent project at a time. When you work with us, you get a team that treats your home with the same respect you do.`,
    faqs: [
      {
        question: "Do you understand the challenges of homes in wooded settings?",
        answer: "Absolutely. Pomona's wooded environment creates specific maintenance demands, from accelerated exterior wear to drainage and moisture concerns. We're experienced with these issues and can help you develop a proactive maintenance plan."
      },
      {
        question: "Can you work on both newer and older homes in Pomona?",
        answer: "Yes. We're equally comfortable working on a mid-century ranch that needs updating and a recently built colonial that needs its first round of maintenance. Our 20-plus years of experience cover the full range of Pomona's housing."
      },
      {
        question: "Do you build custom decks?",
        answer: "We do, and Pomona is one of the areas where we build them most often. We design and construct decks that complement your home's style, maximize your outdoor enjoyment, and are built to withstand the effects of a wooded, shaded setting."
      },
      {
        question: "What about ongoing maintenance?",
        answer: "We offer seasonal maintenance services and are happy to set up regular visits to keep your Pomona home in top shape. Many of our clients here find that proactive maintenance is far more cost-effective than reactive repairs."
      },
      {
        question: "How do I get a quote?",
        answer: "Contact us by phone or through our website to schedule a free on-site estimate. We'll evaluate the work, discuss your priorities, and provide a detailed, written quote with no obligation."
      }
    ],
    nearbyAreas: ["ramapo", "new-city", "suffern", "stony-point"],
    metaTitle: "Expert Handyman Services in Pomona, NY | Odds & Ends",
    metaDescription: "Quality handyman services for Pomona, NY homeowners. Expert repairs and maintenance for homes in Rockland County's nature-surrounded community.",
    keywords: ["handyman Pomona NY", "Pomona home repair", "Ramapo handyman", "home maintenance Pomona", "Rockland County handyman", "Pomona deck building"],
    localAdvantage: "Pomona's heavily wooded, larger lots give homeowners a rural feel within reach of the rest of Rockland County, but those same beautiful trees create relentless maintenance demands. Leaf and debris buildup in gutters is constant from September through December, shade and moisture promote mold and algae growth on siding and decks, and the wildlife common to the area — from woodpeckers to squirrels — can cause surprising damage to soffits, fascia, and attic venting. Homes here are also more spread out, with longer driveways and more outbuilding structures that need periodic attention.",
    neighborhoods: ["Route 202 corridor", "Camp Hill Road", "Quaker Road area", "Pomona Road", "Ladentown Road area", "near Harriman State Park border", "Call Hollow Road", "Halley Drive area"],
    housingStock: "Pomona is dominated by raised ranches and colonial-style homes built in the 1970s and 1980s on large wooded lots, often a half-acre or more. Some newer construction has filled in over the past two decades, and there are scattered older properties with a more rural character. The wooded setting and lot sizes mean most homes have substantial decks, and many have detached garages or sheds that also need maintenance.",
    popularServiceSlugs: ["deck-repair", "pressure-washing", "shelving-installation", "ceiling-fan-installation"],
    localTips: "Pomona falls under the Town of Ramapo building department. Deck permits are required and the town inspects footings and framing — we handle the permit process regularly and can guide you through it. Many Pomona properties have septic systems and well water, which affects renovation planning for kitchens and bathrooms. The wooded lots mean decks should be built with composite or pressure-treated lumber rated for ground contact, and any staining should use mold-resistant formulas. Plan exterior projects for late spring through early fall, as the heavy tree canopy keeps surfaces damp well into the morning hours.",
    stats: [
      { label: "Serving Pomona Since", value: "2001" },
      { label: "Deck Projects Completed", value: "Hundreds" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "airmont",
    image: "/images/areas/airmont.jpg",
    name: "Airmont",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Airmont's Trusted Handyman Service",
    heroSubheadline: "Reliable home repairs and upgrades for Airmont's quiet residential neighborhoods.",
    intro: "Airmont homeowners count on Odds & Ends for quality repairs and improvements that keep their homes in top shape. As a village within the Town of Ramapo, Airmont's suburban character and family-friendly neighborhoods deserve a handyman service that understands the area and delivers work you can trust.",
    commonNeeds: [
      "Interior and exterior painting",
      "Deck repair and staining",
      "Drywall patching and repair",
      "Door installation and adjustment",
      "Light fixture upgrades",
      "Fence repair and replacement",
      "Bathroom updates",
      "Ceiling fan installation"
    ],
    whyChooseUs: `Airmont is a tight-knit village where word travels fast — and our reputation here speaks for itself. We know the housing stock, we pull permits through the Town of Ramapo when needed, and we show up on time. Many of our Airmont customers have called us back for second and third projects because we treat every home like our own.`,
    faqs: [
      { question: "Do you serve all of Airmont?", answer: "Yes. We work throughout the Village of Airmont, including homes off Cherry Lane, Viola Road, Grotke Road, and all surrounding streets." },
      { question: "Are permits required for work in Airmont?", answer: "Airmont is governed by the Town of Ramapo building department. Permits are required for structural work, electrical changes, and certain renovations. We handle the permit process for you." },
      { question: "How quickly can you start a project in Airmont?", answer: "We typically schedule Airmont jobs within a few days, and same-day service is often available for smaller repairs." },
      { question: "Do you offer free estimates?", answer: "Absolutely. Every estimate is free, and we provide detailed written quotes so there are no surprises." },
      { question: "Can you help with older homes in Airmont?", answer: "Yes. Many Airmont homes date to the 1960s and 1970s, and we're experienced with the specific issues that come with aging split-levels, raised ranches, and colonials." }
    ],
    nearbyAreas: ["ramapo", "suffern", "spring-valley", "chestnut-ridge", "new-hempstead", "montebello"],
    metaTitle: "Expert Handyman Services in Airmont, NY | Odds & Ends",
    metaDescription: "Professional handyman services for Airmont, NY homeowners. Quality repairs, renovations, and maintenance for homes in this Rockland County village.",
    keywords: ["handyman Airmont NY", "Airmont home repair", "Ramapo handyman", "home maintenance Airmont", "Rockland County handyman"],
    localAdvantage: "Airmont's housing is predominantly mid-century suburban — split-levels, raised ranches, and bi-levels built during the 1960s and 1970s development boom. These homes are well-built but reaching the age where systems and finishes need updating. Kitchens and bathrooms often still have original layouts, doors and windows have settled, and basements that were finished decades ago may need refreshing. The village's residential zoning keeps things quiet, but it also means homeowners here invest in their properties for the long term.",
    neighborhoods: ["Cherry Lane area", "Viola Road", "Grotke Road", "Highview Road", "Spook Rock Road area", "Ewing Avenue", "Montrose Avenue", "Doxbury Lane"],
    housingStock: "Airmont is largely composed of split-level, bi-level, and raised ranch homes built between the early 1960s and late 1970s. Lot sizes typically range from a quarter-acre to a half-acre. Some newer construction and additions have been built on remaining parcels, but the village retains its mid-century suburban character. Most homes have one-car attached garages and modestly sized decks or patios.",
    popularServiceSlugs: ["painting", "drywall-repair", "door-installation", "ceiling-fan-installation-and-replacement", "light-fixture-installation", "bathroom-renovation"],
    localTips: "Airmont homes fall under the Town of Ramapo building department for permits and inspections. Many of the original split-levels have aluminum wiring — if you're updating outlets or fixtures, it's worth having an electrician verify connections. The village has strict noise ordinances, so exterior work is generally limited to daytime hours on weekdays and Saturday mornings. Plan interior renovation projects for fall and winter when contractors' schedules tend to be more open.",
    stats: [
      { label: "Serving Airmont Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "chestnut-ridge",
    image: "/images/areas/chestnut-ridge.jpg",
    name: "Chestnut Ridge",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Chestnut Ridge's Trusted Handyman Service",
    heroSubheadline: "Expert home repairs and renovations for Chestnut Ridge's distinctive hillside community.",
    intro: "Chestnut Ridge homeowners turn to Odds & Ends for dependable craftsmanship on every project, from small fixes to full room renovations. Nestled along the ridge between Nanuet and Spring Valley, this village has a mix of housing styles and a community that values quality — and that's exactly what we deliver.",
    commonNeeds: [
      "Kitchen and bathroom renovations",
      "Deck building and repair",
      "Interior painting and trim work",
      "Drywall repair",
      "Flooring installation",
      "Shelving and storage solutions",
      "Door and window trim replacement",
      "Smart home device setup"
    ],
    whyChooseUs: `We've worked on homes all along Red Schoolhouse Road, Hungry Hollow, and the side streets that climb the ridge. Chestnut Ridge's varied housing stock means we need to be versatile — and we are. Whether it's updating a 1970s ranch kitchen or repairing a deck on a newer colonial, we bring the same attention to detail and honest pricing every time.`,
    faqs: [
      { question: "Do you handle renovations in Chestnut Ridge?", answer: "Yes. We handle kitchen and bathroom renovations, flooring, tile work, painting, and more. We manage the entire project from start to finish." },
      { question: "What areas of Chestnut Ridge do you cover?", answer: "All of it — from homes along Red Schoolhouse Road to the neighborhoods off Hungry Hollow Road, Old Schoolhouse Road, and everywhere in between." },
      { question: "Do I need a permit for a deck in Chestnut Ridge?", answer: "Yes. Deck construction requires a permit through the Town of Ramapo building department. We handle the application and coordinate inspections." },
      { question: "How do you price your work?", answer: "We provide free, detailed written estimates before any work begins. Our pricing is straightforward with no hidden fees." },
      { question: "Can you match existing trim and molding in older homes?", answer: "Absolutely. We frequently match and replicate existing trim profiles in Chestnut Ridge homes, whether it's colonial casing or ranch-style base molding." }
    ],
    nearbyAreas: ["nanuet", "spring-valley", "airmont", "new-hempstead", "ramapo", "new-city"],
    metaTitle: "Expert Handyman Services in Chestnut Ridge, NY | Odds & Ends",
    metaDescription: "Trusted handyman services for Chestnut Ridge, NY. Expert renovations, repairs, and maintenance for homes along the ridge in Rockland County.",
    keywords: ["handyman Chestnut Ridge NY", "Chestnut Ridge home repair", "Ramapo handyman", "home renovation Chestnut Ridge", "Rockland County handyman"],
    localAdvantage: "Chestnut Ridge sits at a higher elevation than surrounding communities, and the hilly terrain affects everything from drainage patterns to foundation settling. Homes here often have walkout basements on the downhill side that need waterproofing attention, and the sloped lots make deck construction more complex — but also more rewarding, with elevated views. The village has seen waves of development from the 1960s through the 2000s, so the housing stock varies widely in age and style.",
    neighborhoods: ["Red Schoolhouse Road corridor", "Hungry Hollow Road", "Old Schoolhouse Road", "Parrot Road area", "Summit Avenue", "South Monsey Road area", "Priscilla Lane", "Hering Road"],
    housingStock: "Chestnut Ridge features a wide mix: raised ranches and split-levels from the 1960s and 1970s, colonials from the 1980s and 1990s, and a number of larger custom homes built in the 2000s. Lot sizes range from a third of an acre to over an acre. The hilly terrain means many homes have walkout basements and multi-level decks. Some older homes have been significantly expanded over the years.",
    popularServiceSlugs: ["kitchen-renovation", "bathroom-renovation", "deck-repair", "flooring", "painting", "drywall-repair", "shelving-installation"],
    localTips: "Chestnut Ridge is within the Town of Ramapo for building permits and zoning. The hillside terrain means proper drainage is critical during any exterior project — always verify grading slopes away from the foundation. Many homes here have sump pumps that should be tested before finishing a basement. The ridge's elevation also means slightly more wind exposure, so deck railings and fence posts should be set deeper than minimum code requires for longevity.",
    stats: [
      { label: "Serving Chestnut Ridge Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "montebello",
    image: "/images/areas/montebello.jpg",
    name: "Montebello",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Montebello's Trusted Handyman Service",
    heroSubheadline: "Quality craftsmanship for Montebello's upscale homes and wooded estates.",
    intro: "Montebello homeowners expect a higher standard — and Odds & Ends delivers. From custom built-ins to complete kitchen renovations, we bring careful attention to detail and honest pricing to every project in this beautiful Ramapo hillside village.",
    commonNeeds: [
      "Custom built-in cabinetry",
      "Kitchen and bathroom renovations",
      "Deck construction and refinishing",
      "Wainscoting and accent walls",
      "Painting — interior and exterior",
      "Tile work",
      "Door installation",
      "Outdoor structure repairs"
    ],
    whyChooseUs: `Montebello homes tend to be larger and more custom than the surrounding area, which means the handyman work needs to match. We have the skills and experience to handle high-end finishes, custom millwork, and the kind of detail-oriented projects that Montebello homeowners care about. We've built our reputation here one referral at a time.`,
    faqs: [
      { question: "Do you work on larger custom homes?", answer: "Yes. We regularly work on Montebello's larger properties, handling everything from trim carpentry and built-ins to multi-room renovations." },
      { question: "Can you build custom accent walls or wainscoting?", answer: "Absolutely. Custom accent walls, wainscoting, board-and-batten, and shiplap installations are among our specialties." },
      { question: "What about outdoor work on larger lots?", answer: "We handle deck construction and repair, fence work, shed maintenance, and other outdoor projects common on Montebello's larger properties." },
      { question: "Do you coordinate with other trades?", answer: "Yes. For larger renovation projects, we coordinate with licensed electricians, plumbers, and other specialists as needed." },
      { question: "How do I get started?", answer: "Call or text us for a free on-site estimate. We'll walk through the project with you and provide a detailed written quote." }
    ],
    nearbyAreas: ["suffern", "ramapo", "airmont", "pomona", "new-hempstead", "sloatsburg"],
    metaTitle: "Expert Handyman Services in Montebello, NY | Odds & Ends",
    metaDescription: "Premium handyman services for Montebello, NY homeowners. Expert renovations, custom carpentry, and home maintenance for Rockland County's upscale hillside village.",
    keywords: ["handyman Montebello NY", "Montebello home repair", "Ramapo handyman", "custom carpentry Montebello", "Rockland County handyman"],
    localAdvantage: "Montebello is one of Rockland County's more upscale communities, with larger homes on wooded lots, often backing up to Harriman State Park or the Ramapo Mountains. The homes here tend to have higher-end finishes — hardwood floors, stone fireplaces, custom cabinetry — that require a skilled hand when repairs or updates are needed. The wooded setting also means constant exterior maintenance: decks weather quickly under the canopy, and wildlife can cause damage to soffits and vents.",
    neighborhoods: ["Montebello Road", "Spook Rock Road", "Lorna Lane area", "Barrie Drive", "Lovell Lane", "Hemion Road area", "Blue Hill area", "near Harriman State Park border"],
    housingStock: "Montebello is defined by larger colonial and contemporary-style homes, many built from the 1980s through the 2000s on lots of one acre or more. The village also has some older farmstead properties and a number of newer luxury builds. Most homes feature attached two-car garages, large decks, and finished basements. The architectural style leans toward traditional with high-quality exterior materials like stone and cedar.",
    popularServiceSlugs: ["built-ins", "wainscoting", "kitchen-renovation", "deck-repair", "painting", "tile-work", "custom-accent-walls"],
    localTips: "Montebello requires permits through the Town of Ramapo for most structural and renovation work. The village has its own architectural review process for exterior changes, so check requirements before starting projects visible from the street. The proximity to Harriman State Park means deer and bear activity is common — exterior projects should account for this, especially with garbage and material storage. Schedule exterior staining and painting for mid-summer when the canopy dries out enough for proper adhesion.",
    stats: [
      { label: "Serving Montebello Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "new-hempstead",
    image: "/images/areas/new-hempstead.jpg",
    name: "New Hempstead",
    county: "Rockland",
    state: "New York",
    heroHeadline: "New Hempstead's Trusted Handyman Service",
    heroSubheadline: "Dependable repairs and improvements for New Hempstead's family-oriented community.",
    intro: "New Hempstead families rely on Odds & Ends for home repairs and upgrades that stand the test of time. Centrally located in the Town of Ramapo, this village has a strong residential character — and we're proud to be the handyman service that neighbors recommend to each other.",
    commonNeeds: [
      "Bathroom renovations",
      "Painting and wall repairs",
      "Flooring replacement",
      "Fence repair and installation",
      "Furniture assembly",
      "Closet system installation",
      "Light fixture upgrades",
      "Deck maintenance"
    ],
    whyChooseUs: `New Hempstead homeowners are practical and value-conscious — they want quality work at a fair price with no runaround. That's exactly how we operate. We've completed hundreds of projects in this village and the surrounding neighborhoods, and our repeat customer rate here is among the highest in Rockland County.`,
    faqs: [
      { question: "What types of projects do you handle in New Hempstead?", answer: "Everything from small repairs like drywall patches and door adjustments to full bathroom renovations, flooring, painting, and more." },
      { question: "Do you work on weekends?", answer: "We primarily work Monday through Friday, with Saturday availability for urgent repairs or by special arrangement." },
      { question: "Can you install closet organizer systems?", answer: "Yes. We install custom and pre-fabricated closet systems, including shelving, rods, drawers, and built-in units." },
      { question: "What's your service area around New Hempstead?", answer: "We serve all of New Hempstead and the surrounding communities including Pomona, Chestnut Ridge, New City, Spring Valley, and more." },
      { question: "Do you provide written estimates?", answer: "Always. Every estimate is free, detailed, and in writing before any work begins." }
    ],
    nearbyAreas: ["new-city", "pomona", "chestnut-ridge", "spring-valley", "ramapo", "airmont"],
    metaTitle: "Expert Handyman Services in New Hempstead, NY | Odds & Ends",
    metaDescription: "Reliable handyman services for New Hempstead, NY. Quality home repairs, renovations, and maintenance for families in Rockland County.",
    keywords: ["handyman New Hempstead NY", "New Hempstead home repair", "Ramapo handyman", "home maintenance New Hempstead", "Rockland County handyman"],
    localAdvantage: "New Hempstead sits at the crossroads of several Rockland County communities, giving it a convenient central location but also exposing it to the same aging-housing challenges as its neighbors. The village developed quickly in the 1970s and 1980s, and many of those homes are now due for their second round of major updates — bathrooms, kitchens, flooring, and exterior maintenance. Families here are actively investing in their homes, and the demand for reliable, skilled handyman work is steady year-round.",
    neighborhoods: ["New Hempstead Road corridor", "Brick Church Road", "Pennington Way", "South Main Street area", "Grandview Avenue", "Kearsing Parkway area", "Ewing Avenue area", "Rhonda Lane"],
    housingStock: "New Hempstead consists mostly of split-levels, raised ranches, and colonials built during the 1970s and 1980s, with some newer infill construction. Lots are typically a quarter-acre to a third of an acre. Most homes have single-car garages, modest decks or patios, and partially finished basements. The housing is solidly built but many homes still have original kitchens, bathrooms, and flooring.",
    popularServiceSlugs: ["bathroom-renovation", "flooring", "painting", "fence-repair", "closet-system-installation", "furniture-assembly", "light-fixture-installation"],
    localTips: "New Hempstead permits go through the Town of Ramapo building department. The village has a mix of public water and well systems — confirm which your home uses before planning any bathroom or kitchen renovation. Many split-levels here have that classic two-tier layout where the lower level feels dark; adding recessed lighting or upgrading fixtures can dramatically improve those spaces. Spring is the busiest season for exterior projects, so book fence and deck work early.",
    stats: [
      { label: "Serving New Hempstead Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "sloatsburg",
    image: "/images/areas/sloatsburg.jpg",
    name: "Sloatsburg",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Sloatsburg's Trusted Handyman Service",
    heroSubheadline: "Skilled home repairs for Sloatsburg's mountain-edge community.",
    intro: "Sloatsburg homeowners know that living at the gateway to Harriman State Park comes with unique maintenance demands. Odds & Ends provides the skilled, reliable handyman services this close-knit village needs — from weatherproofing decks to renovating kitchens in homes that have stood here for generations.",
    commonNeeds: [
      "Deck building and restoration",
      "Exterior painting and staining",
      "Drywall repair",
      "Kitchen updates",
      "Door and window weatherization",
      "Shed repair and construction",
      "Flooring installation",
      "Bathroom updates"
    ],
    whyChooseUs: `Sloatsburg is a small village and we treat it that way — with personal attention and genuine care. We understand the challenges of maintaining homes in a mountain-edge environment: moisture, wildlife, and weather exposure all take a toll. Our experience with Sloatsburg's housing stock means we anticipate issues before they become expensive problems.`,
    faqs: [
      { question: "Do you travel to Sloatsburg for small jobs?", answer: "Yes. We serve Sloatsburg for projects of all sizes, from a simple door repair to a full kitchen renovation." },
      { question: "Can you build or repair outdoor structures like sheds?", answer: "Absolutely. Shed construction, repair, and weatherproofing are common projects for us in Sloatsburg's wooded lots." },
      { question: "What about weatherproofing and insulation work?", answer: "We handle weatherstripping, door sweeps, window caulking, and other weatherization projects that are especially important for Sloatsburg's mountain-edge climate." },
      { question: "Do you work on historic or older homes?", answer: "Yes. Sloatsburg has some of the oldest housing stock in the area, and we're experienced with the unique needs of older construction." },
      { question: "How do I schedule an estimate?", answer: "Call or text us anytime. We'll arrange a convenient time to visit your Sloatsburg home and provide a free estimate." }
    ],
    nearbyAreas: ["suffern", "ramapo", "montebello", "pomona", "stony-point", "tuxedo"],
    metaTitle: "Expert Handyman Services in Sloatsburg, NY | Odds & Ends",
    metaDescription: "Dependable handyman services for Sloatsburg, NY. Expert home repairs and outdoor maintenance for this mountain-edge village in Rockland County.",
    keywords: ["handyman Sloatsburg NY", "Sloatsburg home repair", "Ramapo handyman", "home maintenance Sloatsburg", "Rockland County handyman"],
    localAdvantage: "Sloatsburg sits right at the base of the Ramapo Mountains, at the western edge of Rockland County where Route 17 meets Harriman State Park. The mountain-edge location means higher moisture levels, more aggressive freeze-thaw cycles, and greater exposure to wind and wildlife than the rest of the county. Decks and exterior wood deteriorate faster here, and the older housing stock — some dating to the early 1900s — requires a handyman who understands how to work with older framing, plaster walls, and non-standard dimensions.",
    neighborhoods: ["Eagle Valley", "Route 17 corridor", "Sterling Mine Road area", "Liberty Rock Road", "Sloatsburg village center", "Seven Lakes Drive area", "Johnsontown Road", "Orange Turnpike area"],
    housingStock: "Sloatsburg has an eclectic housing stock that ranges from turn-of-the-century cottages and bungalows near the village center to mid-century capes and ranches further out, plus newer construction along the mountain edges. Many homes sit on hilly or wooded lots, and some have been expanded multiple times over the decades. Detached garages, sheds, and outbuildings are common on the larger properties.",
    popularServiceSlugs: ["deck-repair", "painting", "drywall-repair", "door-installation", "flooring", "sheds", "outdoor-structures"],
    localTips: "Sloatsburg is within the Town of Ramapo for permits and inspections. The village's proximity to Harriman State Park means bear-proof garbage management is a real consideration during construction — don't leave food or waste accessible on job sites. Many older Sloatsburg homes have stone foundations that need periodic repointing. The mountain micro-climate means exterior paint and stain should be applied only during dry periods with temps above 50°F, which shortens the usable window compared to the rest of the county.",
    stats: [
      { label: "Serving Sloatsburg Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "upper-nyack",
    image: "/images/areas/upper-nyack.jpg",
    name: "Upper Nyack",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Upper Nyack's Trusted Handyman Service",
    heroSubheadline: "Careful craftsmanship for Upper Nyack's hillside homes and historic properties.",
    intro: "Upper Nyack homeowners appreciate the village's quiet, tree-lined character — and they need a handyman service that matches that sensibility. Odds & Ends brings thoughtful, detail-oriented work to every project here, from restoring original woodwork to building new decks that take advantage of those Hudson River views.",
    commonNeeds: [
      "Deck construction with river views",
      "Interior painting and trim restoration",
      "Drywall and plaster repair",
      "Bathroom renovations",
      "Cabinet refinishing",
      "Tile work",
      "Shelving and built-in installation",
      "Fence repair"
    ],
    whyChooseUs: `Upper Nyack's homes are special — from the Victorian-era properties near Old Mill Road to the mid-century moderns tucked into the hillside. We treat each home with the respect it deserves, carefully matching existing materials and finishes rather than taking shortcuts. Our work in Upper Nyack has earned us referrals that span generations of homeowners.`,
    faqs: [
      { question: "Do you have experience with older homes in Upper Nyack?", answer: "Yes. We've worked on homes throughout Upper Nyack dating from the late 1800s to the present, including plaster repair, woodwork restoration, and sensitively updating kitchens and baths in older structures." },
      { question: "Can you build decks on sloped lots?", answer: "Absolutely. Many Upper Nyack homes sit on hillside lots, and we have extensive experience building and repairing elevated decks, including multi-level designs." },
      { question: "Do you handle plaster repair?", answer: "Yes. Many Upper Nyack homes have original plaster walls, and we can patch, skim-coat, and restore plaster surfaces without the need for full replacement." },
      { question: "What permits are needed in Upper Nyack?", answer: "Upper Nyack has its own village building department. Permits are required for structural work, decks, and most renovations. We handle the permit process." },
      { question: "Can you refinish kitchen cabinets?", answer: "Yes. Cabinet refinishing is a popular project in Upper Nyack — it's a cost-effective way to update a kitchen without a full tear-out." }
    ],
    nearbyAreas: ["nyack", "clarkstown", "valley-cottage", "congers", "grandview-on-hudson", "piermont"],
    metaTitle: "Expert Handyman Services in Upper Nyack, NY | Odds & Ends",
    metaDescription: "Skilled handyman services for Upper Nyack, NY. Thoughtful repairs and renovations for hillside homes and historic properties overlooking the Hudson River.",
    keywords: ["handyman Upper Nyack NY", "Upper Nyack home repair", "Nyack area handyman", "home renovation Upper Nyack", "Rockland County handyman"],
    localAdvantage: "Upper Nyack climbs the hillside above its more commercial neighbor, with winding roads, mature trees, and homes that range from pre-Civil War era to contemporary. The village's elevation provides stunning Hudson River and Hook Mountain views, but it also means sloped lots, challenging access for materials delivery, and drainage concerns that flat-lot builders never think about. Older homes here frequently have plaster walls, narrow doorways, and non-standard framing that requires a craftsman's touch.",
    neighborhoods: ["Old Mill Road area", "North Midland Avenue", "Castle Heights", "Larchdale Avenue", "Birchwood Avenue", "Van Houten Street", "Highmount Terrace", "near Hook Mountain State Park"],
    housingStock: "Upper Nyack's housing ranges from stately Victorian and Colonial Revival homes near the village center to mid-century ranches and capes on the hillside, along with some contemporary and modern builds that capitalize on the views. Many homes have been renovated over the decades but retain original character. Lots are heavily wooded and often steeply graded, making outdoor construction more complex but visually rewarding.",
    popularServiceSlugs: ["deck-repair", "painting", "drywall-repair", "bathroom-renovation", "cabinet-refinishing", "tile-work", "shelving-installation", "built-ins"],
    localTips: "Upper Nyack has its own village building department, separate from the Town of Clarkstown. Permits and inspections run through the village directly, and the process can be more involved for exterior changes visible from historic corridors. Hook Mountain's shadow affects the western-facing homes — moss and algae growth on decks and siding is common and requires regular cleaning. The narrow, winding roads mean larger material deliveries need advance planning.",
    stats: [
      { label: "Serving Upper Nyack Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "congers",
    image: "/images/areas/congers.jpg",
    name: "Congers",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Congers' Trusted Handyman Service",
    heroSubheadline: "Reliable home repairs and upgrades for Congers' lakeside community.",
    intro: "Congers homeowners rely on Odds & Ends for skilled, dependable work on homes throughout this welcoming Clarkstown hamlet. Whether your house overlooks Congers Lake or sits along one of the quiet side streets, we deliver quality craftsmanship and fair pricing on every project.",
    commonNeeds: [
      "Interior and exterior painting",
      "Deck repair and refinishing",
      "Bathroom renovations",
      "Drywall repair",
      "Flooring installation",
      "Light fixture and ceiling fan installation",
      "Door replacement",
      "Kitchen updates"
    ],
    whyChooseUs: `We've worked throughout Congers — from the homes near the lake to the neighborhoods along Route 303 and Lake Road. The hamlet's mid-century housing stock is well within our wheelhouse, and we know the Town of Clarkstown permit process inside and out. Congers homeowners recommend us because we deliver what we promise, on time and on budget.`,
    faqs: [
      { question: "Do you serve all of Congers?", answer: "Yes. We work throughout the Congers hamlet, including homes near Congers Lake, along Lake Road, Route 303, and all surrounding neighborhoods." },
      { question: "Can you help update a dated bathroom?", answer: "Absolutely. Bathroom renovations are one of our most requested services in Congers. We handle everything from tile and vanity replacement to complete gut renovations." },
      { question: "What about moisture issues near the lake?", answer: "We're experienced with the moisture-related challenges that come with lakeside living, including basement dampness, mold-resistant materials, and proper ventilation." },
      { question: "Do you install flooring?", answer: "Yes. We install hardwood, laminate, vinyl plank, and tile flooring throughout the home." },
      { question: "How quickly can you start?", answer: "Most Congers projects can be scheduled within a few days, and we offer same-day service for smaller repairs." }
    ],
    nearbyAreas: ["new-city", "clarkstown", "valley-cottage", "nanuet", "upper-nyack", "stony-point", "thiells"],
    metaTitle: "Expert Handyman Services in Congers, NY | Odds & Ends",
    metaDescription: "Professional handyman services for Congers, NY. Quality repairs, renovations, and home maintenance for this Clarkstown lakeside community.",
    keywords: ["handyman Congers NY", "Congers home repair", "Clarkstown handyman", "home maintenance Congers", "Rockland County handyman"],
    localAdvantage: "Congers is centered around Congers Lake, a scenic focal point that gives the hamlet its character but also creates specific maintenance concerns for nearby homes. Elevated humidity near the lake accelerates paint and wood deterioration, and basements in lower-lying areas are more susceptible to dampness. The hamlet's housing developed primarily in the 1950s through 1970s, meaning most homes are at the stage where major systems and finishes need updating or replacing.",
    neighborhoods: ["Congers Lake area", "Lake Road", "Route 303 corridor", "Old Lake Road", "Gilchrest Road area", "Sierra Vista", "Dutch Lane area", "Kennedy Drive area"],
    housingStock: "Congers is predominantly composed of capes, ranches, and split-levels built between the early 1950s and mid-1970s. Homes near the lake tend to be older and smaller, while those further out are more typical suburban mid-century construction. Lot sizes are modest, generally a quarter-acre. Many homes have been updated over the years but still retain original floor plans and some original systems.",
    popularServiceSlugs: ["painting", "deck-repair", "bathroom-renovation", "drywall-repair", "flooring", "ceiling-fan-installation-and-replacement", "door-installation"],
    localTips: "Congers falls under the Town of Clarkstown for building permits and inspections. Homes near Congers Lake should use moisture-resistant materials for any renovation work, especially in basements and lower levels. Many older Congers homes have cast-iron drain pipes that may be nearing end of life — something to check during a bathroom renovation. The hamlet's proximity to the Palisades Center means traffic can be heavy on Route 303 during peak hours; schedule material deliveries for early morning.",
    stats: [
      { label: "Serving Congers Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "blauvelt",
    image: "/images/areas/blauvelt.jpg",
    name: "Blauvelt",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Blauvelt's Trusted Handyman Service",
    heroSubheadline: "Expert home repairs for Blauvelt's established neighborhoods and charming properties.",
    intro: "Blauvelt homeowners trust Odds & Ends for reliable, high-quality work on every project. This Orangetown hamlet's blend of historic charm and suburban convenience means homes here have a character worth preserving — and updating when the time is right.",
    commonNeeds: [
      "Interior painting and trim work",
      "Kitchen cabinet refinishing",
      "Drywall repair",
      "Deck maintenance and repair",
      "Bathroom updates",
      "Flooring replacement",
      "Picture hanging and wall mounting",
      "Shelving installation"
    ],
    whyChooseUs: `Blauvelt is a hamlet with real neighborhood identity, and we've been part of it for years. We know the homes along Western Highway, the properties off Blauvelt Road, and the newer builds near the state park. Our Blauvelt customers appreciate our honest assessments — we tell you what actually needs doing and skip the upselling.`,
    faqs: [
      { question: "Do you work in all parts of Blauvelt?", answer: "Yes. We serve every neighborhood in Blauvelt, from the homes along Western Highway to the streets off Blauvelt Road, Greenbush Road, and throughout the hamlet." },
      { question: "Can you refinish rather than replace kitchen cabinets?", answer: "Absolutely. Cabinet refinishing is a smart, cost-effective update for Blauvelt's kitchens. We sand, prime, and paint or stain existing cabinets for a fresh look without the cost of replacement." },
      { question: "Do you handle small jobs?", answer: "Yes. We're happy to handle everything from hanging pictures and assembling furniture to larger renovation projects." },
      { question: "What permits does Blauvelt require?", answer: "Blauvelt is within the Town of Orangetown. Permits are required for structural work, electrical changes, and most renovation projects. We manage the permit process for you." },
      { question: "Are your estimates really free?", answer: "Yes — always free, always in writing, and always honest." }
    ],
    nearbyAreas: ["orangetown", "pearl-river", "tappan", "sparkill", "nanuet", "clarkstown", "nyack"],
    metaTitle: "Expert Handyman Services in Blauvelt, NY | Odds & Ends",
    metaDescription: "Trusted handyman services for Blauvelt, NY. Quality repairs, cabinet refinishing, and home improvements for this charming Orangetown hamlet.",
    keywords: ["handyman Blauvelt NY", "Blauvelt home repair", "Orangetown handyman", "home maintenance Blauvelt", "Rockland County handyman"],
    localAdvantage: "Blauvelt has a distinctly settled, established feel — many families have been here for decades, and the homes reflect that longevity. The hamlet straddles Western Highway (Route 303) with a mix of older colonial-style homes and mid-century ranches, plus some newer development near Blauvelt State Park. The older homes often have character details like original hardwood floors, plaster walls, and built-in features that deserve careful maintenance rather than replacement.",
    neighborhoods: ["Western Highway corridor", "Blauvelt Road", "Greenbush Road area", "Clausland Mountain Road", "East Crooked Hill Road", "near Blauvelt State Park", "Hickory Hill area", "Blueberry Hill Road"],
    housingStock: "Blauvelt features a mix of colonial and cape-style homes from the 1940s and 1950s, ranches and split-levels from the 1960s and 1970s, and some newer construction. The older homes near Western Highway tend to have more character and original details, while the mid-century homes further from the main road are more typical suburban construction. Lot sizes range from a fifth of an acre to over an acre near the state park.",
    popularServiceSlugs: ["painting", "cabinet-refinishing", "drywall-repair", "deck-repair", "flooring", "picture-hanging", "shelving-installation", "bathroom-renovation"],
    localTips: "Blauvelt is within the Town of Orangetown for all building permits and zoning. The hamlet's proximity to Blauvelt State Park and the Clausland Mountain trails means deer are a constant presence — they'll damage gardens and landscaping adjacent to exterior projects. Many of the older colonials have original plaster walls that should be repaired rather than covered with drywall when possible. Western Highway can be busy, so if your home fronts Route 303, coordinate any dumpster or material deliveries with traffic patterns.",
    stats: [
      { label: "Serving Blauvelt Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "valley-cottage",
    image: "/images/areas/valley-cottage.jpg",
    name: "Valley Cottage",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Valley Cottage's Trusted Handyman Service",
    heroSubheadline: "Quality home repairs and upgrades for Valley Cottage's family-friendly neighborhoods.",
    intro: "Valley Cottage homeowners count on Odds & Ends for the kind of work that makes a real difference — updated bathrooms, refinished decks, fresh paint, and the dozens of smaller repairs that keep a home running smoothly. We've been serving this Clarkstown hamlet for years and our work speaks for itself.",
    commonNeeds: [
      "Deck repair and staining",
      "Bathroom renovations",
      "Interior painting",
      "Drywall repair",
      "Ceiling fan installation",
      "Flooring installation",
      "Kitchen updates",
      "Fence repair"
    ],
    whyChooseUs: `Valley Cottage is the kind of neighborhood where homeowners take pride in their properties and want improvements done right. We share that mindset. Our team has worked on homes throughout the hamlet — along Route 303, near Lake DeForest, and up into the hillside neighborhoods. We deliver clean, professional results and stand behind every project.`,
    faqs: [
      { question: "What areas of Valley Cottage do you serve?", answer: "All of it — from the homes along Route 303 and Lake Road to the hillside neighborhoods, and everywhere in between." },
      { question: "Can you renovate a bathroom?", answer: "Yes. We handle complete bathroom renovations including tile, vanities, fixtures, flooring, and painting. We also do smaller updates like replacing a vanity or re-tiling a shower." },
      { question: "Do you stain and seal decks?", answer: "Absolutely. Deck cleaning, staining, and sealing are regular services for us in Valley Cottage, where wooded lots mean decks take a beating." },
      { question: "What about interior painting?", answer: "Interior painting is one of our most popular services. We prep thoroughly, use quality materials, and leave your home clean when we're done." },
      { question: "How do I request an estimate?", answer: "Call or text us for a free on-site estimate. We'll walk through the project with you and provide a detailed written quote." }
    ],
    nearbyAreas: ["clarkstown", "new-city", "upper-nyack", "congers", "nyack", "stony-point"],
    metaTitle: "Expert Handyman Services in Valley Cottage, NY | Odds & Ends",
    metaDescription: "Professional handyman services for Valley Cottage, NY. Expert repairs, renovations, and deck maintenance for homes in this Clarkstown community.",
    keywords: ["handyman Valley Cottage NY", "Valley Cottage home repair", "Clarkstown handyman", "home maintenance Valley Cottage", "Rockland County handyman"],
    localAdvantage: "Valley Cottage sits in a natural valley in the Town of Clarkstown, with Lake DeForest to the south and the hillside climbing toward High Tor to the east. The hamlet's wooded lots and proximity to water create a pleasant living environment but also accelerate exterior wear — decks, fences, and painted surfaces need attention more frequently than in drier areas. The housing stock is solidly mid-century, and many homes are at the prime age for updates.",
    neighborhoods: ["Route 303 corridor", "Lake Road area", "near Lake DeForest", "Storms Road", "Wilder Road area", "Ridge Road", "Marion Drive area", "Hilltop area"],
    housingStock: "Valley Cottage is dominated by ranches, capes, and split-levels built from the late 1950s through the 1970s, with some newer infill construction. Homes near the lake tend to be smaller and older, while those on the hillside are a mix of mid-century and newer builds. Most lots are a quarter-acre to a third of an acre. Decks, patios, and above-ground pools are common additions.",
    popularServiceSlugs: ["deck-repair", "bathroom-renovation", "painting", "drywall-repair", "ceiling-fan-installation-and-replacement", "flooring", "fence-repair"],
    localTips: "Valley Cottage is within the Town of Clarkstown for permits and inspections. Homes near Lake DeForest should be aware of the reservoir buffer zone — check setback requirements before planning any exterior projects near the water. The wooded lots mean gutters clog frequently; consider adding gutter guards during any exterior maintenance project. Many mid-century homes here have original single-pane windows — upgrading even a few key windows can make a noticeable difference in comfort and energy costs.",
    stats: [
      { label: "Serving Valley Cottage Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "thiells",
    image: "/images/areas/thiells.jpg",
    name: "Thiells",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Thiells' Trusted Handyman Service",
    heroSubheadline: "Dependable repairs and improvements for Thiells' growing community.",
    intro: "Thiells homeowners turn to Odds & Ends for quality work that lasts. Straddling the border of Haverstraw and Stony Point in northern Rockland County, Thiells has a mix of established neighborhoods and newer developments — and we have the experience to serve them all.",
    commonNeeds: [
      "Deck building and repair",
      "Interior and exterior painting",
      "Drywall repair",
      "Flooring installation",
      "Bathroom renovations",
      "Fence installation and repair",
      "Door installation",
      "TV mounting and home office setup"
    ],
    whyChooseUs: `Thiells may be at the northern edge of Rockland County, but it's at the center of our service area. We work regularly in the neighborhoods along Route 202, Thiells-Mount Ivy Road, and the developments off Filors Lane. Our customers here appreciate that we show up when we say we will and complete projects on schedule.`,
    faqs: [
      { question: "Do you serve the Thiells area?", answer: "Yes. We work throughout Thiells including the neighborhoods along Route 202, Thiells-Mount Ivy Road, Filors Lane area, and surrounding streets." },
      { question: "Can you build a new deck?", answer: "Yes. We design and build custom decks, and also handle deck repairs, refinishing, and board replacement." },
      { question: "Do you do home office setups?", answer: "Absolutely. We handle desk assembly, shelving installation, cable management, TV mounting, and other home office improvements." },
      { question: "What about newer construction homes?", answer: "We work on homes of all ages, including the newer developments in the Thiells area. Even newer homes often need custom shelving, TV mounting, or finish work." },
      { question: "How do I get a free estimate?", answer: "Call or text us. We'll schedule a convenient time to visit your Thiells home and provide a detailed written estimate at no charge." }
    ],
    nearbyAreas: ["stony-point", "haverstraw", "pomona", "new-city", "congers", "garnerville"],
    metaTitle: "Expert Handyman Services in Thiells, NY | Odds & Ends",
    metaDescription: "Quality handyman services for Thiells, NY. Expert repairs, deck building, and home improvements for northern Rockland County homeowners.",
    keywords: ["handyman Thiells NY", "Thiells home repair", "Haverstraw handyman", "home maintenance Thiells", "Rockland County handyman"],
    localAdvantage: "Thiells sits in northern Rockland County where the Haverstraw and Stony Point town borders meet, giving it a mix of housing from different eras of development. The area has seen significant new construction in recent decades alongside established 1960s and 1970s neighborhoods. The northern location means slightly more exposure to winter weather coming down from the mountains, and the terrain is hillier than southern Rockland, affecting drainage and foundation considerations.",
    neighborhoods: ["Route 202 corridor", "Thiells-Mount Ivy Road", "Filors Lane area", "Rosman Road", "Mott Farm Road area", "Montclair Avenue area", "near Anthony Wayne Recreation Area", "Bulsontown Road"],
    housingStock: "Thiells has a diverse housing stock: ranches and split-levels from the 1960s and 1970s in established neighborhoods, townhouse and condominium developments from the 1990s and 2000s, and some newer single-family construction. Lot sizes vary widely from compact townhouse parcels to half-acre lots in the older sections. Many of the original mid-century homes have had additions and updates over the years.",
    popularServiceSlugs: ["deck-repair", "painting", "drywall-repair", "flooring", "fence-repair", "door-installation", "tv-mounting", "home-office-setup"],
    localTips: "Thiells straddles two towns — parts fall under the Town of Haverstraw and parts under the Town of Stony Point, so confirm which jurisdiction your property is in before applying for permits. The hilly terrain means proper drainage planning is essential for any deck or patio project. Many of the 1970s-era homes have original aluminum siding that can be painted rather than replaced for a cost-effective refresh. Winter is a great time to book interior projects like painting and flooring, as schedules are more open.",
    stats: [
      { label: "Serving Thiells Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "garnerville",
    image: "/images/areas/garnerville.jpg",
    name: "Garnerville",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Garnerville's Trusted Handyman Service",
    heroSubheadline: "Skilled repairs and renovations for Garnerville's riverside homes.",
    intro: "Garnerville homeowners rely on Odds & Ends for honest, quality work that respects both their homes and their budgets. This Haverstraw hamlet has a rich history and a housing stock that ranges from century-old gems to modern builds — and we have the versatility to handle them all.",
    commonNeeds: [
      "Interior painting and plaster repair",
      "Bathroom renovations",
      "Kitchen updates",
      "Drywall repair",
      "Flooring installation",
      "Door and window trim",
      "Deck repair",
      "Furniture assembly"
    ],
    whyChooseUs: `Garnerville has a real working-class character that we respect — homeowners here want quality work at a fair price without the fancy sales pitch. That's exactly how we operate. We've worked on homes throughout the hamlet, from the older properties near the Garnerville Arts & Industrial Center to the hillside neighborhoods and everything between. Our prices are fair and our work is guaranteed.`,
    faqs: [
      { question: "Do you work on older homes in Garnerville?", answer: "Yes. Garnerville has some of the oldest housing in northern Rockland County, and we're experienced with plaster repair, older framing, and the unique challenges of century-old construction." },
      { question: "Can you update a kitchen without a complete gut renovation?", answer: "Absolutely. We offer cost-effective kitchen updates including cabinet refinishing, new hardware, countertop replacement, backsplash installation, and fixture upgrades." },
      { question: "Do you install flooring?", answer: "Yes. We install hardwood, laminate, vinyl plank, and tile throughout your home." },
      { question: "What permits are needed in Garnerville?", answer: "Garnerville is within the Town of Haverstraw. Permits are required for structural work, plumbing, electrical, and most renovation projects. We handle the permit process." },
      { question: "Do you offer senior discounts?", answer: "Contact us to discuss your project — we work with every homeowner to find a scope and approach that fits their budget." }
    ],
    nearbyAreas: ["haverstraw", "stony-point", "thiells", "new-city", "clarkstown", "congers"],
    metaTitle: "Expert Handyman Services in Garnerville, NY | Odds & Ends",
    metaDescription: "Affordable, quality handyman services for Garnerville, NY. Expert home repairs and renovations for this historic Haverstraw hamlet in Rockland County.",
    keywords: ["handyman Garnerville NY", "Garnerville home repair", "Haverstraw handyman", "home maintenance Garnerville", "Rockland County handyman"],
    localAdvantage: "Garnerville is a historic hamlet in the Town of Haverstraw, originally built around the garnet mining and brick-making industries. That industrial heritage left behind a housing stock with real variety — from compact workers' cottages and duplexes near the village center to larger homes on the surrounding hillsides. The hamlet's location along the base of the Tor hills means some homes deal with slope-related drainage issues, and the older construction often includes plaster walls, original hardwood floors, and details that benefit from a careful hand.",
    neighborhoods: ["Route 202 area", "near Garnerville Arts & Industrial Center", "Rosman Road area", "Railroad Avenue", "Main Street area", "Hillside Drive", "near Letchworth Village", "Holt Drive area"],
    housingStock: "Garnerville's housing ranges from workers' cottages and two-family homes built in the late 1800s and early 1900s near the village center, to ranches and capes from the 1950s and 1960s on the surrounding hillsides, plus some newer construction. The older homes often have plaster walls, original hardwood floors, and compact floor plans. Properties vary widely in lot size, from tight village lots to more spacious hillside parcels.",
    popularServiceSlugs: ["painting", "drywall-repair", "bathroom-renovation", "kitchen-renovation", "flooring", "door-installation", "deck-repair", "furniture-assembly"],
    localTips: "Garnerville is within the Town of Haverstraw for all permits and inspections. Many older homes here have original knob-and-tube wiring — if you're updating lighting or outlets, have an electrician assess the existing system first. The hillside homes often have stone or rubble foundations that may need repointing. The hamlet's location near the base of High Tor means excellent hiking access but also more wildlife interaction; secure any construction materials and waste. For cost-effective kitchen updates, consider refinishing existing cabinets rather than replacing them.",
    stats: [
      { label: "Serving Garnerville Since", value: "2001" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "sleepy-hollow",
    image: "/images/areas/sleepy-hollow.jpg",
    name: "Sleepy Hollow",
    county: "Westchester County",
    state: "New York",
    heroHeadline: "Sleepy Hollow's Trusted Handyman Service",
    heroSubheadline: "Quality craftsmanship for the historic homes and modern residences of this legendary Hudson River village.",
    intro: "Sleepy Hollow homeowners trust Odds & Ends for dependable handyman work that respects this village's rich character. From restoring original woodwork in century-old homes along Broadway to upgrading kitchens in the newer developments off Route 9, we bring the same attention to detail we've built our reputation on in Rockland County — now just a short drive across the Mario Cuomo Bridge.",
    commonNeeds: [
      "Interior painting and plaster repair in pre-war homes",
      "Deck repair and refinishing on hillside properties",
      "Door replacement and hardware upgrades",
      "Drywall patching and skim coating",
      "Bathroom updates in older colonials",
      "Fence repair along sloped yards",
      "Light fixture replacement and modernization",
      "Shelving and storage solutions for older floor plans"
    ],
    whyChooseUs: "Sleepy Hollow's homes range from 19th-century colonials along upper Broadway to the condos and townhomes at Edge-on-Hudson — and each type demands a different approach. We don't treat every job the same. We take the time to understand the age, materials, and quirks of your specific home before we start work. As a Rockland County-based team, we're just across the Mario Cuomo Bridge and treat Sleepy Hollow like an extension of our home turf. Our clients here appreciate that we communicate clearly, show up on time, and stand behind our work.",
    faqs: [
      { question: "Do you serve both the older and newer sections of Sleepy Hollow?", answer: "Yes. We work throughout the village — from the historic homes along Broadway and Bellwood Avenue to the newer construction at Edge-on-Hudson and the Kendal community. Each area has its own maintenance needs, and we're comfortable with all of them." },
      { question: "How far is the drive from Rockland County to Sleepy Hollow?", answer: "We're just across the Mario Cuomo Bridge. Door to door, we reach Sleepy Hollow in about 15 minutes from our Rockland County base, making it easy to respond quickly and keep projects on schedule." },
      { question: "Can you work on homes in the Sleepy Hollow Historic District?", answer: "We can. We have experience working on older properties that require careful attention to original materials and period-appropriate repairs. If your home falls within a designated historic area, we'll work within any guidelines the village requires." },
      { question: "Do you provide free estimates for Sleepy Hollow homeowners?", answer: "Absolutely. We provide free on-site estimates with a clear, written scope of work so you know exactly what to expect before any work begins." }
    ],
    nearbyAreas: ["tarrytown", "nyack", "piermont", "tappan"],
    metaTitle: "Expert Handyman Services in Sleepy Hollow, NY | Odds & Ends",
    metaDescription: "Reliable handyman services for Sleepy Hollow, NY homeowners. Historic home repairs and modern upgrades from an experienced team just across the Mario Cuomo Bridge.",
    keywords: ["handyman Sleepy Hollow NY", "Sleepy Hollow home repair", "Westchester County handyman", "home improvement Sleepy Hollow"],
    localAdvantage: "Sleepy Hollow's housing spans nearly two centuries — from stone and wood-frame homes built in the 1800s along upper Broadway to brand-new construction at Edge-on-Hudson on the former GM assembly plant site. The village's steep terrain above the Hudson means many properties sit on hillside lots where deck footings, retaining walls, and drainage all need extra attention. River-facing homes contend with accelerated moisture exposure that takes a toll on exterior paint and wood trim.",
    neighborhoods: ["Broadway corridor", "Bellwood Avenue", "Edge-on-Hudson", "Webber Park", "Kendal on Hudson", "Barnhardt Avenue", "Valley Street area", "Philipse Manor"],
    housingStock: "Sleepy Hollow's housing stock is split between the village's historic core of colonials, Dutch-influenced stone homes, and modest workers' cottages, and the modern condos and townhomes in the Edge-on-Hudson waterfront development. Many older homes retain original plaster, hardwood floors, and aged heating systems that benefit from careful, knowledgeable maintenance.",
    popularServiceSlugs: ["painting", "drywall-repair", "door-installation", "deck-repair"],
    localTips: "Sleepy Hollow is an incorporated village within the Town of Mount Pleasant. Building permits are required for structural work, decks, fences, and electrical or plumbing modifications. Homes in the Philipse Manor section may be subject to additional architectural guidelines. The village's steep lots often require erosion-conscious planning for any exterior construction.",
    stats: [
      { label: "Bridge Crossing", value: "~15 Min" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "tarrytown",
    image: "/images/areas/tarrytown.jpg",
    name: "Tarrytown",
    county: "Westchester County",
    state: "New York",
    heroHeadline: "Tarrytown's Trusted Handyman Service",
    heroSubheadline: "Careful, quality work for the Victorians, colonials, and character homes that define this Hudson River village.",
    intro: "Tarrytown homeowners count on Odds & Ends for skilled handyman work that matches the care these homes deserve. Whether you need trim restoration on a Victorian along Grove Street or a kitchen refresh in a colonial off Neperan Road, we bring over two decades of experience right across the Mario Cuomo Bridge from our Rockland County base.",
    commonNeeds: [
      "Interior and exterior painting on period homes",
      "Cabinet refinishing and kitchen updates",
      "Tile work in bathrooms and entryways",
      "Crown molding and trim repair",
      "Deck and porch repair on older properties",
      "Drywall and plaster patching",
      "Light fixture and ceiling fan installation",
      "Wainscoting and accent wall installation"
    ],
    whyChooseUs: "Tarrytown's homes have genuine character — and they need a handyman team that respects that. We've spent over 20 years working on homes with original plaster, old-growth trim, and construction details you simply don't find in new builds. We understand how to repair, restore, and update these homes without cutting corners or erasing what makes them special. Being based in Rockland County puts us just minutes across the Mario Cuomo Bridge, and many of our Tarrytown clients have become long-term relationships because we treat their homes the way we'd want ours treated.",
    faqs: [
      { question: "Do you have experience with Victorian and colonial homes in Tarrytown?", answer: "Yes. A significant portion of our work involves older homes with original plaster walls, period millwork, and construction methods that require a different skill set than modern homes. We know how to repair and match these details rather than simply covering them up." },
      { question: "Can you refinish or update kitchen cabinets instead of replacing them?", answer: "Absolutely. Cabinet refinishing is one of our most popular services in Tarrytown. Many homes here have solid wood cabinets that are structurally sound but look dated. We can sand, prime, and repaint or restain them for a fraction of the cost of a full replacement." },
      { question: "Are you available on weekends for Tarrytown projects?", answer: "We offer Saturday availability for certain projects, which is helpful for homeowners who commute during the week. We'll work with your schedule to find a time that makes sense." },
      { question: "Do you provide free estimates?", answer: "Yes, always. We'll visit your Tarrytown home, walk through the project together, and provide a clear written estimate before scheduling any work." }
    ],
    nearbyAreas: ["sleepy-hollow", "irvington", "nyack", "piermont", "tappan"],
    metaTitle: "Expert Handyman Services in Tarrytown, NY | Odds & Ends",
    metaDescription: "Trusted handyman services for Tarrytown, NY. Expert painting, cabinet refinishing, tile work, and period home repairs from an experienced Rockland County team.",
    keywords: ["handyman Tarrytown NY", "Tarrytown home repair", "Westchester handyman", "Victorian home repair Tarrytown"],
    localAdvantage: "Tarrytown's walkable downtown and tree-lined residential streets are home to a dense collection of Victorians, colonials, and Tudors — many built between the 1880s and 1930s. These homes frequently have layered renovation histories, meaning a single wall might contain original plaster, a mid-century drywall patch, and modern skim coat. The village's hilly terrain and mature tree canopy also mean persistent gutter and drainage challenges.",
    neighborhoods: ["Main Street area", "Grove Street", "Neperan Road corridor", "Wildey Street", "Leroy Avenue", "Prospect Avenue", "South Tarrytown", "Crest Drive area"],
    housingStock: "Tarrytown features a rich mix of Victorian, Tudor, and colonial homes concentrated in the village core, with mid-century ranches and split-levels on the eastern hillside and some newer condos near the waterfront. Many of the older homes retain original hardwood floors, plaster walls, built-in cabinetry, and ornate exterior trim that benefit from skilled maintenance.",
    popularServiceSlugs: ["painting", "cabinet-refinishing", "tile-work", "wainscoting"],
    localTips: "Tarrytown is an incorporated village with its own building department. Permits are required for structural work, decks, plumbing, and electrical modifications. Properties near the historic Lyndhurst estate and along certain village streets may fall under historic preservation considerations. The village's steep topography means water management should be part of any significant exterior project.",
    stats: [
      { label: "Bridge Crossing", value: "~12 Min" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "irvington",
    image: "/images/areas/irvington.jpg",
    name: "Irvington",
    county: "Westchester County",
    state: "New York",
    heroHeadline: "Irvington's Trusted Handyman Service",
    heroSubheadline: "Meticulous craftsmanship for the distinctive homes of this scenic Hudson River village.",
    intro: "Irvington homeowners choose Odds & Ends for handyman work that matches the quality of their homes. This is a village where details matter — from the built-ins in a 1920s Tudor to the custom shelving in a renovated colonial. We bring over 20 years of experience from our Rockland County base, just a quick trip across the Mario Cuomo Bridge.",
    commonNeeds: [
      "Custom built-in shelving and cabinetry",
      "Kitchen renovation and modernization",
      "Interior painting with high-quality finishes",
      "Accent wall and wainscoting installation",
      "Bathroom tile and fixture upgrades",
      "Closet system design and installation",
      "Deck and patio maintenance on hillside lots",
      "Door and window trim restoration"
    ],
    whyChooseUs: "Irvington homeowners tend to have high standards — and they should. The homes here are beautiful, well-maintained, and worth protecting with quality work. We understand that in a village like Irvington, a sloppy paint job or a poorly matched trim piece stands out. That's why we take the time to get finishes right, match existing materials carefully, and leave every job site cleaner than we found it. We may be based across the river in Rockland County, but the Mario Cuomo Bridge puts us at your door in minutes.",
    faqs: [
      { question: "What types of homes do you work on in Irvington?", answer: "We work on the full range — from the large Tudors and colonials on the tree-lined streets near Main Street to the historic riverfront properties and the more modest homes in the village core. Each has its own character and maintenance needs." },
      { question: "Can you build custom built-ins or shelving for older Irvington homes?", answer: "Yes, this is one of our specialties. Many Irvington homes have alcoves, irregular wall angles, and unique room proportions that don't accommodate off-the-shelf solutions. We design and build custom pieces that fit the space and match the home's existing style." },
      { question: "How long does a typical kitchen renovation take?", answer: "A cosmetic refresh — new cabinet finishes, hardware, backsplash, and fixtures — can often be completed in one to two weeks. A more extensive renovation with layout changes will take longer. We'll give you a realistic timeline during the estimate." },
      { question: "Do you offer free estimates?", answer: "Yes. We visit your home, discuss the project in detail, and provide a clear written estimate at no cost and no obligation." }
    ],
    nearbyAreas: ["tarrytown", "dobbs-ferry", "sleepy-hollow", "nyack", "piermont"],
    metaTitle: "Expert Handyman Services in Irvington, NY | Odds & Ends",
    metaDescription: "Premium handyman services for Irvington, NY homeowners. Custom built-ins, kitchen renovations, painting, and skilled home repairs just across the Mario Cuomo Bridge.",
    keywords: ["handyman Irvington NY", "Irvington home repair", "Westchester handyman", "custom built-ins Irvington"],
    localAdvantage: "Irvington is one of the most architecturally cohesive villages along the Hudson, with a housing stock dominated by well-preserved Tudors, colonials, and Arts and Crafts homes dating from the early 1900s through the 1940s. The village's compact layout and steep terrain above the river mean many homes sit on tight lots with limited access — something we account for when planning material delivery and work logistics.",
    neighborhoods: ["Main Street village center", "Station Road area", "North Eckar Street", "Harriman Road", "Matthiessen Park", "Ardsley-on-Hudson border", "Barney Park", "Riverview area"],
    housingStock: "Irvington's housing is predominantly Tudors, colonials, and Arts and Crafts homes from the early to mid-20th century, many featuring original slate roofs, stucco exteriors, leaded glass windows, and handcrafted interior woodwork. A smaller number of contemporary homes and renovated estates round out the village's housing mix.",
    popularServiceSlugs: ["kitchen-renovation", "built-ins", "custom-accent-walls", "painting"],
    localTips: "Irvington is an incorporated village with its own building department and planning board. Permits are required for structural changes, plumbing, electrical, and any work affecting the building envelope. The village takes its residential character seriously, so exterior modifications may draw scrutiny. Tree removal on private property requires a village permit if the tree exceeds a certain diameter.",
    stats: [
      { label: "Bridge Crossing", value: "~18 Min" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "dobbs-ferry",
    image: "/images/areas/dobbs-ferry.jpg",
    name: "Dobbs Ferry",
    county: "Westchester County",
    state: "New York",
    heroHeadline: "Dobbs Ferry's Trusted Handyman Service",
    heroSubheadline: "Reliable home repairs and upgrades for the families and homeowners of this welcoming riverfront village.",
    intro: "Dobbs Ferry homeowners rely on Odds & Ends for handyman work that's done right and built to last. Whether you're updating a bathroom in a 1950s Cape Cod or installing new flooring in a renovated colonial, we bring over two decades of hands-on experience from our Rockland County base — just a drive across the Mario Cuomo Bridge.",
    commonNeeds: [
      "Bathroom renovation and fixture upgrades",
      "Flooring installation and refinishing",
      "Furniture assembly and built-in shelving",
      "Interior painting and accent walls",
      "Deck and patio repair",
      "Door and window replacement",
      "Smart home device setup and installation",
      "Closet system installation"
    ],
    whyChooseUs: "Dobbs Ferry is a village where families put down roots — and that means homes need to work hard and look good year after year. We understand the practical side of home maintenance as well as the aesthetic side, and we bring that balanced approach to every project. We're a short drive from our Rockland County base across the Mario Cuomo Bridge, and we've built a growing list of Dobbs Ferry clients who call us back because we do what we say we'll do.",
    faqs: [
      { question: "What kinds of homes do you typically work on in Dobbs Ferry?", answer: "We work on the full spectrum — from the older colonials and Cape Cods in the village's established neighborhoods to the newer condos and townhomes near the waterfront and train station. Each property type has its own common issues and we're experienced with all of them." },
      { question: "Can you help with flooring installation or refinishing?", answer: "Yes. We install hardwood, engineered wood, luxury vinyl plank, and tile flooring, and we can refinish existing hardwood floors in older Dobbs Ferry homes." },
      { question: "Do you handle smart home installations?", answer: "We do. Smart thermostats, video doorbells, smart locks, and home automation setups are increasingly popular in Dobbs Ferry. We handle the installation and make sure everything is configured and working before we leave." },
      { question: "Do you offer free estimates for Dobbs Ferry homeowners?", answer: "Yes. Every project starts with a free on-site visit where we discuss your goals, inspect the work area, and provide a detailed written estimate with no obligation." }
    ],
    nearbyAreas: ["irvington", "tarrytown", "sleepy-hollow", "nyack", "tappan"],
    metaTitle: "Expert Handyman Services in Dobbs Ferry, NY | Odds & Ends",
    metaDescription: "Dependable handyman services for Dobbs Ferry, NY. Bathroom renovations, flooring, painting, and reliable home repairs from a trusted team just across the Mario Cuomo Bridge.",
    keywords: ["handyman Dobbs Ferry NY", "Dobbs Ferry home repair", "Westchester handyman", "bathroom renovation Dobbs Ferry"],
    localAdvantage: "Dobbs Ferry's housing stock reflects several distinct building eras — pre-war colonials and Tudors in the hillside neighborhoods, mid-century Cape Cods and ranches along the village's central streets, and modern condos near the Metro-North station. This variety means we regularly transition between working on 1920s plaster and lathe, 1960s drywall and paneling, and contemporary construction — all within the same village.",
    neighborhoods: ["Broadway area", "Cedar Street", "Walnut Street corridor", "Palisade Street", "Ogden Avenue", "Livingstone Avenue", "Clinton Avenue", "near Mercy College campus"],
    housingStock: "Dobbs Ferry offers a cross-section of Westchester housing: stately pre-war colonials and Tudors on the hillside streets, practical mid-century Cape Cods and ranches in the village core, and contemporary condos and apartments near the waterfront and train station. Many of the mid-century homes retain original kitchens and bathrooms that are ready for updating.",
    popularServiceSlugs: ["bathroom-renovation", "flooring", "shelving-installation", "smart-home-device-setup"],
    localTips: "Dobbs Ferry is an incorporated village with its own building department. Permits are needed for plumbing, electrical, structural modifications, and any work that changes the footprint of the home. The village enforces its zoning code closely, particularly regarding setbacks and lot coverage on the smaller downtown lots.",
    stats: [
      { label: "Bridge Crossing", value: "~20 Min" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  }
]
