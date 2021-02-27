import React from "react";
import styled from "styled-components";

import { CrossAxisAlignment } from "../tokens/Alignment";
import Column from "./Column";

const Layout: React.FC = ({ children }) => (
  <Column crossAxisAlignment={CrossAxisAlignment.center}>
    <Container>{children}</Container>
  </Column>
);

const Container = styled.div`
  width: 90%;

  @media (min-width: 540px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default Layout;
