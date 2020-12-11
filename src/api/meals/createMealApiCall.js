import { db } from '../../firebase';

function createMealApiCall({ name, alergens, price, type }) {
  return db
    .collection('meals')
    .add({
      name: name,
      alergens: alergens,
      price: price,
      type: type,
    })
    .then((docRef) => {
      console.log(`Document written with ID: ${docRef.id}`);
      return docRef.id;
    })
    .catch((error) => {
      console.log(
        `Error while calling createMealApiCall() in createMeal. Error:  ${error}`
      );
    });
}

export default createMealApiCall;
