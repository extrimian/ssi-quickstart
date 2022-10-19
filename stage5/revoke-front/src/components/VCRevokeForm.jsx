import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { hideRevokeForm, changeVCStatus } from "./../store/slices";
import { useState } from "react";
import config from "../config/config.json";

export const VCRevokeFormForm = ({ id, revoke, setRevoke }) => {
  const [data, setData] = useState({
    status: "",
    reason: "",
  });
  const dispatch = useDispatch();

  const handleClose = () => {
    setRevoke(false);
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
    const status = data.status;
    const reason = data.reason;

    dispatch(changeVCStatus(id, status, reason));
  };

  return (
    <Modal show={revoke} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Revoke o Suspend Verified Credential</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSaveChanges}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Status (Revoked or Suspended)</Form.Label>
                <Form.Select size="sm" name="status" onChange={handleOnChange}>
                  <option value={""}></option>
                  <option value={"Revoked"}>Revoked</option>
                  <option value={"Suspended"}>Suspended</option>
                </Form.Select>
                {/* <Form.Control size="sm" type="text" name='status' onChange={handleOnChange} /> */}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Reason</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  name="reason"
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
              backgroundColor: config.features.bottomBarColors[2],
              borderColor: config.features.bottomBarColors[2],
            }}
            onClick={() => {
              handleSaveChanges();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
