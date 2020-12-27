import { db } from '../../../../firebase';

function editCardApiCall(card) {
  return db
    .collection('cards')
    .doc(card.id)
    .set(card)
    .then(() => {
      console.log(`Card with an ID ${card.id} was successfully updated`);
      return true;
    })
    .catch((error) => {
      console.log(
        `Error while editing card with an ID ${card.id}. Error: ${error}`
      );
      return false;
    });
}

export default editCardApiCall;
