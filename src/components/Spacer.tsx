import styled, { css } from "styled-components";

import { Orientation } from "../tokens/Orientation";

interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
  size: number;
}

const Spacer = styled.div<SpacerProps>(
  ({ orientation = Orientation.vertical, size }) => {
    if (orientation === Orientation.horizontal)
      return css`
        width: ${size}px;
        display: inline-block;
      `;
    if (orientation === Orientation.vertical)
      return css`
        height: ${size}px;
      `;
  }
);

export default Spacer;
