import React from "react";
import { useField, ErrorMessage as FormikError } from "formik";
import styled from "styled-components";

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const InputLabel = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 300;
  margin-bottom: 5px;
`;

const Input = styled.input`
  height: 45px;
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.colors.main.white
      : props.theme.colors.main.primaryDark};
  border: 1px solid
    ${(props) =>
      props.valid
        ? props.theme.colors.main.primaryBorder
        : props.theme.colors.main.danger};
  border-radius: 5px;
  padding: 15px;
  transition: border 0.1s;

  &:active,
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.main.primary};
  }
`;

const TextArea = styled.textarea`
  height: fit-content;
  max-height: 100px;
  min-height: fit-content;
  max-width: 100%;
  min-width: 100%;
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.colors.main.white
      : props.theme.colors.main.primaryDark};
  border: 1px solid
    ${(props) =>
      props.valid
        ? props.theme.colors.main.primaryBorder
        : props.theme.colors.main.danger};
  border-radius: 5px;
  padding: 15px;
  transition: border 0.1s;

  &:active,
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.main.primary};
  }
`;

const ErrorMessage = styled(FormikError)`
  color: ${(props) => props.theme.colors.main.danger};
`;

const Field = ({ label, textarea, children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <InputWrapper>
        <InputLabel>{label}</InputLabel>
        {textarea ? (
          <TextArea
            {...field}
            valid={!(meta.touched && meta.error)}
            {...props}
          />
        ) : (
          <Input {...field} valid={!(meta.touched && meta.error)} {...props} />
        )}
        <ErrorMessage name={props.name} component="span" />
      </InputWrapper>
    </>
  );
};

export default Field;
