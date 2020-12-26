import { db } from '../../../../firebase';

function createCardApiCall(card) {
  const promise = db
    .collection('cards')
    .add(card)
    .then((doc) => {
      console.log(`Card with an id ${doc.id()} was created`);
      return doc.id();
    })
    .catch((error) => {
      console.log(`Error while creating a card: ${error}`);
    });
  return promise;
}

export default createCardApiCall;
