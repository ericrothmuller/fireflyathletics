import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/shop">
            Shop
          </NavLink>
          <NavLink to="/contact">
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;