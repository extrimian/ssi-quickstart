import { lighten, transparentize } from 'polished';
import React from 'react';
import styled from 'styled-components';

const Input = ({ title, value, onChange, type = 'text' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputCustom
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2px;
  margin-bottom: 5px;
`;

const Title = styled.div`
  font-size: 14px;
  color: ${lighten(0.3, 'black')};
`;

const InputCustom = styled.input`
  width: 100%;
  border: none;
  border-bottom: solid 1px ${transparentize(0.7, 'black')};
  color: ${lighten(0.5, 'black')};
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export default Input;
