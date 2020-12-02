import { db } from '../../firebase';

function editNewsApiCall(id, heading, content, buttonText) {
  db.collection('news')
    .doc(id)
    .set({
      heading: heading,
      content: content,
      button: buttonText,
    })
    .then(() => {
      console.log(`News with ID ${id} was successfully updated`);
    })
    .catch(`Error while trying to update News with ID ${id}  `);
}

export default editNewsApiCall;
