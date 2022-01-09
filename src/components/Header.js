import React from "react";
import amazonLogo from "../images/header/amazon-logo-white.svg";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingIconBasket from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { useStateValues } from "./store/StateProvider";
import { auth } from "./routes/login/firebase";

function Header() {
  const [{ basket, user }] = useStateValues();
  //console.log("user: ", user);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <nav className="header">
        <div className="header-links-container">
          <Link to="/">
            <img className="header-logo" src={amazonLogo} alt="Amazon Logo" />
          </Link>

          <div className="header-search-container">
            <input type="text" className="header-search-input" />
            <SearchIcon className="header-search-icon" />
          </div>

          <div className="header-nav">
            <Link
              to={!user && "/login"}
              className="header-link"
              onClick={login}
            >
              <div className="header-option">
                <span className="header-option-one">Hello, {user}</span>
                <span className="header-option-two">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>

            <Link to="/orders-and-returns" className="header-link">
              <div className="header-option">
                <span className="header-option-one">Returns</span>
                <span className="header-option-two">& Orders</span>
              </div>
            </Link>

            <Link to="/prime" className="header-link">
              <div className="header-option">
                <span className="header-option-one">Your</span>
                <span className="header-option-two">Prime</span>
              </div>
            </Link>

            <Link to="/checkout" className="header-link">
              <div className="header-option-basket">
                <ShoppingIconBasket />
                <span className="header-option-two header-basket-count">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="header-mobile-search-container">
          <input type="text" className="header-search-input" />
          <SearchIcon className="header-search-icon" />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
