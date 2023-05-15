import SearchBurger from "../assets/suggestions/burger.jpeg";
import SearchChicken from "../assets/suggestions/chicken.jpeg";
import SearchPizza from "../assets/suggestions/pizza.jpeg";
import SearchRice from "../assets/suggestions/Rice.jpeg";
import FoodCategory from "../assets/categories/Foods.jpeg";
import IngredientCategory from "../assets/categories/Ingredients.jpeg";
import MenuCategory from "../assets/categories/menu.jpeg";
import RecipeCategory from "../assets/categories/Recipe.jpeg";

export const SearchImage = [
  {
    img: SearchBurger,
    name: "Burger",
    id: 0,
  },
  {
    img: SearchChicken,
    name: "Chicken",
    id: 1,
  },
  {
    img: SearchPizza,
    name: "Pizza",
    id: 2,
  },
  {
    img: SearchRice,
    name: "Rice",
    id: 3,
  },
];

export const CategoryData = [
  {
    img: FoodCategory,
    name: "Foods",
    title: "chinese",
    rating: "4.6",
    product: 76,
  },
  {
    img: IngredientCategory,
    name: "Ingredient",
    title: "Health",
    rating: "4.7",
    product: 58,
  },
  {
    img: MenuCategory,
    name: "Menu",
    title: "Tandoor",
    rating: "4.4",
    product: 65,
  },
  {
    img: RecipeCategory,
    name: "Recipe",
    title: "chinese",
    rating: "4.8",
    product: 44,
  },
];

// import { useState, useEffect } from 'react';

// function RecipeSearch() {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);

//   const appId = 'YOUR_APP_ID';
//   const appKey = 'YOUR_APP_KEY';

//   useEffect(() => {
//     async function getRecipes() {
//       const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
//       const data = await response.json();
//       setRecipes(data.hits);
//     }
//     getRecipes();
//   }, [query]);

//   function handleInputChange(event) {
//     setQuery(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={query} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       {recipes.map(recipe => (
//         <div key={recipe.recipe.uri}>
//           <h2>{recipe.recipe.label}</h2>
//           <img src={recipe.recipe.image} alt={recipe.recipe.label} />
//           <ul>
//             {recipe.recipe.ingredients.map(ingredient => (
//               <li key={ingredient.text}>{ingredient.text}</li>
//             ))}
//           </ul>
//           <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
//         </div>
//       ))}
//     </div>
//   );
// }