import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { hideForm, postVC } from "./../store/slices";
import { useState } from "react";

export const VCForm = () => {
  const [data, setData] = useState({
    givenName: "",
    familyName: "",
    gender: "",
    birthDate: "",
  });
  const { show } = useSelector((state) => state.formM);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideForm());
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
    e.preventDefault();

    dispatch(postVC(data));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Verified Credential</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSaveChanges}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Given Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  name="givenName"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Family Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  name="familyName"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select size="sm" name="gender" onChange={handleOnChange}>
                  <option value={""}></option>
                  <option value={"N/A"}>N/A</option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                </Form.Select>
                {/* <Form.Control size="sm" type="text" name='gender' onChange={handleOnChange} /> */}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  name="birthDate"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#626467", borderColor: "#626467" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "#97d700",
              borderColor: "#97d700",
            }}
            type="submit"
            onClick={handleClose}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
