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
    title: "Case Study 1",
    tags: ["Water Utilities", "Pipelines"],
    description: "Hi this is description",
    isHighlight: true,
    image: "/image/image.png",
    date: "January 7, 2026",
  },
  {
    title: "Case Study 2",
    tags: ["Oils", "Pipelines"],
    description: "Hi this is description",
    image: "/image/image.png",
    date: "Feb 7, 2026",
  },
  {
    title: "Case Study 3",
    tags: ["Pipelines"],
    description: "Hi this is description",
    image: "/image/image.png",
    date: "April 7, 2026",
  },
];
