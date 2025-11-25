/*document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  if (!recipeId) {
    document.getElementById("recipe-detail").innerHTML =
      "<p>No recipe found.</p>";
    return;
  }

  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const recipe = recipes.find((r) => r.id == recipeId);

  if (!recipe) {
    document.getElementById("recipe-detail").innerHTML =
      "<p>Recipe not found.</p>";
    return;
  }

  document.getElementById("recipe-detail").innerHTML = `
        <div class="recipe-full-card">
            <h2>${recipe.title}</h2>
            <img src="${
              recipe.image ||
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=60"
            }" alt="${recipe.title}" >

            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <p><strong>Prep Time:</strong> ${recipe.prepTime} mins</p>

            <h3>Description</h3>
            <p>${recipe.description}</p>

            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
            </ul>

            <h3>Steps</h3>
            <ol>
                ${recipe.steps.map((s) => `<li>${s}</li>`).join("")}
            </ol>

            <a class="btn" href="add-edit.html?id=${recipe.id}">Edit</a>

            <button onclick="deleteRecipe('${recipe.id}')" class="btn delete">
                Delete Recipe
            </button>
        </div>
    `;
});

function deleteRecipe(id) {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes = recipes.filter((r) => r.id != id);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  window.location.href = "index.html";
} */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  if (!recipeId) {
    document.getElementById("recipe-detail").innerHTML =
      "<p>No recipe found.</p>";
    return;
  }

  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const recipe = recipes.find((r) => r.id == recipeId);

  if (!recipe) {
    document.getElementById("recipe-detail").innerHTML =
      "<p>Recipe not found.</p>";
    return;
  }

  document.getElementById("recipe-detail").innerHTML = `
        <div class="recipe-full-card">
            <h2>${recipe.title}</h2>
            <img src="${
              recipe.image ||
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=60"
            }" alt="${recipe.title}" >

            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <p><strong>Prep Time:</strong> ${recipe.prepTime} mins</p>

            <h3>Description</h3>
            <p>${recipe.description}</p>

            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
            </ul>

            <h3>Steps</h3>
            <ol>
                ${recipe.steps.map((s) => `<li>${s}</li>`).join("")}
            </ol>

            <a class="btn" href="add-edit.html?id=${recipe.id}">Edit</a>

            <button id="delete-btn" class="btn delete">
                Delete Recipe
            </button>
        </div>
    `;

  const deleteBtn = document.getElementById("delete-btn");
  deleteBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(recipe.id);
        Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
      }
    });
  });
});

function deleteRecipe(id) {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes = recipes.filter((r) => r.id != id);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}
