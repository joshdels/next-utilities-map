interface PricingProps {
  title: string;
  description: string;
  features?: string[];
  isHighlight?: boolean;
}

export const lists: PricingProps[] = [
  {
    title: "Free Discovery Call",
    description:
      "We review your files together, assess what you have, and give you an honest breakdown - no obligation.",
  },
  {
    title: "Fixed-Scope Proposal",
    description:
      "A clear, written scope outlining what we'll convert, what we'll build, and the total cost.",
  },
  {
    title: "Delivery + Optional Ongoing Maintenance",
    description:
      "We deliver your live Interactive Web Map. Want ongoing hosting, updates, and support? Simple monthly plan. If not, the data is yours.",
  },
];

export const offers: PricingProps[] = [
  {
    title: "One-Time Project",
    description:
      "CAD cleanup, GIS conversion, and a live WebGIS viewer scoped and priced per project.",
    features: [
      "Fixed price after scope approval",
      "Delivered in 2-4 weeks",
      "Full data handoff included",
      "Starting at $500",
    ],
  },
  {
    title: "Project + Maintenance",
    description: "Everything above plus hosting, updates, and ongoing support.",
    features: [
      "Fixed project price",
      "Monthly maintenance plan",
      "Dedicated Support",
      "Starting at $3,000 after delivery",
    ],
    isHighlight: true,
  },
];
