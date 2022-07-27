import AllCategories from "../views/pages/all-categories";
import DetailMeal from "../views/pages/detail-meal";
import EachCategory from "../views/pages/each-category";

const routes = {
  "/": AllCategories,
  "/:category": EachCategory,
  "/:category/:id": DetailMeal,
};

export default routes;
