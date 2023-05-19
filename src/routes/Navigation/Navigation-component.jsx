import OmniLogo from "../../assets/omnifood-logo.png";
import CartIcon from "../../assets/shopping-bag.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Navigation-component.scss";
import Searchbox from "../../components/Searchbar/Searchbox-component";
import Button from "../../components/Button/Button-component";

const Navigation = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="logo" src={OmniLogo} alt="Brand Logo" />
        </Link>

        <Searchbox />

        <nav className="nav__container">
          <Link to="/cart">
            <div className="cart__icon-container">
              <img className="cart__icon" src={CartIcon} alt="Cart Icon" />
            </div>
          </Link>
          <Link to="/signIn">
            <button className="btn--link">
              <span className="icon icon__avatar"></span>
            </button>
          </Link>

          <div style={{ marginLeft: "20px" }}>
            <Button buttonType="seeAll">Products</Button>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
