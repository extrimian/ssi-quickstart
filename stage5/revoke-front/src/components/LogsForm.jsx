import { useDispatch } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";
import { hideFormLog } from "./../store/slices";
import { useState } from "react";

export const LogForm = ({ logs }) => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideFormLog());
  };

  const handleNext = () => {
    if (step === logs.length - 1) return;
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step === 0) return;
    setStep(step - 1);
  };
  return (
    <>
      <Row>
        <Col className="float-end">
          <Button
            size="sm"
            style={{
              backgroundColor: "#97d700",
              borderColor: "#97d700",
              margin: "5px",
            }}
            className="mt-2 mb-2"
            disabled={step === 0}
            onClick={handlePrev}
          >
            Req
          </Button>

          <Button
            size="sm"
            style={{
              backgroundColor: "#97d700",
              borderColor: "#97d700",
              margin: "5px",
            }}
            className="mt-2 mb-2"
            disabled={step === 1}
            onClick={handleNext}
          >
            Res
          </Button>
        </Col>
      </Row>

      <div className="bg-light">
        <Row>
          <Col>
            {
              <Form.Label>
                <b>{`${logs[step].recipient} - ${logs[step].event}`}</b>
              </Form.Label>
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <pre>
                <small>{JSON.stringify(logs[step].data, null, 2)}</small>
              </pre>
            </div>
          </Col>
        </Row>
      </div>

      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </>
  );
};
