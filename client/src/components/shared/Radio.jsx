import React, { useRef, useEffect, useState } from "react";
import { useField, ErrorMessage as FormikError } from "formik";
import styled from "styled-components";

const RadioWrapper = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.checked
      ? props.type === "in"
        ? props.theme.colors.main.success
        : props.theme.colors.main.danger
      : "transparent"};
  padding: 5px 25px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.checked
        ? props.type === "in"
          ? props.theme.colors.main.successBorder
          : props.theme.colors.main.dangerBorder
        : props.theme.colors.main.primaryBorder};
  margin-bottom: 13px;
  width: fit-content;
  cursor: pointer;
`;

const CashType = styled.span`
  color: ${(props) =>
    props.checked ? "white" : props.theme.colors.text.secondary};
  font-weight: 500;
  text-align: center;
`;

const Input = styled.input`
  position: absolute;
  height: 0;
  width: 0;

  &:focus + ${RadioWrapper}, &:hover + ${RadioWrapper} {
    border: 1px solid ${(props) => props.theme.colors.main.primary};
  }
`;

const ErrorMessage = styled(FormikError)`
  color: ${(props) => props.theme.colors.main.danger};
`;

const InputComponent = ({ children, ...props }) => {
  return (
    <>
      <Input ref={props.refProp} {...props} />
      {children}
    </>
  );
};

const Radio = ({ label, type, check, ...props }) => {
  const [uselessRefresh, setUselessRefresh] = useState("");
  const inputRef = useRef(null);
  const [field, meta] = useField(props);

  useEffect(() => {
    if (check && inputRef.current) {
      inputRef.current.checked = true;
      setUselessRefresh(" ");
      console.log(inputRef.current.checked);
    }
  }, []);

  return (
    <label htmlFor={props.id}>
      <InputComponent
        type="radio"
        refProp={inputRef}
        {...field}
        valid={!(meta.touched && meta.error)}
        value={props.value || ""}
        {...props}
      >
        <RadioWrapper checked={inputRef.current?.checked} type={type}>
          <CashType checked={inputRef.current?.checked}>
            Cash {type === "in" ? "In" : `Out${uselessRefresh}`}
          </CashType>
        </RadioWrapper>
      </InputComponent>
      <ErrorMessage name={props.name} component="span" />
    </label>
  );
};

export default Radio;
