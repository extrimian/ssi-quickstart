import { useContext, useEffect, useState } from 'react';
import storageMock from '../../dwn-client/storage';

import Verification from '../../Components/Verification';
import Carrousel from '../../Components/Carrousel';
import Credential from '../../Components/Credential/index.jsx';
import { Container, InnerContainer, LowerContainer } from './styles';
import { Context } from '../../context/AppContext';
import Navbar from '../../Components/Navbar';
import i18n from '../../locale';

interface PresentationData {
  data: any;
  descriptor: any;
}
const Home = () => {
  const { state } = useContext(Context);

  const [VerificationDisplay, setVerificationDisplay] = useState(false);
  const [CredentialDisplay, setCredentialDisplay] = useState(false);
  const [presentationProposals, setPresentationProposals] = useState([]);
  const [presentations, setPresentations] = useState<PresentationData[]>([]);
  const [language, setLanguage] = useState('en');

  const [currentThread, setCurrentThread] = useState('');
  const [status, setStatus] = useState('waiting');
  const [data, setData] = useState({});
  const [result, setResult] = useState('waiting');

  const getPresentations = async (param: any, cb: any, state: any) => {
    let messages = await storageMock.getMessages();
    let presentationArray = state;
    for (let i = 0; i < messages.length; i++) {
      if (typeof messages[i].data === 'string') {
        messages[i].data = JSON.parse(messages[i].data);
      }
    }
    messages = messages.filter((msg: any) => msg.data.type == param);
    if (
      param === 'https://didcomm.org/present-proof/3.0/propose-presentation'
    ) {
      if (currentThread === '') {
        setCurrentThread(messages[0]?.descriptor?.objectId || '');
      }
    }
    messages = presentationArray.concat(messages);

    if (state.length === 0) {
      cb(messages);
    }
  };

  const getStatus = async (state: string, thread: string) => {
    let messages = await storageMock.getMessages();
    if (state === 'waiting') {
      messages = messages.filter(
        (msg: any) =>
          msg.data.type == 'https://didcomm.org/present-proof/3.0/ack'
      );
      setResult(messages[0]?.data?.body.status);
    }
  };
  const resetStatus = () => {
    setVerificationDisplay(false);
    setCredentialDisplay(false);
    setPresentationProposals([]);
    setPresentations([]);
    setCurrentThread('');
    setStatus('waiting');
    setData({});
    setResult('waiting');
    storageMock.clearMessages();
  };

  const pullMessages = async () => {
    state.dwnClient.pullNewMessages();
    getPresentations(
      'https://didcomm.org/present-proof/3.0/propose-presentation',
      setPresentationProposals,
      presentationProposals
    );
    getPresentations(
      'https://didcomm.org/present-proof/3.0/presentation',
      setPresentations,
      presentations
    );
    getStatus(result, currentThread);
  };

  useEffect(() => {
    if (state.dwnClient) {
      pullMessages();
      const presentationsInterval = setInterval(() => {
        pullMessages();
      }, 10000);
      return () => clearInterval(presentationsInterval);
    }
  }, [state.dwnClient]);

  useEffect(() => {
    if (currentThread !== '') {
      setStatus('loading');
    } else {
      setStatus('waiting');
    }
  }, [currentThread]);

  useEffect(() => {
    if (presentations.length > 0) {
      setVerificationDisplay(false);
      setCredentialDisplay(true);
      setData(presentations[0]);
    }
  }, [presentations]);

  return (
    <Container>
      <Navbar language={language} setLanguage={setLanguage} i18n={i18n} />
      <InnerContainer>
        {VerificationDisplay ? (
          <Verification
            setDisplay={setVerificationDisplay}
            setCredDisplya={setCredentialDisplay}
            status={status}
            i18n={i18n}
          />
        ) : !CredentialDisplay ? (
          <Carrousel setDisplay={setVerificationDisplay} i18n={i18n} />
        ) : (
          <Credential
            setDisplay={setCredentialDisplay}
            data={data}
            status={result}
            reset={resetStatus}
            i18n={i18n}
          />
        )}
      </InnerContainer>
      {/* <LowerContainer>
        <div></div>
      </LowerContainer> */}
    </Container>
  );
};

export default Home;
