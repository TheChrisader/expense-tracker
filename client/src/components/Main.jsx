import React from "react";
import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";
import InvoiceItem from "./InvoiceItem";

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Container = styled.section`
  padding: 20px;
  width: 700px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
`;

const Header = styled.h1`
  font-weight: 500;
`;

const SubHeader = styled.span`
  font-weight: 400;
`;

const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.main.primary};
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
            <AddIcon />
            New Invoice
          </Button>
        </HeaderWrapper>
        <InvoiceItem />
      </Container>
    </Wrapper>
  );
};

export default Main;
