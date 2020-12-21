import { db } from '../../firebase';

function createOrderApiCall(order) {
  return db
    .collection('orders')
    .add({ ...order, isComplete: false })
    .then((docRef) => {
      console.log(`Order with id ${docRef.id} was created`);
      return docRef.id;
    })
    .catch((error) => {
      console.log(`Error while saving order to firestore. Error: ${error}`);
    });
}

export default createOrderApiCall;
