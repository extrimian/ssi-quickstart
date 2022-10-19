import { useEffect, useState } from "react";
import { Card, Container, Table, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVCs, showForm, showFormLog, hideFormLog } from "./../store/slices";
import { Vc } from "./VC";
import { VCForm } from "./VCForm";
import { LogForm } from "./LogsForm";
import Pagination from "./Pagination";
import config from "../config/config.json";

let ROW_PER_PAGE = 8;
export const VCGrid = () => {
  const { logs, show } = useSelector((state) => state.logs);
  const { data } = useSelector((state) => state.vc);
  const dispatch = useDispatch();

  const handleForm = () => {
    dispatch(showForm());
  };
  const handleClick = () => {
    if (!show) {
      dispatch(showFormLog());
    } else {
      dispatch(hideFormLog());
    }
  };
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * ROW_PER_PAGE;
  const selectedData = data.slice(startIndex, startIndex + ROW_PER_PAGE);
  const pages = Math.ceil(data.length / ROW_PER_PAGE);

  function handlePageChange(page) {
    setPage(page);
  }

  function handleForward() {
    page + 1 > pages ? setPage(page) : setPage(page + 1);
  }

  function handleBackward() {
    page === 1 ? setPage(1) : setPage(page - 1);
  }

  useEffect(() => {
    dispatch(getVCs());
  }, [dispatch]);

  return (
    <>
      <br />
      <Container>
        <VCForm />

        <Row>
          <Col>
            <Card>
              <Card.Body>
                {config.name === "Extrimian App" && (
                  <>
                    <Button
                      size="sm"
                      style={{
                        backgroundColor: config.features.bottomBarColors[0],
                        borderColor: config.features.bottomBarColors[2],
                      }}
                      className="mt-2 mb-2 float-end"
                      onClick={handleClick}
                    >
                      Show logs
                    </Button>
                  </>
                )}
                <Table striped bordered hover responsive="sm" size="sm">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Given Name</th>
                      <th>Family Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedData.length > 0 &&
                      selectedData?.map((vc, index) => {
                        return <Vc key={vc._id} vc={vc} num={index + 1} />;
                      })}
                  </tbody>
                </Table>
                {
                  <Pagination
                    totalPages={pages}
                    handlePageChange={handlePageChange}
                    handleForward={handleForward}
                    handleBackward={handleBackward}
                    currentPage={page}
                  />
                }
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            {show && (
              <Card>
                <Card.Body>
                  {logs.length > 0 && <LogForm logs={logs}></LogForm>}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
