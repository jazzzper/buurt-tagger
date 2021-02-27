import styled, { css } from "styled-components";

import Color from "../tokens/Colors";

const SecundaryButton = styled.button(
  () => css`
    background-color: ${Color.primaryWhite};
    color: ${Color.primaryDarkblue};
    border: 1px solid ${Color.primaryDarkblue};
    padding: 12px 15px;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 22px;
    font-weight: 700;
    white-space: nowrap;

    &:hover,
    :active {
      cursor: pointer;
      border-width: 2px;
      padding: 11px 14px;
    }

    &:disabled {
      background-color: ${Color.neutralGrey4};
      color: ${Color.neutralGrey3};
      border: 0;
    }
  `
);

export default SecundaryButton;
