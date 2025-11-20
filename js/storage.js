function getRecipes() {
  return JSON.parse(localStorage.getItem("recipes")) || [];
}

function saveRecipes(recipes) {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function preloadInitialRecipes() {
  const existing = localStorage.getItem("recipes");

  if (!existing || JSON.parse(existing).length === 0) {
    const sampleRecipe = [
      {
        id: Date.now() + 1,
        title: "Rajasthani Dal",
        description:
          "This is the recipe of one of my favourite foods — Dal in authentic Rajasthani style. I usually cook it on weekends for two people. It usually takes about 30 minutes.",
        ingredients: [
          // Pulses
          "Moong dal – 10 grams",
          "Masoor dal – 20 grams",
          "Toor dal – 15 grams",
          "Chana dal – 10 grams",
          "Peanuts – 15 grams",

          // Vegetables & Spices
          "1 chopped onion",
          "2 chopped green chillies",
          "2 chopped tomatoes",
          "1 tbsp turmeric powder",
          "1 tbsp coriander powder",
          "1 tbsp red chilli powder",
          "1 tsp black pepper powder",
          "1/2 tbsp cumin seeds",
          "1 tbsp garam masala",
          "1 tbsp ginger-garlic paste",
          "Salt (as per taste)",

          // Oils & Fats
          "3 tbsp mustard oil",
          "30 grams butter",
        ],
        steps: [
          "Wash the pulses and soak them for 5 minutes.",
          "Wash the pulses again and soak them once more.",
          "Put all pulses in a pressure cooker. Add 1 cup water, 1 spoon turmeric powder, 1 spoon mustard oil, and 1 spoon salt.",
          "Turn on the gas and cook on medium flame for 5 whistles. Check if pulses are boiled.",
          "Transfer the cooked pulses to another utensil and wash the cooker.",
          "Add 2.5 spoons mustard oil in the cooker and heat on low flame for 30 seconds. Add cumin seeds and chopped green chillies. Sauté for 1 minute.",
          "Add chopped onion and cook until golden. Then add chopped tomato and half spoon salt. Fry for 2 minutes.",
          "Add coriander powder, 1 spoon garam masala, and half spoon garlic. Fry for 2 minutes.",
          "Add the boiled pulses back to the cooker. Add water and mix well.",
          "Add butter, bay leaf, and chopped coriander leaves. Cook on low flame for 5 minutes and turn off gas.",
          "Let it rest for 10 minutes so the dal thickens. Serve hot with rice or roti.",
        ],
        prepTime: 30,
        difficulty: "Easy",
        image: "./images/rajasthani dal.jpg",
      },
    ];
    localStorage.setItem("recipes", JSON.stringify(sampleRecipe));
  }
}
