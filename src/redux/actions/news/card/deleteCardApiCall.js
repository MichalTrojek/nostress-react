import { db } from '../../../../firebase';

function deleteCardApiCall(id) {
  return db
    .collection('cards')
    .doc(id)
    .delete()
    .then(() => {
      console.log(`Card with an ID ${id} was successfully deleted`);
      return true;
    })
    .catch((error) => {
      console.log(`Error while deleting card with an ID ${id}: ${error}`);
      return false;
    });
}

export default deleteCardApiCall;
