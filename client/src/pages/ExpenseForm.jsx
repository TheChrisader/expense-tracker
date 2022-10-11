import React from "react";
import styled from "styled-components";
import { Formik, Form as FormikForm } from "formik";
import { AnimatePresence, motion } from "framer-motion";

import { initialValues, validationSchema } from "../utils/Form";
import Field from "../components/shared/Field";

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
  margin-bottom: auto;
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

const ExpenseForm = ({ isOpen, setState }) => {
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
              onSubmit={(values) => console.log(values)}
            >
              <FormContainer>
                <FormInputs>
                  <Field name="amount" type="number" label="Amount" />
                  <Field name="remark" type="text" label="Remark" />
                  <Field name="thing" type="text" label="Thing" />
                </FormInputs>
                <ButtonWrapper>
                  <Button>Save as Draft</Button>
                  <Button type="submit" onClick={() => setState(false)}>
                    Save & Add New
                  </Button>
                </ButtonWrapper>
              </FormContainer>
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
