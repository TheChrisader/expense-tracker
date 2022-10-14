import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "../firebase";
import InvoiceItem from "./InvoiceItem";

const ItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InvoiceItems = ({ setEntryCount }) => {
  const [expenseItems, setExpenseItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const q = await query(
          collection(db, "entries"),
          orderBy("date", "desc")
        );
        onSnapshot(q, (querySnapshot) => {
          let items = [];
          querySnapshot.docs.map((doc) =>
            items.push({
              id: doc.id,
              data: doc.data(),
            })
          );
          setExpenseItems(items);
          setEntryCount(items.length);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchItems();
  }, []);

  return (
    <ItemsWrapper>
      {expenseItems.map((item, i) => (
        <InvoiceItem
          key={i}
          id={item.id}
          category={item.data.category}
          amount={item.data.amount}
          type={item.data.cashType}
        />
      ))}
    </ItemsWrapper>
  );
};

export default InvoiceItems;
