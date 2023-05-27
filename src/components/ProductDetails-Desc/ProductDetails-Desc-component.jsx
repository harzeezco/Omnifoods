import { useContext, useEffect } from "react";
import "./ProductDetails.styles.scss";
import { ProductContext } from "../../contexts/Product-Context";

const ProductDetailsDesc = ({ details }) => {
  const { setProduct } = useContext(ProductContext);
  const { image, title, summary, pricePerServing, dishTypes } = details;

  useEffect(() => {
    setProduct({ title, dishTypes });
  }, []);

  return <div>hello</div>;
};

export default ProductDetailsDesc;
