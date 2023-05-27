import { useContext } from "react";

// import PropTypes from 'prop-types';

import "./CartItem.styles.scss";
import { CartContext } from "../../contexts/Cart-Context";

const CartItem = ({ cartItem }) => {
  const { handleCartDelete } = useContext(CartContext);

  const { title, id, image, pricePerServing, sourceName, readyInMinutes } =
    cartItem;

  const formattedNumber = pricePerServing.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="display-flex cart--item-content cart--item-container">
      <img src={image} alt="" />
      <div>
        <div className="display-flex">
          <h1>{title.slice(0, 20)}</h1>
          <span className="delete-icon">
            <i
              className="fa-solid fa-trash"
              onClick={() => handleCartDelete(id)}
            ></i>
          </span>
        </div>
        <h2>{sourceName}</h2>
        <div className="cart--item-desc">
          <div className="display-flex">
            <span>Price</span>
            <span className="price">${formattedNumber}</span>
          </div>
          <div className="display-flex">
            <span>Shipping Cost</span>
            <span className="price">$0</span>
          </div>
        </div>
        <div className="display-flex cart--item-total">
          <span>Total</span>
          <span className="cart-total">$9</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
