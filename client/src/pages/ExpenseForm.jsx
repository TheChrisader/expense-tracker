import React from "react";
import styled from "styled-components";
import { Formik, Form as FormikForm } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";

import { db } from "../firebase";
import { validationSchema } from "../utils/Form";
import Field from "../components/shared/Field";
import Radio from "../components/shared/Radio";
import Selector from "../components/shared/Selector";

const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.main.background};
  width: 550px;
  position: fixed;
  left: 80px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 20;
  transition: left 0.5s ease;
  overflow-y: auto;

  @media screen and (max-width: 950px) {
    left: 0;
    height: calc(100vh - 60px);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    border-radius: 0;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: 50px;
  font-weight: 400;
`;

const FormContainer = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FormInputs = styled.div`
  margin-bottom: 30px;
  overflow-y: auto;
  height: 55vh;
`;

const CashTypeWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const OptionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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

const ModalBackground = styled(motion.div)`
  position: fixed;
  left: 0;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  background-color: #0000006c;
  z-index: 10;
`;

const formAnimation = {
  hidden: {
    x: "-100%",
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.15,
    },
  },
};

const backgroundAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.25,
      delay: 0.15,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const categoryOptions = [
  { value: "Salary", label: "Salary" },
  { value: "Dontations", label: "Donations" },
];

const modeOptions = [
  { value: "Cash", label: "Cash" },
  { value: "Online", label: "Onine" },
];

const ExpenseForm = ({ isOpen, setState, entry }) => {
  const initialValues = {
    amount: entry?.data?.amount || "",
    remark: entry?.data?.remark || "",
    cashType: entry?.data?.cashType || "",
    category: entry?.data?.category || "",
  };

  const handleSubmit = async (data) => {
    try {
      await addDoc(collection(db, "entries"), {
        ...data,
        date: Date.now(),
      });
      setState(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleUpdate = async (data, id) => {
    const itemRef = doc(db, "entries", id);
    try {
      await updateDoc(itemRef, {
        ...data,
      });
      setState(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Wrapper
            variants={formAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="form"
          >
            <Title>Expense Form</Title>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) =>
                entry ? handleUpdate(values, entry.id) : handleSubmit(values)
              }
            >
              {({ values }) => (
                <FormContainer>
                  {console.log(values)}
                  <FormInputs>
                    <CashTypeWrapper>
                      <Radio
                        name="cashType"
                        value="Cash In"
                        label="Cash-In"
                        type="in"
                        id="Cash-In"
                        check={entry?.data?.cashType === "Cash In"}
                      />
                      <Radio
                        name="cashType"
                        value="Cash Out"
                        label="Cash-Out"
                        type="out"
                        id="Cash-Out"
                        check={entry?.data?.cashType === "Cash Out"}
                      />
                    </CashTypeWrapper>
                    <Field name="amount" type="number" label="Amount" />
                    <Field name="remark" type="text" label="Remark" textarea />
                    <OptionsWrapper>
                      <Selector
                        name="category"
                        placeholder="Category..."
                        options={categoryOptions}
                      />
                      <Selector
                        name="mode"
                        placeholder="Payment Mode..."
                        options={modeOptions}
                      />
                    </OptionsWrapper>
                  </FormInputs>
                  <ButtonWrapper>
                    <Button>Save as Draft</Button>
                    <Button type="submit">Save & Add New</Button>
                  </ButtonWrapper>
                </FormContainer>
              )}
            </Formik>
          </Wrapper>
          <ModalBackground
            variants={backgroundAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="background"
            onClick={() => setState(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default ExpenseForm;
