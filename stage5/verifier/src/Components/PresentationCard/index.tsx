import { Container, Title, Text, ImportantText, Verified } from './styles';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { acknowledgement } from '../../Mocks/acknowledgement';

interface Props {
  element: any;
}

const PresentationCard: React.FC<Props> = ({ element }) => {
  const [onHover, setOnHover] = useState(false);
  const [verified, setIsVerified] = useState(false);
  const verification = () => {
    if (!verified) {
      setIsVerified(true);
      console.log('request ----> ' + JSON.stringify(acknowledgement));
    }
  };
  return (
    <Container
      onClick={() => verification()}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Title>{element.from}</Title>
      <ImportantText>{element.type}</ImportantText>
      <Text>COVID-19 Vaccination Certificate</Text>
      <Text>aqsdasddddddddddddddddddd</Text>
      <Verified verified={verified} hover={onHover}>
        {verified ? <AiOutlineCheck /> : <IoMdClose />}
      </Verified>
    </Container>
  );
};

export default PresentationCard;
