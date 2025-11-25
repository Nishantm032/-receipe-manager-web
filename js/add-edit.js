function initForm() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const formTitle = document.getElementById("form-title");
  const form = document.getElementById("recipe-form");

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

    if (!newRecipe.title) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Title",
        text: "Please enter a recipe title.",
      });
    }

    if (!newRecipe.description) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Description",
        text: "Description is required.",
      });
    }

    if (!form.ingredients.value.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Ingredients Required",
        text: "Please enter at least one ingredient.",
      });
    }

    if (!form.steps.value.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Steps",
        text: "Cooking steps cannot be empty.",
      });
    }

    if (!newRecipe.prepTime || newRecipe.prepTime <= 0) {
      return Swal.fire({
        icon: "warning",
        title: "Invalid Preparation Time",
        text: "Preparation time must be greater than 0 minutes.",
      });
    }

    if (id) updateRecipe(newRecipe);
    else addRecipe(newRecipe);

    Swal.fire({
      icon: "success",
      title: "Recipe Saved!",
      text: "Your recipe has been successfully saved.",
      timer: 1300,
      showConfirmButton: false,
    }).then(() => {
      window.location.href = "index.html";
    });
  });
}

initForm();
