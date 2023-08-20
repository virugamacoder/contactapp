import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info">
      <NavbarBrand  tag={Link} to="/" className="text-white">
        Virugama Contact App
      </NavbarBrand>
      <NavbarText className="float-end text-white">
        A Simple Contact App
      </NavbarText>
    </Navbar>
  );
};

export default Header;
