import React from "react";
import falogo from '../../images/Firefly-Athletics-Logo.png';
  
const Header = () => {
  return (
<div className="headerDiv">
    <img src={falogo} className="headerImage" alt="logo" />
</div>
  );
};
  
export default Header;