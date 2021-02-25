import { db } from '../../../../firebase';

export function subscribeToOrders(setOrders, setPlayAlarm) {
  const unsubscribe = db.collection('orders').onSnapshot((snapshot) => {
    let tempOrders = [];
    snapshot.forEach((doc) => {
      const order = { ...doc.data(), id: doc.id };
      tempOrders.push(order);
    });

    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        setPlayAlarm(true);
      }
    });

    setOrders(tempOrders);
  });
  return unsubscribe;
}
