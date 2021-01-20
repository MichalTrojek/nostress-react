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

export function getDateText() {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay() + 1;
  const last = first + 4;
  const monday = new Date(curr.setDate(first)).toLocaleDateString().slice(0, 7);
  const friday = new Date(curr.setDate(last)).toLocaleDateString();
  return `${monday} - ${friday}`;
}
