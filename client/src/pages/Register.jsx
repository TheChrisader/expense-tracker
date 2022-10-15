import { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik, Form as FormikForm } from "formik";
import { useAuthState } from "react-firebase-hooks/auth";
import * as Yup from "yup";

import { auth } from "../firebase";
import { signInWithGoogle, registerWithEmailAndPassword } from "../utils/Auth";
import Field from "../components/shared/Field";

const Page = styled(motion.div)`
  @media screen and (max-width: 950px) {
    width: 100%;
    min-width: 100%;
  }
`;

const Container = styled.section`
  padding: 20px;
  margin-bottom: 50px;
  width: 750px;
  min-width: 750px;
  height: fit-content;
  margin-top: 50px;
  transition: margin-top 0.5s ease;

  @media screen and (max-width: 950px) {
    width: 100%;
    min-width: 100%;
  }

  @media screen and (max-width: 750px) {
    margin-top: 30px;
  }
`;

const AuthTitle = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 500;
  margin-bottom: 30px;
`;

const FormContainer = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  color: white;
  gap: 10px;
  font-weight: 400;
  font-size: 18px;
  border: none;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.google
      ? props.theme.colors.main.success
      : props.theme.colors.main.primary};
  height: fit-content;
  transition: background-color 0.25s ease;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background-color: ${(props) =>
      props.google
        ? props.theme.colors.main.successBg
        : props.theme.colors.main.primaryLight};
  }

  &:active {
    background-color: ${(props) =>
      props.google
        ? props.theme.colors.main.successBorder
        : props.theme.colors.main.primaryDark};
  }
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
    marginRight: "-100%",
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${user.uid}/book`);
    }
  }, [user, loading]);

  return (
    <Page variants={animation} initial="hidden" animate="visible" exit="hidden">
      <Container>
        <AuthTitle>Register for a Frugal Account</AuthTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().min(3).required("- Please input your name"),
            email: Yup.string()
              .email("Invalid e-mail format")
              .required("- Please input your e-mail"),
            password: Yup.string()
              .min(5)
              .required("- Please input your password"),
          })}
          onSubmit={(values) =>
            registerWithEmailAndPassword(
              values.name,
              values.email,
              values.password
            )
          }
        >
          <FormContainer>
            <Field name="name" type="name" label="Name" />
            <Field name="email" type="email" label="Email" />
            <Field name="password" type="password" label="Password" />
            <Button type="submit">Create&nbsp;Account</Button>
            <Button type="button" onClick={signInWithGoogle} google>
              Sign In With Google
            </Button>
          </FormContainer>
        </Formik>
      </Container>
    </Page>
  );
};

export default Register;
