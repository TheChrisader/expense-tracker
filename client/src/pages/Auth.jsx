import { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik, Form as FormikForm } from "formik";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";

import { auth } from "../firebase";
import { signInWithGoogle, loginWithEmailAndPassword } from "../utils/Auth";
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
  margin-top: 30px;
  margin-bottom: 50px;

  @media screen and (max-width: 400px) {
    margin-top: 0;
  }
`;

const FormContainer = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const RegisterLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.colors.main.primary};
  margin-top: -20px;
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

  @media screen and (max-width: 400px) {
    width: 100%;
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
    marginRight: "100%",
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const initialValues = {
  email: "",
  password: "",
};

const Auth = ({ userID }) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${userID}/book`);
    }
  }, [user, loading]);

  return (
    <Page
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="login"
    >
      <Container>
        <AuthTitle>Sign In to Frugal</AuthTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid e-mail format")
              .required("- Please input your e-mail"),
            password: Yup.string().required("- Please input your password"),
          })}
          onSubmit={(values) =>
            loginWithEmailAndPassword(values.email, values.password)
          }
        >
          {(values) => {
            return (
              <FormContainer>
                <Field name="email" type="email" label="Email" />
                <Field name="password" type="password" label="Password" />
                <RegisterLinkWrapper>
                  <RegisterLink to="register">
                    Don't have an Account?
                  </RegisterLink>
                </RegisterLinkWrapper>
                <Button type="submit">Sign In</Button>
                <Button type="button" onClick={signInWithGoogle} google>
                  Sign In with Google <FcGoogle />
                </Button>
                <Button
                  type="submit"
                  onClick={() => {
                    values.values.email = "admin@gmail.com";
                    values.values.password = "admin1";
                  }}
                >
                  Sign In as Ted
                </Button>
              </FormContainer>
            );
          }}
        </Formik>
      </Container>
    </Page>
  );
};

export default Auth;
