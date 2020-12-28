import { db } from '../../firebase';

function editMealApiCall(meal) {
  return db
    .collection('meals')
    .doc(meal.id)
    .set(meal)
    .then(() => {
      console.log(`Meal with ID ${meal.id} was successfully updated`);
      return true;
    })
    .catch((error) => {
      console.log(
        `Error while trying to update Meal with ID ${meal.id}. Erorr: ${error}`
      );
      return false;
    });
}

export default editMealApiCall;
