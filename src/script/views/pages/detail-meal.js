import MealsSource from "../../data/meals-source";
import UrlParser from "../../routes/url-parser";
import {
  detailTemplate,
  breadcrumbTemplate,
} from "../templates/detail-template";

const DetailMeal = {
  async render() {
    return `
      <section id="meal">
        <div id='breadcrumb' class='inline-flex bg-yellow-300 py-2 px-4 lg:mx-12'></div>
        <section id='jumbotron' class='grid grid-cols-1 md:grid-cols-2 lg:mx-12 lg:mt-6 lg:rounded-2xl'>
        </section>
        <section id='detail-content' class='grid grid-cols-1 md:grid-cols-2 lg:mx-12 lg:rounded-2xl'>
        <div id='ingredients' class='flex justify-center flex-col px-12 py-6'>
          <div class='flex justify-center'>
            <h3 class='bg-yellow-300 text-lg font-bold px-4 py-1 mb-2'>Ingredient</h3>
          </div>
            <ol class='list-decimal list-inside'></ol>
          </div>
          <div id='instructions' class='flex justify-center flex-col px-12 py-6'>
            <div class='flex justify-center'>
              <h3 class='bg-yellow-300 text-lg font-bold px-4 py-1 mb-2'>Instructions</h3>
            </div>
          </div>
        </section>
        <section id='youtube-detail' class='flex justify-center flex-col px-12 py-6 md:grid-cols-2 lg:mx-12 lg:rounded-2xl'>
          <div class='flex justify-center'>
              <h3 class='bg-yellow-300 text-lg font-bold px-4 py-1 mb-2'>Tutorials</h3>
          </div>
          <div class='youtube-iframe flex justify-center'></div>
        </section>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url);
    const meals = await MealsSource.mealDetail(url.id);

    // Get inggredient amd measures
    const inggredient = [];
    const measures = [];

    const meal = meals[0];
    for (const [key, val] of Object.entries(meal)) {
      if (key.includes("strIngredient")) {
        if (val === "") continue;
        inggredient.push(val);
      } else if (key.includes("strMeasure")) {
        if (val === "") continue;
        measures.push(val);
      }
    }

    const objInggredients = inggredient.reduce(
      (allInggredients, inggredient, index) => {
        allInggredients[inggredient] = measures[index];

        return allInggredients;
      },
      {}
    );

    console.log(objInggredients);

    // Add jumbotron
    const mealsContainer = document.querySelector("#jumbotron");
    mealsContainer.innerHTML += detailTemplate(meals[0]);

    // Add inggredient
    const listInggredient = document.querySelector("#ingredients > ol");
    for (const key in objInggredients) {
      listInggredient.innerHTML += `<li>${key}: ${objInggredients[key]}</li>`;
    }
    // Add instruction
    const instructionContainer = document.querySelector("#instructions");
    instructionContainer.innerHTML += `<p>${meal.strInstructions}</p>`;

    // Add Youtube
    const youtubeContainer = document.querySelector(".youtube-iframe");
    const youtubeId = meal.strYoutube.split("=")[1];
    youtubeContainer.innerHTML += `<iframe height=315 width=720 src=https://www.youtube.com/embed/${youtubeId}></iframe>`;

    // Add breadcrumb
    const breadcrumbContainer = document.getElementById("breadcrumb");
    breadcrumbContainer.innerHTML += breadcrumbTemplate(meal);
  },
};

export default DetailMeal;
