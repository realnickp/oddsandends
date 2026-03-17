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
    popularServiceSlugs: ["door-installation", "drywall-repair", "smoke-detector-installation", "bathroom-renovation"],
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
    popularServiceSlugs: ["door-installation", "painting", "bathroom-renovation", "smoke-detector-installation"],
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
  }
]
