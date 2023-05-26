import { useContext } from "react";
import { CartContext } from "../../contexts/Cart-Context";

import { useNavigate, useParams } from "react-router-dom";

import "./ProductCard-component.scss";

import PropTypes from "prop-types";

const ProductCard = ({ recipe }) => {
  const { setAddToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const { title, id, image, pricePerServing, sourceName, readyInMinutes } =
    recipe;

  const handleCartProduct = () => setAddToCart(recipe);

  const handLeProductRoute = () => navigate(`/product/${id}`);

  const formattedNumber = pricePerServing.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <div>
      {image && (
        <div className="product">
          <div className="product--content">
            <div className="product__image-container">
              <img
                src={image}
                className="product__image"
                alt={`${title} image`}
              />
              <span
                className="product__cart-content"
                onClick={handleCartProduct}
              >
                <i className="fa-regular fa-heart product__cart-content_icon" />
              </span>
            </div>
            <div className="product--content-desc">
              <h3 className="product--title">{title.slice(0, 25)}</h3>
              <h5 className="history">
                <i className="fa-regular fa-clock" /> {sourceName}
              </h5>

              <div className="product--foot-content">
                <div>
                  <span className="rating">
                    <i className="fa-sharp fa-solid fa-star" /> rating
                  </span>
                  <span className="review">{readyInMinutes}</span>
                </div>
                <p className="price">${formattedNumber}</p>
              </div>
            </div>
          </div>
          <button onClick={handLeProductRoute} className="product-button">
            More Info
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
