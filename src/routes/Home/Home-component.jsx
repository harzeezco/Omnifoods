import './Home-component.scss'

import Categories from "../../pages/Homepage/Categories/Categories-component";
import Hero from "../../pages/Homepage/Hero/Hero-component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <div>
        <Hero />
        <div className="home--content">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Home;
