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
    title: "CAD to GIS Conversion",
    description:
      "Your utility network — cleaned up, converted, and live in a shareable web map. Fixed price, fast turnaround, full handoff.",
    features: [
      "Delivered in few weeks",
      "Full data handoff, yours to keep",
      "No licenses or software required",
    ],
  },
];
