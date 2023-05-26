import "./RecipeProduct.styles.scss";
import useFetch from "../../components/useFetchApi/useFetch";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard-component";
import useProductData from "../../components/useProductData/useProductData";

const RecipeProducts = () => {
  const { inputValue } = useParams();

  const { loading, products } = useProductData();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="product-directory-container">
      <div className="product-directory-heading">
        <h2>
          {inputValue} <span>Products</span>
        </h2>
      </div>
      <div className="product-directory-content">
        {!loading &&
          products.map((product) => {
            return <ProductCard key={product.id} recipe={product} />;
          })}
      </div>
    </div>
  );
};

export default RecipeProducts;
