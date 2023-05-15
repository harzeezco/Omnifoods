import { SearchContext } from "../../contexts/Search-Context";

import axios from "axios";
import { useEffect, useContext } from "react";

const appId = "6c5f7912&";
const appKey = "c643403c391b33ea86e78eab98f8dd99%09";

const Product = () => {
  const { recipe } = useContext(SearchContext);

  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${appId}&app_key=${appKey}`;

  useEffect(() => {
    return async () => {
      const result = await axios.get(apiUrl);
      console.log(result);
    };
  }, []);

  return <div></div>;
};

export default Product;
