import React from "react";
import styled from "styled-components";

import { CrossAxisAlignment } from "../tokens/Alignment";
import Color from "../tokens/Colors";
import Column from "./Column";

const Layout: React.FC = ({ children, ...restProps }) => (
  <StyledColumn {...restProps} crossAxisAlignment={CrossAxisAlignment.center}>
    <Container>{children}</Container>
  </StyledColumn>
);

const StyledColumn = styled(Column)`
  background-color: ${Color.neutralGrey1};
`;

const Container = styled.div`
  padding: 0 20px;
  min-height: 100vh;
  width: 90%;
  background-color: ${Color.primaryWhite};

  @media (min-width: 540px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default Layout;
