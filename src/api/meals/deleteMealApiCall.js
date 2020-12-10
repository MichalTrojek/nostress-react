import { db } from '../../firebase';

function deleteMealApiCall(id) {
  return db
    .collection('meals')
    .doc(id)
    .delete()
    .then(() => {
      console.log(`Documnet with id ${id} was successfully deleted!`);
      return true;
    })
    .catch((error) => {
      console.log(`Error removing document with id ${id}. Error: ${error}`);
      return false;
    });
}

export default deleteMealApiCall;
