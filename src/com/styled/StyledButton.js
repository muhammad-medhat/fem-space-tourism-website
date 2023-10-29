import styled from "styled-components";

// import closeIcon from "../../assets/shared/icon-close.svg";
import React from "react";

export const StyledButton = styled.button`
  &[aria-expanded]='true'] {
    background-image: url(${({ closeIcon }) => closeIcon});
  }
`;
