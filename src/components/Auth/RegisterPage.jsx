/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterPage = () => {
  return (
    <Container>
      <Row classname="px-4 my-5">
        <Col>
          <h1>Register</h1>
        </Col>
      </Row>
      <Row classname="px-4 my-5">
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                minLength="8"
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm</Form.Label>
              <Form.Control
                type="password"
                minLength="8"
                placeholder="Confirm password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register &gt;&gt;
            </Button>
            &nbsp;
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
