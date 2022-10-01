import React from "react";
import styled from "styled-components";

import InvoiceItem from "./InvoiceItem";

const ItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const InvoiceItems = () => {
  return (
    <ItemsWrapper>
      {arr.map((item, i) => (
        <InvoiceItem key={i} />
      ))}
    </ItemsWrapper>
  );
};

export default InvoiceItems;
