import styled from 'styled-components';

import { IoLanguage } from 'react-icons/io5';
import { checkMobileBrowser } from '../../utils';

const Navbar = ({ language, setLanguage, i18n, ...props }) => {
  const isMobile = checkMobileBrowser();

  return (
    <Container
      {...props}
      style={{
        gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr',
      }}
    >
      {!isMobile && <Column></Column>}
      <Column
        style={{
          textAlign: 'center',
          fontSize: isMobile ? 15 : 20,
        }}
      >
        <img
          src="https://extrimian.io/wp-content/uploads/2021/12/extrimian_logo.svg"
          alt="Logo"
          height={isMobile ? 30 : 40}
          style={{ marginRight: 10 }}
        />{' '}
        eServices
      </Column>
      <Column style={{ justifyContent: 'flex-end' }}>
        <LanguageSelector
          onClick={() => {
            i18n.locale = language === 'en' ? 'es' : 'en';
            setLanguage(language === 'en' ? 'es' : 'en');
          }}
        >
          <IoLanguage style={{ marginRight: 10 }} />
          {i18n.t('language') + ': '}
          {language === 'en' ? 'EN' : 'ES'}
        </LanguageSelector>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  background-color: black;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
`;

const Column = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: white;
  display: flex;
`;

const LanguageSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

export default Navbar;
