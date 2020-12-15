import { db } from '../../firebase';

function editSoupsApiCall({
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  price,
}) {
  return db
    .collection('soups')
    .doc('allSoups')
    .set({
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      price: price,
    })
    .then(() => {
      console.log(`Documment with soups was saved`);
      return true;
    })
    .catch((error) => {
      console.log(`Error while calling editSoupsApiCall. Errro: ${error}`);
      return false;
    });
}

export default editSoupsApiCall;
