import { db } from '../../../../../firebase';

export async function searchOrdersByEmail(setPage, email) {
  const orders = await db
    .collection('orderHistory')
    .where('email', '==', email)
    .orderBy('orderNumber', 'desc')
    .get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    });

  setPage(orders);
}
