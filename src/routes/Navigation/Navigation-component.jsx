import "./Navigation-component.scss";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button-component";
import Searchbar from "../../components/Searchbar/Searchbar-component";

import OmniLogo from "../../assets/omnifood-logo.png";
import CartIcon from "../../assets/shopping-bag.svg";

const Navigation = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="logo" src={OmniLogo} alt="Brand Logo" />
        </Link>

        <Searchbar />

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

          <Link to="/product">
            <Button buttonType="productBtn">Products</Button>
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
