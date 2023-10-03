import React from "react";
import logoImg from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img src={logoImg} alt="logo" width="100" height="100"  className="hidden md:block" />
      </Link>
    </div>
  );
};

export default Logo;
