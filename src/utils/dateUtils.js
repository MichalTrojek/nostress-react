export function toDateTime(order = {}) {
  try {
    var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
    t.setUTCSeconds(order.created.seconds);
    return `${t.toLocaleDateString()}, ${t.toLocaleTimeString()}`;
  } catch (error) {
    console.log(error);
    return '';
  }
}
