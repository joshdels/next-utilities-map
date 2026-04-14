const BASE_URL = "https://infralens-backend.topmapsolutions.com/case-studies/";

export const caseStudies = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }

  return await res.json();
};

export const caseStudy = async (id: number) => {
  const res = await fetch(`${BASE_URL}${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch that case study");
  }

  return await res.json();
};
