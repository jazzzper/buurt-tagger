import styled from "styled-components";

import Color from "../tokens/Colors";

const InputText = styled.input.attrs(() => ({ type: "text" }))`
  font-size: 16px;
  color: ${Color.primaryBlack};
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 400;
  text-align: left;
  padding: 10px 10px 12px 10px;
  border: 1px solid ${Color.neutralGrey4};
  width: 100%;

  &:hover,
  :active {
    border: 1px solid ${Color.primaryBlack};
  }
`;

export default InputText;
