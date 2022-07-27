const headerTemplate = () => `
  <div class='flex flex-col md:flex-row justify-between items-center mb-6 md:mx-12 md:p-6 bg-emerald-400 rounded-b-2xl'>
    <div class='logo font-bold text-2xl'>Cartoon Meal</div>
    <div class='category-nav px-4 bg-yellow-300 pb-2 my-4 md:mb-0'><a href='#/'>Category</a></div>
  </div>  
`;

const footerTemplate = () => `
  <div class='footer mb-4'>
    <p class='flex px-4 py-2'>Made With <span class="material-symbols-outlined">favorite</span> By <a href='https://github.com/anasdwc/'> Annas Dwi</a></p>
  </div>
`;

export { headerTemplate, footerTemplate };
