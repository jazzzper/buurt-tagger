import React from "react";
import styled from "styled-components";

import Color from "../tokens/Colors";
import Spacer from "./Spacer";

interface FormFieldProps {
  label: string;
  name: string;
  errorMessage?: string;
  input: JSX.Element;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  errorMessage,
  input,
}) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <Spacer size={10} />
    {input}
    {errorMessage && (
      <React.Fragment>
        <Spacer size={15} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </React.Fragment>
    )}
  </Container>
);

const Container = styled.div`
  flex-grow: 1;
`;

const ErrorMessage = styled.label`
  font-size: 16px;
  color: ${Color.primaryRed};
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 700;
  text-align: left;
`;

const Label = styled.label`
  font-size: 18px;
  color: ${Color.primaryBlack};
  letter-spacing: 0;
  line-height: 25px;
  font-weight: 700;
  text-align: left;
`;

export default FormField;
