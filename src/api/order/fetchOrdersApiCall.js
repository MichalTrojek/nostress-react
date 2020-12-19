import { db } from '../../firebase';

function fetchOrdersApiCall() {
  return db.collection('order').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((item) => {
      data.push(item);
    });
    return data;
  });
}

export default fetchOrdersApiCall;
