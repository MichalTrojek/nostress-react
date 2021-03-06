import { db } from '../../../../../firebase';

export async function fetchLastOrderNumber(setCurrentIndex, setMaxSize) {
  const first = db
    .collection('orderHistory')
    .orderBy('orderNumber', 'desc')
    .limit(1);

  const orderNumber = await first.get().then((documentSnapshots) => {
    let lastOrderNumber;
    documentSnapshots.forEach((doc) => {
      lastOrderNumber = doc.data().orderNumber;
    });
    return lastOrderNumber;
  });
  setMaxSize(orderNumber);
  setCurrentIndex(orderNumber);
}

export async function fetchPage(
  setPage,
  setCurrentIndex,
  currentIndex,
  PAGE_SIZE
) {
  try {
    const first = db
      .collection('orderHistory')
      .orderBy('orderNumber', 'desc')
      .startAt(currentIndex)
      .endAt(currentIndex - PAGE_SIZE + 1);

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
  } catch (error) {
    console.log(`currentIndex is probably undefined:  ${currentIndex}`);
  }
}
