import { useState } from "react";
import { Container } from "./styles";
import { requestPresentation } from "../../Mocks/requestPresentation";

interface Props {
  element: any;
  index: number;
}
const PresentationProposalCard: React.FC<Props> = ({ element, index }) => {
  const [isValidated, setIsValidated] = useState(false);

  const validate = () => {
    if (!isValidated) {
      setIsValidated(true);
      console.log("request ----> " + JSON.stringify(requestPresentation));
    }
  };

  return (
    <Container onClick={validate} validated={isValidated}>
      {index + " - " + element.from}
    </Container>
  );
};

export default PresentationProposalCard;
