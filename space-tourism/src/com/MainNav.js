import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import mobileNav from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { StyledSpan } from "./styled/StyledSpan";
import { StyledButton } from "./styled/StyledButton";
import { Link } from "react-router-dom";

export const MainNav = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState(mobileNav);
  const mobileNavClicked = () => {
    setVisible(!visible);
    setExpanded(!expanded);
    setIcon(visible ? mobileNav : closeIcon);
  };

  return (
    <header className="primary-header flex justify-center align-center">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button
        class="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={mobileNavClicked}
        closeIcon={closeIcon}
        style={{ backgroundImage: `url(${icon})` }}>
        <span class="sr-only" aria-expanded={expanded}>
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
          data-visible={visible}
          style={{ "--gap": "4rem" }}>
          <li className="active">
            <Link
              className=" uppercase letter-spacing-2 ff-sans-cond text-white"
              to="/">
              <span>00</span>
              home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              to="/destination">
              <span aria-hidden="true">01</span>
              destination
            </Link>
          </li>
          <li>
            <Link
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              to="/crew">
              <span aria-hidden="true">02</span>
              crew
            </Link>
          </li>
          <li>
            <Link
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              to="/technology">
              <span aria-hidden="true">03</span>
              technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
