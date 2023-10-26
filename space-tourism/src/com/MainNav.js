import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import mobileNav from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { StyledSpan } from "./styled/StyledSpan";
import { StyledButton } from "./styled/StyledButton";

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
            <a
              className=" uppercase letter-spacing-2 ff-sans-cond text-white"
              href="#">
              <span>00</span>
              home
            </a>
          </li>
          <li>
            <a
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              href="#">
              <span aria-hidden="true">01</span>
              destination
            </a>
          </li>
          <li>
            <a
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              href="#">
              <span aria-hidden="true">02</span>
              crew
            </a>
          </li>
          <li>
            <a
              className="uppercase letter-spacing-2 ff-sans-cond text-white"
              href="#">
              <span aria-hidden="true">03</span>
              technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
