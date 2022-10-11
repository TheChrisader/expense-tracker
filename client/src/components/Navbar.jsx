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
  z-index: 50;

  @media screen and (max-width: 950px) {
    flex-direction: row;
    width: 100%;
    height: 60px;
    border-radius: 0;
  }
`;

const NavbarIcon = styled.div`
  position: relative;
  height: 100px;
  background-color: ${(props) => props.theme.colors.main.primary};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: auto;

  @media screen and (max-width: 950px) {
    width: 60px;
    height: 100%;
    margin-bottom: 0;
    margin-right: auto;
  }
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

  @media screen and (max-width: 950px) {
    margin: auto 0;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 25px;
  border-top: 1px solid ${(props) => props.theme.colors.main.primaryLight};

  @media screen and (max-width: 950px) {
    padding: 0 30px;
    border-top: none;
    border-left: 1px solid ${(props) => props.theme.colors.main.primaryLight};
    margin-top: 0;
    margin-left: 25px;
    align-items: center;
  }
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
        {themeState ? <Brightness3Icon /> : <BrightnessHighRoundedIcon />}
      </Toggle>
      <ModalWrapper>
        <Modal></Modal>
      </ModalWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
