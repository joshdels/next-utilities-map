export const formatDate = (dateStr?: string) => {
  if (!dateStr) return "";

  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
