import { useEffect, useState } from "react";
import axios from "axios";

const appId = "6c5f7912&";
const apiKey = "c643403c391b33ea86e78eab98f8dd99%09";

const useFetch = (url) => {
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${url}&app_id=${appId}&app_key=${apiKey}`;

  const [recipe, setRecipe] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  // 77e0cf593adc4f83925b8a09d74d74dc440
  // const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0c24b2bd0652462d9347c129dce82282&number=30&includeIngredients=${apiUrl}`;

  // useEffect(() => {
  //   axios.get(api).then((response) => {
  //     setDetails(response.data);
  //     setLoading(false);
  //   });
  // }, []);

  // console.log(details);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setRecipe(response.data.hits);
      setLoading(false);
    });
  }, [url, apiUrl]);

  return { loading, setRecipe, recipe };
};

export default useFetch;
