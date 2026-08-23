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
    slug: "tuxedo",
    image: "/images/areas/tuxedo.jpg",
    name: "Tuxedo",
    county: "Orange",
    state: "New York",
    heroHeadline: "Tuxedo's Go-To Home Services Team",
    heroSubheadline: "Kitchens, baths, basements, built-ins, and every repair in between — for the town we've made our home turf.",
    intro: "Home services in Tuxedo, NY mean working with what this town actually is: wooded hillside lots along the Ramapo River, turn-of-the-century homes near the 1886 Victorian train station, mid-century builds tucked into Eagle Valley and Southfields, and newer townhomes at Woodlands at Tuxedo. Odds & Ends has been doing small and medium sized renovation and repair work in the Hudson Valley since 2001, and Tuxedo is now the heart of our service area — close enough to our Rockland County base that a quick repair up Route 17 is never an imposition. With more than 70 percent of the town preserved as open space between Harriman and Sterling Forest state parks, homes here live in the woods, and the woods are hard on houses: shade holds moisture against siding and decks, wells and septic systems need respectful scheduling, and every project has to be planned around trees, slopes, and stone. That's the work we love.",
    commonNeeds: [
      "Deck repair and refinishing on wooded, shaded lots",
      "Kitchen and bathroom updates in older homes",
      "Basement moisture control and finishing",
      "Custom built-ins and home office setups for NYC commuters",
      "Interior painting and drywall or plaster repair",
      "Door and window adjustments in settling older frames",
      "Flooring repair and installation",
      "Exterior trim, caulk, and rot repair"
    ],
    whyChooseUs: `Tuxedo is a small town, and we want to be its go-to. That's not a slogan — it's the business plan. We answer the phone, we show up when we say we will, and we treat a one-hour repair in Southfields with the same care as a month of built-ins near the lake. A lot of contractors won't drive to Tuxedo for a small job; we've made Tuxedo the center of the map instead. Owner Daniel Kiely has spent ${new Date().getFullYear() - 2001}+ years working on Hudson Valley homes just down Route 17, and every job here is a chance to earn a neighbor's trust for the next twenty.`,
    faqs: [
      {
        question: "Do you cover all of the Town of Tuxedo?",
        answer: "Yes — the hamlet along Route 17, Eagle Valley, Southfields, Sterling Forest, Arden, and the Village of Tuxedo Park. We're minutes up the road from our Rockland County base, so nothing in town is out of the way, including homes off Long Meadow Road and East Village Road."
      },
      {
        question: "Can you handle the moisture problems common on wooded Tuxedo lots?",
        answer: "That's half the work in this town. Deep shade keeps decks, siding, and trim damp long after rain, which accelerates rot, moss, and paint failure. We build maintenance plans around it — proper stains and caulks, improved drainage and airflow, and rot repairs done before they spread into framing."
      },
      {
        question: "Do you work on the older homes near the train station?",
        answer: "Yes. The homes in the hamlet and around the station date back a century or more, with plaster walls, original trim, and framing that has settled into place. We repair rather than rip out wherever possible, matching materials so the fix disappears into the house."
      },
      {
        question: "Do I need a permit for my project in Tuxedo?",
        answer: "Structural work, decks, and most plumbing or electrical changes go through the Town of Tuxedo building department, and work inside Tuxedo Park adds village review on top. We'll tell you up front whether your project needs a permit and handle the paperwork with you rather than leaving you to figure it out."
      },
      {
        question: "How quickly can you get to a small job in Tuxedo?",
        answer: "Usually within days, not weeks. Small jobs are how we earn trust in a town this size, so we bundle them into efficient visits rather than turning them down. Call or text (908) 461-2688 with a photo and you'll typically have an answer the same business day."
      }
    ],
    nearbyAreas: ["tuxedo-park", "sloatsburg", "suffern", "montebello"],
    metaTitle: "Home Services & Handyman in Tuxedo, NY | Odds & Ends",
    metaDescription: "Kitchens, bathrooms, basements, decks, built-ins, and expert handyman work in Tuxedo, NY. Odds & Ends Home Services — Tuxedo's go-to since 2001. Free estimates.",
    keywords: ["home services Tuxedo NY", "handyman Tuxedo NY", "Tuxedo NY contractor", "kitchen remodel Tuxedo NY", "deck repair Tuxedo NY", "home repair Tuxedo New York"],
    localAdvantage: "Tuxedo's homes sit in deep woods between Harriman and Sterling Forest state parks, and that setting drives everything about maintaining them: shaded siding and decks stay wet and grow moss, leaf litter clogs gutters and grades, and wells, septic fields, and long gravel drives complicate projects that would be routine in a subdivision. A local team that plans for the terrain — and doesn't charge windshield time to get here — changes the economics of keeping a Tuxedo home in shape.",
    neighborhoods: ["Tuxedo hamlet / East Village", "Eagle Valley", "Southfields", "Sterling Forest", "Arden", "Woodlands at Tuxedo", "Long Meadow Road corridor", "Route 17 corridor"],
    housingStock: "Tuxedo's housing runs from early-1900s homes clustered near the Metro-North station to mid-century houses in Eagle Valley and Southfields, plus the newer Woodlands at Tuxedo townhomes. Most sit on wooded, sloped lots with wells and septic, and many carry decades of deferred small repairs that add up.",
    popularServiceSlugs: ["deck-repair", "basement-finishing", "kitchen-renovation", "home-office-setup"],
    localTips: "The Town of Tuxedo building department handles permits for structural work, decks, and plumbing or electrical changes. On wooded lots, schedule exterior staining and painting for stretches of dry weather — shaded surfaces here need extra cure time. If you're near the Ramapo River or at the base of a slope, ask us to check grading and downspout runs before finishing a basement; managing water first saves the finish work later.",
    stats: [
      { label: "Focused On Tuxedo", value: "Our #1 Area" },
      { label: "Google Rating", value: "5 Stars" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "tuxedo-park",
    image: "/images/areas/tuxedo-park.jpg",
    name: "Tuxedo Park",
    county: "Orange",
    state: "New York",
    heroHeadline: "Tuxedo Park's Trusted Home Services Craftsman",
    heroSubheadline: "Careful, discreet work for America's first gated community — from small repairs to full room transformations.",
    intro: "Home services in Tuxedo Park, NY are a different discipline. Behind the gate, some 300 homes built for Pierre Lorillard's 1886 colony ring Tuxedo Lake, the Wee Wah, and Pond Number Three — stone and shingle houses with slate roofs, plaster walls, leaded glass, and trim profiles no lumber yard stocks. These houses reward craftsmen who repair rather than replace, and they punish shortcuts. Odds & Ends Home Services brings a quarter century of small and medium sized renovation experience to exactly this kind of work: kitchens and baths updated without erasing character, built-ins that look original to the house, plaster patched properly, and the steady stream of small repairs a century-old home generates. We're minutes away, we're insured for it, and we actually want the small jobs most contractors won't drive in for.",
    commonNeeds: [
      "Plaster wall and ceiling repair",
      "Kitchen and bathroom renovations that respect period character",
      "Custom built-ins, bookcases, and window seats",
      "Trim, molding, and millwork matching",
      "Interior painting with proper prep on old surfaces",
      "Door, window, and hardware restoration and adjustment",
      "Basement and utility space improvements in stone foundations",
      "Punch lists after larger renovations"
    ],
    whyChooseUs: `Tuxedo Park homeowners tell the same story: it's nearly impossible to get a skilled contractor to show up for anything smaller than a gut renovation. That's the gap we exist to fill. We're licensed and insured, we follow the village's contractor registration and gate procedures without drama, and we're comfortable being trusted with a home while you're in the city. Most of all, we understand that in a village of three hundred homes, reputation is everything — every job we do inside the gate is a referral we intend to earn.`,
    faqs: [
      {
        question: "Are you set up to work inside the gate at Tuxedo Park?",
        answer: "Yes. We carry $1,000,000 in general liability coverage, provide license and insurance documentation with every estimate, and follow the village's contractor registration and gate access procedures. Tell the Keep we're coming and we'll be on time."
      },
      {
        question: "Do exterior projects need village approval?",
        answer: "Often, yes — Tuxedo Park is a National Register historic district and exterior changes typically go through the village's review process in addition to any town permit. We'll flag which projects need approval before work begins and keep the scope inside what's been approved. Interior repairs and updates generally don't need village review."
      },
      {
        question: "Can you work on plaster, old trim, and other original materials?",
        answer: "That's the work we like best. We patch and skim plaster rather than defaulting to demolition, match existing trim profiles, and salvage original hardware wherever it can be saved. A repair in a 1900s house should disappear into it."
      },
      {
        question: "Will you take small jobs in Tuxedo Park, or only renovations?",
        answer: "Both, genuinely. A sticking pocket door, a short punch list, a single room repaint — small jobs are how we introduce ourselves. Many contractors won't come in for less than a major project; we've built our schedule so Tuxedo Park's small jobs always have a place in it."
      },
      {
        question: "Can you work while we're away?",
        answer: "Yes. Many Park residents split time with the city, and we're used to coordinating access, sending progress photos, and leaving the house cleaner than we found it. You'll get updates without having to be on site."
      }
    ],
    nearbyAreas: ["tuxedo", "sloatsburg", "suffern", "montebello"],
    metaTitle: "Home Services in Tuxedo Park, NY | Odds & Ends",
    metaDescription: "Skilled, discreet home services for Tuxedo Park, NY — plaster repair, kitchens, baths, custom built-ins, and small jobs done right. Licensed, insured, local.",
    keywords: ["Tuxedo Park NY contractor", "home services Tuxedo Park", "handyman Tuxedo Park NY", "historic home repair Tuxedo Park", "plaster repair Tuxedo Park", "built-ins Tuxedo Park NY"],
    localAdvantage: "Tuxedo Park's roughly 300 homes are a living museum of pre-World-War-I architecture — Bruce Price cottages, stone and shingle manors, slate roofs, and interiors finished in plaster and hardwood by Gilded Age craftsmen. Maintaining them demands both skill and logistics: village contractor procedures, historic district review for exterior work, winding lakeside roads, and owners who are often in the city midweek. A trusted local craftsman who handles the small work as willingly as the renovations is the rarest trade in the village.",
    neighborhoods: ["Tuxedo Lake", "Wee Wah Lake area", "Pond Number Three", "Circuit Road", "Tower Hill", "West Lake Road", "Clubhouse Road area", "The Race Track area"],
    housingStock: "The village's homes date overwhelmingly to 1886 through the 1930s: stone, shingle, and stucco houses of two to twenty rooms with slate roofs, plaster interiors, original windows, and additions layered across a century. Systems and finishes vary wildly house to house, which makes an experienced eye on small problems the cheapest insurance a Park homeowner can buy.",
    popularServiceSlugs: ["kitchen-renovation", "bathroom-renovation", "built-ins", "painting"],
    localTips: "Register your contractor with the village and allow lead time for gate access on the first visit. Exterior changes in the historic district typically need village review — plan approvals before ordering materials. Slate roofs and copper gutters belong to specialists, but the plaster, trim, kitchens, baths, and built-ins below them are exactly what we do. If your house sits near the lakes, ask us to check basement humidity before storing anything precious down there.",
    stats: [
      { label: "Homes In The Village", value: "~300" },
      { label: "Insurance Coverage", value: "$1M" },
      { label: "Response Time", value: "Same Day" },
      { label: "Estimates", value: "Always Free" }
    ]
  },
  {
    slug: "nyack",
    image: "/images/areas/nyack.jpg",
    name: "Nyack",
    county: "Rockland",
    state: "New York",
    heroHeadline: "Nyack's Trusted Handyman Service",
    heroSubheadline: "Expert craftsmanship for the homes that make this Hudson River village so special.",
    intro: "Handyman service in Nyack, NY covers everything from trim restoration on 1880s Queen Annes off Broadway to deck weatherproofing on the riverfront homes that line the Hudson. Daniel Kiely founded Odds & Ends right here in Rockland County in 2001, and a quarter century later we still run jobs in Upper Nyack, South Nyack, and along the Hudson Avenue stretch every week. We've patched original lath-and-plaster in pre-war homes near Castle Heights, rebuilt rotting porch columns on Main Street Victorians, and restored cedar trim on Midland Avenue. Carrying a $1 million general liability policy and the Rockland County Home Improvement Contractor license keeps both us and your home protected from start to finish.",
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
    intro: "Home repair in New City, NY almost always involves a 50-to-60-year-old split-level or raised ranch — the housing built during Clarkstown's 1960s boom that now needs decks rebuilt, basements re-waterproofed, and dated kitchens reworked. Odds & Ends has handled exactly that work since Daniel Kiely opened the business in 2001. We log jobs every week along Little Tor Road, off Old Schoolhouse, near the Rockland County complex, and out toward Phillips Hill. Heavy clay soil throughout central Clarkstown puts steady moisture pressure on basement walls, which is why so much of our New City work touches drainage, sump systems, and lower-level finishing. Holding a 5-star Google rating across our reviews keeps the bar high.",
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
    intro: "What Odds & Ends does in Nanuet, NY runs heavily toward modernization work — original 1950s kitchens, single-pane windows on Cape Cods, and dated bathrooms on the post-war ranches that fill out neighborhoods like Smith Hill, Highview Avenue, and the Middletown Road area. Galvanized supply lines and original electrical panels are common in this stretch of Rockland County, and many homes are now on their second or third owner. Founded by Daniel Kiely in 2001, our operation handles everything from a single fixture swap to a full bath remodel. We're licensed (H-25-600) and carry a million-dollar general liability policy, so the homeowners off Route 59 and Demarest Mill Road get full peace of mind on every visit.",
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
    intro: "Pearl River handyman work calls for a craftsman's touch — the hamlet's downtown core off Central Avenue is full of 1920s-through-1940s bungalows and colonials with original plaster, narrow-gauge oak floors, and cedar-shake exterior details. Tear-and-replace doesn't fly here. Odds & Ends has been doing repair-first carpentry in Rockland County since 2001, and Pearl River is one of our densest service zones — we've patched plaster on Franklin Avenue, restored cedar trim near Pearl River High School, and hung doors on Cape Cods along North Main Street. Owner Dan Kiely runs every job personally, backed by a $1 million general liability policy and the Rockland County Home Improvement Contractor license that's required for residential construction work in the village.",
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
    intro: "Handyman jobs in Spring Valley, NY frequently involve multi-family homes, converted two- and three-unit properties, and older infrastructure where deferred maintenance has piled up — galvanized pipes, original fuse panels, single-pane windows. Odds & Ends has been the steady hand on those projects since Daniel Kiely founded the business in 2001. We work across the Main Street corridor, the Route 45 stretch, the Memorial Park neighborhood, and the side streets off Maple Avenue and Ewing. Rockland County's Office of Consumer Protection licenses us as a Home Improvement Contractor (H-25-600), and we maintain a $1 million general liability insurance policy — both essential when coordinating repairs across landlords, tenants, and shared-wall units. Free estimates, written quotes, no surprises.",
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
    intro: "Skilled handyman work in Haverstraw, NY ranges across two very different housing eras — the late-1800s brick row buildings of the historic village core and the 1950s–70s ranches and split-levels that fill out West Haverstraw and the surrounding town. Odds & Ends has handled both since Dan Kiely opened the doors in 2001. We log jobs along the Route 9W corridor, near Bowline Point Park, in the Garner Arts District blocks, and on side streets off Samsondale Avenue. Old brick storefronts need careful repointing and sash work; mid-century Capes need deck rebuilds, fence repair, and bathroom updates. With 25+ years on the books and a 5-star Google rating, the work speaks for itself.",
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
    intro: "Stony Point handyman service has to handle what comes with living next to Harriman State Park — heavy tree debris in gutters, storm damage from northeast systems pushing through the river corridor, and constant moisture pressure on decks and siding from the dense forest canopy. Odds & Ends has worked these conditions since 2001. Our crew runs jobs along the Route 9W corridor, around Tomkins Cove, near the Stony Point Battlefield, and out toward Buckberg Mountain Road. We rebuild storm-damaged porches, treat moss-covered cedar decks, repair fences crushed by fallen limbs, and replace siding hit by wind-driven branches. Daniel Kiely's $1 million general liability policy covers every Rockland County job — including the awkward, wooded ones.",
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
    intro: "Home improvement work in Clarkstown, NY covers nearly every suburban housing era at once — 1950s Capes in Central Nyack, 1960s split-levels in New City and Nanuet, lakeside cottages around Congers Lake, and newer colonials in Bardonia and Germonds. Odds & Ends has worked across that range since Dan Kiely launched the business in 2001. Because the town's mid-century housing boom produced such a uniform stock, we end up doing the same kinds of jobs — deck rebuilds, basement waterproofing, kitchen mods, drywall and plaster repair — for many neighbors at the same time. The Rockland County Home Improvement Contractor license (H-25-600) and a million-dollar general liability policy back everything we do here.",
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
    intro: "Handyman service in Orangetown, NY moves between hamlets that look like different centuries. Tappan has colonial-era Dutch stone houses; Pearl River has 1920s bungalows; Sparkill has early-20th-century colonials; Palisades has riverfront properties just below the Mario Cuomo Bridge. Odds & Ends has worked all of them since 2001 — that's 25+ years across one of Rockland County's most architecturally varied towns. We restore original woodwork on stone homes near the historic '76 House, patch plaster in Sparkill colonials, and rebuild decks on Orangeburg ranches. Owner Daniel Kiely runs every estimate personally; the company holds a Rockland County Home Improvement Contractor license and carries $1 million in general liability coverage. Free, no-obligation written estimates.",
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
    intro: "Handyman work in Ramapo, NY spans the largest town in Rockland County — from the village core of Suffern at the foot of the Ramapo Mountains, west through wooded Pomona, and east into the dense neighborhoods of Spring Valley, Monsey, and Airmont. That geographic spread means we handle dramatically different conditions: rocky soil and steep grades on mountain-adjacent properties, older infrastructure on the densely built east side. Odds & Ends has run jobs across all of it since Dan Kiely opened the company in 2001. We carry a $1 million general liability policy and the Rockland County Home Improvement Contractor license (H-25-600). Same-day responses to text messages are part of how we keep up across this much territory.",
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
    intro: "Suffern handyman service has to deal with the village's hillside microclimate — heavy runoff pouring off the Ramapo Mountains pushes constant pressure against foundations, and basements take more abuse here than almost anywhere else in Rockland County. Odds & Ends has been at this since 2001. Our regular Suffern routes cover the Lafayette Avenue corridor (Victorians, Foursquares, and craftsman bungalows from the 1880s onward), the village downtown, the side streets off Wayne Avenue, and the hillside neighborhoods near Good Samaritan Hospital. Foundation drainage, sump installation, plaster repair, and original-window restoration are weekly work for us here. Holding a Rockland County Home Improvement Contractor license and $1 million in general liability coverage means homeowners get a fully protected job, every job.",
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
    intro: "Skilled handyman work in Piermont, NY rewards careful planning. The riverfront village's housing — 19th-century paper-mill workers' cottages, hillside homes with dramatic Hudson River views, and tasteful modern renovations — is squeezed onto compact, often awkwardly shaped lots. Odds & Ends has navigated that since Dan Kiely founded the company in 2001. Jobs run along Piermont Avenue, on Ash Street, around Flywheel Park, and across the Sparkill Creek border. We've built custom shelving for tight Ferdon Avenue cottages, restored historic trim on Hudson Terrace homes, and rebuilt decks engineered for steep, river-overlooking grades. Every Rockland County project gets a $1 million general liability backstop and the H-25-600 contractor license that's recognized by the village's permit office.",
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
    intro: "Grandview-on-Hudson handyman work demands a higher finish bar. The village's architect-designed homes, mid-century modern properties, and thoughtfully renovated houses sit on steep, heavily wooded lots overlooking the Hudson River — and the owners expect maintenance work to match the design intent. Odds & Ends has delivered exactly that since 2001. We work along River Road, Broadway, Highland Avenue, and the upper hillside streets near the Tappan Zee overlook. Custom built-ins, premium exterior finish work, decks engineered for view-grade slopes, and trim restoration that matches the original architectural intent are all in our daily mix. As a Licensed Home Improvement Contractor in Rockland County (H-25-600) with $1 million in general liability coverage, we treat these homes the way they were built.",
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
    intro: "Handyman service in Sparkill, NY frequently centers on water — Sparkill Creek can push periodic flooding into low-lying lots, and the hamlet's heavy tree canopy means gutters fill, decks grow moss, and painted trim weathers fast. Odds & Ends has handled those exact conditions across Rockland County since 2001. Our Sparkill jobs run along the Route 340 corridor, near St. Thomas Aquinas College, around Depot Square, and on the streets off Mountainview Avenue and Eastern Road. The hamlet's well-kept early-1900s colonials and Cape Cods get the careful original-trim repair, plaster patching, and hardwood touch-up they deserve. Daniel Kiely founded the company in 2001 and still personally writes every estimate; the work is backed by a 5-star Google rating.",
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
    intro: "Tappan handyman work crosses three centuries in a single hamlet. The historic center holds 1700s and 1800s Dutch stone homes with hand-hewn beam construction, wide-plank floors, and original stonework — surrounded by 1920s–40s bungalows, mid-century ranches, and newer colonial developments out toward Route 303. Odds & Ends has worked that full range since Dan Kiely opened the company in 2001. Our crew has restored original trim near the DeWint House, repointed stone walls along Old Tappan Road, and rebuilt decks on Kings Highway colonials. Every Rockland County job carries the protection of our Home Improvement Contractor license (H-25-600) and a $1 million general liability policy — important when working on houses that predate the United States.",
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
    intro: "Pomona handyman service has to handle big decks, big lots, and big trees. The hamlet's housing is mostly 1970s and 1980s raised ranches and colonials sitting on wooded lots of a half-acre or more — many with substantial decks, detached garages, sheds, and outdoor living space that all needs ongoing care. Odds & Ends has worked Pomona since 2001. Our jobs cluster along the Route 202 corridor, off Camp Hill Road and Quaker Road, and out toward the Harriman State Park border. Deck rebuilds, fence repair, shed siding, and detached-garage roofing are weekly work here. Daniel Kiely's $1 million general liability insurance and Rockland County Home Improvement Contractor license back every project — including the deep-lot ones.",
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
    intro: "What handyman work looks like in Airmont, NY is largely shaped by the 1960s-and-1970s split-level, bi-level, and raised ranch homes that fill the village. Quarter- to half-acre lots, attached one-car garages, modest decks — and now, decades of accumulated maintenance items finally coming due. Odds & Ends has been the team Airmont neighbors call since Dan Kiely founded the company in 2001. We work the Cherry Lane area, Viola Road, Spook Rock Road, the streets off Ewing Avenue, and out toward Doxbury Lane. Deck refinishing, basement updates, dated bathroom modernization, and split-level kitchen reworks are our routine here. The Rockland County Home Improvement Contractor license and $1M general liability coverage make every job paperwork-clean.",
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
    intro: "Chestnut Ridge handyman jobs frequently call for multi-level deck work, walkout basement repairs, and hillside fence builds — the natural consequence of a village that climbs the ridge between Nanuet and Spring Valley. Lots range from a third of an acre to over an acre, and many homes have been significantly expanded over the years. Odds & Ends has worked across Rockland County since Daniel Kiely launched the business in 2001. Our regular Chestnut Ridge routes cover the Red Schoolhouse Road corridor, Hungry Hollow Road, the side streets off Summit Avenue, and homes near Old Schoolhouse Road. Backed by a Rockland County Home Improvement Contractor license (H-25-600) and a $1 million general liability policy, we keep big sloped projects on track.",
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
    intro: "Montebello handyman work runs toward the high end. The Ramapo hillside village is dominated by 1980s-through-2000s colonials and contemporary homes on lots of an acre or more, with traditional architecture, stone and cedar exteriors, attached two-car garages, and finished basements. Owners expect handyman work to look as deliberate as the original construction. Odds & Ends has delivered that standard since 2001. Our jobs run along Montebello Road, off Spook Rock Road and Hemion Road, around the Blue Hill area, and out toward the Harriman State Park border. Custom built-ins, finished-basement work, premium exterior maintenance, and large-deck rebuilds make up most of our local mix. Licensed (H-25-600) and insured for $1 million in general liability — the bare minimum for this caliber of home.",
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
    intro: "Handyman service in New Hempstead, NY skews toward the kind of work that keeps a 1970s-or-1980s home moving forward another generation. The village's split-levels, raised ranches, and colonials — solidly built on quarter-to-third-acre lots — frequently still have original kitchens, original bathrooms, original flooring, and partially finished basements that are ready for the second-pass renovation. Odds & Ends has done exactly that work in Rockland County since 2001. We run jobs along the New Hempstead Road corridor, on Brick Church Road, near Pennington Way, and across to the Kearsing Parkway area. Daniel Kiely founded the business 25+ years ago and still inspects every estimate; backed by $1 million in general liability coverage and a 5-star Google rating across all reviews.",
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
    intro: "Sloatsburg handyman work has to keep up with the demands of homes built right at the gateway to Harriman State Park. Turn-of-the-century cottages near the village center, mid-century capes and ranches further out, and newer construction along the mountain edges — all of them dealing with wooded lots, hilly grades, heavy leaf fall, and the kind of moisture and storm exposure that defines Rockland County's western edge. Odds & Ends has worked these conditions since Dan Kiely founded the business in 2001. We run jobs in Eagle Valley, along the Route 17 corridor, on Sterling Mine Road, and out the Seven Lakes Drive area. Cottage restoration, deck weatherproofing, fence repair, and exterior painting are weekly work; insurance: $1M general liability.",
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
    intro: "Upper Nyack handyman work calls for the same careful hand the village itself was built with. Stately Victorians and Colonial Revival homes near the center, mid-century ranches climbing the hillside toward Hook Mountain State Park, and contemporary builds that capitalize on Hudson River views — all on heavily wooded, often steeply graded lots. Odds & Ends has worked across Rockland County since 2001. Our Upper Nyack routes cover Old Mill Road, North Midland Avenue, Castle Heights, Larchdale Avenue, and the streets near Hook Mountain. Original woodwork restoration, view-grade deck builds, and hillside fence work are routine for us here. Daniel Kiely runs every project personally, with the Rockland County Home Improvement Contractor license and $1 million in general liability coverage backing the work.",
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
    intro: "Congers handyman service runs heavily toward water management. The hamlet sits around Congers Lake, and the elevated humidity that comes with it accelerates paint failure on siding, wood deterioration on decks, and basement moisture in lower-lying homes. Odds & Ends has handled those conditions across Rockland County since 2001. Most Congers homes are 1950s-through-1970s capes, ranches, and split-levels — meaning we're often updating original kitchens, refinishing original decks, and managing recurring moisture issues all at once. Routes cover the Congers Lake area, Lake Road, the Route 303 corridor, Old Lake Road, and the side streets off Sierra Vista. We carry a Rockland County Home Improvement Contractor license and a $1 million general liability policy. Same-day text response.",
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
    intro: "What we do in Blauvelt, NY is mostly thoughtful preservation work — many of these homes have been in the same family for decades, and homeowners want to maintain original character rather than gut and replace. Built-in cabinetry, original hardwood floors, plaster walls, and the cedar trim details that define the colonial-style homes along Western Highway all benefit from a careful repair-first approach. Odds & Ends has been doing this in Rockland County since Dan Kiely opened the business in 2001. We run jobs along the Western Highway corridor, on Greenbush Road, near Blauvelt State Park, and on the side streets off Clausland Mountain Road. Licensed (H-25-600) and carrying $1 million in general liability — the homeowners here expect both.",
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
    intro: "Valley Cottage handyman work hits the sweet spot for mid-century home updates. The hamlet's housing — predominantly ranches, capes, and split-levels built between the late 1950s and the 1970s — is right at the age when bathrooms need refreshing, decks need rebuilding, and exterior paint needs more than a touch-up. Odds & Ends has done that work across Rockland County since Daniel Kiely founded the business in 2001. Our regular Valley Cottage stops cover the Route 303 corridor, the Lake Road area near Lake DeForest, the streets off Storms Road, and the Hilltop section that climbs toward High Tor. Above-ground pools, decks, and patios are common additions we maintain. Free written estimates, a Home Improvement Contractor license, and $1M GL coverage.",
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
    intro: "Thiells handyman service runs across two distinct housing eras at once. The hamlet straddles the Haverstraw and Stony Point border in northern Rockland County and holds both 1960s-and-1970s ranches and split-levels in the established neighborhoods plus 1990s-and-2000s townhouse and condominium developments. Odds & Ends has worked both since Dan Kiely launched the business in 2001. Our crew runs jobs along the Route 202 corridor, on Thiells-Mount Ivy Road, off Filors Lane, near the Anthony Wayne Recreation Area entrance, and out the Bulsontown Road stretch. Mid-century homes need deck rebuilds and bathroom refreshes; townhomes need interior carpentry and unit-level repair. Holding the Rockland County Home Improvement Contractor license (H-25-600) and $1M in general liability coverage.",
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
    intro: "Garnerville handyman work hits a useful crossroads of housing eras. The hamlet's Haverstraw setting holds late-1800s and early-1900s workers' cottages and two-family homes near the village center, 1950s-and-1960s ranches and capes climbing the surrounding hillsides, and pockets of newer construction. Odds & Ends has worked all of it across Rockland County since Daniel Kiely opened the business in 2001. We run jobs along the Route 202 area, near the Garnerville Arts & Industrial Center, off Rosman Road, on Railroad Avenue, and around Letchworth Village. The older cottages get plaster work, hardwood touch-ups, and tight-floor-plan carpentry. The mid-century homes get bathroom refreshes and decks rebuilt. Licensed Home Improvement Contractor in Rockland County, $1M general liability — protection on every job.",
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
  }
]
