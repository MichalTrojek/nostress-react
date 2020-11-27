import { db } from '../firebase';

function createNewsApiCall(heading, content) {
  db.collection('news')
    .add({
      heading: heading,
      content: JSON.stringify(content),
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
