import MealsSource from "../../data/meals-source";
import createCategoriesTemplate from "../templates/allCategories-template";
import jumbotronTemplate from "../templates/jumbotron-template";

const AllCategories = {
  async render() {
    return `
      <div>
        <section id='jumbotron' class='grid grid-cols-1 md:grid-cols-2 lg:m-12 lg:rounded-2xl'>
        </section>
        <section>
          <div id='all-categories__h2' class='text-center m-6'>
            <h2 class='inline bg-emerald-400'>Explore Categories</h2>
          </div>
          <div id="all-categories" class='grid grid-cols-2 m-6 md:grid-cols-4 md:mx-12 md:p-6 bg-emerald-400 rounded-2xl'>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    const categories = await MealsSource.exploreCategories();
    const randomMeal = await MealsSource.randomMeal();
    // console.log(randomMeal[0]);
    const categoriesContainer = document.getElementById("all-categories");
    const jumbotronContainer = document.getElementById("jumbotron");
    // Add Category
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesTemplate(category);
    });
    // Add Jumbotron Random Meal
    jumbotronContainer.innerHTML += jumbotronTemplate(randomMeal[0]);
  },
};

export default AllCategories;
