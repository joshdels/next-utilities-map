interface StudiesProps {
  title: string;
  tags: string[];
  description: string;
  image?: string;
  isHighlight?: boolean;
  date: string;
}

export const studies: StudiesProps[] = [
  {
    title: "Digital Water Pipelines",
    tags: ["Water Utilities", "Pipelines"],
    description: "Made for water pipelines for cities",
    isHighlight: true,
    image: "/case-study/2.png",
    date: "April 6, 2026",
  },
  {
    title: "200% Faster Processing",
    tags: ["Processing"],
    description:
      "CAD files is already a messy file and processing takes a longer time converting to GIS ready data.",
    image: "/case-study/1.png",
    date: "April 2, 2026",
  },
  {
    title: "Looking for the Sewer?",
    tags: ["WebGIS", "Sewer"],
    description:
      "One click view button from your millions of sewer data and sometimes looking for a specific sewer is a mess inside the millions sewer data",
    image: "/case-study/4.png",
    date: "April 7, 2026",
  },
  {
    title: "Show Everyone",
    tags: ["WebGIS"],
    description: "Your presentation of CAD and GIS data requires you to show it to your stakeholders",
    image: "/case-study/3.png",
    date: "April 7, 2026",
  },
];
