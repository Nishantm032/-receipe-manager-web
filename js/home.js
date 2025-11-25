function displayRecipes(recipes) {
  const list = document.getElementById("recipe-list");
  list.innerHTML = "";

  if (!recipes.length) {
    list.innerHTML = `
      <p class="no-recipes">No recipes found</p>
    `;
    return;
  }

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${
              recipe.image ||
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=60"
            }" alt="${recipe.title}">
            <div class="card-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description.substring(0, 50)}...</p>
                <p>⏱ ${recipe.prepTime} mins | ⭐ ${recipe.difficulty}</p>
                <a href="receipe.html?id=${
                  recipe.id
                }" class="btn view-btn">View</a>
            </div>
        `;
    list.appendChild(card);
  });
}

function applyFilters() {
  let recipes = getRecipes();

  const search = document.getElementById("search").value.toLowerCase();
  const diff = document.getElementById("difficultyFilter").value;
  const maxTimeInput = document.getElementById("maxPrepTime").value;
  const maxTime = Number(maxTimeInput);

  recipes = recipes.filter((r) => r.title.toLowerCase().includes(search));

  if (diff !== "All") {
    recipes = recipes.filter((r) => r.difficulty === diff);
  }

  if (maxTimeInput.trim() !== "") {
    if (maxTime <= 0) {
      recipes = [];
    } else {
      recipes = recipes.filter((r) => r.prepTime <= maxTime);
    }
  }

  displayRecipes(recipes);
}

function initHome() {
  preloadInitialRecipes();

  displayRecipes(getRecipes());

  document.getElementById("search").addEventListener("input", applyFilters);
  document
    .getElementById("difficultyFilter")
    .addEventListener("change", applyFilters);
  document
    .getElementById("maxPrepTime")
    .addEventListener("input", applyFilters);
}

initHome();
