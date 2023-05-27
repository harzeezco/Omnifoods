import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDetailsDesc from "../../../components/ProductDetails-Desc/ProductDetails-Desc-component";
import ProductDetailsHeader from "../../../components/ProductsDetailsHeader/ProductDetailsHeader";

const spoonacularApiKey = "0c24b2bd0652462d9347c129dce82282";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${spoonacularApiKey}`
      );
      const data = await api.json();
      setDetails([data]);
    };
    getPopular();
  }, [id]);
  return (
    <div>
      <div className="product-details">
        <ProductDetailsHeader />
      </div>

      <>
        {details.map((detailItem) => (
          <ProductDetailsDesc key={detailItem.id} details={detailItem} />
        ))}
      </>
    </div>
  );
};

export default ProductDetails;
