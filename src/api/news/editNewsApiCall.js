import { db } from '../../firebase';

function editNewsApiCall(news) {
  return db
    .collection('news')
    .doc(news.id)
    .set(news)
    .then(() => {
      console.log(`News with ID ${news.id} was successfully updated`);
      return true;
    })
    .catch((error) => {
      console.log(
        `Error while trying to update News with ID ${news.id}. Erorr: ${error}`
      );
      return false;
    });
}

export default editNewsApiCall;
