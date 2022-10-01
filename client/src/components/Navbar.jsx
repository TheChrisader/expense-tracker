import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  width: 90px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #373b53;
`;

const NavbarIcon = styled.div`
  height: 90px;
  background-color: #9e7070;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: auto;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarIcon />
    </StyledNavbar>
  );
};

export default Navbar;
