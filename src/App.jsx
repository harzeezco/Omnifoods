import "./App.scss";
import Home from "./routes/Home/Home-component";
import Navigation from "./routes/Navigation/Navigation-component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/Sign in/Sign-In-component";
import Cart from "./components/Cart/Cart";
import Product from "./pages/Products/Product-component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
