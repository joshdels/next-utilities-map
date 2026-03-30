export function formatText(text: any) {
  if (text === null || text === undefined) return "";

  const str = String(text);

  if (str.includes("_")) {
    return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  if (str === str.toUpperCase()) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
