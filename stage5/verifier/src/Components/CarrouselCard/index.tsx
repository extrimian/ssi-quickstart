import styled from 'styled-components';
const Card = ({ setDisplay, element, i18n }: any) => {
  return (
    <Container>
      <UpperContainer>
        <Title>Extrimian Card</Title>
      </UpperContainer>
      <LowerContainer>
        <TextContainer>
          <Text>{i18n.t('remember')}</Text>
        </TextContainer>
        <Button
          onClick={() => {
            setDisplay(true);
          }}
        >
          {i18n.t('verify')}
        </Button>
      </LowerContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000000af;
`;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;
const Title = styled.h1`
  color: white;
  font-size: 20px;
`;
const Button = styled.button`
  width: 40%;
  background-color: black;
  border: 1px solid white;
  padding: 5px;
  border-radius: 3px;
  font-size: 14px;
  margin-inline: auto;
  color: white;
  margin-top: 10px;
  &:hover {
    background-color: #252525;
    cursor: pointer;
  }
`;
const TextContainer = styled.div`
  width: 95%;
`;
const Text = styled.p`
  color: black;
  text-align: center;
`;

export default Card;
