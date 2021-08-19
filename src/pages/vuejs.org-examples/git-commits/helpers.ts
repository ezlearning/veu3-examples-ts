export function truncate(v: string): string {
  const newline = v.indexOf("\n");
  return newline > 0 ? v.slice(0, newline) : v;
}

export function formatDate(v: string): string {
  return v.replace(/T|Z/g, " ");
}
