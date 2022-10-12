import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { useField, ErrorMessage as FormikError } from "formik";

const DropDownSelect = styled(Select)`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 300;

  div {
    background-color: ${(props) => props.theme.colors.main.white};
    cursor: pointer;
  }

  // target the div with the border styling specifically
  & > div {
    border: 1px solid
      ${(props) =>
        props.valid
          ? props.theme.colors.main.primaryBorder
          : props.theme.colors.main.danger};
    border-radius: 5px;

    &:active,
    &:focus {
      border: 1px solid ${(props) => props.theme.colors.main.primary};
    }
  }

  // target options wrapper
  & > :nth-child(4) > div {
    padding: 0;
  }

  // target each option container
  & > :nth-child(4) > div div {
    border-radius: 5px;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: ${(props) => props.theme.colors.main.primaryBg};
    }
  }

  // target each option text
  div div div {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

const ErrorMessage = styled(FormikError)`
  color: ${(props) => props.theme.colors.main.danger};
`;

const Selector = ({ options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (selectedOption) => {
    setTouched(true);
    setValue(selectedOption.value);
    setError(undefined);
  };

  return (
    <>
      <DropDownSelect
        valid={!(meta.touched && meta.error)}
        isSearchable={false}
        onChange={(selectedOption) => setFieldProps(selectedOption)}
        options={options}
        {...props}
      />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default Selector;
