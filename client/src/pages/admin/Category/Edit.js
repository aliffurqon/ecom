//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import component Bootstrap React
import { Card, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dan params dari react router dom
import { useHistory, useParams } from "react-router-dom";

function EditCategory() {
  //state
  const [category_name, setName] = useState("");

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
    const response = await axios.get(`http://localhost:3001/category/update/${id}`);
    //get response data
    const data = await response.data;

    //assign data to state
    setName(data.category_name);
  };

  // //function "updatePost"
  const updateCategory = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:3001/category/update/${id}`, {
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

              <Form onSubmit={updateCategory}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" value={category_name} onChange={(e) => setName(e.target.value)} placeholder="Insert Category Name" />
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

export default EditCategory;
