import PropTypes from "prop-types";
import { useState, createContext } from "react";

export const CartContext = createContext();

const onClickCartProduct = (cartProduct, addToCart) => {
  const isCartAdd = cartProduct.find((cart) => cart.id === addToCart.id);

  if (isCartAdd) {
    return cartProduct.map((cartItem) => {
      return cartItem.id === addToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartProduct, { ...addToCart, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const setAddToCart = (addToCart) => {
    setCartProduct(onClickCartProduct(cartProduct, addToCart));
  };

  const value = { cartProduct, setCartProduct, setAddToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
