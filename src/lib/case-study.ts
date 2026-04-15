const BASE_URL = "https://infralens-backend.topmapsolutions.com/case-studies/";

export const caseStudies = async () => {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }

  return await res.json();
};

export const caseStudy = async (id: number) => {
  const res = await fetch(`${BASE_URL}${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch that case study");
  }

  const clone = res.clone();

  console.log(await clone.json());

  return await res.json();
};
