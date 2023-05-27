import PropTypes from "prop-types";
import { useState, createContext, useEffect } from "react";

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
  const [cartTotal, setCartTotal] = useState(null);

  const handleCartDelete = (id) => {
    setCartProduct(cartProduct.filter((cartProduct) => cartProduct.id !== id));
  };

  useEffect(() => {
    const addAllCart = cartProduct.reduce((acc, item) => acc + item, 0);
  }, []);

  console.log(cartProduct);
  const setAddToCart = (addToCart) => {
    setCartProduct(onClickCartProduct(cartProduct, addToCart));
  };

  const value = { cartProduct, setCartProduct, setAddToCart, handleCartDelete };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
