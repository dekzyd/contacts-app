import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src="img/logo.png" fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Contacts App</h1>
          <p className="mt-4">
            Lorem ipsum
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            tempore, aliquam incidunt culpa dolore repellat mollitia voluptas
            nobis nihil earum expedita provident cum itaque autem quae ipsa!
            Dolorem placeat dolor architecto alias error quibusdam. Facere
            tempora fugit fuga eveniet sit omnis maiores adipisci. Libero,
            recusandae!
          </p>
          <Link to={{ pathname: "/contacts" }}>
            <Button variant="outline-primary">View Contacts &gt;&gt;</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
