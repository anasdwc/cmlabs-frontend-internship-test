const detailTemplate = (meal) => `
  <div class='jumbotron-left'>
    <img src="${meal.strMealThumb}" />
  </div>
  <div class='jumbotron-right flex flex-col justify-center py-6 px-6 md:px-12'>
    <div class='jumbotron-right__header mb-4 '>
      <h2 class='text-lg font-bold inline bg-yellow-300 px-4 py-1 rounded-lg'><a href='#/${meal.strCategory.toLowerCase()}'>${
  meal.strCategory
} Food</a></h2>
    </div>
    <div class='jumbotron-right__content bg-red-600 p-4 text-white rounded-lg'>
      <p class='meal-country'>${meal.strArea}</p>
      <h3 class='font-bold text-2xl'>${meal.strMeal}</h3>
      <p>${meal.strTags}</p>
    </div>
    </div>
  </div>
`;

const breadcrumbTemplate = (meal) => `
  <span class="material-symbols-outlined">
    home
  </span>
  <span class="material-symbols-outlined">
    navigate_next
  </span>
  <a href='#/${meal.strCategory.toLowerCase()}'>${meal.strCategory}</a>
  <span class="material-symbols-outlined">
    navigate_next
  </span>
  <span><strong>${meal.strMeal}</strong></span>
`;

export { detailTemplate, breadcrumbTemplate };
