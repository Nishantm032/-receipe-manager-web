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
        image: "./images/rajasthani dal.jpg",
      },

      {
        id: Date.now() + 1,
        title: "Paneer Butter Masala",
        description: "Creamy, rich paneer curry.",
        ingredients: ["Paneer", "Butter", "Tomatoes", "Cream", "Spices"],
        steps: ["Sauté masala", "Add tomato puree", "Cook paneer", "Serve hot"],
        prepTime: 35,
        difficulty: "Medium",
        image: "./images/panner butter masala.jpg",
      },
      {
        id: Date.now() + 2,
        title: "Aloo Paratha",
        description: "Classic stuffed Indian flatbread.",
        ingredients: ["Wheat flour", "Potatoes", "Onions", "Spices"],
        steps: ["Prepare dough", "Mash potatoes", "Stuff", "Cook"],
        prepTime: 40,
        difficulty: "Easy",
        image: "./images/allo-paratha.jpg",
      },
      {
        id: Date.now() + 3,
        title: "Masala Dosa",
        description: "Crispy dosa with spiced potato filling.",
        ingredients: ["Batter", "Potatoes", "Onions", "Spices"],
        steps: ["Prepare masala", "Spread batter", "Fill", "Serve"],
        prepTime: 50,
        difficulty: "Medium",
        image: "./images/masala-dosa.jpg",
      },

      {
        id: Date.now() + 6,
        title: "Veg Biryani",
        description: "Aromatic basmati rice cooked with vegetables and spices.",
        ingredients: [
          "Basmati rice",
          "Mixed vegetables",
          "Onion",
          "Tomatoes",
          "Biryani masala",
          "Yogurt",
          "Coriander",
          "Mint",
        ],
        steps: [
          "Cook rice",
          "Prepare vegetable masala",
          "Layer rice and vegetables",
          "Cook on dum",
          "Serve hot with raita",
        ],
        prepTime: 60,
        difficulty: "Medium",
        image: "./images/veg-biryani.jpg",
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
        image: "./images/paw-bhaji.jpg",
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
        image: "./images/gulab-jamun.jpg",
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
        difficulty: "Medium",
        image: "./images/rajma-masala.jpg",
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
