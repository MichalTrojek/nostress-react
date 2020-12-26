import { db } from '../../firebase';

function fetchNewsApiCall() {
  const promise = db
    .collection('news')
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          heading: doc.data().heading,
          content: doc.data().content,
          button: doc.data().button,
          websiteLink: doc.data().websiteLink,
          buttonPath: doc.data().buttonPath,
        });
      });
      return data;
    })
    .catch((error) => {
      console.log(`Error while fetching news from firestore: ${error}`);
    });

  return promise;
}

export default fetchNewsApiCall;
