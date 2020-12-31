export default function sortOutMenusByType(meals = []) {
  const weeklyMeals = [];
  const childMeals = [];
  const breakfastMeals = [];

  meals.forEach((meal) => {
    if (meal.type === 'isChildMeal') {
      childMeals.push(meal);
    } else if (meal.type === 'isBreakfastMeal') {
      breakfastMeals.push(meal);
    } else {
      weeklyMeals.push(meal);
    }
  });

  return {
    weeklyMeals: sortMenuItemsByNumber(weeklyMeals),
    childMeals: sortMenuItemsByNumber(childMeals),
    breakfastMeals: sortMenuItemsByNumber(breakfastMeals),
  };
}

function sortMenuItemsByNumber(menu) {
  return menu.sort((a, b) => a.menuNumber - b.menuNumber);
}
