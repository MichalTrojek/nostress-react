import { db } from '../../../../firebase';

export function subscribeToOrders(setOrders) {
  const unsubscribe = db.collection('orders').onSnapshot((onSnapshot) => {
    const tempOrders = [];
    onSnapshot.forEach((doc) => {
      const order = { ...doc.data(), id: doc.id };
      tempOrders.push(order);
    });
    setOrders(tempOrders);
  });
  return unsubscribe;
}
