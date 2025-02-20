const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const recipeContainer = document.getElementById('recipe-cont');

searchBtn.addEventListener('click', searchRecipes);

fetch('https://dummyjson.com/recipes')
  .then(response => response.json())
  .then(data => renderRecipes(data.recipes));

function searchRecipes() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => renderRecipes(data.recipes));
  }
}

function renderRecipes(recipes) {
  recipeContainer.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>
      <p>Price: ${recipe.price}</p>
    `;
    recipeContainer.appendChild(recipeCard);
  });
}