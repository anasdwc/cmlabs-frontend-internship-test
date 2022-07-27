const createEachCategory = (meal, category) => `
  <article class='my-6'>
    <div class='image-container mx-6 rounded-t-lg relative' data-category=${meal.strMeal}>
    <a href=#/${category}/${meal.idMeal}>
      <img src=${meal.strMealThumb} class='my-0 p-2 mx-auto' />
    </a>
  </article>
`;

const titleEachCategory = (category) => `
  <div id='all-categories__h2' class='text-center m-6'>
    <h2 class='inline bg-yellow-300 capitalize'>${category} Category</h2>
  </div>
`;

export { titleEachCategory, createEachCategory };
