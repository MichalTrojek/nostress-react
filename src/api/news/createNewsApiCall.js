import { db } from '../../firebase';

function createNewsApiCall(news) {
  console.log(news);
  return db
    .collection('news')
    .add(news)
    .then((docRef) => {
      console.log(`Document written with ID: ${docRef.id}`);
      return docRef.id;
    })
    .catch((error) => {
      console.log(
        `Error while calling createNewsApiCall() in createNews: ${error}`
      );
    });
}

export default createNewsApiCall;
