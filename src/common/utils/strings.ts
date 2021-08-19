export function capitalize(str: string): string {
  if (str && str.length) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}
