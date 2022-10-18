import styled from 'styled-components';
import loading from '../../Assets/loading.gif';
import accepted from '../../Assets/accepted.png';
import rejected from '../../Assets/rejected.png';
import none from '../../Assets/none.png';
import { backgroundImages } from 'polished';
import { checkMobileBrowser } from '../../utils';

const Credential = ({ setDisplay, data, status, reset, i18n }) => {
  const JSON =
    data.data.attachments[0].data.json.verifiableCredential[0]
      .credentialSubject;
  const keys = Object.keys(JSON);
  const name =
    data.data.attachments[0].data.json.verifiableCredential[0].credentialSubject
      .givenName +
    ' ' +
    data.data.attachments[0].data.json.verifiableCredential[0].credentialSubject
      .familyName;
  const onClick = () => {
    reset();
  };

  const formatTitle = (text) =>
    text
      ?.replace(/(_|-)/g, ' ')
      .trim()
      .replace(/\w\S*/g, function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1);
      })
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

  const isMobile = checkMobileBrowser();

  return (
    <Container
      style={{
        width: isMobile ? '100%' : 700,
        height: isMobile ? 500 : 400,
        flexDirection: isMobile ? 'column' : 'row',
        overflowY: isMobile ? 'scroll' : 'hidden',
      }}
    >
      <LeftContainer
        style={{
          width: isMobile ? '100%' : '40%',
        }}
      >
        <ImageContainer>
          <Image />
          <Name>{name}</Name>
          <StatusContainer>
            <Status status={status}>
              {status === 'waiting' ? (
                <img src={loading} style={{ objectFit: 'contain' }} />
              ) : status === 'OK' ? (
                <StatusIcon src={accepted} height={'90%'} />
              ) : status === 'FAIL' ? (
                <StatusIcon src={rejected} height={'90%'} />
              ) : (
                <img src={none} style={{ objectFit: 'contain' }} />
              )}
            </Status>
          </StatusContainer>
        </ImageContainer>
      </LeftContainer>
      <RightContainer
        style={{
          width: isMobile ? '100%' : '60%',
        }}
      >
        <Button onClick={onClick}>X</Button>
        <TextContainer>
          <Title>{i18n.t('yourCredential')}:</Title>
          <DataContainer
            style={{
              overflowY: !isMobile ? 'scroll' : 'hidden',
            }}
          >
            {data ? (
              keys
                .filter((key) => typeof JSON[key] !== 'object')
                .map((key) => (
                  <div key={key}>
                    <label>{formatTitle(key)}: </label>
                    <Text>{JSON[key]}</Text>
                  </div>
                ))
            ) : (
              <Text>{i18n.t('noAccess')}</Text>
            )}
          </DataContainer>
        </TextContainer>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  margin-top: 60px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const RightContainer = styled.div`
  height: 100%;
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 40px;
`;
const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 10px;
  background-color: ${(props) =>
    props.status === 'waiting'
      ? '#008cffb0'
      : props.status === 'OK'
      ? '#004e0cde'
      : props.status === 'FAIL'
      ? '#ff0000de'
      : 'grey'};
  border-radius: 10px;
`;

const Image = styled.div`
  position: absolute;
  top: 15px;
  border-radius: 1000px;
  width: 200px;
  height: 200px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Captain_John_Smith_gravure_new.jpg/220px-Captain_John_Smith_gravure_new.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-bottom: 20px;
`;
const TextContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10px;
`;
const Text = styled.h4`
  margin-top: 3px;
  color: black;
`;
const Title = styled.h3`
  color: black;
  text-align: center;
`;
const Name = styled.h2`
  color: black;
  text-align: center;
`;
const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
const StatusIcon = styled.img`
  margin-inline: auto;
  margin-top: 0.5%;
`;

export default Credential;
