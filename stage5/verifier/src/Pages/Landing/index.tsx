import { useState } from 'react';
import styled from 'styled-components';
import LogIn from '../../Components/LogIn';
import Navbar from '../../Components/Navbar';

const Landing = () => {
  const [display, setDisplay] = useState(false);
  const [language, setLanguage] = useState('en');

  console.log('display', display);
  return (
    <Container>
      <InnerContainer>{display ? <LogIn /> : null}</InnerContainer>
      <LowerContainer>
        <GibImgContainer>
          <GibImg src="https://portal.egov.gi/DigitalServices/assets/img/hmgog_logo-white.png" />
        </GibImgContainer>
      </LowerContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 86%;
  background-image: url('http://medicinecursos.com.br/blog/wp-content/uploads/2020/05/1563285373-como-escolher-a-luminaria-ideal-para-sala-de-espera-em-consultorio-medico-ou-odontologico-20190513115016.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
`;
const LowerContainer = styled.div`
  width: 100%;
  background-color: black;
  height: 14%;
`;
const GibImg = styled.img`
  width: 200px;
`;
const GibImgContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1%;
  margin-right: 5%;
`;
export default Landing;
