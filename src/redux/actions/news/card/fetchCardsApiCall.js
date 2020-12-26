import { db } from '../../../../firebase';

function fetchCardsApiCall() {
  return db
    .collection('cards')
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          heading: doc.data().heading,
          fileUrl: doc.data().fileUrl,
          content: doc.data().content,
        });
      });

      return data;
    })
    .catch((error) => {
      console.log(`Error while fetching cards from firestore: ${error}`);
    });
}

export default fetchCardsApiCall;
