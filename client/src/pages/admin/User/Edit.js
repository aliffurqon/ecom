//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import component Bootstrap React
import { Card, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dan params dari react router dom
import { useHistory, useParams } from "react-router-dom";

function EditUser() {
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil method "getData"
    getData();
  }, []);

  //function "getData"
  const getData = async () => {
    //get data from server
    const response = await axios.get(`http://localhost:3001/users/update/${id}`);
    //get response data
    const data = await response.data;

    //assign data to state
    setName(data.name);
    setEmail(data.email);
    setGender(data.gender);
    setAddress(data.address);
  };

  // //function "updatePost"
  const updateUser = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:3001/users/update/${id}`, {
        name: name,
        email: email,
        gender: gender,
        address: address,
      })
      .then(() => {
        //redirect
        history.push("/users");
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              {validation.errors && (
                <Alert variant="danger">
                  <ul class="mt-0 mb-0">
                    {validation.errors.map((error, index) => (
                      <li key={index}>{`${error.param} : ${error.msg}`}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <Form onSubmit={updateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insert User Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insert Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Insert Gender" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Insert Address" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  UPDATE
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EditUser;
