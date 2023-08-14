import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
    import falogo from '../../images/Firefly-Athletics-Logo.png';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
      <img src={falogo} className="headerImage" alt="logo" />
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