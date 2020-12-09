import { db } from '../../firebase';

function createMealApiCall(meal) {
  return db
    .collection('meals')
    .add({ name: meal.name, alergens: meal.alergens, price: meal.price })
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
