import { db } from '../firebase';

export function createNewsApiCall(value) {
  db.collection('news')
    .add({
      content: value,
    })
    .then((docRef) => {
      console.log(`docRef: ${docRef.id}`);
    })
    .then((error) => {
      console.log(
        `Error while calling createNewsApiCall() in createNews: ${error}`
      );
    });
}
