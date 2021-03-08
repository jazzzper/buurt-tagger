import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

import Color from "../tokens/Colors";
import { Orientation } from "../tokens/Orientation";
import Spacer from "./Spacer";

interface TextButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  iconLeft?: IconProp;
  iconRight?: IconProp;
}

const TextButton: React.FC<TextButtonProps> = ({
  iconLeft,
  iconRight,
  children,
  ...restProps
}) => (
  <Button {...restProps}>
    {!!iconLeft && (
      <React.Fragment>
        <FontAwesomeIcon icon={iconLeft} />
        <Spacer orientation={Orientation.horizontal} size={10} />
      </React.Fragment>
    )}
    {children}
    {!!iconRight && (
      <React.Fragment>
        <Spacer orientation={Orientation.horizontal} size={10} />
        <FontAwesomeIcon icon={iconRight} />
      </React.Fragment>
    )}
  </Button>
);

const Button = styled.button`
  cursor: pointer;
  height: auto;
  border: none;
  // TODO: Remove default styling from useragent and set background - color to none
  background-color: ${Color.primaryWhite};
  padding: 0;
  align-self: baseline;
  white-space: normal;
  text-align: left;
  color: ${Color.primaryDarkblue};
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 22px;
  font-weight: 700;

  &:hover {
    color: ${Color.primaryRed};
  }
`;

export default TextButton;
