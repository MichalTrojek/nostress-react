import { db } from '../../firebase';

function editMealApiCall(id, name, alergens, price) {
  console.log(id);
  return db
    .collection('meals')
    .doc(id)
    .set({
      name: name,
      alergens: alergens,
      price: price,
    })
    .then(() => {
      console.log(`Meal with ID ${id} was successfully updated`);
      return true;
    })
    .catch((error) => {
      console.log(
        `Error while trying to update Meal with ID ${id}. Erorr: ${error}`
      );
      return false;
    });
}

export default editMealApiCall;
