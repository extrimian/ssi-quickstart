import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <LeftLog>
        <TopContainer>
          <Title>ACCOUNT LOGIN</Title>
        </TopContainer>
        <InnerContainer>
          <Label>Username: </Label>
          <Input type="text" />
          <Label>Password: </Label>
          <Input type="password" />
        </InnerContainer>
        <Button
          onClick={() => {
            navigate("/home");
          }}
        >
          Accept
        </Button>
      </LeftLog>
      <RightLog></RightLog>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  height: 60%;
  width: 40%;
  display: flex;
  flex-direction: row;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 12%;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
`;
const RightLog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 10%;
  height: 100%;
  background-color: black;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;
const LeftLog = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(238, 238, 238);
  justify-content: center;
  width: 90%;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
const Title = styled.h2`
  color: black;
  text-align: center;
`;
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 60%;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-inline: 20%;
`;
const Input = styled.input`
  width: 100%;
  height: 8%;
  margin-inline: auto;
  margin-top: 5%;
  background-color: rgb(200, 200, 200);
  border: 2px solid rgb(190, 190, 190);
`;
const Label = styled.label`
  text-align: left;
`;
const Button = styled.button`
  width: 30%;
  height: 8%;
  background-color: black;
  border-radius: 5px;
  border-style: solid;
  border-color: black;
  color: white;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #151515;
  }
`;
export default LogIn;
