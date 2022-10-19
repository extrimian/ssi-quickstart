//libs
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code';
import { GoalCode } from '@extrimian/waci';
import { Buffer } from 'buffer';
//components
import waciInterpreter from '../../waci/interpreterTS';
//assets
import loadingGif from '../../Assets/loading.gif';
import { Context } from '../../context/AppContext';
import { checkMobileBrowser } from '../../utils';

const Verification = ({ setDisplay, status, i18n }: any) => {
  const { state } = useContext(Context);
  const [value, setValue] = useState('');
  const loading = status;
  const isMobile = checkMobileBrowser();

  const getValue = async (did: string) => {
    const invitation = await waciInterpreter.createOOBInvitation(
      did,
      GoalCode.Presentation
    );
    const encodedInvitation = Buffer.from(JSON.stringify(invitation)).toString(
      'base64'
    );
    setValue('extrimian://?_oob=' + encodedInvitation);
  };

  useEffect(() => {
    if (state.did) getValue(state.did);
  }, [state.did]);

  return (
    <Container
      style={{
        flexDirection: isMobile ? 'column' : 'row',
        width: isMobile ? '95%' : 600,
        boxShadow: false ? 'none' : '0 0 10px rgba(0, 0, 0, 0.5)',
        padding: isMobile ? 20 : 10,
      }}
    >
      <LeftContainer
        style={{
          width: isMobile ? '100%' : '40%',
        }}
      >
        <QRcontainer>
          <QRCode
            value={value || 'No Data'}
            bgColor={'transparent'}
            size={190}
            style={{
              opacity: loading !== 'waiting' ? 0.5 : 1,
              filter: loading !== 'waiting' ? 'blur(2px)' : '',
            }}
          />

          {loading !== 'waiting' && <LoadingHolder src={loadingGif} />}
        </QRcontainer>
      </LeftContainer>
      <RightContainer
        style={{
          width: isMobile ? '100%' : '60%',
        }}
      >
        <Button
          onClick={() => {
            setDisplay(false);
          }}
        >
          X
        </Button>
        <TextContainer>
          <Title>{i18n.t('verifyCredential')}</Title>
          <Text>1. {i18n.t('step1')}</Text>
          <Text>2. {i18n.t('step2')}</Text>
          <Text>3. {i18n.t('step3')}</Text>
        </TextContainer>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  position: relative;
`;
const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const RightContainer = styled.div`
  width: 60%;
  height: 100%;
`;
const QRcontainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.h4`
  margin-top: 2px;
  font-size: 14px;
`;
const Title = styled.h2`
  font-size: 20px;
`;
const Button = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid #a0a0a0;
  background-color: white;
  color: black;
  right: 10px;
  top: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
const LoadingHolder = styled.img`
  position: absolute;

  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Verification;
