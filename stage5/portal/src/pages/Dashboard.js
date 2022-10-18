import { useCallback, useMemo, useState } from "react";
import { checkMobileBrowser } from "../utils";
import * as services from "../api";
import Layout from "../components/Layout";
import styled, { css } from "styled-components";
import { lighten, transparentize } from "polished";
import Input from "../components/Input";
import Button from "../components/Button";
import i18n from "../locale";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const isMobile = checkMobileBrowser();
  const [invitation, setInvitation] = useState(null);
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    givenName: "",
    familyName: "",
    phone: "",
    email: "",
    birthDate: "",
  });

  const disabled = useMemo(
    () => Object.values(data).some((value) => value === ""),
    [data]
  );

  const getConnection = useCallback(async () => {
    setLoading(true);
    try {
      const id = await services.getUserId({
        givenName: data.givenName,
        familyName: data.familyName,
        telephone: data.phone,
        email: data.email,
        birthDate: data.birthDate,
        nationality: "Argentinian",
      });

      const goalCode = "streamlined-vc";
      const { data: url } = isMobile
        ? await services.getDeeplink({
            goalCode,
            userId: id,
            credentialContextIds: ["extrimian-card"],
          })
        : await services.getQR({
            goalCode,
            userId: id,
            credentialContextIds: ["extrimian-card"],
          });
      setInvitation(
        isMobile ? (
          <a href={url}>
            <strong>{i18n.t("invitation")}</strong>
          </a>
        ) : (
          <img
            src={url}
            alt="QR Invitation"
            style={{
              width: "100%",
            }}
          />
        )
      );
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, [data, isMobile]);

  const reset = useCallback(() => {
    setInvitation(null);
    setData({
      givenName: "",
      familyName: "",
      phone: "",
      email: "",
      birthDate: "",
    });
  }, []);

  return (
    <Layout>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        i18n={i18n}
        isMobile={isMobile}
      />
      <Wrapper mobile={isMobile}>
        <Side mobile={isMobile}>
          <Title>
            <span style={{ color: "#98CD0D" }}>Extrimian </span>
            Agent
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Subtitle>
              <div style={{ color: "#98CD0D", marginBottom: -8 }}>
                {i18n.t("installation")}
              </div>
              <div> {i18n.t("firstSteps")}</div>
            </Subtitle>
            <Steps>
              <Step>1. {i18n.t("step1")}</Step>
              <Step>2. {i18n.t("step2")}</Step>
              <Step>3. {i18n.t("step3")}</Step>
              <Step>4. {i18n.t("step4")}</Step>
            </Steps>
          </div>
        </Side>
        <Separator mobile={isMobile} />
        <Side
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          mobile={isMobile}
        >
          <Subtitle
            style={{
              alignItems: "center",
            }}
          >
            {i18n.t("generateYour")}
            <div style={{ color: "#98CD0D", marginTop: -5 }}>
              {i18n.t("credential")}
            </div>
          </Subtitle>
          {invitation ? (
            <InvitationWrapper>
              {invitation}
              <Button
                style={{
                  marginTop: 20,
                }}
                onClick={() => {
                  reset();
                }}
              >
                {i18n.t("reset")}
              </Button>
            </InvitationWrapper>
          ) : (
            <Form>
              <Input
                title={i18n.t("name")}
                value={data.givenName}
                onChange={(value) => setData({ ...data, givenName: value })}
              />
              <Input
                title={i18n.t("lastname")}
                value={data.familyName}
                onChange={(value) => setData({ ...data, familyName: value })}
              />
              <Input
                title={i18n.t("phone")}
                value={data.phone}
                onChange={(value) => setData({ ...data, phone: value })}
              />
              <Input
                title={i18n.t("email")}
                value={data.email}
                onChange={(value) => setData({ ...data, email: value })}
              />
              <Input
                title={i18n.t("birthDate")}
                value={data.birthDate}
                onChange={(value) => setData({ ...data, birthDate: value })}
                type="date"
              />
              <Button
                style={{
                  marginTop: 20,
                }}
                onClick={() => {
                  getConnection();
                }}
                disabled={disabled || loading}
              >
                {i18n.t("generate")}
              </Button>
            </Form>
          )}
        </Side>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 600px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px ${transparentize(0.5, "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin-top: 40px;

  ${({ mobile }) => {
    if (mobile) {
      return css`
        width: 100%;
        flex-direction: column;
        padding: 20px;
        box-shadow: none;
      `;
    }
  }}
`;

const Separator = styled.div`
  height: 100%;
  width: 2px;
  background-color: ${transparentize(0.7, "black")};
  border-radius: 10px;
`;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  position: relative;
`;

const Side = styled.div`
  flex: 1;
  padding: 10px 0;
  margin: 20px;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;

  ${({ mobile }) => {
    if (mobile) {
      return css`
        width: 100%;
        margin: 0;
      `;
    }
  }}
`;

const Title = styled.div`
  font-weight: bold;
  color: ${lighten(0.3, "black")};
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${lighten(0.4, "black")};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Steps = styled.div`
  display: grid;
  row-gap: 7px;
`;

const Step = styled.div`
  font-size: 12px;
  color: ${lighten(0.4, "black")};
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Dashboard;
