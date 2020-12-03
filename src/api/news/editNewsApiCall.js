import { db } from '../../firebase';

function editNewsApiCall(id, heading, newsContent, buttonText) {
  return db
    .collection('news')
    .doc(id)
    .set({
      heading: heading,
      content: JSON.stringify(newsContent),
      button: buttonText,
    })
    .then(() => {
      console.log(`News with ID ${id} was successfully updated`);
      return true;
    })
    .catch((error) => {
      console.log(
        `Error while trying to update News with ID ${id}. Erorr: ${error}`
      );
      return false;
    });
}

export default editNewsApiCall;
