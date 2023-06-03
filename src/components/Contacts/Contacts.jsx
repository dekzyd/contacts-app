import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Contacts = () => {
  return (
    <Container className="px-4 my-5">
      <Row>
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        <Col className="my-2 px-2">
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src="img/contact_1.png" />
            <Card.Body>
              <Card.Title>Rhoda Aigbe</Card.Title>
              <Card.Text>
                rhaig@hotmail.co.uk
                <br />
                +234-706-523-4786.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src="img/contact_2.png" />
            <Card.Body>
              <Card.Title>Martin Osaze</Card.Title>
              <Card.Text>
                rhaig@hotmail.co.uk
                <br />
                +234-706-523-4786.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src="img/contact_3.png" />
            <Card.Body>
              <Card.Title>Rupert Gbadebo</Card.Title>
              <Card.Text>
                rhaig@hotmail.co.uk
                <br />
                +234-706-523-4786.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
