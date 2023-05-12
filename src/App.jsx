import "./App.scss";
import Home from "./routes/Home/Home-component";
import Navigation from "./routes/Navigation/Navigation-component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/Sign in/Sign-In-component";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";


// const apiUrl =
//   "https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=6c5f7912&app_key=c643403c391b33ea86e78eab98f8dd99%09";

const App = () => {
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   return async () => {
  //     const result = await axios.get(apiUrl);
  //     console.log(result.data.hits);
  //   };
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
