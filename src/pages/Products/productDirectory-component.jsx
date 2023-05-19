import "./ProductDirectory.styles.scss";
import useFetch from "../../components/useFetchApi/useFetch";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard-component";

const ProductDirectory = () => {
  const { inputValue } = useParams();

  const { loading, recipe } = useFetch(inputValue);

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
          recipe.map((product) => {
            const { recipe } = product;

            return <ProductCard key={recipe.calories} recipe={recipe} />;
          })}
      </div>
    </div>
  );
};

export default ProductDirectory;
