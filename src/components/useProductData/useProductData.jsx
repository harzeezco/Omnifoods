import { useEffect, useState } from "react";
import axios from "axios";
const api = "77e0cf593adc4f83925b8a09d74d74dc440";
const spoonacularApiKey = "0c24b2bd0652462d9347c129dce82282";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularApiKey}&number=30`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make API call and retrieve product data using Axios

        const response = await axios.get(apiUrl);
        setProducts(response.data.recipes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

export default useProductData;
