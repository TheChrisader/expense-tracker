import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { doc, query, deleteDoc, onSnapshot } from "firebase/firestore";

import { db } from "../firebase";
import ExpenseForm from "./ExpenseForm";

const Page = styled(motion.div)`
  @media screen and (max-width: 950px) {
    width: 100%;
    min-width: 100%;
  }
`;

const Container = styled.div`
  padding: 20px;
  width: 750px;
  min-width: 750px;
  height: fit-content;
  margin-top: 50px;

  @media screen and (max-width: 950px) {
    width: 100%;
    min-width: 100%;
  }

  @media screen and (max-width: 750px) {
    margin-top: 30px;
  }
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

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: ${(props) => props.space};
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 300;

  @media screen and (max-width: 450px) {
    font-weight: 500;
    font-size: 20px;
  }
`;

const Label = styled.div`
  color: ${(props) =>
    props.type === "Cash In"
      ? props.theme.colors.main.success
      : props.theme.colors.main.danger};
  background-color: ${(props) =>
    props.type === "Cash In"
      ? props.theme.colors.main.successBg
      : props.theme.colors.main.dangerBg};
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

  @media screen and (max-width: 500px) {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 120px;
  }
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

const EntryDetail = ({ userID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [entryItem, setEntryItem] = useState(null);

  const location = useLocation();
  const entryId = location.pathname.split("/")[3];

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const itemRef = doc(db, "entries", id);
    try {
      await deleteDoc(itemRef);
      navigate(`/${userID}/book/`);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const q = await query(doc(db, "entries", entryId));
        onSnapshot(q, (doc) => {
          setEntryItem({
            id: doc.id,
            data: doc.data(),
          });
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchItem();
  }, []);

  return (
    <Page
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="entryDetails"
    >
      <ExpenseForm isOpen={isOpen} setState={setIsOpen} entry={entryItem} />
      <Container>
        <ReturnLink to={`/${userID}/book/`}>
          <IconWrapper>
            <FaChevronLeft />
          </IconWrapper>
          Go Back
        </ReturnLink>
        <StatusWrapper>
          <TopContainer space="space-around">
            <Span>STATUS:</Span>
            <Label type={entryItem?.data?.cashType}>
              {entryItem?.data?.cashType || "..."}
            </Label>
          </TopContainer>
          <TopContainer space="center">
            <Button onClick={() => setIsOpen(true)} disabled={!entryItem}>
              Edit
            </Button>
            <Button
              type="button"
              onClick={() => handleDelete(entryId)}
              disabled={!entryItem}
            >
              Delete
            </Button>
          </TopContainer>
        </StatusWrapper>
        <BodyWrapper>
          <TopWrapper>
            <AmountWrapper>
              <AmountTitle>Amount</AmountTitle>
              <TopWrapperEntry>
                ${entryItem?.data?.amount || "..."}
              </TopWrapperEntry>
            </AmountWrapper>
            <TopWrapperEntry size="20px">#{entryId || "..."}</TopWrapperEntry>
          </TopWrapper>
          <BottomWrapper>
            <BottomWrapperItem>
              <ItemTitle>Date entered</ItemTitle>
              <Item>
                {entryItem?.data?.date
                  ? new Date(entryItem?.data?.date).toDateString()
                  : "..."}
              </Item>
            </BottomWrapperItem>
            <BottomWrapperItem>
              <ItemTitle>Payment Method</ItemTitle>
              <Item>{entryItem?.data?.mode || "..."}</Item>
            </BottomWrapperItem>
            <BottomWrapperItem>
              <ItemTitle>Category</ItemTitle>
              <Item>{entryItem?.data?.category || "..."}</Item>
            </BottomWrapperItem>
          </BottomWrapper>
          <RemarksTitle>Remarks:</RemarksTitle>
          <Remarks>{entryItem?.data?.remark || "..."}</Remarks>
        </BodyWrapper>
      </Container>
    </Page>
  );
};

export default EntryDetail;
