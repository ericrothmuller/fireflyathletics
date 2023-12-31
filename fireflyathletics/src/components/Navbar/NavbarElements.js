import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #F9F9F9;
  height: 100px;
  display: flex;
  justify-content: center;
  z-index: 12;
  align-content: center;
  width: 100vw;
`;
  
export const NavLink = styled(Link)`
  color: #141A1F;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 38px;
  &.active {
    color: #ffde59;
  };
  &:hover {
    color: #ffde59;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #82716e;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;