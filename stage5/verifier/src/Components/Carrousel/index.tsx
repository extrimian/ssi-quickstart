import styled from 'styled-components';
import Card from '../CarrouselCard';

const Carrousel = ({ data, setDisplay, i18n }: any) => {
  return (
    <Container>
      <Card setDisplay={setDisplay} element={data} i18n={i18n} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
export default Carrousel;
