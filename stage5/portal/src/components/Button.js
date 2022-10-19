import { transparentize } from 'polished';
import React from 'react';
import styled from 'styled-components';

const Button = ({ children, disabled, ...props }) => {
  return (
    <Container disabled={disabled} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  background-color: #98cd0d;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
  border: none;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${transparentize(0.2, '#98cd0d')};
  }
  &:disabled {
    cursor: default;
    background-color: ${transparentize(0.7, '#98cd0d')};
  }
`;

export default Button;
