import styled, { css } from "styled-components";

import { CrossAxisAlignment, MainAxisAlignment } from "../tokens/Alignment";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  stretch?: boolean;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
}

const Column = styled.div<ColumnProps>(
  ({ stretch, mainAxisAlignment, crossAxisAlignment }) => css`
    display: flex;
    flex-direction: column;
    justify-content: ${mainAxisAlignment};
    align-items: ${crossAxisAlignment};
    max-width: 100%;
    ${stretch &&
    css`
      flex-grow: 1;
    `}
  `
);

export default Column;
