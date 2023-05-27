import ProductDetails from "../../pages/Products/ProductDetails/ProductDetails-component";

import RecipeProducts from "../../pages/Products/Allproducts/RecipeProduct-component";

import { Route, Routes } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <Routes>
        <Route index element={<RecipeProducts />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Product;
