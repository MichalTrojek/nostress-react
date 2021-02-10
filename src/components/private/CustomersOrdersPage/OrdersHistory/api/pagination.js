import { db } from '../../../../../firebase';

export async function fetchFirst(setPage, PAGE_SIZE) {
  const first = db
    .collection('orderHistory')
    .orderBy('orderNumber')
    .startAt(0)
    .endAt(PAGE_SIZE);

  const orders = await first.get().then((documentSnapshots) => {
    const data = [];
    documentSnapshots.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  });
  setPage(orders);
}

export async function fetchPage(
  setPage,
  setCurrentIndex,
  currentIndex,
  PAGE_SIZE
) {
  const first = db
    .collection('orderHistory')
    .orderBy('orderNumber')
    .startAt(currentIndex + 1)
    .endAt(currentIndex + PAGE_SIZE);

  const orders = await first.get().then((documentSnapshots) => {
    const data = [];
    documentSnapshots.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  });
  if (orders.length !== 0) {
    setPage(orders);
    setCurrentIndex(currentIndex);
  }
}
