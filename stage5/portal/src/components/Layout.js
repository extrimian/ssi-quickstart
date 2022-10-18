import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export default Layout;
