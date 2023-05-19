import { useEffect, useState } from "react";
import axios from "axios";

const appId = "6c5f7912&";
const apiKey = "c643403c391b33ea86e78eab98f8dd99%09";

const useFetch = (url) => {
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${url}&app_id=${appId}&app_key=${apiKey}`;

  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setRecipe(response.data.hits);
      setLoading(false);
    });
  }, [url, apiUrl]);

  return { loading, setRecipe, recipe };
};

export default useFetch;
