export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getFirstCapitalLetter(str) {
  if (str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase();
}
