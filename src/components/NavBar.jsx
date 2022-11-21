import React from "react";
import { NavLink } from "react-router-dom";
import ironhackLogo from "../assets/ironhack-logo.png";

function NavBar() {
  return (
    <nav>
      <NavLink to={"/"}>
        <img src={ironhackLogo} alt="Ironhack Logo" />
        <h1>Workshop</h1>
      </NavLink>

      <NavLink to={"/styled"}>
        <h2>About Styled Components</h2>
      </NavLink>

      <NavLink to={"/toasty"}>
        <h2>About Toastify</h2>
      </NavLink>

      <NavLink to={"/login"}>
        <h2>Login</h2>
      </NavLink>
    </nav>
  );
}

export default NavBar;
