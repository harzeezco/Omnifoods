import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import useFetch from "../../components/useFetchApi/useFetch";

const ProductDescription = () => {
  const { calories } = useParams();

  const { recipe } = useFetch();

  const recipeDetails = recipe.find(
    (recipeItem) => recipeItem.calories === calories
  );
  console.log(recipe);

  return <div>hello productDesc</div>;
};

export default ProductDescription;
