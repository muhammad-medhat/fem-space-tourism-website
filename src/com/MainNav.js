import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import mobileNav from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

import { Link, useLocation } from "react-router-dom";

export const MainNav = () => {
  const [activeLink, setActiveLink] = useState("home");

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState(mobileNav);

  const loc = useLocation();
  console.log("loc", loc);
  const mobileNavClicked = () => {
    setVisible(!visible);
    setExpanded(!expanded);
    setIcon(visible ? mobileNav : closeIcon);
  };
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
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
          <li
            onClick={() => onUpdateActiveLink("home")}
            className={activeLink === "home" ? "active" : ""}>
            <Link
              className=" uppercase letter-spacing-2 ff-sans-cond text-white"
              to="/">
              <span>00</span>
              home
            </Link>
          </li>
          <li
            onClick={() => onUpdateActiveLink("destination")}
            className={activeLink === "destination" ? "active" : ""}>
            <Link
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              to="/destination">
              <span aria-hidden="true">01</span>
              destination
            </Link>
          </li>
          <li
            onClick={() => onUpdateActiveLink("crew")}
            className={activeLink === "crew" ? "active" : ""}>
            <Link
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              to="/crew">
              <span aria-hidden="true">02</span>
              crew
            </Link>
          </li>
          <li
            onClick={() => onUpdateActiveLink("technology")}
            className={activeLink === "technology" ? "active" : ""}>
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
