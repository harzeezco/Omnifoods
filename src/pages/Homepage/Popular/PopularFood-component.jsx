import "./PopularFood-component.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import PopularFoodsCard from "../../../components/PoplarFoods-Card/PopularFoods-Card-component";
import Button from "../../../components/Button/Button-component";

import "glidejs/dist/css/glide.core.min.css"; // Import Glide.js CSS
import Glide from "@glidejs/glide";

const apiKey = "0c24b2bd0652462d9347c129dce82282";

const api = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`;

const PopularFood = () => {
  const [popularRecipe, setPopularRecipe] = useState([]);

  useEffect(() => {
    axios.get(api).then((response) => {
      setPopularRecipe(response.data.recipes);
    });
  }, []);

  return (
    <div>
      <div className="popular-Foods-head">
        <h1>Popular Foods</h1>
        <Button buttonType={"seeAll"}>See All</Button>
      </div>

      <div className="popular-recipe-container">
        {popularRecipe.map((popularRecipeItem) => (
          <div key={popularRecipeItem.id}>
            <PopularFoodsCard popularRecipeItem={popularRecipeItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFood;
