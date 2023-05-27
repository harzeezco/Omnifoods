import { useContext } from "react";
import "./ProductDetails.styles.scss";
import { ProductContext } from "../../contexts/Product-Context";

const ProductDetailsHeader = () => {
  const { product } = useContext(ProductContext);

  const { title, dishTypes } = product;
  //   console.log(product);
  return (
    <header className="product--details product--bg__img">
      <div className="product--overlay">
        <div className="product--details__title">
          <div className="product-title">{dishTypes}</div>
          <div className="product-dishType">{title}</div>
        </div>
      </div>
    </header>
  );
};

export default ProductDetailsHeader;
