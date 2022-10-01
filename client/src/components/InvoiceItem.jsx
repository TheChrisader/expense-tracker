import React from "react";
import styled from "styled-components";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const ItemWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 25px 20px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: border-color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.main.primary};
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ItemDetail = styled.span`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.text.primary
      : props.theme.colors.text.secondary};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
`;

const Hash = styled.span`
  color: ${(props) => props.theme.colors.main.primary};
`;

const Label = styled.div`
  color: ${(props) => props.theme.colors.main.success};
  background-color: ${(props) => props.theme.colors.main.successBg};
  padding: 5px 30px;
  font-weight: 500;
  border-radius: 10px;
`;

const InvoiceItem = () => {
  return (
    <ItemWrapper>
      <Details>
        <ItemDetail primary>
          <Hash>#</Hash>RT3080
        </ItemDetail>
        <ItemDetail>Due 20 Sep 2022</ItemDetail>
        <ItemDetail>Uzumaki Naruto</ItemDetail>
      </Details>
      <Details>
        <ItemDetail primary fontSize="20px">
          $1800.89
        </ItemDetail>
        <ItemDetail>
          <Label>Paid</Label>
        </ItemDetail>
        <ItemDetail>
          <KeyboardArrowRightRoundedIcon />
        </ItemDetail>
      </Details>
    </ItemWrapper>
  );
};

export default InvoiceItem;
