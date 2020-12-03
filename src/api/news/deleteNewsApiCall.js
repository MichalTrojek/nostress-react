import { db } from '../../firebase';

function deleteNewsApiCalls(id) {
  db.collection('news')
    .doc(id)
    .delete()
    .then(() => {
      console.log(`Documnet with id ${id} was successfully deleted!`);
    })
    .catch((error) => {
      console.log(`Error removing document with id ${id}`);
    });
}

export default deleteNewsApiCalls;
