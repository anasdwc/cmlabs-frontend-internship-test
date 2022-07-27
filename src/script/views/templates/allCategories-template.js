const createCategoriesTemplate = (category) => `
  <article class='my-6'>
    <div class='image-container mx-6 rounded-t-lg relative' data-category=${
      category.strCategory
    }>
    <a href=#/${category.strCategory.toLowerCase()}>
      <img src=${category.strCategoryThumb} class='my-0 p-2 mx-auto' />
    </a>
    </div>
  </article>
`;

export default createCategoriesTemplate;
