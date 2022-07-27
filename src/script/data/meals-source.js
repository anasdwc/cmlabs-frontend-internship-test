import API_ENDPOINT from "../global/api-endpoint";

const MealsSource = {
  async exploreCategories() {
    const response = await fetch(API_ENDPOINT.ALL_CATEGORIES);
    const responseJson = await response.json();
    return responseJson.categories;
  },

  async eachCategory(categoryName) {
    const response = await fetch(API_ENDPOINT.MEAL_CATEGORY(categoryName));
    const responseJson = await response.json();
    return responseJson.meals;
  },

  async mealDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_MEALS(id));
    const responseJson = await response.json();
    return responseJson.meals;
  },

  async randomMeal() {
    const response = await fetch(API_ENDPOINT.RANDOM_MEAL);
    const responseJson = await response.json();
    return responseJson.meals;
  },
};

export default MealsSource;
