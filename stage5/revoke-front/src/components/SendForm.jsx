import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { sendVC } from "./../store/slices";
import { useState } from "react";

export const SendForm = ({ id, send, setSend }) => {
  const [data, setData] = useState({
    did: null,
  });
  const { response } = useSelector((state) => state.sendForm);
  const dispatch = useDispatch();

  const handleClose = () => {
    setSend(false);
  };

  const handleOnChange = (e) => {
    if (e.target.name && e.target.value) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSaveChanges = (e) => {
    dispatch(sendVC(data.did, id));
  };

  return (
    <Modal show={send} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Verifable Credential</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSaveChanges}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Destination DID</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  name="did"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "#97d700",
              borderColor: "#97d700",
            }}
            type="submit"
            disabled={response}
            onClick={() => {
              handleSaveChanges();
              handleClose();
            }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
