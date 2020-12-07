import { db } from '../../firebase';

// function createNewsApiCall(heading, content, buttonText) {
//   return db
//     .collection('news')
//     .add({
//       heading: heading,
//       content: JSON.stringify(content),
//       button: buttonText,
//     })
//     .then((docRef) => {
//       console.log(`Document written with ID: ${docRef.id}`);
//       return docRef.id;
//     })
//     .catch((error) => {
//       console.log(
//         `Error while calling createNewsApiCall() in createNews: ${error}`
//       );
//     });
// }

const data = [
  {
    news: [
      {
        id: 1,
        heading: 'heading 2222',
        content: 'content 1',
        button: 'button 1',
      },
      {
        id: 2,
        heading: 'heading 2',
        content: 'content 2',
        button: 'button 2',
      },
      {
        id: 3,
        heading: 'heading 3',
        content: 'content 3',
        button: 'button 3',
      },
      {
        id: 4,
        heading: 'heading 4',
        content: 'content 4',
        button: 'button 4',
      },
      {
        id: 5,
        heading: 'heading 5',
        content: 'content 5',
        button: 'button 5',
      },
    ],
  },
  {
    newsCards: [
      {
        image: 'url 222',
        heading: 'heading 1',
        content: 'content 1',
      },
      {
        image: 'url 2',
        heading: 'heading 2',
        content: 'content 2',
      },
      {
        image: 'url 3',
        heading: 'heading 3',
        content: 'content 3',
      },
    ],
  },
];

console.log(data);
console.log(JSON.stringify(data));

function createNewsApiCall(heading, content, buttonText) {
  db.collection('data')
    .doc('data')
    .set(Object.assign({}, data))
    .then(() => {
      console.log(`Data was successfully updated`);
      return true;
    })
    .catch((error) => {
      console.log(`Error while trying to update data.  Erorr: ${error}`);
      return false;
    });
}

export default createNewsApiCall;
