import OmniLogo from "../../assets/omnifood-logo.png";
import CartIcon from "../../assets/money.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Navigation-component.scss";
import Searchbox from "../../components/Searchbar/Searchbox-component";

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
            <img className="cart__icon" src={CartIcon} alt="Cart Icon" />
          </Link>
          <Link to="/signIn">
            <button className="btn--link">
              <span className="icon icon__avatar"></span>
            </button>
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
