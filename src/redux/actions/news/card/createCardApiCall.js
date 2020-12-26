import { db } from '../../../../firebase';

function createCardApiCall(card) {
  const promise = db
    .collection('cards')
    .add(card)
    .then((docRef) => {
      console.log(`Card with an id ${docRef.id} was created`);
      return docRef.id;
    })
    .catch((error) => {
      console.log(`Error while creating a card: ${error}`);
    });
  return promise;
}

export default createCardApiCall;
