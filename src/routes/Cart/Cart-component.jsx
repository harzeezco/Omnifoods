import "./Cart.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart-Context";
import CartItem from "../../components/CartItem/CartItem-component";
import CartCheckout from "../../components/CartCheckout/CartCheckout-component";

const Cart = () => {
  const { cartProduct } = useContext(CartContext);

  return (
    <div className="cart--container">
      <h1 className="cart--heading">Shopping Cart</h1>

      <div className="cart--length">
        <h2>{cartProduct.length} Products In Cart</h2>
      </div>

      <div className="cart--product-container">
        <div className="cart--product">
          {cartProduct.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>

        <CartCheckout />
      </div>
    </div>
  );
};

export default Cart;
