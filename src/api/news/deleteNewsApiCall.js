import { db } from '../../firebase';

function deleteNewsApiCalls(id) {
  return db
    .collection('news')
    .doc(id)
    .delete()
    .then(() => {
      console.log(`Document with id ${id} was successfully deleted!`);
      return true;
    })
    .catch((error) => {
      console.log(`Error removing document with id ${id}. Error: ${error}`);
      return false;
    });
}

export default deleteNewsApiCalls;
