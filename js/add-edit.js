function initForm() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const formTitle = document.getElementById("form-title");
  const form = document.getElementById("recipe-form");
  const errorDiv = document.getElementById("error");

  if (id) {
    const recipe = getRecipeById(Number(id));
    if (recipe) {
      formTitle.textContent = "Edit Recipe";
      form.title.value = recipe.title;
      form.description.value = recipe.description;
      form.ingredients.value = recipe.ingredients.join(", ");
      form.steps.value = recipe.steps.join(", ");
      form.prepTime.value = recipe.prepTime;
      form.difficulty.value = recipe.difficulty;
      form.image.value = recipe.image;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorDiv.textContent = "";

    console.log("hi");

    const newRecipe = {
      id: id ? Number(id) : Date.now(),
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      ingredients: form.ingredients.value.split(",").map((i) => i.trim()),
      steps: form.steps.value.split(",").map((s) => s.trim()),
      prepTime: Number(form.prepTime.value),
      difficulty: form.difficulty.value,
      image: form.image.value.trim(),
    };

    console.log(newRecipe);
    console.log(!newRecipe.title);

    if (!newRecipe.title || !newRecipe.description) {
      errorDiv.textContent = "Title and Description are required!";
      console.log(errorDiv);
      return;
    }

    if (id) updateRecipe(newRecipe);
    else addRecipe(newRecipe);

    window.location.href = "index.html";
  });
}

initForm();
