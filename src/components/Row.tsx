import styled, { css } from "styled-components";

import { CrossAxisAlignment, MainAxisAlignment } from "../tokens/Alignment";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  stretch?: boolean;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
}

const Row = styled.div<RowProps>(
  ({ reverse, stretch, mainAxisAlignment, crossAxisAlignment }) => css`
    display: flex;
    flex-direction: ${reverse ? "row-reverse" : "row"};
    justify-content: ${mainAxisAlignment};
    align-items: ${crossAxisAlignment};
    max-height: 100%;
    ${stretch &&
    css`
      flex-grow: 1;
    `}
  `
);

export default Row;
