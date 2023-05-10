import Hero from "../../pages/Homepage/Hero/Hero-component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Home;
