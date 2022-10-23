import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const ItemWrapper = styled(Link)`
  background-color: ${(props) => props.theme.colors.main.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  min-width: 100%;
  max-width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: border-color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.main.primary};
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: ${(props) => props.align};
    gap: 5px;
  }
`;

const ItemDetail = styled(motion.span)`
  color: ${(props) =>
    props.$primaryColor
      ? props.theme.colors.text.primary
      : props.theme.colors.text.secondary};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => props.weight};
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 750px) {
    overflow: visible;
  }

  @media screen and (max-width: 450px) {
    overflow: hidden;
  }
`;

const Hash = styled.span`
  color: ${(props) => props.theme.colors.main.primary};
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
  padding: 5px 20px;
  font-weight: 500;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    display: block;
    left: 0;
    background-color: ${(props) =>
      props.type === "Cash In"
        ? props.theme.colors.main.success
        : props.theme.colors.main.danger};
    width: 8px;
    height: 8px;
    border-radius: 50px;
  }

  @media screen and (max-width: 450px) {
    padding: 5px 10px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.main.primary};

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const InvoiceItem = ({ id, category, amount, type, date }) => {
  return (
    <ItemWrapper to={`${id}`}>
      <Details align="start">
        <ItemDetail $primaryColor weight={500}>
          <Hash>#</Hash>
          {id}
        </ItemDetail>
        <ItemDetail>{new Date(date).toDateString()}</ItemDetail>
        <ItemDetail>{category}</ItemDetail>
      </Details>
      <Details align="flex-end">
        <ItemDetail $primaryColor fontSize="20px" weight={500}>
          ${amount}
        </ItemDetail>
        <ItemDetail>
          <Label type={type}>{type}</Label>
        </ItemDetail>
        <ItemDetail>
          <IconWrapper>
            <FaChevronRight />
          </IconWrapper>
        </ItemDetail>
      </Details>
    </ItemWrapper>
  );
};

export default InvoiceItem;
