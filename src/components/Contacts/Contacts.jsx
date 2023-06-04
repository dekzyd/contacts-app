import { useEffect, useState } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { createContact } from "../../graphql/mutations";
import { listContacts } from "../../graphql/queries";

import { v4 as uuid } from "uuid";

const Contacts = () => {
  const [profilePic, setProfilePic] = useState("");
  const [profilePicPaths, setProfilePicPaths] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    cell: "",
  });

  // Get all contacts
  const getContacts = async () => {
    try {
      const contactsData = await API.graphql(graphqlOperation(listContacts));
      const contactsList = contactsData.data.listContacts.items;
      setContacts(contactsList);
      // console.log(contactsList);

      // get contact images
      contacts.map(async (contact, index) => {
        const contactProfilePicPath = contacts[index].profilePicPath;
        try {
          const contactProfilePicPathURI = await Storage.get(
            contactProfilePicPath,
            { expires: 60 }
          );
          setProfilePicPaths([...profilePicPaths, contactProfilePicPathURI]);
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  // Add new contact
  const addNewContact = async () => {
    try {
      const { name, email, cell } = contactData;

      // Upload pic to S3
      Storage.configure({ region: "eu-north-1" });
      const { key } = await Storage.put(`${uuid()}.png`, profilePic, {
        contentType: "image/png",
      });

      const newContact = {
        id: uuid(),
        name,
        email,
        cell,
        profilePicPath: key,
      };
      // persists new contact
      await API.graphql(graphqlOperation(createContact, { input: newContact }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="px-4 my-5">
      <Row>
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        {contacts.map((contact, index) => {
          return (
            <Col key={index} className="my-2 px-2">
              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src={profilePicPaths[index]} />
                <Card.Body>
                  <Card.Title>{contact.name}</Card.Title>
                  <Card.Text>
                    {contact.email}
                    <br />
                    {contact.cell}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="px-4 my-5">
        <Col sm={3}>
          <h2>Add New Contact</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact name"
                value={contactData.name}
                onChange={(evt) =>
                  setContactData({ ...contactData, name: evt.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contact email"
                value={contactData.email}
                onChange={(evt) =>
                  setContactData({ ...contactData, email: evt.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Cell</Form.Label>
              <Form.Control
                type="text"
                placeholder="nnn-nnn-nnnn"
                value={contactData.cell}
                onChange={(evt) =>
                  setContactData({ ...contactData, cell: evt.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control
                type="file"
                accept="image/png"
                onChange={(evt) => setProfilePic(evt.target.files[0])}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={addNewContact}>
              Add Contact &gt;&gt;
            </Button>
            &nbsp;
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
