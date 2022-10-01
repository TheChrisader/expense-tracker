import React from "react";
import styled from "styled-components";
import BrightnessHighRoundedIcon from "@mui/icons-material/BrightnessHighRounded";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${(props) => props.theme.colors.main.primaryDark};
`;

const NavbarIcon = styled.div`
  position: relative;
  height: 90px;
  background-color: #9e7070;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: auto;
`;

const Toggle = styled.button`
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.main.primaryLight};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.main.primary};
  }

  &:active {
    color: ${(props) => props.theme.colors.main.primaryDark};
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 25px;
  border-top: 1px solid ${(props) => props.theme.colors.main.primaryLight};
`;

const Modal = styled.button`
  border: none;
  background-color: aliceblue;
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

const Navbar = ({ themeState, setState }) => {
  const handleClick = () => {
    setState(!themeState);
  };
  return (
    <StyledNavbar>
      <NavbarIcon />
      <Toggle onClick={handleClick}>
        {themeState ? <BrightnessHighRoundedIcon /> : <Brightness3Icon />}
      </Toggle>
      <ModalWrapper>
        <Modal></Modal>
      </ModalWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
