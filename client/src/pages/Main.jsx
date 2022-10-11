import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import AddIcon from "@mui/icons-material/Add";
import InvoiceItems from "../components/InvoiceItems";
import ExpenseForm from "./ExpenseForm";

const Page = styled(motion.div)`
  @media screen and (max-width: 750px) {
    width: 100%;
    min-width: 100%;
  }
`;

const Container = styled.section`
  padding: 20px;
  margin-bottom: 50px;
  width: 750px;
  height: fit-content;
  margin-top: 50px;
  transition: margin-top 0.5s ease;

  @media screen and (max-width: 950px) {
    width: 100%;
  }

  @media screen and (max-width: 750px) {
    margin-top: 30px;
  }
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

const animation = {
  visible: {
    marginRight: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
  hidden: {
    marginRight: "100%",
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Page
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="main"
    >
      <ExpenseForm isOpen={isOpen} setState={setIsOpen} />
      <Container>
        <HeaderWrapper>
          <HeaderContainer>
            <Header>Frugal</Header>
            <SubHeader>There are zero invoices</SubHeader>
          </HeaderContainer>
          <Button onClick={() => setIsOpen(true)}>
            <Icon>
              <AddIcon />
            </Icon>
            New Invoice
          </Button>
        </HeaderWrapper>
        <InvoiceItems />
      </Container>
    </Page>
  );
};

export default Main;
