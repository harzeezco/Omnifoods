import SearchBurger from "../assets/suggestions/burger.jpeg";
import SearchChicken from "../assets/suggestions/chicken.jpeg";
import SearchPizza from "../assets/suggestions/pizza.jpeg";
import SearchRice from "../assets/suggestions/Rice.jpeg";
import FoodCategory from "../assets/categories/Foods.jpeg";
import IngredientCategory from "../assets/categories/Ingredients.jpeg";
import MenuCategory from "../assets/categories/menu.jpeg";
import RecipeCategory from "../assets/categories/Recipe.jpeg";

export const SearchSuggestionImages = [
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
