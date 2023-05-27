import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { SearchProvider } from "./contexts/Search-Context.jsx";
import { ProductProvider } from "./contexts/Product-Context.jsx";
import { CartProvider } from "./contexts/Cart-Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
