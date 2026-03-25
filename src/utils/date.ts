export const formatDate = (dateStr?: string) => {
  if (!dateStr) return "";

  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
