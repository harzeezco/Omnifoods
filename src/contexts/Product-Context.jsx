import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = { product, loading, setProduct };

  return (
    <ProductContext.Provider value={value}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
