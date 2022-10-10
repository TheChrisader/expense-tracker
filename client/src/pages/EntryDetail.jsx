import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const Container = styled.div`
  padding: 20px;
  width: 750px;
  height: fit-content;
  margin-top: 50px;
`;

const ReturnLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 30px;
  width: fit-content;

  &:hover {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  &:active {
    color: ${(props) => props.theme.colors.main.primary};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.main.primary};
  margin-right: 20px;
`;

const StatusWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.main.white};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 300;
`;

const Label = styled.div`
  color: ${(props) => props.theme.colors.main.success};
  background-color: ${(props) => props.theme.colors.main.successBg};
  padding: 5px 30px;
  font-weight: 500;
  border-radius: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  color: white;
  gap: 10px;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
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

const BodyWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.main.white};
  padding: 25px;
  border-radius: 10px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const AmountWrapper = styled.div``;

const AmountTitle = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 300;
`;

const TopWrapperEntry = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 500;
  font-size: ${(props) => props.size};
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 45px;
`;

const BottomWrapperItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 15px;
  font-weight: 300;
`;

const Item = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 20px;
`;

const RemarksTitle = styled.h2`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Remarks = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 300;
`;

const animation = {
  visible: {
    marginLeft: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
  hidden: {
    marginLeft: "100%",
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const EntryDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.main
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="entryDetails"
    >
      <ExpenseForm isOpen={isOpen} setState={setIsOpen} />
      <Container>
        <ReturnLink to="/">
          <IconWrapper>
            <KeyboardArrowLeftRoundedIcon />
          </IconWrapper>
          Go Back
        </ReturnLink>
        <StatusWrapper>
          <TopContainer>
            <Span>Status</Span>
            <Label>Paid</Label>
          </TopContainer>
          <TopContainer>
            <Button onClick={() => setIsOpen(true)}>Edit</Button>
            <Button>Delete</Button>
          </TopContainer>
        </StatusWrapper>
        <BodyWrapper>
          <TopWrapper>
            <AmountWrapper>
              <AmountTitle>Amount</AmountTitle>
              <TopWrapperEntry>$400</TopWrapperEntry>
            </AmountWrapper>
            <TopWrapperEntry size="20px">#RT3080</TopWrapperEntry>
          </TopWrapper>
          <BottomWrapper>
            <BottomWrapperItem>
              <ItemTitle>Date entered</ItemTitle>
              <Item>18 Aug 2022</Item>
            </BottomWrapperItem>
            <BottomWrapperItem>
              <ItemTitle>Payment Method</ItemTitle>
              <Item>Cash</Item>
            </BottomWrapperItem>
            <BottomWrapperItem>
              <ItemTitle>Category</ItemTitle>
              <Item>Salary</Item>
            </BottomWrapperItem>
          </BottomWrapper>
          <RemarksTitle>Remarks:</RemarksTitle>
          <Remarks>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            inventore, doloribus, dolore facilis non dicta nobis voluptatem quia
            possimus quasi eaque ab quisquam, fuga sunt officia accusantium
            aspernatur porro? Tenetur!
          </Remarks>
        </BodyWrapper>
      </Container>
    </motion.main>
  );
};

export default EntryDetail;
