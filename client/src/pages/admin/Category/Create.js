//import hook useState from react
import { useState } from "react";

//import component Bootstrap React
import { Card, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dari react router dom
import { useHistory } from "react-router-dom";

function CreateCategory() {
  //state
  const [category_name, setName] = useState("");

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  //method "storePost"
  const storeCategory = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .post("http://localhost:3001/category/add", {
        category_name: category_name,
      })
      .then(() => {
        //redirect
        history.push("/category");
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

              <Form onSubmit={storeCategory}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" value={category_name} onChange={(e) => setName(e.target.value)} placeholder="Insert Category Name" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  SIMPAN
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateCategory;
