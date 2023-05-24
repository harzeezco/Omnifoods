import "./App.scss";
import Home from "./routes/Home/Home-component";
import Navigation from "./routes/Navigation/Navigation-component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/Sign in/Sign-In-component";
import Cart from "./routes/Cart/Cart-component";
import Product from "./routes/Product/Product-component";
import ProductDescription from "./routes/ProductDescription/ProductDescription-component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path=":inputValue" element={<Product />}></Route>
          <Route
            path=":inputValue/:calories"
            element={<ProductDescription />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
