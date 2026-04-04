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
      "We review your files together, assess what you have, and give you an honest breakdown of what's involved with no obligation, no complications.",
  },
  {
    title: "Fixed-Scope Proposal",
    description:
      "You get a clear, written scope outlining what we'll convert, what we'll build, and the total cost. One number, no hourly surprises.",
  },
  {
    title: "Delivery + Optional Ongoing Maintenance",
    description:
      "We deliver your live WebGIS. If you want ongoing support updates, hosting, and data management. We offer a simple monthly plan. If not, the data is fully yours.",
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
    ],
  },
  {
    title: "Project + Maintenance",
    description:
      "Everything in the one-time project, plus we handle updates, hosting, and ongoing improvements.",
    features: [
      "Fixed project price",
      "Monthly maintenance plan with dedicated support",
    ],
    isHighlight: true,
  },
];
