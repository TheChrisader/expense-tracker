import React from "react";
import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";
import InvoiceItems from "../components/InvoiceItems";

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const Container = styled.section`
  padding: 20px;
  width: 750px;
  margin-top: 50px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
`;

const Header = styled.h1`
  font-size: 40px;
  letter-spacing: -1px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.primary};
  transition: color 0.5s ease;
`;

const SubHeader = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme.colors.text.secondary};
  transition: color 0.5s ease;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.main.primary};
  height: fit-content;
  transition: background-color 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.main.primaryLight};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.main.primaryDark};
  }
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.main.primary};
`;

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <HeaderContainer>
            <Header>Frugal</Header>
            <SubHeader>There are zero invoices</SubHeader>
          </HeaderContainer>
          <Button>
            <Icon>
              <AddIcon />
            </Icon>
            New Invoice
          </Button>
        </HeaderWrapper>
        <InvoiceItems />
      </Container>
    </Wrapper>
  );
};

export default Main;
