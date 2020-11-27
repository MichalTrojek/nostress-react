import { isCompositeComponent } from 'react-dom/test-utils';
import { db } from '../firebase';

function fetchNewsApiCall() {
  let docs = [];
  db.collection('news')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
    });
  return docs;
}

export default fetchNewsApiCall;
