import MealsSource from "../../data/meals-source";
import UrlParser from "../../routes/url-parser";
import {
  createEachCategory,
  titleEachCategory,
} from "../templates/eachCategory-template";

const EachCategory = {
  async render() {
    return `
      <div id='each-category'>
      </div>
      <section id="all-categories" class='grid grid-cols-2 m-6 md:grid-cols-4 md:mx-12 md:p-6 bg-emerald-400 rounded-2xl'></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url);
    const meals = await MealsSource.eachCategory(url.category);
    const mealsContainer = document.querySelector("#all-categories");
    meals.forEach((meal) => {
      mealsContainer.innerHTML += createEachCategory(meal, url.category);
    });
    const eachCategoryContainer = document.getElementById("each-category");
    eachCategoryContainer.innerHTML += titleEachCategory(url.category);
  },
};

export default EachCategory;
