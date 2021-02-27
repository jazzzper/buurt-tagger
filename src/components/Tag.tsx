import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";

import Color from "../tokens/Colors";
import { Orientation } from "../tokens/Orientation";
import Spacer from "./Spacer";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  withRemoveIcon?: boolean;
}

const Tag: React.FC<TagProps> = ({
  withRemoveIcon = false,
  children,
  ...restProps
}) => (
  <StyledSpan
    {...restProps}
    withRemoveIcon={withRemoveIcon}
    tabIndex={withRemoveIcon ? 0 : -1}
  >
    {withRemoveIcon && (
      <React.Fragment>
        <FontAwesomeIcon icon={faTimes} />
        <Spacer orientation={Orientation.horizontal} size={10} />
      </React.Fragment>
    )}
    {children}
  </StyledSpan>
);

const StyledSpan = styled.span<TagProps>(
  ({ withRemoveIcon }) => css`
    ${withRemoveIcon ? `cursor: pointer;` : `cursor: initial;`}
    display: inline-block;
    background-color: ${Color.neutralGrey4};
    color: ${Color.primaryWhite};
    padding: 7px 20px 7px 10px;
    font-size: 16px;
    letter-spacing: 0;
    font-weight: 700;
    text-align: left;
  `
);

export default Tag;
