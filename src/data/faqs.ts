export interface FAQ {
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  // General
  {
    question: 'What areas does Odds & Ends serve?',
    answer: 'Our primary service area is the Town of Tuxedo, New York — including the Village of Tuxedo Park, Eagle Valley, Southfields, Sterling Forest, and Arden — plus all of Rockland County, including Sloatsburg, Suffern, Nyack, New City, Nanuet, Pearl River, Spring Valley, Haverstraw, Stony Point, Clarkstown, Orangetown, Ramapo, Piermont, Tappan, and Pomona.',
    category: 'General',
  },
  {
    question: 'How long has Odds & Ends been in business?',
    answer: 'Odds & Ends Handyman Service was established in 2001 and brings over two decades of renovation and repair experience to Tuxedo, Tuxedo Park, and Rockland County.',
    category: 'General',
  },
  {
    question: 'Is Odds & Ends licensed and insured?',
    answer: 'Yes. Odds & Ends is a licensed Home Improvement Contractor (Lic# H-25-600) in Rockland County and carries a million dollar general liability insurance policy that covers every job we take on, including all work in Tuxedo and Tuxedo Park.',
    category: 'General',
  },
  {
    question: 'What makes Odds & Ends different from other handyman services?',
    answer: 'Odds & Ends brings 20+ years of experience, meticulous attention to detail, creative problem-solving, and a commitment to leaving your home cleaner than we found it. Our perfect 5-star Google rating speaks to the quality and reliability homeowners can expect.',
    category: 'General',
  },
  // Services
  {
    question: 'What types of work do you handle?',
    answer: 'We handle a wide range of home repair and improvement work including TV mounting, drywall repair, painting, door installation, deck and fence repair, plumbing fixtures, light fixtures, furniture assembly, custom accent walls, wainscoting, built-ins, smart home setup, and much more. Odds & Ends specializes in small and medium sized renovations.',
    category: 'Services',
  },
  {
    question: 'Is any job too small?',
    answer: 'No job too small, because we know how much the little things matter. Whether you need a single doorknob replaced, a picture hung, or a light bulb changed, we treat every project with the same professionalism and care. Many customers call us for a mix of small tasks they want knocked out in one visit.',
    category: 'Services',
  },
  {
    question: 'What services do you NOT offer?',
    answer: 'We do not handle roofing, major electrical work, or large remodels. However, we cover a very wide range of handyman and home improvement services. If you are unsure whether your project fits, just ask — we are happy to let you know.',
    category: 'Services',
  },
  {
    question: 'Can you handle a list of multiple projects in one visit?',
    answer: 'Absolutely. Many homeowners call us with a honey-do list of repairs and projects that have been piling up. We can often tackle multiple tasks in a single visit, saving you time and hassle.',
    category: 'Services',
  },
  // Pricing & Estimates
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes. Every estimate is completely free with no obligation. Call, text, or fill out our online estimate form and we\'ll get back to you with a clear, honest quote.',
    category: 'Pricing',
  },
  {
    question: 'How does pricing work?',
    answer: 'Pricing depends on the scope of the project. Odds & Ends provides upfront, transparent quotes so you know exactly what to expect. No hidden fees, no surprise charges. Many customers specifically mention our fair and reasonable pricing in their reviews.',
    category: 'Pricing',
  },
  {
    question: 'Do I need to pay upfront?',
    answer: 'Payment terms are discussed when you receive your estimate. We work with homeowners to ensure the process is straightforward and comfortable.',
    category: 'Pricing',
  },
  // Scheduling
  {
    question: 'How quickly can you start my project?',
    answer: 'We typically respond within hours and can often schedule work within a few days. For urgent needs, calling or texting directly will get the fastest response.',
    category: 'Scheduling',
  },
  {
    question: 'What are your working hours?',
    answer: 'We work Monday through Friday 7:00 AM to 6:00 PM and Saturday 8:00 AM to 4:00 PM. We are closed on Sundays.',
    category: 'Scheduling',
  },
  {
    question: 'What is the best way to contact you?',
    answer: 'Texting is the fastest way to reach us, though calling works great too. You can reach us at (908) 461-2688. You can also submit an online estimate request through our website.',
    category: 'Scheduling',
  },
  // Process
  {
    question: 'What should I expect when Odds & Ends arrives?',
    answer: 'We arrive on time, prepared, and ready to work. We\'ll discuss the project with you, confirm the scope and approach, and get to work. We\'re respectful of your home and always clean up after ourselves — many customers note that we leave the workspace cleaner than we found it.',
    category: 'Process',
  },
  {
    question: 'Can I send photos of my project for the estimate?',
    answer: 'Yes! Photos are extremely helpful for providing accurate estimates. You can upload them through our online estimate form or text them directly to (908) 461-2688.',
    category: 'Process',
  },
  {
    question: 'Do you provide materials or should I buy them?',
    answer: 'This depends on the project. We can often recommend and source the right materials, or you can purchase them yourself. This is discussed during the estimate process so there are no surprises.',
    category: 'Process',
  },
  {
    question: 'What if I am not satisfied with the work?',
    answer: 'We take great pride in our work and do not consider a job done until you are completely satisfied. Our meticulous attention to detail and commitment to quality mean issues are extremely rare, but if something is not right, we will make it right.',
    category: 'Process',
  },
]
