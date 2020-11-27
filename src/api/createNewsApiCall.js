import { db } from '../firebase';

function createNewsApiCall(value) {
  db.collection('news')
    .add({
      content: value,
    })
    .then((docRef) => {
      console.log(`Document written with ID: ${docRef.id}`);
    })
    .catch((error) => {
      console.log(
        `Error while calling createNewsApiCall() in createNews: ${error}`
      );
    });
}

export default createNewsApiCall;
