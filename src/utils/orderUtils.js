export function sortByOrderNumber(items) {
  return items.sort((a, b) => a.orderNumber - b.orderNumber);
}
