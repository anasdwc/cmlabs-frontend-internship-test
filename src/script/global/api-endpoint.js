const API_ENDPOINT = {
  MEAL_CATEGORY: (categoryName) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
  DETAIL_MEALS: (id) =>
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  ALL_CATEGORIES: `https://www.themealdb.com/api/json/v1/1/categories.php`,
  RANDOM_MEAL: "https://www.themealdb.com/api/json/v1/1/random.php",
};

export default API_ENDPOINT;
