import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStates } from "./utils/global.context";



const Navbar = () => {
  const { state, changeTheme } = useRecipeStates();

  return (
    <nav>
      <div className="logo-dentist">
        <img src={state.theme === "Light" ? "/images/logo-light.png" : "/images/logo-dark.png"} alt="logo" />
      </div>
      <div className="div-nav">
        <Link className="linkButton" to="/">
          <span className="hover-underline-animation">Home</span>
        </Link>
        <Link className="linkButton" to="/favs">
          <span className="hover-underline-animation">Favs</span>
        </Link>
        <Link className="linkButton" to="/contact">
          <span className="hover-underline-animation">Contact</span>
        </Link>
        <button className="themeButton" onClick={changeTheme}>
          {state.theme === "Light" ? "Dark " : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
