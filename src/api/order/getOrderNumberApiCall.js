import { increment, db } from '../../firebase';

const getOrderNumberApiCall = () => {
  const storyRef = db.collection('stats').doc('currentOrderNumber');

  return storyRef.get().then((doc) => {
    storyRef.update({ number: increment });
    return doc.data();
  });
};

export default getOrderNumberApiCall;
