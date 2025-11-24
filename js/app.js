const STORAGE_KEY = "recipes";

function getRecipes() {
  let recipes = localStorage.getItem(STORAGE_KEY);

  try {
    recipes = recipes ? JSON.parse(recipes) : [];
  } catch {
    recipes = [];
    saveRecipes(recipes);
  }
  return recipes;
}

function saveRecipes(recipes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

function preloadInitialRecipes() {
  let recipes = getRecipes();

  // If recipes is missing, null, invalid, or empty → load samples
  if (!Array.isArray(recipes) || recipes.length === 0) {
    const initial = [
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
        image: "./images/rajasthan-dall.jpg",
      },
      {
        id: Date.now() + 2,
        title: "Aloo Paratha",
        description: "Classic stuffed Indian flatbread.",
        ingredients: [
          // Dough
          "Wheat flour – 2 cups",
          "Salt – 1/2 tsp",
          "Water – as needed",
          "1 tbsp oil (optional)",

          // Potato Stuffing
          "3 boiled potatoes (medium-sized)",
          "1 chopped onion",
          "2 chopped green chillies",
          "1 tbsp coriander powder",
          "1 tbsp red chilli powder",
          "1 tsp garam masala",
          "1/2 tbsp amchur (dry mango powder)",
          "1 tbsp ginger-garlic paste",
          "Fresh coriander leaves – chopped",
          "Salt (as per taste)",

          // Cooking
          "Ghee or oil – for roasting",
        ],
        steps: [
          // Dough Preparation
          "Take wheat flour in a bowl, add 1/2 tsp salt. Mix well.",
          "Add water slowly and knead into a soft dough. Add 1 tbsp oil if needed.",
          "Cover the dough and rest for 10–15 minutes.",

          // Stuffing Preparation
          "Peel and mash the boiled potatoes in a bowl.",
          "Add chopped onions, green chillies, coriander powder, red chilli powder, garam masala, amchur, ginger-garlic paste, salt and coriander leaves.",
          "Mix everything properly to make a smooth stuffing.",

          // Paratha Forming
          "Take a small dough ball and roll it into a small circle.",
          "Place 2–3 spoons of potato stuffing in the center.",
          "Close the edges gently and seal it completely.",
          "Dust with flour and roll the stuffed dough slowly into a thick paratha.",

          // Cooking
          "Heat a tawa on medium flame. Place the paratha on the tawa.",
          "Cook one side until small bubbles appear. Flip the paratha.",
          "Apply ghee or oil on both sides and cook until golden brown and crispy.",
          "Repeat for all parathas.",

          // Serving
          "Serve hot with curd, pickle, or butter.",
        ],
        prepTime: 40,
        difficulty: "Easy",
        image: "./images/allo-parathaa.jpg",
      },
      {
        id: Date.now() + 3,
        title: "Masala Dosa",
        description: "Crispy dosa with spiced potato filling.",
        ingredients: [
          // Dosa Batter
          "Dosa batter – 3 cups",
          "Oil or ghee – for cooking",

          // Potato Masala
          "4 boiled potatoes (medium size)",
          "1 chopped onion",
          "2 chopped green chillies",
          "1 tbsp ginger-garlic paste",
          "1/2 tbsp mustard seeds",
          "1/2 tbsp cumin seeds",
          "10–12 curry leaves",
          "1/2 tbsp turmeric powder",
          "1 tbsp coriander powder",
          "1/2 tbsp red chilli powder",
          "Salt (as per taste)",
          "Fresh coriander leaves – chopped",
          "1 tbsp oil",

          // Optional
          "1 tbsp lemon juice (optional)",
        ],

        steps: [
          // Potato Masala Preparation
          "Peel and mash the boiled potatoes lightly (keep them chunky).",
          "Heat 1 tbsp oil in a pan. Add mustard seeds, cumin seeds, and curry leaves. Let them splutter.",
          "Add chopped onions and green chillies. Sauté until light golden.",
          "Add ginger-garlic paste and cook for 1 minute.",
          "Add turmeric, coriander powder, red chilli powder, and salt. Fry for 30 seconds.",
          "Add the mashed potatoes and mix well.",
          "Add 1/4 cup water to make the masala soft. Cook for 2–3 minutes.",
          "Add chopped coriander and lemon juice if using. Mix and turn off flame.",

          // Dosa Preparation
          "Heat a dosa tawa and sprinkle a few drops of water to check heat.",
          "Wipe the tawa and spread one ladle of dosa batter in a circular motion.",
          "Drizzle a little oil or ghee around the edges.",
          "Cook on medium flame until dosa becomes golden and crispy.",
          "Place 2–3 spoons of potato masala inside and fold the dosa.",

          // Serving
          "Serve hot with coconut chutney and sambar.",
        ],
        prepTime: 50,
        difficulty: "Medium",
        image: "./images/masala-dosaa.jpg",
      },

      {
        id: Date.now() + 6,
        title: "Veg Biryani",
        description: "Aromatic basmati rice cooked with vegetables and spices.",
        ingredients: [
          // Rice
          "Basmati rice – 2 cups",
          "Water – for boiling",
          "1 bay leaf",
          "2 cloves",
          "1 cinnamon stick",
          "1 tbsp oil",
          "Salt – as per taste",

          // Vegetables
          "1 cup mixed vegetables (carrot, beans, peas, cauliflower, potatoes)",
          "1 large onion – thinly sliced",
          "2 tomatoes – chopped",
          "2 green chillies – slit",
          "1 tbsp ginger-garlic paste",

          // Spices
          "1 tbsp biryani masala",
          "1/2 tbsp red chilli powder",
          "1/2 tbsp turmeric powder",
          "1 tbsp coriander powder",
          "1/2 tbsp cumin seeds",

          // For Richness
          "1/2 cup yogurt (curd)",
          "2 tbsp oil or ghee",

          // Herbs
          "Fresh coriander leaves – chopped",
          "Fresh mint leaves – chopped",
        ],

        steps: [
          // Rice Preparation
          "Wash the basmati rice 2–3 times and soak for 20 minutes.",
          "Boil water in a large pot. Add bay leaf, cloves, cinnamon, salt, and 1 tbsp oil.",
          "Add soaked rice and cook until 80% done (grains should be firm).",
          "Drain the rice and keep aside.",

          // Vegetable Masala
          "Heat 2 tbsp oil or ghee in a pan.",
          "Add cumin seeds and let them splutter.",
          "Add sliced onions and sauté until golden brown.",
          "Add green chillies and ginger-garlic paste. Cook for 1 minute.",
          "Add tomatoes and cook until soft.",
          "Add turmeric, red chilli powder, coriander powder, biryani masala, and salt.",
          "Mix well and cook for 1 minute.",
          "Add mixed vegetables and cook for 5–7 minutes.",
          "Add yogurt, mix well, and cook until vegetables are almost done.",
          "Add chopped coriander and mint leaves.",

          // Layering
          "In a heavy-bottom pot, spread a thin layer of rice.",
          "Add a layer of vegetable masala.",
          "Repeat layers of rice and masala until everything is used.",
          "Top with a final layer of rice and sprinkle coriander/mint.",

          // Dum Cooking
          "Cover the pot tightly with a lid.",
          "Cook on low flame for 10–12 minutes (dum).",
          "Turn off flame and rest for 5 minutes before opening.",

          // Serving
          "Fluff gently and serve hot with raita, chutney, or salad.",
        ],
        prepTime: 60,
        difficulty: "Hard",
        image: "./images/vegg-biryani.jpg",
      },
      {
        id: Date.now() + 7,
        title: "Pav Bhaji",
        description: "Spiced vegetable mash served with buttered bread rolls.",
        ingredients: [
          "Potatoes",
          "Tomatoes",
          "Mixed vegetables",
          "Pav bhaji masala",
          "Butter",
          "Bread rolls",
        ],
        steps: [
          "Boil vegetables",
          "Mash and cook with masala",
          "Serve with buttered pav",
        ],
        prepTime: 40,
        difficulty: "Easy",
        image: "./images/paw-bhajii.jpg",
      },
      {
        id: Date.now() + 8,
        title: "Gulab Jamun",
        description: "Soft and spongy milk-based sweet soaked in sugar syrup.",
        ingredients: [
          "Milk powder",
          "Maida",
          "Ghee",
          "Sugar",
          "Cardamom",
          "Rose water",
        ],
        steps: [
          "Prepare dough",
          "Shape into balls",
          "Fry until golden",
          "Soak in sugar syrup",
          "Serve warm or cold",
        ],
        prepTime: 45,
        difficulty: "Medium",
        image: "./images/gulabb-jamun.jpg",
      },
      {
        id: Date.now() + 9,
        title: "Rajma Masala",
        description: "Kidney beans cooked in a rich onion-tomato gravy.",
        ingredients: [
          "Kidney beans",
          "Onion",
          "Tomatoes",
          "Ginger-garlic paste",
          "Spices",
          "Oil",
          "Coriander",
        ],
        steps: [
          "Soak and boil rajma",
          "Prepare onion-tomato masala",
          "Cook beans in masala",
          "Simmer and serve with rice",
        ],
        prepTime: 50,
        difficulty: "Hard",
        image: "./images/rajmaa-masala.jpg",
      },
    ];

    saveRecipes(initial);
  }
}

function getRecipeById(id) {
  return getRecipes().find((r) => r.id === id);
}

function addRecipe(recipe) {
  const recipes = getRecipes();
  recipes.push(recipe);
  saveRecipes(recipes);
}

function updateRecipe(updatedRecipe) {
  const recipes = getRecipes();
  const index = recipes.findIndex((r) => r.id === updatedRecipe.id);
  if (index !== -1) {
    recipes[index] = updatedRecipe;
    saveRecipes(recipes);
  }
}

function deleteRecipe(id) {
  let recipes = getRecipes();
  recipes = recipes.filter((r) => r.id !== id);
  saveRecipes(recipes);
}
