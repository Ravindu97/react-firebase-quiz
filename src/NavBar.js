import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/signup">
          <li>SignUp</li>
        </Link>
        <Link style={navStyle} to="/login">
          <li>SignIn</li>
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
