import { darken } from "polished";
import styled, { css } from "styled-components";

import Color from "../tokens/Colors";

const PrimaryButton = styled.button(
  () => css`
    background-color: ${Color.primaryRed};
    color: ${Color.primaryWhite};
    border: 0;
    padding: 12px 15px;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 22px;
    font-weight: 700;
    white-space: nowrap;
    min-width: 90px;

    &:hover,
    :active {
      background-color: ${darken(0.1, Color.primaryRed)};
      cursor: pointer;
    }

    &:disabled {
      background-color: ${Color.neutralGrey4};
      color: ${Color.neutralGrey3};
    }
  `
);

export default PrimaryButton;
