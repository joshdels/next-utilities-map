interface StudiesProps {
  title: string;
  tags: string[];
  description: string;
  isHighlight?: boolean;
}

export const studies: StudiesProps[] = [
  {
    title: "Case Study 1",
    tags: ["Water Utilities", "Pipelines"],
    description: "Hi this is description",
    isHighlight: true,
  },
  {
    title: "Case Study 2",
    tags: ["Oils", "Pipelines"],
    description: "Hi this is description",
  },
  {
    title: "Case Study 3",
    tags: ["Pipelines"],
    description: "Hi this is description",
  },
];
