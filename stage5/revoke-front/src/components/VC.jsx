import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { SendForm } from "./SendForm";
import VCDetail from "./VCDetail";
import { VCRevokeFormForm } from "./VCRevokeForm";
import config from "../config/config.json";
import axios from "axios";

export const Vc = ({ vc, num }) => {
  const [expand, setExpand] = useState(false);
  const [revoke, setRevoke] = useState(false);
  const [send, setSend] = useState(false);
  const [status, setStatus] = useState("");
  const { givenName, familyName } = vc.credentialSubject;
  const type = vc.type[1];

  console.log("vc-status", status);
  const handleSendForm = () => {
    setSend(true);
  };

  const handleForm = () => {
    setRevoke(true);
  };

  const getStatus = async (url, cb) => {
    await axios.post(url).then((d) => (d.data ? cb("Revoked") : cb("Valid")));
  };
  useEffect(() => {
    getStatus(vc.credentialStatus.id, setStatus);
  }, [vc.credentialStatus.id, revoke]);

  return (
    <>
      {send && <SendForm id={vc.id} send={send} setSend={setSend} />}
      {revoke && (
        <VCRevokeFormForm id={vc.id} revoke={revoke} setRevoke={setRevoke} />
      )}

      <tr>
        <td onClick={() => setExpand(!expand)}>{type}</td>
        <td onClick={() => setExpand(!expand)}>{givenName}</td>
        <td onClick={() => setExpand(!expand)}>{familyName}</td>
        <td onClick={() => setExpand(!expand)}>{status}</td>

        {status !== "Revoked" && (
          <td>
            <Button
              size="sm"
              style={{
                backgroundColor: config.features.bottomBarColors[0],
                borderColor: config.features.bottomBarColors[0],
              }}
              onClick={handleForm}
            >
              Revoke
            </Button>
          </td>
        )}
      </tr>
      {expand && (
        <>
          <tr className="expand">
            <td colSpan="8">
              <VCDetail id={vc.id} />
            </td>
          </tr>
        </>
      )}
    </>
  );
};
